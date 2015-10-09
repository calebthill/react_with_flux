var AppDispatcher = require('../dispatcher/app_dispatcher');

var TodoActions = {

  _createNewItem: function( text ) {
    AppDispatcher.dispatch({
      eventName: 'new-item',
      newItem: { text: text } 
    });
  },

  _removeItem: function( id ) {
    AppDispatcher.dispatch({
      eventName: 'remove-item',
      id: id
    });
  }
};

module.exports = TodoActions;