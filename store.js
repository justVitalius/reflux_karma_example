var Reflux = require('reflux');
var Actions = require('./actions');

var first = require('./helper').first();

var Store = Reflux.createStore({
  listenables: [Actions],

  init: function(){
    this.buttons = 'Initial Store in ' + first;
  },

  onTransition: function(){
    this.buttons = 'Handle Transition action in ' + first;
  },

  getButtons: function(){
    return this.buttons;
  }
});

module.exports = Store;