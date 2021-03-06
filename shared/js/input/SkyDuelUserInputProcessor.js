/*===================================================*\
 * Globals
\*===================================================*/
var UA = require('./SkyDuelUserActions'),
  HashArray = require('hasharray');

/*===================================================*\
 * SkyDuelUserInputProcessor()
\*===================================================*/
var SkyDuelUserInputProcessor = function(game) {
  this.game = game;
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelUserInputProcessor.prototype = {
  /*===========================*\
   * Methods
  \*===========================*/
  update: function (userInput, elapsed, username) {
    var actions = new HashArray(['id', 'name']);

    if (userInput.left)
      actions.add(UA.BANK_LEFT);  
    else if (userInput.right)
      actions.add(UA.BANK_RIGHT);  

    if (userInput.up)
      actions.add(UA.ACCELERATE);
    else if (userInput.down)
      actions.add(UA.DECELERATE);

    if (userInput.trigger)
      actions.add(UA.TRIGGER);

    this.game.applyUserAction(actions, elapsed, username);
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = SkyDuelUserInputProcessor;