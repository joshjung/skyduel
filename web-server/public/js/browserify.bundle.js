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
  },
  forEach: function (callback) {
    this.getChildren().all.concat().forEach(function (child) {
      child.forEach(callback);
    });

    callback.apply(this);
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
      deaths: this.deaths,
      color: this.color
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
    this.color = value.color;

    this.messaging = undefined;

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

    this.color = 0xFFFFFF;
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
  getUsername: function () {
    return this.uid.split('*')[0];
  },
  getColorHex: function () {
    return this.componentToHex(this.color);
  },
  componentToHex: function(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  },
  getUsernameHTML: function () {
    return '<span style=\'color:#' + this.getColorHex() + '\'>' + this.getUsername() + '</span>';
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

      if (this.messaging)
      {
        var insults = ['humiliated', 'embarrassed', 'mortified', 'humbled', 'shamed', 'disgraced', 'chastened', 'deflated', 'squashed', 'abased', 'demeaned', 'degraded', 'demoted', 'belittled'];
        var ranInsult = insults[Math.floor(Math.random() * insults.length)];
        this.messaging.send('SKYDUEL', projectile.getParent().getUsernameHTML() + ' ' + ranInsult + ' ' + this.getUsernameHTML() + '!');
      }
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
  this.statusRing.lineStyle(3.0, this.tint, 1.0 * ratio);

  this.statusRing.arc(0, 0, 20.0, -(Math.PI/4) * ratio, (Math.PI / 4) * ratio ); 

  if (isPlayer)
  {
    this.statusRing.lineStyle(1.0, this.tint, 0.8);
    this.statusRing.drawCircle(0, 0, 25, this.tint); 
  }
};

Plane.prototype.updateWithModel = function(model) {
  this.x = model.x;
  this.y = model.y;
  this.angle = model.angle * 57.2957795;
  this.tint = model.color;

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
  reset: function () {
    this.pause();

    this.userInputStates = [];
    this.lastUpdateTimeEnd = undefined;
    this.estServerTime = undefined;
    this.lastServerState = undefined;
    this.intervalId = undefined;
    this.latency = 0;
    this.lastSendToServerTime = 1000.0 / 30.0;
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
  this.resetAll();

  pomelo.on('disconnect', this.pomelo_disconnectHandler.bind(this))
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
  playerMetaData: [],
  /*===========================*\
   * Properties
  \*===========================*/
  get state() {
    return {};
  },
  set state(value) {
    this.playerMetaData = value.players;
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
  resetAll: function () {

    if (this.scStateManager)
      this.scStateManager.reset();

    if (this.world)
      this.world.forEach(function () {
        console.log('destroying', this);
        this.destroy();
      });

    this.latencyAnalyzer = new LatencyAnalyzer();
    this.scStateManager = new SCStateManager(60, this);
    this.userInputProcessor = new UserInputProcessor();

    this.world = new World();
  },
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
  },
  pomelo_disconnectHandler: function (reason) 
  {
    console.log('skyDuelClient: pomelo disconnected. Resetting everything.');
    this.resetAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljQmFzZS5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19Db2xsaWRlcy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXMuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Jlc3Bhd25zLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU21va2VzLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvQnVsbGV0LmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYW5lUGFydC5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGF5ZXIuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvU21va2UuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvV29ybGQuanMiLCJzaGFyZWQvanMvbGliL0hhc2hBcnJheS5qcyIsInNoYXJlZC9qcy9zcHJpdGVzL0JpcmRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9CdWxsZXRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9QbGFuZVBhcnRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9QbGFuZVNwcml0ZS5qcyIsInNoYXJlZC9qcy9zcHJpdGVzL1Ntb2tlU3ByaXRlLmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvU2VydmVyQ2xpZW50U3RhdGVNYW5hZ2VyLmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvU2t5RHVlbENsaWVudC5qcyIsIndlYi1zZXJ2ZXIvcHVibGljL2pzL2xvZ1ZpZXdlci5qcyIsIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBMaWJyYXJ5XHJcbnZhciBpc0NsaWVudCA9IHRydWU7XHJcblxyXG5yZXF1aXJlKFwiLi9nYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzXCIpO1xyXG5cclxuLy8gU2hhcmVkXHJcblxyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvbGliL0hhc2hBcnJheS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY01hbmFnZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9TbW9rZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0J1bGxldC5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYXllci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9Vc2VyQWN0aW9ucy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJTdGF0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qc1wiKTtcclxuXHJcbi8vIFNwcml0ZXNcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVQYXJ0U3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9TbW9rZVNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL0J1bGxldFNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvQmlyZFNwcml0ZS5qc1wiKTtcclxuXHJcbi8vIENsaWVudFxyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi93ZWItc2VydmVyL3B1YmxpYy9qcy9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL1NreUR1ZWxDbGllbnQuanNcIik7XHJcblxyXG4vLyBWaWV3XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL2xvZ1ZpZXdlci5qc1wiKTsiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsKXtcbi8qIVxuICogSmF2YVNjcmlwdCBJbmhlcml0YW5jZSB3aXRoIFByaXZhdGUgTWVtYmVyc1xuICogTGFyZ2VseSBiYXNlZCB1cG9uIEpvaG4gUmVzaWcncyBpbmhlcml0YW5jZSB0ZWNobmlxdWUsXG4gKiAoc2VlIGh0dHA6Ly9lam9obi5vcmcvYmxvZy9zaW1wbGUtamF2YXNjcmlwdC1pbmhlcml0YW5jZS8pXG4gKiB0aGF0IHdhcyBpbnNwaXJlZCBieSBiYXNlMiBhbmQgUHJvdG90eXBlLlxuICpcbiAqIFdvcmtzIHdpdGggYW5kIHdpdGhvdXQgbm9kZS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKlxuICogdjIuMC40LCBNYXJjZWwgUmllZ2VyLCAyMDEzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmlnYS9qY2xhc3NcbiAqIGh0dHBzOi8vbnBtanMub3JnL3BhY2thZ2UvamNsYXNzXG4gKi9cbnZhciBucyxuc0tleTtcbmlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiJiZ0eXBlb2YgcHJvY2VzcyE9PVwidW5kZWZpbmVkXCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyl7bnM9bW9kdWxlO25zS2V5PVwiZXhwb3J0c1wiO31lbHNle2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtucz13aW5kb3c7XG5uc0tleT1cIkpDbGFzc1wiO319KGZ1bmN0aW9uKGQsZil7dmFyIGI9ZFtmXTt2YXIgYT17ZXh0ZW5kYWJsZTp0cnVlLGN0b3JOYW1lOlwiaW5pdFwiLHN1cGVyTmFtZTpcIl9zdXBlclwiLGVuYWJsZVByaXZhY3k6dHJ1ZSxwcml2YXRlUGF0dGVybjovXl9fLisvLHRyYWNraW5nOnRydWUscHJpdmF0ZU5hbWU6XCJfX1wiLG1ldGhvZHNLZXk6XCJfamNNZXRob2RzX1wiLGRlcHRoS2V5OlwiX2pjRGVwdGhfXCIsY2FsbGVyRGVwdGhLZXk6XCJfamNDYWxsZXJEZXB0aF9cIn07XG52YXIgYz1mYWxzZTt2YXIgZT1mdW5jdGlvbigpe307ZS5leHRlbmQ9ZnVuY3Rpb24obSxnKXtnPWd8fHt9O2Zvcih2YXIgcSBpbiBhKXtpZihnW3FdPT09dW5kZWZpbmVkKXtnW3FdPWFbcV07fX1pZighZy5lbmFibGVQcml2YWN5KXtnLnByaXZhdGVQYXR0ZXJuPW51bGw7XG5nLnByaXZhdGVOYW1lPW51bGw7fXZhciByPXRoaXMucHJvdG90eXBlO2M9dHJ1ZTt2YXIgbz1uZXcgdGhpcygpO2M9ZmFsc2U7b1tnLmRlcHRoS2V5XT1yW2cuZGVwdGhLZXldfHwwO29bZy5kZXB0aEtleV0rKzt2YXIgaz1vW2cuZGVwdGhLZXldO3ZhciBpPXt9O3ZhciBqPXt9O1xudmFyIHM9e307Zm9yKHZhciBoIGluIG0pe2lmKG1baF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7dmFyIG49KGZ1bmN0aW9uKHQsdSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHY9dGhpc1tnLnN1cGVyTmFtZV07aWYoIWcucHJpdmF0ZVBhdHRlcm58fCFnLnByaXZhdGVQYXR0ZXJuLnRlc3QodCkpe3RoaXNbZy5zdXBlck5hbWVdPXJbdF07XG59dmFyIEQ7aWYoZy5wcml2YXRlTmFtZSl7RD10aGlzW2cucHJpdmF0ZU5hbWVdO3RoaXNbZy5wcml2YXRlTmFtZV09RHx8czt9dmFyIHksRSx4LEk7aWYoZy5wcml2YXRlUGF0dGVybil7aWYodGhpc1tnLmNhbGxlckRlcHRoS2V5XT09PXVuZGVmaW5lZCl7dGhpc1tnLmNhbGxlckRlcHRoS2V5XT1rO1xufXk9dGhpc1tnLm1ldGhvZHNLZXldO2lmKHQ9PWcuY3Rvcil7dGhpc1tnLm1ldGhvZHNLZXldPXl8fGk7Zm9yKHZhciB6IGluIGkpe2lmKCF0aGlzW2cubWV0aG9kc0tleV1bel0pe3RoaXNbZy5tZXRob2RzS2V5XVt6XT17fTt9dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdPWlbel1ba107XG52YXIgQz10aGlzW2cubWV0aG9kc0tleV1bel1ba107dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdPWZ1bmN0aW9uKCl7dmFyIEs9dGhpc1tnLnN1cGVyTmFtZV07dGhpc1tnLnN1cGVyTmFtZV09dGhpc1tnLm1ldGhvZHNLZXldW3pdW2stMV07dmFyIEo9Qy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG50aGlzW2cuc3VwZXJOYW1lXT1LO3JldHVybiBKO307fWk9dGhpc1tnLm1ldGhvZHNLZXldO31lbHNle3RoaXNbZy5tZXRob2RzS2V5XT1pO31FPXt9O2Zvcih2YXIgeiBpbiB0aGlzW2cubWV0aG9kc0tleV0pe0Vbel09dGhpc1t6XTt2YXIgRj1NYXRoLm1heC5hcHBseShNYXRoLE9iamVjdC5rZXlzKGlbel0pKTtcbnRoaXNbel09aVt6XVtGXTt9aWYoZy50cmFja2luZyl7eD17fTtmb3IodmFyIEcgaW4gail7eFtHXT10aGlzW0ddO3RoaXNbR109altHXTt9fWlmKGcudHJhY2tpbmcpe0k9T2JqZWN0LmtleXModGhpcyk7fX12YXIgQj11LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihnLnByaXZhdGVQYXR0ZXJuKXtpZihnLnRyYWNraW5nKXt2YXIgSD1PYmplY3Qua2V5cyh0aGlzKTtcbmZvcih2YXIgRyBpbiBIKXtHPUhbR107aWYoZy5wcml2YXRlUGF0dGVybi50ZXN0KEcpKXt4W0ddPXRoaXNbR107altHXT10aGlzW0ddO319Zm9yKHZhciBHIGluIEkpe0c9SVtHXTt2YXIgQT1ILmluZGV4T2YoRyk8MCYmZy5wcml2YXRlUGF0dGVybi50ZXN0KEcpO2lmKEEpe2RlbGV0ZSBqW0ddO1xuZGVsZXRlIHRoaXNbR107fX1mb3IodmFyIEcgaW4gail7dmFyIHc9dGhpc1tnLmNhbGxlckRlcHRoS2V5XTtpZih4W0ddPT09dW5kZWZpbmVkfHxrPT13KXtkZWxldGUgdGhpc1tHXTt9ZWxzZXt0aGlzW0ddPXhbR107fX19Zm9yKHZhciBHIGluIHRoaXNbZy5tZXRob2RzS2V5XSl7aWYoRVtHXT09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbR107XG59ZWxzZXt0aGlzW0ddPUVbR107fX1pZih5PT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLm1ldGhvZHNLZXldO31lbHNle3RoaXNbZy5tZXRob2RzS2V5XT15O31pZihrPT10aGlzW2cuY2FsbGVyRGVwdGhLZXldKXtkZWxldGUgdGhpc1tnLmNhbGxlckRlcHRoS2V5XTtcbn19aWYoZy5wcml2YXRlTmFtZSl7aWYoRD09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5wcml2YXRlTmFtZV07fWVsc2V7dGhpc1tnLnByaXZhdGVOYW1lXT1EO319aWYodj09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5zdXBlck5hbWVdO31lbHNle3RoaXNbZy5zdXBlck5hbWVdPXY7XG59cmV0dXJuIEI7fTt9KShoLG1baF0pO3ZhciBsPWcucHJpdmF0ZVBhdHRlcm4mJmcucHJpdmF0ZVBhdHRlcm4udGVzdChoKTtpZihsKXtpW2hdPXt9O2lbaF1ba109bjt9ZWxzZXtvW2hdPW47fX1lbHNle3ZhciBsPWcudHJhY2tpbmcmJmcucHJpdmF0ZVBhdHRlcm4mJmcucHJpdmF0ZVBhdHRlcm4udGVzdChoKTtcbmlmKGwpe2pbaF09bVtoXTt9ZWxzZXtvW2hdPW1baF07fX19ZnVuY3Rpb24gcCgpe2lmKCFjJiZ0aGlzW2cuY3Rvck5hbWVdKXt0aGlzW2cuY3Rvck5hbWVdLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt9fXAucHJvdG90eXBlPW87cC5wcm90b3R5cGUuY29uc3RydWN0b3I9cDtcbmlmKGcuZXh0ZW5kYWJsZSE9PWZhbHNlKXtwLmV4dGVuZD1hcmd1bWVudHMuY2FsbGVlO31yZXR1cm4gcDt9O2Uubm9Db25mbGljdD1mdW5jdGlvbigpe3ZhciBnPWRbZl07ZFtmXT1iO3JldHVybiBnO307ZFtmXT1lO30pKG5zLG5zS2V5KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUmVxdWlyZXNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljTWFuYWdlciA9IHJlcXVpcmUoJy4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlcicpLFxyXG4gIEpDbGFzcyA9IHJlcXVpcmUoJ2pjbGFzcycpLFxyXG4gIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2FtZU9iamVjdCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBHYW1lT2JqZWN0ID0gbW9kdWxlLmV4cG9ydHMgPSBKQ2xhc3MuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhdGVTZXRQcm9wczogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfSxcclxuICBzdGF0ZUdldFByb3BzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBbJ19pZCddO1xyXG4gIH0sXHJcbiAgc2V0UGFyZW50OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICB9LFxyXG4gIHNldENoaWxkcmVuOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRGVzZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMuX2NoaWxkcmVuID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBTZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcclxuICB9LFxyXG4gIHNldElkOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldElkOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZCB8fCAodGhpcy5faWQgPSB0aGlzLnJhbmRvbUlkKCkpO1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZC5zdGF0ZTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlbklkczogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgdmFyIHJldCA9IHt9O1xyXG5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcmV0W2NoaWxkLmdldElkKCldID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfSxcclxuICBzZXRDaGlsZHJlblN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpZHMgPSB0aGlzLmdldENoaWxkcmVuSWRzKCk7XHJcblxyXG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xyXG4gICAgICB2YXIgY2hpbGQgPSBzZWxmLmdldENoaWxkcmVuKCkuZ2V0KGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgICBpZiAoIWNoaWxkKVxyXG4gICAgICAgIHNlbGYuZ2V0Q2hpbGRyZW4oKS5hZGQoc2VsZi5uZXdDaGlsZEZyb21TdGF0ZShjaGlsZFN0YXRlKSk7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2hpbGQpID09PSAnW29iamVjdCBBcnJheV0nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVHdvIGlkcyBhcmUgdGhlIHNhbWUhJywgY2hpbGRbMF0uZ2V0SWQoKSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoaWxkLnNldFN0YXRlKGNoaWxkU3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkZWxldGUgaWRzW2NoaWxkU3RhdGUuaWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGVzdHJveVVuZm91bmRDaGlsZHJlbk9uU3RhdGVTZXQpXHJcbiAgICAgIGZvciAodmFyIGlkIGluIGlkcylcclxuICAgICAgICB0aGlzLmRlc3Ryb3lDaGlsZEJ5SWQoaWQpO1xyXG4gIH0sXHJcbiAgZ2V0Q2hpbGRyZW5TdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICByZXR1cm4gY2hpbGQuZ2V0U3RhdGUoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0RGlydHk6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAvLyBEZXNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgdGhpcy5fZGlydHkgPSB2YWx1ZTtcclxuICAgICh0aGlzLl9kaXJ0eSAmJiB0aGlzLmdldFBhcmVudCgpKSA/IHRoaXMuZ2V0UGFyZW50KCkuc2V0RGlydHkodHJ1ZSkgOiAnJztcclxuICAgICF0aGlzLl9kaXJ0eSA/IHRoaXMuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC5zZXREaXJ0eShmYWxzZSk7XHJcbiAgICB9KSA6ICcnO1xyXG4gIH0sXHJcbiAgZ2V0RGlydHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gU2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICByZXR1cm4gdGhpcy5fZGlydHk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgcmFuZG9tSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5OTk5OTk5OTkpLnRvU3RyaW5nKDE2KTtcclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkKSB7XHJcbiAgICBpZiAoIXBhcmVudClcclxuICAgIHtcclxuICAgICAgR2FtZU9iamVjdC5wcm90b3R5cGUud29ybGQgPSBHYW1lT2JqZWN0LnByb3RvdHlwZS5yb290ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldElkKGlkKTtcclxuICAgIHRoaXMudHlwZSA9ICdHYW1lT2JqZWN0JztcclxuICAgIHRoaXMuYnVpbGRDaGlsZHJlbk9iamVjdCgpO1xyXG4gICAgdGhpcy5zZXRQYXJlbnQocGFyZW50KTtcclxuICAgIHRoaXMuc2V0RGlydHkodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmRlc3Ryb3lVbmZvdW5kQ2hpbGRyZW5PblN0YXRlU2V0ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIgPSBuZXcgQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5pdGVkPSB0cnVlO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy8gV2lwZSBvdXQgYW55IGRlc3Ryb3llZCBjaGlsZHJlbi5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuY29uY2F0KCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgaWYgKGNoaWxkLmRlc3Ryb3llZClcclxuICAgICAgICBzZWxmLmdldENoaWxkcmVuKCkucmVtb3ZlKGNoaWxkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQudXBkYXRlKGVsYXBzZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hcHBseUFsbChlbGFwc2VkKTtcclxuICB9LFxyXG4gIG5ld0NoaWxkRnJvbVN0YXRlOiBmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xyXG4gICAgdmFyIGNoaWxkID0gbmV3IEdhbWVPYmplY3QoKTtcclxuICAgIGNoaWxkLmluaXQodGhpcywgY2hpbGRTdGF0ZS5pZClcclxuICAgIGNoaWxkLnN0YXRlID0gY2hpbGRTdGF0ZTtcclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9LFxyXG4gIGRlc3Ryb3lDaGlsZEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdmFyIGNoaWxkID0gdGhpcy5nZXRDaGlsZHJlbigpLmdldChpZCk7XHJcblxyXG4gICAgaWYgKCFjaGlsZClcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gZGVzdHJveSBub24tZXhpc3RlbnQgY2hpbGQgd2l0aCBpZCcsIGlkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGlsZC5kZXN0cm95KVxyXG4gICAge1xyXG4gICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5yZW1vdmUoY2hpbGQpO1xyXG4gIH0sXHJcbiAgYnVpbGRDaGlsZHJlbk9iamVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXRDaGlsZHJlbihuZXcgSGFzaEFycmF5KFsnX2lkJywgJ3R5cGUnXSkpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICB9LFxyXG4gIHVwZGF0ZVNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgaWYgKHRoaXMuc3ByaXRlICYmIHRoaXMuZGVzdHJveWVkKVxyXG4gICAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmICghdGhpcy5zcHJpdGUpXHJcbiAgICAgICAgdGhpcy5idWlsZFNwcml0ZShwaGFzZXIpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAgICAgIHRoaXMuc3ByaXRlLnVwZGF0ZVdpdGhNb2RlbCh0aGlzKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC51cGRhdGVQaGFzZXIocGhhc2VyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3ByaXRlKHBoYXNlcik7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcbiAgfSxcclxuICBmb3JFYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuY29uY2F0KCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQuZm9yRWFjaChjYWxsYmFjayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYWxsYmFjay5hcHBseSh0aGlzKTtcclxuICB9XHJcbn0pOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIExBVEVOQ1lfQU5BTFlaRVJfREVGQVVMVF9NQVggPSAxMDtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIExhdGVuY3lBbmFseXplcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBMYXRlbmN5QW5hbHl6ZXIgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmRlYnVnID0gZmFsc2U7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuTGF0ZW5jeUFuYWx5emVyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhY2s6IFtdLFxyXG4gIG1heFN0YWNrTGVuZ3RoOiBMQVRFTkNZX0FOQUxZWkVSX0RFRkFVTFRfTUFYLFxyXG4gIGxhc3RUZXN0VGltZToge30sXHJcbiAgbGFzdExhdGVuY3lTYW1wbGVUaW1lOiAtMSxcclxuICBsYXRlbmN5U2FtcGxlOiAtMSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBsYXRlbmN5KCkge1xyXG4gICAgLy8gUmV0dXJucyBhIHdlaWdodGVkIGF2ZXJhZ2UgbGF0ZW5jeS5cclxuICAgIC8vIEl0ZW0gYXQgaXggMCBoYXMgd2VpZ2h0IG9mIDEgYW5kIGl0ZW0gYXQgaXggbGVuZ3RoIGhhcyB3ZWlnaHQgb2YgbGVuZ3RoLlxyXG4gICAgdmFyIF9sYXRlbmN5ID0gMCwgcGVyYyA9IDA7XHJcblxyXG4gICAgdmFyIHdlaWdodHMgPSBbMC4zM107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YWNrLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBwZXJjICs9IHdlaWdodHNbaV07XHJcbiAgICAgIHdlaWdodHNbaSsxXSA9IHdlaWdodHNbaV0gKiAwLjY2NjY7XHJcbiAgICB9XHJcblxyXG4gICAgd2VpZ2h0c1swXSArPSAxLjAgLSBwZXJjO1xyXG4gICAgcGVyYyArPSAxLjAgLSBwZXJjO1xyXG4gICAgd2VpZ2h0cy5yZXZlcnNlKCk7XHJcblxyXG4gICAgdGhpcy5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChsLCBpKSB7XHJcbiAgICAgIF9sYXRlbmN5ICs9IGwgKiB3ZWlnaHRzW2ldO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGVidWcpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdMQVRFTkNZJywgX2xhdGVuY3kpO1xyXG5cclxuICAgIHJldHVybiBfbGF0ZW5jeTtcclxuICB9LFxyXG4gIGdldCBub3coKSB7XHJcbiAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhcnRUZXN0OiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICB0aGlzLmxhc3RUZXN0VGltZVtrZXldID0gdGhpcy5ub3c7XHJcbiAgfSxcclxuICBlbmRUZXN0OiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICB2YXIgZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy5sYXN0VGVzdFRpbWVba2V5XTtcclxuICAgIGRlbGV0ZSB0aGlzLmxhc3RUZXN0VGltZVtrZXldO1xyXG5cclxuICAgIGlmICh0aGlzLmRlYnVnKVxyXG4gICAgICBjb25zb2xlLmxvZygnTEFURU5DWScsIHRoaXMubGF0ZW5jeSk7XHJcblxyXG4gICAgdGhpcy5wdXNoKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgcHVzaDogZnVuY3Rpb24obGF0ZW5jeSkge1xyXG4gICAgdGhpcy5zdGFjay5wdXNoKGxhdGVuY3kpO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLnN0YWNrLmxlbmd0aCA+IHRoaXMubWF4U3RhY2tMZW5ndGgpXHJcbiAgICAgIHRoaXMuc3RhY2suc2hpZnQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5sYXN0TGF0ZW5jeVNhbXBsZVRpbWUgPT0gLTEgfHwgdGhpcy5ub3cgLSB0aGlzLmxhc3RMYXRlbmN5U2FtcGxlVGltZSA+IDIwMDApXHJcbiAgICB7XHJcbiAgICAgIHRoaXMubGF0ZW5jeVNhbXBsZSA9IHRoaXMubGF0ZW5jeTtcclxuICAgICAgdGhpcy5sYXN0TGF0ZW5jeVNhbXBsZVRpbWUgPSB0aGlzLm5vdztcclxuICAgIH1cclxuICB9LFxyXG4gIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnN0YWNrID0gW107XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gTGF0ZW5jeUFuYWx5emVyOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVTRVJfQUNUSU9OUyA9IHtcclxuICBMRUZUX0RPV046IDB4MDAwMSxcclxuICBMRUZUX1VQOiAweDAwMDIsXHJcbiAgUklHSFRfRE9XTjogMHgwMDEwLFxyXG4gIFJJR0hUX1VQOiAweDAwMjAsXHJcbiAgVVBfRE9XTjogMHgwMTAwLFxyXG4gIFVQX1VQOiAweDAyMDAsXHJcbiAgRE9XTl9ET1dOOiAweDEwMDAsXHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IFVTRVJfQUNUSU9OUztcclxufSBlbHNlIHtcclxuICB3aW5kb3cuVVNFUl9BQ1RJT05TID0gVVNFUl9BQ1RJT05TO1xyXG59IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogVXNlcklucHV0UHJvY2Vzc29yKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVzZXJJbnB1dFByb2Nlc3NvciA9IGZ1bmN0aW9uKCkge1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblVzZXJJbnB1dFByb2Nlc3Nvci5wcm90b3R5cGUgPSB7XHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAodXNlcklucHV0LCBlbGFwc2VkLCB3b3JsZCkge1xyXG4gICAgaWYgKHVzZXJJbnB1dC5sZWZ0KVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IC13b3JsZC5wbGF5ZXIuR0xPQkFMUy5CQU5LX1JBVEU7XHJcbiAgICBlbHNlIGlmICh1c2VySW5wdXQucmlnaHQpXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gd29ybGQucGxheWVyLkdMT0JBTFMuQkFOS19SQVRFO1xyXG4gICAgZWxzZVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IDA7XHJcblxyXG4gICAgaWYgKHVzZXJJbnB1dC51cClcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gd29ybGQucGxheWVyLkdMT0JBTFMuQUNDRUxFUkFUSU9OX1JBVEU7XHJcbiAgICBlbHNlIGlmICh1c2VySW5wdXQuZG93bilcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gLXdvcmxkLnBsYXllci5HTE9CQUxTLkRFQ0VMRVJBVElPTl9SQVRFO1xyXG4gICAgZWxzZSBcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gMC4wO1xyXG5cclxuICAgIHdvcmxkLnBsYXllci50cmlnZ2VyRG93biA9IHVzZXJJbnB1dC50cmlnZ2VyO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dFByb2Nlc3NvcjsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBVc2VySW5wdXRTdGF0ZSgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBVc2VySW5wdXRTdGF0ZSA9IGZ1bmN0aW9uKGlucHV0LCB0aW1lKSB7XHJcbiAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gIHRoaXMudGltZSA9IHRpbWU7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuVXNlcklucHV0U3RhdGUucHJvdG90eXBlID0ge1xyXG4gIGlucHV0OiB1bmRlZmluZWQsXHJcbiAgdGltZTogdW5kZWZpbmVkXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dFN0YXRlOyIsInZhciBKQ2xhc3MgPSByZXF1aXJlKCdqY2xhc3MnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljQmFzZSgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gSkNsYXNzLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpc1NlcnZlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICEodHlwZW9mIGlzQ2xpZW50ID09PSAndW5kZWZpbmVkJyB8fCBpc0NsaWVudClcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmFwcGx5VG9TZXJ2ZXJPbmx5ICYmIHRoaXMuaXNTZXJ2ZXIpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuYXBwbHlUb1NlcnZlck9ubHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5hcHBseVRvQ2xpZW50T25seSAmJiAhdGhpcy5pc1NlcnZlcilcclxuICAgIHtcclxuICAgICAgdGhpcy5hcHBseVRvQ2xpZW50T25seS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1BsZWFzZSBvdmVycmlkZSBDaGFyYWN0ZXJpc3RpY0Jhc2U6OmFwcGx5VG8nLCB0aGlzKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNCYXNlOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4uL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljTWFuYWdlcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY01hbmFnZXIgPSBmdW5jdGlvbihwYXJlbnQpIHtcclxuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICB0aGlzLmNoYXJhY3RlcmlzdGljcyA9IG5ldyBIYXNoQXJyYXkoWyduYW1lJ10pO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgY2FjaGU6IHt9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhZGQ6IGZ1bmN0aW9uIChjaGFyYWN0ZXJpc3RpYykge1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MuYWRkKGNoYXJhY3RlcmlzdGljKTtcclxuICB9LFxyXG4gIGFwcGx5QWxsOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5jYWNoZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuY2hhcmFjdGVyaXN0aWNzLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGFyYWN0ZXJpc3RpYykge1xyXG4gICAgICBjaGFyYWN0ZXJpc3RpYy5hcHBseVRvKHNlbGYucGFyZW50LCBlbGFwc2VkLCBzZWxmLmNhY2hlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljTWFuYWdlcjsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY0Jhc2UnKSxcclxuICBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBNYXRoIEJ1bGxzaGl0XHJcbiAqIFByb29mIGhlcmU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODQ5MjExL3Nob3J0ZXN0LWRpc3RhbmNlLWJldHdlZW4tYS1wb2ludC1hbmQtYS1saW5lLXNlZ21lbnRcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gc3FyKHgpIHsgcmV0dXJuIHggKiB4IH1cclxuZnVuY3Rpb24gZGlzdDIodiwgdykgeyByZXR1cm4gc3FyKHYueCAtIHcueCkgKyBzcXIodi55IC0gdy55KSB9XHJcbmZ1bmN0aW9uIGRpc3RUb1NlZ21lbnRTcXVhcmVkKHAsIHYsIHcpIHtcclxuICB2YXIgbDIgPSBkaXN0Mih2LCB3KTtcclxuICBpZiAobDIgPT0gMCkgcmV0dXJuIGRpc3QyKHAsIHYpO1xyXG4gIHZhciB0ID0gKChwLnggLSB2LngpICogKHcueCAtIHYueCkgKyAocC55IC0gdi55KSAqICh3LnkgLSB2LnkpKSAvIGwyO1xyXG4gIGlmICh0IDwgMCkgcmV0dXJuIGRpc3QyKHAsIHYpO1xyXG4gIGlmICh0ID4gMSkgcmV0dXJuIGRpc3QyKHAsIHcpO1xyXG4gIHJldHVybiBkaXN0MihwLCB7IHg6IHYueCArIHQgKiAody54IC0gdi54KSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB2LnkgKyB0ICogKHcueSAtIHYueSkgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGlzdFRvU2VnbWVudChwLCB2LCB3KSB7IHJldHVybiBNYXRoLnNxcnQoZGlzdFRvU2VnbWVudFNxdWFyZWQocCwgdiwgdykpOyB9XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19Db2xsaWRlcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19Db2xsaWRlcyA9IENoYXJhY3RlcmlzdGljQmFzZS5leHRlbmQoe1xyXG4gIHRlbXBQaHlzaWNzOiBuZXcgQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcygpLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIC8vIFRoZXNlIGFyZSB0aGUga2V5cyBvZiB0aGUgd29ybGQgb2JqZWN0cyB0aGF0IHRoZSB0aGlzIG9iamVjdCBjYW4gY29sbGlkZSB3aXRoIVxyXG4gICAgdGhpcy5vcHRpb25zLmtleXMgPSB0aGlzLm9wdGlvbnMua2V5cyB8fCBbJ3BsYXllcicsICdiaXJkJ107XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIFxyXG4gICAgdGhpcy50ZW1wUGh5c2ljcy5vcHRpb25zID0gdGFyZ2V0LndvcmxkO1xyXG5cclxuICAgIHZhciB0YXJnZXRzID0gdGFyZ2V0LndvcmxkLmdldENoaWxkcmVuKCkuZ2V0QWxsKHRoaXMub3B0aW9ucy5rZXlzKSxcclxuICAgICAgc3RhcnQgPSB0aGlzLnRlbXBQaHlzaWNzLmFwcGx5VGVtcCh0YXJnZXQsIDApLFxyXG4gICAgICBlbmQgPSB0aGlzLnRlbXBQaHlzaWNzLmFwcGx5VGVtcCh0YXJnZXQsIGVsYXBzZWQpO1xyXG5cclxuICAgIHRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICB2YXIgc2hvcnRlc3REaXN0YW5jZSA9IGRpc3RUb1NlZ21lbnQodCwgc3RhcnQsIGVuZCk7XHJcbiAgICAgIGlmIChzaG9ydGVzdERpc3RhbmNlIDwgKHRhcmdldC5yYWRpdXMgKiAyKSArICh0LnJhZGl1cyAqIDIpKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5jYWxsYmFjaylcclxuICAgICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFjay5hcHBseShudWxsLCBbdCwgc2hvcnRlc3REaXN0YW5jZV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXM7IiwidmFyIENoYXJhY3RlcmlzdGljQmFzZSA9IHJlcXVpcmUoJy4vQ2hhcmFjdGVyaXN0aWNCYXNlJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4gPSBDaGFyYWN0ZXJpc3RpY0Jhc2UuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIHZhciBkZXN0cm95ID0gdGFyZ2V0LnggPCAwIHx8IHRhcmdldC54ID4gdGhpcy5vcHRpb25zLndpZHRoIHx8IHRhcmdldC55IDwgMCB8fCB0YXJnZXQueSA+IHRoaXMub3B0aW9ucy5oZWlnaHQ7XHJcbiAgICBpZiAoZGVzdHJveSlcclxuICAgICAgdGFyZ2V0LmRlc3Ryb3koKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbjsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY0Jhc2UnKSxcclxuICBQbGFuZVBhcnQgPSByZXF1aXJlKCcuLi9nYW1lT2JqZWN0cy9QbGFuZVBhcnQnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX0V4cGxvZGVzKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX0V4cGxvZGVzID0gQ2hhcmFjdGVyaXN0aWNCYXNlLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG9TZXJ2ZXJPbmx5OiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgaWYgKHRhcmdldC5oZWFsdGggPD0gMCAmJiAhdGFyZ2V0LmV4cGxvZGVkKVxyXG4gICAge1xyXG4gICAgICB0YXJnZXQuZXhwbG9kZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmV4cGxvZGUodGFyZ2V0KTtcclxuICAgICAgdGFyZ2V0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGV4cGxvZGU6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKVxyXG4gICAge1xyXG4gICAgICB2YXIgcGFydCA9IG5ldyBQbGFuZVBhcnQodGFyZ2V0LndvcmxkLCB0YXJnZXQuZ2V0SWQoKSArICdfcGFydCcgKyBpLCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGFyZ2V0LnZlbG9jaXR5LCBpKTtcclxuICAgICAgdGFyZ2V0LndvcmxkLmdldENoaWxkcmVuKCkuYWRkKHBhcnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19FeHBsb2RlczsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY0Jhc2UnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1BoeXNpY3MoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcyA9IENoYXJhY3RlcmlzdGljQmFzZS5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIHJlcyA9IHRoaXMuYXBwbHlUZW1wKHRhcmdldCwgZWxhcHNlZCk7XHJcbiAgICB0YXJnZXQueCA9IHJlcy54O1xyXG4gICAgdGFyZ2V0LnkgPSByZXMueTtcclxuICAgIHRhcmdldC52ZWxvY2l0eSA9IHJlcy52ZWxvY2l0eTtcclxuICAgIHRhcmdldC5hbmdsZSA9IHJlcy5hbmdsZTtcclxuICB9LFxyXG4gIGFwcGx5VGVtcDogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCkge1xyXG4gICAgdmFyIHJlcyA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGFyZ2V0LnZlbG9jaXR5ID09ICd1bmRlZmluZWQnKVxyXG4gICAgICB0aHJvdyBFcnJvcignVGFyZ2V0IHZlbG9jaXR5IGlzIHVuZGVmaW5lZCBmb3IgJywgdGFyZ2V0KTtcclxuICAgIFxyXG4gICAgdmFyIHYgPSB0YXJnZXQudmVsb2NpdHk7XHJcbiAgICBcclxuICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoJ2FjY2VsZXJhdGVyJykpXHJcbiAgICAgIHYgPSB0YXJnZXQudmVsb2NpdHkgKyAodGFyZ2V0LmFjY2VsZXJhdGVyICogZWxhcHNlZCk7XHJcblxyXG4gICAgcmVzLnZlbG9jaXR5ID0gdiA+IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NQVggPyB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUFYIDogKHYgPCB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUlOID8gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01JTiA6IHYpO1xyXG5cclxuICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoJ2JhbmsnKSlcclxuICAgICAgcmVzLmFuZ2xlID0gdGFyZ2V0LmFuZ2xlICsgKHRhcmdldC5iYW5rICogZWxhcHNlZCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJlcy5hbmdsZSA9IHRhcmdldC5hbmdsZTtcclxuXHJcbiAgICByZXMueCA9IHRhcmdldC54ICsgTWF0aC5jb3MocmVzLmFuZ2xlKSAqIHJlcy52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcbiAgICByZXMueSA9IHRhcmdldC55ICsgTWF0aC5zaW4ocmVzLmFuZ2xlKSAqIHJlcy52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcblxyXG4gICAgaWYgKGlzTmFOKHJlcy54KSlcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgY29uc29sZS5sb2coZWxhcHNlZCk7XHJcbiAgICAgIHRocm93IEVycm9yKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfUGh5c2ljczsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY0Jhc2UnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Jlc3Bhd25zKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1Jlc3Bhd25zID0gQ2hhcmFjdGVyaXN0aWNCYXNlLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogQ29uc3RydWN0b3JcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICB0aGlzLl9zdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IDUuMCBzZWNvbmQgcmVzcGF3biBpZiBub25lIHByb3ZpZGVkXHJcbiAgICB0aGlzLm9wdGlvbnMuUkVTUEFXTl9USU1FID0gdGhpcy5vcHRpb25zLlJFU1BBV05fVElNRSB8fCA1MDAwO1xyXG4gICAgLy8gRGVmYXVsdCA1LjAgc2Vjb25kIHJlc3Bhd24gaWYgbm9uZSBwcm92aWRlZFxyXG4gICAgdGhpcy5vcHRpb25zLlJFU1BBV05fTE9DQVRJT04gPSB0aGlzLm9wdGlvbnMuUkVTUEFXTl9MT0NBVElPTiB8fCAncmFuZG9tJztcclxuICAgIHRoaXMub3B0aW9ucy5SRVNQQVdOX09SSUVOVEFUSU9OID0gdGhpcy5vcHRpb25zLlJFU1BBV05fT1JJRU5UQVRJT04gfHwgJ3JhbmRvbSc7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIC8vIFJlc3Bhd25zIGFyZSBPTkxZIHBlcmZvcm1lZCBieSB0aGUgc2VydmVyXHJcbiAgICBpZiAodHlwZW9mIGlzQ2xpZW50ID09PSAndW5kZWZpbmVkJyB8fCBpc0NsaWVudClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0YXJnZXQuZGVzdHJveWVkICYmICF0YXJnZXQucmVzcGF3bmluZylcclxuICAgIHtcclxuICAgICAgc2V0VGltZW91dCh0aGlzLnJlc3Bhd25IYW5kbGVyLmJpbmQodGhpcywgdGFyZ2V0KSwgdGhpcy5vcHRpb25zLlJFU1BBV05fVElNRSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZXNwYXduSGFuZGxlcjogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgdGFyZ2V0LnJlc3Bhd24oKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfUmVzcGF3bnM7IiwidmFyIENoYXJhY3RlcmlzdGljQmFzZSA9IHJlcXVpcmUoJy4vQ2hhcmFjdGVyaXN0aWNCYXNlJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZyA9IENoYXJhY3RlcmlzdGljQmFzZS5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdGFyZ2V0LnggPSB0YXJnZXQueCA8IDAgPyB0aGlzLm9wdGlvbnMud2lkdGggOiB0YXJnZXQueDtcclxuICAgIHRhcmdldC54ID0gdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggPyB0YXJnZXQueCAlIHRoaXMub3B0aW9ucy53aWR0aCA6IHRhcmdldC54O1xyXG4gICAgdGFyZ2V0LnkgPSB0YXJnZXQueSA8IDAgPyB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGFyZ2V0Lnk7XHJcbiAgICB0YXJnZXQueSA9IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodCA/IHRhcmdldC55ICUgdGhpcy5vcHRpb25zLmhlaWdodCA6IHRhcmdldC55O1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZzsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNCYXNlID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY0Jhc2UnKSxcclxuICBCdWxsZXQgPSByZXF1aXJlKCcuLi9nYW1lT2JqZWN0cy9CdWxsZXQnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cyA9IENoYXJhY3RlcmlzdGljQmFzZS5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIG5leHRCdWxsZXRUaW1lOiB1bmRlZmluZWQsXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldE5vdzogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgdGhpcy5fc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zLmZpcmVSYXRlID0gb3B0aW9ucy5maXJlUmF0ZSB8fCA1MC4wO1xyXG4gICAgdGhpcy5vcHRpb25zLmZpcmVWZWxvY2l0eSA9IG9wdGlvbnMuZmlyZVZlbG9jaXR5IHx8IDcwMC4wO1xyXG4gICAgLy8gQnVsbGV0cyBuZWVkIHRvIHN0YXJ0ICdhaGVhZCcgb2YgdGVoIG9iamVjdCBmaXJpbmcgdGhlbSBhIGxpdHRsZS5cclxuICAgIHRoaXMub3B0aW9ucy5vZmZzZXQgPSBvcHRpb25zLm9mZnNldCB8fCAzMDtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBmaXJlOiBmdW5jdGlvbiAodGFyZ2V0LCB4LCB5LCBhbmdsZSwgdmVsb2NpdHkpXHJcbiAge1xyXG4gICAgaWYgKHRhcmdldC5hbW1vIDw9IDApXHJcbiAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgdmFyIGJ1bGxldCA9IG5ldyBCdWxsZXQodGFyZ2V0LCB1bmRlZmluZWQsIHggKyBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLm9wdGlvbnMub2Zmc2V0LCB5ICsgTWF0aC5zaW4oYW5nbGUpICogdGhpcy5vcHRpb25zLm9mZnNldCwgYW5nbGUsIHZlbG9jaXR5KTtcclxuICAgIHRhcmdldC5nZXRDaGlsZHJlbigpLmFkZChidWxsZXQpO1xyXG4gICAgdGFyZ2V0LmFtbW8tLTtcclxuICAgIHRoaXMubmV4dEJ1bGxldFRpbWUgPSB0aGlzLmdldE5vdygpICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG4gIH0sXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIGlmICghdGhpcy5uZXh0QnVsbGV0VGltZSlcclxuICAgICAgdGhpcy5uZXh0QnVsbGV0VGltZSA9IHRoaXMuZ2V0Tm93KCkgKyB0aGlzLm9wdGlvbnMuZmlyZVJhdGU7XHJcblxyXG4gICAgaWYgKHRhcmdldC50cmlnZ2VyRG93bilcclxuICAgIHtcclxuICAgICAgdmFyIHQgPSB0aGlzLm5leHRCdWxsZXRUaW1lICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG4gICAgICBcclxuICAgICAgd2hpbGUgKHRoaXMuZ2V0Tm93KCkgPiB0aGlzLm5leHRCdWxsZXRUaW1lKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5maXJlKHRhcmdldCwgdGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQuYW5nbGUsIHRoaXMub3B0aW9ucy5maXJlVmVsb2NpdHkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHM7IiwidmFyIENoYXJhY3RlcmlzdGljQmFzZSA9IHJlcXVpcmUoJy4vQ2hhcmFjdGVyaXN0aWNCYXNlJyksXHJcbiAgU21va2UgPSByZXF1aXJlKCcuLi9nYW1lT2JqZWN0cy9TbW9rZScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfU21va2VzKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1Ntb2tlcyA9IENoYXJhY3RlcmlzdGljQmFzZS5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdGhpcy5hdHRlbXB0U21va2VEcm9wKHRhcmdldCwgZWxhcHNlZCk7XHJcbiAgfSxcclxuICBhdHRlbXB0U21va2VEcm9wOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZj0gdGhpcztcclxuICAgIC8vIFNtb2tlIGRyb3BzIGFyZSBPTkxZIHBlcmZvcm1lZCBieSB0aGUgc2VydmVyXHJcbiAgICBpZiAodHlwZW9mIGlzQ2xpZW50ID09PSAndW5kZWZpbmVkJyB8fCBpc0NsaWVudClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmICgoaXNOYU4odGhpcy5vcHRpb25zLlNNT0tFX1NUQVJUX0hFQUxUSCkgfHwgdGFyZ2V0LmhlYWx0aCA8IHRoaXMub3B0aW9ucy5TTU9LRV9TVEFSVF9IRUFMVEgpICYmIHRhcmdldC5zbW9rZXMgPCB0aGlzLm9wdGlvbnMuU01PS0VfTUFYKVxyXG4gICAge1xyXG4gICAgICB2YXIgY29tcGFyZSA9IGlzTmFOKHRoaXMub3B0aW9ucy5TTU9LRV9TVEFSVF9IRUFMVEgpID8gMS4wIDogdGFyZ2V0LmhlYWx0aCxcclxuICAgICAgICBzbW9rZURyb3AgPSAoTWF0aC5yYW5kb20oKSAqIGNvbXBhcmUpIDwgdGhpcy5vcHRpb25zLlNNT0tFX1RIUkVTSE9MRDtcclxuXHJcbiAgICAgIGlmIChzbW9rZURyb3ApXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgc21va2UgPSBuZXcgU21va2UodGFyZ2V0LCAnc21va2UnICsgdGFyZ2V0LnJhbmRvbUlkKCksIHRhcmdldC54LCB0YXJnZXQueSwgdGFyZ2V0LmFuZ2xlLCB0aGlzLnNtb2tlRmFkZUhhbmRsZXIuYmluZCh0aGlzLCB0YXJnZXQpKTtcclxuICAgICAgICB0YXJnZXQuc21va2VzKys7XHJcbiAgICAgICAgdGFyZ2V0LndvcmxkLmdldENoaWxkcmVuKCkuYWRkKHNtb2tlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc21va2VGYWRlSGFuZGxlcjogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgdGFyZ2V0LnNtb2tlcy0tO1xyXG4gIH1cclxufSlcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1Ntb2tlczsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEJpcmQoKVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBCaXJkID0gR2FtZU9iamVjdC5leHRlbmQoe1xuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogUHJvcGVydGllc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aCxcbiAgICB9O1xuICB9LFxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5faWQpXG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBiaXJkXFwncyBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xuICAgIH1cblxuICAgIHRoaXMueCA9IHZhbHVlLng7XG4gICAgdGhpcy55ID0gdmFsdWUueTtcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XG4gICAgdGhpcy5zY2FsZSA9IHZhbHVlLnNjYWxlO1xuICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgdGhpcy5yYWRpdXMgPSB2YWx1ZS5yYWRpdXM7XG4gICAgdGhpcy5oZWFsdGggPSB2YWx1ZS5oZWFsdGg7XG4gIH0sXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBNZXRob2RzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCkge1xuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcblxuICAgIHRoaXMudHlwZSA9ICdiaXJkJztcblxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmJhbmsgPSAwO1xuICAgIHRoaXMucmFkaXVzID0gMztcblxuICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndvcmxkLndpZHRoO1xuICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndvcmxkLmhlaWdodDtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgIHRoaXMuYmFuayA9IHRoaXMucmFuZG9taXplZEJhbmsoKTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gMjUgKyBNYXRoLnJhbmRvbSgpICogMTA7XG4gICAgdGhpcy5zY2FsZSA9IChNYXRoLnJhbmRvbSgpICogMC40KSArIDAuMTtcblxuICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuXG4gICAgdGhpcy5HTE9CQUxTID0ge1xuICAgICAgVkVMT0NJVFlfTUFYOiBCaXJkLnZlbG9jaXR5LFxuICAgICAgVkVMT0NJVFlfTUlOOiBCaXJkLnZlbG9jaXR5LFxuICAgIH07XG5cbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nJykpKHRoaXMud29ybGQpKTtcbiAgICAvL3RoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0V4cGxvZGVzJykpKHRoaXMud29ybGQpKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xuICAgIFxuICAgIC8vIFRPRE86IGVuY2Fwc3VsYXRlIGJpcmQgQUlcbiAgICBcbiAgICAvLyBiaXJkcyBoYXZlIGEgMS8yMDAgY2hhbmNlIG9mIGNoYW5naW5nIHRoZSBiYW5rIGV2ZXJ5IGZyYW1lXG4gICAgaWYoTWF0aC5yYW5kb20oKSA8IDAuMDA1KVxuICAgICAgdGhpcy5iYW5rID0gdGhpcy5yYW5kb21pemVkQmFuaygpO1xuICB9LFxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5iaXJkKDAsIDApO1xuICB9LFxuICByYW5kb21pemVkQmFuazogZnVuY3Rpb24oKSB7XG4gICAgLy8gdmFsdWUgaW4gdGhlIHJhbmdlIFstMS4wLCAxLjBdIFxuICAgIHZhciBiYW5rRmFjdG9yID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMi4wO1xuICAgIC8vIHRoZSBtYXhpbXVtIGJhbmsgYW5nbGUgXG4gICAgdmFyIGJhbmtNYWduaXR1ZGUgPSBNYXRoLlBJIC8gMi4wO1xuICAgIC8vIHNjYWxlIHRoZSBtYWduaXR1ZGUgYnkgdGhlIHJhbmRvbWl6ZWQgZmFjdG9yXG4gICAgcmV0dXJuIGJhbmtGYWN0b3IgKiBiYW5rTWFnbml0dWRlOyBcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSlcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XG4gIH1cbn0pO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBCaXJkOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQnVsbGV0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEJ1bGxldCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXHJcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxyXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvcignVGhlIGJ1bGxldCBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCA9IHZhbHVlLng7XHJcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xyXG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xyXG4gICAgdGhpcy5yYWRpdXMgPSB2YWx1ZS5yYWRpdXM7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSkge1xyXG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xyXG5cclxuICAgIHRoaXMuR0xPQkFMUyA9IHtcclxuICAgICAgVkVMT0NJVFlfTUFYOiAxMDAwMDAsXHJcbiAgICAgIFZFTE9DSVRZX01JTjogMFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIHRoaXMuc3ByaXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAyO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdidWxsZXQnO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0NvbGxpZGVzJykpKHtjYWxsYmFjazogdGhpcy5jb2xsaWRlSGFuZGxlci5iaW5kKHRoaXMpfSkpO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4nKSkodGhpcy53b3JsZCkpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hcHBseUFsbChlbGFwc2VkKTtcclxuICB9LFxyXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQuYnVsbGV0KDAsIDApO1xyXG4gIH0sXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLnNwcml0ZSlcclxuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcclxuICB9LFxyXG4gIGNvbGxpZGVIYW5kbGVyOiBmdW5jdGlvbiAodGFyZ2V0LCBkaXN0YW5jZSkge1xyXG4gICAgaWYgKHRhcmdldC5oaXQpXHJcbiAgICAgIHRhcmdldC5oaXQodGhpcywgZGlzdGFuY2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBCdWxsZXQ7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQbGFuZVBhcnQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgUGxhbmVQYXJ0ID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcclxuICAgICAgdGltZVN0YXJ0IDogdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXHJcbiAgICAgIGJhbms6IHRoaXMuYmFuayxcclxuICAgICAgc21va2VzOiB0aGlzLnNtb2tlcyxcclxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXHJcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvcignVGhlIFBsYW5lUGFydCBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCA9IHZhbHVlLng7XHJcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IHZhbHVlLmR1cmF0aW9uO1xyXG4gICAgdGhpcy50aW1lU3RhcnQgPSB2YWx1ZS50aW1lU3RhcnQ7XHJcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xyXG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xyXG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcclxuICAgIHRoaXMuc21va2VzID0gdmFsdWUuc21va2VzO1xyXG4gICAgdGhpcy5pbmRleCA9IHZhbHVlLmluZGV4O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkLCB4LCB5LCBhbmdsZSwgdmVsb2NpdHksIGluZGV4KSB7XHJcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XHJcblxyXG4gICAgdGhpcy5HTE9CQUxTID0ge1xyXG4gICAgICBWRUxPQ0lUWV9NQVg6IDYwMCxcclxuICAgICAgVkVMT0NJVFlfTUlOOiAwLFxyXG4gICAgICBTTU9LRV9NQVg6IDUsXHJcbiAgICAgIFNNT0tFX1NUQVJUX0hFQUxUSDogTmFOLFxyXG4gICAgICBTTU9LRV9USFJFU0hPTEQ6IDNcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50aW1lU3RhcnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IChNYXRoLnJhbmRvbSgpICogMy4wICsgMS4wKSAqIDEwMDAuMDtcclxuICAgIHRoaXMuYmFuayA9IC0wLjMgKyAoTWF0aC5yYW5kb20oKSAqIDAuNik7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gLTcwICogTWF0aC5yYW5kb20oKTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgdGhpcy5zbW9rZXMgPSAwO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdwbGFuZXBhcnQnO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TbW9rZXMnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6ZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xyXG5cclxuICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkICogZWxhcHNlZDtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBoYXNlcik7XHJcblxyXG4gICAgdmFyIGVsYXBzZWQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHJhdGlvID0gMS4wIC0gKGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgICBpZiAocmF0aW8gPCAwLjEpXHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5wbGFuZVBhcnQodGhpcy54LCB0aGlzLnksIHRoaXMuaW5kZXgpO1xyXG4gIH0sXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spXHJcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuXHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYW5lUGFydDsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogUmVxdWlyZW1lbnRzXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0JyksXG4gIEJ1bGxldCA9IHJlcXVpcmUoJy4vQnVsbGV0JyksXG4gIFNtb2tlID0gcmVxdWlyZSgnLi9TbW9rZScpLFxuICBwbGF5ZXJDb3VudCA9IDA7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGF5ZXIoKVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBQbGF5ZXIgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBQcm9wZXJ0aWVzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZClcbiAgICAgIHJldHVybiB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkLFxuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYWNjZWxlcmF0ZXI6IHRoaXMuYWNjZWxlcmF0ZXIsXG4gICAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgICBhY2NlbDogdGhpcy5hY2NlbCxcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aCxcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgYW1tbzogdGhpcy5hbW1vLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgIHNtb2tlczogdGhpcy5zbW9rZXMsXG4gICAgICBkZXN0cm95ZWQ6IHRoaXMuZGVzdHJveWVkLFxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW5TdGF0ZSgpLFxuICAgICAga2lsbHM6IHRoaXMua2lsbHMsXG4gICAgICBkZWF0aHM6IHRoaXMuZGVhdGhzLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3JcbiAgICB9O1xuICB9LFxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGUgcGxhbmUgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnVpZCA9IHZhbHVlLnVpZDtcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xuICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xuICAgIHRoaXMuaGVhbHRoID0gdmFsdWUuaGVhbHRoO1xuICAgIHRoaXMuYWNjZWxlcmF0ZXIgPSB2YWx1ZS5hY2NlbGVyYXRlcjtcbiAgICB0aGlzLmFtbW8gPSB2YWx1ZS5hbW1vO1xuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xuICAgIHRoaXMuc21va2VzID0gdmFsdWUuc21va2VzO1xuICAgIGlmICh2YWx1ZS5kZXN0cm95ZWQgJiYgIXRoaXMuZGVzdHJveWVkKVxuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB2YWx1ZS5kZXN0cm95ZWQ7XG4gICAgdGhpcy5raWxscyA9IHZhbHVlLmtpbGxzO1xuICAgIHRoaXMuZGVhdGhzID0gdmFsdWUuZGVhdGhzO1xuICAgIHRoaXMuY29sb3IgPSB2YWx1ZS5jb2xvcjtcblxuICAgIHRoaXMubWVzc2FnaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5zZXRDaGlsZHJlblN0YXRlKHZhbHVlLmNoaWxkcmVuKTtcbiAgfSxcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIE1ldGhvZHNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGluaXQ6IGZ1bmN0aW9uKHBhcmVudCwgaWQsIHVpZCkge1xuICAgIGNvbnNvbGUubG9nKCdJbml0aW5nIHBsYXllcicsIHRoaXMudWlkKTtcblxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcblxuICAgIHRoaXMudWlkID0gdWlkO1xuXG4gICAgdGhpcy50eXBlID0gJ3BsYXllcic7XG5cbiAgICB0aGlzLkdMT0JBTFMgPSB7XG4gICAgICBWRUxPQ0lUWV9NQVg6IDMwMCxcbiAgICAgIFZFTE9DSVRZX01JTjogODAsXG4gICAgICBCQU5LX1JBVEU6IE1hdGguUEkgLyAyLFxuICAgICAgQUNDRUxFUkFUSU9OX1JBVEU6IDI1MCxcbiAgICAgIERFQ0VMRVJBVElPTl9SQVRFOiA3MCxcbiAgICAgIFNNT0tFX01BWDogMjAsXG4gICAgICBTTU9LRV9TVEFSVF9IRUFMVEg6IDYwLFxuICAgICAgU01PS0VfVEhSRVNIT0xEOiA1XG4gICAgfTtcblxuICAgIHRoaXMuYnVsbGV0UHJvcHMgPSB7XG4gICAgICBmaXJlUmF0ZTogMTAwLFxuICAgICAgZmlyZVZlbG9jaXR5OiA1MDBcbiAgICB9O1xuXG4gICAgdGhpcy5jb2xvciA9IDB4RkZGRkZGO1xuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA0MDA7XG4gICAgdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLmtpbGxzID0gMDtcbiAgICB0aGlzLmRlYXRocyA9IDA7XG4gICAgdGhpcy5hY2NlbGVyYXRlciA9IDA7XG4gICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgdGhpcy5hbW1vID0gMTAwMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy5HTE9CQUxTLlZFTE9DSVRZX01JTjtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgIHRoaXMucmFkaXVzID0gMTU7XG5cbiAgICB0aGlzLnNtb2tlcyA9IDA7XG5cbiAgICB0aGlzLnRyaWdnZXJEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU21va2VzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcnKSkodGhpcy53b3JsZCkpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMnKSkodGhpcy5idWxsZXRQcm9wcykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0V4cGxvZGVzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Jlc3Bhd25zJykpKHRoaXMuR0xPQkFMUykpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgdGhpcy5fc3VwZXIoZWxhcHNlZCk7XG5cbiAgICB0aGlzLmJ1bGxldFByb3BzLmZpcmVWZWxvY2l0eSA9IDUwMC4wICsgdGhpcy52ZWxvY2l0eTtcbiAgfSxcbiAgcmVzcGF3bjogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdSZXNwYXduaW5nIHBsYXllcicsIHRoaXMudWlkKTtcblxuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA0MDA7XG4gICAgdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gMDtcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICB0aGlzLmFtbW8gPSAxMDAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLkdMT0JBTFMuVkVMT0NJVFlfTUlOO1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdGhpcy5yYWRpdXMgPSAxNTtcblxuICAgIHRoaXMuc21va2VzID0gMDtcblxuICAgIHRoaXMuZXhwbG9kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy53b3JsZC5nZXRDaGlsZHJlbigpLmFkZCh0aGlzKTtcbiAgfSxcbiAgdXBkYXRlUGhhc2VyOiBmdW5jdGlvbiAocGhhc2VyKSB7XG4gICAgdGhpcy5fc3VwZXIocGhhc2VyKTtcblxuICAgIHRoaXMuc3ByaXRlLmRpc3BsYXlTdGF0dXNSaW5nKHRoaXMudWlkID09IHdpbmRvdy5jbGllbnQudWlkLCB0aGlzLmhlYWx0aCk7XG4gIH0sXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLnBsYW5lKDAsIDApO1xuICB9LFxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcbiAgICBidWxsZXQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFkZChidWxsZXQpO1xuICAgIHJldHVybiBidWxsZXQ7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3N1cGVyKCk7XG5cbiAgICB0aGlzLmJ1bGxldHMgPSBbXTtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEZXN0cm95aW5nIHBsYW5lIHNwcml0ZScsIHRoaXMudWlkKTtcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XG4gICAgfVxuICB9LFxuICBnZXRVc2VybmFtZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnVpZC5zcGxpdCgnKicpWzBdO1xuICB9LFxuICBnZXRDb2xvckhleDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMuY29sb3IpO1xuICB9LFxuICBjb21wb25lbnRUb0hleDogZnVuY3Rpb24oYykge1xuICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xuICB9LFxuICBnZXRVc2VybmFtZUhUTUw6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJzxzcGFuIHN0eWxlPVxcJ2NvbG9yOiMnICsgdGhpcy5nZXRDb2xvckhleCgpICsgJ1xcJz4nICsgdGhpcy5nZXRVc2VybmFtZSgpICsgJzwvc3Bhbj4nO1xuICB9LFxuICBoaXQ6IGZ1bmN0aW9uIChwcm9qZWN0aWxlLCBkaXN0YW5jZSkge1xuICAgIGlmIChwcm9qZWN0aWxlLmdldFBhcmVudCgpID09IHRoaXMpXG4gICAgICByZXR1cm47XG4gICAgXG4gICAgdGhpcy5oZWFsdGggLT0gMSAqIChwcm9qZWN0aWxlLnZlbG9jaXR5IC8gMTAwMC4wKSAqIE1hdGgubWF4KDE1IC0gZGlzdGFuY2UsIDEpO1xuICAgIHRoaXMuaGVhbHRoID0gdGhpcy5oZWFsdGggPCAwID8gMCA6IHRoaXMuaGVhbHRoO1xuXG4gICAgaWYgKHByb2plY3RpbGUuZ2V0UGFyZW50KCkudHlwZSA9PSAncGxheWVyJyAmJiB0aGlzLmhlYWx0aCA8PSAwICYmICF0aGlzLmRlc3Ryb3llZClcbiAgICB7XG4gICAgICBwcm9qZWN0aWxlLmdldFBhcmVudCgpLmtpbGxzKys7XG4gICAgICB0aGlzLmRlYXRocysrO1xuXG4gICAgICBpZiAodGhpcy5tZXNzYWdpbmcpXG4gICAgICB7XG4gICAgICAgIHZhciBpbnN1bHRzID0gWydodW1pbGlhdGVkJywgJ2VtYmFycmFzc2VkJywgJ21vcnRpZmllZCcsICdodW1ibGVkJywgJ3NoYW1lZCcsICdkaXNncmFjZWQnLCAnY2hhc3RlbmVkJywgJ2RlZmxhdGVkJywgJ3NxdWFzaGVkJywgJ2FiYXNlZCcsICdkZW1lYW5lZCcsICdkZWdyYWRlZCcsICdkZW1vdGVkJywgJ2JlbGl0dGxlZCddO1xuICAgICAgICB2YXIgcmFuSW5zdWx0ID0gaW5zdWx0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbnN1bHRzLmxlbmd0aCldO1xuICAgICAgICB0aGlzLm1lc3NhZ2luZy5zZW5kKCdTS1lEVUVMJywgcHJvamVjdGlsZS5nZXRQYXJlbnQoKS5nZXRVc2VybmFtZUhUTUwoKSArICcgJyArIHJhbkluc3VsdCArICcgJyArIHRoaXMuZ2V0VXNlcm5hbWVIVE1MKCkgKyAnIScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNtb2tlKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFNtb2tlID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcclxuICAgICAgdGltZVN0YXJ0IDogdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXHJcbiAgICAgIGJhbms6IHRoaXMuYmFuayxcclxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHlcclxuICAgIH07XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGUgU21va2UgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xyXG4gICAgdGhpcy55ID0gdmFsdWUueTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSB2YWx1ZS5kdXJhdGlvbjtcclxuICAgIHRoaXMudGltZVN0YXJ0ID0gdmFsdWUudGltZVN0YXJ0O1xyXG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcclxuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcclxuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQsIHgsIHksIGFuZ2xlLCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xyXG5cclxuICAgIHRoaXMuR0xPQkFMUyA9IHtcclxuICAgICAgVkVMT0NJVFlfTUFYOiA2MDAsXHJcbiAgICAgIFZFTE9DSVRZX01JTjogMFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRpbWVTdGFydCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gKE1hdGgucmFuZG9tKCkgKiAyLjAgKyAxLjApICogMTAwMC4wO1xyXG4gICAgdGhpcy5iYW5rID0gLTEgKyAoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XHJcbiAgICB0aGlzLmFjY2VsZXJhdG9yID0gMDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdzbW9rZSc7XHJcblxyXG4gICAgLy90aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOmZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBoYXNlcik7XHJcblxyXG4gICAgdmFyIGVsYXBzZWQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHJhdGlvID0gMS4wIC0gKGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRMaWZlKHJhdGlvKTtcclxuXHJcbiAgICBpZiAocmF0aW8gPCAwLjEpXHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5zbW9rZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaylcclxuICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gU21va2U7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0JyksXHJcbiAgQmlyZCA9IHJlcXVpcmUoJy4vQmlyZCcpLFxyXG4gIFNtb2tlID0gcmVxdWlyZSgnLi9TbW9rZScpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyksXHJcbiAgUGxhbmVQYXJ0ID0gcmVxdWlyZSgnLi9QbGFuZVBhcnQnKSxcclxuICBIYXNoQXJyYXkgPSByZXF1aXJlKCcuLi9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCaXJkKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFdvcmxkID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzZXRTdGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpXHJcbiAgICAgIGlmIChrZXkgIT0gJ2NoaWxkcmVuJylcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZVtrZXldO1xyXG5cclxuICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKSlcclxuICAgICAgdGhpcy5zZXRDaGlsZHJlblN0YXRlKHZhbHVlLmNoaWxkcmVuKTtcclxuICB9LFxyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgdGlsZVdpZHRoOiB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgdGlsZUhlaWdodDogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICB0aWxlczogdGhpcy50aWxlcyxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlblN0YXRlKClcclxuICAgIH07XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1dvcmxkIGluaXQhJyk7XHJcbiAgICB0aGlzLnR5cGUgPSAnd29ybGQnO1xyXG4gICAgdGhpcy5wbGF5ZXJzID0gbmV3IEhhc2hBcnJheShbJ19pZCcsICd1aWQnLCAndHlwZSddKTtcclxuICAgIHRoaXMuX3N1cGVyKG51bGwsICdyb290Jyk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICBpZiAoIWVsYXBzZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgICAgIFxyXG4gICAgdGhpcy5fc3VwZXIoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBidWlsZENoaWxkcmVuT2JqZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldENoaWxkcmVuKG5ldyBIYXNoQXJyYXkoWydfaWQnLCAndWlkJywgJ3R5cGUnXSkpO1xyXG4gIH0sXHJcbiAgbmV3Q2hpbGRGcm9tU3RhdGU6IGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICB2YXIgY2hpbGQ7XHJcblxyXG4gICAgaWYgKGNoaWxkU3RhdGUudHlwZSA9PSAnYmlyZCcpXHJcbiAgICAgIGNoaWxkID0gbmV3IEJpcmQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3BsYXllcicpXHJcbiAgICB7XHJcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBtYXliZSB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBjaGlsZCBhbmQgaXQgaXMgYmVpbmcgcmVzcGF3bmVkLlxyXG4gICAgICBpZiAodGhpcy5wbGF5ZXJzLmdldChjaGlsZFN0YXRlLmlkKSlcclxuICAgICAgICBjaGlsZCA9IHRoaXMucGxheWVycy5nZXQoY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkID0gbmV3IFBsYXllcih0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgICAgICB0aGlzLnBsYXllcnMuYWRkKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdzbW9rZScpXHJcbiAgICAgIGNoaWxkID0gbmV3IFNtb2tlKHRoaXMsIGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgZWxzZSBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdwbGFuZXBhcnQnKVxyXG4gICAgICBjaGlsZCA9IG5ldyBQbGFuZVBhcnQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNoaWxkU3RhdGUpO1xyXG4gICAgICB0aHJvdyBFcnJvcignQ2Fubm90IGZpZ3VyZSBvdXQgd2hhdCB0aGUgaGVsbCBhIFxcJycgKyBjaGlsZFN0YXRlLnR5cGUgKyAnXFwnIGlzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLnNldFN0YXRlKGNoaWxkU3RhdGUpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9LFxyXG4gIGRlc3Ryb3lDaGlsZEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdGhpcy5fc3VwZXIoaWQpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBXb3JsZDsiLCJ2YXIgSGFzaEFycmF5ID0gZnVuY3Rpb24oa2V5RmllbGRzLCBjYWxsYmFjaykge1xuICB0aGlzLl9tYXAgPSB7fTtcbiAgdGhpcy5fbGlzdCA9IFtdO1xuICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgdGhpcy5rZXlGaWVsZHMgPSBrZXlGaWVsZHM7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdhbGwnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfSk7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdtYXAnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9KTtcblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygnY29uc3RydWN0Jyk7XG4gIH1cbn07XG5cbkhhc2hBcnJheS5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAga2V5ID0gdGhpcy5rZXlGaWVsZHNba2V5XTtcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLmZpbmQob2JqLCBrZXkpO1xuICAgICAgICBpZiAoaW5zdCkge1xuICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0uaW5kZXhPZihvYmopICE9IC0xKSB7XG4gICAgICAgICAgICAgIC8vIENhbm5vdCBhZGQgdGhlIHNhbWUgaXRlbSB0d2ljZVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tYXBbaW5zdF0ucHVzaChvYmopO1xuICAgICAgICAgIH0gZWxzZSB0aGlzLl9tYXBbaW5zdF0gPSBbb2JqXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0LnB1c2gob2JqKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ2FkZCcsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgIH1cbiAgfSxcbiAgYWRkTWFwOiBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHRoaXMuX21hcFtrZXldID0gb2JqO1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdhZGRNYXAnLCB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBvYmo6IG9ialxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiAoISh0aGlzLl9tYXBba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB8fCB0aGlzLl9tYXBba2V5XS5sZW5ndGggIT0gMSkgPyB0aGlzLl9tYXBba2V5XSA6IHRoaXMuX21hcFtrZXldWzBdO1xuICB9LFxuICBnZXRBbGw6IGZ1bmN0aW9uKGtleXMpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGtleXMpXG4gICAgICByZXMgPSByZXMuY29uY2F0KHRoaXMuZ2V0QXNBcnJheShrZXlzW2tleV0pKTtcblxuICAgIHJldHVybiByZXM7XG4gIH0sXG4gIGdldEFzQXJyYXk6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBba2V5XSB8fCBbXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLmhhc093blByb3BlcnR5KGtleSk7XG4gIH0sXG4gIGhhc011bHRpcGxlOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwW2tleV0gaW5zdGFuY2VvZiBBcnJheTtcbiAgfSxcbiAgcmVtb3ZlQnlLZXk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZW1vdmVkID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBhcmd1bWVudHNbaV07XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLl9tYXBba2V5XS5jb25jYXQoKTtcbiAgICAgIGlmIChpdGVtcykge1xuICAgICAgICByZW1vdmVkID0gcmVtb3ZlZC5jb25jYXQoaXRlbXMpO1xuICAgICAgICBmb3IgKHZhciBqIGluIGl0ZW1zKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tqXTtcbiAgICAgICAgICBmb3IgKHZhciBpeCBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICAgICAgdmFyIGtleTIgPSB0aGlzLmZpbmQoaXRlbSwgdGhpcy5rZXlGaWVsZHNbaXhdKTtcbiAgICAgICAgICAgIGlmIChrZXkyICYmIHRoaXMuX21hcFtrZXkyXSkge1xuICAgICAgICAgICAgICB2YXIgaXggPSB0aGlzLl9tYXBba2V5Ml0uaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKGl4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwW2tleTJdLnNwbGljZShpeCwgMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGhpcy5fbWFwW2tleTJdLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5Ml07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbGlzdC5zcGxpY2UodGhpcy5fbGlzdC5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmVCeUtleScsIHJlbW92ZWQpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBpeCBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5maW5kKGl0ZW0sIHRoaXMua2V5RmllbGRzW2l4XSk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICB2YXIgaXggPSB0aGlzLl9tYXBba2V5XS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgIGlmIChpeCAhPSAtMSlcbiAgICAgICAgICAgIHRoaXMuX21hcFtrZXldLnNwbGljZShpeCwgMSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbWFwW2tleV0ubGVuZ3RoID09IDApXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbWFwW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdC5zcGxpY2UodGhpcy5fbGlzdC5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlJywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUFsbDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9sZCA9IHRoaXMuX2xpc3QuY29uY2F0KCk7XG4gICAgdGhpcy5fbWFwID0ge307XG4gICAgdGhpcy5fbGlzdCA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZScsIG9sZCk7XG4gICAgfVxuICB9LFxuICBmaW5kOiBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2JqW3BhdGhdO1xuICAgIH1cblxuICAgIHZhciBkdXAgPSBwYXRoLmNvbmNhdCgpO1xuICAgIC8vIGVsc2UgYXNzdW1lIGFycmF5LlxuICAgIHdoaWxlIChkdXAubGVuZ3RoICYmIG9iaikge1xuICAgICAgb2JqID0gb2JqW2R1cC5zaGlmdCgpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICBjbG9uZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgbiA9IG5ldyBIYXNoQXJyYXkodGhpcy5rZXlGaWVsZHMuY29uY2F0KCksIGNhbGxiYWNrID8gY2FsbGJhY2sgOiB0aGlzLmNhbGxiYWNrKTtcbiAgICBuLmFkZC5hcHBseShuLCB0aGlzLmFsbC5jb25jYXQoKSk7XG4gICAgcmV0dXJuIG47XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaEFycmF5OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJpcmRTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gQmlyZFNwcml0ZShnYW1lLCB4LCB5KSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG4gIFxyXG4gIC8vIGFkZCB0aGUgYmlyZFNwcml0ZSBcclxuICB0aGlzLmJpcmRTcHJpdGUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdiaXJkJyk7XHJcbiAgIFxyXG4gIC8vIHlvdSBjYW4ndCBzZXQgdGhlIGFuY2hvciBwb2ludCBvZiBhIGdyb3VwLCBzbyBmb3IgeCAmIHkgdG8gY29ycmVzcG9uZFxyXG4gIC8vIHRvIHRoZSBCaXJkU3ByaXRlJ3MgY2VudGVyIHdlIGhhdmUgdG8gb2Zmc2V0IGl0IG1hbnVhbGx5XHJcbiAgdGhpcy5iaXJkU3ByaXRlLnggPSAtdGhpcy5iaXJkU3ByaXRlLndpZHRoICAvIDIuMDtcclxuICB0aGlzLmJpcmRTcHJpdGUueSA9IC10aGlzLmJpcmRTcHJpdGUuaGVpZ2h0IC8gMi4wO1xyXG59O1xyXG5cclxuQmlyZFNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5CaXJkU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJpcmRTcHJpdGU7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQdWJsaWMgTWV0aG9kcyBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkJpcmRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZSAqIDU3LjI5NTc3OTU7XHJcbiAgdGhpcy5zY2FsZS54ID0gdGhpcy5zY2FsZS55ID0gbW9kZWwuc2NhbGU7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5iaXJkID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IEJpcmRTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQnVsbGV0U3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIEJ1bGxldFNwcml0ZShnYW1lLCB4LCB5KSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG4gIFxyXG4gIC8vIGFkZCB0aGUgQnVsbGV0U3ByaXRlIFxyXG4gIHRoaXMuQnVsbGV0U3ByaXRlICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYnVsbGV0Jyk7XHJcbn07XHJcblxyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJ1bGxldFNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLmJ1bGxldCA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCdWxsZXRTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUGxhbmVQYXJ0U3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIFBsYW5lUGFydFNwcml0ZShnYW1lLCB4LCB5LCBmcmFtZSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuXHJcbiAgLy8gYWRkIHRoZSBQbGFuZVBhcnRTcHJpdGUgXHJcbiAgdGhpcy5wbGFuZVBhcnRTcHJpdGUgPSB0aGlzLmNyZWF0ZSgwLCAwLCAncGxhbmVwYXJ0cycpO1xyXG4gIHRoaXMucGxhbmVQYXJ0U3ByaXRlLnggPSAtdGhpcy5wbGFuZVBhcnRTcHJpdGUud2lkdGggLyAyLjA7XHJcbiAgdGhpcy5wbGFuZVBhcnRTcHJpdGUueSA9IC10aGlzLnBsYW5lUGFydFNwcml0ZS5oZWlnaHQgLyAyLjA7XHJcbiAgLy8wIC0gcmlnaHQgd2luZ1xyXG4gIC8vMSAtIGxlZnQgd2luZ1xyXG4gIC8vMiAtIHRhaWxcclxuICAvLzMgLSBib2R5XHJcbiAgLy80IC0gZW5naW5lXHJcbiAgdGhpcy5wbGFuZVBhcnRTcHJpdGUuZnJhbWUgPSBNYXRoLm1pbihmcmFtZSwgNCk7XHJcbn07XHJcblxyXG5QbGFuZVBhcnRTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuUGxhbmVQYXJ0U3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBsYW5lUGFydFNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5QbGFuZVBhcnRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5yb3RhdGlvbjtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUucGxhbmVQYXJ0ID0gZnVuY3Rpb24oeCwgeSwgZnJhbWUsIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQbGFuZVBhcnRTcHJpdGUodGhpcy5nYW1lLCB4LCB5LCBmcmFtZSkpO1xyXG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGFuZSgpIFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZ1bmN0aW9uIFBsYW5lKGdhbWUsIHgsIHkpIHtcbiAgY29uc29sZS5sb2coJ05FVyBQTEFORSBTUFJJVEUnKTtcbiAgXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xuIFxuICAvLyBjb25maWd1cmUgZ3JvdXAgXG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG4gIHRoaXMuaGVhbHRoID0gMTAwO1xuICBcbiAgLy8gYWRkIHRoZSBhaXJwbGFuZSBcbiAgdGhpcy5haXJwbGFuZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2FpcnBsYW5lJyk7XG4gICBcbiAgLy8geW91IGNhbid0IHNldCB0aGUgYW5jaG9yIHBvaW50IG9mIGEgZ3JvdXAsIHNvIGZvciB4ICYgeSB0byBjb3JyZXNwb25kXG4gIC8vIHRvIHRoZSBwbGFuZSdzIGNlbnRlciB3ZSBoYXZlIHRvIG9mZnNldCBpdCBtYW51YWxseVxuICB0aGlzLmFpcnBsYW5lLnggPSAtdGhpcy5haXJwbGFuZS53aWR0aCAgLyAyLjA7XG4gIHRoaXMuYWlycGxhbmUueSA9IC10aGlzLmFpcnBsYW5lLmhlaWdodCAvIDIuMDtcblxuICAvLyBhZGQgdGhlIHN0YXR1cyByaW5nIFxuICB0aGlzLnN0YXR1c1JpbmcgPSBnYW1lLmFkZC5ncmFwaGljcygwLjAsIDAuMCwgdGhpcyk7XG59O1xuXG5QbGFuZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xuUGxhbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGxhbmU7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQdWJsaWMgTWV0aG9kcyBcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblBsYW5lLnByb3RvdHlwZS5kaXNwbGF5U3RhdHVzUmluZyA9IGZ1bmN0aW9uKGlzUGxheWVyLCBoZWFsdGgpIHtcbiAgdmFyIHJhdGlvID0gKGhlYWx0aCAvIDEwMC4wKTtcblxuICB0aGlzLnN0YXR1c1JpbmcuY2xlYXIoKTtcbiAgdGhpcy5zdGF0dXNSaW5nLmxpbmVTdHlsZSgzLjAsIHRoaXMudGludCwgMS4wICogcmF0aW8pO1xuXG4gIHRoaXMuc3RhdHVzUmluZy5hcmMoMCwgMCwgMjAuMCwgLShNYXRoLlBJLzQpICogcmF0aW8sIChNYXRoLlBJIC8gNCkgKiByYXRpbyApOyBcblxuICBpZiAoaXNQbGF5ZXIpXG4gIHtcbiAgICB0aGlzLnN0YXR1c1JpbmcubGluZVN0eWxlKDEuMCwgdGhpcy50aW50LCAwLjgpO1xuICAgIHRoaXMuc3RhdHVzUmluZy5kcmF3Q2lyY2xlKDAsIDAsIDI1LCB0aGlzLnRpbnQpOyBcbiAgfVxufTtcblxuUGxhbmUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHRoaXMueCA9IG1vZGVsLng7XG4gIHRoaXMueSA9IG1vZGVsLnk7XG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZSAqIDU3LjI5NTc3OTU7XG4gIHRoaXMudGludCA9IG1vZGVsLmNvbG9yO1xuXG4gIGlmIChtb2RlbC5iYW5rIDwgMClcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMjtcbiAgZWxzZSBpZiAobW9kZWwuYmFuayA+IDApXG4gICAgdGhpcy5haXJwbGFuZS5mcmFtZSA9IDE7XG4gIGVsc2UgXG4gICAgdGhpcy5haXJwbGFuZS5mcmFtZSA9IDA7XG59O1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogRmFjdG9yeSBcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUucGxhbmUgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGxhbmUodGhpcy5nYW1lLCB4LCB5KSk7XG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNtb2tlU3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIFNtb2tlU3ByaXRlKGdhbWUsIHgsIHkpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgdGhpcy5hbmdsZSA9IDM2MCAqIE1hdGgucmFuZG9tKCk7XHJcbiAgdGhpcy5zdGFydFNjYWxlID0gTWF0aC5yYW5kb20oKSArIDAuMztcclxuICAvLyBhZGQgdGhlIFNtb2tlU3ByaXRlIFxyXG4gIHRoaXMuc21va2VTcHJpdGUgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnc21va2UnKTtcclxuICB0aGlzLnNtb2tlU3ByaXRlLnggPSAtdGhpcy5zbW9rZVNwcml0ZS53aWR0aCAvIDIuMDtcclxuICB0aGlzLnNtb2tlU3ByaXRlLnkgPSAtdGhpcy5zbW9rZVNwcml0ZS5oZWlnaHQgLyAyLjA7XHJcbiAgdGhpcy5zbW9rZVNwcml0ZS5zY2FsZS54ID0gdGhpcy5zbW9rZVNwcml0ZS5zY2FsZS55ID0gMS4wO1xyXG4gIHRoaXMuc21va2VTcHJpdGUuZnJhbWUgPSAwO1xyXG59O1xyXG5cclxuU21va2VTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuU21va2VTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU21va2VTcHJpdGU7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQdWJsaWMgTWV0aG9kcyBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuU21va2VTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG59O1xyXG5cclxuU21va2VTcHJpdGUucHJvdG90eXBlLnNldExpZmUgPSBmdW5jdGlvbiAobGlmZSkge1xyXG4gIGlmICh0aGlzLnNtb2tlU3ByaXRlKVxyXG4gICAgdGhpcy5zbW9rZVNwcml0ZS5mcmFtZSA9IE1hdGguZmxvb3IobGlmZSAqIDQpO1xyXG5cclxuICBpZiAobGlmZSA8IDApXHJcbiAgICAgIGxpZmUgPSAwXHJcblxyXG4gIHRoaXMuc2NhbGUueCA9IHRoaXMuc2NhbGUueSA9IDEuMDsvLyBNYXRoLm1heCgodGhpcy5zdGFydFNjYWxlICogbGlmZSkgKyAwLjIsIDEuMCk7XHJcblxyXG4gIHRoaXMuYWxwaGEgPSBsaWZlICogMC44O1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5zbW9rZSA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBTbW9rZVNwcml0ZSh0aGlzLmdhbWUsIHgsIHkpKTtcclxufTsiLCJ2YXIgVXNlcklucHV0U3RhdGUgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvVXNlclN0YXRlJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBTQ1N0YXRlTWFuYWdlcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBTQ1N0YXRlTWFuYWdlciA9IGZ1bmN0aW9uKGZwcywgZ2FtZUludGVyZmFjZSkge1xyXG4gIHRoaXMuZ2FtZUludGVyZmFjZSA9IGdhbWVJbnRlcmZhY2U7XHJcbiAgdGhpcy5mcmFtZVRpbWUgPSAxMDAwLjAgLyBmcHM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuU0NTdGF0ZU1hbmFnZXIucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICB1c2VySW5wdXRTdGF0ZXM6IFtdLFxyXG4gIGxhc3RVcGRhdGVUaW1lRW5kOiB1bmRlZmluZWQsXHJcbiAgZXN0U2VydmVyVGltZTogdW5kZWZpbmVkLFxyXG4gIGxhc3RTZXJ2ZXJTdGF0ZTogdW5kZWZpbmVkLFxyXG4gIGludGVydmFsSWQ6IHVuZGVmaW5lZCxcclxuICBsYXRlbmN5OiAwLFxyXG4gIGxhc3RTZW5kVG9TZXJ2ZXJUaW1lOiAxMDAwLjAgLyAzMC4wLFxyXG4gIC8qKlxyXG4gICAqIFNlbmQgYW4gdXBkYXRlIHRvIHRoZSBzZXJ2ZXIgZXZlcnkgdGhpcyBzbyBvZnRlbi5cclxuICAgKi9cclxuICBzZXJ2ZXJVcGRhdGVJbnRlcnZhbDogMTAsXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgbm93KCkge1xyXG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHBsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuaW50ZXJ2YWxIYW5kbGVyLmJpbmQodGhpcyksIHRoaXMuZnJhbWVUaW1lKTtcclxuICB9LFxyXG4gIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnBhdXNlKCk7XHJcblxyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMgPSBbXTtcclxuICAgIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmVzdFNlcnZlclRpbWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMubGF0ZW5jeSA9IDA7XHJcbiAgICB0aGlzLmxhc3RTZW5kVG9TZXJ2ZXJUaW1lID0gMTAwMC4wIC8gMzAuMDtcclxuICB9LFxyXG4gIHBhdXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbElkKVxyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAge1xyXG4gICAgaWYgKHRoaXMubmV3U2VydmVyU3RhdGUgJiYgIXRoaXMubGFzdFNlcnZlclN0YXRlKVxyXG4gICAgICB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSA9IHRoaXMubmV3U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gQXMgbG9uZyBhcyB0aGUgc2VydmVyIGhhcyBuZXZlciBzZW50IHVzIGEgc3RhdGUsIHdlIGRvIG5vdGhpbmcuXHJcbiAgICBpZiAoIXRoaXMubGFzdFNlcnZlclN0YXRlIHx8IHRoaXMubGF0ZW5jeSA9PSAwKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAvLyBUaW1lIHRoaXMgdXBkYXRlIHN0YXJ0ZWRcclxuICAgICAgdXBkYXRlU3RhcnQgPSB0aGlzLm5vdyxcclxuICAgICAgLy8gVGltZSBzaW5jZSBvdXIgbGFzdCB1cGRhdGUgZW5kZWRcclxuICAgICAgZWxhcHNlZCA9IHVwZGF0ZVN0YXJ0IC0gdGhpcy5sYXN0VXBkYXRlVGltZUVuZCxcclxuICAgICAgLy8gVGhlIHN0YXRlIG9mIGFsbCB1c2VyIGlucHV0XHJcbiAgICAgIHVzZXJJbnB1dCA9IHRoaXMuZ2FtZUludGVyZmFjZS51c2VySW5wdXQ7XHJcblxyXG4gICAgdGhpcy5sYXN0VXBkYXRlVGltZUVuZCA9IHRoaXMubm93O1xyXG5cclxuICAgIC8vIFNldCBsYXN0IHNlcnZlciBzdGF0ZSB0byBlaXRoZXIgdGhlIHVwZGF0ZVxyXG4gICAgdGhpcy5sYXN0U2VydmVyU3RhdGUgPSB0aGlzLm5ld1NlcnZlclN0YXRlIHx8IHRoaXMubGFzdFNlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBnYW1lIGludGVyZmFjZSB0byBvbGQgc2VydmVyIHN0YXRlXHJcbiAgICB0aGlzLmdhbWVJbnRlcmZhY2Uuc3RhdGUgPSB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBFc3RpbWF0ZSB0aGUgY3VycmVudCBzZXJ2ZXIgdGltZSBhdCB0aGlzIGV4YWN0IHBvaW50ICh0aGUgc2VydmVyIHdpbGwgYmUgYmVoaW5kIHVzIGJ5IGEgcGVyaW9kIG9mIHRpbWUpXHJcbiAgICB0aGlzLmVzdFNlcnZlclRpbWUgPSBNYXRoLnJvdW5kKHRoaXMubmV3U2VydmVyU3RhdGUgPyB0aGlzLm5ld1NlcnZlclN0YXRlLnRpbWUgKyAodGhpcy5sYXRlbmN5IC8gMi4wKSA6IHRoaXMuZXN0U2VydmVyVGltZSArIGVsYXBzZWQpO1xyXG5cclxuICAgIC8vIEVzdGFibGlzaCBvdXIgc2ltdWxhdGlvbiBzdGFydGluZyB0aW1lLlxyXG4gICAgdmFyIHQgPSB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZS50aW1lLFxyXG4gICAgICBzaW1FbGFwc2VkID0gMC4wO1xyXG5cclxuICAgIC8vIEZpbHRlciBvdXQgYW55IG9sZCB1c2VyIGZyYW1lIHN0YXRlc1xyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMgPSB0aGlzLnVzZXJJbnB1dFN0YXRlcy5maWx0ZXIoZnVuY3Rpb24gKHVzZXJJbnB1dFN0YXRlKSB7XHJcbiAgICAgIHJldHVybiB1c2VySW5wdXRTdGF0ZS50aW1lID4gc2VsZi5sYXN0U2VydmVyU3RhdGUudGltZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNpbXVsYXRlIGFsbCBmcmFtZXMgdGhlIHNlcnZlciBoYXMgbm90IHlldCBwcm9jZXNzZWQuXHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgICBzaW1FbGFwc2VkID0gdXNlcklucHV0U3RhdGUudGltZSAtIHQ7XHJcbiAgICAgIHNlbGYuZ2FtZUludGVyZmFjZS5zaW11bGF0ZVVwZGF0ZSh1c2VySW5wdXRTdGF0ZS5pbnB1dCwgc2ltRWxhcHNlZCk7XHJcbiAgICAgIHQgPSB1c2VySW5wdXRTdGF0ZS50aW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2F2ZSBvdXIgY3VycmVudCBzdGF0ZVxyXG4gICAgdmFyIG5ld1VzZXJJbnB1dFN0YXRlID0gbmV3IFVzZXJJbnB1dFN0YXRlKHVzZXJJbnB1dCwgdGhpcy5lc3RTZXJ2ZXJUaW1lKTtcclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzLnB1c2gobmV3VXNlcklucHV0U3RhdGUpO1xyXG5cclxuICAgIC8vIEZpbmlzaCBzaW1sdWF0aW5nIHRoZSByZW1haW5pbmcgbWlsbGlzZWNvbmRzIGJhc2VkIG9uIHRoZSBjdXJyZW50IHVzZXIgaW5wdXQuXHJcbiAgICB0aGlzLmdhbWVJbnRlcmZhY2Uuc2ltdWxhdGVVcGRhdGUobmV3VXNlcklucHV0U3RhdGUuaW5wdXQsIHRoaXMuZXN0U2VydmVyVGltZSAtIHQpO1xyXG5cclxuICAgIGlmICh0aGlzLmVzdFNlcnZlclRpbWUgLSB0aGlzLmxhc3RTZW5kVG9TZXJ2ZXJUaW1lID4gdGhpcy5zZXJ2ZXJVcGRhdGVJbnRlcnZhbClcclxuICAgIHtcclxuICAgICAgLy8gU2VuZCBvdXIgc3RhdGUgdG8gdGhlIHNlcnZlclxyXG4gICAgICB0aGlzLmdhbWVJbnRlcmZhY2UudXBkYXRlU2VydmVyKG5ld1VzZXJJbnB1dFN0YXRlKTtcclxuXHJcbiAgICAgIHRoaXMubGFzdFNlbmRUb1NlcnZlclRpbWUgPSB0aGlzLmVzdFNlcnZlclRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgaXQsIHNvIHRocm93IGl0IGF3YXkuXHJcbiAgICB0aGlzLm5ld1NlcnZlclN0YXRlID0gdW5kZWZpbmVkO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbnRlcnZhbEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTQ1N0YXRlTWFuYWdlcjsiLCJ2YXJcclxuICBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL0dhbWVPYmplY3QnKSxcclxuICBXb3JsZCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9Xb3JsZCcpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGF5ZXInKSxcclxuICBMYXRlbmN5QW5hbHl6ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyJyksXHJcbiAgU0NTdGF0ZU1hbmFnZXIgPSByZXF1aXJlKCcuL1NlcnZlckNsaWVudFN0YXRlTWFuYWdlcicpLFxyXG4gIFVzZXJJbnB1dFByb2Nlc3NvciA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9Vc2VySW5wdXRQcm9jZXNzb3InKSxcclxuICBIYXNoQXJyYXkgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgRlBTID0gNjAsXHJcbiAgU0VSVkVSX1RJTUVPVVRfTVMgPSAxMDAwMCxcclxuICBQTEFORV9HTE9CQUxTID0gUGxheWVyLnByb3RvdHlwZS5HTE9CQUxTO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU2t5RHVlbENsaWVudCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBTa3lEdWVsQ2xpZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5yZXNldEFsbCgpO1xyXG5cclxuICBwb21lbG8ub24oJ2Rpc2Nvbm5lY3QnLCB0aGlzLnBvbWVsb19kaXNjb25uZWN0SGFuZGxlci5iaW5kKHRoaXMpKVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNreUR1ZWxDbGllbnQucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFydGVkOiBmYWxzZSxcclxuICBpbnB1dDoge30sXHJcbiAgcGxheWVyOiB1bmRlZmluZWQsXHJcbiAgZXJyb3JUZXh0OiB1bmRlZmluZWQsXHJcbiAgcGxheWVyTWV0YURhdGE6IFtdLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IHN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgc2V0IHN0YXRlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnBsYXllck1ldGFEYXRhID0gdmFsdWUucGxheWVycztcclxuICAgIHRoaXMud29ybGQuc2V0U3RhdGUodmFsdWUud29ybGQpO1xyXG4gIH0sXHJcbiAgZ2V0IHVzZXJJbnB1dCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwOiB0aGlzLmlucHV0LnVwLmlzRG93bixcclxuICAgICAgZG93bjogdGhpcy5pbnB1dC5kb3duLmlzRG93bixcclxuICAgICAgbGVmdDogdGhpcy5pbnB1dC5sZWZ0LmlzRG93bixcclxuICAgICAgcmlnaHQ6IHRoaXMuaW5wdXQucmlnaHQuaXNEb3duLFxyXG4gICAgICB0cmlnZ2VyOiB0aGlzLmlucHV0LnRyaWdnZXIuaXNEb3duXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICByZXNldEFsbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICh0aGlzLnNjU3RhdGVNYW5hZ2VyKVxyXG4gICAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnJlc2V0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMud29ybGQpXHJcbiAgICAgIHRoaXMud29ybGQuZm9yRWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3lpbmcnLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIgPSBuZXcgTGF0ZW5jeUFuYWx5emVyKCk7XHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyID0gbmV3IFNDU3RhdGVNYW5hZ2VyKDYwLCB0aGlzKTtcclxuICAgIHRoaXMudXNlcklucHV0UHJvY2Vzc29yID0gbmV3IFVzZXJJbnB1dFByb2Nlc3NvcigpO1xyXG5cclxuICAgIHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcclxuICB9LFxyXG4gIGxhdGVuY3lDaGVjazogZnVuY3Rpb24gKGNvdW50LCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpID0gMDtcclxuICAgICAgY291bnQgPSBjb3VudCB8fCAxMDtcclxuXHJcbiAgICBwaW5nKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGluZygpIHtcclxuICAgICAgc2VsZi5sYXRlbmN5QW5hbHl6ZXIuc3RhcnRUZXN0KCk7XHJcbiAgICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnBpbmcnLCBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKCkge1xyXG4gICAgICBzZWxmLmxhdGVuY3lBbmFseXplci5lbmRUZXN0KCk7XHJcbiAgICAgICgrK2kgPCBjb3VudCkgPyBwaW5nKCkgOiBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uIChyaWQpIHtcclxuICAgIHRoaXMucmlkID0gcmlkO1xyXG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmxhdGVuY3lDaGVjaygxMCwgdGhpcy5zdGFydFNlcnZlckNvbm5lY3Rpb24uYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBzdG9wOiBmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICB0aGlzLmVycm9yVGV4dCA9IHJlYXNvbjtcclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGF1c2UoKTtcclxuICB9LFxyXG4gIHN0YXJ0U2VydmVyQ29ubmVjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5sYXRlbmN5ID0gdGhpcy5sYXRlbmN5QW5hbHl6ZXIubGF0ZW5jeTtcclxuICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnN0YXJ0Jywge1xyXG4gICAgICByaWQ6IHRoaXMucmlkXHJcbiAgICB9LCB0aGlzLnNlcnZlckNvbm5lY3Rpb25fc3RhcnRlZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICAvL1NDU3RhdGVNYW5hZ2VyIEludGVyZmFjZVxyXG4gIHNpbXVsYXRlVXBkYXRlOiBmdW5jdGlvbiAodXNlcklucHV0LCBlbGFwc2VkKSB7XHJcbiAgICBlbGFwc2VkID0gIGVsYXBzZWQgLyAxMDAwLjA7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiBTRVJWRVJfVElNRU9VVF9NUylcclxuICAgIHtcclxuICAgICAgdGhpcy5zdG9wKCdTZXJ2ZXIgZGlzY29ubmVjdGVkJyk7ICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAoZWxhcHNlZCA+IDAuMilcclxuICAgICAgdGhyb3cgRXJyb3IoJ0VsYXBzZWQgaXMgd2F5eXl5IHRvbyBoaWdoIG1hbi4gRGlkIHNlcnZlciBkaXNjb25uZWN0PycpO1xyXG5cclxuICAgIHRoaXMudXNlcklucHV0UHJvY2Vzc29yLnVwZGF0ZSh1c2VySW5wdXQsIGVsYXBzZWQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMud29ybGQudXBkYXRlKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgLy9TQ1N0YXRlTWFuYWdlciBJbnRlcmZhY2VcclxuICB1cGRhdGVTZXJ2ZXI6IGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgdmFyIGtleSA9IChNYXRoLnJhbmRvbSgpICogOTk5OTk5OSkudG9TdHJpbmcoMTYpO1xyXG5cclxuICAgIHRoaXMubGF0ZW5jeUFuYWx5emVyLnN0YXJ0VGVzdChrZXkpO1xyXG5cclxuICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnVzZXJJbnB1dCcsXHJcbiAgICAgIHRoaXMudXNlcklucHV0LFxyXG4gICAgICB0aGlzLnNvY2tldF91cGRhdGVTZXJ2ZXJSZXNwb25zZUhhbmRsZXIuYmluZCh0aGlzLCBrZXkpKTtcclxuICB9LFxyXG4gIHNldHVwU3RhcnRTdGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsIHdvcmxkIHN0YXRlJywgc3RhdGUud29ybGQpO1xyXG5cclxuICAgIHRoaXMud29ybGQuc2V0U3RhdGUoc3RhdGUud29ybGQpO1xyXG5cclxuICAgIHRoaXMucGxheWVyID0gdGhpcy53b3JsZC5nZXRDaGlsZHJlbigpLmdldCh0aGlzLnVpZCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnBsYXllcilcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2cgKHN0YXRlKTtcclxuICAgICAgY29uc29sZS5sb2coJ1BsYXllciBjb3VsZCBub3QgYmUgZm91bmQgaW4gaW5jb21pbmcgc3RhdGUhJywgdGhpcy51aWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubmV3U2VydmVyU3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBsYXkoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogRXZlbnRzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzZXJ2ZXJDb25uZWN0aW9uX3N0YXJ0ZWRIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdGhpcy51aWQgPSBkYXRhLnVpZDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnU0VSVkVSIENPTk5FQ1RJT04gc3RhcnRlZCcsIGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coJ1dBSVRJTkcgZm9yIHNlcnZlciBzdGF0ZScpO1xyXG5cclxuICAgIHBvbWVsby5vbignc2VydmVyU3RhdGUnLCB0aGlzLnNvY2tldF9zZXJ2ZXJTdGF0ZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5wbGF5KCk7XHJcbiAgfSxcclxuICBzb2NrZXRfc2VydmVyU3RhdGVIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgaWYgKCF0aGlzLnNjU3RhdGVNYW5hZ2VyLmxhc3RTZXJ2ZXJTdGF0ZSlcclxuICAgICAgdGhpcy5zZXR1cFN0YXJ0U3RhdGUoZGF0YSk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubmV3U2VydmVyU3RhdGUgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc29ja2V0X3VwZGF0ZVNlcnZlclJlc3BvbnNlSGFuZGxlcjogZnVuY3Rpb24gKGtleSwgZGF0YSkge1xyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIuZW5kVGVzdChrZXkpO1xyXG4gIH0sXHJcbiAgcG9tZWxvX2Rpc2Nvbm5lY3RIYW5kbGVyOiBmdW5jdGlvbiAocmVhc29uKSBcclxuICB7XHJcbiAgICBjb25zb2xlLmxvZygnc2t5RHVlbENsaWVudDogcG9tZWxvIGRpc2Nvbm5lY3RlZC4gUmVzZXR0aW5nIGV2ZXJ5dGhpbmcuJyk7XHJcbiAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgfVxyXG59O1xyXG5cclxud2luZG93LmNsaWVudCA9IG5ldyBTa3lEdWVsQ2xpZW50KCk7XHJcbiIsIi8qIGFuIGFqYXggbG9nIGZpbGUgdGFpbGVyIC8gdmlld2VyXHJcbmNvcHlyaWdodCAyMDA3IGpvaG4gbWlubmloYW4uXHJcbiBcclxuaHR0cDovL2ZyZWVwb3NpdG9yeS5jb21cclxuIFxyXG5SZWxlYXNlZCB1bmRlciB0aGVzZSB0ZXJtc1xyXG4xLiBUaGlzIHNjcmlwdCwgYXNzb2NpYXRlZCBmdW5jdGlvbnMgYW5kIEhUTUwgY29kZSAoXCJ0aGUgY29kZVwiKSBtYXkgYmUgdXNlZCBieSB5b3UgKFwidGhlIHJlY2lwaWVudFwiKSBmb3IgYW55IHB1cnBvc2UuXHJcbjIuIFRoaXMgY29kZSBtYXkgYmUgbW9kaWZpZWQgaW4gYW55IHdheSBkZWVtZWQgdXNlZnVsIGJ5IHRoZSByZWNpcGllbnQuXHJcbjMuIFRoaXMgY29kZSBtYXkgYmUgdXNlZCBpbiBkZXJpdmF0aXZlIHdvcmtzIG9mIGFueSBraW5kLCBhbnl3aGVyZSwgYnkgdGhlIHJlY2lwaWVudC5cclxuNC4gWW91ciB1c2Ugb2YgdGhlIGNvZGUgaW5kaWNhdGVzIHlvdXIgYWNjZXB0YW5jZSBvZiB0aGVzZSB0ZXJtcy5cclxuNS4gVGhpcyBub3RpY2UgbXVzdCBiZSBrZXB0IGludGFjdCB3aXRoIGFueSB1c2Ugb2YgdGhlIGNvZGUgdG8gcHJvdmlkZSBhdHRyaWJ1dGlvbi5cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3QoKSB7XHJcbiB2YXIgcmVxdWVzdCA9IG51bGw7XHJcbiAgdHJ5IHtcclxuICAgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIH0gY2F0Y2ggKHRyeW1pY3Jvc29mdCkge1xyXG4gICB0cnkge1xyXG4gICAgIHJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQXCIpO1xyXG4gICB9IGNhdGNoIChvdGhlcm1pY3Jvc29mdCkge1xyXG4gICAgIHRyeSB7XHJcbiAgICAgIHJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG4gICAgIH0gY2F0Y2ggKGZhaWxlZCkge1xyXG4gICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgfVxyXG4gICB9XHJcbiB9XHJcbiBcclxuIGlmIChyZXF1ZXN0ID09IG51bGwpIHtcclxuICAgYWxlcnQoXCJFcnJvciBjcmVhdGluZyByZXF1ZXN0IG9iamVjdCFcIik7XHJcbiB9IGVsc2Uge1xyXG4gICByZXR1cm4gcmVxdWVzdDtcclxuIH1cclxufVxyXG4gXHJcbnZhciByZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdCgpO1xyXG5cclxud2luZG93LmdldExvZyA9IGZ1bmN0aW9uKHRpbWVyKSB7XHJcbiAgdmFyIHVybCA9IFwiaHR0cDovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAhPSAnd3d3LnNreWR1ZWwuY29tJyA/ICc6MzAwMScgOiAnJykgKyBcIi9sb2cvZ2FtZS1zZXJ2ZXIubG9nXCI7XHJcbiAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB1cGRhdGVQYWdlO1xyXG4gIHJlcXVlc3Quc2VuZChudWxsKTtcclxuICBzdGFydFRhaWwodGltZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydFRhaWwodGltZXIpIHtcclxuICBpZiAodGltZXIgPT0gXCJzdG9wXCIpIHtcclxuICAgIHN0b3BUYWlsKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHQgPSBzZXRUaW1lb3V0KFwiZ2V0TG9nKClcIiwgMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wVGFpbCgpIHtcclxuICBjbGVhclRpbWVvdXQodCk7XHJcbiAgdmFyIHBhdXNlID0gXCJUaGUgbG9nIHZpZXdlciBoYXMgYmVlbiBwYXVzZWQuIFRvIGJlZ2luIHZpZXdpbmcgYWdhaW4sIGNsaWNrIHRoZSBTdGFydCBWaWV3ZXIgYnV0dG9uLlxcblwiO1xyXG4gIGxvZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpO1xyXG4gIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGF1c2UpO1xyXG4gIGxvZ0Rpdi5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbG9nRGl2LmNoaWxkTm9kZXNbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYWdlKCkge1xyXG4gIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICB2YXIgY3VycmVudExvZ1ZhbHVlID0gcmVxdWVzdC5yZXNwb25zZVRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgIGV2YWwoY3VycmVudExvZ1ZhbHVlKTtcclxuICAgICAgbG9nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dcIik7XHJcbiAgICAgIHZhciBsb2dMaW5lID0gJyAnO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY3VycmVudExvZ1ZhbHVlLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGxvZ0xpbmUgKz0gY3VycmVudExvZ1ZhbHVlW2ldICsgXCJcXG5cIjtcclxuICAgICAgfVxyXG4gICAgICBsb2dEaXYuaW5uZXJIVE1MID0gbG9nTGluZTtcclxuICAgIH0gZWxzZVxyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yISBSZXF1ZXN0IHN0YXR1cyBpcyBcIiArIHJlcXVlc3Quc3RhdHVzKTtcclxuICB9XHJcbn0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5NdXRhdGlvbk9ic2VydmVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIGlmIChjYW5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIHZhciBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVldWVMaXN0ID0gcXVldWUuc2xpY2UoKTtcbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBxdWV1ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaGlkZGVuRGl2LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ3llcycsICdubycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIl19
