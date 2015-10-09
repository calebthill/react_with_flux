var AppDispatcher = require('../dispatcher/app_dispatcher')
var TodoStore = require('../stores/todo_store');

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
        <button onClick={this._createNewItem.bind(null, this.state.value)}>Add TODO</button>
      </div>
    );
  },

  // ACTION: 
  _createNewItem: function( text ) {
    AppDispatcher.dispatch({
      eventName: 'new-item',
      newItem: { text: text } 
    });
  }
});

module.exports = TodoTextInput;