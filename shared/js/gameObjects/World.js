var GameObject = require('../GameObject'),
  Bird = require('./Bird'),
  Player = require('./Player'),
  HashArray = require('../lib/HashArray');

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
  /*=========================*\
   * Methods
  \*=========================*/
  init: function () {
    console.log('World init!');
    this.type = 'world';
    this._super(null, 'root');
  },
  update: function (elapsed) {
    if (!elapsed)
      return;
       
    this._super(elapsed);
  },
  buildChildrenObject: function () {
    this.setChildren(new HashArray(['_id', 'uid', 'type']));
  },
  newChildFromState: function (childState) {
    var child;

    if (childState.type == 'bird')
      child = new Bird(this, childState.id);
    else if (childState.type == 'player')
      child = new Player(this, childState.id);
    else
    {
      console.log(childState);
      throw Error('Cannot figure out what the hell a \'' + childState.type + '\' is.');
    }

    child.setState(childState);

    return child;
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = World;