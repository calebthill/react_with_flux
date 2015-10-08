var AppDispatcher = require('../dispatcher/app_dispatcher');

AppDispatcher.register(function(action) {
  console.log(action)
  switch(action.eventName) {
    case 'new-item':
      text = action.newItem.text.trim();
      if (text !== '') {
        // Need to create a new item and then emit change to the 'TODO store'
        console.log("Item added")
      }
      break;

    default:
      // Do nothing for now...
  }
});