var AppDispatcher = require('../dispatcher/app_dispatcher');

var TodoActions = {

  _createNewItem: function( text ) {
    AppDispatcher.dispatch({
      eventName: 'new-item',
      newItem: { text: text } 
    });
  }
};

module.exports = TodoActions;