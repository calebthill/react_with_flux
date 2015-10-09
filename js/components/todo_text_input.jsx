var AppDispatcher = require('../dispatcher/app_dispatcher')
var TodoStore = require('../stores/todo_store');
var TodoActions = require('../actions/todo_actions');

var TodoTextInput = React.createClass({

  getInitialState: function() {
    return {
      value: ''
    };
  },

  handleChange: function(evt) {
    this.setState({
      value: evt.target.value
    });
  },

  render: function(){
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={TodoActions._createNewItem.bind(null, this.state.value)}>Add TODO</button>
      </div>
    );
  }
});

module.exports = TodoTextInput;