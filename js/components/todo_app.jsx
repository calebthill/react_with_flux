var React = require('react')
var AppDispatcher = require('../dispatcher/app_dispatcher')
var TodoTextInput = require('./todo_text_input')
var TodoStore = require('../stores/todo_store');

function getTodoState() {
  return {
    allTodos: TodoStore._getAll()
  }
}

var TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {  
    TodoStore.bind('change', this._todoListChanged);
  },

  componentWillUnmount: function() {
    TodoStore.unbind('change', this._todoListChanged)
  },

  render: function(){
    var allTodos = this.state.allTodos;
    var todos = []

    for (var key in allTodos) {
      todos.push(<li key={key}>{ allTodos[key].text }</li>);
    }


    return (
      <div>
        <p className="name">React App</p>
        <ul>
          { todos }
        </ul>
        <TodoTextInput />
      </div>
    );
  },

  _todoListChanged: function() {
    this.setState(getTodoState());
  }
});

module.exports = TodoApp;