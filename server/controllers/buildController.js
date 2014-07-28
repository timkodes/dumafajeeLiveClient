var fs = require('fs');
var spawn = require('child_process').spawn;
var totalTasks = 2;
var tasks = 0;

module.exports = {
  build: function(req, res){
    console.log('building');
    this.response = res;
    this.writeToViewMapping(req.body);
    delete req.body['usedIds'];
    this.writeTemplateToApp(req.body);
  },
  writeToViewMapping: function(template){
    var file = "define(function(require){\n  var ViewRegistry = require('./viewRegistry');\n"
    var mappingKeys = Object.keys(template.usedIds);
    var register = '';
    var self = this;
    var mappings = mappingKeys.forEach(function(key){
      register += this.getRegisterString(template.usedIds, key);
    }.bind(self));

    file += register + '});';

    fs.writeFile(__dirname + '/../../public/js/framework/registry/view/viewMapping.js', file, function(err){
      if (err) throw err;
      console.log('finished writing view mapping');
      self.checkBuildTasks.call(self);
    });
  },
  checkBuildTasks: function(){
    tasks++;
    if(tasks === totalTasks){
      console.log('done');
      this.response.writeHead(200);
      this.response.end();
    }
  },
  getRegisterString: function(usedIds, key){
    return "ViewRegistry.register('" + key + "',require('" + usedIds[key]  + "'));\n";
  },
  writeTemplateToApp: function(template){
    var self = this;
    fs.readFile(__dirname + '/../../public/js/framework/app.js', {encoding:'utf8'}, function (err, data){
      if (err) throw err;
      var stringifiedData = data.toString();
      var injected = stringifiedData.replace(/CompoundModel\(.*\)/, ['CompoundModel(', JSON.stringify(template), ')'].join(''));
      fs.writeFile(__dirname + '/../../public/js/framework/app.js', injected, function(err){
        if (err) throw err;
        var command = spawn(__dirname + '/../../gruntBuild.sh');
        command.on('close',
          function(code) {
            console.log('finished writing app template');
            self.checkBuildTasks.call(self);
        });
      });
    });
  }
};