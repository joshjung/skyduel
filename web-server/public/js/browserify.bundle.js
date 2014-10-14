(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Library
var isClient = true;

require("./game-server/node_modules/jclass/lib/jclass.min.js");

// Shared

require("./shared/js/lib/HashArray.js");
require("./shared/js/characteristics/CharacteristicManager.js");
require("./shared/js/characteristics/Characteristic_Physics.js");
require("./shared/js/characteristics/Characteristic_ScreenWrapping.js");
require("./shared/js/characteristics/Characteristic_DestroyOffScreen.js");
require("./shared/js/characteristics/Characteristic_ShootsBullets.js");
require("./shared/js/gameObjects/Smoke.js");
require("./shared/js/gameObjects/Bullet.js");
require("./shared/js/gameObjects/Player.js");
require("./shared/js/gameObjects/Bird.js");
require("./shared/js/UserActions.js");
require("./shared/js/UserState.js");
require("./shared/js/UserInputProcessor.js");

// Sprites
require("./shared/js/sprites/PlanePartSprite.js");
require("./shared/js/sprites/SmokeSprite.js");
require("./shared/js/sprites/PlaneSprite.js");
require("./shared/js/sprites/BulletSprite.js");
require("./shared/js/sprites/BirdSprite.js");

// Client
require("./shared/js/LatencyAnalyzer.js");
require("./web-server/public/js/ServerClientStateManager.js");
require("./web-server/public/js/SkyDuelClient.js");

// View
require("./web-server/public/js/logViewer.js");
},{"./game-server/node_modules/jclass/lib/jclass.min.js":2,"./shared/js/LatencyAnalyzer.js":5,"./shared/js/UserActions.js":6,"./shared/js/UserInputProcessor.js":7,"./shared/js/UserState.js":8,"./shared/js/characteristics/CharacteristicManager.js":9,"./shared/js/characteristics/Characteristic_DestroyOffScreen.js":11,"./shared/js/characteristics/Characteristic_Physics.js":13,"./shared/js/characteristics/Characteristic_ScreenWrapping.js":15,"./shared/js/characteristics/Characteristic_ShootsBullets.js":16,"./shared/js/gameObjects/Bird.js":18,"./shared/js/gameObjects/Bullet.js":19,"./shared/js/gameObjects/Player.js":21,"./shared/js/gameObjects/Smoke.js":22,"./shared/js/lib/HashArray.js":24,"./shared/js/sprites/BirdSprite.js":25,"./shared/js/sprites/BulletSprite.js":26,"./shared/js/sprites/PlanePartSprite.js":27,"./shared/js/sprites/PlaneSprite.js":28,"./shared/js/sprites/SmokeSprite.js":29,"./web-server/public/js/ServerClientStateManager.js":30,"./web-server/public/js/SkyDuelClient.js":31,"./web-server/public/js/logViewer.js":32}],2:[function(require,module,exports){
(function (process,global){
/*!
 * JavaScript Inheritance with Private Members
 * Largely based upon John Resig's inheritance technique,
 * (see http://ejohn.org/blog/simple-javascript-inheritance/)
 * that was inspired by base2 and Prototype.
 *
 * Works with and without node.
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license
 *
 * v2.0.4, Marcel Rieger, 2013
 * https://github.com/riga/jclass
 * https://npmjs.org/package/jclass
 */
var ns,nsKey;
if(typeof global!=="undefined"&&typeof process!=="undefined"&&typeof module!=="undefined"&&module.exports){ns=module;nsKey="exports";}else{if(typeof window!=="undefined"){ns=window;
nsKey="JClass";}}(function(d,f){var b=d[f];var a={extendable:true,ctorName:"init",superName:"_super",enablePrivacy:true,privatePattern:/^__.+/,tracking:true,privateName:"__",methodsKey:"_jcMethods_",depthKey:"_jcDepth_",callerDepthKey:"_jcCallerDepth_"};
var c=false;var e=function(){};e.extend=function(m,g){g=g||{};for(var q in a){if(g[q]===undefined){g[q]=a[q];}}if(!g.enablePrivacy){g.privatePattern=null;
g.privateName=null;}var r=this.prototype;c=true;var o=new this();c=false;o[g.depthKey]=r[g.depthKey]||0;o[g.depthKey]++;var k=o[g.depthKey];var i={};var j={};
var s={};for(var h in m){if(m[h] instanceof Function){var n=(function(t,u){return function(){var v=this[g.superName];if(!g.privatePattern||!g.privatePattern.test(t)){this[g.superName]=r[t];
}var D;if(g.privateName){D=this[g.privateName];this[g.privateName]=D||s;}var y,E,x,I;if(g.privatePattern){if(this[g.callerDepthKey]===undefined){this[g.callerDepthKey]=k;
}y=this[g.methodsKey];if(t==g.ctor){this[g.methodsKey]=y||i;for(var z in i){if(!this[g.methodsKey][z]){this[g.methodsKey][z]={};}this[g.methodsKey][z][k]=i[z][k];
var C=this[g.methodsKey][z][k];this[g.methodsKey][z][k]=function(){var K=this[g.superName];this[g.superName]=this[g.methodsKey][z][k-1];var J=C.apply(this,arguments);
this[g.superName]=K;return J;};}i=this[g.methodsKey];}else{this[g.methodsKey]=i;}E={};for(var z in this[g.methodsKey]){E[z]=this[z];var F=Math.max.apply(Math,Object.keys(i[z]));
this[z]=i[z][F];}if(g.tracking){x={};for(var G in j){x[G]=this[G];this[G]=j[G];}}if(g.tracking){I=Object.keys(this);}}var B=u.apply(this,arguments);if(g.privatePattern){if(g.tracking){var H=Object.keys(this);
for(var G in H){G=H[G];if(g.privatePattern.test(G)){x[G]=this[G];j[G]=this[G];}}for(var G in I){G=I[G];var A=H.indexOf(G)<0&&g.privatePattern.test(G);if(A){delete j[G];
delete this[G];}}for(var G in j){var w=this[g.callerDepthKey];if(x[G]===undefined||k==w){delete this[G];}else{this[G]=x[G];}}}for(var G in this[g.methodsKey]){if(E[G]===undefined){delete this[G];
}else{this[G]=E[G];}}if(y===undefined){delete this[g.methodsKey];}else{this[g.methodsKey]=y;}if(k==this[g.callerDepthKey]){delete this[g.callerDepthKey];
}}if(g.privateName){if(D===undefined){delete this[g.privateName];}else{this[g.privateName]=D;}}if(v===undefined){delete this[g.superName];}else{this[g.superName]=v;
}return B;};})(h,m[h]);var l=g.privatePattern&&g.privatePattern.test(h);if(l){i[h]={};i[h][k]=n;}else{o[h]=n;}}else{var l=g.tracking&&g.privatePattern&&g.privatePattern.test(h);
if(l){j[h]=m[h];}else{o[h]=m[h];}}}function p(){if(!c&&this[g.ctorName]){this[g.ctorName].apply(this,arguments);}}p.prototype=o;p.prototype.constructor=p;
if(g.extendable!==false){p.extend=arguments.callee;}return p;};e.noConflict=function(){var g=d[f];d[f]=b;return g;};d[f]=e;})(ns,nsKey);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":33}],3:[function(require,module,exports){
module.exports=require(2)
},{"/media/sf_dev/node/pomelo/skyduel/game-server/node_modules/jclass/lib/jclass.min.js":2,"_process":33}],4:[function(require,module,exports){
/*===================================================*\
 * Requires
\*===================================================*/
var CharacteristicManager = require('./characteristics/CharacteristicManager'),
  JClass = require('jclass'),
  HashArray = require('./lib/HashArray');

/*===================================================*\
 * GameObject()
\*===================================================*/
var GameObject = module.exports = JClass.extend({
  /*======================*\
   * Properties
  \*======================*/
  stateSetProps: function() {
    return [];
  },
  stateGetProps: function() {
    return ['_id'];
  },
  setParent: function(value) {
    this._parent = value;
  },
  getParent: function() {
    return this._parent;
  },
  setChildren: function(value) {
    // Deserialize from server
    this._children = value;
  },
  getChildren: function() {
    // Serialize from server
    return this._children;
  },
  setId: function(value) {
    this._id = value;
  },
  getId: function() {
    return this._id || (this._id = this.randomId());
  },
  setState: function(value) {
    this._state = value;
  },
  getState: function() {
    if (!this.inited)
      return {};

    return {
      id: this.getId(),
      type: this.type,
      children: this.getChildren().all.map(function (child) {
        return child.state;
      })
    };
  },
  getChildrenIds: function() {
    if (!this.inited)
      return {};

    var ret = {};

    this.getChildren().all.forEach(function (child) {
      ret[child.getId()] = true;
    });

    return ret;
  },
  setChildrenState: function(value) {
    var self = this,
      ids = this.getChildrenIds();

    value.forEach(function (childState) {
      var child = self.getChildren().get(childState.id);
      if (!child)
        self.getChildren().add(self.newChildFromState(childState));
      else {
        if (Object.prototype.toString.call(child) === '[object Array]' )
        {
          console.log('Two ids are the same!', child[0].getId());
          return;
        }
        child.setState(childState);
      }

      delete ids[childState.id];
    });

    if (this.destroyUnfoundChildrenOnStateSet)
      for (var id in ids)
        this.destroyChildById(id);
  },
  getChildrenState: function() {
    if (!this.inited)
      return {};

    return this.getChildren().all.map(function (child) {
      return child.getState();
    });
  },
  setDirty: function(value) {
    // Deserialize from server
    this._dirty = value;
    (this._dirty && this.getParent()) ? this.getParent().setDirty(true) : '';
    !this._dirty ? this.getChildren().forEach(function (child) {
      child.setDirty(false);
    }) : '';
  },
  getDirty: function() {
    // Serialize from server
    return this._dirty;
  },
  /*======================*\
   * Methods
  \*======================*/
  randomId: function () {
    return Math.round(Math.random() * 999999999).toString(16);
  },
  init: function (parent, id) {
    if (!parent)
    {
      GameObject.prototype.world = GameObject.prototype.root = this;
    }

    this.setId(id);
    this.type = 'GameObject';
    this.buildChildrenObject();
    this.setParent(parent);
    this.setDirty(true);
    this.destroyed = false;
    this.sprite = undefined;
    this.destroyUnfoundChildrenOnStateSet = true;
    this.charManager = new CharacteristicManager(this);

    this.inited= true;
  },
  update: function (elapsed) {
    var self = this;
    // Wipe out any destroyed children.
    this.getChildren().all.concat().forEach(function (child) {
      if (child.destroyed)
        self.getChildren().remove(child);
    });

    this.getChildren().all.forEach(function (child) {
      child.update(elapsed);
    });

    this.charManager.applyAll(elapsed);
  },
  newChildFromState: function (childState) {
    var child = new GameObject();
    child.init(this, childState.id)
    child.state = childState;
    return child;
  },
  destroyChildById: function (id) {
    var child = this.getChildren().get(id);

    if (!child)
    {
      console.log('Attempting to destroy non-existent child with id', id);
      return;
    }

    if (child.destroy)
    {
      child.destroy();
    }
    
    this.getChildren().remove(child);
  },
  buildChildrenObject: function () {
    this.setChildren(new HashArray(['_id', 'type']));
  },
  buildSprite: function (phaser) {
  },
  updateSprite: function (phaser) {
    if (this.sprite && this.destroyed)
        this.sprite.destroy(true);
    else
    {
      if (!this.sprite)
        this.buildSprite(phaser);

      if (this.sprite)
        this.sprite.updateWithModel(this);
    }
  },
  updatePhaser: function (phaser) {
    this.getChildren().all.forEach(function (child) {
      child.updatePhaser(phaser);
    });

    this.updateSprite(phaser);
  },
  destroy: function () {
    this.destroyed = true;
  }
});
},{"./characteristics/CharacteristicManager":9,"./lib/HashArray":24,"jclass":3}],5:[function(require,module,exports){
/*===================================================*\
 * Globals
\*===================================================*/
var LATENCY_ANALYZER_DEFAULT_MAX = 10;

/*===================================================*\
 * LatencyAnalyzer()
\*===================================================*/
var LatencyAnalyzer = function() {
  this.debug = false;
};

/*===================================================*\
 * Prototype
\*===================================================*/
LatencyAnalyzer.prototype = {
  /*===========================*\
   * Variables
  \*===========================*/
  stack: [],
  maxStackLength: LATENCY_ANALYZER_DEFAULT_MAX,
  lastTestTime: undefined,
  /*===========================*\
   * Properties
  \*===========================*/
  get latency() {
    // Returns a weighted average latency.
    // Item at ix 0 has weight of 1 and item at ix length has weight of length.
    var _latency = 0, perc = 0;

    var weights = [0.33];

    for (var i = 0; i < this.stack.length; i++)
    {
      perc += weights[i];
      weights[i+1] = weights[i] * 0.6666;
    }

    weights[0] += 1.0 - perc;
    perc += 1.0 - perc;
    weights.reverse();

    this.stack.forEach(function (l, i) {
      _latency += l * weights[i];
    });

    if (this.debug)
      console.log('LATENCY', _latency);

    return _latency;
  },
  get now() {
    return (new Date()).getTime();
  },
  /*===========================*\
   * Methods
  \*===========================*/
  startTest: function () {
    this.lastTestTime = this.now;
  },
  endTest: function () {
    var elapsed = this.now - this.lastTestTime;
    if (this.debug)
      console.log('LATENCY', this.latency);
    this.push(elapsed);
  },
  push: function(latency) {
    this.stack.push(latency);

    while (this.stack.length > this.maxStackLength)
      this.stack.shift();
  },
  reset: function () {
    this.stack = [];
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = LatencyAnalyzer;
},{}],6:[function(require,module,exports){
/*===================================================*\
 * Globals
\*===================================================*/
var USER_ACTIONS = {
  LEFT_DOWN: 0x0001,
  LEFT_UP: 0x0002,
  RIGHT_DOWN: 0x0010,
  RIGHT_UP: 0x0020,
  UP_DOWN: 0x0100,
  UP_UP: 0x0200,
  DOWN_DOWN: 0x1000,
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = USER_ACTIONS;
} else {
  window.USER_ACTIONS = USER_ACTIONS;
}
},{}],7:[function(require,module,exports){
/*===================================================*\
 * UserInputProcessor()
\*===================================================*/
var UserInputProcessor = function() {
};

/*===================================================*\
 * Prototype
\*===================================================*/
UserInputProcessor.prototype = {
  update: function (userInput, elapsed, world) {
    if (userInput.left)
      world.player.bank = -world.player.GLOBALS.BANK_RATE;
    else if (userInput.right)
      world.player.bank = world.player.GLOBALS.BANK_RATE;
    else
      world.player.bank = 0;

    if (userInput.up)
      world.player.accelerater = world.player.GLOBALS.ACCELERATION_RATE;
    else if (userInput.down)
      world.player.accelerater = -world.player.GLOBALS.DECELERATION_RATE;
    else 
      world.player.accelerater = 0.0;

    world.player.triggerDown = userInput.trigger;
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = UserInputProcessor;
},{}],8:[function(require,module,exports){
/*===================================================*\
 * UserInputState()
\*===================================================*/
var UserInputState = function(input, time) {
  this.input = input;
  this.time = time;
};

/*===================================================*\
 * Prototype
\*===================================================*/
UserInputState.prototype = {
  input: undefined,
  time: undefined
};

module.exports = UserInputState;
},{}],9:[function(require,module,exports){
/*===================================================*\
 * Globals
\*===================================================*/
var HashArray = require('../lib/HashArray');

/*===================================================*\
 * CharacteristicManager()
\*===================================================*/
var CharacteristicManager = function(parent) {
  this.parent = parent;
  this.characteristics = new HashArray(['name']);
};

/*===================================================*\
 * Prototype
\*===================================================*/
CharacteristicManager.prototype = {
  /*=========================*\
   * Variables
  \*=========================*/
  cache: {},
  /*=========================*\
   * Methods
  \*=========================*/
  add: function (characteristic) {
    this.characteristics.add(characteristic);
  },
  applyAll: function (elapsed) {
    var self = this;
    this.cache = {};

    this.characteristics.all.forEach(function (characteristic) {
      characteristic.applyTo(self.parent, elapsed, self.cache);
    });
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = CharacteristicManager;
},{"../lib/HashArray":24}],10:[function(require,module,exports){
var Characteristic_Physics = require('./Characteristic_Physics');

/*===================================================*\
 * Math Bullshit
 * Proof here: http://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
\*===================================================*/
function sqr(x) { return x * x }
function dist2(v, w) { return sqr(v.x - w.x) + sqr(v.y - w.y) }
function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w);
  if (l2 == 0) return dist2(p, v);
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  if (t < 0) return dist2(p, v);
  if (t > 1) return dist2(p, w);
  return dist2(p, { x: v.x + t * (w.x - v.x),
                    y: v.y + t * (w.y - v.y) });
}
function distToSegment(p, v, w) { return Math.sqrt(distToSegmentSquared(p, v, w)); }

/*===================================================*\
 * Characteristic_Collides()
\*===================================================*/
var Characteristic_Collides = function(options) {
  this.options = options;
  // These are the keys of the world objects that the this object can collide with!
  this.options.keys = this.options.keys || ['player', 'bird'];
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_Collides.prototype = {
  tempPhysics: new Characteristic_Physics(),
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    var self = this;
    
    this.tempPhysics.options = target.world;

    var targets = target.world.getChildren().getAll(this.options.keys),
      start = this.tempPhysics.applyTemp(target, 0),
      end = this.tempPhysics.applyTemp(target, elapsed);

    targets.forEach(function (t) {
      var shortestDistance = distToSegment(t, start, end);
      if (shortestDistance < (target.radius * 2) + (t.radius * 2))
      {
        if (self.options.callback)
          self.options.callback.apply(null, [t, shortestDistance]);
      }
    });
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Collides;
},{"./Characteristic_Physics":13}],11:[function(require,module,exports){
/*===================================================*\
 * Characteristic_DestroyOffScreen()
\*===================================================*/
var Characteristic_DestroyOffScreen = function(options) {
  this.options = options;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_DestroyOffScreen.prototype = {
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    var destroy = target.x < 0 || target.x > this.options.width || target.y < 0 || target.y > this.options.height;
    if (destroy)
      target.destroy();
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_DestroyOffScreen;
},{}],12:[function(require,module,exports){
var PlanePart = require('../gameObjects/PlanePart');

/*===================================================*\
 * Characteristic_Explodes()
\*===================================================*/
var Characteristic_Explodes = function(options) {
  this.options = options;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_Explodes.prototype = {
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    if (typeof isClient === 'undefined' || isClient)
      return;

    if (target.health <= 0 && !target.exploded)
    {
      target.exploded = true;
      this.explode(target);
      target.destroy();
    }
  },
  explode: function (target) {
    for (var i = 0; i < 5; i++)
    {
      var part = new PlanePart(target.world, target.getId() + '_part' + i, target.x, target.y, target.angle, target.velocity, i);
      target.world.getChildren().add(part);
    }
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Explodes;
},{"../gameObjects/PlanePart":20}],13:[function(require,module,exports){
/*===================================================*\
 * Characteristic_Physics()
\*===================================================*/
var Characteristic_Physics = function(options) {
  this.options = options;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_Physics.prototype = {
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    var res = this.applyTemp(target, elapsed);
    target.x = res.x;
    target.y = res.y;
    target.velocity = res.velocity;
    target.angle = res.angle;
  },
  applyTemp: function (target, elapsed) {
    var res = {};

    if (typeof target.velocity == 'undefined')
      throw Error('Target velocity is undefined for ', target);
    
    var v = target.velocity;
    
    if (target.hasOwnProperty('accelerater'))
      v = target.velocity + (target.accelerater * elapsed);

    res.velocity = v > this.options.VELOCITY_MAX ? this.options.VELOCITY_MAX : (v < this.options.VELOCITY_MIN ? this.options.VELOCITY_MIN : v);

    if (target.hasOwnProperty('bank'))
      res.angle = target.angle + (target.bank * elapsed);
    else
      res.angle = target.angle;

    res.x = target.x + Math.cos(res.angle) * res.velocity * elapsed;
    res.y = target.y + Math.sin(res.angle) * res.velocity * elapsed;

    if (isNaN(res.x))
    {
      console.log(target);
      console.log(res);
      console.log(elapsed);
      throw Error(res);
    }

    return res;
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Physics;
},{}],14:[function(require,module,exports){
/*===================================================*\
 * Characteristic_Respawns()
\*===================================================*/
var Characteristic_Respawns = function(options) {
  this.options = options;

  // Default 5.0 second respawn if none provided
  this.options.RESPAWN_TIME = this.options.RESPAWN_TIME || 5000;
  // Default 5.0 second respawn if none provided
  this.options.RESPAWN_LOCATION = this.options.RESPAWN_LOCATION || 'random';
  this.options.RESPAWN_ORIENTATION = this.options.RESPAWN_ORIENTATION || 'random';
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_Respawns.prototype = {
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    // Respawns are ONLY performed by the server
    if (typeof isClient === 'undefined' || isClient)
      return;

    if (target.destroyed && !target.respawning)
    {
      setTimeout(this.respawnHandler.bind(this, target), this.options.RESPAWN_TIME);
    }
  },
  respawnHandler: function (target) {
    target.respawn();
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Respawns;
},{}],15:[function(require,module,exports){
/*===================================================*\
 * Characteristic_ScreenWrapping()
\*===================================================*/
var Characteristic_ScreenWrapping = function(options) {
  this.options = options;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_ScreenWrapping.prototype = {
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    target.x = target.x < 0 ? this.options.width : target.x;
    target.x = target.x > this.options.width ? target.x % this.options.width : target.x;
    target.y = target.y < 0 ? this.options.height : target.y;
    target.y = target.y > this.options.height ? target.y % this.options.height : target.y;
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_ScreenWrapping;
},{}],16:[function(require,module,exports){
var Bullet = require('../gameObjects/Bullet');

/*===================================================*\
 * Characteristic_ShootsBullets()
\*===================================================*/
var Characteristic_ShootsBullets = function(options) {
  this.options = options;
  this.options.fireRate = options.fireRate || 50.0;
  this.options.fireVelocity = options.fireVelocity || 700.0;
  // Bullets need to start 'ahead' of teh object firing them a little.
  this.options.offset = options.offset || 30;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_ShootsBullets.prototype = {
  /*=========================*\
   * Variables
  \*=========================*/
  nextBulletTime: undefined,
  /*=========================*\
   * Properties
  \*=========================*/
  get now() {
    return (new Date()).getTime();
  },
  /*=========================*\
   * Methods
  \*=========================*/
  fire: function (target, x, y, angle, velocity)
  {
    if (target.ammo <= 0)
      return;
    
    var bullet = new Bullet(target, undefined, x + Math.cos(angle) * this.options.offset, y + Math.sin(angle) * this.options.offset, angle, velocity);
    target.getChildren().add(bullet);
    target.ammo--;
    this.nextBulletTime = this.now + this.options.fireRate;
  },
  applyTo: function (target, elapsed, cache) {
    if (!this.nextBulletTime)
      this.nextBulletTime = this.now + this.options.fireRate;

    if (target.triggerDown)
    {
      var t = this.nextBulletTime + this.options.fireRate;
      
      while (this.now > this.nextBulletTime)
      {
        this.fire(target, target.x, target.y, target.angle, this.options.fireVelocity);
      }
    }
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_ShootsBullets;
},{"../gameObjects/Bullet":19}],17:[function(require,module,exports){
var Smoke = require('../gameObjects/Smoke');

/*===================================================*\
 * Characteristic_Smokes()
\*===================================================*/
var Characteristic_Smokes = function(options) {
  this.options = options;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_Smokes.prototype = {
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    this.attemptSmokeDrop(target, elapsed);
  },
  attemptSmokeDrop: function (target, elapsed) {
    var self= this;
    // Smoke drops are ONLY performed by the server
    if (typeof isClient === 'undefined' || isClient)
      return;

    if ((isNaN(this.options.SMOKE_START_HEALTH) || target.health < this.options.SMOKE_START_HEALTH) && target.smokes < this.options.SMOKE_MAX)
    {
      var compare = isNaN(this.options.SMOKE_START_HEALTH) ? 1.0 : target.health,
        smokeDrop = (Math.random() * compare) < this.options.SMOKE_THRESHOLD;

      if (smokeDrop)
      {
        var smoke = new Smoke(target, 'smoke' + target.randomId(), target.x, target.y, target.angle, this.smokeFadeHandler.bind(this, target));
        target.smokes++;
        target.world.getChildren().add(smoke);
      }
    }
  },
  smokeFadeHandler: function (target) {
    target.smokes--;
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Smokes;
},{"../gameObjects/Smoke":22}],18:[function(require,module,exports){
var GameObject = require('../GameObject');

/*===================================================*\
 * Bird()
\*===================================================*/
var Bird = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    return {
      id: this._id,
      x: this.x,
      y: this.y,
      bank: this.bank,
      angle: this.angle,
      velocity: this.velocity,
      scale: this.scale,
      type: this.type,
      radius: this.radius,
      health: this.health,
    };
  },
  setState: function(value) {
    var self = this;

    if (value.id != this._id)
    {
      throw Error('The bird\'s ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.bank = value.bank;
    this.scale = value.scale;
    this.type = value.type;
    this.radius = value.radius;
    this.health = value.health;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id) {
    this._super(parent, id || this.getId());

    this.type = 'bird';

    this.angle = this.bank = 0;
    this.radius = 3;

    this.x = Math.random() * this.world.width;
    this.y = Math.random() * this.world.height;
    this.angle = Math.random() * Math.PI * 2;
    this.bank = this.randomizedBank();
    this.velocity = 25 + Math.random() * 10;
    this.scale = (Math.random() * 0.4) + 0.1;

    this.health = 100;

    this.GLOBALS = {
      VELOCITY_MAX: Bird.velocity,
      VELOCITY_MIN: Bird.velocity,
    };

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_ScreenWrapping'))(this.world));
    //this.charManager.add(new (require('../characteristics/Characteristic_Explodes'))(this.world));
  },
  update: function (elapsed) {
    this._super(elapsed);
    
    // TODO: encapsulate bird AI
    
    // birds have a 1/200 chance of changing the bank every frame
    if(Math.random() < 0.005)
      this.bank = this.randomizedBank();
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.bird(0, 0);
  },
  randomizedBank: function() {
    // value in the range [-1.0, 1.0] 
    var bankFactor = (Math.random() - 0.5) * 2.0;
    // the maximum bank angle 
    var bankMagnitude = Math.PI / 2.0;
    // scale the magnitude by the randomized factor
    return bankFactor * bankMagnitude; 
  },
  destroy: function () {
    this.destroyed = true;

    if (this.sprite)
      this.sprite.destroy(true);
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Bird;
},{"../GameObject":4,"../characteristics/Characteristic_Physics":13,"../characteristics/Characteristic_ScreenWrapping":15}],19:[function(require,module,exports){
var GameObject = require('../GameObject');

/*===================================================*\
 * Bullet()
\*===================================================*/
var Bullet = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    return {
      id: this._id,
      x: this.x,
      y: this.y,
      angle: this.angle,
      velocity: this.velocity,
      radius: this.radius
    };
  },
  setState: function(value) {
    if (value.id != this.getId())
    {
      throw Error('The bullet ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.radius = value.radius;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id, x, y, angle, velocity) {
    this._super(parent, id || this.getId());

    this.GLOBALS = {
      VELOCITY_MAX: 100000,
      VELOCITY_MIN: 0
    };

    this.x = x;
    this.y = y;
    this.angle = angle;
    this.velocity = velocity;
    this.sprite = undefined;
    this.radius = 2;

    this.type = 'bullet';

    this.charManager.add(new (require('../characteristics/Characteristic_Collides'))({callback: this.collideHandler.bind(this)}));
    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_DestroyOffScreen'))(this.world));
  },
  update: function (elapsed) {
    this.charManager.applyAll(elapsed);
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.bullet(0, 0);
  },
  destroy: function () {
    this.destroyed = true;

    if (this.sprite)
      this.sprite.destroy(true);
  },
  collideHandler: function (target, distance) {
    if (target.hit)
      target.hit(this, distance);
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Bullet;
},{"../GameObject":4,"../characteristics/Characteristic_Collides":10,"../characteristics/Characteristic_DestroyOffScreen":11,"../characteristics/Characteristic_Physics":13}],20:[function(require,module,exports){
var GameObject = require('../GameObject');

/*===================================================*\
 * PlanePart()
\*===================================================*/
var PlanePart = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    return {
      id: this._id,
      x: this.x,
      y: this.y,
      duration: this.duration,
      timeStart : this.timeStart,
      type: this.type,
      angle: this.angle,
      bank: this.bank,
      smokes: this.smokes,
      velocity: this.velocity,
      index: this.index
    };
  },
  setState: function(value) {
    if (value.id != this.getId())
    {
      throw Error('The PlanePart ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.duration = value.duration;
    this.timeStart = value.timeStart;
    this.type = value.type;
    this.angle = value.angle;
    this.bank = value.bank;
    this.velocity = value.velocity;
    this.smokes = value.smokes;
    this.index = value.index;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id, x, y, angle, velocity, index) {
    this._super(parent, id || this.getId());

    this.GLOBALS = {
      VELOCITY_MAX: 600,
      VELOCITY_MIN: 0,
      SMOKE_MAX: 5,
      SMOKE_START_HEALTH: NaN,
      SMOKE_THRESHOLD: 3
    };

    this.timeStart = (new Date()).getTime();
    this.duration = (Math.random() * 3.0 + 1.0) * 1000.0;
    this.bank = -1 + (Math.random() * 2);
    this.velocity = velocity;
    this.accelerator = 0;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.health = 0;
    this.smokes = 0;
    this.index = index;

    this.sprite = undefined;

    this.type = 'planepart';

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_Smokes'))(this.GLOBALS));
  },
  update:function (elapsed) {
    this._super(elapsed);

    var elapsed = (new Date()).getTime() - this.timeStart,
      ratio = 1.0 - (elapsed / this.duration);

    if (ratio < 0.1)
      this.destroy();
  },
  updatePhaser: function (phaser) {
    this._super(phaser);

    var elapsed = (new Date()).getTime() - this.timeStart,
      ratio = 1.0 - (elapsed / this.duration);

    if (ratio < 0.1)
      this.destroy();
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.planePart(this.x, this.y, this.index);
  },
  destroy: function () {
    if (this.callback)
      this.callback();

    this.destroyed = true;

    if (this.sprite)
    {
      this.sprite.destroy(true);
      this.sprite = null;
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = PlanePart;
},{"../GameObject":4,"../characteristics/Characteristic_Physics":13,"../characteristics/Characteristic_Smokes":17}],21:[function(require,module,exports){
/*===================================================*\
 * Requirements
\*===================================================*/
var GameObject = require('../GameObject'),
  Bullet = require('./Bullet'),
  Smoke = require('./Smoke'),
  playerCount = 0;

/*===================================================*\
 * Player()
\*===================================================*/
var Player = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    if (!this.inited)
      return {};

    return {
      uid: this.uid,
      id: this._id,
      x: this.x,
      y: this.y,
      bank: this.bank,
      accelerater: this.accelerater,
      turn: this.turn,
      accel: this.accel,
      angle: this.angle,
      health: this.health,
      velocity: this.velocity,
      ammo: this.ammo,
      type: this.type,
      radius: this.radius,
      smokes: this.smokes,
      destroyed: this.destroyed,
      children: this.getChildrenState(),
      kills: this.kills,
      deaths: this.deaths
    };
  },
  setState: function(value) {
    var self = this;

    if (value.id != this.getId())
    {
      throw Error('The plane ids do not match in \'set state()\'!');
    }

    this.uid = value.uid;
    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.bank = value.bank;
    this.health = value.health;
    this.accelerater = value.accelerater;
    this.ammo = value.ammo;
    this.radius = value.radius;
    this.smokes = value.smokes;
    if (value.destroyed && !this.destroyed)
      this.destroy();
    this.destroyed = value.destroyed;
    this.kills = value.kills;
    this.deaths = value.deaths;

    this.setChildrenState(value.children);
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function(parent, id, uid) {
    console.log('Initing player', this.uid);

    this._super(parent, id || this.getId());

    this.uid = uid;

    this.type = 'player';

    this.GLOBALS = {
      VELOCITY_MAX: 300,
      VELOCITY_MIN: 80,
      BANK_RATE: Math.PI / 2,
      ACCELERATION_RATE: 250,
      DECELERATION_RATE: 70,
      SMOKE_MAX: 20,
      SMOKE_START_HEALTH: 60,
      SMOKE_THRESHOLD: 5
    };

    this.bulletProps = {
      fireRate: 100,
      fireVelocity: 500
    };

    this.x = 400;
    this.y = 400;
    this.bank = 0;
    this.kills = 0;
    this.deaths = 0;
    this.accelerater = 0;
    this.health = 100;
    this.ammo = 1000;
    this.velocity = this.GLOBALS.VELOCITY_MIN;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = 15;

    this.smokes = 0;

    this.triggerDown = false;

    this.destroyed = false;

    this.charManager.add(new (require('../characteristics/Characteristic_Smokes'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_ScreenWrapping'))(this.world));
    this.charManager.add(new (require('../characteristics/Characteristic_ShootsBullets'))(this.bulletProps));
    this.charManager.add(new (require('../characteristics/Characteristic_Explodes'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_Respawns'))(this.GLOBALS));
  },
  update: function (elapsed) {
    this._super(elapsed);

    this.bulletProps.fireVelocity = 500.0 + this.velocity;
  },
  respawn: function () {
    console.log('Respawning player', this.uid);

    this.x = 400;
    this.y = 400;
    this.bank = 0;
    this.accelerater = 0;
    this.health = 100;
    this.ammo = 1000;
    this.velocity = this.GLOBALS.VELOCITY_MIN;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = 15;

    this.smokes = 0;

    this.exploded = false;
    this.destroyed = false;

    this.world.getChildren().add(this);
  },
  updatePhaser: function (phaser) {
    this._super(phaser);

    this.sprite.displayStatusRing(this.uid == window.client.uid, this.health);
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.plane(0, 0);
  },
  newChildFromState: function (childState) {
    var bullet = new Bullet(this, childState.id);
    bullet.setState(childState);
    this.getChildren().add(bullet);
    return bullet;
  },
  destroy: function() {
    this._super();

    this.bullets = [];
    this.destroyed = true;

    if (this.sprite) {
      console.log('Destroying plane sprite', this.uid);
      this.sprite.destroy(true);
      this.sprite = null;
    }
  },
  hit: function (projectile, distance) {
    if (projectile.getParent() == this)
      return;
    
    this.health -= 1 * (projectile.velocity / 1000.0) * Math.max(15 - distance, 1);
    this.health = this.health < 0 ? 0 : this.health;

    if (projectile.getParent().type == 'player' && this.health <= 0 && !this.destroyed)
    {
      projectile.getParent().kills++;
      this.deaths++;
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Player;
},{"../GameObject":4,"../characteristics/Characteristic_Explodes":12,"../characteristics/Characteristic_Physics":13,"../characteristics/Characteristic_Respawns":14,"../characteristics/Characteristic_ScreenWrapping":15,"../characteristics/Characteristic_ShootsBullets":16,"../characteristics/Characteristic_Smokes":17,"./Bullet":19,"./Smoke":22}],22:[function(require,module,exports){
var GameObject = require('../GameObject');

/*===================================================*\
 * Smoke()
\*===================================================*/
var Smoke = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    return {
      id: this._id,
      x: this.x,
      y: this.y,
      duration: this.duration,
      timeStart : this.timeStart,
      type: this.type,
      angle: this.angle,
      bank: this.bank,
      velocity: this.velocity
    };
  },
  setState: function(value) {
    if (value.id != this.getId())
    {
      throw Error('The Smoke ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.duration = value.duration;
    this.timeStart = value.timeStart;
    this.type = value.type;
    this.angle = value.angle;
    this.bank = value.bank;
    this.velocity = value.velocity;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id, x, y, angle, callback) {
    this._super(parent, id || this.getId());

    this.GLOBALS = {
      VELOCITY_MAX: 600,
      VELOCITY_MIN: 0
    };

    this.timeStart = (new Date()).getTime();
    this.duration = (Math.random() * 2.0 + 1.0) * 1000.0;
    this.bank = -1 + (Math.random() * 2);
    this.velocity = 0;
    this.accelerator = 0;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.sprite = undefined;

    this.callback = callback;

    this.type = 'smoke';

    //this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
  },
  update:function (elapsed) {
    this._super(elapsed);

    var elapsed = (new Date()).getTime() - this.timeStart,
      ratio = 1.0 - (elapsed / this.duration);

    if (ratio < 0.1)
      this.destroy();
  },
  updatePhaser: function (phaser) {
    this._super(phaser);

    var elapsed = (new Date()).getTime() - this.timeStart,
      ratio = 1.0 - (elapsed / this.duration);

    this.sprite.setLife(ratio);

    if (ratio < 0.1)
      this.destroy();
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.smoke(this.x, this.y);
  },
  destroy: function () {
    if (this.callback)
      this.callback();

    this.destroyed = true;

    if (this.sprite)
    {
      this.sprite.destroy(true);
      this.sprite = null;
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Smoke;
},{"../GameObject":4}],23:[function(require,module,exports){
var GameObject = require('../GameObject'),
  Bird = require('./Bird'),
  Smoke = require('./Smoke'),
  Player = require('./Player'),
  PlanePart = require('./PlanePart'),
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
    this.players = new HashArray(['_id', 'uid', 'type']);
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
    {
      // Check to see if maybe we already have this child and it is being respawned.
      if (this.players.get(childState.id))
        child = this.players.get(childState.id);
      else
      {
        child = new Player(this, childState.id);
        this.players.add(child);
      }
    }
    else if (childState.type == 'smoke')
      child = new Smoke(this, childState.id);
    else if (childState.type == 'planepart')
      child = new PlanePart(this, childState.id);
    else
    {
      console.log(childState);
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
},{"../GameObject":4,"../lib/HashArray":24,"./Bird":18,"./PlanePart":20,"./Player":21,"./Smoke":22}],24:[function(require,module,exports){
var HashArray = function(keyFields, callback) {
  this._map = {};
  this._list = [];
  this.callback = callback;

  this.keyFields = keyFields;

  this.__defineGetter__('all', function() {
    return this._list;
  });

  this.__defineGetter__('map', function() {
    return this._map;
  });

  if (callback) {
    callback('construct');
  }
};

HashArray.prototype = {
  add: function() {
    for (var i = 0; i < arguments.length; i++) {
      var obj = arguments[i];
      for (var key in this.keyFields) {
        key = this.keyFields[key];
        var inst = this.find(obj, key);
        if (inst) {
          if (this._map[inst]) {
            if (this._map[inst].indexOf(obj) != -1) {
              // Cannot add the same item twice
              return;
            }
            this._map[inst].push(obj);
          } else this._map[inst] = [obj];
        }
      }

      this._list.push(obj);
    }
    if (this.callback) {
      this.callback('add', Array.prototype.slice.call(arguments, 0));
    }
  },
  addMap: function(key, obj) {
    this._map[key] = obj;
    if (this.callback) {
      this.callback('addMap', {
        key: key,
        obj: obj
      });
    }
  },
  get: function(key) {
    return (!(this._map[key] instanceof Array) || this._map[key].length != 1) ? this._map[key] : this._map[key][0];
  },
  getAll: function(keys) {
    var res = [];
    for (var key in keys)
      res = res.concat(this.getAsArray(keys[key]));

    return res;
  },
  getAsArray: function(key) {
    return this._map[key] || [];
  },
  has: function(key) {
    return this._map.hasOwnProperty(key);
  },
  hasMultiple: function(key) {
    return this._map[key] instanceof Array;
  },
  removeByKey: function() {
    var removed = [];
    for (var i = 0; i < arguments.length; i++) {
      var key = arguments[i];
      var items = this._map[key].concat();
      if (items) {
        removed = removed.concat(items);
        for (var j in items) {
          var item = items[j];
          for (var ix in this.keyFields) {
            var key2 = this.find(item, this.keyFields[ix]);
            if (key2 && this._map[key2]) {
              var ix = this._map[key2].indexOf(item);
              if (ix != -1) {
                this._map[key2].splice(ix, 1);
              }

              if (this._map[key2].length == 0)
                delete this._map[key2];
            }
          }

          this._list.splice(this._list.indexOf(item), 1);
        }
      }
      delete this._map[key];
    }

    if (this.callback) {
      this.callback('removeByKey', removed);
    }
  },
  remove: function() {
    for (var i = 0; i < arguments.length; i++) {
      var item = arguments[i];
      for (var ix in this.keyFields) {
        var key = this.find(item, this.keyFields[ix]);
        if (key) {
          var ix = this._map[key].indexOf(item);
          if (ix != -1)
            this._map[key].splice(ix, 1);

          if (this._map[key].length == 0)
            delete this._map[key];
        }
      }

      this._list.splice(this._list.indexOf(item), 1);
    }

    if (this.callback) {
      this.callback('remove', arguments);
    }
  },
  removeAll: function() {
    var old = this._list.concat();
    this._map = {};
    this._list = [];

    if (this.callback) {
      this.callback('remove', old);
    }
  },
  find: function(obj, path) {
    if (typeof path === 'string') {
      return obj[path];
    }

    var dup = path.concat();
    // else assume array.
    while (dup.length && obj) {
      obj = obj[dup.shift()];
    }

    return obj;
  },
  clone: function(callback) {
    var n = new HashArray(this.keyFields.concat(), callback ? callback : this.callback);
    n.add.apply(n, this.all.concat());
    return n;
  }
};

module.exports = HashArray;
},{}],25:[function(require,module,exports){
/*======================================================*\
 * BirdSprite() 
\*======================================================*/
function BirdSprite(game, x, y) {
  Phaser.Group.call(this, game);
 
  // configure group 
  this.x = x;
  this.y = y;
  
  // add the birdSprite 
  this.birdSprite   = this.create(0, 0, 'bird');
   
  // you can't set the anchor point of a group, so for x & y to correspond
  // to the BirdSprite's center we have to offset it manually
  this.birdSprite.x = -this.birdSprite.width  / 2.0;
  this.birdSprite.y = -this.birdSprite.height / 2.0;
};

BirdSprite.prototype = Object.create(Phaser.Group.prototype);
BirdSprite.prototype.constructor = BirdSprite;

/*======================================================*\
 * Public Methods 
\*======================================================*/

BirdSprite.prototype.updateWithModel = function(model) {
  this.x = model.x;
  this.y = model.y;
  this.angle = model.angle * 57.2957795;
  this.scale.x = this.scale.y = model.scale;
};

/*======================================================*\
 * Factory 
\*======================================================*/

Phaser.GameObjectFactory.prototype.bird = function(x, y, group) {
  if(typeof group === 'undefined')
    group = this.world;
  
  return group.add(new BirdSprite(this.game, x, y));
};
},{}],26:[function(require,module,exports){
/*======================================================*\
 * BulletSprite() 
\*======================================================*/
function BulletSprite(game, x, y) {
  Phaser.Group.call(this, game);
 
  // configure group 
  this.x = x;
  this.y = y;
  
  // add the BulletSprite 
  this.BulletSprite   = this.create(0, 0, 'bullet');
};

BulletSprite.prototype = Object.create(Phaser.Group.prototype);
BulletSprite.prototype.constructor = BulletSprite;

/*======================================================*\
 * Public Methods 
\*======================================================*/

BulletSprite.prototype.updateWithModel = function(model) {
  this.x = model.x;
  this.y = model.y;
};

/*======================================================*\
 * Factory 
\*======================================================*/

Phaser.GameObjectFactory.prototype.bullet = function(x, y, group) {
  if(typeof group === 'undefined')
    group = this.world;
  
  return group.add(new BulletSprite(this.game, x, y));
};
},{}],27:[function(require,module,exports){
/*======================================================*\
 * PlanePartSprite() 
\*======================================================*/
function PlanePartSprite(game, x, y, frame) {
  Phaser.Group.call(this, game);
 
  // configure group 
  this.x = x;
  this.y = y;

  // add the PlanePartSprite 
  this.planePartSprite = this.create(0, 0, 'planeparts');
  this.planePartSprite.x = -this.planePartSprite.width / 2.0;
  this.planePartSprite.y = -this.planePartSprite.height / 2.0;
  //0 - right wing
  //1 - left wing
  //2 - tail
  //3 - body
  //4 - engine
  this.planePartSprite.frame = Math.min(frame, 4);
};

PlanePartSprite.prototype = Object.create(Phaser.Group.prototype);
PlanePartSprite.prototype.constructor = PlanePartSprite;

/*======================================================*\
 * Public Methods 
\*======================================================*/
PlanePartSprite.prototype.updateWithModel = function(model) {
  this.x = model.x;
  this.y = model.y;
  this.angle = model.angle;
};

/*======================================================*\
 * Factory 
\*======================================================*/
Phaser.GameObjectFactory.prototype.planePart = function(x, y, frame, group) {
  if(typeof group === 'undefined')
    group = this.world;
  
  return group.add(new PlanePartSprite(this.game, x, y, frame));
};
},{}],28:[function(require,module,exports){
/*======================================================*\
 * Plane() 
\*======================================================*/
function Plane(game, x, y) {
  console.log('NEW PLANE SPRITE');
  
  Phaser.Group.call(this, game);
 
  // configure group 
  this.x = x;
  this.y = y;
  this.health = 100;
  
  // add the airplane 
  this.airplane   = this.create(0, 0, 'airplane');
   
  // you can't set the anchor point of a group, so for x & y to correspond
  // to the plane's center we have to offset it manually
  this.airplane.x = -this.airplane.width  / 2.0;
  this.airplane.y = -this.airplane.height / 2.0;

  // add the status ring 
  this.statusRing = game.add.graphics(0.0, 0.0, this);
};

Plane.prototype = Object.create(Phaser.Group.prototype);
Plane.prototype.constructor = Plane;

/*======================================================*\
 * Public Methods 
\*======================================================*/

Plane.prototype.displayStatusRing = function(isPlayer, health) {
  var ratio = (health / 100.0);

  this.statusRing.alpha = 1.0 * ratio;

  this.statusRing.clear();
  this.statusRing.lineStyle(3.0, 0x3beb72);

  this.statusRing.arc(0, 0, 20.0, -(Math.PI/4) * ratio, (Math.PI / 4) * ratio ); 

  this.statusRing.lineStyle(1.0, 0x3beb72, 0.2);

  if (isPlayer)
    this.statusRing.drawCircle(0, 0, 25); 
};

Plane.prototype.updateWithModel = function(model) {
  this.x = model.x;
  this.y = model.y;
  this.angle = model.angle * 57.2957795;

  if (model.bank < 0)
    this.airplane.frame = 2;
  else if (model.bank > 0)
    this.airplane.frame = 1;
  else 
    this.airplane.frame = 0;
};

/*======================================================*\
 * Factory 
\*======================================================*/

Phaser.GameObjectFactory.prototype.plane = function(x, y, group) {
  if(typeof group === 'undefined')
    group = this.world;
  return group.add(new Plane(this.game, x, y));
};
},{}],29:[function(require,module,exports){
/*======================================================*\
 * SmokeSprite() 
\*======================================================*/
function SmokeSprite(game, x, y) {
  Phaser.Group.call(this, game);
 
  // configure group 
  this.x = x;
  this.y = y;
  this.angle = 360 * Math.random();
  this.startScale = Math.random() + 0.3;
  // add the SmokeSprite 
  this.smokeSprite = this.create(0, 0, 'smoke');
  this.smokeSprite.x = -this.smokeSprite.width / 2.0;
  this.smokeSprite.y = -this.smokeSprite.height / 2.0;
  this.smokeSprite.scale.x = this.smokeSprite.scale.y = 1.0;
  this.smokeSprite.frame = 0;
};

SmokeSprite.prototype = Object.create(Phaser.Group.prototype);
SmokeSprite.prototype.constructor = SmokeSprite;

/*======================================================*\
 * Public Methods 
\*======================================================*/
SmokeSprite.prototype.updateWithModel = function(model) {
  this.x = model.x;
  this.y = model.y;
};

SmokeSprite.prototype.setLife = function (life) {
  if (this.smokeSprite)
    this.smokeSprite.frame = Math.floor(life * 4);

  if (life < 0)
      life = 0

  this.scale.x = this.scale.y = 1.0;// Math.max((this.startScale * life) + 0.2, 1.0);

  this.alpha = life * 0.8;
};

/*======================================================*\
 * Factory 
\*======================================================*/
Phaser.GameObjectFactory.prototype.smoke = function(x, y, group) {
  if(typeof group === 'undefined')
    group = this.world;
  
  return group.add(new SmokeSprite(this.game, x, y));
};
},{}],30:[function(require,module,exports){
var UserInputState = require('../../../shared/js/UserState');

/*===================================================*\
 * SCStateManager()
\*===================================================*/
var SCStateManager = function(fps, gameInterface) {
  this.gameInterface = gameInterface;
  this.frameTime = 1000.0 / fps;
};

/*===================================================*\
 * Prototype
\*===================================================*/
SCStateManager.prototype = {
  /*===========================*\
   * Variables
  \*===========================*/
  userInputStates: [],
  lastUpdateTimeEnd: undefined,
  estServerTime: undefined,
  lastServerState: undefined,
  intervalId: undefined,
  latency: 0,
  lastSendToServerTime: 1000.0 / 30.0,
  /**
   * Send an update to the server every this so often.
   */
  serverUpdateInterval: 10,
  /*===========================*\
   * Properties
  \*===========================*/
  get now() {
    return (new Date()).getTime();
  },
  /*===========================*\
   * Methods
  \*===========================*/
  play: function () {
    this.intervalId = setInterval(this.intervalHandler.bind(this), this.frameTime);
  },
  pause: function () {
    if (this.intervalId)
      clearInterval(this.intervalId);
  },
  update: function ()
  {
    if (this.newServerState && !this.lastServerState)
      this.lastServerState = this.newServerState;

    // As long as the server has never sent us a state, we do nothing.
    if (!this.lastServerState || this.latency == 0)
      return;

    var self = this,
      // Time this update started
      updateStart = this.now,
      // Time since our last update ended
      elapsed = updateStart - this.lastUpdateTimeEnd,
      // The state of all user input
      userInput = this.gameInterface.userInput;

    this.lastUpdateTimeEnd = this.now;

    // Set last server state to either the update
    this.lastServerState = this.newServerState || this.lastServerState;

    // Update game interface to old server state
    this.gameInterface.state = this.lastServerState;

    // Estimate the current server time at this exact point (the server will be behind us by a period of time)
    this.estServerTime = Math.round(this.newServerState ? this.newServerState.time + (this.latency / 2.0) : this.estServerTime + elapsed);

    // Establish our simulation starting time.
    var t = this.lastServerState.time,
      simElapsed = 0.0;

    // Filter out any old user frame states
    this.userInputStates = this.userInputStates.filter(function (userInputState) {
      return userInputState.time > self.lastServerState.time;
    });

    // Simulate all frames the server has not yet processed.
    this.userInputStates.forEach(function (userInputState) {
      simElapsed = userInputState.time - t;
      self.gameInterface.simulateUpdate(userInputState.input, simElapsed);
      t = userInputState.time;
    });

    // Save our current state
    var newUserInputState = new UserInputState(userInput, this.estServerTime);
    this.userInputStates.push(newUserInputState);

    // Finish simluating the remaining milliseconds based on the current user input.
    this.gameInterface.simulateUpdate(newUserInputState.input, this.estServerTime - t);

    if (this.estServerTime - this.lastSendToServerTime > this.serverUpdateInterval)
    {
      // Send our state to the server
      this.gameInterface.updateServer(newUserInputState);

      this.lastSendToServerTime = this.estServerTime;
    }

    // We have processed it, so throw it away.
    this.newServerState = undefined;
  },
  /*===========================*\
   * Methods
  \*===========================*/
  intervalHandler: function () {
    this.update();
  }
};

module.exports = SCStateManager;
},{"../../../shared/js/UserState":8}],31:[function(require,module,exports){
var
  GameObject = require('../../../shared/js/GameObject'),
  World = require('../../../shared/js/gameObjects/World'),
  Player = require('../../../shared/js/gameObjects/Player'),
  LatencyAnalyzer = require('../../../shared/js/LatencyAnalyzer'),
  SCStateManager = require('./ServerClientStateManager'),
  UserInputProcessor = require('../../../shared/js/UserInputProcessor'),
  HashArray = require('../../../shared/js/lib/HashArray');

/*======================================================*\
 * Globals
\*======================================================*/
var FPS = 60,
  SERVER_TIMEOUT_MS = 10000,
  PLANE_GLOBALS = Player.prototype.GLOBALS;

/*===================================================*\
 * SkyDuelClient()
\*===================================================*/
var SkyDuelClient = function() {
  this.latencyAnalyzer = new LatencyAnalyzer();
  this.scStateManager = new SCStateManager(60, this);
  this.userInputProcessor = new UserInputProcessor();

  this.world = new World();
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelClient.prototype = {
  /*===========================*\
   * Variables
  \*===========================*/
  started: false,
  input: {},
  player: undefined,
  errorText: undefined,
  /*===========================*\
   * Properties
  \*===========================*/
  get state() {
    return {};
  },
  set state(value) {
    this.world.setState(value.world);
  },
  get userInput() {
    return {
      up: this.input.up.isDown,
      down: this.input.down.isDown,
      left: this.input.left.isDown,
      right: this.input.right.isDown,
      trigger: this.input.trigger.isDown
    };
  },
  /*===========================*\
   * Methods
  \*===========================*/
  latencyCheck: function (count, callback) {
    var self = this,
      i = 0;
      count = count || 10;

    ping();

    function ping() {
      self.latencyAnalyzer.startTest();
      pomelo.request('skyduel.skyduelHandler.ping', skyduel_skyduelHandler_pingHandler);
    }

    function skyduel_skyduelHandler_pingHandler() {
      self.latencyAnalyzer.endTest();
      (++i < count) ? ping() : callback();
    }
  },
  start: function (rid) {
    this.rid = rid;
    this.started = true;

    this.latencyCheck(10, this.startServerConnection.bind(this));
  },
  stop: function (reason) {
    this.errorText = reason;
    this.scStateManager.pause();
  },
  startServerConnection: function () {
    this.scStateManager.latency = this.latencyAnalyzer.latency;
    pomelo.request('skyduel.skyduelHandler.start', {
      rid: this.rid
    }, this.serverConnection_startedHandler.bind(this));
  },
  //SCStateManager Interface
  simulateUpdate: function (userInput, elapsed) {
    elapsed =  elapsed / 1000.0;

    if (elapsed > SERVER_TIMEOUT_MS)
    {
      this.stop('Server disconnected');      
    }
    if (elapsed > 0.2)
      throw Error('Elapsed is wayyyy too high man. Did server disconnect?');

    this.userInputProcessor.update(userInput, elapsed, this);

    this.world.update(elapsed);
  },
  //SCStateManager Interface
  updateServer: function (userInputState) {
    this.latencyAnalyzer.startTest();
    pomelo.request('skyduel.skyduelHandler.userInput', this.userInput, this.socket_updateServerResponseHandler.bind(this));
  },
  setupStartState: function(state) {
    console.log('Initial world state', state.world);

    this.world.setState(state.world);

    this.player = this.world.getChildren().get(this.uid);

    if (!this.player)
    {
      console.log (state);
      console.log('Player could not be found in incoming state!', this.uid);
    }

    this.scStateManager.newServerState = state;

    this.scStateManager.play();
  },
  /*===========================*\
   * Events
  \*===========================*/
  serverConnection_startedHandler: function (data) {
    this.uid = data.uid;

    console.log('SERVER CONNECTION started', data);
    console.log('WAITING for server state');

    pomelo.on('serverState', this.socket_serverStateHandler.bind(this));

    this.scStateManager.play();
  },
  socket_serverStateHandler: function (data) {
    if (!this.scStateManager.lastServerState)
      this.setupStartState(data);
    else
    {
      this.scStateManager.newServerState = data;
    }
  },
  socket_updateServerResponseHandler: function (data) {
    this.latencyAnalyzer.endTest();
  }
};

window.client = new SkyDuelClient();

},{"../../../shared/js/GameObject":4,"../../../shared/js/LatencyAnalyzer":5,"../../../shared/js/UserInputProcessor":7,"../../../shared/js/gameObjects/Player":21,"../../../shared/js/gameObjects/World":23,"../../../shared/js/lib/HashArray":24,"./ServerClientStateManager":30}],32:[function(require,module,exports){
/* an ajax log file tailer / viewer
copyright 2007 john minnihan.
 
http://freepository.com
 
Released under these terms
1. This script, associated functions and HTML code ("the code") may be used by you ("the recipient") for any purpose.
2. This code may be modified in any way deemed useful by the recipient.
3. This code may be used in derivative works of any kind, anywhere, by the recipient.
4. Your use of the code indicates your acceptance of these terms.
5. This notice must be kept intact with any use of the code to provide attribution.
*/

function createRequest() {
 var request = null;
  try {
   request = new XMLHttpRequest();
  } catch (trymicrosoft) {
   try {
     request = new ActiveXObject("Msxml2.XMLHTTP");
   } catch (othermicrosoft) {
     try {
      request = new ActiveXObject("Microsoft.XMLHTTP");
     } catch (failed) {
       request = null;
     }
   }
 }
 
 if (request == null) {
   alert("Error creating request object!");
 } else {
   return request;
 }
}
 
var request = createRequest();

window.getLog = function(timer) {
  var url = "http://" + window.location.hostname + (window.location.hostname != 'www.skyduel.com' ? ':3001' : '') + "/log/game-server.log";
  request.open("GET", url, true);
  request.onreadystatechange = updatePage;
  request.send(null);
  startTail(timer);
}

function startTail(timer) {
  if (timer == "stop") {
    stopTail();
  } else {
    t = setTimeout("getLog()", 1000);
  }
}

function stopTail() {
  clearTimeout(t);
  var pause = "The log viewer has been paused. To begin viewing again, click the Start Viewer button.\n";
  logDiv = document.getElementById("log");
  var newNode = document.createTextNode(pause);
  logDiv.replaceChild(newNode, logDiv.childNodes[0]);
}

function updatePage() {
  if (request.readyState == 4) {
    if (request.status == 200) {
      var currentLogValue = request.responseText.split("\n");
      eval(currentLogValue);
      logDiv = document.getElementById("log");
      var logLine = ' ';
      for (i = 0; i < currentLogValue.length - 1; i++) {
        logLine += currentLogValue[i] + "\n";
      }
      logDiv.innerHTML = logLine;
    } else
      console.log("Error! Request status is " + request.status);
  }
}
},{}],33:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4uanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0V4cGxvZGVzLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19SZXNwYXducy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Ntb2tlcy5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9CaXJkLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL0J1bGxldC5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGFuZVBhcnQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1Ntb2tlLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1dvcmxkLmpzIiwic2hhcmVkL2pzL2xpYi9IYXNoQXJyYXkuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9CaXJkU3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvQnVsbGV0U3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVQYXJ0U3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9TbW9rZVNwcml0ZS5qcyIsIndlYi1zZXJ2ZXIvcHVibGljL2pzL1NlcnZlckNsaWVudFN0YXRlTWFuYWdlci5qcyIsIndlYi1zZXJ2ZXIvcHVibGljL2pzL1NreUR1ZWxDbGllbnQuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9sb2dWaWV3ZXIuanMiLCIuLi8uLi8uLi8uLi8uLi91c3IvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIExpYnJhcnlcclxudmFyIGlzQ2xpZW50ID0gdHJ1ZTtcclxuXHJcbnJlcXVpcmUoXCIuL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9qY2xhc3MvbGliL2pjbGFzcy5taW4uanNcIik7XHJcblxyXG4vLyBTaGFyZWRcclxuXHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9saWIvSGFzaEFycmF5LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4uanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1Ntb2tlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvQnVsbGV0LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvQmlyZC5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvVXNlclN0YXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvVXNlcklucHV0UHJvY2Vzc29yLmpzXCIpO1xyXG5cclxuLy8gU3ByaXRlc1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9QbGFuZVBhcnRTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL1Ntb2tlU3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9QbGFuZVNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvQnVsbGV0U3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9CaXJkU3ByaXRlLmpzXCIpO1xyXG5cclxuLy8gQ2xpZW50XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9MYXRlbmN5QW5hbHl6ZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL1NlcnZlckNsaWVudFN0YXRlTWFuYWdlci5qc1wiKTtcclxucmVxdWlyZShcIi4vd2ViLXNlcnZlci9wdWJsaWMvanMvU2t5RHVlbENsaWVudC5qc1wiKTtcclxuXHJcbi8vIFZpZXdcclxucmVxdWlyZShcIi4vd2ViLXNlcnZlci9wdWJsaWMvanMvbG9nVmlld2VyLmpzXCIpOyIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwpe1xuLyohXG4gKiBKYXZhU2NyaXB0IEluaGVyaXRhbmNlIHdpdGggUHJpdmF0ZSBNZW1iZXJzXG4gKiBMYXJnZWx5IGJhc2VkIHVwb24gSm9obiBSZXNpZydzIGluaGVyaXRhbmNlIHRlY2huaXF1ZSxcbiAqIChzZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL3NpbXBsZS1qYXZhc2NyaXB0LWluaGVyaXRhbmNlLylcbiAqIHRoYXQgd2FzIGluc3BpcmVkIGJ5IGJhc2UyIGFuZCBQcm90b3R5cGUuXG4gKlxuICogV29ya3Mgd2l0aCBhbmQgd2l0aG91dCBub2RlLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqXG4gKiB2Mi4wLjQsIE1hcmNlbCBSaWVnZXIsIDIwMTNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yaWdhL2pjbGFzc1xuICogaHR0cHM6Ly9ucG1qcy5vcmcvcGFja2FnZS9qY2xhc3NcbiAqL1xudmFyIG5zLG5zS2V5O1xuaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCImJnR5cGVvZiBwcm9jZXNzIT09XCJ1bmRlZmluZWRcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCImJm1vZHVsZS5leHBvcnRzKXtucz1tb2R1bGU7bnNLZXk9XCJleHBvcnRzXCI7fWVsc2V7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe25zPXdpbmRvdztcbm5zS2V5PVwiSkNsYXNzXCI7fX0oZnVuY3Rpb24oZCxmKXt2YXIgYj1kW2ZdO3ZhciBhPXtleHRlbmRhYmxlOnRydWUsY3Rvck5hbWU6XCJpbml0XCIsc3VwZXJOYW1lOlwiX3N1cGVyXCIsZW5hYmxlUHJpdmFjeTp0cnVlLHByaXZhdGVQYXR0ZXJuOi9eX18uKy8sdHJhY2tpbmc6dHJ1ZSxwcml2YXRlTmFtZTpcIl9fXCIsbWV0aG9kc0tleTpcIl9qY01ldGhvZHNfXCIsZGVwdGhLZXk6XCJfamNEZXB0aF9cIixjYWxsZXJEZXB0aEtleTpcIl9qY0NhbGxlckRlcHRoX1wifTtcbnZhciBjPWZhbHNlO3ZhciBlPWZ1bmN0aW9uKCl7fTtlLmV4dGVuZD1mdW5jdGlvbihtLGcpe2c9Z3x8e307Zm9yKHZhciBxIGluIGEpe2lmKGdbcV09PT11bmRlZmluZWQpe2dbcV09YVtxXTt9fWlmKCFnLmVuYWJsZVByaXZhY3kpe2cucHJpdmF0ZVBhdHRlcm49bnVsbDtcbmcucHJpdmF0ZU5hbWU9bnVsbDt9dmFyIHI9dGhpcy5wcm90b3R5cGU7Yz10cnVlO3ZhciBvPW5ldyB0aGlzKCk7Yz1mYWxzZTtvW2cuZGVwdGhLZXldPXJbZy5kZXB0aEtleV18fDA7b1tnLmRlcHRoS2V5XSsrO3ZhciBrPW9bZy5kZXB0aEtleV07dmFyIGk9e307dmFyIGo9e307XG52YXIgcz17fTtmb3IodmFyIGggaW4gbSl7aWYobVtoXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXt2YXIgbj0oZnVuY3Rpb24odCx1KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdj10aGlzW2cuc3VwZXJOYW1lXTtpZighZy5wcml2YXRlUGF0dGVybnx8IWcucHJpdmF0ZVBhdHRlcm4udGVzdCh0KSl7dGhpc1tnLnN1cGVyTmFtZV09clt0XTtcbn12YXIgRDtpZihnLnByaXZhdGVOYW1lKXtEPXRoaXNbZy5wcml2YXRlTmFtZV07dGhpc1tnLnByaXZhdGVOYW1lXT1EfHxzO312YXIgeSxFLHgsSTtpZihnLnByaXZhdGVQYXR0ZXJuKXtpZih0aGlzW2cuY2FsbGVyRGVwdGhLZXldPT09dW5kZWZpbmVkKXt0aGlzW2cuY2FsbGVyRGVwdGhLZXldPWs7XG59eT10aGlzW2cubWV0aG9kc0tleV07aWYodD09Zy5jdG9yKXt0aGlzW2cubWV0aG9kc0tleV09eXx8aTtmb3IodmFyIHogaW4gaSl7aWYoIXRoaXNbZy5tZXRob2RzS2V5XVt6XSl7dGhpc1tnLm1ldGhvZHNLZXldW3pdPXt9O310aGlzW2cubWV0aG9kc0tleV1bel1ba109aVt6XVtrXTtcbnZhciBDPXRoaXNbZy5tZXRob2RzS2V5XVt6XVtrXTt0aGlzW2cubWV0aG9kc0tleV1bel1ba109ZnVuY3Rpb24oKXt2YXIgSz10aGlzW2cuc3VwZXJOYW1lXTt0aGlzW2cuc3VwZXJOYW1lXT10aGlzW2cubWV0aG9kc0tleV1bel1bay0xXTt2YXIgSj1DLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcbnRoaXNbZy5zdXBlck5hbWVdPUs7cmV0dXJuIEo7fTt9aT10aGlzW2cubWV0aG9kc0tleV07fWVsc2V7dGhpc1tnLm1ldGhvZHNLZXldPWk7fUU9e307Zm9yKHZhciB6IGluIHRoaXNbZy5tZXRob2RzS2V5XSl7RVt6XT10aGlzW3pdO3ZhciBGPU1hdGgubWF4LmFwcGx5KE1hdGgsT2JqZWN0LmtleXMoaVt6XSkpO1xudGhpc1t6XT1pW3pdW0ZdO31pZihnLnRyYWNraW5nKXt4PXt9O2Zvcih2YXIgRyBpbiBqKXt4W0ddPXRoaXNbR107dGhpc1tHXT1qW0ddO319aWYoZy50cmFja2luZyl7ST1PYmplY3Qua2V5cyh0aGlzKTt9fXZhciBCPXUuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKGcucHJpdmF0ZVBhdHRlcm4pe2lmKGcudHJhY2tpbmcpe3ZhciBIPU9iamVjdC5rZXlzKHRoaXMpO1xuZm9yKHZhciBHIGluIEgpe0c9SFtHXTtpZihnLnByaXZhdGVQYXR0ZXJuLnRlc3QoRykpe3hbR109dGhpc1tHXTtqW0ddPXRoaXNbR107fX1mb3IodmFyIEcgaW4gSSl7Rz1JW0ddO3ZhciBBPUguaW5kZXhPZihHKTwwJiZnLnByaXZhdGVQYXR0ZXJuLnRlc3QoRyk7aWYoQSl7ZGVsZXRlIGpbR107XG5kZWxldGUgdGhpc1tHXTt9fWZvcih2YXIgRyBpbiBqKXt2YXIgdz10aGlzW2cuY2FsbGVyRGVwdGhLZXldO2lmKHhbR109PT11bmRlZmluZWR8fGs9PXcpe2RlbGV0ZSB0aGlzW0ddO31lbHNle3RoaXNbR109eFtHXTt9fX1mb3IodmFyIEcgaW4gdGhpc1tnLm1ldGhvZHNLZXldKXtpZihFW0ddPT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tHXTtcbn1lbHNle3RoaXNbR109RVtHXTt9fWlmKHk9PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW2cubWV0aG9kc0tleV07fWVsc2V7dGhpc1tnLm1ldGhvZHNLZXldPXk7fWlmKGs9PXRoaXNbZy5jYWxsZXJEZXB0aEtleV0pe2RlbGV0ZSB0aGlzW2cuY2FsbGVyRGVwdGhLZXldO1xufX1pZihnLnByaXZhdGVOYW1lKXtpZihEPT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLnByaXZhdGVOYW1lXTt9ZWxzZXt0aGlzW2cucHJpdmF0ZU5hbWVdPUQ7fX1pZih2PT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLnN1cGVyTmFtZV07fWVsc2V7dGhpc1tnLnN1cGVyTmFtZV09djtcbn1yZXR1cm4gQjt9O30pKGgsbVtoXSk7dmFyIGw9Zy5wcml2YXRlUGF0dGVybiYmZy5wcml2YXRlUGF0dGVybi50ZXN0KGgpO2lmKGwpe2lbaF09e307aVtoXVtrXT1uO31lbHNle29baF09bjt9fWVsc2V7dmFyIGw9Zy50cmFja2luZyYmZy5wcml2YXRlUGF0dGVybiYmZy5wcml2YXRlUGF0dGVybi50ZXN0KGgpO1xuaWYobCl7altoXT1tW2hdO31lbHNle29baF09bVtoXTt9fX1mdW5jdGlvbiBwKCl7aWYoIWMmJnRoaXNbZy5jdG9yTmFtZV0pe3RoaXNbZy5jdG9yTmFtZV0uYXBwbHkodGhpcyxhcmd1bWVudHMpO319cC5wcm90b3R5cGU9bztwLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1wO1xuaWYoZy5leHRlbmRhYmxlIT09ZmFsc2Upe3AuZXh0ZW5kPWFyZ3VtZW50cy5jYWxsZWU7fXJldHVybiBwO307ZS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7dmFyIGc9ZFtmXTtkW2ZdPWI7cmV0dXJuIGc7fTtkW2ZdPWU7fSkobnMsbnNLZXkpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJyksdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBSZXF1aXJlc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyID0gcmVxdWlyZSgnLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyJyksXHJcbiAgSkNsYXNzID0gcmVxdWlyZSgnamNsYXNzJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHYW1lT2JqZWN0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEdhbWVPYmplY3QgPSBtb2R1bGUuZXhwb3J0cyA9IEpDbGFzcy5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGF0ZVNldFByb3BzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9LFxyXG4gIHN0YXRlR2V0UHJvcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIFsnX2lkJ107XHJcbiAgfSxcclxuICBzZXRQYXJlbnQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldFBhcmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gIH0sXHJcbiAgc2V0Q2hpbGRyZW46IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAvLyBEZXNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgdGhpcy5fY2hpbGRyZW4gPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuOiBmdW5jdGlvbigpIHtcclxuICAgIC8vIFNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xyXG4gIH0sXHJcbiAgc2V0SWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0SWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkIHx8ICh0aGlzLl9pZCA9IHRoaXMucmFuZG9tSWQoKSk7XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLnN0YXRlO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuSWRzOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICB2YXIgcmV0ID0ge307XHJcblxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICByZXRbY2hpbGQuZ2V0SWQoKV0gPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9LFxyXG4gIHNldENoaWxkcmVuU3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIGlkcyA9IHRoaXMuZ2V0Q2hpbGRyZW5JZHMoKTtcclxuXHJcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICAgIHZhciBjaGlsZCA9IHNlbGYuZ2V0Q2hpbGRyZW4oKS5nZXQoY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICAgIGlmICghY2hpbGQpXHJcbiAgICAgICAgc2VsZi5nZXRDaGlsZHJlbigpLmFkZChzZWxmLm5ld0NoaWxkRnJvbVN0YXRlKGNoaWxkU3RhdGUpKTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjaGlsZCkgPT09ICdbb2JqZWN0IEFycmF5XScgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUd28gaWRzIGFyZSB0aGUgc2FtZSEnLCBjaGlsZFswXS5nZXRJZCgpKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlbGV0ZSBpZHNbY2hpbGRTdGF0ZS5pZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5kZXN0cm95VW5mb3VuZENoaWxkcmVuT25TdGF0ZVNldClcclxuICAgICAgZm9yICh2YXIgaWQgaW4gaWRzKVxyXG4gICAgICAgIHRoaXMuZGVzdHJveUNoaWxkQnlJZChpZCk7XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlblN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIHJldHVybiBjaGlsZC5nZXRTdGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXREaXJ0eTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIC8vIERlc2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICB0aGlzLl9kaXJ0eSA9IHZhbHVlO1xyXG4gICAgKHRoaXMuX2RpcnR5ICYmIHRoaXMuZ2V0UGFyZW50KCkpID8gdGhpcy5nZXRQYXJlbnQoKS5zZXREaXJ0eSh0cnVlKSA6ICcnO1xyXG4gICAgIXRoaXMuX2RpcnR5ID8gdGhpcy5nZXRDaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnNldERpcnR5KGZhbHNlKTtcclxuICAgIH0pIDogJyc7XHJcbiAgfSxcclxuICBnZXREaXJ0eTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBTZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHJldHVybiB0aGlzLl9kaXJ0eTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICByYW5kb21JZDogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk5OTk5OTk5OSkudG9TdHJpbmcoMTYpO1xyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQpIHtcclxuICAgIGlmICghcGFyZW50KVxyXG4gICAge1xyXG4gICAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS53b3JsZCA9IEdhbWVPYmplY3QucHJvdG90eXBlLnJvb3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SWQoaWQpO1xyXG4gICAgdGhpcy50eXBlID0gJ0dhbWVPYmplY3QnO1xyXG4gICAgdGhpcy5idWlsZENoaWxkcmVuT2JqZWN0KCk7XHJcbiAgICB0aGlzLnNldFBhcmVudChwYXJlbnQpO1xyXG4gICAgdGhpcy5zZXREaXJ0eSh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuZGVzdHJveVVuZm91bmRDaGlsZHJlbk9uU3RhdGVTZXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlciA9IG5ldyBDaGFyYWN0ZXJpc3RpY01hbmFnZXIodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0ZWQ9IHRydWU7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyBXaXBlIG91dCBhbnkgZGVzdHJveWVkIGNoaWxkcmVuLlxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5jb25jYXQoKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBpZiAoY2hpbGQuZGVzdHJveWVkKVxyXG4gICAgICAgIHNlbGYuZ2V0Q2hpbGRyZW4oKS5yZW1vdmUoY2hpbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC51cGRhdGUoZWxhcHNlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFwcGx5QWxsKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgbmV3Q2hpbGRGcm9tU3RhdGU6IGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICB2YXIgY2hpbGQgPSBuZXcgR2FtZU9iamVjdCgpO1xyXG4gICAgY2hpbGQuaW5pdCh0aGlzLCBjaGlsZFN0YXRlLmlkKVxyXG4gICAgY2hpbGQuc3RhdGUgPSBjaGlsZFN0YXRlO1xyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH0sXHJcbiAgZGVzdHJveUNoaWxkQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmdldENoaWxkcmVuKCkuZ2V0KGlkKTtcclxuXHJcbiAgICBpZiAoIWNoaWxkKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBkZXN0cm95IG5vbi1leGlzdGVudCBjaGlsZCB3aXRoIGlkJywgaWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoaWxkLmRlc3Ryb3kpXHJcbiAgICB7XHJcbiAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLnJlbW92ZShjaGlsZCk7XHJcbiAgfSxcclxuICBidWlsZENoaWxkcmVuT2JqZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldENoaWxkcmVuKG5ldyBIYXNoQXJyYXkoWydfaWQnLCAndHlwZSddKSk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gIH0sXHJcbiAgdXBkYXRlU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICBpZiAodGhpcy5zcHJpdGUgJiYgdGhpcy5kZXN0cm95ZWQpXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgaWYgKCF0aGlzLnNwcml0ZSlcclxuICAgICAgICB0aGlzLmJ1aWxkU3ByaXRlKHBoYXNlcik7XHJcblxyXG4gICAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICAgICAgdGhpcy5zcHJpdGUudXBkYXRlV2l0aE1vZGVsKHRoaXMpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlUGhhc2VyOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZVBoYXNlcihwaGFzZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTcHJpdGUocGhhc2VyKTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcbn0pOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIExBVEVOQ1lfQU5BTFlaRVJfREVGQVVMVF9NQVggPSAxMDtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIExhdGVuY3lBbmFseXplcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBMYXRlbmN5QW5hbHl6ZXIgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmRlYnVnID0gZmFsc2U7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuTGF0ZW5jeUFuYWx5emVyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhY2s6IFtdLFxyXG4gIG1heFN0YWNrTGVuZ3RoOiBMQVRFTkNZX0FOQUxZWkVSX0RFRkFVTFRfTUFYLFxyXG4gIGxhc3RUZXN0VGltZTogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IGxhdGVuY3koKSB7XHJcbiAgICAvLyBSZXR1cm5zIGEgd2VpZ2h0ZWQgYXZlcmFnZSBsYXRlbmN5LlxyXG4gICAgLy8gSXRlbSBhdCBpeCAwIGhhcyB3ZWlnaHQgb2YgMSBhbmQgaXRlbSBhdCBpeCBsZW5ndGggaGFzIHdlaWdodCBvZiBsZW5ndGguXHJcbiAgICB2YXIgX2xhdGVuY3kgPSAwLCBwZXJjID0gMDtcclxuXHJcbiAgICB2YXIgd2VpZ2h0cyA9IFswLjMzXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhY2subGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIHBlcmMgKz0gd2VpZ2h0c1tpXTtcclxuICAgICAgd2VpZ2h0c1tpKzFdID0gd2VpZ2h0c1tpXSAqIDAuNjY2NjtcclxuICAgIH1cclxuXHJcbiAgICB3ZWlnaHRzWzBdICs9IDEuMCAtIHBlcmM7XHJcbiAgICBwZXJjICs9IDEuMCAtIHBlcmM7XHJcbiAgICB3ZWlnaHRzLnJldmVyc2UoKTtcclxuXHJcbiAgICB0aGlzLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKGwsIGkpIHtcclxuICAgICAgX2xhdGVuY3kgKz0gbCAqIHdlaWdodHNbaV07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgY29uc29sZS5sb2coJ0xBVEVOQ1knLCBfbGF0ZW5jeSk7XHJcblxyXG4gICAgcmV0dXJuIF9sYXRlbmN5O1xyXG4gIH0sXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFydFRlc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubGFzdFRlc3RUaW1lID0gdGhpcy5ub3c7XHJcbiAgfSxcclxuICBlbmRUZXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy5sYXN0VGVzdFRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgY29uc29sZS5sb2coJ0xBVEVOQ1knLCB0aGlzLmxhdGVuY3kpO1xyXG4gICAgdGhpcy5wdXNoKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgcHVzaDogZnVuY3Rpb24obGF0ZW5jeSkge1xyXG4gICAgdGhpcy5zdGFjay5wdXNoKGxhdGVuY3kpO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLnN0YWNrLmxlbmd0aCA+IHRoaXMubWF4U3RhY2tMZW5ndGgpXHJcbiAgICAgIHRoaXMuc3RhY2suc2hpZnQoKTtcclxuICB9LFxyXG4gIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnN0YWNrID0gW107XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gTGF0ZW5jeUFuYWx5emVyOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVTRVJfQUNUSU9OUyA9IHtcclxuICBMRUZUX0RPV046IDB4MDAwMSxcclxuICBMRUZUX1VQOiAweDAwMDIsXHJcbiAgUklHSFRfRE9XTjogMHgwMDEwLFxyXG4gIFJJR0hUX1VQOiAweDAwMjAsXHJcbiAgVVBfRE9XTjogMHgwMTAwLFxyXG4gIFVQX1VQOiAweDAyMDAsXHJcbiAgRE9XTl9ET1dOOiAweDEwMDAsXHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IFVTRVJfQUNUSU9OUztcclxufSBlbHNlIHtcclxuICB3aW5kb3cuVVNFUl9BQ1RJT05TID0gVVNFUl9BQ1RJT05TO1xyXG59IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogVXNlcklucHV0UHJvY2Vzc29yKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVzZXJJbnB1dFByb2Nlc3NvciA9IGZ1bmN0aW9uKCkge1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblVzZXJJbnB1dFByb2Nlc3Nvci5wcm90b3R5cGUgPSB7XHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAodXNlcklucHV0LCBlbGFwc2VkLCB3b3JsZCkge1xyXG4gICAgaWYgKHVzZXJJbnB1dC5sZWZ0KVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IC13b3JsZC5wbGF5ZXIuR0xPQkFMUy5CQU5LX1JBVEU7XHJcbiAgICBlbHNlIGlmICh1c2VySW5wdXQucmlnaHQpXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gd29ybGQucGxheWVyLkdMT0JBTFMuQkFOS19SQVRFO1xyXG4gICAgZWxzZVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IDA7XHJcblxyXG4gICAgaWYgKHVzZXJJbnB1dC51cClcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gd29ybGQucGxheWVyLkdMT0JBTFMuQUNDRUxFUkFUSU9OX1JBVEU7XHJcbiAgICBlbHNlIGlmICh1c2VySW5wdXQuZG93bilcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gLXdvcmxkLnBsYXllci5HTE9CQUxTLkRFQ0VMRVJBVElPTl9SQVRFO1xyXG4gICAgZWxzZSBcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gMC4wO1xyXG5cclxuICAgIHdvcmxkLnBsYXllci50cmlnZ2VyRG93biA9IHVzZXJJbnB1dC50cmlnZ2VyO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dFByb2Nlc3NvcjsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBVc2VySW5wdXRTdGF0ZSgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBVc2VySW5wdXRTdGF0ZSA9IGZ1bmN0aW9uKGlucHV0LCB0aW1lKSB7XHJcbiAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gIHRoaXMudGltZSA9IHRpbWU7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuVXNlcklucHV0U3RhdGUucHJvdG90eXBlID0ge1xyXG4gIGlucHV0OiB1bmRlZmluZWQsXHJcbiAgdGltZTogdW5kZWZpbmVkXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dFN0YXRlOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4uL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljTWFuYWdlcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY01hbmFnZXIgPSBmdW5jdGlvbihwYXJlbnQpIHtcclxuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICB0aGlzLmNoYXJhY3RlcmlzdGljcyA9IG5ldyBIYXNoQXJyYXkoWyduYW1lJ10pO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgY2FjaGU6IHt9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhZGQ6IGZ1bmN0aW9uIChjaGFyYWN0ZXJpc3RpYykge1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MuYWRkKGNoYXJhY3RlcmlzdGljKTtcclxuICB9LFxyXG4gIGFwcGx5QWxsOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5jYWNoZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuY2hhcmFjdGVyaXN0aWNzLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGFyYWN0ZXJpc3RpYykge1xyXG4gICAgICBjaGFyYWN0ZXJpc3RpYy5hcHBseVRvKHNlbGYucGFyZW50LCBlbGFwc2VkLCBzZWxmLmNhY2hlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljTWFuYWdlcjsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcyA9IHJlcXVpcmUoJy4vQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogTWF0aCBCdWxsc2hpdFxyXG4gKiBQcm9vZiBoZXJlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg0OTIxMS9zaG9ydGVzdC1kaXN0YW5jZS1iZXR3ZWVuLWEtcG9pbnQtYW5kLWEtbGluZS1zZWdtZW50XHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIHNxcih4KSB7IHJldHVybiB4ICogeCB9XHJcbmZ1bmN0aW9uIGRpc3QyKHYsIHcpIHsgcmV0dXJuIHNxcih2LnggLSB3LngpICsgc3FyKHYueSAtIHcueSkgfVxyXG5mdW5jdGlvbiBkaXN0VG9TZWdtZW50U3F1YXJlZChwLCB2LCB3KSB7XHJcbiAgdmFyIGwyID0gZGlzdDIodiwgdyk7XHJcbiAgaWYgKGwyID09IDApIHJldHVybiBkaXN0MihwLCB2KTtcclxuICB2YXIgdCA9ICgocC54IC0gdi54KSAqICh3LnggLSB2LngpICsgKHAueSAtIHYueSkgKiAody55IC0gdi55KSkgLyBsMjtcclxuICBpZiAodCA8IDApIHJldHVybiBkaXN0MihwLCB2KTtcclxuICBpZiAodCA+IDEpIHJldHVybiBkaXN0MihwLCB3KTtcclxuICByZXR1cm4gZGlzdDIocCwgeyB4OiB2LnggKyB0ICogKHcueCAtIHYueCksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdi55ICsgdCAqICh3LnkgLSB2LnkpIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3RUb1NlZ21lbnQocCwgdiwgdykgeyByZXR1cm4gTWF0aC5zcXJ0KGRpc3RUb1NlZ21lbnRTcXVhcmVkKHAsIHYsIHcpKTsgfVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAvLyBUaGVzZSBhcmUgdGhlIGtleXMgb2YgdGhlIHdvcmxkIG9iamVjdHMgdGhhdCB0aGUgdGhpcyBvYmplY3QgY2FuIGNvbGxpZGUgd2l0aCFcclxuICB0aGlzLm9wdGlvbnMua2V5cyA9IHRoaXMub3B0aW9ucy5rZXlzIHx8IFsncGxheWVyJywgJ2JpcmQnXTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19Db2xsaWRlcy5wcm90b3R5cGUgPSB7XHJcbiAgdGVtcFBoeXNpY3M6IG5ldyBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzKCksXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBcclxuICAgIHRoaXMudGVtcFBoeXNpY3Mub3B0aW9ucyA9IHRhcmdldC53b3JsZDtcclxuXHJcbiAgICB2YXIgdGFyZ2V0cyA9IHRhcmdldC53b3JsZC5nZXRDaGlsZHJlbigpLmdldEFsbCh0aGlzLm9wdGlvbnMua2V5cyksXHJcbiAgICAgIHN0YXJ0ID0gdGhpcy50ZW1wUGh5c2ljcy5hcHBseVRlbXAodGFyZ2V0LCAwKSxcclxuICAgICAgZW5kID0gdGhpcy50ZW1wUGh5c2ljcy5hcHBseVRlbXAodGFyZ2V0LCBlbGFwc2VkKTtcclxuXHJcbiAgICB0YXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgdmFyIHNob3J0ZXN0RGlzdGFuY2UgPSBkaXN0VG9TZWdtZW50KHQsIHN0YXJ0LCBlbmQpO1xyXG4gICAgICBpZiAoc2hvcnRlc3REaXN0YW5jZSA8ICh0YXJnZXQucmFkaXVzICogMikgKyAodC5yYWRpdXMgKiAyKSlcclxuICAgICAge1xyXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuY2FsbGJhY2spXHJcbiAgICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2suYXBwbHkobnVsbCwgW3QsIHNob3J0ZXN0RGlzdGFuY2VdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXM7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB2YXIgZGVzdHJveSA9IHRhcmdldC54IDwgMCB8fCB0YXJnZXQueCA+IHRoaXMub3B0aW9ucy53aWR0aCB8fCB0YXJnZXQueSA8IDAgfHwgdGFyZ2V0LnkgPiB0aGlzLm9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgaWYgKGRlc3Ryb3kpXHJcbiAgICAgIHRhcmdldC5kZXN0cm95KCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbjsiLCJ2YXIgUGxhbmVQYXJ0ID0gcmVxdWlyZSgnLi4vZ2FtZU9iamVjdHMvUGxhbmVQYXJ0Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19FeHBsb2RlcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19FeHBsb2RlcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX0V4cGxvZGVzLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIGlmICh0eXBlb2YgaXNDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IGlzQ2xpZW50KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKHRhcmdldC5oZWFsdGggPD0gMCAmJiAhdGFyZ2V0LmV4cGxvZGVkKVxyXG4gICAge1xyXG4gICAgICB0YXJnZXQuZXhwbG9kZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmV4cGxvZGUodGFyZ2V0KTtcclxuICAgICAgdGFyZ2V0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGV4cGxvZGU6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKVxyXG4gICAge1xyXG4gICAgICB2YXIgcGFydCA9IG5ldyBQbGFuZVBhcnQodGFyZ2V0LndvcmxkLCB0YXJnZXQuZ2V0SWQoKSArICdfcGFydCcgKyBpLCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGFyZ2V0LnZlbG9jaXR5LCBpKTtcclxuICAgICAgdGFyZ2V0LndvcmxkLmdldENoaWxkcmVuKCkuYWRkKHBhcnQpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX0V4cGxvZGVzOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1BoeXNpY3MoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX1BoeXNpY3MucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIHJlcyA9IHRoaXMuYXBwbHlUZW1wKHRhcmdldCwgZWxhcHNlZCk7XHJcbiAgICB0YXJnZXQueCA9IHJlcy54O1xyXG4gICAgdGFyZ2V0LnkgPSByZXMueTtcclxuICAgIHRhcmdldC52ZWxvY2l0eSA9IHJlcy52ZWxvY2l0eTtcclxuICAgIHRhcmdldC5hbmdsZSA9IHJlcy5hbmdsZTtcclxuICB9LFxyXG4gIGFwcGx5VGVtcDogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCkge1xyXG4gICAgdmFyIHJlcyA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGFyZ2V0LnZlbG9jaXR5ID09ICd1bmRlZmluZWQnKVxyXG4gICAgICB0aHJvdyBFcnJvcignVGFyZ2V0IHZlbG9jaXR5IGlzIHVuZGVmaW5lZCBmb3IgJywgdGFyZ2V0KTtcclxuICAgIFxyXG4gICAgdmFyIHYgPSB0YXJnZXQudmVsb2NpdHk7XHJcbiAgICBcclxuICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoJ2FjY2VsZXJhdGVyJykpXHJcbiAgICAgIHYgPSB0YXJnZXQudmVsb2NpdHkgKyAodGFyZ2V0LmFjY2VsZXJhdGVyICogZWxhcHNlZCk7XHJcblxyXG4gICAgcmVzLnZlbG9jaXR5ID0gdiA+IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NQVggPyB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUFYIDogKHYgPCB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUlOID8gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01JTiA6IHYpO1xyXG5cclxuICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoJ2JhbmsnKSlcclxuICAgICAgcmVzLmFuZ2xlID0gdGFyZ2V0LmFuZ2xlICsgKHRhcmdldC5iYW5rICogZWxhcHNlZCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJlcy5hbmdsZSA9IHRhcmdldC5hbmdsZTtcclxuXHJcbiAgICByZXMueCA9IHRhcmdldC54ICsgTWF0aC5jb3MocmVzLmFuZ2xlKSAqIHJlcy52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcbiAgICByZXMueSA9IHRhcmdldC55ICsgTWF0aC5zaW4ocmVzLmFuZ2xlKSAqIHJlcy52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcblxyXG4gICAgaWYgKGlzTmFOKHJlcy54KSlcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgY29uc29sZS5sb2coZWxhcHNlZCk7XHJcbiAgICAgIHRocm93IEVycm9yKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Jlc3Bhd25zKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1Jlc3Bhd25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gIC8vIERlZmF1bHQgNS4wIHNlY29uZCByZXNwYXduIGlmIG5vbmUgcHJvdmlkZWRcclxuICB0aGlzLm9wdGlvbnMuUkVTUEFXTl9USU1FID0gdGhpcy5vcHRpb25zLlJFU1BBV05fVElNRSB8fCA1MDAwO1xyXG4gIC8vIERlZmF1bHQgNS4wIHNlY29uZCByZXNwYXduIGlmIG5vbmUgcHJvdmlkZWRcclxuICB0aGlzLm9wdGlvbnMuUkVTUEFXTl9MT0NBVElPTiA9IHRoaXMub3B0aW9ucy5SRVNQQVdOX0xPQ0FUSU9OIHx8ICdyYW5kb20nO1xyXG4gIHRoaXMub3B0aW9ucy5SRVNQQVdOX09SSUVOVEFUSU9OID0gdGhpcy5vcHRpb25zLlJFU1BBV05fT1JJRU5UQVRJT04gfHwgJ3JhbmRvbSc7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfUmVzcGF3bnMucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgLy8gUmVzcGF3bnMgYXJlIE9OTFkgcGVyZm9ybWVkIGJ5IHRoZSBzZXJ2ZXJcclxuICAgIGlmICh0eXBlb2YgaXNDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IGlzQ2xpZW50KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKHRhcmdldC5kZXN0cm95ZWQgJiYgIXRhcmdldC5yZXNwYXduaW5nKVxyXG4gICAge1xyXG4gICAgICBzZXRUaW1lb3V0KHRoaXMucmVzcGF3bkhhbmRsZXIuYmluZCh0aGlzLCB0YXJnZXQpLCB0aGlzLm9wdGlvbnMuUkVTUEFXTl9USU1FKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlc3Bhd25IYW5kbGVyOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICB0YXJnZXQucmVzcGF3bigpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1Jlc3Bhd25zOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdGFyZ2V0LnggPSB0YXJnZXQueCA8IDAgPyB0aGlzLm9wdGlvbnMud2lkdGggOiB0YXJnZXQueDtcclxuICAgIHRhcmdldC54ID0gdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggPyB0YXJnZXQueCAlIHRoaXMub3B0aW9ucy53aWR0aCA6IHRhcmdldC54O1xyXG4gICAgdGFyZ2V0LnkgPSB0YXJnZXQueSA8IDAgPyB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGFyZ2V0Lnk7XHJcbiAgICB0YXJnZXQueSA9IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodCA/IHRhcmdldC55ICUgdGhpcy5vcHRpb25zLmhlaWdodCA6IHRhcmdldC55O1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nOyIsInZhciBCdWxsZXQgPSByZXF1aXJlKCcuLi9nYW1lT2JqZWN0cy9CdWxsZXQnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gIHRoaXMub3B0aW9ucy5maXJlUmF0ZSA9IG9wdGlvbnMuZmlyZVJhdGUgfHwgNTAuMDtcclxuICB0aGlzLm9wdGlvbnMuZmlyZVZlbG9jaXR5ID0gb3B0aW9ucy5maXJlVmVsb2NpdHkgfHwgNzAwLjA7XHJcbiAgLy8gQnVsbGV0cyBuZWVkIHRvIHN0YXJ0ICdhaGVhZCcgb2YgdGVoIG9iamVjdCBmaXJpbmcgdGhlbSBhIGxpdHRsZS5cclxuICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgfHwgMzA7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgbmV4dEJ1bGxldFRpbWU6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGZpcmU6IGZ1bmN0aW9uICh0YXJnZXQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSlcclxuICB7XHJcbiAgICBpZiAodGFyZ2V0LmFtbW8gPD0gMClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0YXJnZXQsIHVuZGVmaW5lZCwgeCArIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy5vZmZzZXQsIHkgKyBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLm9wdGlvbnMub2Zmc2V0LCBhbmdsZSwgdmVsb2NpdHkpO1xyXG4gICAgdGFyZ2V0LmdldENoaWxkcmVuKCkuYWRkKGJ1bGxldCk7XHJcbiAgICB0YXJnZXQuYW1tby0tO1xyXG4gICAgdGhpcy5uZXh0QnVsbGV0VGltZSA9IHRoaXMubm93ICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG4gIH0sXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIGlmICghdGhpcy5uZXh0QnVsbGV0VGltZSlcclxuICAgICAgdGhpcy5uZXh0QnVsbGV0VGltZSA9IHRoaXMubm93ICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG5cclxuICAgIGlmICh0YXJnZXQudHJpZ2dlckRvd24pXHJcbiAgICB7XHJcbiAgICAgIHZhciB0ID0gdGhpcy5uZXh0QnVsbGV0VGltZSArIHRoaXMub3B0aW9ucy5maXJlUmF0ZTtcclxuICAgICAgXHJcbiAgICAgIHdoaWxlICh0aGlzLm5vdyA+IHRoaXMubmV4dEJ1bGxldFRpbWUpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmZpcmUodGFyZ2V0LCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGhpcy5vcHRpb25zLmZpcmVWZWxvY2l0eSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzOyIsInZhciBTbW9rZSA9IHJlcXVpcmUoJy4uL2dhbWVPYmplY3RzL1Ntb2tlJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19TbW9rZXMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU21va2VzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU21va2VzLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIHRoaXMuYXR0ZW1wdFNtb2tlRHJvcCh0YXJnZXQsIGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgYXR0ZW1wdFNtb2tlRHJvcDogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGY9IHRoaXM7XHJcbiAgICAvLyBTbW9rZSBkcm9wcyBhcmUgT05MWSBwZXJmb3JtZWQgYnkgdGhlIHNlcnZlclxyXG4gICAgaWYgKHR5cGVvZiBpc0NsaWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNDbGllbnQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAoKGlzTmFOKHRoaXMub3B0aW9ucy5TTU9LRV9TVEFSVF9IRUFMVEgpIHx8IHRhcmdldC5oZWFsdGggPCB0aGlzLm9wdGlvbnMuU01PS0VfU1RBUlRfSEVBTFRIKSAmJiB0YXJnZXQuc21va2VzIDwgdGhpcy5vcHRpb25zLlNNT0tFX01BWClcclxuICAgIHtcclxuICAgICAgdmFyIGNvbXBhcmUgPSBpc05hTih0aGlzLm9wdGlvbnMuU01PS0VfU1RBUlRfSEVBTFRIKSA/IDEuMCA6IHRhcmdldC5oZWFsdGgsXHJcbiAgICAgICAgc21va2VEcm9wID0gKE1hdGgucmFuZG9tKCkgKiBjb21wYXJlKSA8IHRoaXMub3B0aW9ucy5TTU9LRV9USFJFU0hPTEQ7XHJcblxyXG4gICAgICBpZiAoc21va2VEcm9wKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIHNtb2tlID0gbmV3IFNtb2tlKHRhcmdldCwgJ3Ntb2tlJyArIHRhcmdldC5yYW5kb21JZCgpLCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGhpcy5zbW9rZUZhZGVIYW5kbGVyLmJpbmQodGhpcywgdGFyZ2V0KSk7XHJcbiAgICAgICAgdGFyZ2V0LnNtb2tlcysrO1xyXG4gICAgICAgIHRhcmdldC53b3JsZC5nZXRDaGlsZHJlbigpLmFkZChzbW9rZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHNtb2tlRmFkZUhhbmRsZXI6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIHRhcmdldC5zbW9rZXMtLTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19TbW9rZXM7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBCaXJkKClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG52YXIgQmlyZCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFByb3BlcnRpZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgIGhlYWx0aDogdGhpcy5oZWFsdGgsXG4gICAgfTtcbiAgfSxcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuX2lkKVxuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGUgYmlyZFxcJ3MgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnggPSB2YWx1ZS54O1xuICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xuICAgIHRoaXMuc2NhbGUgPSB2YWx1ZS5zY2FsZTtcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xuICAgIHRoaXMuaGVhbHRoID0gdmFsdWUuaGVhbHRoO1xuICB9LFxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogTWV0aG9kc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQpIHtcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XG5cbiAgICB0aGlzLnR5cGUgPSAnYmlyZCc7XG5cbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLnJhZGl1cyA9IDM7XG5cbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy53b3JsZC53aWR0aDtcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy53b3JsZC5oZWlnaHQ7XG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB0aGlzLmJhbmsgPSB0aGlzLnJhbmRvbWl6ZWRCYW5rKCk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDI1ICsgTWF0aC5yYW5kb20oKSAqIDEwO1xuICAgIHRoaXMuc2NhbGUgPSAoTWF0aC5yYW5kb20oKSAqIDAuNCkgKyAwLjE7XG5cbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcblxuICAgIHRoaXMuR0xPQkFMUyA9IHtcbiAgICAgIFZFTE9DSVRZX01BWDogQmlyZC52ZWxvY2l0eSxcbiAgICAgIFZFTE9DSVRZX01JTjogQmlyZC52ZWxvY2l0eSxcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZycpKSh0aGlzLndvcmxkKSk7XG4gICAgLy90aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19FeHBsb2RlcycpKSh0aGlzLndvcmxkKSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcbiAgICBcbiAgICAvLyBUT0RPOiBlbmNhcHN1bGF0ZSBiaXJkIEFJXG4gICAgXG4gICAgLy8gYmlyZHMgaGF2ZSBhIDEvMjAwIGNoYW5jZSBvZiBjaGFuZ2luZyB0aGUgYmFuayBldmVyeSBmcmFtZVxuICAgIGlmKE1hdGgucmFuZG9tKCkgPCAwLjAwNSlcbiAgICAgIHRoaXMuYmFuayA9IHRoaXMucmFuZG9taXplZEJhbmsoKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQuYmlyZCgwLCAwKTtcbiAgfSxcbiAgcmFuZG9taXplZEJhbms6IGZ1bmN0aW9uKCkge1xuICAgIC8vIHZhbHVlIGluIHRoZSByYW5nZSBbLTEuMCwgMS4wXSBcbiAgICB2YXIgYmFua0ZhY3RvciA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIuMDtcbiAgICAvLyB0aGUgbWF4aW11bSBiYW5rIGFuZ2xlIFxuICAgIHZhciBiYW5rTWFnbml0dWRlID0gTWF0aC5QSSAvIDIuMDtcbiAgICAvLyBzY2FsZSB0aGUgbWFnbml0dWRlIGJ5IHRoZSByYW5kb21pemVkIGZhY3RvclxuICAgIHJldHVybiBiYW5rRmFjdG9yICogYmFua01hZ25pdHVkZTsgXG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5zcHJpdGUpXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xuICB9XG59KTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gQmlyZDsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJ1bGxldCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBCdWxsZXQgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxyXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcclxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1c1xyXG4gICAgfTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBidWxsZXQgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xyXG4gICAgdGhpcy55ID0gdmFsdWUueTtcclxuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcclxuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkLCB4LCB5LCBhbmdsZSwgdmVsb2NpdHkpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcclxuXHJcbiAgICB0aGlzLkdMT0JBTFMgPSB7XHJcbiAgICAgIFZFTE9DSVRZX01BWDogMTAwMDAwLFxyXG4gICAgICBWRUxPQ0lUWV9NSU46IDBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucmFkaXVzID0gMjtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAnYnVsbGV0JztcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19Db2xsaWRlcycpKSh7Y2FsbGJhY2s6IHRoaXMuY29sbGlkZUhhbmRsZXIuYmluZCh0aGlzKX0pKTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuJykpKHRoaXMud29ybGQpKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYXBwbHlBbGwoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLmJ1bGxldCgwLCAwKTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgfSxcclxuICBjb2xsaWRlSGFuZGxlcjogZnVuY3Rpb24gKHRhcmdldCwgZGlzdGFuY2UpIHtcclxuICAgIGlmICh0YXJnZXQuaGl0KVxyXG4gICAgICB0YXJnZXQuaGl0KHRoaXMsIGRpc3RhbmNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQnVsbGV0OyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUGxhbmVQYXJ0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFBsYW5lUGFydCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgIHRpbWVTdGFydCA6IHRoaXMudGltZVN0YXJ0LFxyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxyXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXHJcbiAgICAgIHNtb2tlczogdGhpcy5zbW9rZXMsXHJcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxyXG4gICAgICBpbmRleDogdGhpcy5pbmRleFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBQbGFuZVBhcnQgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xyXG4gICAgdGhpcy55ID0gdmFsdWUueTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSB2YWx1ZS5kdXJhdGlvbjtcclxuICAgIHRoaXMudGltZVN0YXJ0ID0gdmFsdWUudGltZVN0YXJ0O1xyXG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcclxuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcclxuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XHJcbiAgICB0aGlzLnNtb2tlcyA9IHZhbHVlLnNtb2tlcztcclxuICAgIHRoaXMuaW5kZXggPSB2YWx1ZS5pbmRleDtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCwgeCwgeSwgYW5nbGUsIHZlbG9jaXR5LCBpbmRleCkge1xyXG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xyXG5cclxuICAgIHRoaXMuR0xPQkFMUyA9IHtcclxuICAgICAgVkVMT0NJVFlfTUFYOiA2MDAsXHJcbiAgICAgIFZFTE9DSVRZX01JTjogMCxcclxuICAgICAgU01PS0VfTUFYOiA1LFxyXG4gICAgICBTTU9LRV9TVEFSVF9IRUFMVEg6IE5hTixcclxuICAgICAgU01PS0VfVEhSRVNIT0xEOiAzXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGltZVN0YXJ0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSAoTWF0aC5yYW5kb20oKSAqIDMuMCArIDEuMCkgKiAxMDAwLjA7XHJcbiAgICB0aGlzLmJhbmsgPSAtMSArIChNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLmFjY2VsZXJhdG9yID0gMDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgdGhpcy5zbW9rZXMgPSAwO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHRoaXMuc3ByaXRlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdwbGFuZXBhcnQnO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TbW9rZXMnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6ZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xyXG5cclxuICAgIHZhciBlbGFwc2VkID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRoaXMudGltZVN0YXJ0LFxyXG4gICAgICByYXRpbyA9IDEuMCAtIChlbGFwc2VkIC8gdGhpcy5kdXJhdGlvbik7XHJcblxyXG4gICAgaWYgKHJhdGlvIDwgMC4xKVxyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5fc3VwZXIocGhhc2VyKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLnBsYW5lUGFydCh0aGlzLngsIHRoaXMueSwgdGhpcy5pbmRleCk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaylcclxuICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhbmVQYXJ0OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBSZXF1aXJlbWVudHNcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKSxcbiAgQnVsbGV0ID0gcmVxdWlyZSgnLi9CdWxsZXQnKSxcbiAgU21va2UgPSByZXF1aXJlKCcuL1Ntb2tlJyksXG4gIHBsYXllckNvdW50ID0gMDtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFBsYXllcigpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudmFyIFBsYXllciA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFByb3BlcnRpZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxuICAgICAgcmV0dXJuIHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXG4gICAgICBhY2NlbGVyYXRlcjogdGhpcy5hY2NlbGVyYXRlcixcbiAgICAgIHR1cm46IHRoaXMudHVybixcbiAgICAgIGFjY2VsOiB0aGlzLmFjY2VsLFxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXG4gICAgICBoZWFsdGg6IHRoaXMuaGVhbHRoLFxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICBhbW1vOiB0aGlzLmFtbW8sXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgc21va2VzOiB0aGlzLnNtb2tlcyxcbiAgICAgIGRlc3Ryb3llZDogdGhpcy5kZXN0cm95ZWQsXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlblN0YXRlKCksXG4gICAgICBraWxsczogdGhpcy5raWxscyxcbiAgICAgIGRlYXRoczogdGhpcy5kZWF0aHNcbiAgICB9O1xuICB9LFxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGUgcGxhbmUgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnVpZCA9IHZhbHVlLnVpZDtcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xuICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xuICAgIHRoaXMuaGVhbHRoID0gdmFsdWUuaGVhbHRoO1xuICAgIHRoaXMuYWNjZWxlcmF0ZXIgPSB2YWx1ZS5hY2NlbGVyYXRlcjtcbiAgICB0aGlzLmFtbW8gPSB2YWx1ZS5hbW1vO1xuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xuICAgIHRoaXMuc21va2VzID0gdmFsdWUuc21va2VzO1xuICAgIGlmICh2YWx1ZS5kZXN0cm95ZWQgJiYgIXRoaXMuZGVzdHJveWVkKVxuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB2YWx1ZS5kZXN0cm95ZWQ7XG4gICAgdGhpcy5raWxscyA9IHZhbHVlLmtpbGxzO1xuICAgIHRoaXMuZGVhdGhzID0gdmFsdWUuZGVhdGhzO1xuXG4gICAgdGhpcy5zZXRDaGlsZHJlblN0YXRlKHZhbHVlLmNoaWxkcmVuKTtcbiAgfSxcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIE1ldGhvZHNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGluaXQ6IGZ1bmN0aW9uKHBhcmVudCwgaWQsIHVpZCkge1xuICAgIGNvbnNvbGUubG9nKCdJbml0aW5nIHBsYXllcicsIHRoaXMudWlkKTtcblxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcblxuICAgIHRoaXMudWlkID0gdWlkO1xuXG4gICAgdGhpcy50eXBlID0gJ3BsYXllcic7XG5cbiAgICB0aGlzLkdMT0JBTFMgPSB7XG4gICAgICBWRUxPQ0lUWV9NQVg6IDMwMCxcbiAgICAgIFZFTE9DSVRZX01JTjogODAsXG4gICAgICBCQU5LX1JBVEU6IE1hdGguUEkgLyAyLFxuICAgICAgQUNDRUxFUkFUSU9OX1JBVEU6IDI1MCxcbiAgICAgIERFQ0VMRVJBVElPTl9SQVRFOiA3MCxcbiAgICAgIFNNT0tFX01BWDogMjAsXG4gICAgICBTTU9LRV9TVEFSVF9IRUFMVEg6IDYwLFxuICAgICAgU01PS0VfVEhSRVNIT0xEOiA1XG4gICAgfTtcblxuICAgIHRoaXMuYnVsbGV0UHJvcHMgPSB7XG4gICAgICBmaXJlUmF0ZTogMTAwLFxuICAgICAgZmlyZVZlbG9jaXR5OiA1MDBcbiAgICB9O1xuXG4gICAgdGhpcy54ID0gNDAwO1xuICAgIHRoaXMueSA9IDQwMDtcbiAgICB0aGlzLmJhbmsgPSAwO1xuICAgIHRoaXMua2lsbHMgPSAwO1xuICAgIHRoaXMuZGVhdGhzID0gMDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gMDtcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICB0aGlzLmFtbW8gPSAxMDAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLkdMT0JBTFMuVkVMT0NJVFlfTUlOO1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdGhpcy5yYWRpdXMgPSAxNTtcblxuICAgIHRoaXMuc21va2VzID0gMDtcblxuICAgIHRoaXMudHJpZ2dlckRvd24gPSBmYWxzZTtcblxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TbW9rZXMnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZycpKSh0aGlzLndvcmxkKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cycpKSh0aGlzLmJ1bGxldFByb3BzKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXMnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUmVzcGF3bnMnKSkodGhpcy5HTE9CQUxTKSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcblxuICAgIHRoaXMuYnVsbGV0UHJvcHMuZmlyZVZlbG9jaXR5ID0gNTAwLjAgKyB0aGlzLnZlbG9jaXR5O1xuICB9LFxuICByZXNwYXduOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ1Jlc3Bhd25pbmcgcGxheWVyJywgdGhpcy51aWQpO1xuXG4gICAgdGhpcy54ID0gNDAwO1xuICAgIHRoaXMueSA9IDQwMDtcbiAgICB0aGlzLmJhbmsgPSAwO1xuICAgIHRoaXMuYWNjZWxlcmF0ZXIgPSAwO1xuICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgIHRoaXMuYW1tbyA9IDEwMDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMuR0xPQkFMUy5WRUxPQ0lUWV9NSU47XG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB0aGlzLnJhZGl1cyA9IDE1O1xuXG4gICAgdGhpcy5zbW9rZXMgPSAwO1xuXG4gICAgdGhpcy5leHBsb2RlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLndvcmxkLmdldENoaWxkcmVuKCkuYWRkKHRoaXMpO1xuICB9LFxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLl9zdXBlcihwaGFzZXIpO1xuXG4gICAgdGhpcy5zcHJpdGUuZGlzcGxheVN0YXR1c1JpbmcodGhpcy51aWQgPT0gd2luZG93LmNsaWVudC51aWQsIHRoaXMuaGVhbHRoKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQucGxhbmUoMCwgMCk7XG4gIH0sXG4gIG5ld0NoaWxkRnJvbVN0YXRlOiBmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xuICAgIHZhciBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMsIGNoaWxkU3RhdGUuaWQpO1xuICAgIGJ1bGxldC5zZXRTdGF0ZShjaGlsZFN0YXRlKTtcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWRkKGJ1bGxldCk7XG4gICAgcmV0dXJuIGJ1bGxldDtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc3VwZXIoKTtcblxuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgY29uc29sZS5sb2coJ0Rlc3Ryb3lpbmcgcGxhbmUgc3ByaXRlJywgdGhpcy51aWQpO1xuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGhpdDogZnVuY3Rpb24gKHByb2plY3RpbGUsIGRpc3RhbmNlKSB7XG4gICAgaWYgKHByb2plY3RpbGUuZ2V0UGFyZW50KCkgPT0gdGhpcylcbiAgICAgIHJldHVybjtcbiAgICBcbiAgICB0aGlzLmhlYWx0aCAtPSAxICogKHByb2plY3RpbGUudmVsb2NpdHkgLyAxMDAwLjApICogTWF0aC5tYXgoMTUgLSBkaXN0YW5jZSwgMSk7XG4gICAgdGhpcy5oZWFsdGggPSB0aGlzLmhlYWx0aCA8IDAgPyAwIDogdGhpcy5oZWFsdGg7XG5cbiAgICBpZiAocHJvamVjdGlsZS5nZXRQYXJlbnQoKS50eXBlID09ICdwbGF5ZXInICYmIHRoaXMuaGVhbHRoIDw9IDAgJiYgIXRoaXMuZGVzdHJveWVkKVxuICAgIHtcbiAgICAgIHByb2plY3RpbGUuZ2V0UGFyZW50KCkua2lsbHMrKztcbiAgICAgIHRoaXMuZGVhdGhzKys7XG4gICAgfVxuICB9XG59KTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU21va2UoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU21va2UgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG4gICAgICB0aW1lU3RhcnQgOiB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcclxuICAgICAgYmFuazogdGhpcy5iYW5rLFxyXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eVxyXG4gICAgfTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBTbW9rZSBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCA9IHZhbHVlLng7XHJcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IHZhbHVlLmR1cmF0aW9uO1xyXG4gICAgdGhpcy50aW1lU3RhcnQgPSB2YWx1ZS50aW1lU3RhcnQ7XHJcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xyXG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xyXG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCwgeCwgeSwgYW5nbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XHJcblxyXG4gICAgdGhpcy5HTE9CQUxTID0ge1xyXG4gICAgICBWRUxPQ0lUWV9NQVg6IDYwMCxcclxuICAgICAgVkVMT0NJVFlfTUlOOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGltZVN0YXJ0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSAoTWF0aC5yYW5kb20oKSAqIDIuMCArIDEuMCkgKiAxMDAwLjA7XHJcbiAgICB0aGlzLmJhbmsgPSAtMSArIChNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcclxuICAgIHRoaXMuYWNjZWxlcmF0b3IgPSAwO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ3Ntb2tlJztcclxuXHJcbiAgICAvL3RoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6ZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xyXG5cclxuICAgIHZhciBlbGFwc2VkID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRoaXMudGltZVN0YXJ0LFxyXG4gICAgICByYXRpbyA9IDEuMCAtIChlbGFwc2VkIC8gdGhpcy5kdXJhdGlvbik7XHJcblxyXG4gICAgaWYgKHJhdGlvIDwgMC4xKVxyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5fc3VwZXIocGhhc2VyKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNldExpZmUocmF0aW8pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLnNtb2tlKHRoaXMueCwgdGhpcy55KTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKVxyXG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLnNwcml0ZSlcclxuICAgIHtcclxuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcclxuICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBTbW9rZTsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKSxcclxuICBCaXJkID0gcmVxdWlyZSgnLi9CaXJkJyksXHJcbiAgU21va2UgPSByZXF1aXJlKCcuL1Ntb2tlJyksXHJcbiAgUGxheWVyID0gcmVxdWlyZSgnLi9QbGF5ZXInKSxcclxuICBQbGFuZVBhcnQgPSByZXF1aXJlKCcuL1BsYW5lUGFydCcpLFxyXG4gIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4uL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJpcmQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgV29ybGQgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHNldFN0YXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSlcclxuICAgICAgaWYgKGtleSAhPSAnY2hpbGRyZW4nKVxyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlW2tleV07XHJcblxyXG4gICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpKVxyXG4gICAgICB0aGlzLnNldENoaWxkcmVuU3RhdGUodmFsdWUuY2hpbGRyZW4pO1xyXG4gIH0sXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aWxlV2lkdGg6IHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICB0aWxlSGVpZ2h0OiB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgIHRpbGVzOiB0aGlzLnRpbGVzLFxyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuU3RhdGUoKVxyXG4gICAgfTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnV29ybGQgaW5pdCEnKTtcclxuICAgIHRoaXMudHlwZSA9ICd3b3JsZCc7XHJcbiAgICB0aGlzLnBsYXllcnMgPSBuZXcgSGFzaEFycmF5KFsnX2lkJywgJ3VpZCcsICd0eXBlJ10pO1xyXG4gICAgdGhpcy5fc3VwZXIobnVsbCwgJ3Jvb3QnKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIGlmICghZWxhcHNlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICAgXHJcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcclxuICB9LFxyXG4gIGJ1aWxkQ2hpbGRyZW5PYmplY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0Q2hpbGRyZW4obmV3IEhhc2hBcnJheShbJ19pZCcsICd1aWQnLCAndHlwZSddKSk7XHJcbiAgfSxcclxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgIHZhciBjaGlsZDtcclxuXHJcbiAgICBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdiaXJkJylcclxuICAgICAgY2hpbGQgPSBuZXcgQmlyZCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGVsc2UgaWYgKGNoaWxkU3RhdGUudHlwZSA9PSAncGxheWVyJylcclxuICAgIHtcclxuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIG1heWJlIHdlIGFscmVhZHkgaGF2ZSB0aGlzIGNoaWxkIGFuZCBpdCBpcyBiZWluZyByZXNwYXduZWQuXHJcbiAgICAgIGlmICh0aGlzLnBsYXllcnMuZ2V0KGNoaWxkU3RhdGUuaWQpKVxyXG4gICAgICAgIGNoaWxkID0gdGhpcy5wbGF5ZXJzLmdldChjaGlsZFN0YXRlLmlkKTtcclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgY2hpbGQgPSBuZXcgUGxheWVyKHRoaXMsIGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVycy5hZGQoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3Ntb2tlJylcclxuICAgICAgY2hpbGQgPSBuZXcgU21va2UodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3BsYW5lcGFydCcpXHJcbiAgICAgIGNoaWxkID0gbmV3IFBsYW5lUGFydCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coY2hpbGRTdGF0ZSk7XHJcbiAgICAgIHRocm93IEVycm9yKCdDYW5ub3QgZmlndXJlIG91dCB3aGF0IHRoZSBoZWxsIGEgXFwnJyArIGNoaWxkU3RhdGUudHlwZSArICdcXCcgaXMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH0sXHJcbiAgZGVzdHJveUNoaWxkQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICB0aGlzLl9zdXBlcihpZCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmxkOyIsInZhciBIYXNoQXJyYXkgPSBmdW5jdGlvbihrZXlGaWVsZHMsIGNhbGxiYWNrKSB7XG4gIHRoaXMuX21hcCA9IHt9O1xuICB0aGlzLl9saXN0ID0gW107XG4gIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICB0aGlzLmtleUZpZWxkcyA9IGtleUZpZWxkcztcblxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ2FsbCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0O1xuICB9KTtcblxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ21hcCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH0pO1xuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCdjb25zdHJ1Y3QnKTtcbiAgfVxufTtcblxuSGFzaEFycmF5LnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICBrZXkgPSB0aGlzLmtleUZpZWxkc1trZXldO1xuICAgICAgICB2YXIgaW5zdCA9IHRoaXMuZmluZChvYmosIGtleSk7XG4gICAgICAgIGlmIChpbnN0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuX21hcFtpbnN0XSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hcFtpbnN0XS5pbmRleE9mKG9iaikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gQ2Fubm90IGFkZCB0aGUgc2FtZSBpdGVtIHR3aWNlXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX21hcFtpbnN0XS5wdXNoKG9iaik7XG4gICAgICAgICAgfSBlbHNlIHRoaXMuX21hcFtpbnN0XSA9IFtvYmpdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3QucHVzaChvYmopO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygnYWRkJywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7XG4gICAgfVxuICB9LFxuICBhZGRNYXA6IGZ1bmN0aW9uKGtleSwgb2JqKSB7XG4gICAgdGhpcy5fbWFwW2tleV0gPSBvYmo7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ2FkZE1hcCcsIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIG9iajogb2JqXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuICghKHRoaXMuX21hcFtrZXldIGluc3RhbmNlb2YgQXJyYXkpIHx8IHRoaXMuX21hcFtrZXldLmxlbmd0aCAhPSAxKSA/IHRoaXMuX21hcFtrZXldIDogdGhpcy5fbWFwW2tleV1bMF07XG4gIH0sXG4gIGdldEFsbDogZnVuY3Rpb24oa2V5cykge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4ga2V5cylcbiAgICAgIHJlcyA9IHJlcy5jb25jYXQodGhpcy5nZXRBc0FycmF5KGtleXNba2V5XSkpO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfSxcbiAgZ2V0QXNBcnJheTogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFtrZXldIHx8IFtdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXAuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgfSxcbiAgaGFzTXVsdGlwbGU6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBba2V5XSBpbnN0YW5jZW9mIEFycmF5O1xuICB9LFxuICByZW1vdmVCeUtleTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuX21hcFtrZXldLmNvbmNhdCgpO1xuICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgIHJlbW92ZWQgPSByZW1vdmVkLmNvbmNhdChpdGVtcyk7XG4gICAgICAgIGZvciAodmFyIGogaW4gaXRlbXMpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2pdO1xuICAgICAgICAgIGZvciAodmFyIGl4IGluIHRoaXMua2V5RmllbGRzKSB7XG4gICAgICAgICAgICB2YXIga2V5MiA9IHRoaXMuZmluZChpdGVtLCB0aGlzLmtleUZpZWxkc1tpeF0pO1xuICAgICAgICAgICAgaWYgKGtleTIgJiYgdGhpcy5fbWFwW2tleTJdKSB7XG4gICAgICAgICAgICAgIHZhciBpeCA9IHRoaXMuX21hcFtrZXkyXS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgICBpZiAoaXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBba2V5Ml0uc3BsaWNlKGl4LCAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9tYXBba2V5Ml0ubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXkyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9saXN0LnNwbGljZSh0aGlzLl9saXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fbWFwW2tleV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZUJ5S2V5JywgcmVtb3ZlZCk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGl4IGluIHRoaXMua2V5RmllbGRzKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmZpbmQoaXRlbSwgdGhpcy5rZXlGaWVsZHNbaXhdKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIHZhciBpeCA9IHRoaXMuX21hcFtrZXldLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgaWYgKGl4ICE9IC0xKVxuICAgICAgICAgICAgdGhpcy5fbWFwW2tleV0uc3BsaWNlKGl4LCAxKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9tYXBba2V5XS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0LnNwbGljZSh0aGlzLl9saXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmUnLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlQWxsOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2xkID0gdGhpcy5fbGlzdC5jb25jYXQoKTtcbiAgICB0aGlzLl9tYXAgPSB7fTtcbiAgICB0aGlzLl9saXN0ID0gW107XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlJywgb2xkKTtcbiAgICB9XG4gIH0sXG4gIGZpbmQ6IGZ1bmN0aW9uKG9iaiwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvYmpbcGF0aF07XG4gICAgfVxuXG4gICAgdmFyIGR1cCA9IHBhdGguY29uY2F0KCk7XG4gICAgLy8gZWxzZSBhc3N1bWUgYXJyYXkuXG4gICAgd2hpbGUgKGR1cC5sZW5ndGggJiYgb2JqKSB7XG4gICAgICBvYmogPSBvYmpbZHVwLnNoaWZ0KCldO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGNsb25lOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciBuID0gbmV3IEhhc2hBcnJheSh0aGlzLmtleUZpZWxkcy5jb25jYXQoKSwgY2FsbGJhY2sgPyBjYWxsYmFjayA6IHRoaXMuY2FsbGJhY2spO1xuICAgIG4uYWRkLmFwcGx5KG4sIHRoaXMuYWxsLmNvbmNhdCgpKTtcbiAgICByZXR1cm4gbjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoQXJyYXk7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQmlyZFNwcml0ZSgpIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBCaXJkU3ByaXRlKGdhbWUsIHgsIHkpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgXHJcbiAgLy8gYWRkIHRoZSBiaXJkU3ByaXRlIFxyXG4gIHRoaXMuYmlyZFNwcml0ZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2JpcmQnKTtcclxuICAgXHJcbiAgLy8geW91IGNhbid0IHNldCB0aGUgYW5jaG9yIHBvaW50IG9mIGEgZ3JvdXAsIHNvIGZvciB4ICYgeSB0byBjb3JyZXNwb25kXHJcbiAgLy8gdG8gdGhlIEJpcmRTcHJpdGUncyBjZW50ZXIgd2UgaGF2ZSB0byBvZmZzZXQgaXQgbWFudWFsbHlcclxuICB0aGlzLmJpcmRTcHJpdGUueCA9IC10aGlzLmJpcmRTcHJpdGUud2lkdGggIC8gMi4wO1xyXG4gIHRoaXMuYmlyZFNwcml0ZS55ID0gLXRoaXMuYmlyZFNwcml0ZS5oZWlnaHQgLyAyLjA7XHJcbn07XHJcblxyXG5CaXJkU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcbkJpcmRTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmlyZFNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQmlyZFNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbiAgdGhpcy5hbmdsZSA9IG1vZGVsLmFuZ2xlICogNTcuMjk1Nzc5NTtcclxuICB0aGlzLnNjYWxlLnggPSB0aGlzLnNjYWxlLnkgPSBtb2RlbC5zY2FsZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLmJpcmQgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgQmlyZFNwcml0ZSh0aGlzLmdhbWUsIHgsIHkpKTtcclxufTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCdWxsZXRTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gQnVsbGV0U3ByaXRlKGdhbWUsIHgsIHkpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgXHJcbiAgLy8gYWRkIHRoZSBCdWxsZXRTcHJpdGUgXHJcbiAgdGhpcy5CdWxsZXRTcHJpdGUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdidWxsZXQnKTtcclxufTtcclxuXHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnVsbGV0U3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuYnVsbGV0ID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IEJ1bGxldFNwcml0ZSh0aGlzLmdhbWUsIHgsIHkpKTtcclxufTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQbGFuZVBhcnRTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gUGxhbmVQYXJ0U3ByaXRlKGdhbWUsIHgsIHksIGZyYW1lKSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG5cclxuICAvLyBhZGQgdGhlIFBsYW5lUGFydFNwcml0ZSBcclxuICB0aGlzLnBsYW5lUGFydFNwcml0ZSA9IHRoaXMuY3JlYXRlKDAsIDAsICdwbGFuZXBhcnRzJyk7XHJcbiAgdGhpcy5wbGFuZVBhcnRTcHJpdGUueCA9IC10aGlzLnBsYW5lUGFydFNwcml0ZS53aWR0aCAvIDIuMDtcclxuICB0aGlzLnBsYW5lUGFydFNwcml0ZS55ID0gLXRoaXMucGxhbmVQYXJ0U3ByaXRlLmhlaWdodCAvIDIuMDtcclxuICAvLzAgLSByaWdodCB3aW5nXHJcbiAgLy8xIC0gbGVmdCB3aW5nXHJcbiAgLy8yIC0gdGFpbFxyXG4gIC8vMyAtIGJvZHlcclxuICAvLzQgLSBlbmdpbmVcclxuICB0aGlzLnBsYW5lUGFydFNwcml0ZS5mcmFtZSA9IE1hdGgubWluKGZyYW1lLCA0KTtcclxufTtcclxuXHJcblBsYW5lUGFydFNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5QbGFuZVBhcnRTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGxhbmVQYXJ0U3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblBsYW5lUGFydFNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbiAgdGhpcy5hbmdsZSA9IG1vZGVsLmFuZ2xlO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5wbGFuZVBhcnQgPSBmdW5jdGlvbih4LCB5LCBmcmFtZSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IFBsYW5lUGFydFNwcml0ZSh0aGlzLmdhbWUsIHgsIHksIGZyYW1lKSk7XHJcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFBsYW5lKCkgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuZnVuY3Rpb24gUGxhbmUoZ2FtZSwgeCwgeSkge1xuICBjb25zb2xlLmxvZygnTkVXIFBMQU5FIFNQUklURScpO1xuICBcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XG4gXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbiAgdGhpcy5oZWFsdGggPSAxMDA7XG4gIFxuICAvLyBhZGQgdGhlIGFpcnBsYW5lIFxuICB0aGlzLmFpcnBsYW5lICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYWlycGxhbmUnKTtcbiAgIFxuICAvLyB5b3UgY2FuJ3Qgc2V0IHRoZSBhbmNob3IgcG9pbnQgb2YgYSBncm91cCwgc28gZm9yIHggJiB5IHRvIGNvcnJlc3BvbmRcbiAgLy8gdG8gdGhlIHBsYW5lJ3MgY2VudGVyIHdlIGhhdmUgdG8gb2Zmc2V0IGl0IG1hbnVhbGx5XG4gIHRoaXMuYWlycGxhbmUueCA9IC10aGlzLmFpcnBsYW5lLndpZHRoICAvIDIuMDtcbiAgdGhpcy5haXJwbGFuZS55ID0gLXRoaXMuYWlycGxhbmUuaGVpZ2h0IC8gMi4wO1xuXG4gIC8vIGFkZCB0aGUgc3RhdHVzIHJpbmcgXG4gIHRoaXMuc3RhdHVzUmluZyA9IGdhbWUuYWRkLmdyYXBoaWNzKDAuMCwgMC4wLCB0aGlzKTtcbn07XG5cblBsYW5lLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XG5QbGFuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQbGFuZTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFB1YmxpYyBNZXRob2RzIFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuUGxhbmUucHJvdG90eXBlLmRpc3BsYXlTdGF0dXNSaW5nID0gZnVuY3Rpb24oaXNQbGF5ZXIsIGhlYWx0aCkge1xuICB2YXIgcmF0aW8gPSAoaGVhbHRoIC8gMTAwLjApO1xuXG4gIHRoaXMuc3RhdHVzUmluZy5hbHBoYSA9IDEuMCAqIHJhdGlvO1xuXG4gIHRoaXMuc3RhdHVzUmluZy5jbGVhcigpO1xuICB0aGlzLnN0YXR1c1JpbmcubGluZVN0eWxlKDMuMCwgMHgzYmViNzIpO1xuXG4gIHRoaXMuc3RhdHVzUmluZy5hcmMoMCwgMCwgMjAuMCwgLShNYXRoLlBJLzQpICogcmF0aW8sIChNYXRoLlBJIC8gNCkgKiByYXRpbyApOyBcblxuICB0aGlzLnN0YXR1c1JpbmcubGluZVN0eWxlKDEuMCwgMHgzYmViNzIsIDAuMik7XG5cbiAgaWYgKGlzUGxheWVyKVxuICAgIHRoaXMuc3RhdHVzUmluZy5kcmF3Q2lyY2xlKDAsIDAsIDI1KTsgXG59O1xuXG5QbGFuZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdGhpcy54ID0gbW9kZWwueDtcbiAgdGhpcy55ID0gbW9kZWwueTtcbiAgdGhpcy5hbmdsZSA9IG1vZGVsLmFuZ2xlICogNTcuMjk1Nzc5NTtcblxuICBpZiAobW9kZWwuYmFuayA8IDApXG4gICAgdGhpcy5haXJwbGFuZS5mcmFtZSA9IDI7XG4gIGVsc2UgaWYgKG1vZGVsLmJhbmsgPiAwKVxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAxO1xuICBlbHNlIFxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAwO1xufTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEZhY3RvcnkgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLnBsYW5lID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XG4gIHJldHVybiBncm91cC5hZGQobmV3IFBsYW5lKHRoaXMuZ2FtZSwgeCwgeSkpO1xufTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBTbW9rZVNwcml0ZSgpIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBTbW9rZVNwcml0ZShnYW1lLCB4LCB5KSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG4gIHRoaXMuYW5nbGUgPSAzNjAgKiBNYXRoLnJhbmRvbSgpO1xyXG4gIHRoaXMuc3RhcnRTY2FsZSA9IE1hdGgucmFuZG9tKCkgKyAwLjM7XHJcbiAgLy8gYWRkIHRoZSBTbW9rZVNwcml0ZSBcclxuICB0aGlzLnNtb2tlU3ByaXRlID0gdGhpcy5jcmVhdGUoMCwgMCwgJ3Ntb2tlJyk7XHJcbiAgdGhpcy5zbW9rZVNwcml0ZS54ID0gLXRoaXMuc21va2VTcHJpdGUud2lkdGggLyAyLjA7XHJcbiAgdGhpcy5zbW9rZVNwcml0ZS55ID0gLXRoaXMuc21va2VTcHJpdGUuaGVpZ2h0IC8gMi4wO1xyXG4gIHRoaXMuc21va2VTcHJpdGUuc2NhbGUueCA9IHRoaXMuc21va2VTcHJpdGUuc2NhbGUueSA9IDEuMDtcclxuICB0aGlzLnNtb2tlU3ByaXRlLmZyYW1lID0gMDtcclxufTtcclxuXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNtb2tlU3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxufTtcclxuXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS5zZXRMaWZlID0gZnVuY3Rpb24gKGxpZmUpIHtcclxuICBpZiAodGhpcy5zbW9rZVNwcml0ZSlcclxuICAgIHRoaXMuc21va2VTcHJpdGUuZnJhbWUgPSBNYXRoLmZsb29yKGxpZmUgKiA0KTtcclxuXHJcbiAgaWYgKGxpZmUgPCAwKVxyXG4gICAgICBsaWZlID0gMFxyXG5cclxuICB0aGlzLnNjYWxlLnggPSB0aGlzLnNjYWxlLnkgPSAxLjA7Ly8gTWF0aC5tYXgoKHRoaXMuc3RhcnRTY2FsZSAqIGxpZmUpICsgMC4yLCAxLjApO1xyXG5cclxuICB0aGlzLmFscGhhID0gbGlmZSAqIDAuODtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuc21va2UgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU21va2VTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwidmFyIFVzZXJJbnB1dFN0YXRlID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL1VzZXJTdGF0ZScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU0NTdGF0ZU1hbmFnZXIoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU0NTdGF0ZU1hbmFnZXIgPSBmdW5jdGlvbihmcHMsIGdhbWVJbnRlcmZhY2UpIHtcclxuICB0aGlzLmdhbWVJbnRlcmZhY2UgPSBnYW1lSW50ZXJmYWNlO1xyXG4gIHRoaXMuZnJhbWVUaW1lID0gMTAwMC4wIC8gZnBzO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNDU3RhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgdXNlcklucHV0U3RhdGVzOiBbXSxcclxuICBsYXN0VXBkYXRlVGltZUVuZDogdW5kZWZpbmVkLFxyXG4gIGVzdFNlcnZlclRpbWU6IHVuZGVmaW5lZCxcclxuICBsYXN0U2VydmVyU3RhdGU6IHVuZGVmaW5lZCxcclxuICBpbnRlcnZhbElkOiB1bmRlZmluZWQsXHJcbiAgbGF0ZW5jeTogMCxcclxuICBsYXN0U2VuZFRvU2VydmVyVGltZTogMTAwMC4wIC8gMzAuMCxcclxuICAvKipcclxuICAgKiBTZW5kIGFuIHVwZGF0ZSB0byB0aGUgc2VydmVyIGV2ZXJ5IHRoaXMgc28gb2Z0ZW4uXHJcbiAgICovXHJcbiAgc2VydmVyVXBkYXRlSW50ZXJ2YWw6IDEwLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmludGVydmFsSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLmZyYW1lVGltZSk7XHJcbiAgfSxcclxuICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZClcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gIHtcclxuICAgIGlmICh0aGlzLm5ld1NlcnZlclN0YXRlICYmICF0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSlcclxuICAgICAgdGhpcy5sYXN0U2VydmVyU3RhdGUgPSB0aGlzLm5ld1NlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIEFzIGxvbmcgYXMgdGhlIHNlcnZlciBoYXMgbmV2ZXIgc2VudCB1cyBhIHN0YXRlLCB3ZSBkbyBub3RoaW5nLlxyXG4gICAgaWYgKCF0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSB8fCB0aGlzLmxhdGVuY3kgPT0gMClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgLy8gVGltZSB0aGlzIHVwZGF0ZSBzdGFydGVkXHJcbiAgICAgIHVwZGF0ZVN0YXJ0ID0gdGhpcy5ub3csXHJcbiAgICAgIC8vIFRpbWUgc2luY2Ugb3VyIGxhc3QgdXBkYXRlIGVuZGVkXHJcbiAgICAgIGVsYXBzZWQgPSB1cGRhdGVTdGFydCAtIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQsXHJcbiAgICAgIC8vIFRoZSBzdGF0ZSBvZiBhbGwgdXNlciBpbnB1dFxyXG4gICAgICB1c2VySW5wdXQgPSB0aGlzLmdhbWVJbnRlcmZhY2UudXNlcklucHV0O1xyXG5cclxuICAgIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQgPSB0aGlzLm5vdztcclxuXHJcbiAgICAvLyBTZXQgbGFzdCBzZXJ2ZXIgc3RhdGUgdG8gZWl0aGVyIHRoZSB1cGRhdGVcclxuICAgIHRoaXMubGFzdFNlcnZlclN0YXRlID0gdGhpcy5uZXdTZXJ2ZXJTdGF0ZSB8fCB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZ2FtZSBpbnRlcmZhY2UgdG8gb2xkIHNlcnZlciBzdGF0ZVxyXG4gICAgdGhpcy5nYW1lSW50ZXJmYWNlLnN0YXRlID0gdGhpcy5sYXN0U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gRXN0aW1hdGUgdGhlIGN1cnJlbnQgc2VydmVyIHRpbWUgYXQgdGhpcyBleGFjdCBwb2ludCAodGhlIHNlcnZlciB3aWxsIGJlIGJlaGluZCB1cyBieSBhIHBlcmlvZCBvZiB0aW1lKVxyXG4gICAgdGhpcy5lc3RTZXJ2ZXJUaW1lID0gTWF0aC5yb3VuZCh0aGlzLm5ld1NlcnZlclN0YXRlID8gdGhpcy5uZXdTZXJ2ZXJTdGF0ZS50aW1lICsgKHRoaXMubGF0ZW5jeSAvIDIuMCkgOiB0aGlzLmVzdFNlcnZlclRpbWUgKyBlbGFwc2VkKTtcclxuXHJcbiAgICAvLyBFc3RhYmxpc2ggb3VyIHNpbXVsYXRpb24gc3RhcnRpbmcgdGltZS5cclxuICAgIHZhciB0ID0gdGhpcy5sYXN0U2VydmVyU3RhdGUudGltZSxcclxuICAgICAgc2ltRWxhcHNlZCA9IDAuMDtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IGFueSBvbGQgdXNlciBmcmFtZSBzdGF0ZXNcclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzID0gdGhpcy51c2VySW5wdXRTdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgICByZXR1cm4gdXNlcklucHV0U3RhdGUudGltZSA+IHNlbGYubGFzdFNlcnZlclN0YXRlLnRpbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSBhbGwgZnJhbWVzIHRoZSBzZXJ2ZXIgaGFzIG5vdCB5ZXQgcHJvY2Vzc2VkLlxyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgICAgc2ltRWxhcHNlZCA9IHVzZXJJbnB1dFN0YXRlLnRpbWUgLSB0O1xyXG4gICAgICBzZWxmLmdhbWVJbnRlcmZhY2Uuc2ltdWxhdGVVcGRhdGUodXNlcklucHV0U3RhdGUuaW5wdXQsIHNpbUVsYXBzZWQpO1xyXG4gICAgICB0ID0gdXNlcklucHV0U3RhdGUudGltZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNhdmUgb3VyIGN1cnJlbnQgc3RhdGVcclxuICAgIHZhciBuZXdVc2VySW5wdXRTdGF0ZSA9IG5ldyBVc2VySW5wdXRTdGF0ZSh1c2VySW5wdXQsIHRoaXMuZXN0U2VydmVyVGltZSk7XHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcy5wdXNoKG5ld1VzZXJJbnB1dFN0YXRlKTtcclxuXHJcbiAgICAvLyBGaW5pc2ggc2ltbHVhdGluZyB0aGUgcmVtYWluaW5nIG1pbGxpc2Vjb25kcyBiYXNlZCBvbiB0aGUgY3VycmVudCB1c2VyIGlucHV0LlxyXG4gICAgdGhpcy5nYW1lSW50ZXJmYWNlLnNpbXVsYXRlVXBkYXRlKG5ld1VzZXJJbnB1dFN0YXRlLmlucHV0LCB0aGlzLmVzdFNlcnZlclRpbWUgLSB0KTtcclxuXHJcbiAgICBpZiAodGhpcy5lc3RTZXJ2ZXJUaW1lIC0gdGhpcy5sYXN0U2VuZFRvU2VydmVyVGltZSA+IHRoaXMuc2VydmVyVXBkYXRlSW50ZXJ2YWwpXHJcbiAgICB7XHJcbiAgICAgIC8vIFNlbmQgb3VyIHN0YXRlIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgdGhpcy5nYW1lSW50ZXJmYWNlLnVwZGF0ZVNlcnZlcihuZXdVc2VySW5wdXRTdGF0ZSk7XHJcblxyXG4gICAgICB0aGlzLmxhc3RTZW5kVG9TZXJ2ZXJUaW1lID0gdGhpcy5lc3RTZXJ2ZXJUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGl0LCBzbyB0aHJvdyBpdCBhd2F5LlxyXG4gICAgdGhpcy5uZXdTZXJ2ZXJTdGF0ZSA9IHVuZGVmaW5lZDtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW50ZXJ2YWxIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU0NTdGF0ZU1hbmFnZXI7IiwidmFyXHJcbiAgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9HYW1lT2JqZWN0JyksXHJcbiAgV29ybGQgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvV29ybGQnKSxcclxuICBQbGF5ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyJyksXHJcbiAgTGF0ZW5jeUFuYWx5emVyID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL0xhdGVuY3lBbmFseXplcicpLFxyXG4gIFNDU3RhdGVNYW5hZ2VyID0gcmVxdWlyZSgnLi9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXInKSxcclxuICBVc2VySW5wdXRQcm9jZXNzb3IgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvVXNlcklucHV0UHJvY2Vzc29yJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEZQUyA9IDYwLFxyXG4gIFNFUlZFUl9USU1FT1VUX01TID0gMTAwMDAsXHJcbiAgUExBTkVfR0xPQkFMUyA9IFBsYXllci5wcm90b3R5cGUuR0xPQkFMUztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNreUR1ZWxDbGllbnQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU2t5RHVlbENsaWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMubGF0ZW5jeUFuYWx5emVyID0gbmV3IExhdGVuY3lBbmFseXplcigpO1xyXG4gIHRoaXMuc2NTdGF0ZU1hbmFnZXIgPSBuZXcgU0NTdGF0ZU1hbmFnZXIoNjAsIHRoaXMpO1xyXG4gIHRoaXMudXNlcklucHV0UHJvY2Vzc29yID0gbmV3IFVzZXJJbnB1dFByb2Nlc3NvcigpO1xyXG5cclxuICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuU2t5RHVlbENsaWVudC5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHN0YXJ0ZWQ6IGZhbHNlLFxyXG4gIGlucHV0OiB7fSxcclxuICBwbGF5ZXI6IHVuZGVmaW5lZCxcclxuICBlcnJvclRleHQ6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBzdGF0ZSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIHNldCBzdGF0ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy53b3JsZC5zZXRTdGF0ZSh2YWx1ZS53b3JsZCk7XHJcbiAgfSxcclxuICBnZXQgdXNlcklucHV0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXA6IHRoaXMuaW5wdXQudXAuaXNEb3duLFxyXG4gICAgICBkb3duOiB0aGlzLmlucHV0LmRvd24uaXNEb3duLFxyXG4gICAgICBsZWZ0OiB0aGlzLmlucHV0LmxlZnQuaXNEb3duLFxyXG4gICAgICByaWdodDogdGhpcy5pbnB1dC5yaWdodC5pc0Rvd24sXHJcbiAgICAgIHRyaWdnZXI6IHRoaXMuaW5wdXQudHJpZ2dlci5pc0Rvd25cclxuICAgIH07XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGxhdGVuY3lDaGVjazogZnVuY3Rpb24gKGNvdW50LCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpID0gMDtcclxuICAgICAgY291bnQgPSBjb3VudCB8fCAxMDtcclxuXHJcbiAgICBwaW5nKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGluZygpIHtcclxuICAgICAgc2VsZi5sYXRlbmN5QW5hbHl6ZXIuc3RhcnRUZXN0KCk7XHJcbiAgICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnBpbmcnLCBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKCkge1xyXG4gICAgICBzZWxmLmxhdGVuY3lBbmFseXplci5lbmRUZXN0KCk7XHJcbiAgICAgICgrK2kgPCBjb3VudCkgPyBwaW5nKCkgOiBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uIChyaWQpIHtcclxuICAgIHRoaXMucmlkID0gcmlkO1xyXG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmxhdGVuY3lDaGVjaygxMCwgdGhpcy5zdGFydFNlcnZlckNvbm5lY3Rpb24uYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBzdG9wOiBmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICB0aGlzLmVycm9yVGV4dCA9IHJlYXNvbjtcclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGF1c2UoKTtcclxuICB9LFxyXG4gIHN0YXJ0U2VydmVyQ29ubmVjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5sYXRlbmN5ID0gdGhpcy5sYXRlbmN5QW5hbHl6ZXIubGF0ZW5jeTtcclxuICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnN0YXJ0Jywge1xyXG4gICAgICByaWQ6IHRoaXMucmlkXHJcbiAgICB9LCB0aGlzLnNlcnZlckNvbm5lY3Rpb25fc3RhcnRlZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICAvL1NDU3RhdGVNYW5hZ2VyIEludGVyZmFjZVxyXG4gIHNpbXVsYXRlVXBkYXRlOiBmdW5jdGlvbiAodXNlcklucHV0LCBlbGFwc2VkKSB7XHJcbiAgICBlbGFwc2VkID0gIGVsYXBzZWQgLyAxMDAwLjA7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiBTRVJWRVJfVElNRU9VVF9NUylcclxuICAgIHtcclxuICAgICAgdGhpcy5zdG9wKCdTZXJ2ZXIgZGlzY29ubmVjdGVkJyk7ICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAoZWxhcHNlZCA+IDAuMilcclxuICAgICAgdGhyb3cgRXJyb3IoJ0VsYXBzZWQgaXMgd2F5eXl5IHRvbyBoaWdoIG1hbi4gRGlkIHNlcnZlciBkaXNjb25uZWN0PycpO1xyXG5cclxuICAgIHRoaXMudXNlcklucHV0UHJvY2Vzc29yLnVwZGF0ZSh1c2VySW5wdXQsIGVsYXBzZWQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMud29ybGQudXBkYXRlKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgLy9TQ1N0YXRlTWFuYWdlciBJbnRlcmZhY2VcclxuICB1cGRhdGVTZXJ2ZXI6IGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIuc3RhcnRUZXN0KCk7XHJcbiAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci51c2VySW5wdXQnLCB0aGlzLnVzZXJJbnB1dCwgdGhpcy5zb2NrZXRfdXBkYXRlU2VydmVyUmVzcG9uc2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgc2V0dXBTdGFydFN0YXRlOiBmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWwgd29ybGQgc3RhdGUnLCBzdGF0ZS53b3JsZCk7XHJcblxyXG4gICAgdGhpcy53b3JsZC5zZXRTdGF0ZShzdGF0ZS53b3JsZCk7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLndvcmxkLmdldENoaWxkcmVuKCkuZ2V0KHRoaXMudWlkKTtcclxuXHJcbiAgICBpZiAoIXRoaXMucGxheWVyKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZyAoc3RhdGUpO1xyXG4gICAgICBjb25zb2xlLmxvZygnUGxheWVyIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiBpbmNvbWluZyBzdGF0ZSEnLCB0aGlzLnVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5uZXdTZXJ2ZXJTdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGxheSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBFdmVudHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHNlcnZlckNvbm5lY3Rpb25fc3RhcnRlZEhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICB0aGlzLnVpZCA9IGRhdGEudWlkO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09OTkVDVElPTiBzdGFydGVkJywgZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygnV0FJVElORyBmb3Igc2VydmVyIHN0YXRlJyk7XHJcblxyXG4gICAgcG9tZWxvLm9uKCdzZXJ2ZXJTdGF0ZScsIHRoaXMuc29ja2V0X3NlcnZlclN0YXRlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBsYXkoKTtcclxuICB9LFxyXG4gIHNvY2tldF9zZXJ2ZXJTdGF0ZUhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMuc2NTdGF0ZU1hbmFnZXIubGFzdFNlcnZlclN0YXRlKVxyXG4gICAgICB0aGlzLnNldHVwU3RhcnRTdGF0ZShkYXRhKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdGhpcy5zY1N0YXRlTWFuYWdlci5uZXdTZXJ2ZXJTdGF0ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzb2NrZXRfdXBkYXRlU2VydmVyUmVzcG9uc2VIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIuZW5kVGVzdCgpO1xyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5jbGllbnQgPSBuZXcgU2t5RHVlbENsaWVudCgpO1xyXG4iLCIvKiBhbiBhamF4IGxvZyBmaWxlIHRhaWxlciAvIHZpZXdlclxyXG5jb3B5cmlnaHQgMjAwNyBqb2huIG1pbm5paGFuLlxyXG4gXHJcbmh0dHA6Ly9mcmVlcG9zaXRvcnkuY29tXHJcbiBcclxuUmVsZWFzZWQgdW5kZXIgdGhlc2UgdGVybXNcclxuMS4gVGhpcyBzY3JpcHQsIGFzc29jaWF0ZWQgZnVuY3Rpb25zIGFuZCBIVE1MIGNvZGUgKFwidGhlIGNvZGVcIikgbWF5IGJlIHVzZWQgYnkgeW91IChcInRoZSByZWNpcGllbnRcIikgZm9yIGFueSBwdXJwb3NlLlxyXG4yLiBUaGlzIGNvZGUgbWF5IGJlIG1vZGlmaWVkIGluIGFueSB3YXkgZGVlbWVkIHVzZWZ1bCBieSB0aGUgcmVjaXBpZW50LlxyXG4zLiBUaGlzIGNvZGUgbWF5IGJlIHVzZWQgaW4gZGVyaXZhdGl2ZSB3b3JrcyBvZiBhbnkga2luZCwgYW55d2hlcmUsIGJ5IHRoZSByZWNpcGllbnQuXHJcbjQuIFlvdXIgdXNlIG9mIHRoZSBjb2RlIGluZGljYXRlcyB5b3VyIGFjY2VwdGFuY2Ugb2YgdGhlc2UgdGVybXMuXHJcbjUuIFRoaXMgbm90aWNlIG11c3QgYmUga2VwdCBpbnRhY3Qgd2l0aCBhbnkgdXNlIG9mIHRoZSBjb2RlIHRvIHByb3ZpZGUgYXR0cmlidXRpb24uXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KCkge1xyXG4gdmFyIHJlcXVlc3QgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB9IGNhdGNoICh0cnltaWNyb3NvZnQpIHtcclxuICAgdHJ5IHtcclxuICAgICByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNc3htbDIuWE1MSFRUUFwiKTtcclxuICAgfSBjYXRjaCAob3RoZXJtaWNyb3NvZnQpIHtcclxuICAgICB0cnkge1xyXG4gICAgICByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuICAgICB9IGNhdGNoIChmYWlsZWQpIHtcclxuICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiBpZiAocmVxdWVzdCA9PSBudWxsKSB7XHJcbiAgIGFsZXJ0KFwiRXJyb3IgY3JlYXRpbmcgcmVxdWVzdCBvYmplY3QhXCIpO1xyXG4gfSBlbHNlIHtcclxuICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiB9XHJcbn1cclxuIFxyXG52YXIgcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoKTtcclxuXHJcbndpbmRvdy5nZXRMb2cgPSBmdW5jdGlvbih0aW1lcikge1xyXG4gIHZhciB1cmwgPSBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgIT0gJ3d3dy5za3lkdWVsLmNvbScgPyAnOjMwMDEnIDogJycpICsgXCIvbG9nL2dhbWUtc2VydmVyLmxvZ1wiO1xyXG4gIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gdXBkYXRlUGFnZTtcclxuICByZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiAgc3RhcnRUYWlsKHRpbWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRUYWlsKHRpbWVyKSB7XHJcbiAgaWYgKHRpbWVyID09IFwic3RvcFwiKSB7XHJcbiAgICBzdG9wVGFpbCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ID0gc2V0VGltZW91dChcImdldExvZygpXCIsIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFRhaWwoKSB7XHJcbiAgY2xlYXJUaW1lb3V0KHQpO1xyXG4gIHZhciBwYXVzZSA9IFwiVGhlIGxvZyB2aWV3ZXIgaGFzIGJlZW4gcGF1c2VkLiBUbyBiZWdpbiB2aWV3aW5nIGFnYWluLCBjbGljayB0aGUgU3RhcnQgVmlld2VyIGJ1dHRvbi5cXG5cIjtcclxuICBsb2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcclxuICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhdXNlKTtcclxuICBsb2dEaXYucmVwbGFjZUNoaWxkKG5ld05vZGUsIGxvZ0Rpdi5jaGlsZE5vZGVzWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUGFnZSgpIHtcclxuICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgdmFyIGN1cnJlbnRMb2dWYWx1ZSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICBldmFsKGN1cnJlbnRMb2dWYWx1ZSk7XHJcbiAgICAgIGxvZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpO1xyXG4gICAgICB2YXIgbG9nTGluZSA9ICcgJztcclxuICAgICAgZm9yIChpID0gMDsgaSA8IGN1cnJlbnRMb2dWYWx1ZS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBsb2dMaW5lICs9IGN1cnJlbnRMb2dWYWx1ZVtpXSArIFwiXFxuXCI7XHJcbiAgICAgIH1cclxuICAgICAgbG9nRGl2LmlubmVySFRNTCA9IGxvZ0xpbmU7XHJcbiAgICB9IGVsc2VcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciEgUmVxdWVzdCBzdGF0dXMgaXMgXCIgKyByZXF1ZXN0LnN0YXR1cyk7XHJcbiAgfVxyXG59IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuTXV0YXRpb25PYnNlcnZlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgdmFyIHF1ZXVlID0gW107XG5cbiAgICBpZiAoY2FuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICB2YXIgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlTGlzdCA9IHF1ZXVlLnNsaWNlKCk7XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcXVldWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGhpZGRlbkRpdiwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCd5ZXMnLCAnbm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiJdfQ==
