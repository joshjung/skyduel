var GameObject = require('./GameObject'),
  Bird = require('./Bird'),
  Wind = require('./Wind'),
  Cloud = require('./Cloud'),
  Smoke = require('./Smoke'),
  Player = require('./Player'),
  PlanePart = require('./PlanePart'),
  HashArray = require('hasharray');

/*===================================================*\
 * Bird()
\*===================================================*/
var World = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  setState: function (value) {
    for (var key in value)
      if (key != 'children')
        this[key] = value[key];

    if (value.hasOwnProperty('children'))
      this.setChildrenState(value.children);
  },
  getState: function() {
    if (!this.inited)
      return {};

    return {
      id: this.getId(),
      width: this.width,
      height: this.height,
      tileWidth: this.tileWidth,
      tileHeight: this.tileHeight,
      tiles: this.tiles,
      type: this.type,
      children: this.getChildrenState()
    };
  },
  getPlayers: function () {
    return this.getChildren().getAsArray('player');
  },
  getPlayerByUsername: function (username) {
    return this.getChildren().get(username);
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (game) {
		this.game = game;
    this.players = new HashArray(['_id', 'username', 'type']);
    
    this.debug = false;

    this._super(null, 'root');

    this.type = 'world';
  },
  update: function (elapsed) {
    if (!elapsed)
      return;
       
    this.debugTracker = this.debug ? new HashArray(['id', 'type']) : undefined;

    this._super(elapsed, this.debugTracker);
  },
  buildChildrenObject: function () {
    this.setChildren(new HashArray(['_id', 'username', 'type']));
  },
  newChildFromState: function (childState) {
    var child;

    if (childState.type == 'bird')
      child = new Bird(this, childState.id);
    else if (childState.type == 'player')
    {
      // Check to see if maybe we already have this child and it is being respawned.
      if (this.players.get(childState.id))
        child = this.players.get(childState.id);
      else
      {
        child = new Player(this, childState.id, childState.username);
        this.players.add(child);
      }
    }
    else if (childState.type == 'smoke')
      child = new Smoke(this, childState.id);
    else if (childState.type == 'planepart')
      child = new PlanePart(this, childState.id);
    else if (childState.type == 'wind')
      child = new Wind(this, childState.id);
    else if (childState.type == 'cloud')
      child = new Cloud(this, childState.id);
    else
    {
      throw Error('Cannot figure out what the hell a \'' + childState.type + '\' is.');
    }

    child.setState(childState);

    return child;
  },
  destroyChildById: function (id) {
    this._super(id);
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = World;