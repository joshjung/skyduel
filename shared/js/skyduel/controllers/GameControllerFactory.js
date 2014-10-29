var HashArray = require('hasharray');

var GAME_TYPES = new HashArray(['type', 'label', 'description', 'id']);

GAME_TYPES.add({
  type: 'freeforall',
  label: 'Arcade',
  id: '0',
  description: 'Battle in a single screen with wrapping enabled for high-intensity dog-fighting.',
  enabled: true,
  clazz: require('./GameControllerArcade')
});

GAME_TYPES.add({
  type: 'team',
  label: 'Axis vs. Allies',
  id: '1',
  description: 'Join either the axis or allies in a battle for map control.',
  enabled: false,
  clazz: require('./GameControllerAxisVsAllies')
});

module.exports = {
  list : function () {
    return GAME_TYPES.all;
  },
  hashArray : function () {
    return GAME_TYPES;
  },
  newInstanceOf: function (key) {
    var type = GAME_TYPES.get(key);
    var fn = type.clazz;
    return new fn();
  }
}