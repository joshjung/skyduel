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
},{"./game-server/node_modules/jclass/lib/jclass.min.js":2,"./shared/js/LatencyAnalyzer.js":5,"./shared/js/UserActions.js":6,"./shared/js/UserInputProcessor.js":7,"./shared/js/UserState.js":8,"./shared/js/characteristics/CharacteristicManager.js":9,"./shared/js/characteristics/Characteristic_DestroyOffScreen.js":11,"./shared/js/characteristics/Characteristic_Physics.js":13,"./shared/js/characteristics/Characteristic_ScreenWrapping.js":14,"./shared/js/characteristics/Characteristic_ShootsBullets.js":15,"./shared/js/gameObjects/Bird.js":17,"./shared/js/gameObjects/Bullet.js":18,"./shared/js/gameObjects/Player.js":20,"./shared/js/gameObjects/Smoke.js":21,"./shared/js/lib/HashArray.js":23,"./shared/js/sprites/BirdSprite.js":24,"./shared/js/sprites/BulletSprite.js":25,"./shared/js/sprites/PlanePartSprite.js":26,"./shared/js/sprites/PlaneSprite.js":27,"./shared/js/sprites/SmokeSprite.js":28,"./web-server/public/js/ServerClientStateManager.js":29,"./web-server/public/js/SkyDuelClient.js":30,"./web-server/public/js/logViewer.js":31}],2:[function(require,module,exports){
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
},{"_process":32}],3:[function(require,module,exports){
module.exports=require(2)
},{"/media/sf_dev/node/pomelo/skyduel/game-server/node_modules/jclass/lib/jclass.min.js":2,"_process":32}],4:[function(require,module,exports){
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
      console.log('Setting world and root to', this);
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
},{"./characteristics/CharacteristicManager":9,"./lib/HashArray":23,"jclass":3}],5:[function(require,module,exports){
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
},{"../lib/HashArray":23}],10:[function(require,module,exports){
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
},{"../gameObjects/PlanePart":19}],13:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
var Bullet = require('../gameObjects/Bullet');

/*===================================================*\
 * Characteristic_ShootsBullets()
\*===================================================*/
var Characteristic_ShootsBullets = function(options) {
  this.options = options;
  this.options.fireRate = options.fireRate || 50.0;
  this.options.fireVelocity = options.fireVelocity || 700.0;
  // Bullets need to start 'ahead' of teh object firing them a little.
  this.options.offset = options.offset || 50;
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
},{"../gameObjects/Bullet":18}],16:[function(require,module,exports){
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
},{"../gameObjects/Smoke":21}],17:[function(require,module,exports){
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
},{"../GameObject":4,"../characteristics/Characteristic_Physics":13,"../characteristics/Characteristic_ScreenWrapping":14}],18:[function(require,module,exports){
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
    if (target.type == 'bird')
    {
      target.health -= 50;
      this.destroy();
    }
    else if (target.type == 'player')
    {
      target.hit(this, distance);
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Bullet;
},{"../GameObject":4,"../characteristics/Characteristic_Collides":10,"../characteristics/Characteristic_DestroyOffScreen":11,"../characteristics/Characteristic_Physics":13}],19:[function(require,module,exports){
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
},{"../GameObject":4,"../characteristics/Characteristic_Physics":13,"../characteristics/Characteristic_Smokes":16}],20:[function(require,module,exports){
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
      children: this.getChildrenState()
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

    this.setChildrenState(value.children);
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function(parent, id, uid) {
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
    this.accelerater = 0;
    this.health = 100;
    this.ammo = 1000;
    this.velocity = this.GLOBALS.VELOCITY_MIN;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = 15;

    this.smokes = 0;

    this.triggerDown = false;

    this.charManager.add(new (require('../characteristics/Characteristic_Smokes'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_ScreenWrapping'))(this.world));
    this.charManager.add(new (require('../characteristics/Characteristic_ShootsBullets'))(this.bulletProps));
    this.charManager.add(new (require('../characteristics/Characteristic_Explodes'))(this.GLOBALS));
  },
  update: function (elapsed) {
    this._super(elapsed);

    this.bulletProps.fireVelocity = 500.0 + this.velocity;
  },
  updatePhaser: function (phaser) {
    this._super(phaser);

    this.sprite.displayStatusRing(true, this.health);
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.plane(0, 0);

    window.client.gGameObjects.add(this.sprite);
  },
  newChildFromState: function (childState) {
    var bullet = new Bullet(this, childState.id);
    bullet.setState(childState);
    this.getChildren().add(bullet);
    return bullet;
  },
  destroy: function() {
    this.bullets = [];
    this.destroyed = true;

    if (this.sprite) {
      this.sprite.destroy(true);
      this.sprite = null;
    }
  },
  hit: function (projectile, distance) {
    this.health -= 1 * (projectile.velocity / 1000.0) * Math.max(15 - distance, 1);
    this.health = this.health < 0 ? 0 : this.health;
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Player;
},{"../GameObject":4,"../characteristics/Characteristic_Explodes":12,"../characteristics/Characteristic_Physics":13,"../characteristics/Characteristic_ScreenWrapping":14,"../characteristics/Characteristic_ShootsBullets":15,"../characteristics/Characteristic_Smokes":16,"./Bullet":18,"./Smoke":21}],21:[function(require,module,exports){
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
},{"../GameObject":4}],22:[function(require,module,exports){
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
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = World;
},{"../GameObject":4,"../lib/HashArray":23,"./Bird":17,"./PlanePart":19,"./Player":20,"./Smoke":21}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
/*======================================================*\
 * Plane() 
\*======================================================*/
function Plane(game, x, y) {
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

Plane.prototype.displayStatusRing = function(displaysStatusRing, health) {
  var ratio = (health / 100.0);

  this.statusRing.alpha = displaysStatusRing ? 1.0 * ratio  : 0.0;

  if (displaysStatusRing) {
    this.statusRing.clear();
    this.statusRing.lineStyle(3.0, 0x3beb72);
    
    this.statusRing.arc(0, 0, 20.0, -(Math.PI/4) * ratio, (Math.PI / 4) * ratio ); 
  }
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
},{}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
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
},{"../../../shared/js/UserState":8}],30:[function(require,module,exports){
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
      throw Error('Player could not be found in incoming state!');
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

},{"../../../shared/js/GameObject":4,"../../../shared/js/LatencyAnalyzer":5,"../../../shared/js/UserInputProcessor":7,"../../../shared/js/gameObjects/Player":20,"../../../shared/js/gameObjects/World":22,"../../../shared/js/lib/HashArray":23,"./ServerClientStateManager":29}],31:[function(require,module,exports){
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
},{}],32:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4uanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0V4cGxvZGVzLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU21va2VzLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvQnVsbGV0LmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYW5lUGFydC5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGF5ZXIuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvU21va2UuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvV29ybGQuanMiLCJzaGFyZWQvanMvbGliL0hhc2hBcnJheS5qcyIsInNoYXJlZC9qcy9zcHJpdGVzL0JpcmRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9CdWxsZXRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9QbGFuZVBhcnRTcHJpdGUuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9QbGFuZVNwcml0ZS5qcyIsInNoYXJlZC9qcy9zcHJpdGVzL1Ntb2tlU3ByaXRlLmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvU2VydmVyQ2xpZW50U3RhdGVNYW5hZ2VyLmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvU2t5RHVlbENsaWVudC5qcyIsIndlYi1zZXJ2ZXIvcHVibGljL2pzL2xvZ1ZpZXdlci5qcyIsIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIExpYnJhcnlcclxudmFyIGlzQ2xpZW50ID0gdHJ1ZTtcclxuXHJcbnJlcXVpcmUoXCIuL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9qY2xhc3MvbGliL2pjbGFzcy5taW4uanNcIik7XHJcblxyXG4vLyBTaGFyZWRcclxuXHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9saWIvSGFzaEFycmF5LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4uanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1Ntb2tlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvQnVsbGV0LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvQmlyZC5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvVXNlclN0YXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvVXNlcklucHV0UHJvY2Vzc29yLmpzXCIpO1xyXG5cclxuLy8gU3ByaXRlc1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9QbGFuZVBhcnRTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL1Ntb2tlU3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9QbGFuZVNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvQnVsbGV0U3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9CaXJkU3ByaXRlLmpzXCIpO1xyXG5cclxuLy8gQ2xpZW50XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9MYXRlbmN5QW5hbHl6ZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL1NlcnZlckNsaWVudFN0YXRlTWFuYWdlci5qc1wiKTtcclxucmVxdWlyZShcIi4vd2ViLXNlcnZlci9wdWJsaWMvanMvU2t5RHVlbENsaWVudC5qc1wiKTtcclxuXHJcbi8vIFZpZXdcclxucmVxdWlyZShcIi4vd2ViLXNlcnZlci9wdWJsaWMvanMvbG9nVmlld2VyLmpzXCIpOyIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwpe1xuLyohXG4gKiBKYXZhU2NyaXB0IEluaGVyaXRhbmNlIHdpdGggUHJpdmF0ZSBNZW1iZXJzXG4gKiBMYXJnZWx5IGJhc2VkIHVwb24gSm9obiBSZXNpZydzIGluaGVyaXRhbmNlIHRlY2huaXF1ZSxcbiAqIChzZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL3NpbXBsZS1qYXZhc2NyaXB0LWluaGVyaXRhbmNlLylcbiAqIHRoYXQgd2FzIGluc3BpcmVkIGJ5IGJhc2UyIGFuZCBQcm90b3R5cGUuXG4gKlxuICogV29ya3Mgd2l0aCBhbmQgd2l0aG91dCBub2RlLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqXG4gKiB2Mi4wLjQsIE1hcmNlbCBSaWVnZXIsIDIwMTNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yaWdhL2pjbGFzc1xuICogaHR0cHM6Ly9ucG1qcy5vcmcvcGFja2FnZS9qY2xhc3NcbiAqL1xudmFyIG5zLG5zS2V5O1xuaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCImJnR5cGVvZiBwcm9jZXNzIT09XCJ1bmRlZmluZWRcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCImJm1vZHVsZS5leHBvcnRzKXtucz1tb2R1bGU7bnNLZXk9XCJleHBvcnRzXCI7fWVsc2V7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe25zPXdpbmRvdztcbm5zS2V5PVwiSkNsYXNzXCI7fX0oZnVuY3Rpb24oZCxmKXt2YXIgYj1kW2ZdO3ZhciBhPXtleHRlbmRhYmxlOnRydWUsY3Rvck5hbWU6XCJpbml0XCIsc3VwZXJOYW1lOlwiX3N1cGVyXCIsZW5hYmxlUHJpdmFjeTp0cnVlLHByaXZhdGVQYXR0ZXJuOi9eX18uKy8sdHJhY2tpbmc6dHJ1ZSxwcml2YXRlTmFtZTpcIl9fXCIsbWV0aG9kc0tleTpcIl9qY01ldGhvZHNfXCIsZGVwdGhLZXk6XCJfamNEZXB0aF9cIixjYWxsZXJEZXB0aEtleTpcIl9qY0NhbGxlckRlcHRoX1wifTtcbnZhciBjPWZhbHNlO3ZhciBlPWZ1bmN0aW9uKCl7fTtlLmV4dGVuZD1mdW5jdGlvbihtLGcpe2c9Z3x8e307Zm9yKHZhciBxIGluIGEpe2lmKGdbcV09PT11bmRlZmluZWQpe2dbcV09YVtxXTt9fWlmKCFnLmVuYWJsZVByaXZhY3kpe2cucHJpdmF0ZVBhdHRlcm49bnVsbDtcbmcucHJpdmF0ZU5hbWU9bnVsbDt9dmFyIHI9dGhpcy5wcm90b3R5cGU7Yz10cnVlO3ZhciBvPW5ldyB0aGlzKCk7Yz1mYWxzZTtvW2cuZGVwdGhLZXldPXJbZy5kZXB0aEtleV18fDA7b1tnLmRlcHRoS2V5XSsrO3ZhciBrPW9bZy5kZXB0aEtleV07dmFyIGk9e307dmFyIGo9e307XG52YXIgcz17fTtmb3IodmFyIGggaW4gbSl7aWYobVtoXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXt2YXIgbj0oZnVuY3Rpb24odCx1KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdj10aGlzW2cuc3VwZXJOYW1lXTtpZighZy5wcml2YXRlUGF0dGVybnx8IWcucHJpdmF0ZVBhdHRlcm4udGVzdCh0KSl7dGhpc1tnLnN1cGVyTmFtZV09clt0XTtcbn12YXIgRDtpZihnLnByaXZhdGVOYW1lKXtEPXRoaXNbZy5wcml2YXRlTmFtZV07dGhpc1tnLnByaXZhdGVOYW1lXT1EfHxzO312YXIgeSxFLHgsSTtpZihnLnByaXZhdGVQYXR0ZXJuKXtpZih0aGlzW2cuY2FsbGVyRGVwdGhLZXldPT09dW5kZWZpbmVkKXt0aGlzW2cuY2FsbGVyRGVwdGhLZXldPWs7XG59eT10aGlzW2cubWV0aG9kc0tleV07aWYodD09Zy5jdG9yKXt0aGlzW2cubWV0aG9kc0tleV09eXx8aTtmb3IodmFyIHogaW4gaSl7aWYoIXRoaXNbZy5tZXRob2RzS2V5XVt6XSl7dGhpc1tnLm1ldGhvZHNLZXldW3pdPXt9O310aGlzW2cubWV0aG9kc0tleV1bel1ba109aVt6XVtrXTtcbnZhciBDPXRoaXNbZy5tZXRob2RzS2V5XVt6XVtrXTt0aGlzW2cubWV0aG9kc0tleV1bel1ba109ZnVuY3Rpb24oKXt2YXIgSz10aGlzW2cuc3VwZXJOYW1lXTt0aGlzW2cuc3VwZXJOYW1lXT10aGlzW2cubWV0aG9kc0tleV1bel1bay0xXTt2YXIgSj1DLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcbnRoaXNbZy5zdXBlck5hbWVdPUs7cmV0dXJuIEo7fTt9aT10aGlzW2cubWV0aG9kc0tleV07fWVsc2V7dGhpc1tnLm1ldGhvZHNLZXldPWk7fUU9e307Zm9yKHZhciB6IGluIHRoaXNbZy5tZXRob2RzS2V5XSl7RVt6XT10aGlzW3pdO3ZhciBGPU1hdGgubWF4LmFwcGx5KE1hdGgsT2JqZWN0LmtleXMoaVt6XSkpO1xudGhpc1t6XT1pW3pdW0ZdO31pZihnLnRyYWNraW5nKXt4PXt9O2Zvcih2YXIgRyBpbiBqKXt4W0ddPXRoaXNbR107dGhpc1tHXT1qW0ddO319aWYoZy50cmFja2luZyl7ST1PYmplY3Qua2V5cyh0aGlzKTt9fXZhciBCPXUuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKGcucHJpdmF0ZVBhdHRlcm4pe2lmKGcudHJhY2tpbmcpe3ZhciBIPU9iamVjdC5rZXlzKHRoaXMpO1xuZm9yKHZhciBHIGluIEgpe0c9SFtHXTtpZihnLnByaXZhdGVQYXR0ZXJuLnRlc3QoRykpe3hbR109dGhpc1tHXTtqW0ddPXRoaXNbR107fX1mb3IodmFyIEcgaW4gSSl7Rz1JW0ddO3ZhciBBPUguaW5kZXhPZihHKTwwJiZnLnByaXZhdGVQYXR0ZXJuLnRlc3QoRyk7aWYoQSl7ZGVsZXRlIGpbR107XG5kZWxldGUgdGhpc1tHXTt9fWZvcih2YXIgRyBpbiBqKXt2YXIgdz10aGlzW2cuY2FsbGVyRGVwdGhLZXldO2lmKHhbR109PT11bmRlZmluZWR8fGs9PXcpe2RlbGV0ZSB0aGlzW0ddO31lbHNle3RoaXNbR109eFtHXTt9fX1mb3IodmFyIEcgaW4gdGhpc1tnLm1ldGhvZHNLZXldKXtpZihFW0ddPT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tHXTtcbn1lbHNle3RoaXNbR109RVtHXTt9fWlmKHk9PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW2cubWV0aG9kc0tleV07fWVsc2V7dGhpc1tnLm1ldGhvZHNLZXldPXk7fWlmKGs9PXRoaXNbZy5jYWxsZXJEZXB0aEtleV0pe2RlbGV0ZSB0aGlzW2cuY2FsbGVyRGVwdGhLZXldO1xufX1pZihnLnByaXZhdGVOYW1lKXtpZihEPT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLnByaXZhdGVOYW1lXTt9ZWxzZXt0aGlzW2cucHJpdmF0ZU5hbWVdPUQ7fX1pZih2PT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLnN1cGVyTmFtZV07fWVsc2V7dGhpc1tnLnN1cGVyTmFtZV09djtcbn1yZXR1cm4gQjt9O30pKGgsbVtoXSk7dmFyIGw9Zy5wcml2YXRlUGF0dGVybiYmZy5wcml2YXRlUGF0dGVybi50ZXN0KGgpO2lmKGwpe2lbaF09e307aVtoXVtrXT1uO31lbHNle29baF09bjt9fWVsc2V7dmFyIGw9Zy50cmFja2luZyYmZy5wcml2YXRlUGF0dGVybiYmZy5wcml2YXRlUGF0dGVybi50ZXN0KGgpO1xuaWYobCl7altoXT1tW2hdO31lbHNle29baF09bVtoXTt9fX1mdW5jdGlvbiBwKCl7aWYoIWMmJnRoaXNbZy5jdG9yTmFtZV0pe3RoaXNbZy5jdG9yTmFtZV0uYXBwbHkodGhpcyxhcmd1bWVudHMpO319cC5wcm90b3R5cGU9bztwLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1wO1xuaWYoZy5leHRlbmRhYmxlIT09ZmFsc2Upe3AuZXh0ZW5kPWFyZ3VtZW50cy5jYWxsZWU7fXJldHVybiBwO307ZS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7dmFyIGc9ZFtmXTtkW2ZdPWI7cmV0dXJuIGc7fTtkW2ZdPWU7fSkobnMsbnNLZXkpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJyksdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBSZXF1aXJlc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyID0gcmVxdWlyZSgnLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyJyksXHJcbiAgSkNsYXNzID0gcmVxdWlyZSgnamNsYXNzJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHYW1lT2JqZWN0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEdhbWVPYmplY3QgPSBtb2R1bGUuZXhwb3J0cyA9IEpDbGFzcy5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzZXRQYXJlbnQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldFBhcmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gIH0sXHJcbiAgc2V0Q2hpbGRyZW46IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAvLyBEZXNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgdGhpcy5fY2hpbGRyZW4gPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuOiBmdW5jdGlvbigpIHtcclxuICAgIC8vIFNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xyXG4gIH0sXHJcbiAgc2V0SWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0SWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkIHx8ICh0aGlzLl9pZCA9IHRoaXMucmFuZG9tSWQoKSk7XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLnN0YXRlO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuSWRzOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICB2YXIgcmV0ID0ge307XHJcblxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICByZXRbY2hpbGQuZ2V0SWQoKV0gPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9LFxyXG4gIHNldENoaWxkcmVuU3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIGlkcyA9IHRoaXMuZ2V0Q2hpbGRyZW5JZHMoKTtcclxuXHJcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICAgIHZhciBjaGlsZCA9IHNlbGYuZ2V0Q2hpbGRyZW4oKS5nZXQoY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICAgIGlmICghY2hpbGQpXHJcbiAgICAgICAgc2VsZi5nZXRDaGlsZHJlbigpLmFkZChzZWxmLm5ld0NoaWxkRnJvbVN0YXRlKGNoaWxkU3RhdGUpKTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjaGlsZCkgPT09ICdbb2JqZWN0IEFycmF5XScgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUd28gaWRzIGFyZSB0aGUgc2FtZSEnLCBjaGlsZFswXS5nZXRJZCgpKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlbGV0ZSBpZHNbY2hpbGRTdGF0ZS5pZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5kZXN0cm95VW5mb3VuZENoaWxkcmVuT25TdGF0ZVNldClcclxuICAgICAgZm9yICh2YXIgaWQgaW4gaWRzKVxyXG4gICAgICAgIHRoaXMuZGVzdHJveUNoaWxkQnlJZChpZCk7XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlblN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIHJldHVybiBjaGlsZC5nZXRTdGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzZXREaXJ0eTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIC8vIERlc2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICB0aGlzLl9kaXJ0eSA9IHZhbHVlO1xyXG4gICAgKHRoaXMuX2RpcnR5ICYmIHRoaXMuZ2V0UGFyZW50KCkpID8gdGhpcy5nZXRQYXJlbnQoKS5zZXREaXJ0eSh0cnVlKSA6ICcnO1xyXG4gICAgIXRoaXMuX2RpcnR5ID8gdGhpcy5nZXRDaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnNldERpcnR5KGZhbHNlKTtcclxuICAgIH0pIDogJyc7XHJcbiAgfSxcclxuICBnZXREaXJ0eTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBTZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHJldHVybiB0aGlzLl9kaXJ0eTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICByYW5kb21JZDogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk5OTk5OTk5OSkudG9TdHJpbmcoMTYpO1xyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQpIHtcclxuICAgIGlmICghcGFyZW50KVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZygnU2V0dGluZyB3b3JsZCBhbmQgcm9vdCB0bycsIHRoaXMpO1xyXG4gICAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS53b3JsZCA9IEdhbWVPYmplY3QucHJvdG90eXBlLnJvb3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SWQoaWQpO1xyXG4gICAgdGhpcy50eXBlID0gJ0dhbWVPYmplY3QnO1xyXG4gICAgdGhpcy5idWlsZENoaWxkcmVuT2JqZWN0KCk7XHJcbiAgICB0aGlzLnNldFBhcmVudChwYXJlbnQpO1xyXG4gICAgdGhpcy5zZXREaXJ0eSh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuZGVzdHJveVVuZm91bmRDaGlsZHJlbk9uU3RhdGVTZXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlciA9IG5ldyBDaGFyYWN0ZXJpc3RpY01hbmFnZXIodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0ZWQ9IHRydWU7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyBXaXBlIG91dCBhbnkgZGVzdHJveWVkIGNoaWxkcmVuLlxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5jb25jYXQoKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBpZiAoY2hpbGQuZGVzdHJveWVkKVxyXG4gICAgICAgIHNlbGYuZ2V0Q2hpbGRyZW4oKS5yZW1vdmUoY2hpbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC51cGRhdGUoZWxhcHNlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFwcGx5QWxsKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgbmV3Q2hpbGRGcm9tU3RhdGU6IGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICB2YXIgY2hpbGQgPSBuZXcgR2FtZU9iamVjdCgpO1xyXG4gICAgY2hpbGQuaW5pdCh0aGlzLCBjaGlsZFN0YXRlLmlkKVxyXG4gICAgY2hpbGQuc3RhdGUgPSBjaGlsZFN0YXRlO1xyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH0sXHJcbiAgZGVzdHJveUNoaWxkQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmdldENoaWxkcmVuKCkuZ2V0KGlkKTtcclxuXHJcbiAgICBpZiAoIWNoaWxkKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBkZXN0cm95IG5vbi1leGlzdGVudCBjaGlsZCB3aXRoIGlkJywgaWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoaWxkLmRlc3Ryb3kpXHJcbiAgICB7XHJcbiAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLnJlbW92ZShjaGlsZCk7XHJcbiAgfSxcclxuICBidWlsZENoaWxkcmVuT2JqZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldENoaWxkcmVuKG5ldyBIYXNoQXJyYXkoWydfaWQnLCAndHlwZSddKSk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gIH0sXHJcbiAgdXBkYXRlU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICBpZiAodGhpcy5zcHJpdGUgJiYgdGhpcy5kZXN0cm95ZWQpXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgaWYgKCF0aGlzLnNwcml0ZSlcclxuICAgICAgICB0aGlzLmJ1aWxkU3ByaXRlKHBoYXNlcik7XHJcblxyXG4gICAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICAgICAgdGhpcy5zcHJpdGUudXBkYXRlV2l0aE1vZGVsKHRoaXMpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlUGhhc2VyOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZVBoYXNlcihwaGFzZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTcHJpdGUocGhhc2VyKTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcbn0pOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIExBVEVOQ1lfQU5BTFlaRVJfREVGQVVMVF9NQVggPSAxMDtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIExhdGVuY3lBbmFseXplcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBMYXRlbmN5QW5hbHl6ZXIgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmRlYnVnID0gZmFsc2U7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuTGF0ZW5jeUFuYWx5emVyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhY2s6IFtdLFxyXG4gIG1heFN0YWNrTGVuZ3RoOiBMQVRFTkNZX0FOQUxZWkVSX0RFRkFVTFRfTUFYLFxyXG4gIGxhc3RUZXN0VGltZTogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IGxhdGVuY3koKSB7XHJcbiAgICAvLyBSZXR1cm5zIGEgd2VpZ2h0ZWQgYXZlcmFnZSBsYXRlbmN5LlxyXG4gICAgLy8gSXRlbSBhdCBpeCAwIGhhcyB3ZWlnaHQgb2YgMSBhbmQgaXRlbSBhdCBpeCBsZW5ndGggaGFzIHdlaWdodCBvZiBsZW5ndGguXHJcbiAgICB2YXIgbGF0VG90ID0gMCxcclxuICAgICAgdG90ID0gMDtcclxuXHJcbiAgICB0aGlzLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKGxhdCwgaXgsIGFycikge1xyXG4gICAgICBsYXRUb3QgKz0gbGF0ICogKGl4KzEpO1xyXG4gICAgICB0b3QgKz0gKGl4KzEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHZhbCA9IHRvdCA/IGxhdFRvdCAvIHRvdCA6IDE7XHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMQVRFTkNZJywgdmFsKTtcclxuXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH0sXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFydFRlc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubGFzdFRlc3RUaW1lID0gdGhpcy5ub3c7XHJcbiAgfSxcclxuICBlbmRUZXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy5sYXN0VGVzdFRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgY29uc29sZS5sb2coJ0xBVEVOQ1knLCB0aGlzLmxhdGVuY3kpO1xyXG4gICAgdGhpcy5wdXNoKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgcHVzaDogZnVuY3Rpb24obGF0ZW5jeSkge1xyXG4gICAgdGhpcy5zdGFjay5wdXNoKGxhdGVuY3kpO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA+IHRoaXMubWF4U3RhY2tMZW5ndGgpXHJcbiAgICAgIHRoaXMuc3RhY2sudW5zaGlmdCgpO1xyXG4gIH0sXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc3RhY2sgPSBbXTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBMYXRlbmN5QW5hbHl6ZXI7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVVNFUl9BQ1RJT05TID0ge1xyXG4gIExFRlRfRE9XTjogMHgwMDAxLFxyXG4gIExFRlRfVVA6IDB4MDAwMixcclxuICBSSUdIVF9ET1dOOiAweDAwMTAsXHJcbiAgUklHSFRfVVA6IDB4MDAyMCxcclxuICBVUF9ET1dOOiAweDAxMDAsXHJcbiAgVVBfVVA6IDB4MDIwMCxcclxuICBET1dOX0RPV046IDB4MTAwMCxcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gVVNFUl9BQ1RJT05TO1xyXG59IGVsc2Uge1xyXG4gIHdpbmRvdy5VU0VSX0FDVElPTlMgPSBVU0VSX0FDVElPTlM7XHJcbn0iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBVc2VySW5wdXRQcm9jZXNzb3IoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVXNlcklucHV0UHJvY2Vzc29yID0gZnVuY3Rpb24oKSB7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuVXNlcklucHV0UHJvY2Vzc29yLnByb3RvdHlwZSA9IHtcclxuICB1cGRhdGU6IGZ1bmN0aW9uICh1c2VySW5wdXQsIGVsYXBzZWQsIHdvcmxkKSB7XHJcbiAgICBpZiAodXNlcklucHV0LmxlZnQpXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gLXdvcmxkLnBsYXllci5HTE9CQUxTLkJBTktfUkFURTtcclxuICAgIGVsc2UgaWYgKHVzZXJJbnB1dC5yaWdodClcclxuICAgICAgd29ybGQucGxheWVyLmJhbmsgPSB3b3JsZC5wbGF5ZXIuR0xPQkFMUy5CQU5LX1JBVEU7XHJcbiAgICBlbHNlXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gMDtcclxuXHJcbiAgICBpZiAodXNlcklucHV0LnVwKVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSB3b3JsZC5wbGF5ZXIuR0xPQkFMUy5BQ0NFTEVSQVRJT05fUkFURTtcclxuICAgIGVsc2UgaWYgKHVzZXJJbnB1dC5kb3duKVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSAtd29ybGQucGxheWVyLkdMT0JBTFMuREVDRUxFUkFUSU9OX1JBVEU7XHJcbiAgICBlbHNlIFxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSAwLjA7XHJcblxyXG4gICAgd29ybGQucGxheWVyLnRyaWdnZXJEb3duID0gdXNlcklucHV0LnRyaWdnZXI7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcklucHV0UHJvY2Vzc29yOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFVzZXJJbnB1dFN0YXRlKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVzZXJJbnB1dFN0YXRlID0gZnVuY3Rpb24oaW5wdXQsIHRpbWUpIHtcclxuICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgdGhpcy50aW1lID0gdGltZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5Vc2VySW5wdXRTdGF0ZS5wcm90b3R5cGUgPSB7XHJcbiAgaW5wdXQ6IHVuZGVmaW5lZCxcclxuICB0aW1lOiB1bmRlZmluZWRcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcklucHV0U3RhdGU7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljTWFuYWdlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIHRoaXMuY2hhcmFjdGVyaXN0aWNzID0gbmV3IEhhc2hBcnJheShbJ25hbWUnXSk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBjYWNoZToge30sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFkZDogZnVuY3Rpb24gKGNoYXJhY3RlcmlzdGljKSB7XHJcbiAgICB0aGlzLmNoYXJhY3RlcmlzdGljcy5hZGQoY2hhcmFjdGVyaXN0aWMpO1xyXG4gIH0sXHJcbiAgYXBwbHlBbGw6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmNhY2hlID0ge307XHJcblxyXG4gICAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoYXJhY3RlcmlzdGljKSB7XHJcbiAgICAgIGNoYXJhY3RlcmlzdGljLmFwcGx5VG8oc2VsZi5wYXJlbnQsIGVsYXBzZWQsIHNlbGYuY2FjaGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyOyIsInZhciBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzID0gcmVxdWlyZSgnLi9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBNYXRoIEJ1bGxzaGl0XHJcbiAqIFByb29mIGhlcmU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODQ5MjExL3Nob3J0ZXN0LWRpc3RhbmNlLWJldHdlZW4tYS1wb2ludC1hbmQtYS1saW5lLXNlZ21lbnRcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gc3FyKHgpIHsgcmV0dXJuIHggKiB4IH1cclxuZnVuY3Rpb24gZGlzdDIodiwgdykgeyByZXR1cm4gc3FyKHYueCAtIHcueCkgKyBzcXIodi55IC0gdy55KSB9XHJcbmZ1bmN0aW9uIGRpc3RUb1NlZ21lbnRTcXVhcmVkKHAsIHYsIHcpIHtcclxuICB2YXIgbDIgPSBkaXN0Mih2LCB3KTtcclxuICBpZiAobDIgPT0gMCkgcmV0dXJuIGRpc3QyKHAsIHYpO1xyXG4gIHZhciB0ID0gKChwLnggLSB2LngpICogKHcueCAtIHYueCkgKyAocC55IC0gdi55KSAqICh3LnkgLSB2LnkpKSAvIGwyO1xyXG4gIGlmICh0IDwgMCkgcmV0dXJuIGRpc3QyKHAsIHYpO1xyXG4gIGlmICh0ID4gMSkgcmV0dXJuIGRpc3QyKHAsIHcpO1xyXG4gIHJldHVybiBkaXN0MihwLCB7IHg6IHYueCArIHQgKiAody54IC0gdi54KSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB2LnkgKyB0ICogKHcueSAtIHYueSkgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGlzdFRvU2VnbWVudChwLCB2LCB3KSB7IHJldHVybiBNYXRoLnNxcnQoZGlzdFRvU2VnbWVudFNxdWFyZWQocCwgdiwgdykpOyB9XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19Db2xsaWRlcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19Db2xsaWRlcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gIC8vIFRoZXNlIGFyZSB0aGUga2V5cyBvZiB0aGUgd29ybGQgb2JqZWN0cyB0aGF0IHRoZSB0aGlzIG9iamVjdCBjYW4gY29sbGlkZSB3aXRoIVxyXG4gIHRoaXMub3B0aW9ucy5rZXlzID0gdGhpcy5vcHRpb25zLmtleXMgfHwgWydwbGF5ZXInLCAnYmlyZCddO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX0NvbGxpZGVzLnByb3RvdHlwZSA9IHtcclxuICB0ZW1wUGh5c2ljczogbmV3IENoYXJhY3RlcmlzdGljX1BoeXNpY3MoKSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIFxyXG4gICAgdGhpcy50ZW1wUGh5c2ljcy5vcHRpb25zID0gdGFyZ2V0LndvcmxkO1xyXG5cclxuICAgIHZhciB0YXJnZXRzID0gdGFyZ2V0LndvcmxkLmdldENoaWxkcmVuKCkuZ2V0QWxsKHRoaXMub3B0aW9ucy5rZXlzKSxcclxuICAgICAgc3RhcnQgPSB0aGlzLnRlbXBQaHlzaWNzLmFwcGx5VGVtcCh0YXJnZXQsIDApLFxyXG4gICAgICBlbmQgPSB0aGlzLnRlbXBQaHlzaWNzLmFwcGx5VGVtcCh0YXJnZXQsIGVsYXBzZWQpO1xyXG5cclxuICAgIHRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICB2YXIgc2hvcnRlc3REaXN0YW5jZSA9IGRpc3RUb1NlZ21lbnQodCwgc3RhcnQsIGVuZCk7XHJcbiAgICAgIGlmIChzaG9ydGVzdERpc3RhbmNlIDwgKHRhcmdldC5yYWRpdXMgKiAyKSArICh0LnJhZGl1cyAqIDIpKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5jYWxsYmFjaylcclxuICAgICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFjay5hcHBseShudWxsLCBbdCwgc2hvcnRlc3REaXN0YW5jZV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19Db2xsaWRlczsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4gPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIHZhciBkZXN0cm95ID0gdGFyZ2V0LnggPCAwIHx8IHRhcmdldC54ID4gdGhpcy5vcHRpb25zLndpZHRoIHx8IHRhcmdldC55IDwgMCB8fCB0YXJnZXQueSA+IHRoaXMub3B0aW9ucy5oZWlnaHQ7XHJcbiAgICBpZiAoZGVzdHJveSlcclxuICAgICAgdGFyZ2V0LmRlc3Ryb3koKTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuOyIsInZhciBQbGFuZVBhcnQgPSByZXF1aXJlKCcuLi9nYW1lT2JqZWN0cy9QbGFuZVBhcnQnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX0V4cGxvZGVzKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX0V4cGxvZGVzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXMucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgaWYgKHR5cGVvZiBpc0NsaWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNDbGllbnQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAodGFyZ2V0LmhlYWx0aCA8PSAwICYmICF0YXJnZXQuZXhwbG9kZWQpXHJcbiAgICB7XHJcbiAgICAgIHRhcmdldC5leHBsb2RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZXhwbG9kZSh0YXJnZXQpO1xyXG4gICAgICB0YXJnZXQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXhwbG9kZTogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspXHJcbiAgICB7XHJcbiAgICAgIHZhciBwYXJ0ID0gbmV3IFBsYW5lUGFydCh0YXJnZXQud29ybGQsIHRhcmdldC5nZXRJZCgpICsgJ19wYXJ0JyArIGksIHRhcmdldC54LCB0YXJnZXQueSwgdGFyZ2V0LmFuZ2xlLCB0YXJnZXQudmVsb2NpdHksIGkpO1xyXG4gICAgICB0YXJnZXQud29ybGQuZ2V0Q2hpbGRyZW4oKS5hZGQocGFydCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfRXhwbG9kZXM7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB2YXIgcmVzID0gdGhpcy5hcHBseVRlbXAodGFyZ2V0LCBlbGFwc2VkKTtcclxuICAgIHRhcmdldC54ID0gcmVzLng7XHJcbiAgICB0YXJnZXQueSA9IHJlcy55O1xyXG4gICAgdGFyZ2V0LnZlbG9jaXR5ID0gcmVzLnZlbG9jaXR5O1xyXG4gICAgdGFyZ2V0LmFuZ2xlID0gcmVzLmFuZ2xlO1xyXG4gIH0sXHJcbiAgYXBwbHlUZW1wOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkKSB7XHJcbiAgICB2YXIgcmVzID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQudmVsb2NpdHkgPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHRocm93IEVycm9yKCdUYXJnZXQgdmVsb2NpdHkgaXMgdW5kZWZpbmVkIGZvciAnLCB0YXJnZXQpO1xyXG4gICAgXHJcbiAgICB2YXIgdiA9IHRhcmdldC52ZWxvY2l0eTtcclxuICAgIFxyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZXInKSlcclxuICAgICAgdiA9IHRhcmdldC52ZWxvY2l0eSArICh0YXJnZXQuYWNjZWxlcmF0ZXIgKiBlbGFwc2VkKTtcclxuXHJcbiAgICByZXMudmVsb2NpdHkgPSB2ID4gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01BWCA/IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NQVggOiAodiA8IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NSU4gPyB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUlOIDogdik7XHJcblxyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYmFuaycpKVxyXG4gICAgICByZXMuYW5nbGUgPSB0YXJnZXQuYW5nbGUgKyAodGFyZ2V0LmJhbmsgKiBlbGFwc2VkKTtcclxuICAgIGVsc2VcclxuICAgICAgcmVzLmFuZ2xlID0gdGFyZ2V0LmFuZ2xlO1xyXG5cclxuICAgIHJlcy54ID0gdGFyZ2V0LnggKyBNYXRoLmNvcyhyZXMuYW5nbGUpICogcmVzLnZlbG9jaXR5ICogZWxhcHNlZDtcclxuICAgIHJlcy55ID0gdGFyZ2V0LnkgKyBNYXRoLnNpbihyZXMuYW5nbGUpICogcmVzLnZlbG9jaXR5ICogZWxhcHNlZDtcclxuXHJcbiAgICBpZiAoaXNOYU4ocmVzLngpKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlbGFwc2VkKTtcclxuICAgICAgdGhyb3cgRXJyb3IocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1BoeXNpY3M7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB0YXJnZXQueCA9IHRhcmdldC54IDwgMCA/IHRoaXMub3B0aW9ucy53aWR0aCA6IHRhcmdldC54O1xyXG4gICAgdGFyZ2V0LnggPSB0YXJnZXQueCA+IHRoaXMub3B0aW9ucy53aWR0aCA/IHRhcmdldC54ICUgdGhpcy5vcHRpb25zLndpZHRoIDogdGFyZ2V0Lng7XHJcbiAgICB0YXJnZXQueSA9IHRhcmdldC55IDwgMCA/IHRoaXMub3B0aW9ucy5oZWlnaHQgOiB0YXJnZXQueTtcclxuICAgIHRhcmdldC55ID0gdGFyZ2V0LnkgPiB0aGlzLm9wdGlvbnMuaGVpZ2h0ID8gdGFyZ2V0LnkgJSB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGFyZ2V0Lnk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmc7IiwidmFyIEJ1bGxldCA9IHJlcXVpcmUoJy4uL2dhbWVPYmplY3RzL0J1bGxldCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgdGhpcy5vcHRpb25zLmZpcmVSYXRlID0gb3B0aW9ucy5maXJlUmF0ZSB8fCA1MC4wO1xyXG4gIHRoaXMub3B0aW9ucy5maXJlVmVsb2NpdHkgPSBvcHRpb25zLmZpcmVWZWxvY2l0eSB8fCA3MDAuMDtcclxuICAvLyBCdWxsZXRzIG5lZWQgdG8gc3RhcnQgJ2FoZWFkJyBvZiB0ZWggb2JqZWN0IGZpcmluZyB0aGVtIGEgbGl0dGxlLlxyXG4gIHRoaXMub3B0aW9ucy5vZmZzZXQgPSBvcHRpb25zLm9mZnNldCB8fCA1MDtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBuZXh0QnVsbGV0VGltZTogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgbm93KCkge1xyXG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZmlyZTogZnVuY3Rpb24gKHRhcmdldCwgeCwgeSwgYW5nbGUsIHZlbG9jaXR5KVxyXG4gIHtcclxuICAgIGlmICh0YXJnZXQuYW1tbyA8PSAwKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBcclxuICAgIHZhciBidWxsZXQgPSBuZXcgQnVsbGV0KHRhcmdldCwgdW5kZWZpbmVkLCB4ICsgTWF0aC5jb3MoYW5nbGUpICogdGhpcy5vcHRpb25zLm9mZnNldCwgeSArIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy5vZmZzZXQsIGFuZ2xlLCB2ZWxvY2l0eSk7XHJcbiAgICB0YXJnZXQuZ2V0Q2hpbGRyZW4oKS5hZGQoYnVsbGV0KTtcclxuICAgIHRhcmdldC5hbW1vLS07XHJcbiAgICB0aGlzLm5leHRCdWxsZXRUaW1lID0gdGhpcy5ub3cgKyB0aGlzLm9wdGlvbnMuZmlyZVJhdGU7XHJcbiAgfSxcclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgaWYgKCF0aGlzLm5leHRCdWxsZXRUaW1lKVxyXG4gICAgICB0aGlzLm5leHRCdWxsZXRUaW1lID0gdGhpcy5ub3cgKyB0aGlzLm9wdGlvbnMuZmlyZVJhdGU7XHJcblxyXG4gICAgaWYgKHRhcmdldC50cmlnZ2VyRG93bilcclxuICAgIHtcclxuICAgICAgdmFyIHQgPSB0aGlzLm5leHRCdWxsZXRUaW1lICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG4gICAgICBcclxuICAgICAgd2hpbGUgKHRoaXMubm93ID4gdGhpcy5uZXh0QnVsbGV0VGltZSlcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZmlyZSh0YXJnZXQsIHRhcmdldC54LCB0YXJnZXQueSwgdGFyZ2V0LmFuZ2xlLCB0aGlzLm9wdGlvbnMuZmlyZVZlbG9jaXR5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHM7IiwidmFyIFNtb2tlID0gcmVxdWlyZSgnLi4vZ2FtZU9iamVjdHMvU21va2UnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Ntb2tlcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19TbW9rZXMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19TbW9rZXMucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdGhpcy5hdHRlbXB0U21va2VEcm9wKHRhcmdldCwgZWxhcHNlZCk7XHJcbiAgfSxcclxuICBhdHRlbXB0U21va2VEcm9wOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZj0gdGhpcztcclxuICAgIC8vIFNtb2tlIGRyb3BzIGFyZSBPTkxZIHBlcmZvcm1lZCBieSB0aGUgc2VydmVyXHJcbiAgICBpZiAodHlwZW9mIGlzQ2xpZW50ID09PSAndW5kZWZpbmVkJyB8fCBpc0NsaWVudClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmICgoaXNOYU4odGhpcy5vcHRpb25zLlNNT0tFX1NUQVJUX0hFQUxUSCkgfHwgdGFyZ2V0LmhlYWx0aCA8IHRoaXMub3B0aW9ucy5TTU9LRV9TVEFSVF9IRUFMVEgpICYmIHRhcmdldC5zbW9rZXMgPCB0aGlzLm9wdGlvbnMuU01PS0VfTUFYKVxyXG4gICAge1xyXG4gICAgICB2YXIgY29tcGFyZSA9IGlzTmFOKHRoaXMub3B0aW9ucy5TTU9LRV9TVEFSVF9IRUFMVEgpID8gMS4wIDogdGFyZ2V0LmhlYWx0aCxcclxuICAgICAgICBzbW9rZURyb3AgPSAoTWF0aC5yYW5kb20oKSAqIGNvbXBhcmUpIDwgdGhpcy5vcHRpb25zLlNNT0tFX1RIUkVTSE9MRDtcclxuXHJcbiAgICAgIGlmIChzbW9rZURyb3ApXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgc21va2UgPSBuZXcgU21va2UodGFyZ2V0LCAnc21va2UnICsgdGFyZ2V0LnJhbmRvbUlkKCksIHRhcmdldC54LCB0YXJnZXQueSwgdGFyZ2V0LmFuZ2xlLCB0aGlzLnNtb2tlRmFkZUhhbmRsZXIuYmluZCh0aGlzLCB0YXJnZXQpKTtcclxuICAgICAgICB0YXJnZXQuc21va2VzKys7XHJcbiAgICAgICAgdGFyZ2V0LndvcmxkLmdldENoaWxkcmVuKCkuYWRkKHNtb2tlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc21va2VGYWRlSGFuZGxlcjogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgdGFyZ2V0LnNtb2tlcy0tO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1Ntb2tlczsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEJpcmQoKVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBCaXJkID0gR2FtZU9iamVjdC5leHRlbmQoe1xuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogUHJvcGVydGllc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aCxcbiAgICB9O1xuICB9LFxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5faWQpXG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBiaXJkXFwncyBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xuICAgIH1cblxuICAgIHRoaXMueCA9IHZhbHVlLng7XG4gICAgdGhpcy55ID0gdmFsdWUueTtcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XG4gICAgdGhpcy5zY2FsZSA9IHZhbHVlLnNjYWxlO1xuICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgdGhpcy5yYWRpdXMgPSB2YWx1ZS5yYWRpdXM7XG4gICAgdGhpcy5oZWFsdGggPSB2YWx1ZS5oZWFsdGg7XG4gIH0sXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBNZXRob2RzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCkge1xuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcblxuICAgIHRoaXMudHlwZSA9ICdiaXJkJztcblxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmJhbmsgPSAwO1xuICAgIHRoaXMucmFkaXVzID0gMztcblxuICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndvcmxkLndpZHRoO1xuICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndvcmxkLmhlaWdodDtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgIHRoaXMuYmFuayA9IHRoaXMucmFuZG9taXplZEJhbmsoKTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gMjUgKyBNYXRoLnJhbmRvbSgpICogMTA7XG4gICAgdGhpcy5zY2FsZSA9IChNYXRoLnJhbmRvbSgpICogMC40KSArIDAuMTtcblxuICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuXG4gICAgdGhpcy5HTE9CQUxTID0ge1xuICAgICAgVkVMT0NJVFlfTUFYOiBCaXJkLnZlbG9jaXR5LFxuICAgICAgVkVMT0NJVFlfTUlOOiBCaXJkLnZlbG9jaXR5LFxuICAgIH07XG5cbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nJykpKHRoaXMud29ybGQpKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xuICAgIFxuICAgIC8vIFRPRE86IGVuY2Fwc3VsYXRlIGJpcmQgQUlcbiAgICBcbiAgICAvLyBiaXJkcyBoYXZlIGEgMS8yMDAgY2hhbmNlIG9mIGNoYW5naW5nIHRoZSBiYW5rIGV2ZXJ5IGZyYW1lXG4gICAgaWYoTWF0aC5yYW5kb20oKSA8IDAuMDA1KVxuICAgICAgdGhpcy5iYW5rID0gdGhpcy5yYW5kb21pemVkQmFuaygpO1xuICB9LFxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5iaXJkKDAsIDApO1xuICB9LFxuICByYW5kb21pemVkQmFuazogZnVuY3Rpb24oKSB7XG4gICAgLy8gdmFsdWUgaW4gdGhlIHJhbmdlIFstMS4wLCAxLjBdIFxuICAgIHZhciBiYW5rRmFjdG9yID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMi4wO1xuICAgIC8vIHRoZSBtYXhpbXVtIGJhbmsgYW5nbGUgXG4gICAgdmFyIGJhbmtNYWduaXR1ZGUgPSBNYXRoLlBJIC8gMi4wO1xuICAgIC8vIHNjYWxlIHRoZSBtYWduaXR1ZGUgYnkgdGhlIHJhbmRvbWl6ZWQgZmFjdG9yXG4gICAgcmV0dXJuIGJhbmtGYWN0b3IgKiBiYW5rTWFnbml0dWRlOyBcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSlcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XG4gIH1cbn0pO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBCaXJkOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQnVsbGV0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEJ1bGxldCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXHJcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxyXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvcignVGhlIGJ1bGxldCBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCA9IHZhbHVlLng7XHJcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xyXG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xyXG4gICAgdGhpcy5yYWRpdXMgPSB2YWx1ZS5yYWRpdXM7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSkge1xyXG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xyXG5cclxuICAgIHRoaXMuR0xPQkFMUyA9IHtcclxuICAgICAgVkVMT0NJVFlfTUFYOiAxMDAwMDAsXHJcbiAgICAgIFZFTE9DSVRZX01JTjogMFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIHRoaXMuc3ByaXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAyO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdidWxsZXQnO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0NvbGxpZGVzJykpKHtjYWxsYmFjazogdGhpcy5jb2xsaWRlSGFuZGxlci5iaW5kKHRoaXMpfSkpO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4nKSkodGhpcy53b3JsZCkpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hcHBseUFsbChlbGFwc2VkKTtcclxuICB9LFxyXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQuYnVsbGV0KDAsIDApO1xyXG4gIH0sXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLnNwcml0ZSlcclxuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcclxuICB9LFxyXG4gIGNvbGxpZGVIYW5kbGVyOiBmdW5jdGlvbiAodGFyZ2V0LCBkaXN0YW5jZSkge1xyXG4gICAgaWYgKHRhcmdldC50eXBlID09ICdiaXJkJylcclxuICAgIHtcclxuICAgICAgdGFyZ2V0LmhlYWx0aCAtPSA1MDtcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXQudHlwZSA9PSAncGxheWVyJylcclxuICAgIHtcclxuICAgICAgdGFyZ2V0LmhpdCh0aGlzLCBkaXN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IEJ1bGxldDsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFBsYW5lUGFydCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBQbGFuZVBhcnQgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG4gICAgICB0aW1lU3RhcnQgOiB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcclxuICAgICAgYmFuazogdGhpcy5iYW5rLFxyXG4gICAgICBzbW9rZXM6IHRoaXMuc21va2VzLFxyXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcclxuICAgICAgaW5kZXg6IHRoaXMuaW5kZXhcclxuICAgIH07XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGUgUGxhbmVQYXJ0IGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ID0gdmFsdWUueDtcclxuICAgIHRoaXMueSA9IHZhbHVlLnk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gdmFsdWUuZHVyYXRpb247XHJcbiAgICB0aGlzLnRpbWVTdGFydCA9IHZhbHVlLnRpbWVTdGFydDtcclxuICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XHJcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XHJcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xyXG4gICAgdGhpcy5zbW9rZXMgPSB2YWx1ZS5zbW9rZXM7XHJcbiAgICB0aGlzLmluZGV4ID0gdmFsdWUuaW5kZXg7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSwgaW5kZXgpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcclxuXHJcbiAgICB0aGlzLkdMT0JBTFMgPSB7XHJcbiAgICAgIFZFTE9DSVRZX01BWDogNjAwLFxyXG4gICAgICBWRUxPQ0lUWV9NSU46IDAsXHJcbiAgICAgIFNNT0tFX01BWDogNSxcclxuICAgICAgU01PS0VfU1RBUlRfSEVBTFRIOiBOYU4sXHJcbiAgICAgIFNNT0tFX1RIUkVTSE9MRDogM1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRpbWVTdGFydCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gKE1hdGgucmFuZG9tKCkgKiAzLjAgKyAxLjApICogMTAwMC4wO1xyXG4gICAgdGhpcy5iYW5rID0gLTEgKyAoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgdGhpcy5hY2NlbGVyYXRvciA9IDA7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgIHRoaXMuaGVhbHRoID0gMDtcclxuICAgIHRoaXMuc21va2VzID0gMDtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAncGxhbmVwYXJ0JztcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU21va2VzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOmZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBoYXNlcik7XHJcblxyXG4gICAgdmFyIGVsYXBzZWQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHJhdGlvID0gMS4wIC0gKGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgICBpZiAocmF0aW8gPCAwLjEpXHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5wbGFuZVBhcnQodGhpcy54LCB0aGlzLnksIHRoaXMuaW5kZXgpO1xyXG4gIH0sXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spXHJcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuXHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYW5lUGFydDsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogUmVxdWlyZW1lbnRzXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0JyksXG4gIEJ1bGxldCA9IHJlcXVpcmUoJy4vQnVsbGV0JyksXG4gIFNtb2tlID0gcmVxdWlyZSgnLi9TbW9rZScpLFxuICBwbGF5ZXJDb3VudCA9IDA7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGF5ZXIoKVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBQbGF5ZXIgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBQcm9wZXJ0aWVzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZClcbiAgICAgIHJldHVybiB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkLFxuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYWNjZWxlcmF0ZXI6IHRoaXMuYWNjZWxlcmF0ZXIsXG4gICAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgICBhY2NlbDogdGhpcy5hY2NlbCxcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aCxcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgYW1tbzogdGhpcy5hbW1vLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgIHNtb2tlczogdGhpcy5zbW9rZXMsXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlblN0YXRlKClcbiAgICB9O1xuICB9LFxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGUgcGxhbmUgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnVpZCA9IHZhbHVlLnVpZDtcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xuICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xuICAgIHRoaXMuaGVhbHRoID0gdmFsdWUuaGVhbHRoO1xuICAgIHRoaXMuYWNjZWxlcmF0ZXIgPSB2YWx1ZS5hY2NlbGVyYXRlcjtcbiAgICB0aGlzLmFtbW8gPSB2YWx1ZS5hbW1vO1xuICAgIHRoaXMucmFkaXVzID0gdmFsdWUucmFkaXVzO1xuICAgIHRoaXMuc21va2VzID0gdmFsdWUuc21va2VzO1xuXG4gICAgdGhpcy5zZXRDaGlsZHJlblN0YXRlKHZhbHVlLmNoaWxkcmVuKTtcbiAgfSxcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIE1ldGhvZHNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGluaXQ6IGZ1bmN0aW9uKHBhcmVudCwgaWQsIHVpZCkge1xuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcblxuICAgIHRoaXMudWlkID0gdWlkO1xuXG4gICAgdGhpcy50eXBlID0gJ3BsYXllcic7XG5cbiAgICB0aGlzLkdMT0JBTFMgPSB7XG4gICAgICBWRUxPQ0lUWV9NQVg6IDYwMCxcbiAgICAgIFZFTE9DSVRZX01JTjogOTAsXG4gICAgICBCQU5LX1JBVEU6IE1hdGguUEkgLyAyLFxuICAgICAgQUNDRUxFUkFUSU9OX1JBVEU6IDI1MCxcbiAgICAgIERFQ0VMRVJBVElPTl9SQVRFOiAxMDAsXG4gICAgICBTTU9LRV9NQVg6IDIwLFxuICAgICAgU01PS0VfU1RBUlRfSEVBTFRIOiA2MCxcbiAgICAgIFNNT0tFX1RIUkVTSE9MRDogNVxuICAgIH07XG5cbiAgICB0aGlzLmJ1bGxldFByb3BzID0ge1xuICAgICAgZmlyZVJhdGU6IDEwMCxcbiAgICAgIGZpcmVWZWxvY2l0eTogNTAwXG4gICAgfTtcblxuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA0MDA7XG4gICAgdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gMDtcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICB0aGlzLmFtbW8gPSAxMDAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLkdMT0JBTFMuVkVMT0NJVFlfTUlOO1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdGhpcy5yYWRpdXMgPSAxNTtcblxuICAgIHRoaXMuc21va2VzID0gMDtcblxuICAgIHRoaXMudHJpZ2dlckRvd24gPSBmYWxzZTtcblxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Ntb2tlcycpKSh0aGlzLkdMT0JBTFMpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nJykpKHRoaXMud29ybGQpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzJykpKHRoaXMuYnVsbGV0UHJvcHMpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19FeHBsb2RlcycpKSh0aGlzLkdMT0JBTFMpKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xuXG4gICAgdGhpcy5idWxsZXRQcm9wcy5maXJlVmVsb2NpdHkgPSA1MDAuMCArIHRoaXMudmVsb2NpdHk7XG4gIH0sXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xuICAgIHRoaXMuX3N1cGVyKHBoYXNlcik7XG5cbiAgICB0aGlzLnNwcml0ZS5kaXNwbGF5U3RhdHVzUmluZyh0cnVlLCB0aGlzLmhlYWx0aCk7XG4gIH0sXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLnBsYW5lKDAsIDApO1xuXG4gICAgd2luZG93LmNsaWVudC5nR2FtZU9iamVjdHMuYWRkKHRoaXMuc3ByaXRlKTtcbiAgfSxcbiAgbmV3Q2hpbGRGcm9tU3RhdGU6IGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XG4gICAgdmFyIGJ1bGxldCA9IG5ldyBCdWxsZXQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XG4gICAgYnVsbGV0LnNldFN0YXRlKGNoaWxkU3RhdGUpO1xuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hZGQoYnVsbGV0KTtcbiAgICByZXR1cm4gYnVsbGV0O1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmJ1bGxldHMgPSBbXTtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XG4gICAgfVxuICB9LFxuICBoaXQ6IGZ1bmN0aW9uIChwcm9qZWN0aWxlLCBkaXN0YW5jZSkge1xuICAgIHRoaXMuaGVhbHRoIC09IDEgKiAocHJvamVjdGlsZS52ZWxvY2l0eSAvIDEwMDAuMCkgKiBNYXRoLm1heCgxNSAtIGRpc3RhbmNlLCAxKTtcbiAgICB0aGlzLmhlYWx0aCA9IHRoaXMuaGVhbHRoIDwgMCA/IDAgOiB0aGlzLmhlYWx0aDtcbiAgfVxufSk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNtb2tlKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFNtb2tlID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcclxuICAgICAgdGltZVN0YXJ0IDogdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXHJcbiAgICAgIGJhbms6IHRoaXMuYmFuayxcclxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHlcclxuICAgIH07XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGUgU21va2UgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB2YWx1ZS54O1xyXG4gICAgdGhpcy55ID0gdmFsdWUueTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSB2YWx1ZS5kdXJhdGlvbjtcclxuICAgIHRoaXMudGltZVN0YXJ0ID0gdmFsdWUudGltZVN0YXJ0O1xyXG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcclxuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcclxuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQsIHgsIHksIGFuZ2xlLCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xyXG5cclxuICAgIHRoaXMuR0xPQkFMUyA9IHtcclxuICAgICAgVkVMT0NJVFlfTUFYOiA2MDAsXHJcbiAgICAgIFZFTE9DSVRZX01JTjogMFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRpbWVTdGFydCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gKE1hdGgucmFuZG9tKCkgKiAyLjAgKyAxLjApICogMTAwMC4wO1xyXG4gICAgdGhpcy5iYW5rID0gLTEgKyAoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XHJcbiAgICB0aGlzLmFjY2VsZXJhdG9yID0gMDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdzbW9rZSc7XHJcblxyXG4gICAgLy90aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOmZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBoYXNlcik7XHJcblxyXG4gICAgdmFyIGVsYXBzZWQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHJhdGlvID0gMS4wIC0gKGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRMaWZlKHJhdGlvKTtcclxuXHJcbiAgICBpZiAocmF0aW8gPCAwLjEpXHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5zbW9rZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaylcclxuICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gU21va2U7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0JyksXHJcbiAgQmlyZCA9IHJlcXVpcmUoJy4vQmlyZCcpLFxyXG4gIFNtb2tlID0gcmVxdWlyZSgnLi9TbW9rZScpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyksXHJcbiAgUGxhbmVQYXJ0ID0gcmVxdWlyZSgnLi9QbGFuZVBhcnQnKSxcclxuICBIYXNoQXJyYXkgPSByZXF1aXJlKCcuLi9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCaXJkKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFdvcmxkID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzZXRTdGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpXHJcbiAgICAgIGlmIChrZXkgIT0gJ2NoaWxkcmVuJylcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZVtrZXldO1xyXG5cclxuICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKSlcclxuICAgICAgdGhpcy5zZXRDaGlsZHJlblN0YXRlKHZhbHVlLmNoaWxkcmVuKTtcclxuICB9LFxyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgdGlsZVdpZHRoOiB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgdGlsZUhlaWdodDogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICB0aWxlczogdGhpcy50aWxlcyxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlblN0YXRlKClcclxuICAgIH07XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1dvcmxkIGluaXQhJyk7XHJcbiAgICB0aGlzLnR5cGUgPSAnd29ybGQnO1xyXG4gICAgdGhpcy5fc3VwZXIobnVsbCwgJ3Jvb3QnKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIGlmICghZWxhcHNlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICAgXHJcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcclxuICB9LFxyXG4gIGJ1aWxkQ2hpbGRyZW5PYmplY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0Q2hpbGRyZW4obmV3IEhhc2hBcnJheShbJ19pZCcsICd1aWQnLCAndHlwZSddKSk7XHJcbiAgfSxcclxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgIHZhciBjaGlsZDtcclxuXHJcbiAgICBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdiaXJkJylcclxuICAgICAgY2hpbGQgPSBuZXcgQmlyZCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGVsc2UgaWYgKGNoaWxkU3RhdGUudHlwZSA9PSAncGxheWVyJylcclxuICAgICAgY2hpbGQgPSBuZXcgUGxheWVyKHRoaXMsIGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgZWxzZSBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdzbW9rZScpXHJcbiAgICAgIGNoaWxkID0gbmV3IFNtb2tlKHRoaXMsIGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgZWxzZSBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdwbGFuZXBhcnQnKVxyXG4gICAgICBjaGlsZCA9IG5ldyBQbGFuZVBhcnQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNoaWxkU3RhdGUpO1xyXG4gICAgICB0aHJvdyBFcnJvcignQ2Fubm90IGZpZ3VyZSBvdXQgd2hhdCB0aGUgaGVsbCBhIFxcJycgKyBjaGlsZFN0YXRlLnR5cGUgKyAnXFwnIGlzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLnNldFN0YXRlKGNoaWxkU3RhdGUpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gV29ybGQ7IiwidmFyIEhhc2hBcnJheSA9IGZ1bmN0aW9uKGtleUZpZWxkcywgY2FsbGJhY2spIHtcbiAgdGhpcy5fbWFwID0ge307XG4gIHRoaXMuX2xpc3QgPSBbXTtcbiAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gIHRoaXMua2V5RmllbGRzID0ga2V5RmllbGRzO1xuXG4gIHRoaXMuX19kZWZpbmVHZXR0ZXJfXygnYWxsJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3Q7XG4gIH0pO1xuXG4gIHRoaXMuX19kZWZpbmVHZXR0ZXJfXygnbWFwJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfSk7XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soJ2NvbnN0cnVjdCcpO1xuICB9XG59O1xuXG5IYXNoQXJyYXkucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMua2V5RmllbGRzKSB7XG4gICAgICAgIGtleSA9IHRoaXMua2V5RmllbGRzW2tleV07XG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5maW5kKG9iaiwga2V5KTtcbiAgICAgICAgaWYgKGluc3QpIHtcbiAgICAgICAgICBpZiAodGhpcy5fbWFwW2luc3RdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWFwW2luc3RdLmluZGV4T2Yob2JqKSAhPSAtMSkge1xuICAgICAgICAgICAgICAvLyBDYW5ub3QgYWRkIHRoZSBzYW1lIGl0ZW0gdHdpY2VcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbWFwW2luc3RdLnB1c2gob2JqKTtcbiAgICAgICAgICB9IGVsc2UgdGhpcy5fbWFwW2luc3RdID0gW29ial07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdC5wdXNoKG9iaik7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdhZGQnLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcbiAgICB9XG4gIH0sXG4gIGFkZE1hcDogZnVuY3Rpb24oa2V5LCBvYmopIHtcbiAgICB0aGlzLl9tYXBba2V5XSA9IG9iajtcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygnYWRkTWFwJywge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgb2JqOiBvYmpcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gKCEodGhpcy5fbWFwW2tleV0gaW5zdGFuY2VvZiBBcnJheSkgfHwgdGhpcy5fbWFwW2tleV0ubGVuZ3RoICE9IDEpID8gdGhpcy5fbWFwW2tleV0gOiB0aGlzLl9tYXBba2V5XVswXTtcbiAgfSxcbiAgZ2V0QWxsOiBmdW5jdGlvbihrZXlzKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBrZXlzKVxuICAgICAgcmVzID0gcmVzLmNvbmNhdCh0aGlzLmdldEFzQXJyYXkoa2V5c1trZXldKSk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9LFxuICBnZXRBc0FycmF5OiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwW2tleV0gfHwgW107XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICB9LFxuICBoYXNNdWx0aXBsZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFtrZXldIGluc3RhbmNlb2YgQXJyYXk7XG4gIH0sXG4gIHJlbW92ZUJ5S2V5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVtb3ZlZCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gYXJndW1lbnRzW2ldO1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5fbWFwW2tleV0uY29uY2F0KCk7XG4gICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgcmVtb3ZlZCA9IHJlbW92ZWQuY29uY2F0KGl0ZW1zKTtcbiAgICAgICAgZm9yICh2YXIgaiBpbiBpdGVtcykge1xuICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbal07XG4gICAgICAgICAgZm9yICh2YXIgaXggaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAgICAgIHZhciBrZXkyID0gdGhpcy5maW5kKGl0ZW0sIHRoaXMua2V5RmllbGRzW2l4XSk7XG4gICAgICAgICAgICBpZiAoa2V5MiAmJiB0aGlzLl9tYXBba2V5Ml0pIHtcbiAgICAgICAgICAgICAgdmFyIGl4ID0gdGhpcy5fbWFwW2tleTJdLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICAgIGlmIChpeCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcFtrZXkyXS5zcGxpY2UoaXgsIDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX21hcFtrZXkyXS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbWFwW2tleTJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKHRoaXMuX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlQnlLZXknLCByZW1vdmVkKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgaXggaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZmluZChpdGVtLCB0aGlzLmtleUZpZWxkc1tpeF0pO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgdmFyIGl4ID0gdGhpcy5fbWFwW2tleV0uaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICBpZiAoaXggIT0gLTEpXG4gICAgICAgICAgICB0aGlzLl9tYXBba2V5XS5zcGxpY2UoaXgsIDEpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX21hcFtrZXldLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKHRoaXMuX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZScsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuICByZW1vdmVBbGw6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbGQgPSB0aGlzLl9saXN0LmNvbmNhdCgpO1xuICAgIHRoaXMuX21hcCA9IHt9O1xuICAgIHRoaXMuX2xpc3QgPSBbXTtcblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmUnLCBvbGQpO1xuICAgIH1cbiAgfSxcbiAgZmluZDogZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9ialtwYXRoXTtcbiAgICB9XG5cbiAgICB2YXIgZHVwID0gcGF0aC5jb25jYXQoKTtcbiAgICAvLyBlbHNlIGFzc3VtZSBhcnJheS5cbiAgICB3aGlsZSAoZHVwLmxlbmd0aCAmJiBvYmopIHtcbiAgICAgIG9iaiA9IG9ialtkdXAuc2hpZnQoKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgY2xvbmU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIG4gPSBuZXcgSGFzaEFycmF5KHRoaXMua2V5RmllbGRzLmNvbmNhdCgpLCBjYWxsYmFjayA/IGNhbGxiYWNrIDogdGhpcy5jYWxsYmFjayk7XG4gICAgbi5hZGQuYXBwbHkobiwgdGhpcy5hbGwuY29uY2F0KCkpO1xuICAgIHJldHVybiBuO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hBcnJheTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCaXJkU3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIEJpcmRTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICBcclxuICAvLyBhZGQgdGhlIGJpcmRTcHJpdGUgXHJcbiAgdGhpcy5iaXJkU3ByaXRlICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYmlyZCcpO1xyXG4gICBcclxuICAvLyB5b3UgY2FuJ3Qgc2V0IHRoZSBhbmNob3IgcG9pbnQgb2YgYSBncm91cCwgc28gZm9yIHggJiB5IHRvIGNvcnJlc3BvbmRcclxuICAvLyB0byB0aGUgQmlyZFNwcml0ZSdzIGNlbnRlciB3ZSBoYXZlIHRvIG9mZnNldCBpdCBtYW51YWxseVxyXG4gIHRoaXMuYmlyZFNwcml0ZS54ID0gLXRoaXMuYmlyZFNwcml0ZS53aWR0aCAgLyAyLjA7XHJcbiAgdGhpcy5iaXJkU3ByaXRlLnkgPSAtdGhpcy5iaXJkU3ByaXRlLmhlaWdodCAvIDIuMDtcclxufTtcclxuXHJcbkJpcmRTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuQmlyZFNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCaXJkU3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5CaXJkU3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxuICB0aGlzLmFuZ2xlID0gbW9kZWwuYW5nbGUgKiA1Ny4yOTU3Nzk1O1xyXG4gIHRoaXMuc2NhbGUueCA9IHRoaXMuc2NhbGUueSA9IG1vZGVsLnNjYWxlO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuYmlyZCA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCaXJkU3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSkpO1xyXG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJ1bGxldFNwcml0ZSgpIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBCdWxsZXRTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICBcclxuICAvLyBhZGQgdGhlIEJ1bGxldFNwcml0ZSBcclxuICB0aGlzLkJ1bGxldFNwcml0ZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2J1bGxldCcpO1xyXG59O1xyXG5cclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCdWxsZXRTcHJpdGU7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQdWJsaWMgTWV0aG9kcyBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5idWxsZXQgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgQnVsbGV0U3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSkpO1xyXG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFBsYW5lUGFydFNwcml0ZSgpIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBQbGFuZVBhcnRTcHJpdGUoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcblxyXG4gIC8vIGFkZCB0aGUgUGxhbmVQYXJ0U3ByaXRlIFxyXG4gIHRoaXMucGxhbmVQYXJ0U3ByaXRlID0gdGhpcy5jcmVhdGUoMCwgMCwgJ3BsYW5lcGFydHMnKTtcclxuICB0aGlzLnBsYW5lUGFydFNwcml0ZS54ID0gLXRoaXMucGxhbmVQYXJ0U3ByaXRlLndpZHRoIC8gMi4wO1xyXG4gIHRoaXMucGxhbmVQYXJ0U3ByaXRlLnkgPSAtdGhpcy5wbGFuZVBhcnRTcHJpdGUuaGVpZ2h0IC8gMi4wO1xyXG4gIC8vMCAtIHJpZ2h0IHdpbmdcclxuICAvLzEgLSBsZWZ0IHdpbmdcclxuICAvLzIgLSB0YWlsXHJcbiAgLy8zIC0gYm9keVxyXG4gIC8vNCAtIGVuZ2luZVxyXG4gIHRoaXMucGxhbmVQYXJ0U3ByaXRlLmZyYW1lID0gTWF0aC5taW4oZnJhbWUsIDQpO1xyXG59O1xyXG5cclxuUGxhbmVQYXJ0U3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcblBsYW5lUGFydFNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQbGFuZVBhcnRTcHJpdGU7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQdWJsaWMgTWV0aG9kcyBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuUGxhbmVQYXJ0U3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxuICB0aGlzLmFuZ2xlID0gbW9kZWwuYW5nbGU7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLnBsYW5lUGFydCA9IGZ1bmN0aW9uKHgsIHksIGZyYW1lLCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGxhbmVQYXJ0U3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSwgZnJhbWUpKTtcclxufTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogUGxhbmUoKSBcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5mdW5jdGlvbiBQbGFuZShnYW1lLCB4LCB5KSB7XG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xuIFxuICAvLyBjb25maWd1cmUgZ3JvdXAgXG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG4gIHRoaXMuaGVhbHRoID0gMTAwO1xuICBcbiAgLy8gYWRkIHRoZSBhaXJwbGFuZSBcbiAgdGhpcy5haXJwbGFuZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2FpcnBsYW5lJyk7XG4gICBcbiAgLy8geW91IGNhbid0IHNldCB0aGUgYW5jaG9yIHBvaW50IG9mIGEgZ3JvdXAsIHNvIGZvciB4ICYgeSB0byBjb3JyZXNwb25kXG4gIC8vIHRvIHRoZSBwbGFuZSdzIGNlbnRlciB3ZSBoYXZlIHRvIG9mZnNldCBpdCBtYW51YWxseVxuICB0aGlzLmFpcnBsYW5lLnggPSAtdGhpcy5haXJwbGFuZS53aWR0aCAgLyAyLjA7XG4gIHRoaXMuYWlycGxhbmUueSA9IC10aGlzLmFpcnBsYW5lLmhlaWdodCAvIDIuMDtcblxuICAvLyBhZGQgdGhlIHN0YXR1cyByaW5nIFxuICB0aGlzLnN0YXR1c1JpbmcgPSBnYW1lLmFkZC5ncmFwaGljcygwLjAsIDAuMCwgdGhpcyk7XG59O1xuXG5QbGFuZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xuUGxhbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGxhbmU7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQdWJsaWMgTWV0aG9kcyBcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblBsYW5lLnByb3RvdHlwZS5kaXNwbGF5U3RhdHVzUmluZyA9IGZ1bmN0aW9uKGRpc3BsYXlzU3RhdHVzUmluZywgaGVhbHRoKSB7XG4gIHZhciByYXRpbyA9IChoZWFsdGggLyAxMDAuMCk7XG5cbiAgdGhpcy5zdGF0dXNSaW5nLmFscGhhID0gZGlzcGxheXNTdGF0dXNSaW5nID8gMS4wICogcmF0aW8gIDogMC4wO1xuXG4gIGlmIChkaXNwbGF5c1N0YXR1c1JpbmcpIHtcbiAgICB0aGlzLnN0YXR1c1JpbmcuY2xlYXIoKTtcbiAgICB0aGlzLnN0YXR1c1JpbmcubGluZVN0eWxlKDMuMCwgMHgzYmViNzIpO1xuICAgIFxuICAgIHRoaXMuc3RhdHVzUmluZy5hcmMoMCwgMCwgMjAuMCwgLShNYXRoLlBJLzQpICogcmF0aW8sIChNYXRoLlBJIC8gNCkgKiByYXRpbyApOyBcbiAgfVxufTtcblxuUGxhbmUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHRoaXMueCA9IG1vZGVsLng7XG4gIHRoaXMueSA9IG1vZGVsLnk7XG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZSAqIDU3LjI5NTc3OTU7XG5cbiAgaWYgKG1vZGVsLmJhbmsgPCAwKVxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAyO1xuICBlbHNlIGlmIChtb2RlbC5iYW5rID4gMClcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMTtcbiAgZWxzZSBcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMDtcbn07XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBGYWN0b3J5IFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5wbGFuZSA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQbGFuZSh0aGlzLmdhbWUsIHgsIHkpKTtcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU21va2VTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gU21va2VTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICB0aGlzLmFuZ2xlID0gMzYwICogTWF0aC5yYW5kb20oKTtcclxuICB0aGlzLnN0YXJ0U2NhbGUgPSBNYXRoLnJhbmRvbSgpICsgMC4zO1xyXG4gIC8vIGFkZCB0aGUgU21va2VTcHJpdGUgXHJcbiAgdGhpcy5zbW9rZVNwcml0ZSA9IHRoaXMuY3JlYXRlKDAsIDAsICdzbW9rZScpO1xyXG4gIHRoaXMuc21va2VTcHJpdGUueCA9IC10aGlzLnNtb2tlU3ByaXRlLndpZHRoIC8gMi4wO1xyXG4gIHRoaXMuc21va2VTcHJpdGUueSA9IC10aGlzLnNtb2tlU3ByaXRlLmhlaWdodCAvIDIuMDtcclxuICB0aGlzLnNtb2tlU3ByaXRlLmZyYW1lID0gMDtcclxufTtcclxuXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNtb2tlU3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxufTtcclxuXHJcblNtb2tlU3ByaXRlLnByb3RvdHlwZS5zZXRMaWZlID0gZnVuY3Rpb24gKGxpZmUpIHtcclxuICBpZiAodGhpcy5zbW9rZVNwcml0ZSlcclxuICAgIHRoaXMuc21va2VTcHJpdGUuZnJhbWUgPSBNYXRoLmZsb29yKGxpZmUgKiA0KTtcclxuXHJcbiAgdGhpcy5zY2FsZS54ID0gdGhpcy5zY2FsZS55ID0gKHRoaXMuc3RhcnRTY2FsZSAqIGxpZmUpICsgMC4yO1xyXG5cclxuICB0aGlzLmFscGhhID0gbGlmZSAqIDAuODtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuc21va2UgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU21va2VTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwidmFyIFVzZXJJbnB1dFN0YXRlID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL1VzZXJTdGF0ZScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU0NTdGF0ZU1hbmFnZXIoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU0NTdGF0ZU1hbmFnZXIgPSBmdW5jdGlvbihmcHMsIGdhbWVJbnRlcmZhY2UpIHtcclxuICB0aGlzLmdhbWVJbnRlcmZhY2UgPSBnYW1lSW50ZXJmYWNlO1xyXG4gIHRoaXMuZnJhbWVUaW1lID0gMTAwMC4wIC8gZnBzO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNDU3RhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgdXNlcklucHV0U3RhdGVzOiBbXSxcclxuICBsYXN0VXBkYXRlVGltZUVuZDogdW5kZWZpbmVkLFxyXG4gIGVzdFNlcnZlclRpbWU6IHVuZGVmaW5lZCxcclxuICBsYXN0U2VydmVyU3RhdGU6IHVuZGVmaW5lZCxcclxuICBpbnRlcnZhbElkOiB1bmRlZmluZWQsXHJcbiAgbGF0ZW5jeTogMCxcclxuICBsYXN0U2VuZFRvU2VydmVyVGltZTogMTAwMC4wIC8gMzAuMCxcclxuICAvKipcclxuICAgKiBTZW5kIGFuIHVwZGF0ZSB0byB0aGUgc2VydmVyIGV2ZXJ5IHRoaXMgc28gb2Z0ZW4uXHJcbiAgICovXHJcbiAgc2VydmVyVXBkYXRlSW50ZXJ2YWw6IDEwLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmludGVydmFsSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLmZyYW1lVGltZSk7XHJcbiAgfSxcclxuICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZClcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gIHtcclxuICAgIGlmICh0aGlzLm5ld1NlcnZlclN0YXRlICYmICF0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSlcclxuICAgICAgdGhpcy5sYXN0U2VydmVyU3RhdGUgPSB0aGlzLm5ld1NlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIEFzIGxvbmcgYXMgdGhlIHNlcnZlciBoYXMgbmV2ZXIgc2VudCB1cyBhIHN0YXRlLCB3ZSBkbyBub3RoaW5nLlxyXG4gICAgaWYgKCF0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSB8fCB0aGlzLmxhdGVuY3kgPT0gMClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgLy8gVGltZSB0aGlzIHVwZGF0ZSBzdGFydGVkXHJcbiAgICAgIHVwZGF0ZVN0YXJ0ID0gdGhpcy5ub3csXHJcbiAgICAgIC8vIFRpbWUgc2luY2Ugb3VyIGxhc3QgdXBkYXRlIGVuZGVkXHJcbiAgICAgIGVsYXBzZWQgPSB1cGRhdGVTdGFydCAtIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQsXHJcbiAgICAgIC8vIFRoZSBzdGF0ZSBvZiBhbGwgdXNlciBpbnB1dFxyXG4gICAgICB1c2VySW5wdXQgPSB0aGlzLmdhbWVJbnRlcmZhY2UudXNlcklucHV0O1xyXG5cclxuICAgIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQgPSB0aGlzLm5vdztcclxuXHJcbiAgICAvLyBTZXQgbGFzdCBzZXJ2ZXIgc3RhdGUgdG8gZWl0aGVyIHRoZSB1cGRhdGVcclxuICAgIHRoaXMubGFzdFNlcnZlclN0YXRlID0gdGhpcy5uZXdTZXJ2ZXJTdGF0ZSB8fCB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZ2FtZSBpbnRlcmZhY2UgdG8gb2xkIHNlcnZlciBzdGF0ZVxyXG4gICAgdGhpcy5nYW1lSW50ZXJmYWNlLnN0YXRlID0gdGhpcy5sYXN0U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gRXN0aW1hdGUgdGhlIGN1cnJlbnQgc2VydmVyIHRpbWUgYXQgdGhpcyBleGFjdCBwb2ludCAodGhlIHNlcnZlciB3aWxsIGJlIGJlaGluZCB1cyBieSBhIHBlcmlvZCBvZiB0aW1lKVxyXG4gICAgdGhpcy5lc3RTZXJ2ZXJUaW1lID0gTWF0aC5yb3VuZCh0aGlzLm5ld1NlcnZlclN0YXRlID8gdGhpcy5uZXdTZXJ2ZXJTdGF0ZS50aW1lICsgKHRoaXMubGF0ZW5jeSAvIDIuMCkgOiB0aGlzLmVzdFNlcnZlclRpbWUgKyBlbGFwc2VkKTtcclxuXHJcbiAgICAvLyBFc3RhYmxpc2ggb3VyIHNpbXVsYXRpb24gc3RhcnRpbmcgdGltZS5cclxuICAgIHZhciB0ID0gdGhpcy5sYXN0U2VydmVyU3RhdGUudGltZSxcclxuICAgICAgc2ltRWxhcHNlZCA9IDAuMDtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IGFueSBvbGQgdXNlciBmcmFtZSBzdGF0ZXNcclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzID0gdGhpcy51c2VySW5wdXRTdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgICByZXR1cm4gdXNlcklucHV0U3RhdGUudGltZSA+IHNlbGYubGFzdFNlcnZlclN0YXRlLnRpbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSBhbGwgZnJhbWVzIHRoZSBzZXJ2ZXIgaGFzIG5vdCB5ZXQgcHJvY2Vzc2VkLlxyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgICAgc2ltRWxhcHNlZCA9IHVzZXJJbnB1dFN0YXRlLnRpbWUgLSB0O1xyXG4gICAgICBzZWxmLmdhbWVJbnRlcmZhY2Uuc2ltdWxhdGVVcGRhdGUodXNlcklucHV0U3RhdGUuaW5wdXQsIHNpbUVsYXBzZWQpO1xyXG4gICAgICB0ID0gdXNlcklucHV0U3RhdGUudGltZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNhdmUgb3VyIGN1cnJlbnQgc3RhdGVcclxuICAgIHZhciBuZXdVc2VySW5wdXRTdGF0ZSA9IG5ldyBVc2VySW5wdXRTdGF0ZSh1c2VySW5wdXQsIHRoaXMuZXN0U2VydmVyVGltZSk7XHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcy5wdXNoKG5ld1VzZXJJbnB1dFN0YXRlKTtcclxuXHJcbiAgICAvLyBGaW5pc2ggc2ltbHVhdGluZyB0aGUgcmVtYWluaW5nIG1pbGxpc2Vjb25kcyBiYXNlZCBvbiB0aGUgY3VycmVudCB1c2VyIGlucHV0LlxyXG4gICAgdGhpcy5nYW1lSW50ZXJmYWNlLnNpbXVsYXRlVXBkYXRlKG5ld1VzZXJJbnB1dFN0YXRlLmlucHV0LCB0aGlzLmVzdFNlcnZlclRpbWUgLSB0KTtcclxuXHJcbiAgICBpZiAodGhpcy5lc3RTZXJ2ZXJUaW1lIC0gdGhpcy5sYXN0U2VuZFRvU2VydmVyVGltZSA+IHRoaXMuc2VydmVyVXBkYXRlSW50ZXJ2YWwpXHJcbiAgICB7XHJcbiAgICAgIC8vIFNlbmQgb3VyIHN0YXRlIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgdGhpcy5nYW1lSW50ZXJmYWNlLnVwZGF0ZVNlcnZlcihuZXdVc2VySW5wdXRTdGF0ZSk7XHJcblxyXG4gICAgICB0aGlzLmxhc3RTZW5kVG9TZXJ2ZXJUaW1lID0gdGhpcy5lc3RTZXJ2ZXJUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGl0LCBzbyB0aHJvdyBpdCBhd2F5LlxyXG4gICAgdGhpcy5uZXdTZXJ2ZXJTdGF0ZSA9IHVuZGVmaW5lZDtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW50ZXJ2YWxIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU0NTdGF0ZU1hbmFnZXI7IiwidmFyXHJcbiAgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9HYW1lT2JqZWN0JyksXHJcbiAgV29ybGQgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvV29ybGQnKSxcclxuICBQbGF5ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyJyksXHJcbiAgTGF0ZW5jeUFuYWx5emVyID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL0xhdGVuY3lBbmFseXplcicpLFxyXG4gIFNDU3RhdGVNYW5hZ2VyID0gcmVxdWlyZSgnLi9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXInKSxcclxuICBVc2VySW5wdXRQcm9jZXNzb3IgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvVXNlcklucHV0UHJvY2Vzc29yJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEZQUyA9IDYwLFxyXG4gIFNFUlZFUl9USU1FT1VUX01TID0gMTAwMDAsXHJcbiAgUExBTkVfR0xPQkFMUyA9IFBsYXllci5wcm90b3R5cGUuR0xPQkFMUztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNreUR1ZWxDbGllbnQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU2t5RHVlbENsaWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMubGF0ZW5jeUFuYWx5emVyID0gbmV3IExhdGVuY3lBbmFseXplcigpO1xyXG4gIHRoaXMuc2NTdGF0ZU1hbmFnZXIgPSBuZXcgU0NTdGF0ZU1hbmFnZXIoNjAsIHRoaXMpO1xyXG4gIHRoaXMudXNlcklucHV0UHJvY2Vzc29yID0gbmV3IFVzZXJJbnB1dFByb2Nlc3NvcigpO1xyXG5cclxuICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuU2t5RHVlbENsaWVudC5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHN0YXJ0ZWQ6IGZhbHNlLFxyXG4gIGlucHV0OiB7fSxcclxuICBwbGF5ZXI6IHVuZGVmaW5lZCxcclxuICBlcnJvclRleHQ6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBzdGF0ZSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIHNldCBzdGF0ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy53b3JsZC5zZXRTdGF0ZSh2YWx1ZS53b3JsZCk7XHJcbiAgfSxcclxuICBnZXQgdXNlcklucHV0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXA6IHRoaXMuaW5wdXQudXAuaXNEb3duLFxyXG4gICAgICBkb3duOiB0aGlzLmlucHV0LmRvd24uaXNEb3duLFxyXG4gICAgICBsZWZ0OiB0aGlzLmlucHV0LmxlZnQuaXNEb3duLFxyXG4gICAgICByaWdodDogdGhpcy5pbnB1dC5yaWdodC5pc0Rvd24sXHJcbiAgICAgIHRyaWdnZXI6IHRoaXMuaW5wdXQudHJpZ2dlci5pc0Rvd25cclxuICAgIH07XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGxhdGVuY3lDaGVjazogZnVuY3Rpb24gKGNvdW50LCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpID0gMDtcclxuICAgICAgY291bnQgPSBjb3VudCB8fCAxMDtcclxuXHJcbiAgICBwaW5nKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGluZygpIHtcclxuICAgICAgc2VsZi5sYXRlbmN5QW5hbHl6ZXIuc3RhcnRUZXN0KCk7XHJcbiAgICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnBpbmcnLCBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKCkge1xyXG4gICAgICBzZWxmLmxhdGVuY3lBbmFseXplci5lbmRUZXN0KCk7XHJcbiAgICAgICgrK2kgPCBjb3VudCkgPyBwaW5nKCkgOiBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uIChyaWQpIHtcclxuICAgIHRoaXMucmlkID0gcmlkO1xyXG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmxhdGVuY3lDaGVjaygxMCwgdGhpcy5zdGFydFNlcnZlckNvbm5lY3Rpb24uYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBzdG9wOiBmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICB0aGlzLmVycm9yVGV4dCA9IHJlYXNvbjtcclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGF1c2UoKTtcclxuICB9LFxyXG4gIHN0YXJ0U2VydmVyQ29ubmVjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5sYXRlbmN5ID0gdGhpcy5sYXRlbmN5QW5hbHl6ZXIubGF0ZW5jeTtcclxuICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnN0YXJ0Jywge1xyXG4gICAgICByaWQ6IHRoaXMucmlkXHJcbiAgICB9LCB0aGlzLnNlcnZlckNvbm5lY3Rpb25fc3RhcnRlZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICAvL1NDU3RhdGVNYW5hZ2VyIEludGVyZmFjZVxyXG4gIHNpbXVsYXRlVXBkYXRlOiBmdW5jdGlvbiAodXNlcklucHV0LCBlbGFwc2VkKSB7XHJcbiAgICBlbGFwc2VkID0gIGVsYXBzZWQgLyAxMDAwLjA7XHJcblxyXG4gICAgaWYgKGVsYXBzZWQgPiBTRVJWRVJfVElNRU9VVF9NUylcclxuICAgIHtcclxuICAgICAgdGhpcy5zdG9wKCdTZXJ2ZXIgZGlzY29ubmVjdGVkJyk7ICAgICAgXHJcbiAgICB9XHJcbiAgICBpZiAoZWxhcHNlZCA+IDAuMilcclxuICAgICAgdGhyb3cgRXJyb3IoJ0VsYXBzZWQgaXMgd2F5eXl5IHRvbyBoaWdoIG1hbi4gRGlkIHNlcnZlciBkaXNjb25uZWN0PycpO1xyXG5cclxuICAgIHRoaXMudXNlcklucHV0UHJvY2Vzc29yLnVwZGF0ZSh1c2VySW5wdXQsIGVsYXBzZWQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMud29ybGQudXBkYXRlKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgLy9TQ1N0YXRlTWFuYWdlciBJbnRlcmZhY2VcclxuICB1cGRhdGVTZXJ2ZXI6IGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIuc3RhcnRUZXN0KCk7XHJcbiAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci51c2VySW5wdXQnLCB0aGlzLnVzZXJJbnB1dCwgdGhpcy5zb2NrZXRfdXBkYXRlU2VydmVyUmVzcG9uc2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgc2V0dXBTdGFydFN0YXRlOiBmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWwgd29ybGQgc3RhdGUnLCBzdGF0ZS53b3JsZCk7XHJcblxyXG4gICAgdGhpcy53b3JsZC5zZXRTdGF0ZShzdGF0ZS53b3JsZCk7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLndvcmxkLmdldENoaWxkcmVuKCkuZ2V0KHRoaXMudWlkKTtcclxuXHJcbiAgICBpZiAoIXRoaXMucGxheWVyKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZyAoc3RhdGUpO1xyXG4gICAgICB0aHJvdyBFcnJvcignUGxheWVyIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiBpbmNvbWluZyBzdGF0ZSEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLm5ld1NlcnZlclN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5wbGF5KCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIEV2ZW50c1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2VydmVyQ29ubmVjdGlvbl9zdGFydGVkSGFuZGxlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHRoaXMudWlkID0gZGF0YS51aWQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1NFUlZFUiBDT05ORUNUSU9OIHN0YXJ0ZWQnLCBkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKCdXQUlUSU5HIGZvciBzZXJ2ZXIgc3RhdGUnKTtcclxuXHJcbiAgICBwb21lbG8ub24oJ3NlcnZlclN0YXRlJywgdGhpcy5zb2NrZXRfc2VydmVyU3RhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGxheSgpO1xyXG4gIH0sXHJcbiAgc29ja2V0X3NlcnZlclN0YXRlSGFuZGxlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIGlmICghdGhpcy5zY1N0YXRlTWFuYWdlci5sYXN0U2VydmVyU3RhdGUpXHJcbiAgICAgIHRoaXMuc2V0dXBTdGFydFN0YXRlKGRhdGEpO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLm5ld1NlcnZlclN0YXRlID0gZGF0YTtcclxuICAgIH1cclxuICB9LFxyXG4gIHNvY2tldF91cGRhdGVTZXJ2ZXJSZXNwb25zZUhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICB0aGlzLmxhdGVuY3lBbmFseXplci5lbmRUZXN0KCk7XHJcbiAgfVxyXG59O1xyXG5cclxud2luZG93LmNsaWVudCA9IG5ldyBTa3lEdWVsQ2xpZW50KCk7XHJcbiIsIi8qIGFuIGFqYXggbG9nIGZpbGUgdGFpbGVyIC8gdmlld2VyXHJcbmNvcHlyaWdodCAyMDA3IGpvaG4gbWlubmloYW4uXHJcbiBcclxuaHR0cDovL2ZyZWVwb3NpdG9yeS5jb21cclxuIFxyXG5SZWxlYXNlZCB1bmRlciB0aGVzZSB0ZXJtc1xyXG4xLiBUaGlzIHNjcmlwdCwgYXNzb2NpYXRlZCBmdW5jdGlvbnMgYW5kIEhUTUwgY29kZSAoXCJ0aGUgY29kZVwiKSBtYXkgYmUgdXNlZCBieSB5b3UgKFwidGhlIHJlY2lwaWVudFwiKSBmb3IgYW55IHB1cnBvc2UuXHJcbjIuIFRoaXMgY29kZSBtYXkgYmUgbW9kaWZpZWQgaW4gYW55IHdheSBkZWVtZWQgdXNlZnVsIGJ5IHRoZSByZWNpcGllbnQuXHJcbjMuIFRoaXMgY29kZSBtYXkgYmUgdXNlZCBpbiBkZXJpdmF0aXZlIHdvcmtzIG9mIGFueSBraW5kLCBhbnl3aGVyZSwgYnkgdGhlIHJlY2lwaWVudC5cclxuNC4gWW91ciB1c2Ugb2YgdGhlIGNvZGUgaW5kaWNhdGVzIHlvdXIgYWNjZXB0YW5jZSBvZiB0aGVzZSB0ZXJtcy5cclxuNS4gVGhpcyBub3RpY2UgbXVzdCBiZSBrZXB0IGludGFjdCB3aXRoIGFueSB1c2Ugb2YgdGhlIGNvZGUgdG8gcHJvdmlkZSBhdHRyaWJ1dGlvbi5cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3QoKSB7XHJcbiB2YXIgcmVxdWVzdCA9IG51bGw7XHJcbiAgdHJ5IHtcclxuICAgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIH0gY2F0Y2ggKHRyeW1pY3Jvc29mdCkge1xyXG4gICB0cnkge1xyXG4gICAgIHJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQXCIpO1xyXG4gICB9IGNhdGNoIChvdGhlcm1pY3Jvc29mdCkge1xyXG4gICAgIHRyeSB7XHJcbiAgICAgIHJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG4gICAgIH0gY2F0Y2ggKGZhaWxlZCkge1xyXG4gICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgfVxyXG4gICB9XHJcbiB9XHJcbiBcclxuIGlmIChyZXF1ZXN0ID09IG51bGwpIHtcclxuICAgYWxlcnQoXCJFcnJvciBjcmVhdGluZyByZXF1ZXN0IG9iamVjdCFcIik7XHJcbiB9IGVsc2Uge1xyXG4gICByZXR1cm4gcmVxdWVzdDtcclxuIH1cclxufVxyXG4gXHJcbnZhciByZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdCgpO1xyXG5cclxud2luZG93LmdldExvZyA9IGZ1bmN0aW9uKHRpbWVyKSB7XHJcbiAgdmFyIHVybCA9IFwiaHR0cDovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAhPSAnd3d3LnNreWR1ZWwuY29tJyA/ICc6MzAwMScgOiAnJykgKyBcIi9sb2cvZ2FtZS1zZXJ2ZXIubG9nXCI7XHJcbiAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB1cGRhdGVQYWdlO1xyXG4gIHJlcXVlc3Quc2VuZChudWxsKTtcclxuICBzdGFydFRhaWwodGltZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydFRhaWwodGltZXIpIHtcclxuICBpZiAodGltZXIgPT0gXCJzdG9wXCIpIHtcclxuICAgIHN0b3BUYWlsKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHQgPSBzZXRUaW1lb3V0KFwiZ2V0TG9nKClcIiwgMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wVGFpbCgpIHtcclxuICBjbGVhclRpbWVvdXQodCk7XHJcbiAgdmFyIHBhdXNlID0gXCJUaGUgbG9nIHZpZXdlciBoYXMgYmVlbiBwYXVzZWQuIFRvIGJlZ2luIHZpZXdpbmcgYWdhaW4sIGNsaWNrIHRoZSBTdGFydCBWaWV3ZXIgYnV0dG9uLlxcblwiO1xyXG4gIGxvZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpO1xyXG4gIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGF1c2UpO1xyXG4gIGxvZ0Rpdi5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbG9nRGl2LmNoaWxkTm9kZXNbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYWdlKCkge1xyXG4gIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICB2YXIgY3VycmVudExvZ1ZhbHVlID0gcmVxdWVzdC5yZXNwb25zZVRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgIGV2YWwoY3VycmVudExvZ1ZhbHVlKTtcclxuICAgICAgbG9nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dcIik7XHJcbiAgICAgIHZhciBsb2dMaW5lID0gJyAnO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY3VycmVudExvZ1ZhbHVlLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGxvZ0xpbmUgKz0gY3VycmVudExvZ1ZhbHVlW2ldICsgXCJcXG5cIjtcclxuICAgICAgfVxyXG4gICAgICBsb2dEaXYuaW5uZXJIVE1MID0gbG9nTGluZTtcclxuICAgIH0gZWxzZVxyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yISBSZXF1ZXN0IHN0YXR1cyBpcyBcIiArIHJlcXVlc3Quc3RhdHVzKTtcclxuICB9XHJcbn0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5NdXRhdGlvbk9ic2VydmVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIGlmIChjYW5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIHZhciBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVldWVMaXN0ID0gcXVldWUuc2xpY2UoKTtcbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBxdWV1ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaGlkZGVuRGl2LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ3llcycsICdubycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIl19
