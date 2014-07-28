define(function(require){
  var ModelMapping = require('framework/registry/model/modelMapping');
  var ViewMapping = require('framework/registry/view/viewMapping');
  var CompoundModel = require('framework/dumafajees/base/models/baseCompoundModel');
  var TemplateView = require('framework/dumafajees/templates/templateView');
  
  return {
    init: function(){
      var templateModel = new CompoundModel({"dumafajeeId":"Template","type":"compound","path":"","items":[{"dumafajeeId":"Button.SimpleButton","type":"content","path":"framework/dumafajees/buttons/simple/simpleButtonView","content":"default","displayProperties":[{"long":true,"display":"Description","value":"","disabled":false},{"display":"Something else","value":"Testing","long":true,"disabled":false}]},{"dumafajeeId":"Toolbar.Horizontal","type":"compound","path":"framework/dumafajees/toolbars/horizontal/horizontalToolbarView","items":[],"displayProperties":[{"long":true,"display":"Description","value":"","disabled":false},{"display":"Something else","value":"Testing","long":true,"disabled":false}]},{"dumafajeeId":"Region.Header","type":"compound","path":"framework/dumafajees/regions/header/headerRegionView","items":[],"displayProperties":[{"long":true,"display":"Description","value":"","disabled":false},{"display":"Something else","value":"Testing","long":true,"disabled":false}]}],"displayProperties":[{"long":true,"display":"Description","value":"","disabled":false},{"display":"Something else","value":"Testing","long":true,"disabled":false}]});
      var templateView = new TemplateView({
        model:templateModel,
        $container:'body'
      })
    }
  };
});