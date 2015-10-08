var React = require('react')
var AppDispatcher = require('../dispatcher/app_dispatcher')
var TodoStore = require('../stores/todo_store');

var TodoApp = React.createClass({

  componentDidMount: function() {  
    TodoStore.bind('change', this._todoListChanged);
  },

  render: function(){
    return (
      <div>
        <p className="name">React App</p>
        <div>
          <button onClick={ this._createNewItem }>New Item</button>
        </div>
      </div>
    );
  },

  // ACTIONS: 
  _createNewItem: function( event ) {
    AppDispatcher.dispatch({
      eventName: 'new-item',
      newItem: { text: 'Caleb Thill' } // example data for right now...
    });
  },

  _todoListChanged: function() {
    console.log("The todo list changed")
  }

});

module.exports = TodoApp;