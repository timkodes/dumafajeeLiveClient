define(function(require){
  var ViewRegistry = require('./viewRegistry');
ViewRegistry.register('Button.SimpleButton',require('framework/dumafajees/buttons/simple/simpleButtonView'));
ViewRegistry.register('Toolbar.Horizontal',require('framework/dumafajees/toolbars/horizontal/horizontalToolbarView'));
ViewRegistry.register('Region.Header',require('framework/dumafajees/regions/header/headerRegionView'));
});