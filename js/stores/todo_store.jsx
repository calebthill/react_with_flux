var AppDispatcher = require('../dispatcher/app_dispatcher');
var MicroEvent = require('../../packages/microevent.js');

var items = {};
var idCounter = Object.keys(items).length;

var TodoStore = {

  _create: function(text) {
    var id = ++idCounter;
    items[id] = {
      id: id,
      text: text,
      isComplete: false
    }
  },

  _destroy: function(id) {
    delete items[id];
  },

  _getAll: function() {
    return items;
  }
}

// MicroEvent.js is a event emitter library.
MicroEvent.mixin(TodoStore); 

AppDispatcher.register(function(action) {
  switch(action.eventName) {
    case 'new-item':
      text = action.newItem.text.trim();
      if (text !== '') {
        TodoStore._create(text);
        TodoStore.trigger('change')
        console.log(items)
      }
      break;

    case 'remove-item':
      TodoStore._destroy(action.id)
      TodoStore.trigger('change')
      break;

    default:
      // Do nothing for now...
  }
  return true
});

module.exports = TodoStore;

