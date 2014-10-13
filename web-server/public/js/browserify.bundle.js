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
    var latTot = 0,
      tot = 0;

    this.stack.forEach(function (lat, ix, arr) {
      latTot += lat * (ix+1);
      tot += (ix+1);
    });

    var val = tot ? latTot / tot : 1;
    if (this.debug)
          console.log('LATENCY', val);

    return val;
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

    if (this.stack.length > this.maxStackLength)
      this.stack.unshift();
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
      VELOCITY_MAX: 600,
      VELOCITY_MIN: 90,
      BANK_RATE: Math.PI / 2,
      ACCELERATION_RATE: 250,
      DECELERATION_RATE: 100,
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

  this.scale.x = this.scale.y = (this.startScale * life) + 0.2;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4uanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0V4cGxvZGVzLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19SZXNwYXducy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Ntb2tlcy5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9CaXJkLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL0J1bGxldC5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGFuZVBhcnQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1Ntb2tlLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1dvcmxkLmpzIiwic2hhcmVkL2pzL2xpYi9IYXNoQXJyYXkuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9CaXJkU3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvQnVsbGV0U3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVQYXJ0U3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9TbW9rZVNwcml0ZS5qcyIsIndlYi1zZXJ2ZXIvcHVibGljL2pzL1NlcnZlckNsaWVudFN0YXRlTWFuYWdlci5qcyIsIndlYi1zZXJ2ZXIvcHVibGljL2pzL1NreUR1ZWxDbGllbnQuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9sb2dWaWV3ZXIuanMiLCIuLi8uLi8uLi8uLi8uLi91c3IvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBMaWJyYXJ5XHJcbnZhciBpc0NsaWVudCA9IHRydWU7XHJcblxyXG5yZXF1aXJlKFwiLi9nYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzXCIpO1xyXG5cclxuLy8gU2hhcmVkXHJcblxyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvbGliL0hhc2hBcnJheS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY01hbmFnZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9TbW9rZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0J1bGxldC5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYXllci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9Vc2VyQWN0aW9ucy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJTdGF0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qc1wiKTtcclxuXHJcbi8vIFNwcml0ZXNcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVQYXJ0U3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9TbW9rZVNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL0J1bGxldFNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvQmlyZFNwcml0ZS5qc1wiKTtcclxuXHJcbi8vIENsaWVudFxyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi93ZWItc2VydmVyL3B1YmxpYy9qcy9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL1NreUR1ZWxDbGllbnQuanNcIik7XHJcblxyXG4vLyBWaWV3XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL2xvZ1ZpZXdlci5qc1wiKTsiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsKXtcbi8qIVxuICogSmF2YVNjcmlwdCBJbmhlcml0YW5jZSB3aXRoIFByaXZhdGUgTWVtYmVyc1xuICogTGFyZ2VseSBiYXNlZCB1cG9uIEpvaG4gUmVzaWcncyBpbmhlcml0YW5jZSB0ZWNobmlxdWUsXG4gKiAoc2VlIGh0dHA6Ly9lam9obi5vcmcvYmxvZy9zaW1wbGUtamF2YXNjcmlwdC1pbmhlcml0YW5jZS8pXG4gKiB0aGF0IHdhcyBpbnNwaXJlZCBieSBiYXNlMiBhbmQgUHJvdG90eXBlLlxuICpcbiAqIFdvcmtzIHdpdGggYW5kIHdpdGhvdXQgbm9kZS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKlxuICogdjIuMC40LCBNYXJjZWwgUmllZ2VyLCAyMDEzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmlnYS9qY2xhc3NcbiAqIGh0dHBzOi8vbnBtanMub3JnL3BhY2thZ2UvamNsYXNzXG4gKi9cbnZhciBucyxuc0tleTtcbmlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiJiZ0eXBlb2YgcHJvY2VzcyE9PVwidW5kZWZpbmVkXCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyl7bnM9bW9kdWxlO25zS2V5PVwiZXhwb3J0c1wiO31lbHNle2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtucz13aW5kb3c7XG5uc0tleT1cIkpDbGFzc1wiO319KGZ1bmN0aW9uKGQsZil7dmFyIGI9ZFtmXTt2YXIgYT17ZXh0ZW5kYWJsZTp0cnVlLGN0b3JOYW1lOlwiaW5pdFwiLHN1cGVyTmFtZTpcIl9zdXBlclwiLGVuYWJsZVByaXZhY3k6dHJ1ZSxwcml2YXRlUGF0dGVybjovXl9fLisvLHRyYWNraW5nOnRydWUscHJpdmF0ZU5hbWU6XCJfX1wiLG1ldGhvZHNLZXk6XCJfamNNZXRob2RzX1wiLGRlcHRoS2V5OlwiX2pjRGVwdGhfXCIsY2FsbGVyRGVwdGhLZXk6XCJfamNDYWxsZXJEZXB0aF9cIn07XG52YXIgYz1mYWxzZTt2YXIgZT1mdW5jdGlvbigpe307ZS5leHRlbmQ9ZnVuY3Rpb24obSxnKXtnPWd8fHt9O2Zvcih2YXIgcSBpbiBhKXtpZihnW3FdPT09dW5kZWZpbmVkKXtnW3FdPWFbcV07fX1pZighZy5lbmFibGVQcml2YWN5KXtnLnByaXZhdGVQYXR0ZXJuPW51bGw7XG5nLnByaXZhdGVOYW1lPW51bGw7fXZhciByPXRoaXMucHJvdG90eXBlO2M9dHJ1ZTt2YXIgbz1uZXcgdGhpcygpO2M9ZmFsc2U7b1tnLmRlcHRoS2V5XT1yW2cuZGVwdGhLZXldfHwwO29bZy5kZXB0aEtleV0rKzt2YXIgaz1vW2cuZGVwdGhLZXldO3ZhciBpPXt9O3ZhciBqPXt9O1xudmFyIHM9e307Zm9yKHZhciBoIGluIG0pe2lmKG1baF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7dmFyIG49KGZ1bmN0aW9uKHQsdSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHY9dGhpc1tnLnN1cGVyTmFtZV07aWYoIWcucHJpdmF0ZVBhdHRlcm58fCFnLnByaXZhdGVQYXR0ZXJuLnRlc3QodCkpe3RoaXNbZy5zdXBlck5hbWVdPXJbdF07XG59dmFyIEQ7aWYoZy5wcml2YXRlTmFtZSl7RD10aGlzW2cucHJpdmF0ZU5hbWVdO3RoaXNbZy5wcml2YXRlTmFtZV09RHx8czt9dmFyIHksRSx4LEk7aWYoZy5wcml2YXRlUGF0dGVybil7aWYodGhpc1tnLmNhbGxlckRlcHRoS2V5XT09PXVuZGVmaW5lZCl7dGhpc1tnLmNhbGxlckRlcHRoS2V5XT1rO1xufXk9dGhpc1tnLm1ldGhvZHNLZXldO2lmKHQ9PWcuY3Rvcil7dGhpc1tnLm1ldGhvZHNLZXldPXl8fGk7Zm9yKHZhciB6IGluIGkpe2lmKCF0aGlzW2cubWV0aG9kc0tleV1bel0pe3RoaXNbZy5tZXRob2RzS2V5XVt6XT17fTt9dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdPWlbel1ba107XG52YXIgQz10aGlzW2cubWV0aG9kc0tleV1bel1ba107dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdPWZ1bmN0aW9uKCl7dmFyIEs9dGhpc1tnLnN1cGVyTmFtZV07dGhpc1tnLnN1cGVyTmFtZV09dGhpc1tnLm1ldGhvZHNLZXldW3pdW2stMV07dmFyIEo9Qy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG50aGlzW2cuc3VwZXJOYW1lXT1LO3JldHVybiBKO307fWk9dGhpc1tnLm1ldGhvZHNLZXldO31lbHNle3RoaXNbZy5tZXRob2RzS2V5XT1pO31FPXt9O2Zvcih2YXIgeiBpbiB0aGlzW2cubWV0aG9kc0tleV0pe0Vbel09dGhpc1t6XTt2YXIgRj1NYXRoLm1heC5hcHBseShNYXRoLE9iamVjdC5rZXlzKGlbel0pKTtcbnRoaXNbel09aVt6XVtGXTt9aWYoZy50cmFja2luZyl7eD17fTtmb3IodmFyIEcgaW4gail7eFtHXT10aGlzW0ddO3RoaXNbR109altHXTt9fWlmKGcudHJhY2tpbmcpe0k9T2JqZWN0LmtleXModGhpcyk7fX12YXIgQj11LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihnLnByaXZhdGVQYXR0ZXJuKXtpZihnLnRyYWNraW5nKXt2YXIgSD1PYmplY3Qua2V5cyh0aGlzKTtcbmZvcih2YXIgRyBpbiBIKXtHPUhbR107aWYoZy5wcml2YXRlUGF0dGVybi50ZXN0KEcpKXt4W0ddPXRoaXNbR107altHXT10aGlzW0ddO319Zm9yKHZhciBHIGluIEkpe0c9SVtHXTt2YXIgQT1ILmluZGV4T2YoRyk8MCYmZy5wcml2YXRlUGF0dGVybi50ZXN0KEcpO2lmKEEpe2RlbGV0ZSBqW0ddO1xuZGVsZXRlIHRoaXNbR107fX1mb3IodmFyIEcgaW4gail7dmFyIHc9dGhpc1tnLmNhbGxlckRlcHRoS2V5XTtpZih4W0ddPT09dW5kZWZpbmVkfHxrPT13KXtkZWxldGUgdGhpc1tHXTt9ZWxzZXt0aGlzW0ddPXhbR107fX19Zm9yKHZhciBHIGluIHRoaXNbZy5tZXRob2RzS2V5XSl7aWYoRVtHXT09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbR107XG59ZWxzZXt0aGlzW0ddPUVbR107fX1pZih5PT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLm1ldGhvZHNLZXldO31lbHNle3RoaXNbZy5tZXRob2RzS2V5XT15O31pZihrPT10aGlzW2cuY2FsbGVyRGVwdGhLZXldKXtkZWxldGUgdGhpc1tnLmNhbGxlckRlcHRoS2V5XTtcbn19aWYoZy5wcml2YXRlTmFtZSl7aWYoRD09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5wcml2YXRlTmFtZV07fWVsc2V7dGhpc1tnLnByaXZhdGVOYW1lXT1EO319aWYodj09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5zdXBlck5hbWVdO31lbHNle3RoaXNbZy5zdXBlck5hbWVdPXY7XG59cmV0dXJuIEI7fTt9KShoLG1baF0pO3ZhciBsPWcucHJpdmF0ZVBhdHRlcm4mJmcucHJpdmF0ZVBhdHRlcm4udGVzdChoKTtpZihsKXtpW2hdPXt9O2lbaF1ba109bjt9ZWxzZXtvW2hdPW47fX1lbHNle3ZhciBsPWcudHJhY2tpbmcmJmcucHJpdmF0ZVBhdHRlcm4mJmcucHJpdmF0ZVBhdHRlcm4udGVzdChoKTtcbmlmKGwpe2pbaF09bVtoXTt9ZWxzZXtvW2hdPW1baF07fX19ZnVuY3Rpb24gcCgpe2lmKCFjJiZ0aGlzW2cuY3Rvck5hbWVdKXt0aGlzW2cuY3Rvck5hbWVdLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt9fXAucHJvdG90eXBlPW87cC5wcm90b3R5cGUuY29uc3RydWN0b3I9cDtcbmlmKGcuZXh0ZW5kYWJsZSE9PWZhbHNlKXtwLmV4dGVuZD1hcmd1bWVudHMuY2FsbGVlO31yZXR1cm4gcDt9O2Uubm9Db25mbGljdD1mdW5jdGlvbigpe3ZhciBnPWRbZl07ZFtmXT1iO3JldHVybiBnO307ZFtmXT1lO30pKG5zLG5zS2V5KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUmVxdWlyZXNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljTWFuYWdlciA9IHJlcXVpcmUoJy4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlcicpLFxyXG4gIEpDbGFzcyA9IHJlcXVpcmUoJ2pjbGFzcycpLFxyXG4gIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2FtZU9iamVjdCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBHYW1lT2JqZWN0ID0gbW9kdWxlLmV4cG9ydHMgPSBKQ2xhc3MuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2V0UGFyZW50OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICB9LFxyXG4gIHNldENoaWxkcmVuOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRGVzZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMuX2NoaWxkcmVuID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBTZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcclxuICB9LFxyXG4gIHNldElkOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldElkOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZCB8fCAodGhpcy5faWQgPSB0aGlzLnJhbmRvbUlkKCkpO1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZC5zdGF0ZTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlbklkczogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgdmFyIHJldCA9IHt9O1xyXG5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcmV0W2NoaWxkLmdldElkKCldID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfSxcclxuICBzZXRDaGlsZHJlblN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpZHMgPSB0aGlzLmdldENoaWxkcmVuSWRzKCk7XHJcblxyXG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xyXG4gICAgICB2YXIgY2hpbGQgPSBzZWxmLmdldENoaWxkcmVuKCkuZ2V0KGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgICBpZiAoIWNoaWxkKVxyXG4gICAgICAgIHNlbGYuZ2V0Q2hpbGRyZW4oKS5hZGQoc2VsZi5uZXdDaGlsZEZyb21TdGF0ZShjaGlsZFN0YXRlKSk7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2hpbGQpID09PSAnW29iamVjdCBBcnJheV0nIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVHdvIGlkcyBhcmUgdGhlIHNhbWUhJywgY2hpbGRbMF0uZ2V0SWQoKSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoaWxkLnNldFN0YXRlKGNoaWxkU3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkZWxldGUgaWRzW2NoaWxkU3RhdGUuaWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGVzdHJveVVuZm91bmRDaGlsZHJlbk9uU3RhdGVTZXQpXHJcbiAgICAgIGZvciAodmFyIGlkIGluIGlkcylcclxuICAgICAgICB0aGlzLmRlc3Ryb3lDaGlsZEJ5SWQoaWQpO1xyXG4gIH0sXHJcbiAgZ2V0Q2hpbGRyZW5TdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICByZXR1cm4gY2hpbGQuZ2V0U3RhdGUoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0RGlydHk6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAvLyBEZXNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgdGhpcy5fZGlydHkgPSB2YWx1ZTtcclxuICAgICh0aGlzLl9kaXJ0eSAmJiB0aGlzLmdldFBhcmVudCgpKSA/IHRoaXMuZ2V0UGFyZW50KCkuc2V0RGlydHkodHJ1ZSkgOiAnJztcclxuICAgICF0aGlzLl9kaXJ0eSA/IHRoaXMuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC5zZXREaXJ0eShmYWxzZSk7XHJcbiAgICB9KSA6ICcnO1xyXG4gIH0sXHJcbiAgZ2V0RGlydHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gU2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICByZXR1cm4gdGhpcy5fZGlydHk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgcmFuZG9tSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5OTk5OTk5OTkpLnRvU3RyaW5nKDE2KTtcclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkKSB7XHJcbiAgICBpZiAoIXBhcmVudClcclxuICAgIHtcclxuICAgICAgR2FtZU9iamVjdC5wcm90b3R5cGUud29ybGQgPSBHYW1lT2JqZWN0LnByb3RvdHlwZS5yb290ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldElkKGlkKTtcclxuICAgIHRoaXMudHlwZSA9ICdHYW1lT2JqZWN0JztcclxuICAgIHRoaXMuYnVpbGRDaGlsZHJlbk9iamVjdCgpO1xyXG4gICAgdGhpcy5zZXRQYXJlbnQocGFyZW50KTtcclxuICAgIHRoaXMuc2V0RGlydHkodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmRlc3Ryb3lVbmZvdW5kQ2hpbGRyZW5PblN0YXRlU2V0ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIgPSBuZXcgQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5pdGVkPSB0cnVlO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy8gV2lwZSBvdXQgYW55IGRlc3Ryb3llZCBjaGlsZHJlbi5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuY29uY2F0KCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgaWYgKGNoaWxkLmRlc3Ryb3llZClcclxuICAgICAgICBzZWxmLmdldENoaWxkcmVuKCkucmVtb3ZlKGNoaWxkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQudXBkYXRlKGVsYXBzZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hcHBseUFsbChlbGFwc2VkKTtcclxuICB9LFxyXG4gIG5ld0NoaWxkRnJvbVN0YXRlOiBmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xyXG4gICAgdmFyIGNoaWxkID0gbmV3IEdhbWVPYmplY3QoKTtcclxuICAgIGNoaWxkLmluaXQodGhpcywgY2hpbGRTdGF0ZS5pZClcclxuICAgIGNoaWxkLnN0YXRlID0gY2hpbGRTdGF0ZTtcclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9LFxyXG4gIGRlc3Ryb3lDaGlsZEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdmFyIGNoaWxkID0gdGhpcy5nZXRDaGlsZHJlbigpLmdldChpZCk7XHJcblxyXG4gICAgaWYgKCFjaGlsZClcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gZGVzdHJveSBub24tZXhpc3RlbnQgY2hpbGQgd2l0aCBpZCcsIGlkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGlsZC5kZXN0cm95KVxyXG4gICAge1xyXG4gICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5yZW1vdmUoY2hpbGQpO1xyXG4gIH0sXHJcbiAgYnVpbGRDaGlsZHJlbk9iamVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXRDaGlsZHJlbihuZXcgSGFzaEFycmF5KFsnX2lkJywgJ3R5cGUnXSkpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICB9LFxyXG4gIHVwZGF0ZVNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgaWYgKHRoaXMuc3ByaXRlICYmIHRoaXMuZGVzdHJveWVkKVxyXG4gICAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmICghdGhpcy5zcHJpdGUpXHJcbiAgICAgICAgdGhpcy5idWlsZFNwcml0ZShwaGFzZXIpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAgICAgIHRoaXMuc3ByaXRlLnVwZGF0ZVdpdGhNb2RlbCh0aGlzKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC51cGRhdGVQaGFzZXIocGhhc2VyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3ByaXRlKHBoYXNlcik7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcbiAgfVxyXG59KTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHbG9iYWxzXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBMQVRFTkNZX0FOQUxZWkVSX0RFRkFVTFRfTUFYID0gMTA7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBMYXRlbmN5QW5hbHl6ZXIoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgTGF0ZW5jeUFuYWx5emVyID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkxhdGVuY3lBbmFseXplci5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHN0YWNrOiBbXSxcclxuICBtYXhTdGFja0xlbmd0aDogTEFURU5DWV9BTkFMWVpFUl9ERUZBVUxUX01BWCxcclxuICBsYXN0VGVzdFRpbWU6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBsYXRlbmN5KCkge1xyXG4gICAgLy8gUmV0dXJucyBhIHdlaWdodGVkIGF2ZXJhZ2UgbGF0ZW5jeS5cclxuICAgIC8vIEl0ZW0gYXQgaXggMCBoYXMgd2VpZ2h0IG9mIDEgYW5kIGl0ZW0gYXQgaXggbGVuZ3RoIGhhcyB3ZWlnaHQgb2YgbGVuZ3RoLlxyXG4gICAgdmFyIGxhdFRvdCA9IDAsXHJcbiAgICAgIHRvdCA9IDA7XHJcblxyXG4gICAgdGhpcy5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChsYXQsIGl4LCBhcnIpIHtcclxuICAgICAgbGF0VG90ICs9IGxhdCAqIChpeCsxKTtcclxuICAgICAgdG90ICs9IChpeCsxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB2YWwgPSB0b3QgPyBsYXRUb3QgLyB0b3QgOiAxO1xyXG4gICAgaWYgKHRoaXMuZGVidWcpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTEFURU5DWScsIHZhbCk7XHJcblxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9LFxyXG4gIGdldCBub3coKSB7XHJcbiAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhcnRUZXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmxhc3RUZXN0VGltZSA9IHRoaXMubm93O1xyXG4gIH0sXHJcbiAgZW5kVGVzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMubGFzdFRlc3RUaW1lO1xyXG4gICAgaWYgKHRoaXMuZGVidWcpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdMQVRFTkNZJywgdGhpcy5sYXRlbmN5KTtcclxuICAgIHRoaXMucHVzaChlbGFwc2VkKTtcclxuICB9LFxyXG4gIHB1c2g6IGZ1bmN0aW9uKGxhdGVuY3kpIHtcclxuICAgIHRoaXMuc3RhY2sucHVzaChsYXRlbmN5KTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiB0aGlzLm1heFN0YWNrTGVuZ3RoKVxyXG4gICAgICB0aGlzLnN0YWNrLnVuc2hpZnQoKTtcclxuICB9LFxyXG4gIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnN0YWNrID0gW107XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gTGF0ZW5jeUFuYWx5emVyOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVTRVJfQUNUSU9OUyA9IHtcclxuICBMRUZUX0RPV046IDB4MDAwMSxcclxuICBMRUZUX1VQOiAweDAwMDIsXHJcbiAgUklHSFRfRE9XTjogMHgwMDEwLFxyXG4gIFJJR0hUX1VQOiAweDAwMjAsXHJcbiAgVVBfRE9XTjogMHgwMTAwLFxyXG4gIFVQX1VQOiAweDAyMDAsXHJcbiAgRE9XTl9ET1dOOiAweDEwMDAsXHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IFVTRVJfQUNUSU9OUztcclxufSBlbHNlIHtcclxuICB3aW5kb3cuVVNFUl9BQ1RJT05TID0gVVNFUl9BQ1RJT05TO1xyXG59IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogVXNlcklucHV0UHJvY2Vzc29yKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVzZXJJbnB1dFByb2Nlc3NvciA9IGZ1bmN0aW9uKCkge1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblVzZXJJbnB1dFByb2Nlc3Nvci5wcm90b3R5cGUgPSB7XHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAodXNlcklucHV0LCBlbGFwc2VkLCB3b3JsZCkge1xyXG4gICAgaWYgKHVzZXJJbnB1dC5sZWZ0KVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IC13b3JsZC5wbGF5ZXIuR0xPQkFMUy5CQU5LX1JBVEU7XHJcbiAgICBlbHNlIGlmICh1c2VySW5wdXQucmlnaHQpXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gd29ybGQucGxheWVyLkdMT0JBTFMuQkFOS19SQVRFO1xyXG4gICAgZWxzZVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IDA7XHJcblxyXG4gICAgaWYgKHVzZXJJbnB1dC51cClcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gd29ybGQucGxheWVyLkdMT0JBTFMuQUNDRUxFUkFUSU9OX1JBVEU7XHJcbiAgICBlbHNlIGlmICh1c2VySW5wdXQuZG93bilcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gLXdvcmxkLnBsYXllci5HTE9CQUxTLkRFQ0VMRVJBVElPTl9SQVRFO1xyXG4gICAgZWxzZSBcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gMC4wO1xyXG5cclxuICAgIHdvcmxkLnBsYXllci50cmlnZ2VyRG93biA9IHVzZXJJbnB1dC50cmlnZ2VyO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dFByb2Nlc3NvcjsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBVc2VySW5wdXRTdGF0ZSgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBVc2VySW5wdXRTdGF0ZSA9IGZ1bmN0aW9uKGlucHV0LCB0aW1lKSB7XHJcbiAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gIHRoaXMudGltZSA9IHRpbWU7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuVXNlcklucHV0U3RhdGUucHJvdG90eXBlID0ge1xyXG4gIGlucHV0OiB1bmRlZmluZWQsXHJcbiAgdGltZTogdW5kZWZpbmVkXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dFN0YXRlOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4uL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljTWFuYWdlcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY01hbmFnZXIgPSBmdW5jdGlvbihwYXJlbnQpIHtcclxuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICB0aGlzLmNoYXJhY3RlcmlzdGljcyA9IG5ldyBIYXNoQXJyYXkoWyduYW1lJ10pO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgY2FjaGU6IHt9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhZGQ6IGZ1bmN0aW9uIChjaGFyYWN0ZXJpc3RpYykge1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MuYWRkKGNoYXJhY3RlcmlzdGljKTtcclxuICB9LFxyXG4gIGFwcGx5QWxsOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5jYWNoZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuY2hhcmFjdGVyaXN0aWNzLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGFyYWN0ZXJpc3RpYykge1xyXG4gICAgICBjaGFyYWN0ZXJpc3RpYy5hcHBseVRvKHNlbGYucGFyZW50LCBlbGFwc2VkLCBzZWxmLmNhY2hlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljTWFuYWdlcjsiLCJ2YXIgQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcyA9IHJlcXVpcmUoJy4vQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogTWF0aCBCdWxsc2hpdFxyXG4gKiBQcm9vZiBoZXJlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg0OTIxMS9zaG9ydGVzdC1kaXN0YW5jZS1iZXR3ZWVuLWEtcG9pbnQtYW5kLWEtbGluZS1zZWdtZW50XHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIHNxcih4KSB7IHJldHVybiB4ICogeCB9XHJcbmZ1bmN0aW9uIGRpc3QyKHYsIHcpIHsgcmV0dXJuIHNxcih2LnggLSB3LngpICsgc3FyKHYueSAtIHcueSkgfVxyXG5mdW5jdGlvbiBkaXN0VG9TZWdtZW50U3F1YXJlZChwLCB2LCB3KSB7XHJcbiAgdmFyIGwyID0gZGlzdDIodiwgdyk7XHJcbiAgaWYgKGwyID09IDApIHJldHVybiBkaXN0MihwLCB2KTtcclxuICB2YXIgdCA9ICgocC54IC0gdi54KSAqICh3LnggLSB2LngpICsgKHAueSAtIHYueSkgKiAody55IC0gdi55KSkgLyBsMjtcclxuICBpZiAodCA8IDApIHJldHVybiBkaXN0MihwLCB2KTtcclxuICBpZiAodCA+IDEpIHJldHVybiBkaXN0MihwLCB3KTtcclxuICByZXR1cm4gZGlzdDIocCwgeyB4OiB2LnggKyB0ICogKHcueCAtIHYueCksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdi55ICsgdCAqICh3LnkgLSB2LnkpIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3RUb1NlZ21lbnQocCwgdiwgdykgeyByZXR1cm4gTWF0aC5zcXJ0KGRpc3RUb1NlZ21lbnRTcXVhcmVkKHAsIHYsIHcpKTsgfVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAvLyBUaGVzZSBhcmUgdGhlIGtleXMgb2YgdGhlIHdvcmxkIG9iamVjdHMgdGhhdCB0aGUgdGhpcyBvYmplY3QgY2FuIGNvbGxpZGUgd2l0aCFcclxuICB0aGlzLm9wdGlvbnMua2V5cyA9IHRoaXMub3B0aW9ucy5rZXlzIHx8IFsncGxheWVyJywgJ2JpcmQnXTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19Db2xsaWRlcy5wcm90b3R5cGUgPSB7XHJcbiAgdGVtcFBoeXNpY3M6IG5ldyBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzKCksXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBcclxuICAgIHRoaXMudGVtcFBoeXNpY3Mub3B0aW9ucyA9IHRhcmdldC53b3JsZDtcclxuXHJcbiAgICB2YXIgdGFyZ2V0cyA9IHRhcmdldC53b3JsZC5nZXRDaGlsZHJlbigpLmdldEFsbCh0aGlzLm9wdGlvbnMua2V5cyksXHJcbiAgICAgIHN0YXJ0ID0gdGhpcy50ZW1wUGh5c2ljcy5hcHBseVRlbXAodGFyZ2V0LCAwKSxcclxuICAgICAgZW5kID0gdGhpcy50ZW1wUGh5c2ljcy5hcHBseVRlbXAodGFyZ2V0LCBlbGFwc2VkKTtcclxuXHJcbiAgICB0YXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgdmFyIHNob3J0ZXN0RGlzdGFuY2UgPSBkaXN0VG9TZWdtZW50KHQsIHN0YXJ0LCBlbmQpO1xyXG4gICAgICBpZiAoc2hvcnRlc3REaXN0YW5jZSA8ICh0YXJnZXQucmFkaXVzICogMikgKyAodC5yYWRpdXMgKiAyKSlcclxuICAgICAge1xyXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuY2FsbGJhY2spXHJcbiAgICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2suYXBwbHkobnVsbCwgW3QsIHNob3J0ZXN0RGlzdGFuY2VdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXM7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB2YXIgZGVzdHJveSA9IHRhcmdldC54IDwgMCB8fCB0YXJnZXQueCA+IHRoaXMub3B0aW9ucy53aWR0aCB8fCB0YXJnZXQueSA8IDAgfHwgdGFyZ2V0LnkgPiB0aGlzLm9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgaWYgKGRlc3Ryb3kpXHJcbiAgICAgIHRhcmdldC5kZXN0cm95KCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbjsiLCJ2YXIgUGxhbmVQYXJ0ID0gcmVxdWlyZSgnLi4vZ2FtZU9iamVjdHMvUGxhbmVQYXJ0Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19FeHBsb2RlcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19FeHBsb2RlcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX0V4cGxvZGVzLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIGlmICh0eXBlb2YgaXNDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IGlzQ2xpZW50KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKHRhcmdldC5oZWFsdGggPD0gMCAmJiAhdGFyZ2V0LmV4cGxvZGVkKVxyXG4gICAge1xyXG4gICAgICB0YXJnZXQuZXhwbG9kZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmV4cGxvZGUodGFyZ2V0KTtcclxuICAgICAgdGFyZ2V0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGV4cGxvZGU6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKVxyXG4gICAge1xyXG4gICAgICB2YXIgcGFydCA9IG5ldyBQbGFuZVBhcnQodGFyZ2V0LndvcmxkLCB0YXJnZXQuZ2V0SWQoKSArICdfcGFydCcgKyBpLCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGFyZ2V0LnZlbG9jaXR5LCBpKTtcclxuICAgICAgdGFyZ2V0LndvcmxkLmdldENoaWxkcmVuKCkuYWRkKHBhcnQpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX0V4cGxvZGVzOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1BoeXNpY3MoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX1BoeXNpY3MucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIHJlcyA9IHRoaXMuYXBwbHlUZW1wKHRhcmdldCwgZWxhcHNlZCk7XHJcbiAgICB0YXJnZXQueCA9IHJlcy54O1xyXG4gICAgdGFyZ2V0LnkgPSByZXMueTtcclxuICAgIHRhcmdldC52ZWxvY2l0eSA9IHJlcy52ZWxvY2l0eTtcclxuICAgIHRhcmdldC5hbmdsZSA9IHJlcy5hbmdsZTtcclxuICB9LFxyXG4gIGFwcGx5VGVtcDogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCkge1xyXG4gICAgdmFyIHJlcyA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGFyZ2V0LnZlbG9jaXR5ID09ICd1bmRlZmluZWQnKVxyXG4gICAgICB0aHJvdyBFcnJvcignVGFyZ2V0IHZlbG9jaXR5IGlzIHVuZGVmaW5lZCBmb3IgJywgdGFyZ2V0KTtcclxuICAgIFxyXG4gICAgdmFyIHYgPSB0YXJnZXQudmVsb2NpdHk7XHJcbiAgICBcclxuICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoJ2FjY2VsZXJhdGVyJykpXHJcbiAgICAgIHYgPSB0YXJnZXQudmVsb2NpdHkgKyAodGFyZ2V0LmFjY2VsZXJhdGVyICogZWxhcHNlZCk7XHJcblxyXG4gICAgcmVzLnZlbG9jaXR5ID0gdiA+IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NQVggPyB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUFYIDogKHYgPCB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUlOID8gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01JTiA6IHYpO1xyXG5cclxuICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoJ2JhbmsnKSlcclxuICAgICAgcmVzLmFuZ2xlID0gdGFyZ2V0LmFuZ2xlICsgKHRhcmdldC5iYW5rICogZWxhcHNlZCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJlcy5hbmdsZSA9IHRhcmdldC5hbmdsZTtcclxuXHJcbiAgICByZXMueCA9IHRhcmdldC54ICsgTWF0aC5jb3MocmVzLmFuZ2xlKSAqIHJlcy52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcbiAgICByZXMueSA9IHRhcmdldC55ICsgTWF0aC5zaW4ocmVzLmFuZ2xlKSAqIHJlcy52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcblxyXG4gICAgaWYgKGlzTmFOKHJlcy54KSlcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgY29uc29sZS5sb2coZWxhcHNlZCk7XHJcbiAgICAgIHRocm93IEVycm9yKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Jlc3Bhd25zKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1Jlc3Bhd25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gIC8vIERlZmF1bHQgNS4wIHNlY29uZCByZXNwYXduIGlmIG5vbmUgcHJvdmlkZWRcclxuICB0aGlzLm9wdGlvbnMuUkVTUEFXTl9USU1FID0gdGhpcy5vcHRpb25zLlJFU1BBV05fVElNRSB8fCA1MDAwO1xyXG4gIC8vIERlZmF1bHQgNS4wIHNlY29uZCByZXNwYXduIGlmIG5vbmUgcHJvdmlkZWRcclxuICB0aGlzLm9wdGlvbnMuUkVTUEFXTl9MT0NBVElPTiA9IHRoaXMub3B0aW9ucy5SRVNQQVdOX0xPQ0FUSU9OIHx8ICdyYW5kb20nO1xyXG4gIHRoaXMub3B0aW9ucy5SRVNQQVdOX09SSUVOVEFUSU9OID0gdGhpcy5vcHRpb25zLlJFU1BBV05fT1JJRU5UQVRJT04gfHwgJ3JhbmRvbSc7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfUmVzcGF3bnMucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgLy8gUmVzcGF3bnMgYXJlIE9OTFkgcGVyZm9ybWVkIGJ5IHRoZSBzZXJ2ZXJcclxuICAgIGlmICh0eXBlb2YgaXNDbGllbnQgPT09ICd1bmRlZmluZWQnIHx8IGlzQ2xpZW50KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKHRhcmdldC5kZXN0cm95ZWQgJiYgIXRhcmdldC5yZXNwYXduaW5nKVxyXG4gICAge1xyXG4gICAgICBzZXRUaW1lb3V0KHRoaXMucmVzcGF3bkhhbmRsZXIuYmluZCh0aGlzLCB0YXJnZXQpLCB0aGlzLm9wdGlvbnMuUkVTUEFXTl9USU1FKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlc3Bhd25IYW5kbGVyOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICB0YXJnZXQucmVzcGF3bigpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1Jlc3Bhd25zOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdGFyZ2V0LnggPSB0YXJnZXQueCA8IDAgPyB0aGlzLm9wdGlvbnMud2lkdGggOiB0YXJnZXQueDtcclxuICAgIHRhcmdldC54ID0gdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggPyB0YXJnZXQueCAlIHRoaXMub3B0aW9ucy53aWR0aCA6IHRhcmdldC54O1xyXG4gICAgdGFyZ2V0LnkgPSB0YXJnZXQueSA8IDAgPyB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGFyZ2V0Lnk7XHJcbiAgICB0YXJnZXQueSA9IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodCA/IHRhcmdldC55ICUgdGhpcy5vcHRpb25zLmhlaWdodCA6IHRhcmdldC55O1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nOyIsInZhciBCdWxsZXQgPSByZXF1aXJlKCcuLi9nYW1lT2JqZWN0cy9CdWxsZXQnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gIHRoaXMub3B0aW9ucy5maXJlUmF0ZSA9IG9wdGlvbnMuZmlyZVJhdGUgfHwgNTAuMDtcclxuICB0aGlzLm9wdGlvbnMuZmlyZVZlbG9jaXR5ID0gb3B0aW9ucy5maXJlVmVsb2NpdHkgfHwgNzAwLjA7XHJcbiAgLy8gQnVsbGV0cyBuZWVkIHRvIHN0YXJ0ICdhaGVhZCcgb2YgdGVoIG9iamVjdCBmaXJpbmcgdGhlbSBhIGxpdHRsZS5cclxuICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgfHwgMzA7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgbmV4dEJ1bGxldFRpbWU6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGZpcmU6IGZ1bmN0aW9uICh0YXJnZXQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSlcclxuICB7XHJcbiAgICBpZiAodGFyZ2V0LmFtbW8gPD0gMClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0YXJnZXQsIHVuZGVmaW5lZCwgeCArIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy5vZmZzZXQsIHkgKyBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLm9wdGlvbnMub2Zmc2V0LCBhbmdsZSwgdmVsb2NpdHkpO1xyXG4gICAgdGFyZ2V0LmdldENoaWxkcmVuKCkuYWRkKGJ1bGxldCk7XHJcbiAgICB0YXJnZXQuYW1tby0tO1xyXG4gICAgdGhpcy5uZXh0QnVsbGV0VGltZSA9IHRoaXMubm93ICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG4gIH0sXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIGlmICghdGhpcy5uZXh0QnVsbGV0VGltZSlcclxuICAgICAgdGhpcy5uZXh0QnVsbGV0VGltZSA9IHRoaXMubm93ICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG5cclxuICAgIGlmICh0YXJnZXQudHJpZ2dlckRvd24pXHJcbiAgICB7XHJcbiAgICAgIHZhciB0ID0gdGhpcy5uZXh0QnVsbGV0VGltZSArIHRoaXMub3B0aW9ucy5maXJlUmF0ZTtcclxuICAgICAgXHJcbiAgICAgIHdoaWxlICh0aGlzLm5vdyA+IHRoaXMubmV4dEJ1bGxldFRpbWUpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmZpcmUodGFyZ2V0LCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGhpcy5vcHRpb25zLmZpcmVWZWxvY2l0eSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzOyIsInZhciBTbW9rZSA9IHJlcXVpcmUoJy4uL2dhbWVPYmplY3RzL1Ntb2tlJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19TbW9rZXMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU21va2VzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU21va2VzLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIHRoaXMuYXR0ZW1wdFNtb2tlRHJvcCh0YXJnZXQsIGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgYXR0ZW1wdFNtb2tlRHJvcDogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGY9IHRoaXM7XHJcbiAgICAvLyBTbW9rZSBkcm9wcyBhcmUgT05MWSBwZXJmb3JtZWQgYnkgdGhlIHNlcnZlclxyXG4gICAgaWYgKHR5cGVvZiBpc0NsaWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNDbGllbnQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAoKGlzTmFOKHRoaXMub3B0aW9ucy5TTU9LRV9TVEFSVF9IRUFMVEgpIHx8IHRhcmdldC5oZWFsdGggPCB0aGlzLm9wdGlvbnMuU01PS0VfU1RBUlRfSEVBTFRIKSAmJiB0YXJnZXQuc21va2VzIDwgdGhpcy5vcHRpb25zLlNNT0tFX01BWClcclxuICAgIHtcclxuICAgICAgdmFyIGNvbXBhcmUgPSBpc05hTih0aGlzLm9wdGlvbnMuU01PS0VfU1RBUlRfSEVBTFRIKSA/IDEuMCA6IHRhcmdldC5oZWFsdGgsXHJcbiAgICAgICAgc21va2VEcm9wID0gKE1hdGgucmFuZG9tKCkgKiBjb21wYXJlKSA8IHRoaXMub3B0aW9ucy5TTU9LRV9USFJFU0hPTEQ7XHJcblxyXG4gICAgICBpZiAoc21va2VEcm9wKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIHNtb2tlID0gbmV3IFNtb2tlKHRhcmdldCwgJ3Ntb2tlJyArIHRhcmdldC5yYW5kb21JZCgpLCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGhpcy5zbW9rZUZhZGVIYW5kbGVyLmJpbmQodGhpcywgdGFyZ2V0KSk7XHJcbiAgICAgICAgdGFyZ2V0LnNtb2tlcysrO1xyXG4gICAgICAgIHRhcmdldC53b3JsZC5nZXRDaGlsZHJlbigpLmFkZChzbW9rZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHNtb2tlRmFkZUhhbmRsZXI6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIHRhcmdldC5zbW9rZXMtLTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19TbW9rZXM7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBCaXJkKClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG52YXIgQmlyZCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFByb3BlcnRpZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgIGhlYWx0aDogdGhpcy5oZWFsdGgsXG4gICAgfTtcbiAgfSxcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuX2lkKVxuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGUgYmlyZFxcJ3MgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnggPSB2YWx1ZS54O1xuICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xuICAgIHRoaXMuc2NhbGUgPSB2YWx1ZS5zY2FsZTtcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xuICAgIHRoaXMuaGVhbHRoID0gdmFsdWUuaGVhbHRoO1xuICB9LFxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogTWV0aG9kc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQpIHtcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XG5cbiAgICB0aGlzLnR5cGUgPSAnYmlyZCc7XG5cbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLnJhZGl1cyA9IDM7XG5cbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy53b3JsZC53aWR0aDtcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy53b3JsZC5oZWlnaHQ7XG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB0aGlzLmJhbmsgPSB0aGlzLnJhbmRvbWl6ZWRCYW5rKCk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDI1ICsgTWF0aC5yYW5kb20oKSAqIDEwO1xuICAgIHRoaXMuc2NhbGUgPSAoTWF0aC5yYW5kb20oKSAqIDAuNCkgKyAwLjE7XG5cbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcblxuICAgIHRoaXMuR0xPQkFMUyA9IHtcbiAgICAgIFZFTE9DSVRZX01BWDogQmlyZC52ZWxvY2l0eSxcbiAgICAgIFZFTE9DSVRZX01JTjogQmlyZC52ZWxvY2l0eSxcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZycpKSh0aGlzLndvcmxkKSk7XG4gICAgLy90aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19FeHBsb2RlcycpKSh0aGlzLndvcmxkKSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcbiAgICBcbiAgICAvLyBUT0RPOiBlbmNhcHN1bGF0ZSBiaXJkIEFJXG4gICAgXG4gICAgLy8gYmlyZHMgaGF2ZSBhIDEvMjAwIGNoYW5jZSBvZiBjaGFuZ2luZyB0aGUgYmFuayBldmVyeSBmcmFtZVxuICAgIGlmKE1hdGgucmFuZG9tKCkgPCAwLjAwNSlcbiAgICAgIHRoaXMuYmFuayA9IHRoaXMucmFuZG9taXplZEJhbmsoKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQuYmlyZCgwLCAwKTtcbiAgfSxcbiAgcmFuZG9taXplZEJhbms6IGZ1bmN0aW9uKCkge1xuICAgIC8vIHZhbHVlIGluIHRoZSByYW5nZSBbLTEuMCwgMS4wXSBcbiAgICB2YXIgYmFua0ZhY3RvciA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIuMDtcbiAgICAvLyB0aGUgbWF4aW11bSBiYW5rIGFuZ2xlIFxuICAgIHZhciBiYW5rTWFnbml0dWRlID0gTWF0aC5QSSAvIDIuMDtcbiAgICAvLyBzY2FsZSB0aGUgbWFnbml0dWRlIGJ5IHRoZSByYW5kb21pemVkIGZhY3RvclxuICAgIHJldHVybiBiYW5rRmFjdG9yICogYmFua01hZ25pdHVkZTsgXG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5zcHJpdGUpXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xuICB9XG59KTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gQmlyZDsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJ1bGxldCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBCdWxsZXQgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxyXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcclxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1c1xyXG4gICAgfTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBidWxsZXQgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xyXG4gICAgdGhpcy55ID0gdmFsdWUueTtcclxuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcclxuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkLCB4LCB5LCBhbmdsZSwgdmVsb2NpdHkpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcclxuXHJcbiAgICB0aGlzLkdMT0JBTFMgPSB7XHJcbiAgICAgIFZFTE9DSVRZX01BWDogMTAwMDAwLFxyXG4gICAgICBWRUxPQ0lUWV9NSU46IDBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucmFkaXVzID0gMjtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAnYnVsbGV0JztcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19Db2xsaWRlcycpKSh7Y2FsbGJhY2s6IHRoaXMuY29sbGlkZUhhbmRsZXIuYmluZCh0aGlzKX0pKTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuJykpKHRoaXMud29ybGQpKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYXBwbHlBbGwoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLmJ1bGxldCgwLCAwKTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgfSxcclxuICBjb2xsaWRlSGFuZGxlcjogZnVuY3Rpb24gKHRhcmdldCwgZGlzdGFuY2UpIHtcclxuICAgIGlmICh0YXJnZXQuaGl0KVxyXG4gICAgICB0YXJnZXQuaGl0KHRoaXMsIGRpc3RhbmNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQnVsbGV0OyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUGxhbmVQYXJ0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFBsYW5lUGFydCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgIHRpbWVTdGFydCA6IHRoaXMudGltZVN0YXJ0LFxyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxyXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXHJcbiAgICAgIHNtb2tlczogdGhpcy5zbW9rZXMsXHJcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxyXG4gICAgICBpbmRleDogdGhpcy5pbmRleFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBQbGFuZVBhcnQgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xyXG4gICAgdGhpcy55ID0gdmFsdWUueTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSB2YWx1ZS5kdXJhdGlvbjtcclxuICAgIHRoaXMudGltZVN0YXJ0ID0gdmFsdWUudGltZVN0YXJ0O1xyXG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcclxuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcclxuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XHJcbiAgICB0aGlzLnNtb2tlcyA9IHZhbHVlLnNtb2tlcztcclxuICAgIHRoaXMuaW5kZXggPSB2YWx1ZS5pbmRleDtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCwgeCwgeSwgYW5nbGUsIHZlbG9jaXR5LCBpbmRleCkge1xyXG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xyXG5cclxuICAgIHRoaXMuR0xPQkFMUyA9IHtcclxuICAgICAgVkVMT0NJVFlfTUFYOiA2MDAsXHJcbiAgICAgIFZFTE9DSVRZX01JTjogMCxcclxuICAgICAgU01PS0VfTUFYOiA1LFxyXG4gICAgICBTTU9LRV9TVEFSVF9IRUFMVEg6IE5hTixcclxuICAgICAgU01PS0VfVEhSRVNIT0xEOiAzXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGltZVN0YXJ0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSAoTWF0aC5yYW5kb20oKSAqIDMuMCArIDEuMCkgKiAxMDAwLjA7XHJcbiAgICB0aGlzLmJhbmsgPSAtMSArIChNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLmFjY2VsZXJhdG9yID0gMDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgdGhpcy5zbW9rZXMgPSAwO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHRoaXMuc3ByaXRlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdwbGFuZXBhcnQnO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TbW9rZXMnKSkodGhpcy5HTE9CQUxTKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6ZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xyXG5cclxuICAgIHZhciBlbGFwc2VkID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRoaXMudGltZVN0YXJ0LFxyXG4gICAgICByYXRpbyA9IDEuMCAtIChlbGFwc2VkIC8gdGhpcy5kdXJhdGlvbik7XHJcblxyXG4gICAgaWYgKHJhdGlvIDwgMC4xKVxyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9LFxyXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5fc3VwZXIocGhhc2VyKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLnBsYW5lUGFydCh0aGlzLngsIHRoaXMueSwgdGhpcy5pbmRleCk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaylcclxuICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhbmVQYXJ0OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBSZXF1aXJlbWVudHNcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKSxcbiAgQnVsbGV0ID0gcmVxdWlyZSgnLi9CdWxsZXQnKSxcbiAgU21va2UgPSByZXF1aXJlKCcuL1Ntb2tlJyksXG4gIHBsYXllckNvdW50ID0gMDtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFBsYXllcigpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudmFyIFBsYXllciA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFByb3BlcnRpZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxuICAgICAgcmV0dXJuIHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXG4gICAgICBhY2NlbGVyYXRlcjogdGhpcy5hY2NlbGVyYXRlcixcbiAgICAgIHR1cm46IHRoaXMudHVybixcbiAgICAgIGFjY2VsOiB0aGlzLmFjY2VsLFxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXG4gICAgICBoZWFsdGg6IHRoaXMuaGVhbHRoLFxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICBhbW1vOiB0aGlzLmFtbW8sXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgc21va2VzOiB0aGlzLnNtb2tlcyxcbiAgICAgIGRlc3Ryb3llZDogdGhpcy5kZXN0cm95ZWQsXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlblN0YXRlKCksXG4gICAgICBraWxsczogdGhpcy5raWxscyxcbiAgICAgIGRlYXRoczogdGhpcy5kZWF0aHNcbiAgICB9O1xuICB9LFxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGUgcGxhbmUgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnVpZCA9IHZhbHVlLnVpZDtcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xuICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xuICAgIHRoaXMuaGVhbHRoID0gdmFsdWUuaGVhbHRoO1xuICAgIHRoaXMuYWNjZWxlcmF0ZXIgPSB2YWx1ZS5hY2NlbGVyYXRlcjtcbiAgICB0aGlzLmFtbW8gPSB2YWx1ZS5hbW1vO1xuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xuICAgIHRoaXMuc21va2VzID0gdmFsdWUuc21va2VzO1xuICAgIGlmICh2YWx1ZS5kZXN0cm95ZWQgJiYgIXRoaXMuZGVzdHJveWVkKVxuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB2YWx1ZS5kZXN0cm95ZWQ7XG4gICAgdGhpcy5raWxscyA9IHZhbHVlLmtpbGxzO1xuICAgIHRoaXMuZGVhdGhzID0gdmFsdWUuZGVhdGhzO1xuXG4gICAgdGhpcy5zZXRDaGlsZHJlblN0YXRlKHZhbHVlLmNoaWxkcmVuKTtcbiAgfSxcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIE1ldGhvZHNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGluaXQ6IGZ1bmN0aW9uKHBhcmVudCwgaWQsIHVpZCkge1xuICAgIGNvbnNvbGUubG9nKCdJbml0aW5nIHBsYXllcicsIHRoaXMudWlkKTtcblxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcblxuICAgIHRoaXMudWlkID0gdWlkO1xuXG4gICAgdGhpcy50eXBlID0gJ3BsYXllcic7XG5cbiAgICB0aGlzLkdMT0JBTFMgPSB7XG4gICAgICBWRUxPQ0lUWV9NQVg6IDYwMCxcbiAgICAgIFZFTE9DSVRZX01JTjogOTAsXG4gICAgICBCQU5LX1JBVEU6IE1hdGguUEkgLyAyLFxuICAgICAgQUNDRUxFUkFUSU9OX1JBVEU6IDI1MCxcbiAgICAgIERFQ0VMRVJBVElPTl9SQVRFOiAxMDAsXG4gICAgICBTTU9LRV9NQVg6IDIwLFxuICAgICAgU01PS0VfU1RBUlRfSEVBTFRIOiA2MCxcbiAgICAgIFNNT0tFX1RIUkVTSE9MRDogNVxuICAgIH07XG5cbiAgICB0aGlzLmJ1bGxldFByb3BzID0ge1xuICAgICAgZmlyZVJhdGU6IDEwMCxcbiAgICAgIGZpcmVWZWxvY2l0eTogNTAwXG4gICAgfTtcblxuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA0MDA7XG4gICAgdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLmtpbGxzID0gMDtcbiAgICB0aGlzLmRlYXRocyA9IDA7XG4gICAgdGhpcy5hY2NlbGVyYXRlciA9IDA7XG4gICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgdGhpcy5hbW1vID0gMTAwMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy5HTE9CQUxTLlZFTE9DSVRZX01JTjtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgIHRoaXMucmFkaXVzID0gMTU7XG5cbiAgICB0aGlzLnNtb2tlcyA9IDA7XG5cbiAgICB0aGlzLnRyaWdnZXJEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU21va2VzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcnKSkodGhpcy53b3JsZCkpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMnKSkodGhpcy5idWxsZXRQcm9wcykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0V4cGxvZGVzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Jlc3Bhd25zJykpKHRoaXMuR0xPQkFMUykpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgdGhpcy5fc3VwZXIoZWxhcHNlZCk7XG5cbiAgICB0aGlzLmJ1bGxldFByb3BzLmZpcmVWZWxvY2l0eSA9IDUwMC4wICsgdGhpcy52ZWxvY2l0eTtcbiAgfSxcbiAgcmVzcGF3bjogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdSZXNwYXduaW5nIHBsYXllcicsIHRoaXMudWlkKTtcblxuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA0MDA7XG4gICAgdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gMDtcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICB0aGlzLmFtbW8gPSAxMDAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLkdMT0JBTFMuVkVMT0NJVFlfTUlOO1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdGhpcy5yYWRpdXMgPSAxNTtcblxuICAgIHRoaXMuc21va2VzID0gMDtcblxuICAgIHRoaXMuZXhwbG9kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy53b3JsZC5nZXRDaGlsZHJlbigpLmFkZCh0aGlzKTtcbiAgfSxcbiAgdXBkYXRlUGhhc2VyOiBmdW5jdGlvbiAocGhhc2VyKSB7XG4gICAgdGhpcy5fc3VwZXIocGhhc2VyKTtcblxuICAgIHRoaXMuc3ByaXRlLmRpc3BsYXlTdGF0dXNSaW5nKHRoaXMudWlkID09IHdpbmRvdy5jbGllbnQudWlkLCB0aGlzLmhlYWx0aCk7XG4gIH0sXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLnBsYW5lKDAsIDApO1xuICB9LFxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcbiAgICBidWxsZXQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFkZChidWxsZXQpO1xuICAgIHJldHVybiBidWxsZXQ7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3N1cGVyKCk7XG5cbiAgICB0aGlzLmJ1bGxldHMgPSBbXTtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEZXN0cm95aW5nIHBsYW5lIHNwcml0ZScsIHRoaXMudWlkKTtcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XG4gICAgfVxuICB9LFxuICBoaXQ6IGZ1bmN0aW9uIChwcm9qZWN0aWxlLCBkaXN0YW5jZSkge1xuICAgIGlmIChwcm9qZWN0aWxlLmdldFBhcmVudCgpID09IHRoaXMpXG4gICAgICByZXR1cm47XG4gICAgXG4gICAgdGhpcy5oZWFsdGggLT0gMSAqIChwcm9qZWN0aWxlLnZlbG9jaXR5IC8gMTAwMC4wKSAqIE1hdGgubWF4KDE1IC0gZGlzdGFuY2UsIDEpO1xuICAgIHRoaXMuaGVhbHRoID0gdGhpcy5oZWFsdGggPCAwID8gMCA6IHRoaXMuaGVhbHRoO1xuXG4gICAgaWYgKHByb2plY3RpbGUuZ2V0UGFyZW50KCkudHlwZSA9PSAncGxheWVyJyAmJiB0aGlzLmhlYWx0aCA8PSAwICYmICF0aGlzLmRlc3Ryb3llZClcbiAgICB7XG4gICAgICBwcm9qZWN0aWxlLmdldFBhcmVudCgpLmtpbGxzKys7XG4gICAgICB0aGlzLmRlYXRocysrO1xuICAgIH1cbiAgfVxufSk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNtb2tlKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFNtb2tlID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcclxuICAgICAgdGltZVN0YXJ0IDogdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXHJcbiAgICAgIGJhbms6IHRoaXMuYmFuayxcclxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHlcclxuICAgIH07XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGUgU21va2UgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xyXG4gICAgdGhpcy55ID0gdmFsdWUueTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSB2YWx1ZS5kdXJhdGlvbjtcclxuICAgIHRoaXMudGltZVN0YXJ0ID0gdmFsdWUudGltZVN0YXJ0O1xyXG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcclxuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcclxuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQsIHgsIHksIGFuZ2xlLCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xyXG5cclxuICAgIHRoaXMuR0xPQkFMUyA9IHtcclxuICAgICAgVkVMT0NJVFlfTUFYOiA2MDAsXHJcbiAgICAgIFZFTE9DSVRZX01JTjogMFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRpbWVTdGFydCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gKE1hdGgucmFuZG9tKCkgKiAyLjAgKyAxLjApICogMTAwMC4wO1xyXG4gICAgdGhpcy5iYW5rID0gLTEgKyAoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XHJcbiAgICB0aGlzLmFjY2VsZXJhdG9yID0gMDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdzbW9rZSc7XHJcblxyXG4gICAgLy90aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOmZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBoYXNlcik7XHJcblxyXG4gICAgdmFyIGVsYXBzZWQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHJhdGlvID0gMS4wIC0gKGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRMaWZlKHJhdGlvKTtcclxuXHJcbiAgICBpZiAocmF0aW8gPCAwLjEpXHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5zbW9rZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaylcclxuICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gU21va2U7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0JyksXHJcbiAgQmlyZCA9IHJlcXVpcmUoJy4vQmlyZCcpLFxyXG4gIFNtb2tlID0gcmVxdWlyZSgnLi9TbW9rZScpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyksXHJcbiAgUGxhbmVQYXJ0ID0gcmVxdWlyZSgnLi9QbGFuZVBhcnQnKSxcclxuICBIYXNoQXJyYXkgPSByZXF1aXJlKCcuLi9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCaXJkKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFdvcmxkID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzZXRTdGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpXHJcbiAgICAgIGlmIChrZXkgIT0gJ2NoaWxkcmVuJylcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZVtrZXldO1xyXG5cclxuICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKSlcclxuICAgICAgdGhpcy5zZXRDaGlsZHJlblN0YXRlKHZhbHVlLmNoaWxkcmVuKTtcclxuICB9LFxyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgdGlsZVdpZHRoOiB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgdGlsZUhlaWdodDogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICB0aWxlczogdGhpcy50aWxlcyxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlblN0YXRlKClcclxuICAgIH07XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1dvcmxkIGluaXQhJyk7XHJcbiAgICB0aGlzLnR5cGUgPSAnd29ybGQnO1xyXG4gICAgdGhpcy5wbGF5ZXJzID0gbmV3IEhhc2hBcnJheShbJ19pZCcsICd1aWQnLCAndHlwZSddKTtcclxuICAgIHRoaXMuX3N1cGVyKG51bGwsICdyb290Jyk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICBpZiAoIWVsYXBzZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgICAgIFxyXG4gICAgdGhpcy5fc3VwZXIoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBidWlsZENoaWxkcmVuT2JqZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldENoaWxkcmVuKG5ldyBIYXNoQXJyYXkoWydfaWQnLCAndWlkJywgJ3R5cGUnXSkpO1xyXG4gIH0sXHJcbiAgbmV3Q2hpbGRGcm9tU3RhdGU6IGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICB2YXIgY2hpbGQ7XHJcblxyXG4gICAgaWYgKGNoaWxkU3RhdGUudHlwZSA9PSAnYmlyZCcpXHJcbiAgICAgIGNoaWxkID0gbmV3IEJpcmQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3BsYXllcicpXHJcbiAgICB7XHJcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBtYXliZSB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBjaGlsZCBhbmQgaXQgaXMgYmVpbmcgcmVzcGF3bmVkLlxyXG4gICAgICBpZiAodGhpcy5wbGF5ZXJzLmdldChjaGlsZFN0YXRlLmlkKSlcclxuICAgICAgICBjaGlsZCA9IHRoaXMucGxheWVycy5nZXQoY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkID0gbmV3IFBsYXllcih0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgICAgICB0aGlzLnBsYXllcnMuYWRkKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdzbW9rZScpXHJcbiAgICAgIGNoaWxkID0gbmV3IFNtb2tlKHRoaXMsIGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgZWxzZSBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdwbGFuZXBhcnQnKVxyXG4gICAgICBjaGlsZCA9IG5ldyBQbGFuZVBhcnQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNoaWxkU3RhdGUpO1xyXG4gICAgICB0aHJvdyBFcnJvcignQ2Fubm90IGZpZ3VyZSBvdXQgd2hhdCB0aGUgaGVsbCBhIFxcJycgKyBjaGlsZFN0YXRlLnR5cGUgKyAnXFwnIGlzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLnNldFN0YXRlKGNoaWxkU3RhdGUpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9LFxyXG4gIGRlc3Ryb3lDaGlsZEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdGhpcy5fc3VwZXIoaWQpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBXb3JsZDsiLCJ2YXIgSGFzaEFycmF5ID0gZnVuY3Rpb24oa2V5RmllbGRzLCBjYWxsYmFjaykge1xuICB0aGlzLl9tYXAgPSB7fTtcbiAgdGhpcy5fbGlzdCA9IFtdO1xuICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgdGhpcy5rZXlGaWVsZHMgPSBrZXlGaWVsZHM7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdhbGwnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfSk7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdtYXAnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9KTtcblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygnY29uc3RydWN0Jyk7XG4gIH1cbn07XG5cbkhhc2hBcnJheS5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAga2V5ID0gdGhpcy5rZXlGaWVsZHNba2V5XTtcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLmZpbmQob2JqLCBrZXkpO1xuICAgICAgICBpZiAoaW5zdCkge1xuICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0uaW5kZXhPZihvYmopICE9IC0xKSB7XG4gICAgICAgICAgICAgIC8vIENhbm5vdCBhZGQgdGhlIHNhbWUgaXRlbSB0d2ljZVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tYXBbaW5zdF0ucHVzaChvYmopO1xuICAgICAgICAgIH0gZWxzZSB0aGlzLl9tYXBbaW5zdF0gPSBbb2JqXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0LnB1c2gob2JqKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ2FkZCcsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgIH1cbiAgfSxcbiAgYWRkTWFwOiBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHRoaXMuX21hcFtrZXldID0gb2JqO1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdhZGRNYXAnLCB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBvYmo6IG9ialxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiAoISh0aGlzLl9tYXBba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB8fCB0aGlzLl9tYXBba2V5XS5sZW5ndGggIT0gMSkgPyB0aGlzLl9tYXBba2V5XSA6IHRoaXMuX21hcFtrZXldWzBdO1xuICB9LFxuICBnZXRBbGw6IGZ1bmN0aW9uKGtleXMpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGtleXMpXG4gICAgICByZXMgPSByZXMuY29uY2F0KHRoaXMuZ2V0QXNBcnJheShrZXlzW2tleV0pKTtcblxuICAgIHJldHVybiByZXM7XG4gIH0sXG4gIGdldEFzQXJyYXk6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBba2V5XSB8fCBbXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLmhhc093blByb3BlcnR5KGtleSk7XG4gIH0sXG4gIGhhc011bHRpcGxlOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwW2tleV0gaW5zdGFuY2VvZiBBcnJheTtcbiAgfSxcbiAgcmVtb3ZlQnlLZXk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZW1vdmVkID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBhcmd1bWVudHNbaV07XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLl9tYXBba2V5XS5jb25jYXQoKTtcbiAgICAgIGlmIChpdGVtcykge1xuICAgICAgICByZW1vdmVkID0gcmVtb3ZlZC5jb25jYXQoaXRlbXMpO1xuICAgICAgICBmb3IgKHZhciBqIGluIGl0ZW1zKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tqXTtcbiAgICAgICAgICBmb3IgKHZhciBpeCBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICAgICAgdmFyIGtleTIgPSB0aGlzLmZpbmQoaXRlbSwgdGhpcy5rZXlGaWVsZHNbaXhdKTtcbiAgICAgICAgICAgIGlmIChrZXkyICYmIHRoaXMuX21hcFtrZXkyXSkge1xuICAgICAgICAgICAgICB2YXIgaXggPSB0aGlzLl9tYXBba2V5Ml0uaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKGl4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwW2tleTJdLnNwbGljZShpeCwgMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGhpcy5fbWFwW2tleTJdLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5Ml07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbGlzdC5zcGxpY2UodGhpcy5fbGlzdC5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmVCeUtleScsIHJlbW92ZWQpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBpeCBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5maW5kKGl0ZW0sIHRoaXMua2V5RmllbGRzW2l4XSk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICB2YXIgaXggPSB0aGlzLl9tYXBba2V5XS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgIGlmIChpeCAhPSAtMSlcbiAgICAgICAgICAgIHRoaXMuX21hcFtrZXldLnNwbGljZShpeCwgMSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbWFwW2tleV0ubGVuZ3RoID09IDApXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbWFwW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdC5zcGxpY2UodGhpcy5fbGlzdC5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlJywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUFsbDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9sZCA9IHRoaXMuX2xpc3QuY29uY2F0KCk7XG4gICAgdGhpcy5fbWFwID0ge307XG4gICAgdGhpcy5fbGlzdCA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZScsIG9sZCk7XG4gICAgfVxuICB9LFxuICBmaW5kOiBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2JqW3BhdGhdO1xuICAgIH1cblxuICAgIHZhciBkdXAgPSBwYXRoLmNvbmNhdCgpO1xuICAgIC8vIGVsc2UgYXNzdW1lIGFycmF5LlxuICAgIHdoaWxlIChkdXAubGVuZ3RoICYmIG9iaikge1xuICAgICAgb2JqID0gb2JqW2R1cC5zaGlmdCgpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICBjbG9uZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgbiA9IG5ldyBIYXNoQXJyYXkodGhpcy5rZXlGaWVsZHMuY29uY2F0KCksIGNhbGxiYWNrID8gY2FsbGJhY2sgOiB0aGlzLmNhbGxiYWNrKTtcbiAgICBuLmFkZC5hcHBseShuLCB0aGlzLmFsbC5jb25jYXQoKSk7XG4gICAgcmV0dXJuIG47XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaEFycmF5OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJpcmRTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gQmlyZFNwcml0ZShnYW1lLCB4LCB5KSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG4gIFxyXG4gIC8vIGFkZCB0aGUgYmlyZFNwcml0ZSBcclxuICB0aGlzLmJpcmRTcHJpdGUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdiaXJkJyk7XHJcbiAgIFxyXG4gIC8vIHlvdSBjYW4ndCBzZXQgdGhlIGFuY2hvciBwb2ludCBvZiBhIGdyb3VwLCBzbyBmb3IgeCAmIHkgdG8gY29ycmVzcG9uZFxyXG4gIC8vIHRvIHRoZSBCaXJkU3ByaXRlJ3MgY2VudGVyIHdlIGhhdmUgdG8gb2Zmc2V0IGl0IG1hbnVhbGx5XHJcbiAgdGhpcy5iaXJkU3ByaXRlLnggPSAtdGhpcy5iaXJkU3ByaXRlLndpZHRoICAvIDIuMDtcclxuICB0aGlzLmJpcmRTcHJpdGUueSA9IC10aGlzLmJpcmRTcHJpdGUuaGVpZ2h0IC8gMi4wO1xyXG59O1xyXG5cclxuQmlyZFNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5CaXJkU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJpcmRTcHJpdGU7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQdWJsaWMgTWV0aG9kcyBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkJpcmRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZSAqIDU3LjI5NTc3OTU7XHJcbiAgdGhpcy5zY2FsZS54ID0gdGhpcy5zY2FsZS55ID0gbW9kZWwuc2NhbGU7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5iaXJkID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IEJpcmRTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQnVsbGV0U3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIEJ1bGxldFNwcml0ZShnYW1lLCB4LCB5KSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG4gIFxyXG4gIC8vIGFkZCB0aGUgQnVsbGV0U3ByaXRlIFxyXG4gIHRoaXMuQnVsbGV0U3ByaXRlICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYnVsbGV0Jyk7XHJcbn07XHJcblxyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJ1bGxldFNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLmJ1bGxldCA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCdWxsZXRTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUGxhbmVQYXJ0U3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIFBsYW5lUGFydFNwcml0ZShnYW1lLCB4LCB5LCBmcmFtZSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuXHJcbiAgLy8gYWRkIHRoZSBQbGFuZVBhcnRTcHJpdGUgXHJcbiAgdGhpcy5wbGFuZVBhcnRTcHJpdGUgPSB0aGlzLmNyZWF0ZSgwLCAwLCAncGxhbmVwYXJ0cycpO1xyXG4gIHRoaXMucGxhbmVQYXJ0U3ByaXRlLnggPSAtdGhpcy5wbGFuZVBhcnRTcHJpdGUud2lkdGggLyAyLjA7XHJcbiAgdGhpcy5wbGFuZVBhcnRTcHJpdGUueSA9IC10aGlzLnBsYW5lUGFydFNwcml0ZS5oZWlnaHQgLyAyLjA7XHJcbiAgLy8wIC0gcmlnaHQgd2luZ1xyXG4gIC8vMSAtIGxlZnQgd2luZ1xyXG4gIC8vMiAtIHRhaWxcclxuICAvLzMgLSBib2R5XHJcbiAgLy80IC0gZW5naW5lXHJcbiAgdGhpcy5wbGFuZVBhcnRTcHJpdGUuZnJhbWUgPSBNYXRoLm1pbihmcmFtZSwgNCk7XHJcbn07XHJcblxyXG5QbGFuZVBhcnRTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuUGxhbmVQYXJ0U3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBsYW5lUGFydFNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5QbGFuZVBhcnRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUucGxhbmVQYXJ0ID0gZnVuY3Rpb24oeCwgeSwgZnJhbWUsIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQbGFuZVBhcnRTcHJpdGUodGhpcy5nYW1lLCB4LCB5LCBmcmFtZSkpO1xyXG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGFuZSgpIFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZ1bmN0aW9uIFBsYW5lKGdhbWUsIHgsIHkpIHtcbiAgY29uc29sZS5sb2coJ05FVyBQTEFORSBTUFJJVEUnKTtcbiAgXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xuIFxuICAvLyBjb25maWd1cmUgZ3JvdXAgXG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG4gIHRoaXMuaGVhbHRoID0gMTAwO1xuICBcbiAgLy8gYWRkIHRoZSBhaXJwbGFuZSBcbiAgdGhpcy5haXJwbGFuZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2FpcnBsYW5lJyk7XG4gICBcbiAgLy8geW91IGNhbid0IHNldCB0aGUgYW5jaG9yIHBvaW50IG9mIGEgZ3JvdXAsIHNvIGZvciB4ICYgeSB0byBjb3JyZXNwb25kXG4gIC8vIHRvIHRoZSBwbGFuZSdzIGNlbnRlciB3ZSBoYXZlIHRvIG9mZnNldCBpdCBtYW51YWxseVxuICB0aGlzLmFpcnBsYW5lLnggPSAtdGhpcy5haXJwbGFuZS53aWR0aCAgLyAyLjA7XG4gIHRoaXMuYWlycGxhbmUueSA9IC10aGlzLmFpcnBsYW5lLmhlaWdodCAvIDIuMDtcblxuICAvLyBhZGQgdGhlIHN0YXR1cyByaW5nIFxuICB0aGlzLnN0YXR1c1JpbmcgPSBnYW1lLmFkZC5ncmFwaGljcygwLjAsIDAuMCwgdGhpcyk7XG59O1xuXG5QbGFuZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xuUGxhbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGxhbmU7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQdWJsaWMgTWV0aG9kcyBcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblBsYW5lLnByb3RvdHlwZS5kaXNwbGF5U3RhdHVzUmluZyA9IGZ1bmN0aW9uKGlzUGxheWVyLCBoZWFsdGgpIHtcbiAgdmFyIHJhdGlvID0gKGhlYWx0aCAvIDEwMC4wKTtcblxuICB0aGlzLnN0YXR1c1JpbmcuYWxwaGEgPSAxLjAgKiByYXRpbztcblxuICB0aGlzLnN0YXR1c1JpbmcuY2xlYXIoKTtcbiAgdGhpcy5zdGF0dXNSaW5nLmxpbmVTdHlsZSgzLjAsIDB4M2JlYjcyKTtcblxuICB0aGlzLnN0YXR1c1JpbmcuYXJjKDAsIDAsIDIwLjAsIC0oTWF0aC5QSS80KSAqIHJhdGlvLCAoTWF0aC5QSSAvIDQpICogcmF0aW8gKTsgXG5cbiAgdGhpcy5zdGF0dXNSaW5nLmxpbmVTdHlsZSgxLjAsIDB4M2JlYjcyLCAwLjIpO1xuXG4gIGlmIChpc1BsYXllcilcbiAgICB0aGlzLnN0YXR1c1JpbmcuZHJhd0NpcmNsZSgwLCAwLCAyNSk7IFxufTtcblxuUGxhbmUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHRoaXMueCA9IG1vZGVsLng7XG4gIHRoaXMueSA9IG1vZGVsLnk7XG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZSAqIDU3LjI5NTc3OTU7XG5cbiAgaWYgKG1vZGVsLmJhbmsgPCAwKVxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAyO1xuICBlbHNlIGlmIChtb2RlbC5iYW5rID4gMClcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMTtcbiAgZWxzZSBcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMDtcbn07XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBGYWN0b3J5IFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5wbGFuZSA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQbGFuZSh0aGlzLmdhbWUsIHgsIHkpKTtcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU21va2VTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gU21va2VTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICB0aGlzLmFuZ2xlID0gMzYwICogTWF0aC5yYW5kb20oKTtcclxuICB0aGlzLnN0YXJ0U2NhbGUgPSBNYXRoLnJhbmRvbSgpICsgMC4zO1xyXG4gIC8vIGFkZCB0aGUgU21va2VTcHJpdGUgXHJcbiAgdGhpcy5zbW9rZVNwcml0ZSA9IHRoaXMuY3JlYXRlKDAsIDAsICdzbW9rZScpO1xyXG4gIHRoaXMuc21va2VTcHJpdGUueCA9IC10aGlzLnNtb2tlU3ByaXRlLndpZHRoIC8gMi4wO1xyXG4gIHRoaXMuc21va2VTcHJpdGUueSA9IC10aGlzLnNtb2tlU3ByaXRlLmhlaWdodCAvIDIuMDtcclxuICB0aGlzLnNtb2tlU3ByaXRlLmZyYW1lID0gMDtcclxufTtcclxuXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNtb2tlU3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxufTtcclxuXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS5zZXRMaWZlID0gZnVuY3Rpb24gKGxpZmUpIHtcclxuICBpZiAodGhpcy5zbW9rZVNwcml0ZSlcclxuICAgIHRoaXMuc21va2VTcHJpdGUuZnJhbWUgPSBNYXRoLmZsb29yKGxpZmUgKiA0KTtcclxuXHJcbiAgdGhpcy5zY2FsZS54ID0gdGhpcy5zY2FsZS55ID0gKHRoaXMuc3RhcnRTY2FsZSAqIGxpZmUpICsgMC4yO1xyXG5cclxuICB0aGlzLmFscGhhID0gbGlmZSAqIDAuODtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuc21va2UgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU21va2VTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwidmFyIFVzZXJJbnB1dFN0YXRlID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL1VzZXJTdGF0ZScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU0NTdGF0ZU1hbmFnZXIoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU0NTdGF0ZU1hbmFnZXIgPSBmdW5jdGlvbihmcHMsIGdhbWVJbnRlcmZhY2UpIHtcclxuICB0aGlzLmdhbWVJbnRlcmZhY2UgPSBnYW1lSW50ZXJmYWNlO1xyXG4gIHRoaXMuZnJhbWVUaW1lID0gMTAwMC4wIC8gZnBzO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNDU3RhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgdXNlcklucHV0U3RhdGVzOiBbXSxcclxuICBsYXN0VXBkYXRlVGltZUVuZDogdW5kZWZpbmVkLFxyXG4gIGVzdFNlcnZlclRpbWU6IHVuZGVmaW5lZCxcclxuICBsYXN0U2VydmVyU3RhdGU6IHVuZGVmaW5lZCxcclxuICBpbnRlcnZhbElkOiB1bmRlZmluZWQsXHJcbiAgbGF0ZW5jeTogMCxcclxuICBsYXN0U2VuZFRvU2VydmVyVGltZTogMTAwMC4wIC8gMzAuMCxcclxuICAvKipcclxuICAgKiBTZW5kIGFuIHVwZGF0ZSB0byB0aGUgc2VydmVyIGV2ZXJ5IHRoaXMgc28gb2Z0ZW4uXHJcbiAgICovXHJcbiAgc2VydmVyVXBkYXRlSW50ZXJ2YWw6IDEwLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmludGVydmFsSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLmZyYW1lVGltZSk7XHJcbiAgfSxcclxuICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZClcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gIHtcclxuICAgIGlmICh0aGlzLm5ld1NlcnZlclN0YXRlICYmICF0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSlcclxuICAgICAgdGhpcy5sYXN0U2VydmVyU3RhdGUgPSB0aGlzLm5ld1NlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIEFzIGxvbmcgYXMgdGhlIHNlcnZlciBoYXMgbmV2ZXIgc2VudCB1cyBhIHN0YXRlLCB3ZSBkbyBub3RoaW5nLlxyXG4gICAgaWYgKCF0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSB8fCB0aGlzLmxhdGVuY3kgPT0gMClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgLy8gVGltZSB0aGlzIHVwZGF0ZSBzdGFydGVkXHJcbiAgICAgIHVwZGF0ZVN0YXJ0ID0gdGhpcy5ub3csXHJcbiAgICAgIC8vIFRpbWUgc2luY2Ugb3VyIGxhc3QgdXBkYXRlIGVuZGVkXHJcbiAgICAgIGVsYXBzZWQgPSB1cGRhdGVTdGFydCAtIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQsXHJcbiAgICAgIC8vIFRoZSBzdGF0ZSBvZiBhbGwgdXNlciBpbnB1dFxyXG4gICAgICB1c2VySW5wdXQgPSB0aGlzLmdhbWVJbnRlcmZhY2UudXNlcklucHV0O1xyXG5cclxuICAgIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQgPSB0aGlzLm5vdztcclxuXHJcbiAgICAvLyBTZXQgbGFzdCBzZXJ2ZXIgc3RhdGUgdG8gZWl0aGVyIHRoZSB1cGRhdGVcclxuICAgIHRoaXMubGFzdFNlcnZlclN0YXRlID0gdGhpcy5uZXdTZXJ2ZXJTdGF0ZSB8fCB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZ2FtZSBpbnRlcmZhY2UgdG8gb2xkIHNlcnZlciBzdGF0ZVxyXG4gICAgdGhpcy5nYW1lSW50ZXJmYWNlLnN0YXRlID0gdGhpcy5sYXN0U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gRXN0aW1hdGUgdGhlIGN1cnJlbnQgc2VydmVyIHRpbWUgYXQgdGhpcyBleGFjdCBwb2ludCAodGhlIHNlcnZlciB3aWxsIGJlIGJlaGluZCB1cyBieSBhIHBlcmlvZCBvZiB0aW1lKVxyXG4gICAgdGhpcy5lc3RTZXJ2ZXJUaW1lID0gTWF0aC5yb3VuZCh0aGlzLm5ld1NlcnZlclN0YXRlID8gdGhpcy5uZXdTZXJ2ZXJTdGF0ZS50aW1lICsgKHRoaXMubGF0ZW5jeSAvIDIuMCkgOiB0aGlzLmVzdFNlcnZlclRpbWUgKyBlbGFwc2VkKTtcclxuXHJcbiAgICAvLyBFc3RhYmxpc2ggb3VyIHNpbXVsYXRpb24gc3RhcnRpbmcgdGltZS5cclxuICAgIHZhciB0ID0gdGhpcy5sYXN0U2VydmVyU3RhdGUudGltZSxcclxuICAgICAgc2ltRWxhcHNlZCA9IDAuMDtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IGFueSBvbGQgdXNlciBmcmFtZSBzdGF0ZXNcclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzID0gdGhpcy51c2VySW5wdXRTdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgICByZXR1cm4gdXNlcklucHV0U3RhdGUudGltZSA+IHNlbGYubGFzdFNlcnZlclN0YXRlLnRpbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSBhbGwgZnJhbWVzIHRoZSBzZXJ2ZXIgaGFzIG5vdCB5ZXQgcHJvY2Vzc2VkLlxyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgICAgc2ltRWxhcHNlZCA9IHVzZXJJbnB1dFN0YXRlLnRpbWUgLSB0O1xyXG4gICAgICBzZWxmLmdhbWVJbnRlcmZhY2Uuc2ltdWxhdGVVcGRhdGUodXNlcklucHV0U3RhdGUuaW5wdXQsIHNpbUVsYXBzZWQpO1xyXG4gICAgICB0ID0gdXNlcklucHV0U3RhdGUudGltZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNhdmUgb3VyIGN1cnJlbnQgc3RhdGVcclxuICAgIHZhciBuZXdVc2VySW5wdXRTdGF0ZSA9IG5ldyBVc2VySW5wdXRTdGF0ZSh1c2VySW5wdXQsIHRoaXMuZXN0U2VydmVyVGltZSk7XHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcy5wdXNoKG5ld1VzZXJJbnB1dFN0YXRlKTtcclxuXHJcbiAgICAvLyBGaW5pc2ggc2ltbHVhdGluZyB0aGUgcmVtYWluaW5nIG1pbGxpc2Vjb25kcyBiYXNlZCBvbiB0aGUgY3VycmVudCB1c2VyIGlucHV0LlxyXG4gICAgdGhpcy5nYW1lSW50ZXJmYWNlLnNpbXVsYXRlVXBkYXRlKG5ld1VzZXJJbnB1dFN0YXRlLmlucHV0LCB0aGlzLmVzdFNlcnZlclRpbWUgLSB0KTtcclxuXHJcbiAgICBpZiAodGhpcy5lc3RTZXJ2ZXJUaW1lIC0gdGhpcy5sYXN0U2VuZFRvU2VydmVyVGltZSA+IHRoaXMuc2VydmVyVXBkYXRlSW50ZXJ2YWwpXHJcbiAgICB7XHJcbiAgICAgIC8vIFNlbmQgb3VyIHN0YXRlIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgdGhpcy5nYW1lSW50ZXJmYWNlLnVwZGF0ZVNlcnZlcihuZXdVc2VySW5wdXRTdGF0ZSk7XHJcblxyXG4gICAgICB0aGlzLmxhc3RTZW5kVG9TZXJ2ZXJUaW1lID0gdGhpcy5lc3RTZXJ2ZXJUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGl0LCBzbyB0aHJvdyBpdCBhd2F5LlxyXG4gICAgdGhpcy5uZXdTZXJ2ZXJTdGF0ZSA9IHVuZGVmaW5lZDtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW50ZXJ2YWxIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU0NTdGF0ZU1hbmFnZXI7IiwidmFyXHJcbiAgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9HYW1lT2JqZWN0JyksXHJcbiAgV29ybGQgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvV29ybGQnKSxcclxuICBQbGF5ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyJyksXHJcbiAgTGF0ZW5jeUFuYWx5emVyID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL0xhdGVuY3lBbmFseXplcicpLFxyXG4gIFNDU3RhdGVNYW5hZ2VyID0gcmVxdWlyZSgnLi9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXInKSxcclxuICBVc2VySW5wdXRQcm9jZXNzb3IgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvVXNlcklucHV0UHJvY2Vzc29yJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEZQUyA9IDYwLFxyXG4gIFNFUlZFUl9USU1FT1VUX01TID0gMTAwMDAsXHJcbiAgUExBTkVfR0xPQkFMUyA9IFBsYXllci5wcm90b3R5cGUuR0xPQkFMUztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNreUR1ZWxDbGllbnQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU2t5RHVlbENsaWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMubGF0ZW5jeUFuYWx5emVyID0gbmV3IExhdGVuY3lBbmFseXplcigpO1xyXG4gIHRoaXMuc2NTdGF0ZU1hbmFnZXIgPSBuZXcgU0NTdGF0ZU1hbmFnZXIoNjAsIHRoaXMpO1xyXG4gIHRoaXMudXNlcklucHV0UHJvY2Vzc29yID0gbmV3IFVzZXJJbnB1dFByb2Nlc3NvcigpO1xyXG5cclxuICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuU2t5RHVlbENsaWVudC5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHN0YXJ0ZWQ6IGZhbHNlLFxyXG4gIGlucHV0OiB7fSxcclxuICBwbGF5ZXI6IHVuZGVmaW5lZCxcclxuICBlcnJvclRleHQ6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBzdGF0ZSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIHNldCBzdGF0ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy53b3JsZC5zZXRTdGF0ZSh2YWx1ZS53b3JsZCk7XHJcbiAgfSxcclxuICBnZXQgdXNlcklucHV0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXA6IHRoaXMuaW5wdXQudXAuaXNEb3duLFxyXG4gICAgICBkb3duOiB0aGlzLmlucHV0LmRvd24uaXNEb3duLFxyXG4gICAgICBsZWZ0OiB0aGlzLmlucHV0LmxlZnQuaXNEb3duLFxyXG4gICAgICByaWdodDogdGhpcy5pbnB1dC5yaWdodC5pc0Rvd24sXHJcbiAgICAgIHRyaWdnZXI6IHRoaXMuaW5wdXQudHJpZ2dlci5pc0Rvd25cclxuICAgIH07XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGxhdGVuY3lDaGVjazogZnVuY3Rpb24gKGNvdW50LCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpID0gMDtcclxuICAgICAgY291bnQgPSBjb3VudCB8fCAxMDtcclxuXHJcbiAgICBwaW5nKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGluZygpIHtcclxuICAgICAgc2VsZi5sYXRlbmN5QW5hbHl6ZXIuc3RhcnRUZXN0KCk7XHJcbiAgICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnBpbmcnLCBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKCkge1xyXG4gICAgICBzZWxmLmxhdGVuY3lBbmFseXplci5lbmRUZXN0KCk7XHJcbiAgICAgICgrK2kgPCBjb3VudCkgPyBwaW5nKCkgOiBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uIChyaWQpIHtcclxuICAgIHRoaXMucmlkID0gcmlkO1xyXG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmxhdGVuY3lDaGVjaygxMCwgdGhpcy5zdGFydFNlcnZlckNvbm5lY3Rpb24uYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBzdG9wOiBmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICB0aGlzLmVycm9yVGV4dCA9IHJlYXNvbjtcclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGF1c2UoKTtcclxuICB9LFxyXG4gIHN0YXJ0U2VydmVyQ29ubmVjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5sYXRlbmN5ID0gdGhpcy5sYXRlbmN5QW5hbHl6ZXIubGF0ZW5jeTtcclxuICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnN0YXJ0Jywge1xyXG4gICAgICByaWQ6IHRoaXMucmlkXHJcbiAgICB9LCB0aGlzLnNlcnZlckNvbm5lY3Rpb25fc3RhcnRlZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICAvL1NDU3RhdGVNYW5hZ2VyIEludGVyZmFjZVxyXG4gIHNpbXVsYXRlVXBkYXRlOiBmdW5jdGlvbiAodXNlcklucHV0LCBlbGFwc2VkKSB7XHJcbiAgICBlbGFwc2VkID0gIGVsYXBzZWQgLyAxMDAwLjA7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiBTRVJWRVJfVElNRU9VVF9NUylcclxuICAgIHtcclxuICAgICAgdGhpcy5zdG9wKCdTZXJ2ZXIgZGlzY29ubmVjdGVkJyk7ICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAoZWxhcHNlZCA+IDAuMilcclxuICAgICAgdGhyb3cgRXJyb3IoJ0VsYXBzZWQgaXMgd2F5eXl5IHRvbyBoaWdoIG1hbi4gRGlkIHNlcnZlciBkaXNjb25uZWN0PycpO1xyXG5cclxuICAgIHRoaXMudXNlcklucHV0UHJvY2Vzc29yLnVwZGF0ZSh1c2VySW5wdXQsIGVsYXBzZWQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMud29ybGQudXBkYXRlKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgLy9TQ1N0YXRlTWFuYWdlciBJbnRlcmZhY2VcclxuICB1cGRhdGVTZXJ2ZXI6IGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIuc3RhcnRUZXN0KCk7XHJcbiAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci51c2VySW5wdXQnLCB0aGlzLnVzZXJJbnB1dCwgdGhpcy5zb2NrZXRfdXBkYXRlU2VydmVyUmVzcG9uc2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgc2V0dXBTdGFydFN0YXRlOiBmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWwgd29ybGQgc3RhdGUnLCBzdGF0ZS53b3JsZCk7XHJcblxyXG4gICAgdGhpcy53b3JsZC5zZXRTdGF0ZShzdGF0ZS53b3JsZCk7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLndvcmxkLmdldENoaWxkcmVuKCkuZ2V0KHRoaXMudWlkKTtcclxuXHJcbiAgICBpZiAoIXRoaXMucGxheWVyKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZyAoc3RhdGUpO1xyXG4gICAgICBjb25zb2xlLmxvZygnUGxheWVyIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiBpbmNvbWluZyBzdGF0ZSEnLCB0aGlzLnVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5uZXdTZXJ2ZXJTdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGxheSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBFdmVudHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHNlcnZlckNvbm5lY3Rpb25fc3RhcnRlZEhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICB0aGlzLnVpZCA9IGRhdGEudWlkO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09OTkVDVElPTiBzdGFydGVkJywgZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygnV0FJVElORyBmb3Igc2VydmVyIHN0YXRlJyk7XHJcblxyXG4gICAgcG9tZWxvLm9uKCdzZXJ2ZXJTdGF0ZScsIHRoaXMuc29ja2V0X3NlcnZlclN0YXRlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBsYXkoKTtcclxuICB9LFxyXG4gIHNvY2tldF9zZXJ2ZXJTdGF0ZUhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMuc2NTdGF0ZU1hbmFnZXIubGFzdFNlcnZlclN0YXRlKVxyXG4gICAgICB0aGlzLnNldHVwU3RhcnRTdGF0ZShkYXRhKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdGhpcy5zY1N0YXRlTWFuYWdlci5uZXdTZXJ2ZXJTdGF0ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzb2NrZXRfdXBkYXRlU2VydmVyUmVzcG9uc2VIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIuZW5kVGVzdCgpO1xyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5jbGllbnQgPSBuZXcgU2t5RHVlbENsaWVudCgpO1xyXG4iLCIvKiBhbiBhamF4IGxvZyBmaWxlIHRhaWxlciAvIHZpZXdlclxyXG5jb3B5cmlnaHQgMjAwNyBqb2huIG1pbm5paGFuLlxyXG4gXHJcbmh0dHA6Ly9mcmVlcG9zaXRvcnkuY29tXHJcbiBcclxuUmVsZWFzZWQgdW5kZXIgdGhlc2UgdGVybXNcclxuMS4gVGhpcyBzY3JpcHQsIGFzc29jaWF0ZWQgZnVuY3Rpb25zIGFuZCBIVE1MIGNvZGUgKFwidGhlIGNvZGVcIikgbWF5IGJlIHVzZWQgYnkgeW91IChcInRoZSByZWNpcGllbnRcIikgZm9yIGFueSBwdXJwb3NlLlxyXG4yLiBUaGlzIGNvZGUgbWF5IGJlIG1vZGlmaWVkIGluIGFueSB3YXkgZGVlbWVkIHVzZWZ1bCBieSB0aGUgcmVjaXBpZW50LlxyXG4zLiBUaGlzIGNvZGUgbWF5IGJlIHVzZWQgaW4gZGVyaXZhdGl2ZSB3b3JrcyBvZiBhbnkga2luZCwgYW55d2hlcmUsIGJ5IHRoZSByZWNpcGllbnQuXHJcbjQuIFlvdXIgdXNlIG9mIHRoZSBjb2RlIGluZGljYXRlcyB5b3VyIGFjY2VwdGFuY2Ugb2YgdGhlc2UgdGVybXMuXHJcbjUuIFRoaXMgbm90aWNlIG11c3QgYmUga2VwdCBpbnRhY3Qgd2l0aCBhbnkgdXNlIG9mIHRoZSBjb2RlIHRvIHByb3ZpZGUgYXR0cmlidXRpb24uXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KCkge1xyXG4gdmFyIHJlcXVlc3QgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB9IGNhdGNoICh0cnltaWNyb3NvZnQpIHtcclxuICAgdHJ5IHtcclxuICAgICByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNc3htbDIuWE1MSFRUUFwiKTtcclxuICAgfSBjYXRjaCAob3RoZXJtaWNyb3NvZnQpIHtcclxuICAgICB0cnkge1xyXG4gICAgICByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuICAgICB9IGNhdGNoIChmYWlsZWQpIHtcclxuICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiBpZiAocmVxdWVzdCA9PSBudWxsKSB7XHJcbiAgIGFsZXJ0KFwiRXJyb3IgY3JlYXRpbmcgcmVxdWVzdCBvYmplY3QhXCIpO1xyXG4gfSBlbHNlIHtcclxuICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiB9XHJcbn1cclxuIFxyXG52YXIgcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoKTtcclxuXHJcbndpbmRvdy5nZXRMb2cgPSBmdW5jdGlvbih0aW1lcikge1xyXG4gIHZhciB1cmwgPSBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgIT0gJ3d3dy5za3lkdWVsLmNvbScgPyAnOjMwMDEnIDogJycpICsgXCIvbG9nL2dhbWUtc2VydmVyLmxvZ1wiO1xyXG4gIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gdXBkYXRlUGFnZTtcclxuICByZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiAgc3RhcnRUYWlsKHRpbWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRUYWlsKHRpbWVyKSB7XHJcbiAgaWYgKHRpbWVyID09IFwic3RvcFwiKSB7XHJcbiAgICBzdG9wVGFpbCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ID0gc2V0VGltZW91dChcImdldExvZygpXCIsIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFRhaWwoKSB7XHJcbiAgY2xlYXJUaW1lb3V0KHQpO1xyXG4gIHZhciBwYXVzZSA9IFwiVGhlIGxvZyB2aWV3ZXIgaGFzIGJlZW4gcGF1c2VkLiBUbyBiZWdpbiB2aWV3aW5nIGFnYWluLCBjbGljayB0aGUgU3RhcnQgVmlld2VyIGJ1dHRvbi5cXG5cIjtcclxuICBsb2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcclxuICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhdXNlKTtcclxuICBsb2dEaXYucmVwbGFjZUNoaWxkKG5ld05vZGUsIGxvZ0Rpdi5jaGlsZE5vZGVzWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUGFnZSgpIHtcclxuICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgdmFyIGN1cnJlbnRMb2dWYWx1ZSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICBldmFsKGN1cnJlbnRMb2dWYWx1ZSk7XHJcbiAgICAgIGxvZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpO1xyXG4gICAgICB2YXIgbG9nTGluZSA9ICcgJztcclxuICAgICAgZm9yIChpID0gMDsgaSA8IGN1cnJlbnRMb2dWYWx1ZS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBsb2dMaW5lICs9IGN1cnJlbnRMb2dWYWx1ZVtpXSArIFwiXFxuXCI7XHJcbiAgICAgIH1cclxuICAgICAgbG9nRGl2LmlubmVySFRNTCA9IGxvZ0xpbmU7XHJcbiAgICB9IGVsc2VcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciEgUmVxdWVzdCBzdGF0dXMgaXMgXCIgKyByZXF1ZXN0LnN0YXR1cyk7XHJcbiAgfVxyXG59IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuTXV0YXRpb25PYnNlcnZlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgdmFyIHF1ZXVlID0gW107XG5cbiAgICBpZiAoY2FuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICB2YXIgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlTGlzdCA9IHF1ZXVlLnNsaWNlKCk7XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcXVldWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGhpZGRlbkRpdiwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCd5ZXMnLCAnbm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiJdfQ==
