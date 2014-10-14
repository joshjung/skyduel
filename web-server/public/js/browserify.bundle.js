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
},{"./game-server/node_modules/jclass/lib/jclass.min.js":2,"./shared/js/LatencyAnalyzer.js":5,"./shared/js/UserActions.js":6,"./shared/js/UserInputProcessor.js":7,"./shared/js/UserState.js":8,"./shared/js/characteristics/CharacteristicManager.js":10,"./shared/js/characteristics/Characteristic_DestroyOffScreen.js":12,"./shared/js/characteristics/Characteristic_Physics.js":14,"./shared/js/characteristics/Characteristic_ScreenWrapping.js":16,"./shared/js/characteristics/Characteristic_ShootsBullets.js":17,"./shared/js/gameObjects/Bird.js":19,"./shared/js/gameObjects/Bullet.js":20,"./shared/js/gameObjects/Player.js":22,"./shared/js/gameObjects/Smoke.js":23,"./shared/js/lib/HashArray.js":25,"./shared/js/sprites/BirdSprite.js":26,"./shared/js/sprites/BulletSprite.js":27,"./shared/js/sprites/PlanePartSprite.js":28,"./shared/js/sprites/PlaneSprite.js":29,"./shared/js/sprites/SmokeSprite.js":30,"./web-server/public/js/ServerClientStateManager.js":31,"./web-server/public/js/SkyDuelClient.js":32,"./web-server/public/js/logViewer.js":33}],2:[function(require,module,exports){
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
},{"_process":34}],3:[function(require,module,exports){
module.exports=require(2)
},{"/media/sf_dev/node/pomelo/skyduel/game-server/node_modules/jclass/lib/jclass.min.js":2,"_process":34}],4:[function(require,module,exports){
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
},{"./characteristics/CharacteristicManager":10,"./lib/HashArray":25,"jclass":3}],5:[function(require,module,exports){
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
  lastTestTime: {},
  lastLatencySampleTime: -1,
  latencySample: -1,
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
  startTest: function (key) {
    this.lastTestTime[key] = this.now;
  },
  endTest: function (key) {
    var elapsed = this.now - this.lastTestTime[key];
    delete this.lastTestTime[key];

    if (this.debug)
      console.log('LATENCY', this.latency);

    this.push(elapsed);
  },
  push: function(latency) {
    this.stack.push(latency);

    while (this.stack.length > this.maxStackLength)
      this.stack.shift();

    if (this.lastLatencySampleTime == -1 || this.now - this.lastLatencySampleTime > 2000)
    {
      this.latencySample = this.latency;
      this.lastLatencySampleTime = this.now;
    }
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
var JClass = require('jclass');

/*===================================================*\
 * CharacteristicBase()
\*=================================================*/
var CharacteristicBase = JClass.extend({
  /*=======================*\
   * Properties
  \*=========================*/
  isServer: function () {
    return !(typeof isClient === 'undefined' || isClient)
  },
  /*=======================*\
   * Constructor
  \*=========================*/
  init: function(options) {
    this.options = options;
  },
  /*=======================*\
   * Methods
  \*=========================*/
  applyTo: function () {
    if (this.applyToServerOnly && this.isServer)
    {
      this.applyToServerOnly.apply(this, arguments);
      return;
    }
    
    if (this.applyToClientOnly && !this.isServer)
    {
      this.applyToClientOnly.apply(this, arguments);
      return;
    }

    console.log('Please override CharacteristicBase::applyTo', this);
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = CharacteristicBase;
},{"jclass":3}],10:[function(require,module,exports){
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
},{"../lib/HashArray":25}],11:[function(require,module,exports){
var CharacteristicBase = require('./CharacteristicBase'),
  Characteristic_Physics = require('./Characteristic_Physics');

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
var Characteristic_Collides = CharacteristicBase.extend({
  tempPhysics: new Characteristic_Physics(),
  /*=========================*\
   * Constructor
  \*=========================*/
  init: function(options) {
    this.options = options;
    // These are the keys of the world objects that the this object can collide with!
    this.options.keys = this.options.keys || ['player', 'bird'];
  },
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
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Collides;
},{"./CharacteristicBase":9,"./Characteristic_Physics":14}],12:[function(require,module,exports){
var CharacteristicBase = require('./CharacteristicBase');

/*===================================================*\
 * Characteristic_DestroyOffScreen()
\*===================================================*/
var Characteristic_DestroyOffScreen = CharacteristicBase.extend({
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    var destroy = target.x < 0 || target.x > this.options.width || target.y < 0 || target.y > this.options.height;
    if (destroy)
      target.destroy();
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_DestroyOffScreen;
},{"./CharacteristicBase":9}],13:[function(require,module,exports){
var CharacteristicBase = require('./CharacteristicBase'),
  PlanePart = require('../gameObjects/PlanePart');

/*===================================================*\
 * Characteristic_Explodes()
\*===================================================*/
var Characteristic_Explodes = CharacteristicBase.extend({
  /*=========================*\
   * Methods
  \*=========================*/
  applyToServerOnly: function (target, elapsed, cache) {
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
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Explodes;
},{"../gameObjects/PlanePart":21,"./CharacteristicBase":9}],14:[function(require,module,exports){
var CharacteristicBase = require('./CharacteristicBase');

/*===================================================*\
 * Characteristic_Physics()
\*===================================================*/
var Characteristic_Physics = CharacteristicBase.extend({
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
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Physics;
},{"./CharacteristicBase":9}],15:[function(require,module,exports){
var CharacteristicBase = require('./CharacteristicBase');

/*===================================================*\
 * Characteristic_Respawns()
\*===================================================*/
var Characteristic_Respawns = CharacteristicBase.extend({
  /*=========================*\
   * Constructor
  \*=========================*/
  init: function(options) {
    this._super(options);

    // Default 5.0 second respawn if none provided
    this.options.RESPAWN_TIME = this.options.RESPAWN_TIME || 5000;
    // Default 5.0 second respawn if none provided
    this.options.RESPAWN_LOCATION = this.options.RESPAWN_LOCATION || 'random';
    this.options.RESPAWN_ORIENTATION = this.options.RESPAWN_ORIENTATION || 'random';
  },
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
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Respawns;
},{"./CharacteristicBase":9}],16:[function(require,module,exports){
var CharacteristicBase = require('./CharacteristicBase');

/*===================================================*\
 * Characteristic_ScreenWrapping()
\*===================================================*/
var Characteristic_ScreenWrapping = CharacteristicBase.extend({
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    target.x = target.x < 0 ? this.options.width : target.x;
    target.x = target.x > this.options.width ? target.x % this.options.width : target.x;
    target.y = target.y < 0 ? this.options.height : target.y;
    target.y = target.y > this.options.height ? target.y % this.options.height : target.y;
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_ScreenWrapping;
},{"./CharacteristicBase":9}],17:[function(require,module,exports){
var CharacteristicBase = require('./CharacteristicBase'),
  Bullet = require('../gameObjects/Bullet');

/*===================================================*\
 * Characteristic_ShootsBullets()
\*===================================================*/
var Characteristic_ShootsBullets = CharacteristicBase.extend({
  /*=========================*\
   * Variables
  \*=========================*/
  nextBulletTime: undefined,
  /*=========================*\
   * Properties
  \*=========================*/
  getNow: function() {
    return (new Date()).getTime();
  },
  /*=========================*\
   * Constructor
  \*=========================*/
  init: function(options) {
    this._super(options);

    this.options.fireRate = options.fireRate || 50.0;
    this.options.fireVelocity = options.fireVelocity || 700.0;
    // Bullets need to start 'ahead' of teh object firing them a little.
    this.options.offset = options.offset || 30;
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
    this.nextBulletTime = this.getNow() + this.options.fireRate;
  },
  applyTo: function (target, elapsed, cache) {
    if (!this.nextBulletTime)
      this.nextBulletTime = this.getNow() + this.options.fireRate;

    if (target.triggerDown)
    {
      var t = this.nextBulletTime + this.options.fireRate;
      
      while (this.getNow() > this.nextBulletTime)
      {
        this.fire(target, target.x, target.y, target.angle, this.options.fireVelocity);
      }
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_ShootsBullets;
},{"../gameObjects/Bullet":20,"./CharacteristicBase":9}],18:[function(require,module,exports){
var CharacteristicBase = require('./CharacteristicBase'),
  Smoke = require('../gameObjects/Smoke');

/*===================================================*\
 * Characteristic_Smokes()
\*===================================================*/
var Characteristic_Smokes = CharacteristicBase.extend({
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
})

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Smokes;
},{"../gameObjects/Smoke":23,"./CharacteristicBase":9}],19:[function(require,module,exports){
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
},{"../GameObject":4,"../characteristics/Characteristic_Physics":14,"../characteristics/Characteristic_ScreenWrapping":16}],20:[function(require,module,exports){
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
},{"../GameObject":4,"../characteristics/Characteristic_Collides":11,"../characteristics/Characteristic_DestroyOffScreen":12,"../characteristics/Characteristic_Physics":14}],21:[function(require,module,exports){
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
    this.bank = -0.3 + (Math.random() * 0.6);
    this.velocity = velocity;
    this.accelerater = -70 * Math.random();
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.health = 0;
    this.smokes = 0;
    this.index = index;
    this.rotation = 0;
    this.rotationSpeed = Math.random() * 100;

    this.sprite = undefined;

    this.type = 'planepart';

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_Smokes'))(this.GLOBALS));
  },
  update:function (elapsed) {
    this._super(elapsed);

    this.rotation += this.rotationSpeed * elapsed;

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
},{"../GameObject":4,"../characteristics/Characteristic_Physics":14,"../characteristics/Characteristic_Smokes":18}],22:[function(require,module,exports){
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
},{"../GameObject":4,"../characteristics/Characteristic_Explodes":13,"../characteristics/Characteristic_Physics":14,"../characteristics/Characteristic_Respawns":15,"../characteristics/Characteristic_ScreenWrapping":16,"../characteristics/Characteristic_ShootsBullets":17,"../characteristics/Characteristic_Smokes":18,"./Bullet":20,"./Smoke":23}],23:[function(require,module,exports){
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
},{"../GameObject":4}],24:[function(require,module,exports){
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
},{"../GameObject":4,"../lib/HashArray":25,"./Bird":19,"./PlanePart":21,"./Player":22,"./Smoke":23}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
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
  this.angle = model.rotation;
};

/*======================================================*\
 * Factory 
\*======================================================*/
Phaser.GameObjectFactory.prototype.planePart = function(x, y, frame, group) {
  if(typeof group === 'undefined')
    group = this.world;
  
  return group.add(new PlanePartSprite(this.game, x, y, frame));
};
},{}],29:[function(require,module,exports){
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

  this.statusRing.clear();
  this.statusRing.lineStyle(3.0, 0x3beb72, 1.0 * ratio);

  this.statusRing.arc(0, 0, 20.0, -(Math.PI/4) * ratio, (Math.PI / 4) * ratio ); 

  this.statusRing.lineStyle(1.0, 0x3beb72, 0.8);

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
},{}],30:[function(require,module,exports){
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
},{}],31:[function(require,module,exports){
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
},{"../../../shared/js/UserState":8}],32:[function(require,module,exports){
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
    var key = (Math.random() * 9999999).toString(16);

    this.latencyAnalyzer.startTest(key);

    pomelo.request('skyduel.skyduelHandler.userInput',
      this.userInput,
      this.socket_updateServerResponseHandler.bind(this, key));
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
  socket_updateServerResponseHandler: function (key, data) {
    this.latencyAnalyzer.endTest(key);
  }
};

window.client = new SkyDuelClient();

},{"../../../shared/js/GameObject":4,"../../../shared/js/LatencyAnalyzer":5,"../../../shared/js/UserInputProcessor":7,"../../../shared/js/gameObjects/Player":22,"../../../shared/js/gameObjects/World":24,"../../../shared/js/lib/HashArray":25,"./ServerClientStateManager":31}],33:[function(require,module,exports){
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
},{}],34:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljQmFzZS5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19Db2xsaWRlcy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXMuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Jlc3Bhd25zLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU21va2VzLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvQnVsbGV0LmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYW5lUGFydC5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGF5ZXIuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvU21va2UuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvV29ybGQuanMiLCJzaGFyZWQvanMvbGliL0hhc2hBcnJheS5qcyIsInNoYXJlZC9qcy9zcHJpdGVzL0JpcmRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9CdWxsZXRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9QbGFuZVBhcnRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9QbGFuZVNwcml0ZS5qcyIsInNoYXJlZC9qcy9zcHJpdGVzL1Ntb2tlU3ByaXRlLmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvU2VydmVyQ2xpZW50U3RhdGVNYW5hZ2VyLmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvU2t5RHVlbENsaWVudC5qcyIsIndlYi1zZXJ2ZXIvcHVibGljL2pzL2xvZ1ZpZXdlci5qcyIsIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gTGlicmFyeVxyXG52YXIgaXNDbGllbnQgPSB0cnVlO1xyXG5cclxucmVxdWlyZShcIi4vZ2FtZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL2pjbGFzcy9saWIvamNsYXNzLm1pbi5qc1wiKTtcclxuXHJcbi8vIFNoYXJlZFxyXG5cclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2xpYi9IYXNoQXJyYXkuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvU21va2UuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9CdWxsZXQuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGF5ZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9CaXJkLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvVXNlckFjdGlvbnMuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9Vc2VyU3RhdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9Vc2VySW5wdXRQcm9jZXNzb3IuanNcIik7XHJcblxyXG4vLyBTcHJpdGVzXHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL1BsYW5lUGFydFNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvU21va2VTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL1BsYW5lU3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9CdWxsZXRTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL0JpcmRTcHJpdGUuanNcIik7XHJcblxyXG4vLyBDbGllbnRcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL0xhdGVuY3lBbmFseXplci5qc1wiKTtcclxucmVxdWlyZShcIi4vd2ViLXNlcnZlci9wdWJsaWMvanMvU2VydmVyQ2xpZW50U3RhdGVNYW5hZ2VyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi93ZWItc2VydmVyL3B1YmxpYy9qcy9Ta3lEdWVsQ2xpZW50LmpzXCIpO1xyXG5cclxuLy8gVmlld1xyXG5yZXF1aXJlKFwiLi93ZWItc2VydmVyL3B1YmxpYy9qcy9sb2dWaWV3ZXIuanNcIik7IiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCl7XG4vKiFcbiAqIEphdmFTY3JpcHQgSW5oZXJpdGFuY2Ugd2l0aCBQcml2YXRlIE1lbWJlcnNcbiAqIExhcmdlbHkgYmFzZWQgdXBvbiBKb2huIFJlc2lnJ3MgaW5oZXJpdGFuY2UgdGVjaG5pcXVlLFxuICogKHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvc2ltcGxlLWphdmFzY3JpcHQtaW5oZXJpdGFuY2UvKVxuICogdGhhdCB3YXMgaW5zcGlyZWQgYnkgYmFzZTIgYW5kIFByb3RvdHlwZS5cbiAqXG4gKiBXb3JrcyB3aXRoIGFuZCB3aXRob3V0IG5vZGUuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZVxuICpcbiAqIHYyLjAuNCwgTWFyY2VsIFJpZWdlciwgMjAxM1xuICogaHR0cHM6Ly9naXRodWIuY29tL3JpZ2EvamNsYXNzXG4gKiBodHRwczovL25wbWpzLm9yZy9wYWNrYWdlL2pjbGFzc1xuICovXG52YXIgbnMsbnNLZXk7XG5pZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIiYmdHlwZW9mIHByb2Nlc3MhPT1cInVuZGVmaW5lZFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIiYmbW9kdWxlLmV4cG9ydHMpe25zPW1vZHVsZTtuc0tleT1cImV4cG9ydHNcIjt9ZWxzZXtpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7bnM9d2luZG93O1xubnNLZXk9XCJKQ2xhc3NcIjt9fShmdW5jdGlvbihkLGYpe3ZhciBiPWRbZl07dmFyIGE9e2V4dGVuZGFibGU6dHJ1ZSxjdG9yTmFtZTpcImluaXRcIixzdXBlck5hbWU6XCJfc3VwZXJcIixlbmFibGVQcml2YWN5OnRydWUscHJpdmF0ZVBhdHRlcm46L15fXy4rLyx0cmFja2luZzp0cnVlLHByaXZhdGVOYW1lOlwiX19cIixtZXRob2RzS2V5OlwiX2pjTWV0aG9kc19cIixkZXB0aEtleTpcIl9qY0RlcHRoX1wiLGNhbGxlckRlcHRoS2V5OlwiX2pjQ2FsbGVyRGVwdGhfXCJ9O1xudmFyIGM9ZmFsc2U7dmFyIGU9ZnVuY3Rpb24oKXt9O2UuZXh0ZW5kPWZ1bmN0aW9uKG0sZyl7Zz1nfHx7fTtmb3IodmFyIHEgaW4gYSl7aWYoZ1txXT09PXVuZGVmaW5lZCl7Z1txXT1hW3FdO319aWYoIWcuZW5hYmxlUHJpdmFjeSl7Zy5wcml2YXRlUGF0dGVybj1udWxsO1xuZy5wcml2YXRlTmFtZT1udWxsO312YXIgcj10aGlzLnByb3RvdHlwZTtjPXRydWU7dmFyIG89bmV3IHRoaXMoKTtjPWZhbHNlO29bZy5kZXB0aEtleV09cltnLmRlcHRoS2V5XXx8MDtvW2cuZGVwdGhLZXldKys7dmFyIGs9b1tnLmRlcHRoS2V5XTt2YXIgaT17fTt2YXIgaj17fTtcbnZhciBzPXt9O2Zvcih2YXIgaCBpbiBtKXtpZihtW2hdIGluc3RhbmNlb2YgRnVuY3Rpb24pe3ZhciBuPShmdW5jdGlvbih0LHUpe3JldHVybiBmdW5jdGlvbigpe3ZhciB2PXRoaXNbZy5zdXBlck5hbWVdO2lmKCFnLnByaXZhdGVQYXR0ZXJufHwhZy5wcml2YXRlUGF0dGVybi50ZXN0KHQpKXt0aGlzW2cuc3VwZXJOYW1lXT1yW3RdO1xufXZhciBEO2lmKGcucHJpdmF0ZU5hbWUpe0Q9dGhpc1tnLnByaXZhdGVOYW1lXTt0aGlzW2cucHJpdmF0ZU5hbWVdPUR8fHM7fXZhciB5LEUseCxJO2lmKGcucHJpdmF0ZVBhdHRlcm4pe2lmKHRoaXNbZy5jYWxsZXJEZXB0aEtleV09PT11bmRlZmluZWQpe3RoaXNbZy5jYWxsZXJEZXB0aEtleV09aztcbn15PXRoaXNbZy5tZXRob2RzS2V5XTtpZih0PT1nLmN0b3Ipe3RoaXNbZy5tZXRob2RzS2V5XT15fHxpO2Zvcih2YXIgeiBpbiBpKXtpZighdGhpc1tnLm1ldGhvZHNLZXldW3pdKXt0aGlzW2cubWV0aG9kc0tleV1bel09e307fXRoaXNbZy5tZXRob2RzS2V5XVt6XVtrXT1pW3pdW2tdO1xudmFyIEM9dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdO3RoaXNbZy5tZXRob2RzS2V5XVt6XVtrXT1mdW5jdGlvbigpe3ZhciBLPXRoaXNbZy5zdXBlck5hbWVdO3RoaXNbZy5zdXBlck5hbWVdPXRoaXNbZy5tZXRob2RzS2V5XVt6XVtrLTFdO3ZhciBKPUMuYXBwbHkodGhpcyxhcmd1bWVudHMpO1xudGhpc1tnLnN1cGVyTmFtZV09SztyZXR1cm4gSjt9O31pPXRoaXNbZy5tZXRob2RzS2V5XTt9ZWxzZXt0aGlzW2cubWV0aG9kc0tleV09aTt9RT17fTtmb3IodmFyIHogaW4gdGhpc1tnLm1ldGhvZHNLZXldKXtFW3pdPXRoaXNbel07dmFyIEY9TWF0aC5tYXguYXBwbHkoTWF0aCxPYmplY3Qua2V5cyhpW3pdKSk7XG50aGlzW3pdPWlbel1bRl07fWlmKGcudHJhY2tpbmcpe3g9e307Zm9yKHZhciBHIGluIGope3hbR109dGhpc1tHXTt0aGlzW0ddPWpbR107fX1pZihnLnRyYWNraW5nKXtJPU9iamVjdC5rZXlzKHRoaXMpO319dmFyIEI9dS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYoZy5wcml2YXRlUGF0dGVybil7aWYoZy50cmFja2luZyl7dmFyIEg9T2JqZWN0LmtleXModGhpcyk7XG5mb3IodmFyIEcgaW4gSCl7Rz1IW0ddO2lmKGcucHJpdmF0ZVBhdHRlcm4udGVzdChHKSl7eFtHXT10aGlzW0ddO2pbR109dGhpc1tHXTt9fWZvcih2YXIgRyBpbiBJKXtHPUlbR107dmFyIEE9SC5pbmRleE9mKEcpPDAmJmcucHJpdmF0ZVBhdHRlcm4udGVzdChHKTtpZihBKXtkZWxldGUgaltHXTtcbmRlbGV0ZSB0aGlzW0ddO319Zm9yKHZhciBHIGluIGope3ZhciB3PXRoaXNbZy5jYWxsZXJEZXB0aEtleV07aWYoeFtHXT09PXVuZGVmaW5lZHx8az09dyl7ZGVsZXRlIHRoaXNbR107fWVsc2V7dGhpc1tHXT14W0ddO319fWZvcih2YXIgRyBpbiB0aGlzW2cubWV0aG9kc0tleV0pe2lmKEVbR109PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW0ddO1xufWVsc2V7dGhpc1tHXT1FW0ddO319aWYoeT09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5tZXRob2RzS2V5XTt9ZWxzZXt0aGlzW2cubWV0aG9kc0tleV09eTt9aWYoaz09dGhpc1tnLmNhbGxlckRlcHRoS2V5XSl7ZGVsZXRlIHRoaXNbZy5jYWxsZXJEZXB0aEtleV07XG59fWlmKGcucHJpdmF0ZU5hbWUpe2lmKEQ9PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW2cucHJpdmF0ZU5hbWVdO31lbHNle3RoaXNbZy5wcml2YXRlTmFtZV09RDt9fWlmKHY9PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW2cuc3VwZXJOYW1lXTt9ZWxzZXt0aGlzW2cuc3VwZXJOYW1lXT12O1xufXJldHVybiBCO307fSkoaCxtW2hdKTt2YXIgbD1nLnByaXZhdGVQYXR0ZXJuJiZnLnByaXZhdGVQYXR0ZXJuLnRlc3QoaCk7aWYobCl7aVtoXT17fTtpW2hdW2tdPW47fWVsc2V7b1toXT1uO319ZWxzZXt2YXIgbD1nLnRyYWNraW5nJiZnLnByaXZhdGVQYXR0ZXJuJiZnLnByaXZhdGVQYXR0ZXJuLnRlc3QoaCk7XG5pZihsKXtqW2hdPW1baF07fWVsc2V7b1toXT1tW2hdO319fWZ1bmN0aW9uIHAoKXtpZighYyYmdGhpc1tnLmN0b3JOYW1lXSl7dGhpc1tnLmN0b3JOYW1lXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7fX1wLnByb3RvdHlwZT1vO3AucHJvdG90eXBlLmNvbnN0cnVjdG9yPXA7XG5pZihnLmV4dGVuZGFibGUhPT1mYWxzZSl7cC5leHRlbmQ9YXJndW1lbnRzLmNhbGxlZTt9cmV0dXJuIHA7fTtlLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXt2YXIgZz1kW2ZdO2RbZl09YjtyZXR1cm4gZzt9O2RbZl09ZTt9KShucyxuc0tleSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFJlcXVpcmVzXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY01hbmFnZXIgPSByZXF1aXJlKCcuL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY01hbmFnZXInKSxcclxuICBKQ2xhc3MgPSByZXF1aXJlKCdqY2xhc3MnKSxcclxuICBIYXNoQXJyYXkgPSByZXF1aXJlKCcuL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdhbWVPYmplY3QoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgR2FtZU9iamVjdCA9IG1vZHVsZS5leHBvcnRzID0gSkNsYXNzLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHN0YXRlU2V0UHJvcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcbiAgc3RhdGVHZXRQcm9wczogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gWydfaWQnXTtcclxuICB9LFxyXG4gIHNldFBhcmVudDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0UGFyZW50OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgfSxcclxuICBzZXRDaGlsZHJlbjogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIC8vIERlc2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICB0aGlzLl9jaGlsZHJlbiA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0Q2hpbGRyZW46IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gU2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XHJcbiAgfSxcclxuICBzZXRJZDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuX2lkID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRJZDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQgfHwgKHRoaXMuX2lkID0gdGhpcy5yYW5kb21JZCgpKTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuKCkuYWxsLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGQuc3RhdGU7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgZ2V0Q2hpbGRyZW5JZHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHZhciByZXQgPSB7fTtcclxuXHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIHJldFtjaGlsZC5nZXRJZCgpXSA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH0sXHJcbiAgc2V0Q2hpbGRyZW5TdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgaWRzID0gdGhpcy5nZXRDaGlsZHJlbklkcygpO1xyXG5cclxuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgICAgdmFyIGNoaWxkID0gc2VsZi5nZXRDaGlsZHJlbigpLmdldChjaGlsZFN0YXRlLmlkKTtcclxuICAgICAgaWYgKCFjaGlsZClcclxuICAgICAgICBzZWxmLmdldENoaWxkcmVuKCkuYWRkKHNlbGYubmV3Q2hpbGRGcm9tU3RhdGUoY2hpbGRTdGF0ZSkpO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNoaWxkKSA9PT0gJ1tvYmplY3QgQXJyYXldJyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1R3byBpZHMgYXJlIHRoZSBzYW1lIScsIGNoaWxkWzBdLmdldElkKCkpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZC5zZXRTdGF0ZShjaGlsZFN0YXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGVsZXRlIGlkc1tjaGlsZFN0YXRlLmlkXTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmRlc3Ryb3lVbmZvdW5kQ2hpbGRyZW5PblN0YXRlU2V0KVxyXG4gICAgICBmb3IgKHZhciBpZCBpbiBpZHMpXHJcbiAgICAgICAgdGhpcy5kZXN0cm95Q2hpbGRCeUlkKGlkKTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldENoaWxkcmVuKCkuYWxsLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkLmdldFN0YXRlKCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldERpcnR5OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRGVzZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMuX2RpcnR5ID0gdmFsdWU7XHJcbiAgICAodGhpcy5fZGlydHkgJiYgdGhpcy5nZXRQYXJlbnQoKSkgPyB0aGlzLmdldFBhcmVudCgpLnNldERpcnR5KHRydWUpIDogJyc7XHJcbiAgICAhdGhpcy5fZGlydHkgPyB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQuc2V0RGlydHkoZmFsc2UpO1xyXG4gICAgfSkgOiAnJztcclxuICB9LFxyXG4gIGdldERpcnR5OiBmdW5jdGlvbigpIHtcclxuICAgIC8vIFNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgcmV0dXJuIHRoaXMuX2RpcnR5O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHJhbmRvbUlkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTk5OTk5OTk5KS50b1N0cmluZygxNik7XHJcbiAgfSxcclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCkge1xyXG4gICAgaWYgKCFwYXJlbnQpXHJcbiAgICB7XHJcbiAgICAgIEdhbWVPYmplY3QucHJvdG90eXBlLndvcmxkID0gR2FtZU9iamVjdC5wcm90b3R5cGUucm9vdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRJZChpZCk7XHJcbiAgICB0aGlzLnR5cGUgPSAnR2FtZU9iamVjdCc7XHJcbiAgICB0aGlzLmJ1aWxkQ2hpbGRyZW5PYmplY3QoKTtcclxuICAgIHRoaXMuc2V0UGFyZW50KHBhcmVudCk7XHJcbiAgICB0aGlzLnNldERpcnR5KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc3ByaXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5kZXN0cm95VW5mb3VuZENoaWxkcmVuT25TdGF0ZVNldCA9IHRydWU7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyID0gbmV3IENoYXJhY3RlcmlzdGljTWFuYWdlcih0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluaXRlZD0gdHJ1ZTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vIFdpcGUgb3V0IGFueSBkZXN0cm95ZWQgY2hpbGRyZW4uXHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmNvbmNhdCgpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGlmIChjaGlsZC5kZXN0cm95ZWQpXHJcbiAgICAgICAgc2VsZi5nZXRDaGlsZHJlbigpLnJlbW92ZShjaGlsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZShlbGFwc2VkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYXBwbHlBbGwoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgIHZhciBjaGlsZCA9IG5ldyBHYW1lT2JqZWN0KCk7XHJcbiAgICBjaGlsZC5pbml0KHRoaXMsIGNoaWxkU3RhdGUuaWQpXHJcbiAgICBjaGlsZC5zdGF0ZSA9IGNoaWxkU3RhdGU7XHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfSxcclxuICBkZXN0cm95Q2hpbGRCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGRyZW4oKS5nZXQoaWQpO1xyXG5cclxuICAgIGlmICghY2hpbGQpXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIGRlc3Ryb3kgbm9uLWV4aXN0ZW50IGNoaWxkIHdpdGggaWQnLCBpZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hpbGQuZGVzdHJveSlcclxuICAgIHtcclxuICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkucmVtb3ZlKGNoaWxkKTtcclxuICB9LFxyXG4gIGJ1aWxkQ2hpbGRyZW5PYmplY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0Q2hpbGRyZW4obmV3IEhhc2hBcnJheShbJ19pZCcsICd0eXBlJ10pKTtcclxuICB9LFxyXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgfSxcclxuICB1cGRhdGVTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIGlmICh0aGlzLnNwcml0ZSAmJiB0aGlzLmRlc3Ryb3llZClcclxuICAgICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICBpZiAoIXRoaXMuc3ByaXRlKVxyXG4gICAgICAgIHRoaXMuYnVpbGRTcHJpdGUocGhhc2VyKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNwcml0ZSlcclxuICAgICAgICB0aGlzLnNwcml0ZS51cGRhdGVXaXRoTW9kZWwodGhpcyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQudXBkYXRlUGhhc2VyKHBoYXNlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNwcml0ZShwaGFzZXIpO1xyXG4gIH0sXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG4gIH1cclxufSk7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgTEFURU5DWV9BTkFMWVpFUl9ERUZBVUxUX01BWCA9IDEwO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogTGF0ZW5jeUFuYWx5emVyKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIExhdGVuY3lBbmFseXplciA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuZGVidWcgPSBmYWxzZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5MYXRlbmN5QW5hbHl6ZXIucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFjazogW10sXHJcbiAgbWF4U3RhY2tMZW5ndGg6IExBVEVOQ1lfQU5BTFlaRVJfREVGQVVMVF9NQVgsXHJcbiAgbGFzdFRlc3RUaW1lOiB7fSxcclxuICBsYXN0TGF0ZW5jeVNhbXBsZVRpbWU6IC0xLFxyXG4gIGxhdGVuY3lTYW1wbGU6IC0xLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IGxhdGVuY3koKSB7XHJcbiAgICAvLyBSZXR1cm5zIGEgd2VpZ2h0ZWQgYXZlcmFnZSBsYXRlbmN5LlxyXG4gICAgLy8gSXRlbSBhdCBpeCAwIGhhcyB3ZWlnaHQgb2YgMSBhbmQgaXRlbSBhdCBpeCBsZW5ndGggaGFzIHdlaWdodCBvZiBsZW5ndGguXHJcbiAgICB2YXIgX2xhdGVuY3kgPSAwLCBwZXJjID0gMDtcclxuXHJcbiAgICB2YXIgd2VpZ2h0cyA9IFswLjMzXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhY2subGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIHBlcmMgKz0gd2VpZ2h0c1tpXTtcclxuICAgICAgd2VpZ2h0c1tpKzFdID0gd2VpZ2h0c1tpXSAqIDAuNjY2NjtcclxuICAgIH1cclxuXHJcbiAgICB3ZWlnaHRzWzBdICs9IDEuMCAtIHBlcmM7XHJcbiAgICBwZXJjICs9IDEuMCAtIHBlcmM7XHJcbiAgICB3ZWlnaHRzLnJldmVyc2UoKTtcclxuXHJcbiAgICB0aGlzLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKGwsIGkpIHtcclxuICAgICAgX2xhdGVuY3kgKz0gbCAqIHdlaWdodHNbaV07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgY29uc29sZS5sb2coJ0xBVEVOQ1knLCBfbGF0ZW5jeSk7XHJcblxyXG4gICAgcmV0dXJuIF9sYXRlbmN5O1xyXG4gIH0sXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFydFRlc3Q6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIHRoaXMubGFzdFRlc3RUaW1lW2tleV0gPSB0aGlzLm5vdztcclxuICB9LFxyXG4gIGVuZFRlc3Q6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIHZhciBlbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUZXN0VGltZVtrZXldO1xyXG4gICAgZGVsZXRlIHRoaXMubGFzdFRlc3RUaW1lW2tleV07XHJcblxyXG4gICAgaWYgKHRoaXMuZGVidWcpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdMQVRFTkNZJywgdGhpcy5sYXRlbmN5KTtcclxuXHJcbiAgICB0aGlzLnB1c2goZWxhcHNlZCk7XHJcbiAgfSxcclxuICBwdXNoOiBmdW5jdGlvbihsYXRlbmN5KSB7XHJcbiAgICB0aGlzLnN0YWNrLnB1c2gobGF0ZW5jeSk7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuc3RhY2subGVuZ3RoID4gdGhpcy5tYXhTdGFja0xlbmd0aClcclxuICAgICAgdGhpcy5zdGFjay5zaGlmdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmxhc3RMYXRlbmN5U2FtcGxlVGltZSA9PSAtMSB8fCB0aGlzLm5vdyAtIHRoaXMubGFzdExhdGVuY3lTYW1wbGVUaW1lID4gMjAwMClcclxuICAgIHtcclxuICAgICAgdGhpcy5sYXRlbmN5U2FtcGxlID0gdGhpcy5sYXRlbmN5O1xyXG4gICAgICB0aGlzLmxhc3RMYXRlbmN5U2FtcGxlVGltZSA9IHRoaXMubm93O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc3RhY2sgPSBbXTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBMYXRlbmN5QW5hbHl6ZXI7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVVNFUl9BQ1RJT05TID0ge1xyXG4gIExFRlRfRE9XTjogMHgwMDAxLFxyXG4gIExFRlRfVVA6IDB4MDAwMixcclxuICBSSUdIVF9ET1dOOiAweDAwMTAsXHJcbiAgUklHSFRfVVA6IDB4MDAyMCxcclxuICBVUF9ET1dOOiAweDAxMDAsXHJcbiAgVVBfVVA6IDB4MDIwMCxcclxuICBET1dOX0RPV046IDB4MTAwMCxcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gVVNFUl9BQ1RJT05TO1xyXG59IGVsc2Uge1xyXG4gIHdpbmRvdy5VU0VSX0FDVElPTlMgPSBVU0VSX0FDVElPTlM7XHJcbn0iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBVc2VySW5wdXRQcm9jZXNzb3IoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVXNlcklucHV0UHJvY2Vzc29yID0gZnVuY3Rpb24oKSB7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuVXNlcklucHV0UHJvY2Vzc29yLnByb3RvdHlwZSA9IHtcclxuICB1cGRhdGU6IGZ1bmN0aW9uICh1c2VySW5wdXQsIGVsYXBzZWQsIHdvcmxkKSB7XHJcbiAgICBpZiAodXNlcklucHV0LmxlZnQpXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gLXdvcmxkLnBsYXllci5HTE9CQUxTLkJBTktfUkFURTtcclxuICAgIGVsc2UgaWYgKHVzZXJJbnB1dC5yaWdodClcclxuICAgICAgd29ybGQucGxheWVyLmJhbmsgPSB3b3JsZC5wbGF5ZXIuR0xPQkFMUy5CQU5LX1JBVEU7XHJcbiAgICBlbHNlXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gMDtcclxuXHJcbiAgICBpZiAodXNlcklucHV0LnVwKVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSB3b3JsZC5wbGF5ZXIuR0xPQkFMUy5BQ0NFTEVSQVRJT05fUkFURTtcclxuICAgIGVsc2UgaWYgKHVzZXJJbnB1dC5kb3duKVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSAtd29ybGQucGxheWVyLkdMT0JBTFMuREVDRUxFUkFUSU9OX1JBVEU7XHJcbiAgICBlbHNlIFxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSAwLjA7XHJcblxyXG4gICAgd29ybGQucGxheWVyLnRyaWdnZXJEb3duID0gdXNlcklucHV0LnRyaWdnZXI7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcklucHV0UHJvY2Vzc29yOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFVzZXJJbnB1dFN0YXRlKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVzZXJJbnB1dFN0YXRlID0gZnVuY3Rpb24oaW5wdXQsIHRpbWUpIHtcclxuICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgdGhpcy50aW1lID0gdGltZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5Vc2VySW5wdXRTdGF0ZS5wcm90b3R5cGUgPSB7XHJcbiAgaW5wdXQ6IHVuZGVmaW5lZCxcclxuICB0aW1lOiB1bmRlZmluZWRcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcklucHV0U3RhdGU7IiwidmFyIEpDbGFzcyA9IHJlcXVpcmUoJ2pjbGFzcycpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNCYXNlKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY0Jhc2UgPSBKQ2xhc3MuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGlzU2VydmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gISh0eXBlb2YgaXNDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IGlzQ2xpZW50KVxyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuYXBwbHlUb1NlcnZlck9ubHkgJiYgdGhpcy5pc1NlcnZlcilcclxuICAgIHtcclxuICAgICAgdGhpcy5hcHBseVRvU2VydmVyT25seS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmFwcGx5VG9DbGllbnRPbmx5ICYmICF0aGlzLmlzU2VydmVyKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmFwcGx5VG9DbGllbnRPbmx5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnUGxlYXNlIG92ZXJyaWRlIENoYXJhY3RlcmlzdGljQmFzZTo6YXBwbHlUbycsIHRoaXMpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY0Jhc2U7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljTWFuYWdlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIHRoaXMuY2hhcmFjdGVyaXN0aWNzID0gbmV3IEhhc2hBcnJheShbJ25hbWUnXSk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBjYWNoZToge30sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFkZDogZnVuY3Rpb24gKGNoYXJhY3RlcmlzdGljKSB7XHJcbiAgICB0aGlzLmNoYXJhY3RlcmlzdGljcy5hZGQoY2hhcmFjdGVyaXN0aWMpO1xyXG4gIH0sXHJcbiAgYXBwbHlBbGw6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmNhY2hlID0ge307XHJcblxyXG4gICAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoYXJhY3RlcmlzdGljKSB7XHJcbiAgICAgIGNoYXJhY3RlcmlzdGljLmFwcGx5VG8oc2VsZi5wYXJlbnQsIGVsYXBzZWQsIHNlbGYuY2FjaGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyOyIsInZhciBDaGFyYWN0ZXJpc3RpY0Jhc2UgPSByZXF1aXJlKCcuL0NoYXJhY3RlcmlzdGljQmFzZScpLFxyXG4gIENoYXJhY3RlcmlzdGljX1BoeXNpY3MgPSByZXF1aXJlKCcuL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIE1hdGggQnVsbHNoaXRcclxuICogUHJvb2YgaGVyZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NDkyMTEvc2hvcnRlc3QtZGlzdGFuY2UtYmV0d2Vlbi1hLXBvaW50LWFuZC1hLWxpbmUtc2VnbWVudFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBzcXIoeCkgeyByZXR1cm4geCAqIHggfVxyXG5mdW5jdGlvbiBkaXN0Mih2LCB3KSB7IHJldHVybiBzcXIodi54IC0gdy54KSArIHNxcih2LnkgLSB3LnkpIH1cclxuZnVuY3Rpb24gZGlzdFRvU2VnbWVudFNxdWFyZWQocCwgdiwgdykge1xyXG4gIHZhciBsMiA9IGRpc3QyKHYsIHcpO1xyXG4gIGlmIChsMiA9PSAwKSByZXR1cm4gZGlzdDIocCwgdik7XHJcbiAgdmFyIHQgPSAoKHAueCAtIHYueCkgKiAody54IC0gdi54KSArIChwLnkgLSB2LnkpICogKHcueSAtIHYueSkpIC8gbDI7XHJcbiAgaWYgKHQgPCAwKSByZXR1cm4gZGlzdDIocCwgdik7XHJcbiAgaWYgKHQgPiAxKSByZXR1cm4gZGlzdDIocCwgdyk7XHJcbiAgcmV0dXJuIGRpc3QyKHAsIHsgeDogdi54ICsgdCAqICh3LnggLSB2LngpLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHYueSArIHQgKiAody55IC0gdi55KSB9KTtcclxufVxyXG5mdW5jdGlvbiBkaXN0VG9TZWdtZW50KHAsIHYsIHcpIHsgcmV0dXJuIE1hdGguc3FydChkaXN0VG9TZWdtZW50U3F1YXJlZChwLCB2LCB3KSk7IH1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX0NvbGxpZGVzKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX0NvbGxpZGVzID0gQ2hhcmFjdGVyaXN0aWNCYXNlLmV4dGVuZCh7XHJcbiAgdGVtcFBoeXNpY3M6IG5ldyBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzKCksXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogQ29uc3RydWN0b3JcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgLy8gVGhlc2UgYXJlIHRoZSBrZXlzIG9mIHRoZSB3b3JsZCBvYmplY3RzIHRoYXQgdGhlIHRoaXMgb2JqZWN0IGNhbiBjb2xsaWRlIHdpdGghXHJcbiAgICB0aGlzLm9wdGlvbnMua2V5cyA9IHRoaXMub3B0aW9ucy5rZXlzIHx8IFsncGxheWVyJywgJ2JpcmQnXTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgXHJcbiAgICB0aGlzLnRlbXBQaHlzaWNzLm9wdGlvbnMgPSB0YXJnZXQud29ybGQ7XHJcblxyXG4gICAgdmFyIHRhcmdldHMgPSB0YXJnZXQud29ybGQuZ2V0Q2hpbGRyZW4oKS5nZXRBbGwodGhpcy5vcHRpb25zLmtleXMpLFxyXG4gICAgICBzdGFydCA9IHRoaXMudGVtcFBoeXNpY3MuYXBwbHlUZW1wKHRhcmdldCwgMCksXHJcbiAgICAgIGVuZCA9IHRoaXMudGVtcFBoeXNpY3MuYXBwbHlUZW1wKHRhcmdldCwgZWxhcHNlZCk7XHJcblxyXG4gICAgdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgIHZhciBzaG9ydGVzdERpc3RhbmNlID0gZGlzdFRvU2VnbWVudCh0LCBzdGFydCwgZW5kKTtcclxuICAgICAgaWYgKHNob3J0ZXN0RGlzdGFuY2UgPCAodGFyZ2V0LnJhZGl1cyAqIDIpICsgKHQucmFkaXVzICogMikpXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmNhbGxiYWNrKVxyXG4gICAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrLmFwcGx5KG51bGwsIFt0LCBzaG9ydGVzdERpc3RhbmNlXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19Db2xsaWRlczsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY0Jhc2UnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4oKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbiA9IENoYXJhY3RlcmlzdGljQmFzZS5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIGRlc3Ryb3kgPSB0YXJnZXQueCA8IDAgfHwgdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggfHwgdGFyZ2V0LnkgPCAwIHx8IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodDtcclxuICAgIGlmIChkZXN0cm95KVxyXG4gICAgICB0YXJnZXQuZGVzdHJveSgpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuOyIsInZhciBDaGFyYWN0ZXJpc3RpY0Jhc2UgPSByZXF1aXJlKCcuL0NoYXJhY3RlcmlzdGljQmFzZScpLFxyXG4gIFBsYW5lUGFydCA9IHJlcXVpcmUoJy4uL2dhbWVPYmplY3RzL1BsYW5lUGFydCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXMgPSBDaGFyYWN0ZXJpc3RpY0Jhc2UuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUb1NlcnZlck9ubHk6IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICBpZiAodGFyZ2V0LmhlYWx0aCA8PSAwICYmICF0YXJnZXQuZXhwbG9kZWQpXHJcbiAgICB7XHJcbiAgICAgIHRhcmdldC5leHBsb2RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZXhwbG9kZSh0YXJnZXQpO1xyXG4gICAgICB0YXJnZXQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXhwbG9kZTogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspXHJcbiAgICB7XHJcbiAgICAgIHZhciBwYXJ0ID0gbmV3IFBsYW5lUGFydCh0YXJnZXQud29ybGQsIHRhcmdldC5nZXRJZCgpICsgJ19wYXJ0JyArIGksIHRhcmdldC54LCB0YXJnZXQueSwgdGFyZ2V0LmFuZ2xlLCB0YXJnZXQudmVsb2NpdHksIGkpO1xyXG4gICAgICB0YXJnZXQud29ybGQuZ2V0Q2hpbGRyZW4oKS5hZGQocGFydCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX0V4cGxvZGVzOyIsInZhciBDaGFyYWN0ZXJpc3RpY0Jhc2UgPSByZXF1aXJlKCcuL0NoYXJhY3RlcmlzdGljQmFzZScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzID0gQ2hhcmFjdGVyaXN0aWNCYXNlLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB2YXIgcmVzID0gdGhpcy5hcHBseVRlbXAodGFyZ2V0LCBlbGFwc2VkKTtcclxuICAgIHRhcmdldC54ID0gcmVzLng7XHJcbiAgICB0YXJnZXQueSA9IHJlcy55O1xyXG4gICAgdGFyZ2V0LnZlbG9jaXR5ID0gcmVzLnZlbG9jaXR5O1xyXG4gICAgdGFyZ2V0LmFuZ2xlID0gcmVzLmFuZ2xlO1xyXG4gIH0sXHJcbiAgYXBwbHlUZW1wOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkKSB7XHJcbiAgICB2YXIgcmVzID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQudmVsb2NpdHkgPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHRocm93IEVycm9yKCdUYXJnZXQgdmVsb2NpdHkgaXMgdW5kZWZpbmVkIGZvciAnLCB0YXJnZXQpO1xyXG4gICAgXHJcbiAgICB2YXIgdiA9IHRhcmdldC52ZWxvY2l0eTtcclxuICAgIFxyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZXInKSlcclxuICAgICAgdiA9IHRhcmdldC52ZWxvY2l0eSArICh0YXJnZXQuYWNjZWxlcmF0ZXIgKiBlbGFwc2VkKTtcclxuXHJcbiAgICByZXMudmVsb2NpdHkgPSB2ID4gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01BWCA/IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NQVggOiAodiA8IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NSU4gPyB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUlOIDogdik7XHJcblxyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYmFuaycpKVxyXG4gICAgICByZXMuYW5nbGUgPSB0YXJnZXQuYW5nbGUgKyAodGFyZ2V0LmJhbmsgKiBlbGFwc2VkKTtcclxuICAgIGVsc2VcclxuICAgICAgcmVzLmFuZ2xlID0gdGFyZ2V0LmFuZ2xlO1xyXG5cclxuICAgIHJlcy54ID0gdGFyZ2V0LnggKyBNYXRoLmNvcyhyZXMuYW5nbGUpICogcmVzLnZlbG9jaXR5ICogZWxhcHNlZDtcclxuICAgIHJlcy55ID0gdGFyZ2V0LnkgKyBNYXRoLnNpbihyZXMuYW5nbGUpICogcmVzLnZlbG9jaXR5ICogZWxhcHNlZDtcclxuXHJcbiAgICBpZiAoaXNOYU4ocmVzLngpKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlbGFwc2VkKTtcclxuICAgICAgdGhyb3cgRXJyb3IocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzOyIsInZhciBDaGFyYWN0ZXJpc3RpY0Jhc2UgPSByZXF1aXJlKCcuL0NoYXJhY3RlcmlzdGljQmFzZScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfUmVzcGF3bnMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfUmVzcGF3bnMgPSBDaGFyYWN0ZXJpc3RpY0Jhc2UuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuX3N1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIERlZmF1bHQgNS4wIHNlY29uZCByZXNwYXduIGlmIG5vbmUgcHJvdmlkZWRcclxuICAgIHRoaXMub3B0aW9ucy5SRVNQQVdOX1RJTUUgPSB0aGlzLm9wdGlvbnMuUkVTUEFXTl9USU1FIHx8IDUwMDA7XHJcbiAgICAvLyBEZWZhdWx0IDUuMCBzZWNvbmQgcmVzcGF3biBpZiBub25lIHByb3ZpZGVkXHJcbiAgICB0aGlzLm9wdGlvbnMuUkVTUEFXTl9MT0NBVElPTiA9IHRoaXMub3B0aW9ucy5SRVNQQVdOX0xPQ0FUSU9OIHx8ICdyYW5kb20nO1xyXG4gICAgdGhpcy5vcHRpb25zLlJFU1BBV05fT1JJRU5UQVRJT04gPSB0aGlzLm9wdGlvbnMuUkVTUEFXTl9PUklFTlRBVElPTiB8fCAncmFuZG9tJztcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgLy8gUmVzcGF3bnMgYXJlIE9OTFkgcGVyZm9ybWVkIGJ5IHRoZSBzZXJ2ZXJcclxuICAgIGlmICh0eXBlb2YgaXNDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IGlzQ2xpZW50KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKHRhcmdldC5kZXN0cm95ZWQgJiYgIXRhcmdldC5yZXNwYXduaW5nKVxyXG4gICAge1xyXG4gICAgICBzZXRUaW1lb3V0KHRoaXMucmVzcGF3bkhhbmRsZXIuYmluZCh0aGlzLCB0YXJnZXQpLCB0aGlzLm9wdGlvbnMuUkVTUEFXTl9USU1FKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlc3Bhd25IYW5kbGVyOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICB0YXJnZXQucmVzcGF3bigpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19SZXNwYXduczsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY0Jhc2UnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nID0gQ2hhcmFjdGVyaXN0aWNCYXNlLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB0YXJnZXQueCA9IHRhcmdldC54IDwgMCA/IHRoaXMub3B0aW9ucy53aWR0aCA6IHRhcmdldC54O1xyXG4gICAgdGFyZ2V0LnggPSB0YXJnZXQueCA+IHRoaXMub3B0aW9ucy53aWR0aCA/IHRhcmdldC54ICUgdGhpcy5vcHRpb25zLndpZHRoIDogdGFyZ2V0Lng7XHJcbiAgICB0YXJnZXQueSA9IHRhcmdldC55IDwgMCA/IHRoaXMub3B0aW9ucy5oZWlnaHQgOiB0YXJnZXQueTtcclxuICAgIHRhcmdldC55ID0gdGFyZ2V0LnkgPiB0aGlzLm9wdGlvbnMuaGVpZ2h0ID8gdGFyZ2V0LnkgJSB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGFyZ2V0Lnk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nOyIsInZhciBDaGFyYWN0ZXJpc3RpY0Jhc2UgPSByZXF1aXJlKCcuL0NoYXJhY3RlcmlzdGljQmFzZScpLFxyXG4gIEJ1bGxldCA9IHJlcXVpcmUoJy4uL2dhbWVPYmplY3RzL0J1bGxldCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzID0gQ2hhcmFjdGVyaXN0aWNCYXNlLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgbmV4dEJ1bGxldFRpbWU6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0Tm93OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogQ29uc3RydWN0b3JcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICB0aGlzLl9zdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMuZmlyZVJhdGUgPSBvcHRpb25zLmZpcmVSYXRlIHx8IDUwLjA7XHJcbiAgICB0aGlzLm9wdGlvbnMuZmlyZVZlbG9jaXR5ID0gb3B0aW9ucy5maXJlVmVsb2NpdHkgfHwgNzAwLjA7XHJcbiAgICAvLyBCdWxsZXRzIG5lZWQgdG8gc3RhcnQgJ2FoZWFkJyBvZiB0ZWggb2JqZWN0IGZpcmluZyB0aGVtIGEgbGl0dGxlLlxyXG4gICAgdGhpcy5vcHRpb25zLm9mZnNldCA9IG9wdGlvbnMub2Zmc2V0IHx8IDMwO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGZpcmU6IGZ1bmN0aW9uICh0YXJnZXQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSlcclxuICB7XHJcbiAgICBpZiAodGFyZ2V0LmFtbW8gPD0gMClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0YXJnZXQsIHVuZGVmaW5lZCwgeCArIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy5vZmZzZXQsIHkgKyBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLm9wdGlvbnMub2Zmc2V0LCBhbmdsZSwgdmVsb2NpdHkpO1xyXG4gICAgdGFyZ2V0LmdldENoaWxkcmVuKCkuYWRkKGJ1bGxldCk7XHJcbiAgICB0YXJnZXQuYW1tby0tO1xyXG4gICAgdGhpcy5uZXh0QnVsbGV0VGltZSA9IHRoaXMuZ2V0Tm93KCkgKyB0aGlzLm9wdGlvbnMuZmlyZVJhdGU7XHJcbiAgfSxcclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgaWYgKCF0aGlzLm5leHRCdWxsZXRUaW1lKVxyXG4gICAgICB0aGlzLm5leHRCdWxsZXRUaW1lID0gdGhpcy5nZXROb3coKSArIHRoaXMub3B0aW9ucy5maXJlUmF0ZTtcclxuXHJcbiAgICBpZiAodGFyZ2V0LnRyaWdnZXJEb3duKVxyXG4gICAge1xyXG4gICAgICB2YXIgdCA9IHRoaXMubmV4dEJ1bGxldFRpbWUgKyB0aGlzLm9wdGlvbnMuZmlyZVJhdGU7XHJcbiAgICAgIFxyXG4gICAgICB3aGlsZSAodGhpcy5nZXROb3coKSA+IHRoaXMubmV4dEJ1bGxldFRpbWUpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmZpcmUodGFyZ2V0LCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGhpcy5vcHRpb25zLmZpcmVWZWxvY2l0eSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0czsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY0Jhc2UnKSxcclxuICBTbW9rZSA9IHJlcXVpcmUoJy4uL2dhbWVPYmplY3RzL1Ntb2tlJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19TbW9rZXMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU21va2VzID0gQ2hhcmFjdGVyaXN0aWNCYXNlLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB0aGlzLmF0dGVtcHRTbW9rZURyb3AodGFyZ2V0LCBlbGFwc2VkKTtcclxuICB9LFxyXG4gIGF0dGVtcHRTbW9rZURyb3A6IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQpIHtcclxuICAgIHZhciBzZWxmPSB0aGlzO1xyXG4gICAgLy8gU21va2UgZHJvcHMgYXJlIE9OTFkgcGVyZm9ybWVkIGJ5IHRoZSBzZXJ2ZXJcclxuICAgIGlmICh0eXBlb2YgaXNDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IGlzQ2xpZW50KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKChpc05hTih0aGlzLm9wdGlvbnMuU01PS0VfU1RBUlRfSEVBTFRIKSB8fCB0YXJnZXQuaGVhbHRoIDwgdGhpcy5vcHRpb25zLlNNT0tFX1NUQVJUX0hFQUxUSCkgJiYgdGFyZ2V0LnNtb2tlcyA8IHRoaXMub3B0aW9ucy5TTU9LRV9NQVgpXHJcbiAgICB7XHJcbiAgICAgIHZhciBjb21wYXJlID0gaXNOYU4odGhpcy5vcHRpb25zLlNNT0tFX1NUQVJUX0hFQUxUSCkgPyAxLjAgOiB0YXJnZXQuaGVhbHRoLFxyXG4gICAgICAgIHNtb2tlRHJvcCA9IChNYXRoLnJhbmRvbSgpICogY29tcGFyZSkgPCB0aGlzLm9wdGlvbnMuU01PS0VfVEhSRVNIT0xEO1xyXG5cclxuICAgICAgaWYgKHNtb2tlRHJvcClcclxuICAgICAge1xyXG4gICAgICAgIHZhciBzbW9rZSA9IG5ldyBTbW9rZSh0YXJnZXQsICdzbW9rZScgKyB0YXJnZXQucmFuZG9tSWQoKSwgdGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQuYW5nbGUsIHRoaXMuc21va2VGYWRlSGFuZGxlci5iaW5kKHRoaXMsIHRhcmdldCkpO1xyXG4gICAgICAgIHRhcmdldC5zbW9rZXMrKztcclxuICAgICAgICB0YXJnZXQud29ybGQuZ2V0Q2hpbGRyZW4oKS5hZGQoc21va2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzbW9rZUZhZGVIYW5kbGVyOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICB0YXJnZXQuc21va2VzLS07XHJcbiAgfVxyXG59KVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfU21va2VzOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogQmlyZCgpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudmFyIEJpcmQgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBQcm9wZXJ0aWVzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIGJhbms6IHRoaXMuYmFuayxcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMsXG4gICAgICBoZWFsdGg6IHRoaXMuaGVhbHRoLFxuICAgIH07XG4gIH0sXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLl9pZClcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcignVGhlIGJpcmRcXCdzIGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gdmFsdWUueDtcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcbiAgICB0aGlzLnNjYWxlID0gdmFsdWUuc2NhbGU7XG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcbiAgICB0aGlzLnJhZGl1cyA9IHZhbHVlLnJhZGl1cztcbiAgICB0aGlzLmhlYWx0aCA9IHZhbHVlLmhlYWx0aDtcbiAgfSxcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIE1ldGhvZHNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkKSB7XG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xuXG4gICAgdGhpcy50eXBlID0gJ2JpcmQnO1xuXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuYmFuayA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAzO1xuXG4gICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMud29ybGQud2lkdGg7XG4gICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMud29ybGQuaGVpZ2h0O1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdGhpcy5iYW5rID0gdGhpcy5yYW5kb21pemVkQmFuaygpO1xuICAgIHRoaXMudmVsb2NpdHkgPSAyNSArIE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICB0aGlzLnNjYWxlID0gKE1hdGgucmFuZG9tKCkgKiAwLjQpICsgMC4xO1xuXG4gICAgdGhpcy5oZWFsdGggPSAxMDA7XG5cbiAgICB0aGlzLkdMT0JBTFMgPSB7XG4gICAgICBWRUxPQ0lUWV9NQVg6IEJpcmQudmVsb2NpdHksXG4gICAgICBWRUxPQ0lUWV9NSU46IEJpcmQudmVsb2NpdHksXG4gICAgfTtcblxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcnKSkodGhpcy53b3JsZCkpO1xuICAgIC8vdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXMnKSkodGhpcy53b3JsZCkpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgdGhpcy5fc3VwZXIoZWxhcHNlZCk7XG4gICAgXG4gICAgLy8gVE9ETzogZW5jYXBzdWxhdGUgYmlyZCBBSVxuICAgIFxuICAgIC8vIGJpcmRzIGhhdmUgYSAxLzIwMCBjaGFuY2Ugb2YgY2hhbmdpbmcgdGhlIGJhbmsgZXZlcnkgZnJhbWVcbiAgICBpZihNYXRoLnJhbmRvbSgpIDwgMC4wMDUpXG4gICAgICB0aGlzLmJhbmsgPSB0aGlzLnJhbmRvbWl6ZWRCYW5rKCk7XG4gIH0sXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLmJpcmQoMCwgMCk7XG4gIH0sXG4gIHJhbmRvbWl6ZWRCYW5rOiBmdW5jdGlvbigpIHtcbiAgICAvLyB2YWx1ZSBpbiB0aGUgcmFuZ2UgWy0xLjAsIDEuMF0gXG4gICAgdmFyIGJhbmtGYWN0b3IgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyLjA7XG4gICAgLy8gdGhlIG1heGltdW0gYmFuayBhbmdsZSBcbiAgICB2YXIgYmFua01hZ25pdHVkZSA9IE1hdGguUEkgLyAyLjA7XG4gICAgLy8gc2NhbGUgdGhlIG1hZ25pdHVkZSBieSB0aGUgcmFuZG9taXplZCBmYWN0b3JcbiAgICByZXR1cm4gYmFua0ZhY3RvciAqIGJhbmtNYWduaXR1ZGU7IFxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcbiAgfVxufSk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IEJpcmQ7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCdWxsZXQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQnVsbGV0ID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcclxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXHJcbiAgICAgIHJhZGl1czogdGhpcy5yYWRpdXNcclxuICAgIH07XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGUgYnVsbGV0IGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ID0gdmFsdWUueDtcclxuICAgIHRoaXMueSA9IHZhbHVlLnk7XHJcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHZhbHVlLnJhZGl1cztcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCwgeCwgeSwgYW5nbGUsIHZlbG9jaXR5KSB7XHJcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XHJcblxyXG4gICAgdGhpcy5HTE9CQUxTID0ge1xyXG4gICAgICBWRUxPQ0lUWV9NQVg6IDEwMDAwMCxcclxuICAgICAgVkVMT0NJVFlfTUlOOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDI7XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ2J1bGxldCc7XHJcblxyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMnKSkoe2NhbGxiYWNrOiB0aGlzLmNvbGxpZGVIYW5kbGVyLmJpbmQodGhpcyl9KSk7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbicpKSh0aGlzLndvcmxkKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFwcGx5QWxsKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5idWxsZXQoMCwgMCk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gIH0sXHJcbiAgY29sbGlkZUhhbmRsZXI6IGZ1bmN0aW9uICh0YXJnZXQsIGRpc3RhbmNlKSB7XHJcbiAgICBpZiAodGFyZ2V0LmhpdClcclxuICAgICAgdGFyZ2V0LmhpdCh0aGlzLCBkaXN0YW5jZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IEJ1bGxldDsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFBsYW5lUGFydCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBQbGFuZVBhcnQgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG4gICAgICB0aW1lU3RhcnQgOiB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcclxuICAgICAgYmFuazogdGhpcy5iYW5rLFxyXG4gICAgICBzbW9rZXM6IHRoaXMuc21va2VzLFxyXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcclxuICAgICAgaW5kZXg6IHRoaXMuaW5kZXhcclxuICAgIH07XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGUgUGxhbmVQYXJ0IGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ID0gdmFsdWUueDtcclxuICAgIHRoaXMueSA9IHZhbHVlLnk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gdmFsdWUuZHVyYXRpb247XHJcbiAgICB0aGlzLnRpbWVTdGFydCA9IHZhbHVlLnRpbWVTdGFydDtcclxuICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XHJcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XHJcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xyXG4gICAgdGhpcy5zbW9rZXMgPSB2YWx1ZS5zbW9rZXM7XHJcbiAgICB0aGlzLmluZGV4ID0gdmFsdWUuaW5kZXg7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSwgaW5kZXgpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcclxuXHJcbiAgICB0aGlzLkdMT0JBTFMgPSB7XHJcbiAgICAgIFZFTE9DSVRZX01BWDogNjAwLFxyXG4gICAgICBWRUxPQ0lUWV9NSU46IDAsXHJcbiAgICAgIFNNT0tFX01BWDogNSxcclxuICAgICAgU01PS0VfU1RBUlRfSEVBTFRIOiBOYU4sXHJcbiAgICAgIFNNT0tFX1RIUkVTSE9MRDogM1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRpbWVTdGFydCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gKE1hdGgucmFuZG9tKCkgKiAzLjAgKyAxLjApICogMTAwMC4wO1xyXG4gICAgdGhpcy5iYW5rID0gLTAuMyArIChNYXRoLnJhbmRvbSgpICogMC42KTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIHRoaXMuYWNjZWxlcmF0ZXIgPSAtNzAgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICB0aGlzLnNtb2tlcyA9IDA7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XHJcblxyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ3BsYW5lcGFydCc7XHJcblxyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Ntb2tlcycpKSh0aGlzLkdMT0JBTFMpKTtcclxuICB9LFxyXG4gIHVwZGF0ZTpmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdGhpcy5fc3VwZXIoZWxhcHNlZCk7XHJcblxyXG4gICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQgKiBlbGFwc2VkO1xyXG5cclxuICAgIHZhciBlbGFwc2VkID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRoaXMudGltZVN0YXJ0LFxyXG4gICAgICByYXRpbyA9IDEuMCAtIChlbGFwc2VkIC8gdGhpcy5kdXJhdGlvbik7XHJcblxyXG4gICAgaWYgKHJhdGlvIDwgMC4xKVxyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5fc3VwZXIocGhhc2VyKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLnBsYW5lUGFydCh0aGlzLngsIHRoaXMueSwgdGhpcy5pbmRleCk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaylcclxuICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhbmVQYXJ0OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBSZXF1aXJlbWVudHNcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKSxcbiAgQnVsbGV0ID0gcmVxdWlyZSgnLi9CdWxsZXQnKSxcbiAgU21va2UgPSByZXF1aXJlKCcuL1Ntb2tlJyksXG4gIHBsYXllckNvdW50ID0gMDtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFBsYXllcigpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudmFyIFBsYXllciA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFByb3BlcnRpZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxuICAgICAgcmV0dXJuIHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXG4gICAgICBhY2NlbGVyYXRlcjogdGhpcy5hY2NlbGVyYXRlcixcbiAgICAgIHR1cm46IHRoaXMudHVybixcbiAgICAgIGFjY2VsOiB0aGlzLmFjY2VsLFxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXG4gICAgICBoZWFsdGg6IHRoaXMuaGVhbHRoLFxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICBhbW1vOiB0aGlzLmFtbW8sXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgc21va2VzOiB0aGlzLnNtb2tlcyxcbiAgICAgIGRlc3Ryb3llZDogdGhpcy5kZXN0cm95ZWQsXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlblN0YXRlKCksXG4gICAgICBraWxsczogdGhpcy5raWxscyxcbiAgICAgIGRlYXRoczogdGhpcy5kZWF0aHNcbiAgICB9O1xuICB9LFxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGUgcGxhbmUgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnVpZCA9IHZhbHVlLnVpZDtcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xuICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xuICAgIHRoaXMuaGVhbHRoID0gdmFsdWUuaGVhbHRoO1xuICAgIHRoaXMuYWNjZWxlcmF0ZXIgPSB2YWx1ZS5hY2NlbGVyYXRlcjtcbiAgICB0aGlzLmFtbW8gPSB2YWx1ZS5hbW1vO1xuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xuICAgIHRoaXMuc21va2VzID0gdmFsdWUuc21va2VzO1xuICAgIGlmICh2YWx1ZS5kZXN0cm95ZWQgJiYgIXRoaXMuZGVzdHJveWVkKVxuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB2YWx1ZS5kZXN0cm95ZWQ7XG4gICAgdGhpcy5raWxscyA9IHZhbHVlLmtpbGxzO1xuICAgIHRoaXMuZGVhdGhzID0gdmFsdWUuZGVhdGhzO1xuXG4gICAgdGhpcy5zZXRDaGlsZHJlblN0YXRlKHZhbHVlLmNoaWxkcmVuKTtcbiAgfSxcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIE1ldGhvZHNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGluaXQ6IGZ1bmN0aW9uKHBhcmVudCwgaWQsIHVpZCkge1xuICAgIGNvbnNvbGUubG9nKCdJbml0aW5nIHBsYXllcicsIHRoaXMudWlkKTtcblxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcblxuICAgIHRoaXMudWlkID0gdWlkO1xuXG4gICAgdGhpcy50eXBlID0gJ3BsYXllcic7XG5cbiAgICB0aGlzLkdMT0JBTFMgPSB7XG4gICAgICBWRUxPQ0lUWV9NQVg6IDMwMCxcbiAgICAgIFZFTE9DSVRZX01JTjogODAsXG4gICAgICBCQU5LX1JBVEU6IE1hdGguUEkgLyAyLFxuICAgICAgQUNDRUxFUkFUSU9OX1JBVEU6IDI1MCxcbiAgICAgIERFQ0VMRVJBVElPTl9SQVRFOiA3MCxcbiAgICAgIFNNT0tFX01BWDogMjAsXG4gICAgICBTTU9LRV9TVEFSVF9IRUFMVEg6IDYwLFxuICAgICAgU01PS0VfVEhSRVNIT0xEOiA1XG4gICAgfTtcblxuICAgIHRoaXMuYnVsbGV0UHJvcHMgPSB7XG4gICAgICBmaXJlUmF0ZTogMTAwLFxuICAgICAgZmlyZVZlbG9jaXR5OiA1MDBcbiAgICB9O1xuXG4gICAgdGhpcy54ID0gNDAwO1xuICAgIHRoaXMueSA9IDQwMDtcbiAgICB0aGlzLmJhbmsgPSAwO1xuICAgIHRoaXMua2lsbHMgPSAwO1xuICAgIHRoaXMuZGVhdGhzID0gMDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gMDtcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICB0aGlzLmFtbW8gPSAxMDAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLkdMT0JBTFMuVkVMT0NJVFlfTUlOO1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdGhpcy5yYWRpdXMgPSAxNTtcblxuICAgIHRoaXMuc21va2VzID0gMDtcblxuICAgIHRoaXMudHJpZ2dlckRvd24gPSBmYWxzZTtcblxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TbW9rZXMnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZycpKSh0aGlzLndvcmxkKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cycpKSh0aGlzLmJ1bGxldFByb3BzKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXMnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUmVzcGF3bnMnKSkodGhpcy5HTE9CQUxTKSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcblxuICAgIHRoaXMuYnVsbGV0UHJvcHMuZmlyZVZlbG9jaXR5ID0gNTAwLjAgKyB0aGlzLnZlbG9jaXR5O1xuICB9LFxuICByZXNwYXduOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ1Jlc3Bhd25pbmcgcGxheWVyJywgdGhpcy51aWQpO1xuXG4gICAgdGhpcy54ID0gNDAwO1xuICAgIHRoaXMueSA9IDQwMDtcbiAgICB0aGlzLmJhbmsgPSAwO1xuICAgIHRoaXMuYWNjZWxlcmF0ZXIgPSAwO1xuICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgIHRoaXMuYW1tbyA9IDEwMDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMuR0xPQkFMUy5WRUxPQ0lUWV9NSU47XG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB0aGlzLnJhZGl1cyA9IDE1O1xuXG4gICAgdGhpcy5zbW9rZXMgPSAwO1xuXG4gICAgdGhpcy5leHBsb2RlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLndvcmxkLmdldENoaWxkcmVuKCkuYWRkKHRoaXMpO1xuICB9LFxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLl9zdXBlcihwaGFzZXIpO1xuXG4gICAgdGhpcy5zcHJpdGUuZGlzcGxheVN0YXR1c1JpbmcodGhpcy51aWQgPT0gd2luZG93LmNsaWVudC51aWQsIHRoaXMuaGVhbHRoKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQucGxhbmUoMCwgMCk7XG4gIH0sXG4gIG5ld0NoaWxkRnJvbVN0YXRlOiBmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xuICAgIHZhciBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMsIGNoaWxkU3RhdGUuaWQpO1xuICAgIGJ1bGxldC5zZXRTdGF0ZShjaGlsZFN0YXRlKTtcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWRkKGJ1bGxldCk7XG4gICAgcmV0dXJuIGJ1bGxldDtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc3VwZXIoKTtcblxuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgY29uc29sZS5sb2coJ0Rlc3Ryb3lpbmcgcGxhbmUgc3ByaXRlJywgdGhpcy51aWQpO1xuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGhpdDogZnVuY3Rpb24gKHByb2plY3RpbGUsIGRpc3RhbmNlKSB7XG4gICAgaWYgKHByb2plY3RpbGUuZ2V0UGFyZW50KCkgPT0gdGhpcylcbiAgICAgIHJldHVybjtcbiAgICBcbiAgICB0aGlzLmhlYWx0aCAtPSAxICogKHByb2plY3RpbGUudmVsb2NpdHkgLyAxMDAwLjApICogTWF0aC5tYXgoMTUgLSBkaXN0YW5jZSwgMSk7XG4gICAgdGhpcy5oZWFsdGggPSB0aGlzLmhlYWx0aCA8IDAgPyAwIDogdGhpcy5oZWFsdGg7XG5cbiAgICBpZiAocHJvamVjdGlsZS5nZXRQYXJlbnQoKS50eXBlID09ICdwbGF5ZXInICYmIHRoaXMuaGVhbHRoIDw9IDAgJiYgIXRoaXMuZGVzdHJveWVkKVxuICAgIHtcbiAgICAgIHByb2plY3RpbGUuZ2V0UGFyZW50KCkua2lsbHMrKztcbiAgICAgIHRoaXMuZGVhdGhzKys7XG4gICAgfVxuICB9XG59KTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU21va2UoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU21va2UgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG4gICAgICB0aW1lU3RhcnQgOiB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcclxuICAgICAgYmFuazogdGhpcy5iYW5rLFxyXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eVxyXG4gICAgfTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBTbW9rZSBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCA9IHZhbHVlLng7XHJcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IHZhbHVlLmR1cmF0aW9uO1xyXG4gICAgdGhpcy50aW1lU3RhcnQgPSB2YWx1ZS50aW1lU3RhcnQ7XHJcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xyXG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xyXG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCwgeCwgeSwgYW5nbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XHJcblxyXG4gICAgdGhpcy5HTE9CQUxTID0ge1xyXG4gICAgICBWRUxPQ0lUWV9NQVg6IDYwMCxcclxuICAgICAgVkVMT0NJVFlfTUlOOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGltZVN0YXJ0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSAoTWF0aC5yYW5kb20oKSAqIDIuMCArIDEuMCkgKiAxMDAwLjA7XHJcbiAgICB0aGlzLmJhbmsgPSAtMSArIChNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcclxuICAgIHRoaXMuYWNjZWxlcmF0b3IgPSAwO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ3Ntb2tlJztcclxuXHJcbiAgICAvL3RoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6ZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xyXG5cclxuICAgIHZhciBlbGFwc2VkID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRoaXMudGltZVN0YXJ0LFxyXG4gICAgICByYXRpbyA9IDEuMCAtIChlbGFwc2VkIC8gdGhpcy5kdXJhdGlvbik7XHJcblxyXG4gICAgaWYgKHJhdGlvIDwgMC4xKVxyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5fc3VwZXIocGhhc2VyKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNldExpZmUocmF0aW8pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLnNtb2tlKHRoaXMueCwgdGhpcy55KTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKVxyXG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcblxyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLnNwcml0ZSlcclxuICAgIHtcclxuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcclxuICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBTbW9rZTsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKSxcclxuICBCaXJkID0gcmVxdWlyZSgnLi9CaXJkJyksXHJcbiAgU21va2UgPSByZXF1aXJlKCcuL1Ntb2tlJyksXHJcbiAgUGxheWVyID0gcmVxdWlyZSgnLi9QbGF5ZXInKSxcclxuICBQbGFuZVBhcnQgPSByZXF1aXJlKCcuL1BsYW5lUGFydCcpLFxyXG4gIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4uL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJpcmQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgV29ybGQgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHNldFN0YXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSlcclxuICAgICAgaWYgKGtleSAhPSAnY2hpbGRyZW4nKVxyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlW2tleV07XHJcblxyXG4gICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpKVxyXG4gICAgICB0aGlzLnNldENoaWxkcmVuU3RhdGUodmFsdWUuY2hpbGRyZW4pO1xyXG4gIH0sXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aWxlV2lkdGg6IHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICB0aWxlSGVpZ2h0OiB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgIHRpbGVzOiB0aGlzLnRpbGVzLFxyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuU3RhdGUoKVxyXG4gICAgfTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnV29ybGQgaW5pdCEnKTtcclxuICAgIHRoaXMudHlwZSA9ICd3b3JsZCc7XHJcbiAgICB0aGlzLnBsYXllcnMgPSBuZXcgSGFzaEFycmF5KFsnX2lkJywgJ3VpZCcsICd0eXBlJ10pO1xyXG4gICAgdGhpcy5fc3VwZXIobnVsbCwgJ3Jvb3QnKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIGlmICghZWxhcHNlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICAgXHJcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcclxuICB9LFxyXG4gIGJ1aWxkQ2hpbGRyZW5PYmplY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0Q2hpbGRyZW4obmV3IEhhc2hBcnJheShbJ19pZCcsICd1aWQnLCAndHlwZSddKSk7XHJcbiAgfSxcclxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgIHZhciBjaGlsZDtcclxuXHJcbiAgICBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdiaXJkJylcclxuICAgICAgY2hpbGQgPSBuZXcgQmlyZCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGVsc2UgaWYgKGNoaWxkU3RhdGUudHlwZSA9PSAncGxheWVyJylcclxuICAgIHtcclxuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIG1heWJlIHdlIGFscmVhZHkgaGF2ZSB0aGlzIGNoaWxkIGFuZCBpdCBpcyBiZWluZyByZXNwYXduZWQuXHJcbiAgICAgIGlmICh0aGlzLnBsYXllcnMuZ2V0KGNoaWxkU3RhdGUuaWQpKVxyXG4gICAgICAgIGNoaWxkID0gdGhpcy5wbGF5ZXJzLmdldChjaGlsZFN0YXRlLmlkKTtcclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgY2hpbGQgPSBuZXcgUGxheWVyKHRoaXMsIGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVycy5hZGQoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3Ntb2tlJylcclxuICAgICAgY2hpbGQgPSBuZXcgU21va2UodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3BsYW5lcGFydCcpXHJcbiAgICAgIGNoaWxkID0gbmV3IFBsYW5lUGFydCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coY2hpbGRTdGF0ZSk7XHJcbiAgICAgIHRocm93IEVycm9yKCdDYW5ub3QgZmlndXJlIG91dCB3aGF0IHRoZSBoZWxsIGEgXFwnJyArIGNoaWxkU3RhdGUudHlwZSArICdcXCcgaXMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH0sXHJcbiAgZGVzdHJveUNoaWxkQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICB0aGlzLl9zdXBlcihpZCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmxkOyIsInZhciBIYXNoQXJyYXkgPSBmdW5jdGlvbihrZXlGaWVsZHMsIGNhbGxiYWNrKSB7XG4gIHRoaXMuX21hcCA9IHt9O1xuICB0aGlzLl9saXN0ID0gW107XG4gIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICB0aGlzLmtleUZpZWxkcyA9IGtleUZpZWxkcztcblxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ2FsbCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0O1xuICB9KTtcblxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ21hcCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH0pO1xuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCdjb25zdHJ1Y3QnKTtcbiAgfVxufTtcblxuSGFzaEFycmF5LnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICBrZXkgPSB0aGlzLmtleUZpZWxkc1trZXldO1xuICAgICAgICB2YXIgaW5zdCA9IHRoaXMuZmluZChvYmosIGtleSk7XG4gICAgICAgIGlmIChpbnN0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuX21hcFtpbnN0XSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hcFtpbnN0XS5pbmRleE9mKG9iaikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gQ2Fubm90IGFkZCB0aGUgc2FtZSBpdGVtIHR3aWNlXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX21hcFtpbnN0XS5wdXNoKG9iaik7XG4gICAgICAgICAgfSBlbHNlIHRoaXMuX21hcFtpbnN0XSA9IFtvYmpdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3QucHVzaChvYmopO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygnYWRkJywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7XG4gICAgfVxuICB9LFxuICBhZGRNYXA6IGZ1bmN0aW9uKGtleSwgb2JqKSB7XG4gICAgdGhpcy5fbWFwW2tleV0gPSBvYmo7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ2FkZE1hcCcsIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIG9iajogb2JqXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuICghKHRoaXMuX21hcFtrZXldIGluc3RhbmNlb2YgQXJyYXkpIHx8IHRoaXMuX21hcFtrZXldLmxlbmd0aCAhPSAxKSA/IHRoaXMuX21hcFtrZXldIDogdGhpcy5fbWFwW2tleV1bMF07XG4gIH0sXG4gIGdldEFsbDogZnVuY3Rpb24oa2V5cykge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4ga2V5cylcbiAgICAgIHJlcyA9IHJlcy5jb25jYXQodGhpcy5nZXRBc0FycmF5KGtleXNba2V5XSkpO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfSxcbiAgZ2V0QXNBcnJheTogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFtrZXldIHx8IFtdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXAuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgfSxcbiAgaGFzTXVsdGlwbGU6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBba2V5XSBpbnN0YW5jZW9mIEFycmF5O1xuICB9LFxuICByZW1vdmVCeUtleTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuX21hcFtrZXldLmNvbmNhdCgpO1xuICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgIHJlbW92ZWQgPSByZW1vdmVkLmNvbmNhdChpdGVtcyk7XG4gICAgICAgIGZvciAodmFyIGogaW4gaXRlbXMpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2pdO1xuICAgICAgICAgIGZvciAodmFyIGl4IGluIHRoaXMua2V5RmllbGRzKSB7XG4gICAgICAgICAgICB2YXIga2V5MiA9IHRoaXMuZmluZChpdGVtLCB0aGlzLmtleUZpZWxkc1tpeF0pO1xuICAgICAgICAgICAgaWYgKGtleTIgJiYgdGhpcy5fbWFwW2tleTJdKSB7XG4gICAgICAgICAgICAgIHZhciBpeCA9IHRoaXMuX21hcFtrZXkyXS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgICBpZiAoaXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBba2V5Ml0uc3BsaWNlKGl4LCAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9tYXBba2V5Ml0ubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXkyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9saXN0LnNwbGljZSh0aGlzLl9saXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fbWFwW2tleV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZUJ5S2V5JywgcmVtb3ZlZCk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGl4IGluIHRoaXMua2V5RmllbGRzKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmZpbmQoaXRlbSwgdGhpcy5rZXlGaWVsZHNbaXhdKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIHZhciBpeCA9IHRoaXMuX21hcFtrZXldLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgaWYgKGl4ICE9IC0xKVxuICAgICAgICAgICAgdGhpcy5fbWFwW2tleV0uc3BsaWNlKGl4LCAxKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9tYXBba2V5XS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0LnNwbGljZSh0aGlzLl9saXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmUnLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlQWxsOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2xkID0gdGhpcy5fbGlzdC5jb25jYXQoKTtcbiAgICB0aGlzLl9tYXAgPSB7fTtcbiAgICB0aGlzLl9saXN0ID0gW107XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlJywgb2xkKTtcbiAgICB9XG4gIH0sXG4gIGZpbmQ6IGZ1bmN0aW9uKG9iaiwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvYmpbcGF0aF07XG4gICAgfVxuXG4gICAgdmFyIGR1cCA9IHBhdGguY29uY2F0KCk7XG4gICAgLy8gZWxzZSBhc3N1bWUgYXJyYXkuXG4gICAgd2hpbGUgKGR1cC5sZW5ndGggJiYgb2JqKSB7XG4gICAgICBvYmogPSBvYmpbZHVwLnNoaWZ0KCldO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGNsb25lOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciBuID0gbmV3IEhhc2hBcnJheSh0aGlzLmtleUZpZWxkcy5jb25jYXQoKSwgY2FsbGJhY2sgPyBjYWxsYmFjayA6IHRoaXMuY2FsbGJhY2spO1xuICAgIG4uYWRkLmFwcGx5KG4sIHRoaXMuYWxsLmNvbmNhdCgpKTtcbiAgICByZXR1cm4gbjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoQXJyYXk7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQmlyZFNwcml0ZSgpIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBCaXJkU3ByaXRlKGdhbWUsIHgsIHkpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgXHJcbiAgLy8gYWRkIHRoZSBiaXJkU3ByaXRlIFxyXG4gIHRoaXMuYmlyZFNwcml0ZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2JpcmQnKTtcclxuICAgXHJcbiAgLy8geW91IGNhbid0IHNldCB0aGUgYW5jaG9yIHBvaW50IG9mIGEgZ3JvdXAsIHNvIGZvciB4ICYgeSB0byBjb3JyZXNwb25kXHJcbiAgLy8gdG8gdGhlIEJpcmRTcHJpdGUncyBjZW50ZXIgd2UgaGF2ZSB0byBvZmZzZXQgaXQgbWFudWFsbHlcclxuICB0aGlzLmJpcmRTcHJpdGUueCA9IC10aGlzLmJpcmRTcHJpdGUud2lkdGggIC8gMi4wO1xyXG4gIHRoaXMuYmlyZFNwcml0ZS55ID0gLXRoaXMuYmlyZFNwcml0ZS5oZWlnaHQgLyAyLjA7XHJcbn07XHJcblxyXG5CaXJkU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcbkJpcmRTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmlyZFNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQmlyZFNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbiAgdGhpcy5hbmdsZSA9IG1vZGVsLmFuZ2xlICogNTcuMjk1Nzc5NTtcclxuICB0aGlzLnNjYWxlLnggPSB0aGlzLnNjYWxlLnkgPSBtb2RlbC5zY2FsZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLmJpcmQgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgQmlyZFNwcml0ZSh0aGlzLmdhbWUsIHgsIHkpKTtcclxufTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCdWxsZXRTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gQnVsbGV0U3ByaXRlKGdhbWUsIHgsIHkpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgXHJcbiAgLy8gYWRkIHRoZSBCdWxsZXRTcHJpdGUgXHJcbiAgdGhpcy5CdWxsZXRTcHJpdGUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdidWxsZXQnKTtcclxufTtcclxuXHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnVsbGV0U3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuYnVsbGV0ID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IEJ1bGxldFNwcml0ZSh0aGlzLmdhbWUsIHgsIHkpKTtcclxufTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQbGFuZVBhcnRTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gUGxhbmVQYXJ0U3ByaXRlKGdhbWUsIHgsIHksIGZyYW1lKSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG5cclxuICAvLyBhZGQgdGhlIFBsYW5lUGFydFNwcml0ZSBcclxuICB0aGlzLnBsYW5lUGFydFNwcml0ZSA9IHRoaXMuY3JlYXRlKDAsIDAsICdwbGFuZXBhcnRzJyk7XHJcbiAgdGhpcy5wbGFuZVBhcnRTcHJpdGUueCA9IC10aGlzLnBsYW5lUGFydFNwcml0ZS53aWR0aCAvIDIuMDtcclxuICB0aGlzLnBsYW5lUGFydFNwcml0ZS55ID0gLXRoaXMucGxhbmVQYXJ0U3ByaXRlLmhlaWdodCAvIDIuMDtcclxuICAvLzAgLSByaWdodCB3aW5nXHJcbiAgLy8xIC0gbGVmdCB3aW5nXHJcbiAgLy8yIC0gdGFpbFxyXG4gIC8vMyAtIGJvZHlcclxuICAvLzQgLSBlbmdpbmVcclxuICB0aGlzLnBsYW5lUGFydFNwcml0ZS5mcmFtZSA9IE1hdGgubWluKGZyYW1lLCA0KTtcclxufTtcclxuXHJcblBsYW5lUGFydFNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5QbGFuZVBhcnRTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGxhbmVQYXJ0U3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblBsYW5lUGFydFNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbiAgdGhpcy5hbmdsZSA9IG1vZGVsLnJvdGF0aW9uO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5wbGFuZVBhcnQgPSBmdW5jdGlvbih4LCB5LCBmcmFtZSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IFBsYW5lUGFydFNwcml0ZSh0aGlzLmdhbWUsIHgsIHksIGZyYW1lKSk7XHJcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFBsYW5lKCkgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuZnVuY3Rpb24gUGxhbmUoZ2FtZSwgeCwgeSkge1xuICBjb25zb2xlLmxvZygnTkVXIFBMQU5FIFNQUklURScpO1xuICBcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XG4gXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbiAgdGhpcy5oZWFsdGggPSAxMDA7XG4gIFxuICAvLyBhZGQgdGhlIGFpcnBsYW5lIFxuICB0aGlzLmFpcnBsYW5lICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYWlycGxhbmUnKTtcbiAgIFxuICAvLyB5b3UgY2FuJ3Qgc2V0IHRoZSBhbmNob3IgcG9pbnQgb2YgYSBncm91cCwgc28gZm9yIHggJiB5IHRvIGNvcnJlc3BvbmRcbiAgLy8gdG8gdGhlIHBsYW5lJ3MgY2VudGVyIHdlIGhhdmUgdG8gb2Zmc2V0IGl0IG1hbnVhbGx5XG4gIHRoaXMuYWlycGxhbmUueCA9IC10aGlzLmFpcnBsYW5lLndpZHRoICAvIDIuMDtcbiAgdGhpcy5haXJwbGFuZS55ID0gLXRoaXMuYWlycGxhbmUuaGVpZ2h0IC8gMi4wO1xuXG4gIC8vIGFkZCB0aGUgc3RhdHVzIHJpbmcgXG4gIHRoaXMuc3RhdHVzUmluZyA9IGdhbWUuYWRkLmdyYXBoaWNzKDAuMCwgMC4wLCB0aGlzKTtcbn07XG5cblBsYW5lLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XG5QbGFuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQbGFuZTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFB1YmxpYyBNZXRob2RzIFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuUGxhbmUucHJvdG90eXBlLmRpc3BsYXlTdGF0dXNSaW5nID0gZnVuY3Rpb24oaXNQbGF5ZXIsIGhlYWx0aCkge1xuICB2YXIgcmF0aW8gPSAoaGVhbHRoIC8gMTAwLjApO1xuXG4gIHRoaXMuc3RhdHVzUmluZy5jbGVhcigpO1xuICB0aGlzLnN0YXR1c1JpbmcubGluZVN0eWxlKDMuMCwgMHgzYmViNzIsIDEuMCAqIHJhdGlvKTtcblxuICB0aGlzLnN0YXR1c1JpbmcuYXJjKDAsIDAsIDIwLjAsIC0oTWF0aC5QSS80KSAqIHJhdGlvLCAoTWF0aC5QSSAvIDQpICogcmF0aW8gKTsgXG5cbiAgdGhpcy5zdGF0dXNSaW5nLmxpbmVTdHlsZSgxLjAsIDB4M2JlYjcyLCAwLjgpO1xuXG4gIGlmIChpc1BsYXllcilcbiAgICB0aGlzLnN0YXR1c1JpbmcuZHJhd0NpcmNsZSgwLCAwLCAyNSk7IFxufTtcblxuUGxhbmUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHRoaXMueCA9IG1vZGVsLng7XG4gIHRoaXMueSA9IG1vZGVsLnk7XG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZSAqIDU3LjI5NTc3OTU7XG5cbiAgaWYgKG1vZGVsLmJhbmsgPCAwKVxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAyO1xuICBlbHNlIGlmIChtb2RlbC5iYW5rID4gMClcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMTtcbiAgZWxzZSBcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMDtcbn07XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBGYWN0b3J5IFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5wbGFuZSA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQbGFuZSh0aGlzLmdhbWUsIHgsIHkpKTtcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU21va2VTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gU21va2VTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICB0aGlzLmFuZ2xlID0gMzYwICogTWF0aC5yYW5kb20oKTtcclxuICB0aGlzLnN0YXJ0U2NhbGUgPSBNYXRoLnJhbmRvbSgpICsgMC4zO1xyXG4gIC8vIGFkZCB0aGUgU21va2VTcHJpdGUgXHJcbiAgdGhpcy5zbW9rZVNwcml0ZSA9IHRoaXMuY3JlYXRlKDAsIDAsICdzbW9rZScpO1xyXG4gIHRoaXMuc21va2VTcHJpdGUueCA9IC10aGlzLnNtb2tlU3ByaXRlLndpZHRoIC8gMi4wO1xyXG4gIHRoaXMuc21va2VTcHJpdGUueSA9IC10aGlzLnNtb2tlU3ByaXRlLmhlaWdodCAvIDIuMDtcclxuICB0aGlzLnNtb2tlU3ByaXRlLnNjYWxlLnggPSB0aGlzLnNtb2tlU3ByaXRlLnNjYWxlLnkgPSAxLjA7XHJcbiAgdGhpcy5zbW9rZVNwcml0ZS5mcmFtZSA9IDA7XHJcbn07XHJcblxyXG5TbW9rZVNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5TbW9rZVNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTbW9rZVNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5TbW9rZVNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbn07XHJcblxyXG5TbW9rZVNwcml0ZS5wcm90b3R5cGUuc2V0TGlmZSA9IGZ1bmN0aW9uIChsaWZlKSB7XHJcbiAgaWYgKHRoaXMuc21va2VTcHJpdGUpXHJcbiAgICB0aGlzLnNtb2tlU3ByaXRlLmZyYW1lID0gTWF0aC5mbG9vcihsaWZlICogNCk7XHJcblxyXG4gIGlmIChsaWZlIDwgMClcclxuICAgICAgbGlmZSA9IDBcclxuXHJcbiAgdGhpcy5zY2FsZS54ID0gdGhpcy5zY2FsZS55ID0gMS4wOy8vIE1hdGgubWF4KCh0aGlzLnN0YXJ0U2NhbGUgKiBsaWZlKSArIDAuMiwgMS4wKTtcclxuXHJcbiAgdGhpcy5hbHBoYSA9IGxpZmUgKiAwLjg7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLnNtb2tlID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IFNtb2tlU3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSkpO1xyXG59OyIsInZhciBVc2VySW5wdXRTdGF0ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9Vc2VyU3RhdGUnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNDU3RhdGVNYW5hZ2VyKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFNDU3RhdGVNYW5hZ2VyID0gZnVuY3Rpb24oZnBzLCBnYW1lSW50ZXJmYWNlKSB7XHJcbiAgdGhpcy5nYW1lSW50ZXJmYWNlID0gZ2FtZUludGVyZmFjZTtcclxuICB0aGlzLmZyYW1lVGltZSA9IDEwMDAuMCAvIGZwcztcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5TQ1N0YXRlTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHVzZXJJbnB1dFN0YXRlczogW10sXHJcbiAgbGFzdFVwZGF0ZVRpbWVFbmQ6IHVuZGVmaW5lZCxcclxuICBlc3RTZXJ2ZXJUaW1lOiB1bmRlZmluZWQsXHJcbiAgbGFzdFNlcnZlclN0YXRlOiB1bmRlZmluZWQsXHJcbiAgaW50ZXJ2YWxJZDogdW5kZWZpbmVkLFxyXG4gIGxhdGVuY3k6IDAsXHJcbiAgbGFzdFNlbmRUb1NlcnZlclRpbWU6IDEwMDAuMCAvIDMwLjAsXHJcbiAgLyoqXHJcbiAgICogU2VuZCBhbiB1cGRhdGUgdG8gdGhlIHNlcnZlciBldmVyeSB0aGlzIHNvIG9mdGVuLlxyXG4gICAqL1xyXG4gIHNlcnZlclVwZGF0ZUludGVydmFsOiAxMCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBub3coKSB7XHJcbiAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgcGxheTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbEhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5mcmFtZVRpbWUpO1xyXG4gIH0sXHJcbiAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmludGVydmFsSWQpXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKClcclxuICB7XHJcbiAgICBpZiAodGhpcy5uZXdTZXJ2ZXJTdGF0ZSAmJiAhdGhpcy5sYXN0U2VydmVyU3RhdGUpXHJcbiAgICAgIHRoaXMubGFzdFNlcnZlclN0YXRlID0gdGhpcy5uZXdTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBBcyBsb25nIGFzIHRoZSBzZXJ2ZXIgaGFzIG5ldmVyIHNlbnQgdXMgYSBzdGF0ZSwgd2UgZG8gbm90aGluZy5cclxuICAgIGlmICghdGhpcy5sYXN0U2VydmVyU3RhdGUgfHwgdGhpcy5sYXRlbmN5ID09IDApXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIC8vIFRpbWUgdGhpcyB1cGRhdGUgc3RhcnRlZFxyXG4gICAgICB1cGRhdGVTdGFydCA9IHRoaXMubm93LFxyXG4gICAgICAvLyBUaW1lIHNpbmNlIG91ciBsYXN0IHVwZGF0ZSBlbmRlZFxyXG4gICAgICBlbGFwc2VkID0gdXBkYXRlU3RhcnQgLSB0aGlzLmxhc3RVcGRhdGVUaW1lRW5kLFxyXG4gICAgICAvLyBUaGUgc3RhdGUgb2YgYWxsIHVzZXIgaW5wdXRcclxuICAgICAgdXNlcklucHV0ID0gdGhpcy5nYW1lSW50ZXJmYWNlLnVzZXJJbnB1dDtcclxuXHJcbiAgICB0aGlzLmxhc3RVcGRhdGVUaW1lRW5kID0gdGhpcy5ub3c7XHJcblxyXG4gICAgLy8gU2V0IGxhc3Qgc2VydmVyIHN0YXRlIHRvIGVpdGhlciB0aGUgdXBkYXRlXHJcbiAgICB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSA9IHRoaXMubmV3U2VydmVyU3RhdGUgfHwgdGhpcy5sYXN0U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gVXBkYXRlIGdhbWUgaW50ZXJmYWNlIHRvIG9sZCBzZXJ2ZXIgc3RhdGVcclxuICAgIHRoaXMuZ2FtZUludGVyZmFjZS5zdGF0ZSA9IHRoaXMubGFzdFNlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIEVzdGltYXRlIHRoZSBjdXJyZW50IHNlcnZlciB0aW1lIGF0IHRoaXMgZXhhY3QgcG9pbnQgKHRoZSBzZXJ2ZXIgd2lsbCBiZSBiZWhpbmQgdXMgYnkgYSBwZXJpb2Qgb2YgdGltZSlcclxuICAgIHRoaXMuZXN0U2VydmVyVGltZSA9IE1hdGgucm91bmQodGhpcy5uZXdTZXJ2ZXJTdGF0ZSA/IHRoaXMubmV3U2VydmVyU3RhdGUudGltZSArICh0aGlzLmxhdGVuY3kgLyAyLjApIDogdGhpcy5lc3RTZXJ2ZXJUaW1lICsgZWxhcHNlZCk7XHJcblxyXG4gICAgLy8gRXN0YWJsaXNoIG91ciBzaW11bGF0aW9uIHN0YXJ0aW5nIHRpbWUuXHJcbiAgICB2YXIgdCA9IHRoaXMubGFzdFNlcnZlclN0YXRlLnRpbWUsXHJcbiAgICAgIHNpbUVsYXBzZWQgPSAwLjA7XHJcblxyXG4gICAgLy8gRmlsdGVyIG91dCBhbnkgb2xkIHVzZXIgZnJhbWUgc3RhdGVzXHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcyA9IHRoaXMudXNlcklucHV0U3RhdGVzLmZpbHRlcihmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHVzZXJJbnB1dFN0YXRlLnRpbWUgPiBzZWxmLmxhc3RTZXJ2ZXJTdGF0ZS50aW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgYWxsIGZyYW1lcyB0aGUgc2VydmVyIGhhcyBub3QgeWV0IHByb2Nlc3NlZC5cclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzLmZvckVhY2goZnVuY3Rpb24gKHVzZXJJbnB1dFN0YXRlKSB7XHJcbiAgICAgIHNpbUVsYXBzZWQgPSB1c2VySW5wdXRTdGF0ZS50aW1lIC0gdDtcclxuICAgICAgc2VsZi5nYW1lSW50ZXJmYWNlLnNpbXVsYXRlVXBkYXRlKHVzZXJJbnB1dFN0YXRlLmlucHV0LCBzaW1FbGFwc2VkKTtcclxuICAgICAgdCA9IHVzZXJJbnB1dFN0YXRlLnRpbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTYXZlIG91ciBjdXJyZW50IHN0YXRlXHJcbiAgICB2YXIgbmV3VXNlcklucHV0U3RhdGUgPSBuZXcgVXNlcklucHV0U3RhdGUodXNlcklucHV0LCB0aGlzLmVzdFNlcnZlclRpbWUpO1xyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMucHVzaChuZXdVc2VySW5wdXRTdGF0ZSk7XHJcblxyXG4gICAgLy8gRmluaXNoIHNpbWx1YXRpbmcgdGhlIHJlbWFpbmluZyBtaWxsaXNlY29uZHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgdXNlciBpbnB1dC5cclxuICAgIHRoaXMuZ2FtZUludGVyZmFjZS5zaW11bGF0ZVVwZGF0ZShuZXdVc2VySW5wdXRTdGF0ZS5pbnB1dCwgdGhpcy5lc3RTZXJ2ZXJUaW1lIC0gdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZXN0U2VydmVyVGltZSAtIHRoaXMubGFzdFNlbmRUb1NlcnZlclRpbWUgPiB0aGlzLnNlcnZlclVwZGF0ZUludGVydmFsKVxyXG4gICAge1xyXG4gICAgICAvLyBTZW5kIG91ciBzdGF0ZSB0byB0aGUgc2VydmVyXHJcbiAgICAgIHRoaXMuZ2FtZUludGVyZmFjZS51cGRhdGVTZXJ2ZXIobmV3VXNlcklucHV0U3RhdGUpO1xyXG5cclxuICAgICAgdGhpcy5sYXN0U2VuZFRvU2VydmVyVGltZSA9IHRoaXMuZXN0U2VydmVyVGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBpdCwgc28gdGhyb3cgaXQgYXdheS5cclxuICAgIHRoaXMubmV3U2VydmVyU3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGludGVydmFsSGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNDU3RhdGVNYW5hZ2VyOyIsInZhclxyXG4gIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvR2FtZU9iamVjdCcpLFxyXG4gIFdvcmxkID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1dvcmxkJyksXHJcbiAgUGxheWVyID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYXllcicpLFxyXG4gIExhdGVuY3lBbmFseXplciA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9MYXRlbmN5QW5hbHl6ZXInKSxcclxuICBTQ1N0YXRlTWFuYWdlciA9IHJlcXVpcmUoJy4vU2VydmVyQ2xpZW50U3RhdGVNYW5hZ2VyJyksXHJcbiAgVXNlcklucHV0UHJvY2Vzc29yID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3NvcicpLFxyXG4gIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHbG9iYWxzXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBGUFMgPSA2MCxcclxuICBTRVJWRVJfVElNRU9VVF9NUyA9IDEwMDAwLFxyXG4gIFBMQU5FX0dMT0JBTFMgPSBQbGF5ZXIucHJvdG90eXBlLkdMT0JBTFM7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBTa3lEdWVsQ2xpZW50KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFNreUR1ZWxDbGllbnQgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmxhdGVuY3lBbmFseXplciA9IG5ldyBMYXRlbmN5QW5hbHl6ZXIoKTtcclxuICB0aGlzLnNjU3RhdGVNYW5hZ2VyID0gbmV3IFNDU3RhdGVNYW5hZ2VyKDYwLCB0aGlzKTtcclxuICB0aGlzLnVzZXJJbnB1dFByb2Nlc3NvciA9IG5ldyBVc2VySW5wdXRQcm9jZXNzb3IoKTtcclxuXHJcbiAgdGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNreUR1ZWxDbGllbnQucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFydGVkOiBmYWxzZSxcclxuICBpbnB1dDoge30sXHJcbiAgcGxheWVyOiB1bmRlZmluZWQsXHJcbiAgZXJyb3JUZXh0OiB1bmRlZmluZWQsXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgc3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBzZXQgc3RhdGUodmFsdWUpIHtcclxuICAgIHRoaXMud29ybGQuc2V0U3RhdGUodmFsdWUud29ybGQpO1xyXG4gIH0sXHJcbiAgZ2V0IHVzZXJJbnB1dCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwOiB0aGlzLmlucHV0LnVwLmlzRG93bixcclxuICAgICAgZG93bjogdGhpcy5pbnB1dC5kb3duLmlzRG93bixcclxuICAgICAgbGVmdDogdGhpcy5pbnB1dC5sZWZ0LmlzRG93bixcclxuICAgICAgcmlnaHQ6IHRoaXMuaW5wdXQucmlnaHQuaXNEb3duLFxyXG4gICAgICB0cmlnZ2VyOiB0aGlzLmlucHV0LnRyaWdnZXIuaXNEb3duXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBsYXRlbmN5Q2hlY2s6IGZ1bmN0aW9uIChjb3VudCwgY2FsbGJhY2spIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgaSA9IDA7XHJcbiAgICAgIGNvdW50ID0gY291bnQgfHwgMTA7XHJcblxyXG4gICAgcGluZygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHBpbmcoKSB7XHJcbiAgICAgIHNlbGYubGF0ZW5jeUFuYWx5emVyLnN0YXJ0VGVzdCgpO1xyXG4gICAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci5waW5nJywgc2t5ZHVlbF9za3lkdWVsSGFuZGxlcl9waW5nSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2t5ZHVlbF9za3lkdWVsSGFuZGxlcl9waW5nSGFuZGxlcigpIHtcclxuICAgICAgc2VsZi5sYXRlbmN5QW5hbHl6ZXIuZW5kVGVzdCgpO1xyXG4gICAgICAoKytpIDwgY291bnQpID8gcGluZygpIDogY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0OiBmdW5jdGlvbiAocmlkKSB7XHJcbiAgICB0aGlzLnJpZCA9IHJpZDtcclxuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5sYXRlbmN5Q2hlY2soMTAsIHRoaXMuc3RhcnRTZXJ2ZXJDb25uZWN0aW9uLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgc3RvcDogZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgdGhpcy5lcnJvclRleHQgPSByZWFzb247XHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBhdXNlKCk7XHJcbiAgfSxcclxuICBzdGFydFNlcnZlckNvbm5lY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubGF0ZW5jeSA9IHRoaXMubGF0ZW5jeUFuYWx5emVyLmxhdGVuY3k7XHJcbiAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci5zdGFydCcsIHtcclxuICAgICAgcmlkOiB0aGlzLnJpZFxyXG4gICAgfSwgdGhpcy5zZXJ2ZXJDb25uZWN0aW9uX3N0YXJ0ZWRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgLy9TQ1N0YXRlTWFuYWdlciBJbnRlcmZhY2VcclxuICBzaW11bGF0ZVVwZGF0ZTogZnVuY3Rpb24gKHVzZXJJbnB1dCwgZWxhcHNlZCkge1xyXG4gICAgZWxhcHNlZCA9ICBlbGFwc2VkIC8gMTAwMC4wO1xyXG5cclxuICAgIGlmIChlbGFwc2VkID4gU0VSVkVSX1RJTUVPVVRfTVMpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3RvcCgnU2VydmVyIGRpc2Nvbm5lY3RlZCcpOyAgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKGVsYXBzZWQgPiAwLjIpXHJcbiAgICAgIHRocm93IEVycm9yKCdFbGFwc2VkIGlzIHdheXl5eSB0b28gaGlnaCBtYW4uIERpZCBzZXJ2ZXIgZGlzY29ubmVjdD8nKTtcclxuXHJcbiAgICB0aGlzLnVzZXJJbnB1dFByb2Nlc3Nvci51cGRhdGUodXNlcklucHV0LCBlbGFwc2VkLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLndvcmxkLnVwZGF0ZShlbGFwc2VkKTtcclxuICB9LFxyXG4gIC8vU0NTdGF0ZU1hbmFnZXIgSW50ZXJmYWNlXHJcbiAgdXBkYXRlU2VydmVyOiBmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgIHZhciBrZXkgPSAoTWF0aC5yYW5kb20oKSAqIDk5OTk5OTkpLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICB0aGlzLmxhdGVuY3lBbmFseXplci5zdGFydFRlc3Qoa2V5KTtcclxuXHJcbiAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci51c2VySW5wdXQnLFxyXG4gICAgICB0aGlzLnVzZXJJbnB1dCxcclxuICAgICAgdGhpcy5zb2NrZXRfdXBkYXRlU2VydmVyUmVzcG9uc2VIYW5kbGVyLmJpbmQodGhpcywga2V5KSk7XHJcbiAgfSxcclxuICBzZXR1cFN0YXJ0U3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbCB3b3JsZCBzdGF0ZScsIHN0YXRlLndvcmxkKTtcclxuXHJcbiAgICB0aGlzLndvcmxkLnNldFN0YXRlKHN0YXRlLndvcmxkKTtcclxuXHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMud29ybGQuZ2V0Q2hpbGRyZW4oKS5nZXQodGhpcy51aWQpO1xyXG5cclxuICAgIGlmICghdGhpcy5wbGF5ZXIpXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nIChzdGF0ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgY291bGQgbm90IGJlIGZvdW5kIGluIGluY29taW5nIHN0YXRlIScsIHRoaXMudWlkKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLm5ld1NlcnZlclN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5wbGF5KCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIEV2ZW50c1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2VydmVyQ29ubmVjdGlvbl9zdGFydGVkSGFuZGxlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHRoaXMudWlkID0gZGF0YS51aWQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1NFUlZFUiBDT05ORUNUSU9OIHN0YXJ0ZWQnLCBkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKCdXQUlUSU5HIGZvciBzZXJ2ZXIgc3RhdGUnKTtcclxuXHJcbiAgICBwb21lbG8ub24oJ3NlcnZlclN0YXRlJywgdGhpcy5zb2NrZXRfc2VydmVyU3RhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGxheSgpO1xyXG4gIH0sXHJcbiAgc29ja2V0X3NlcnZlclN0YXRlSGFuZGxlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIGlmICghdGhpcy5zY1N0YXRlTWFuYWdlci5sYXN0U2VydmVyU3RhdGUpXHJcbiAgICAgIHRoaXMuc2V0dXBTdGFydFN0YXRlKGRhdGEpO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLm5ld1NlcnZlclN0YXRlID0gZGF0YTtcclxuICAgIH1cclxuICB9LFxyXG4gIHNvY2tldF91cGRhdGVTZXJ2ZXJSZXNwb25zZUhhbmRsZXI6IGZ1bmN0aW9uIChrZXksIGRhdGEpIHtcclxuICAgIHRoaXMubGF0ZW5jeUFuYWx5emVyLmVuZFRlc3Qoa2V5KTtcclxuICB9XHJcbn07XHJcblxyXG53aW5kb3cuY2xpZW50ID0gbmV3IFNreUR1ZWxDbGllbnQoKTtcclxuIiwiLyogYW4gYWpheCBsb2cgZmlsZSB0YWlsZXIgLyB2aWV3ZXJcclxuY29weXJpZ2h0IDIwMDcgam9obiBtaW5uaWhhbi5cclxuIFxyXG5odHRwOi8vZnJlZXBvc2l0b3J5LmNvbVxyXG4gXHJcblJlbGVhc2VkIHVuZGVyIHRoZXNlIHRlcm1zXHJcbjEuIFRoaXMgc2NyaXB0LCBhc3NvY2lhdGVkIGZ1bmN0aW9ucyBhbmQgSFRNTCBjb2RlIChcInRoZSBjb2RlXCIpIG1heSBiZSB1c2VkIGJ5IHlvdSAoXCJ0aGUgcmVjaXBpZW50XCIpIGZvciBhbnkgcHVycG9zZS5cclxuMi4gVGhpcyBjb2RlIG1heSBiZSBtb2RpZmllZCBpbiBhbnkgd2F5IGRlZW1lZCB1c2VmdWwgYnkgdGhlIHJlY2lwaWVudC5cclxuMy4gVGhpcyBjb2RlIG1heSBiZSB1c2VkIGluIGRlcml2YXRpdmUgd29ya3Mgb2YgYW55IGtpbmQsIGFueXdoZXJlLCBieSB0aGUgcmVjaXBpZW50LlxyXG40LiBZb3VyIHVzZSBvZiB0aGUgY29kZSBpbmRpY2F0ZXMgeW91ciBhY2NlcHRhbmNlIG9mIHRoZXNlIHRlcm1zLlxyXG41LiBUaGlzIG5vdGljZSBtdXN0IGJlIGtlcHQgaW50YWN0IHdpdGggYW55IHVzZSBvZiB0aGUgY29kZSB0byBwcm92aWRlIGF0dHJpYnV0aW9uLlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdCgpIHtcclxuIHZhciByZXF1ZXN0ID0gbnVsbDtcclxuICB0cnkge1xyXG4gICByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgfSBjYXRjaCAodHJ5bWljcm9zb2Z0KSB7XHJcbiAgIHRyeSB7XHJcbiAgICAgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIik7XHJcbiAgIH0gY2F0Y2ggKG90aGVybWljcm9zb2Z0KSB7XHJcbiAgICAgdHJ5IHtcclxuICAgICAgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7XHJcbiAgICAgfSBjYXRjaCAoZmFpbGVkKSB7XHJcbiAgICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gaWYgKHJlcXVlc3QgPT0gbnVsbCkge1xyXG4gICBhbGVydChcIkVycm9yIGNyZWF0aW5nIHJlcXVlc3Qgb2JqZWN0IVwiKTtcclxuIH0gZWxzZSB7XHJcbiAgIHJldHVybiByZXF1ZXN0O1xyXG4gfVxyXG59XHJcbiBcclxudmFyIHJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KCk7XHJcblxyXG53aW5kb3cuZ2V0TG9nID0gZnVuY3Rpb24odGltZXIpIHtcclxuICB2YXIgdXJsID0gXCJodHRwOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICE9ICd3d3cuc2t5ZHVlbC5jb20nID8gJzozMDAxJyA6ICcnKSArIFwiL2xvZy9nYW1lLXNlcnZlci5sb2dcIjtcclxuICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHVwZGF0ZVBhZ2U7XHJcbiAgcmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gIHN0YXJ0VGFpbCh0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0VGFpbCh0aW1lcikge1xyXG4gIGlmICh0aW1lciA9PSBcInN0b3BcIikge1xyXG4gICAgc3RvcFRhaWwoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdCA9IHNldFRpbWVvdXQoXCJnZXRMb2coKVwiLCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BUYWlsKCkge1xyXG4gIGNsZWFyVGltZW91dCh0KTtcclxuICB2YXIgcGF1c2UgPSBcIlRoZSBsb2cgdmlld2VyIGhhcyBiZWVuIHBhdXNlZC4gVG8gYmVnaW4gdmlld2luZyBhZ2FpbiwgY2xpY2sgdGhlIFN0YXJ0IFZpZXdlciBidXR0b24uXFxuXCI7XHJcbiAgbG9nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dcIik7XHJcbiAgdmFyIG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXVzZSk7XHJcbiAgbG9nRGl2LnJlcGxhY2VDaGlsZChuZXdOb2RlLCBsb2dEaXYuY2hpbGROb2Rlc1swXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhZ2UoKSB7XHJcbiAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIHZhciBjdXJyZW50TG9nVmFsdWUgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dC5zcGxpdChcIlxcblwiKTtcclxuICAgICAgZXZhbChjdXJyZW50TG9nVmFsdWUpO1xyXG4gICAgICBsb2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcclxuICAgICAgdmFyIGxvZ0xpbmUgPSAnICc7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjdXJyZW50TG9nVmFsdWUubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgbG9nTGluZSArPSBjdXJyZW50TG9nVmFsdWVbaV0gKyBcIlxcblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxvZ0Rpdi5pbm5lckhUTUwgPSBsb2dMaW5lO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhIFJlcXVlc3Qgc3RhdHVzIGlzIFwiICsgcmVxdWVzdC5zdGF0dXMpO1xyXG4gIH1cclxufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
