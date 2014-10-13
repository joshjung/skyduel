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
},{"./game-server/node_modules/jclass/lib/jclass.min.js":2,"./shared/js/LatencyAnalyzer.js":5,"./shared/js/UserActions.js":6,"./shared/js/UserInputProcessor.js":7,"./shared/js/UserState.js":8,"./shared/js/characteristics/CharacteristicManager.js":9,"./shared/js/characteristics/Characteristic_DestroyOffScreen.js":11,"./shared/js/characteristics/Characteristic_Physics.js":12,"./shared/js/characteristics/Characteristic_ScreenWrapping.js":13,"./shared/js/characteristics/Characteristic_ShootsBullets.js":14,"./shared/js/gameObjects/Bird.js":15,"./shared/js/gameObjects/Bullet.js":16,"./shared/js/gameObjects/Player.js":17,"./shared/js/gameObjects/Smoke.js":18,"./shared/js/lib/HashArray.js":20,"./shared/js/sprites/BirdSprite.js":21,"./shared/js/sprites/BulletSprite.js":22,"./shared/js/sprites/PlaneSprite.js":23,"./shared/js/sprites/SmokeSprite.js":24,"./web-server/public/js/ServerClientStateManager.js":25,"./web-server/public/js/SkyDuelClient.js":26,"./web-server/public/js/logViewer.js":27}],2:[function(require,module,exports){
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
},{"_process":28}],3:[function(require,module,exports){
module.exports=require(2)
},{"/media/sf_dev/node/pomelo/skyduel/game-server/node_modules/jclass/lib/jclass.min.js":2,"_process":28}],4:[function(require,module,exports){
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
      else
        child.setState(childState);

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
    child.destroy();
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
},{"./characteristics/CharacteristicManager":9,"./lib/HashArray":20,"jclass":3}],5:[function(require,module,exports){
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
},{"../lib/HashArray":20}],10:[function(require,module,exports){
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
},{"./Characteristic_Physics":12}],11:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
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
},{"../gameObjects/Bullet":16}],15:[function(require,module,exports){
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
      radius: this.radius
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

    this.GLOBALS = {
      VELOCITY_MAX: Bird.velocity,
      VELOCITY_MIN: Bird.velocity,
    };

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_ScreenWrapping'))(this.world));
  },
  update: function (elapsed) {
    this.charManager.applyAll(elapsed);
    
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
},{"../GameObject":4,"../characteristics/Characteristic_Physics":12,"../characteristics/Characteristic_ScreenWrapping":13}],16:[function(require,module,exports){
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
      target.destroy();
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
},{"../GameObject":4,"../characteristics/Characteristic_Collides":10,"../characteristics/Characteristic_DestroyOffScreen":11,"../characteristics/Characteristic_Physics":12}],17:[function(require,module,exports){
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
      DECELERATION_RATE: 100
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

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_ScreenWrapping'))(this.world));
    this.charManager.add(new (require('../characteristics/Characteristic_ShootsBullets'))(this.bulletProps));
  },
  attemptSmokeDrop: function (elapsed) {
    var self= this;
    // Smoke drops are ONLY performed by the server
    if (typeof isClient === 'undefined' || isClient)
      return;

    if (this.health < 60 && this.smokes < 20)
    {
      var smokeDrop = (Math.random() * this.health) < 5.0;

      if (smokeDrop)
      {
        console.log('smoke', this.smokes)
        this.smokes++;
        var smoke = new Smoke(this, 'smoke' + this.randomId(), this.x, this.y, this.angle, function () {
          self.smokes--;
        });
        this.world.getChildren().add(smoke);
      }
    }
  },
  update: function (elapsed) {
    this.bulletProps.fireVelocity = 500.0 + this.velocity;

    if (typeof this.x == 'undefined' || this.x === null)
      throw Error('x is ',this.x);

    this.attemptSmokeDrop(elapsed);
    
    this._super(elapsed);
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
},{"../GameObject":4,"../characteristics/Characteristic_Physics":12,"../characteristics/Characteristic_ScreenWrapping":13,"../characteristics/Characteristic_ShootsBullets":14,"./Bullet":16,"./Smoke":18}],18:[function(require,module,exports){
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

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
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
},{"../GameObject":4,"../characteristics/Characteristic_Physics":12}],19:[function(require,module,exports){
var GameObject = require('../GameObject'),
  Bird = require('./Bird'),
  Smoke = require('./Smoke'),
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
    else if (childState.type == 'smoke')
      child = new Smoke(this, childState.id);
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
},{"../GameObject":4,"../lib/HashArray":20,"./Bird":15,"./Player":17,"./Smoke":18}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{"../../../shared/js/UserState":8}],26:[function(require,module,exports){
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

},{"../../../shared/js/GameObject":4,"../../../shared/js/LatencyAnalyzer":5,"../../../shared/js/UserInputProcessor":7,"../../../shared/js/gameObjects/Player":17,"../../../shared/js/gameObjects/World":19,"../../../shared/js/lib/HashArray":20,"./ServerClientStateManager":25}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4uanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nLmpzIiwic2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvQnVsbGV0LmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYXllci5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9TbW9rZS5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9Xb3JsZC5qcyIsInNoYXJlZC9qcy9saWIvSGFzaEFycmF5LmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvQmlyZFNwcml0ZS5qcyIsInNoYXJlZC9qcy9zcHJpdGVzL0J1bGxldFNwcml0ZS5qcyIsInNoYXJlZC9qcy9zcHJpdGVzL1BsYW5lU3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvU21va2VTcHJpdGUuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXIuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9Ta3lEdWVsQ2xpZW50LmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvbG9nVmlld2VyLmpzIiwiLi4vLi4vLi4vLi4vLi4vdXNyL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBMaWJyYXJ5XHJcbnZhciBpc0NsaWVudCA9IHRydWU7XHJcblxyXG5yZXF1aXJlKFwiLi9nYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzXCIpO1xyXG5cclxuLy8gU2hhcmVkXHJcblxyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvbGliL0hhc2hBcnJheS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY01hbmFnZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9TbW9rZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0J1bGxldC5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYXllci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9Vc2VyQWN0aW9ucy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJTdGF0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qc1wiKTtcclxuXHJcbi8vIFNwcml0ZXNcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvU21va2VTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL1BsYW5lU3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9CdWxsZXRTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL0JpcmRTcHJpdGUuanNcIik7XHJcblxyXG4vLyBDbGllbnRcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL0xhdGVuY3lBbmFseXplci5qc1wiKTtcclxucmVxdWlyZShcIi4vd2ViLXNlcnZlci9wdWJsaWMvanMvU2VydmVyQ2xpZW50U3RhdGVNYW5hZ2VyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi93ZWItc2VydmVyL3B1YmxpYy9qcy9Ta3lEdWVsQ2xpZW50LmpzXCIpO1xyXG5cclxuLy8gVmlld1xyXG5yZXF1aXJlKFwiLi93ZWItc2VydmVyL3B1YmxpYy9qcy9sb2dWaWV3ZXIuanNcIik7IiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCl7XG4vKiFcbiAqIEphdmFTY3JpcHQgSW5oZXJpdGFuY2Ugd2l0aCBQcml2YXRlIE1lbWJlcnNcbiAqIExhcmdlbHkgYmFzZWQgdXBvbiBKb2huIFJlc2lnJ3MgaW5oZXJpdGFuY2UgdGVjaG5pcXVlLFxuICogKHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvc2ltcGxlLWphdmFzY3JpcHQtaW5oZXJpdGFuY2UvKVxuICogdGhhdCB3YXMgaW5zcGlyZWQgYnkgYmFzZTIgYW5kIFByb3RvdHlwZS5cbiAqXG4gKiBXb3JrcyB3aXRoIGFuZCB3aXRob3V0IG5vZGUuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZVxuICpcbiAqIHYyLjAuNCwgTWFyY2VsIFJpZWdlciwgMjAxM1xuICogaHR0cHM6Ly9naXRodWIuY29tL3JpZ2EvamNsYXNzXG4gKiBodHRwczovL25wbWpzLm9yZy9wYWNrYWdlL2pjbGFzc1xuICovXG52YXIgbnMsbnNLZXk7XG5pZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIiYmdHlwZW9mIHByb2Nlc3MhPT1cInVuZGVmaW5lZFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIiYmbW9kdWxlLmV4cG9ydHMpe25zPW1vZHVsZTtuc0tleT1cImV4cG9ydHNcIjt9ZWxzZXtpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7bnM9d2luZG93O1xubnNLZXk9XCJKQ2xhc3NcIjt9fShmdW5jdGlvbihkLGYpe3ZhciBiPWRbZl07dmFyIGE9e2V4dGVuZGFibGU6dHJ1ZSxjdG9yTmFtZTpcImluaXRcIixzdXBlck5hbWU6XCJfc3VwZXJcIixlbmFibGVQcml2YWN5OnRydWUscHJpdmF0ZVBhdHRlcm46L15fXy4rLyx0cmFja2luZzp0cnVlLHByaXZhdGVOYW1lOlwiX19cIixtZXRob2RzS2V5OlwiX2pjTWV0aG9kc19cIixkZXB0aEtleTpcIl9qY0RlcHRoX1wiLGNhbGxlckRlcHRoS2V5OlwiX2pjQ2FsbGVyRGVwdGhfXCJ9O1xudmFyIGM9ZmFsc2U7dmFyIGU9ZnVuY3Rpb24oKXt9O2UuZXh0ZW5kPWZ1bmN0aW9uKG0sZyl7Zz1nfHx7fTtmb3IodmFyIHEgaW4gYSl7aWYoZ1txXT09PXVuZGVmaW5lZCl7Z1txXT1hW3FdO319aWYoIWcuZW5hYmxlUHJpdmFjeSl7Zy5wcml2YXRlUGF0dGVybj1udWxsO1xuZy5wcml2YXRlTmFtZT1udWxsO312YXIgcj10aGlzLnByb3RvdHlwZTtjPXRydWU7dmFyIG89bmV3IHRoaXMoKTtjPWZhbHNlO29bZy5kZXB0aEtleV09cltnLmRlcHRoS2V5XXx8MDtvW2cuZGVwdGhLZXldKys7dmFyIGs9b1tnLmRlcHRoS2V5XTt2YXIgaT17fTt2YXIgaj17fTtcbnZhciBzPXt9O2Zvcih2YXIgaCBpbiBtKXtpZihtW2hdIGluc3RhbmNlb2YgRnVuY3Rpb24pe3ZhciBuPShmdW5jdGlvbih0LHUpe3JldHVybiBmdW5jdGlvbigpe3ZhciB2PXRoaXNbZy5zdXBlck5hbWVdO2lmKCFnLnByaXZhdGVQYXR0ZXJufHwhZy5wcml2YXRlUGF0dGVybi50ZXN0KHQpKXt0aGlzW2cuc3VwZXJOYW1lXT1yW3RdO1xufXZhciBEO2lmKGcucHJpdmF0ZU5hbWUpe0Q9dGhpc1tnLnByaXZhdGVOYW1lXTt0aGlzW2cucHJpdmF0ZU5hbWVdPUR8fHM7fXZhciB5LEUseCxJO2lmKGcucHJpdmF0ZVBhdHRlcm4pe2lmKHRoaXNbZy5jYWxsZXJEZXB0aEtleV09PT11bmRlZmluZWQpe3RoaXNbZy5jYWxsZXJEZXB0aEtleV09aztcbn15PXRoaXNbZy5tZXRob2RzS2V5XTtpZih0PT1nLmN0b3Ipe3RoaXNbZy5tZXRob2RzS2V5XT15fHxpO2Zvcih2YXIgeiBpbiBpKXtpZighdGhpc1tnLm1ldGhvZHNLZXldW3pdKXt0aGlzW2cubWV0aG9kc0tleV1bel09e307fXRoaXNbZy5tZXRob2RzS2V5XVt6XVtrXT1pW3pdW2tdO1xudmFyIEM9dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdO3RoaXNbZy5tZXRob2RzS2V5XVt6XVtrXT1mdW5jdGlvbigpe3ZhciBLPXRoaXNbZy5zdXBlck5hbWVdO3RoaXNbZy5zdXBlck5hbWVdPXRoaXNbZy5tZXRob2RzS2V5XVt6XVtrLTFdO3ZhciBKPUMuYXBwbHkodGhpcyxhcmd1bWVudHMpO1xudGhpc1tnLnN1cGVyTmFtZV09SztyZXR1cm4gSjt9O31pPXRoaXNbZy5tZXRob2RzS2V5XTt9ZWxzZXt0aGlzW2cubWV0aG9kc0tleV09aTt9RT17fTtmb3IodmFyIHogaW4gdGhpc1tnLm1ldGhvZHNLZXldKXtFW3pdPXRoaXNbel07dmFyIEY9TWF0aC5tYXguYXBwbHkoTWF0aCxPYmplY3Qua2V5cyhpW3pdKSk7XG50aGlzW3pdPWlbel1bRl07fWlmKGcudHJhY2tpbmcpe3g9e307Zm9yKHZhciBHIGluIGope3hbR109dGhpc1tHXTt0aGlzW0ddPWpbR107fX1pZihnLnRyYWNraW5nKXtJPU9iamVjdC5rZXlzKHRoaXMpO319dmFyIEI9dS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYoZy5wcml2YXRlUGF0dGVybil7aWYoZy50cmFja2luZyl7dmFyIEg9T2JqZWN0LmtleXModGhpcyk7XG5mb3IodmFyIEcgaW4gSCl7Rz1IW0ddO2lmKGcucHJpdmF0ZVBhdHRlcm4udGVzdChHKSl7eFtHXT10aGlzW0ddO2pbR109dGhpc1tHXTt9fWZvcih2YXIgRyBpbiBJKXtHPUlbR107dmFyIEE9SC5pbmRleE9mKEcpPDAmJmcucHJpdmF0ZVBhdHRlcm4udGVzdChHKTtpZihBKXtkZWxldGUgaltHXTtcbmRlbGV0ZSB0aGlzW0ddO319Zm9yKHZhciBHIGluIGope3ZhciB3PXRoaXNbZy5jYWxsZXJEZXB0aEtleV07aWYoeFtHXT09PXVuZGVmaW5lZHx8az09dyl7ZGVsZXRlIHRoaXNbR107fWVsc2V7dGhpc1tHXT14W0ddO319fWZvcih2YXIgRyBpbiB0aGlzW2cubWV0aG9kc0tleV0pe2lmKEVbR109PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW0ddO1xufWVsc2V7dGhpc1tHXT1FW0ddO319aWYoeT09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5tZXRob2RzS2V5XTt9ZWxzZXt0aGlzW2cubWV0aG9kc0tleV09eTt9aWYoaz09dGhpc1tnLmNhbGxlckRlcHRoS2V5XSl7ZGVsZXRlIHRoaXNbZy5jYWxsZXJEZXB0aEtleV07XG59fWlmKGcucHJpdmF0ZU5hbWUpe2lmKEQ9PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW2cucHJpdmF0ZU5hbWVdO31lbHNle3RoaXNbZy5wcml2YXRlTmFtZV09RDt9fWlmKHY9PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW2cuc3VwZXJOYW1lXTt9ZWxzZXt0aGlzW2cuc3VwZXJOYW1lXT12O1xufXJldHVybiBCO307fSkoaCxtW2hdKTt2YXIgbD1nLnByaXZhdGVQYXR0ZXJuJiZnLnByaXZhdGVQYXR0ZXJuLnRlc3QoaCk7aWYobCl7aVtoXT17fTtpW2hdW2tdPW47fWVsc2V7b1toXT1uO319ZWxzZXt2YXIgbD1nLnRyYWNraW5nJiZnLnByaXZhdGVQYXR0ZXJuJiZnLnByaXZhdGVQYXR0ZXJuLnRlc3QoaCk7XG5pZihsKXtqW2hdPW1baF07fWVsc2V7b1toXT1tW2hdO319fWZ1bmN0aW9uIHAoKXtpZighYyYmdGhpc1tnLmN0b3JOYW1lXSl7dGhpc1tnLmN0b3JOYW1lXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7fX1wLnByb3RvdHlwZT1vO3AucHJvdG90eXBlLmNvbnN0cnVjdG9yPXA7XG5pZihnLmV4dGVuZGFibGUhPT1mYWxzZSl7cC5leHRlbmQ9YXJndW1lbnRzLmNhbGxlZTt9cmV0dXJuIHA7fTtlLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXt2YXIgZz1kW2ZdO2RbZl09YjtyZXR1cm4gZzt9O2RbZl09ZTt9KShucyxuc0tleSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFJlcXVpcmVzXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY01hbmFnZXIgPSByZXF1aXJlKCcuL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY01hbmFnZXInKSxcclxuICBKQ2xhc3MgPSByZXF1aXJlKCdqY2xhc3MnKSxcclxuICBIYXNoQXJyYXkgPSByZXF1aXJlKCcuL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdhbWVPYmplY3QoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgR2FtZU9iamVjdCA9IG1vZHVsZS5leHBvcnRzID0gSkNsYXNzLmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHNldFBhcmVudDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0UGFyZW50OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgfSxcclxuICBzZXRDaGlsZHJlbjogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIC8vIERlc2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICB0aGlzLl9jaGlsZHJlbiA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0Q2hpbGRyZW46IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gU2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XHJcbiAgfSxcclxuICBzZXRJZDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuX2lkID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRJZDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQgfHwgKHRoaXMuX2lkID0gdGhpcy5yYW5kb21JZCgpKTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuKCkuYWxsLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGQuc3RhdGU7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgZ2V0Q2hpbGRyZW5JZHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHZhciByZXQgPSB7fTtcclxuXHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIHJldFtjaGlsZC5nZXRJZCgpXSA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH0sXHJcbiAgc2V0Q2hpbGRyZW5TdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgaWRzID0gdGhpcy5nZXRDaGlsZHJlbklkcygpO1xyXG5cclxuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgICAgdmFyIGNoaWxkID0gc2VsZi5nZXRDaGlsZHJlbigpLmdldChjaGlsZFN0YXRlLmlkKTtcclxuICAgICAgaWYgKCFjaGlsZClcclxuICAgICAgICBzZWxmLmdldENoaWxkcmVuKCkuYWRkKHNlbGYubmV3Q2hpbGRGcm9tU3RhdGUoY2hpbGRTdGF0ZSkpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgY2hpbGQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XHJcblxyXG4gICAgICBkZWxldGUgaWRzW2NoaWxkU3RhdGUuaWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGVzdHJveVVuZm91bmRDaGlsZHJlbk9uU3RhdGVTZXQpXHJcbiAgICAgIGZvciAodmFyIGlkIGluIGlkcylcclxuICAgICAgICB0aGlzLmRlc3Ryb3lDaGlsZEJ5SWQoaWQpO1xyXG4gIH0sXHJcbiAgZ2V0Q2hpbGRyZW5TdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICByZXR1cm4gY2hpbGQuZ2V0U3RhdGUoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0RGlydHk6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAvLyBEZXNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgdGhpcy5fZGlydHkgPSB2YWx1ZTtcclxuICAgICh0aGlzLl9kaXJ0eSAmJiB0aGlzLmdldFBhcmVudCgpKSA/IHRoaXMuZ2V0UGFyZW50KCkuc2V0RGlydHkodHJ1ZSkgOiAnJztcclxuICAgICF0aGlzLl9kaXJ0eSA/IHRoaXMuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC5zZXREaXJ0eShmYWxzZSk7XHJcbiAgICB9KSA6ICcnO1xyXG4gIH0sXHJcbiAgZ2V0RGlydHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gU2VyaWFsaXplIGZyb20gc2VydmVyXHJcbiAgICByZXR1cm4gdGhpcy5fZGlydHk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgcmFuZG9tSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5OTk5OTk5OTkpLnRvU3RyaW5nKDE2KTtcclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkKSB7XHJcbiAgICBpZiAoIXBhcmVudClcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coJ1NldHRpbmcgd29ybGQgYW5kIHJvb3QgdG8nLCB0aGlzKTtcclxuICAgICAgR2FtZU9iamVjdC5wcm90b3R5cGUud29ybGQgPSBHYW1lT2JqZWN0LnByb3RvdHlwZS5yb290ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldElkKGlkKTtcclxuICAgIHRoaXMudHlwZSA9ICdHYW1lT2JqZWN0JztcclxuICAgIHRoaXMuYnVpbGRDaGlsZHJlbk9iamVjdCgpO1xyXG4gICAgdGhpcy5zZXRQYXJlbnQocGFyZW50KTtcclxuICAgIHRoaXMuc2V0RGlydHkodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmRlc3Ryb3lVbmZvdW5kQ2hpbGRyZW5PblN0YXRlU2V0ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIgPSBuZXcgQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5pdGVkPSB0cnVlO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy8gV2lwZSBvdXQgYW55IGRlc3Ryb3llZCBjaGlsZHJlbi5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuY29uY2F0KCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgaWYgKGNoaWxkLmRlc3Ryb3llZClcclxuICAgICAgICBzZWxmLmdldENoaWxkcmVuKCkucmVtb3ZlKGNoaWxkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQudXBkYXRlKGVsYXBzZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hcHBseUFsbChlbGFwc2VkKTtcclxuICB9LFxyXG4gIG5ld0NoaWxkRnJvbVN0YXRlOiBmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xyXG4gICAgdmFyIGNoaWxkID0gbmV3IEdhbWVPYmplY3QoKTtcclxuICAgIGNoaWxkLmluaXQodGhpcywgY2hpbGRTdGF0ZS5pZClcclxuICAgIGNoaWxkLnN0YXRlID0gY2hpbGRTdGF0ZTtcclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9LFxyXG4gIGRlc3Ryb3lDaGlsZEJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdmFyIGNoaWxkID0gdGhpcy5nZXRDaGlsZHJlbigpLmdldChpZCk7XHJcbiAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkucmVtb3ZlKGNoaWxkKTtcclxuICB9LFxyXG4gIGJ1aWxkQ2hpbGRyZW5PYmplY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0Q2hpbGRyZW4obmV3IEhhc2hBcnJheShbJ19pZCcsICd0eXBlJ10pKTtcclxuICB9LFxyXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgfSxcclxuICB1cGRhdGVTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIGlmICh0aGlzLnNwcml0ZSAmJiB0aGlzLmRlc3Ryb3llZClcclxuICAgICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICBpZiAoIXRoaXMuc3ByaXRlKVxyXG4gICAgICAgIHRoaXMuYnVpbGRTcHJpdGUocGhhc2VyKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNwcml0ZSlcclxuICAgICAgICB0aGlzLnNwcml0ZS51cGRhdGVXaXRoTW9kZWwodGhpcyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQudXBkYXRlUGhhc2VyKHBoYXNlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNwcml0ZShwaGFzZXIpO1xyXG4gIH0sXHJcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG4gIH1cclxufSk7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgTEFURU5DWV9BTkFMWVpFUl9ERUZBVUxUX01BWCA9IDEwO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogTGF0ZW5jeUFuYWx5emVyKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIExhdGVuY3lBbmFseXplciA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuZGVidWcgPSBmYWxzZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5MYXRlbmN5QW5hbHl6ZXIucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFjazogW10sXHJcbiAgbWF4U3RhY2tMZW5ndGg6IExBVEVOQ1lfQU5BTFlaRVJfREVGQVVMVF9NQVgsXHJcbiAgbGFzdFRlc3RUaW1lOiB1bmRlZmluZWQsXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgbGF0ZW5jeSgpIHtcclxuICAgIC8vIFJldHVybnMgYSB3ZWlnaHRlZCBhdmVyYWdlIGxhdGVuY3kuXHJcbiAgICAvLyBJdGVtIGF0IGl4IDAgaGFzIHdlaWdodCBvZiAxIGFuZCBpdGVtIGF0IGl4IGxlbmd0aCBoYXMgd2VpZ2h0IG9mIGxlbmd0aC5cclxuICAgIHZhciBsYXRUb3QgPSAwLFxyXG4gICAgICB0b3QgPSAwO1xyXG5cclxuICAgIHRoaXMuc3RhY2suZm9yRWFjaChmdW5jdGlvbiAobGF0LCBpeCwgYXJyKSB7XHJcbiAgICAgIGxhdFRvdCArPSBsYXQgKiAoaXgrMSk7XHJcbiAgICAgIHRvdCArPSAoaXgrMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdmFsID0gdG90ID8gbGF0VG90IC8gdG90IDogMTtcclxuICAgIGlmICh0aGlzLmRlYnVnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xBVEVOQ1knLCB2YWwpO1xyXG5cclxuICAgIHJldHVybiB2YWw7XHJcbiAgfSxcclxuICBnZXQgbm93KCkge1xyXG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHN0YXJ0VGVzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5sYXN0VGVzdFRpbWUgPSB0aGlzLm5vdztcclxuICB9LFxyXG4gIGVuZFRlc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUZXN0VGltZTtcclxuICAgIGlmICh0aGlzLmRlYnVnKVxyXG4gICAgICBjb25zb2xlLmxvZygnTEFURU5DWScsIHRoaXMubGF0ZW5jeSk7XHJcbiAgICB0aGlzLnB1c2goZWxhcHNlZCk7XHJcbiAgfSxcclxuICBwdXNoOiBmdW5jdGlvbihsYXRlbmN5KSB7XHJcbiAgICB0aGlzLnN0YWNrLnB1c2gobGF0ZW5jeSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gdGhpcy5tYXhTdGFja0xlbmd0aClcclxuICAgICAgdGhpcy5zdGFjay51bnNoaWZ0KCk7XHJcbiAgfSxcclxuICByZXNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zdGFjayA9IFtdO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IExhdGVuY3lBbmFseXplcjsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHbG9iYWxzXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBVU0VSX0FDVElPTlMgPSB7XHJcbiAgTEVGVF9ET1dOOiAweDAwMDEsXHJcbiAgTEVGVF9VUDogMHgwMDAyLFxyXG4gIFJJR0hUX0RPV046IDB4MDAxMCxcclxuICBSSUdIVF9VUDogMHgwMDIwLFxyXG4gIFVQX0RPV046IDB4MDEwMCxcclxuICBVUF9VUDogMHgwMjAwLFxyXG4gIERPV05fRE9XTjogMHgxMDAwLFxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBVU0VSX0FDVElPTlM7XHJcbn0gZWxzZSB7XHJcbiAgd2luZG93LlVTRVJfQUNUSU9OUyA9IFVTRVJfQUNUSU9OUztcclxufSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFVzZXJJbnB1dFByb2Nlc3NvcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBVc2VySW5wdXRQcm9jZXNzb3IgPSBmdW5jdGlvbigpIHtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5Vc2VySW5wdXRQcm9jZXNzb3IucHJvdG90eXBlID0ge1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHVzZXJJbnB1dCwgZWxhcHNlZCwgd29ybGQpIHtcclxuICAgIGlmICh1c2VySW5wdXQubGVmdClcclxuICAgICAgd29ybGQucGxheWVyLmJhbmsgPSAtd29ybGQucGxheWVyLkdMT0JBTFMuQkFOS19SQVRFO1xyXG4gICAgZWxzZSBpZiAodXNlcklucHV0LnJpZ2h0KVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IHdvcmxkLnBsYXllci5HTE9CQUxTLkJBTktfUkFURTtcclxuICAgIGVsc2VcclxuICAgICAgd29ybGQucGxheWVyLmJhbmsgPSAwO1xyXG5cclxuICAgIGlmICh1c2VySW5wdXQudXApXHJcbiAgICAgIHdvcmxkLnBsYXllci5hY2NlbGVyYXRlciA9IHdvcmxkLnBsYXllci5HTE9CQUxTLkFDQ0VMRVJBVElPTl9SQVRFO1xyXG4gICAgZWxzZSBpZiAodXNlcklucHV0LmRvd24pXHJcbiAgICAgIHdvcmxkLnBsYXllci5hY2NlbGVyYXRlciA9IC13b3JsZC5wbGF5ZXIuR0xPQkFMUy5ERUNFTEVSQVRJT05fUkFURTtcclxuICAgIGVsc2UgXHJcbiAgICAgIHdvcmxkLnBsYXllci5hY2NlbGVyYXRlciA9IDAuMDtcclxuXHJcbiAgICB3b3JsZC5wbGF5ZXIudHJpZ2dlckRvd24gPSB1c2VySW5wdXQudHJpZ2dlcjtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5wdXRQcm9jZXNzb3I7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogVXNlcklucHV0U3RhdGUoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVXNlcklucHV0U3RhdGUgPSBmdW5jdGlvbihpbnB1dCwgdGltZSkge1xyXG4gIHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuICB0aGlzLnRpbWUgPSB0aW1lO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblVzZXJJbnB1dFN0YXRlLnByb3RvdHlwZSA9IHtcclxuICBpbnB1dDogdW5kZWZpbmVkLFxyXG4gIHRpbWU6IHVuZGVmaW5lZFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5wdXRTdGF0ZTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHbG9iYWxzXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBIYXNoQXJyYXkgPSByZXF1aXJlKCcuLi9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY01hbmFnZXIoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyID0gZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MgPSBuZXcgSGFzaEFycmF5KFsnbmFtZSddKTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY01hbmFnZXIucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGNhY2hlOiB7fSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYWRkOiBmdW5jdGlvbiAoY2hhcmFjdGVyaXN0aWMpIHtcclxuICAgIHRoaXMuY2hhcmFjdGVyaXN0aWNzLmFkZChjaGFyYWN0ZXJpc3RpYyk7XHJcbiAgfSxcclxuICBhcHBseUFsbDogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuY2FjaGUgPSB7fTtcclxuXHJcbiAgICB0aGlzLmNoYXJhY3RlcmlzdGljcy5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hhcmFjdGVyaXN0aWMpIHtcclxuICAgICAgY2hhcmFjdGVyaXN0aWMuYXBwbHlUbyhzZWxmLnBhcmVudCwgZWxhcHNlZCwgc2VsZi5jYWNoZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY01hbmFnZXI7IiwidmFyIENoYXJhY3RlcmlzdGljX1BoeXNpY3MgPSByZXF1aXJlKCcuL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIE1hdGggQnVsbHNoaXRcclxuICogUHJvb2YgaGVyZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NDkyMTEvc2hvcnRlc3QtZGlzdGFuY2UtYmV0d2Vlbi1hLXBvaW50LWFuZC1hLWxpbmUtc2VnbWVudFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBzcXIoeCkgeyByZXR1cm4geCAqIHggfVxyXG5mdW5jdGlvbiBkaXN0Mih2LCB3KSB7IHJldHVybiBzcXIodi54IC0gdy54KSArIHNxcih2LnkgLSB3LnkpIH1cclxuZnVuY3Rpb24gZGlzdFRvU2VnbWVudFNxdWFyZWQocCwgdiwgdykge1xyXG4gIHZhciBsMiA9IGRpc3QyKHYsIHcpO1xyXG4gIGlmIChsMiA9PSAwKSByZXR1cm4gZGlzdDIocCwgdik7XHJcbiAgdmFyIHQgPSAoKHAueCAtIHYueCkgKiAody54IC0gdi54KSArIChwLnkgLSB2LnkpICogKHcueSAtIHYueSkpIC8gbDI7XHJcbiAgaWYgKHQgPCAwKSByZXR1cm4gZGlzdDIocCwgdik7XHJcbiAgaWYgKHQgPiAxKSByZXR1cm4gZGlzdDIocCwgdyk7XHJcbiAgcmV0dXJuIGRpc3QyKHAsIHsgeDogdi54ICsgdCAqICh3LnggLSB2LngpLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHYueSArIHQgKiAody55IC0gdi55KSB9KTtcclxufVxyXG5mdW5jdGlvbiBkaXN0VG9TZWdtZW50KHAsIHYsIHcpIHsgcmV0dXJuIE1hdGguc3FydChkaXN0VG9TZWdtZW50U3F1YXJlZChwLCB2LCB3KSk7IH1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX0NvbGxpZGVzKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX0NvbGxpZGVzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgLy8gVGhlc2UgYXJlIHRoZSBrZXlzIG9mIHRoZSB3b3JsZCBvYmplY3RzIHRoYXQgdGhlIHRoaXMgb2JqZWN0IGNhbiBjb2xsaWRlIHdpdGghXHJcbiAgdGhpcy5vcHRpb25zLmtleXMgPSB0aGlzLm9wdGlvbnMua2V5cyB8fCBbJ3BsYXllcicsICdiaXJkJ107XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMucHJvdG90eXBlID0ge1xyXG4gIHRlbXBQaHlzaWNzOiBuZXcgQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcygpLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgXHJcbiAgICB0aGlzLnRlbXBQaHlzaWNzLm9wdGlvbnMgPSB0YXJnZXQud29ybGQ7XHJcblxyXG4gICAgdmFyIHRhcmdldHMgPSB0YXJnZXQud29ybGQuZ2V0Q2hpbGRyZW4oKS5nZXRBbGwodGhpcy5vcHRpb25zLmtleXMpLFxyXG4gICAgICBzdGFydCA9IHRoaXMudGVtcFBoeXNpY3MuYXBwbHlUZW1wKHRhcmdldCwgMCksXHJcbiAgICAgIGVuZCA9IHRoaXMudGVtcFBoeXNpY3MuYXBwbHlUZW1wKHRhcmdldCwgZWxhcHNlZCk7XHJcblxyXG4gICAgdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgIHZhciBzaG9ydGVzdERpc3RhbmNlID0gZGlzdFRvU2VnbWVudCh0LCBzdGFydCwgZW5kKTtcclxuICAgICAgaWYgKHNob3J0ZXN0RGlzdGFuY2UgPCAodGFyZ2V0LnJhZGl1cyAqIDIpICsgKHQucmFkaXVzICogMikpXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmNhbGxiYWNrKVxyXG4gICAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrLmFwcGx5KG51bGwsIFt0LCBzaG9ydGVzdERpc3RhbmNlXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX0NvbGxpZGVzOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4oKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4ucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIGRlc3Ryb3kgPSB0YXJnZXQueCA8IDAgfHwgdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggfHwgdGFyZ2V0LnkgPCAwIHx8IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodDtcclxuICAgIGlmIChkZXN0cm95KVxyXG4gICAgICB0YXJnZXQuZGVzdHJveSgpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW47IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB2YXIgcmVzID0gdGhpcy5hcHBseVRlbXAodGFyZ2V0LCBlbGFwc2VkKTtcclxuICAgIHRhcmdldC54ID0gcmVzLng7XHJcbiAgICB0YXJnZXQueSA9IHJlcy55O1xyXG4gICAgdGFyZ2V0LnZlbG9jaXR5ID0gcmVzLnZlbG9jaXR5O1xyXG4gICAgdGFyZ2V0LmFuZ2xlID0gcmVzLmFuZ2xlO1xyXG4gIH0sXHJcbiAgYXBwbHlUZW1wOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkKSB7XHJcbiAgICB2YXIgcmVzID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQudmVsb2NpdHkgPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHRocm93IEVycm9yKCdUYXJnZXQgdmVsb2NpdHkgaXMgdW5kZWZpbmVkIGZvciAnLCB0YXJnZXQpO1xyXG4gICAgXHJcbiAgICB2YXIgdiA9IHRhcmdldC52ZWxvY2l0eTtcclxuICAgIFxyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZXInKSlcclxuICAgICAgdiA9IHRhcmdldC52ZWxvY2l0eSArICh0YXJnZXQuYWNjZWxlcmF0ZXIgKiBlbGFwc2VkKTtcclxuXHJcbiAgICByZXMudmVsb2NpdHkgPSB2ID4gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01BWCA/IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NQVggOiAodiA8IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NSU4gPyB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUlOIDogdik7XHJcblxyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYmFuaycpKVxyXG4gICAgICByZXMuYW5nbGUgPSB0YXJnZXQuYW5nbGUgKyAodGFyZ2V0LmJhbmsgKiBlbGFwc2VkKTtcclxuICAgIGVsc2VcclxuICAgICAgcmVzLmFuZ2xlID0gdGFyZ2V0LmFuZ2xlO1xyXG5cclxuICAgIHJlcy54ID0gdGFyZ2V0LnggKyBNYXRoLmNvcyhyZXMuYW5nbGUpICogcmVzLnZlbG9jaXR5ICogZWxhcHNlZDtcclxuICAgIHJlcy55ID0gdGFyZ2V0LnkgKyBNYXRoLnNpbihyZXMuYW5nbGUpICogcmVzLnZlbG9jaXR5ICogZWxhcHNlZDtcclxuXHJcbiAgICBpZiAoaXNOYU4ocmVzLngpKVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlbGFwc2VkKTtcclxuICAgICAgdGhyb3cgRXJyb3IocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1BoeXNpY3M7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICB0YXJnZXQueCA9IHRhcmdldC54IDwgMCA/IHRoaXMub3B0aW9ucy53aWR0aCA6IHRhcmdldC54O1xyXG4gICAgdGFyZ2V0LnggPSB0YXJnZXQueCA+IHRoaXMub3B0aW9ucy53aWR0aCA/IHRhcmdldC54ICUgdGhpcy5vcHRpb25zLndpZHRoIDogdGFyZ2V0Lng7XHJcbiAgICB0YXJnZXQueSA9IHRhcmdldC55IDwgMCA/IHRoaXMub3B0aW9ucy5oZWlnaHQgOiB0YXJnZXQueTtcclxuICAgIHRhcmdldC55ID0gdGFyZ2V0LnkgPiB0aGlzLm9wdGlvbnMuaGVpZ2h0ID8gdGFyZ2V0LnkgJSB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGFyZ2V0Lnk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmc7IiwidmFyIEJ1bGxldCA9IHJlcXVpcmUoJy4uL2dhbWVPYmplY3RzL0J1bGxldCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgdGhpcy5vcHRpb25zLmZpcmVSYXRlID0gb3B0aW9ucy5maXJlUmF0ZSB8fCA1MC4wO1xyXG4gIHRoaXMub3B0aW9ucy5maXJlVmVsb2NpdHkgPSBvcHRpb25zLmZpcmVWZWxvY2l0eSB8fCA3MDAuMDtcclxuICAvLyBCdWxsZXRzIG5lZWQgdG8gc3RhcnQgJ2FoZWFkJyBvZiB0ZWggb2JqZWN0IGZpcmluZyB0aGVtIGEgbGl0dGxlLlxyXG4gIHRoaXMub3B0aW9ucy5vZmZzZXQgPSBvcHRpb25zLm9mZnNldCB8fCA1MDtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBuZXh0QnVsbGV0VGltZTogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgbm93KCkge1xyXG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZmlyZTogZnVuY3Rpb24gKHRhcmdldCwgeCwgeSwgYW5nbGUsIHZlbG9jaXR5KVxyXG4gIHtcclxuICAgIGlmICh0YXJnZXQuYW1tbyA8PSAwKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBcclxuICAgIHZhciBidWxsZXQgPSBuZXcgQnVsbGV0KHRhcmdldCwgdW5kZWZpbmVkLCB4ICsgTWF0aC5jb3MoYW5nbGUpICogdGhpcy5vcHRpb25zLm9mZnNldCwgeSArIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMub3B0aW9ucy5vZmZzZXQsIGFuZ2xlLCB2ZWxvY2l0eSk7XHJcbiAgICB0YXJnZXQuZ2V0Q2hpbGRyZW4oKS5hZGQoYnVsbGV0KTtcclxuICAgIHRhcmdldC5hbW1vLS07XHJcbiAgICB0aGlzLm5leHRCdWxsZXRUaW1lID0gdGhpcy5ub3cgKyB0aGlzLm9wdGlvbnMuZmlyZVJhdGU7XHJcbiAgfSxcclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgaWYgKCF0aGlzLm5leHRCdWxsZXRUaW1lKVxyXG4gICAgICB0aGlzLm5leHRCdWxsZXRUaW1lID0gdGhpcy5ub3cgKyB0aGlzLm9wdGlvbnMuZmlyZVJhdGU7XHJcblxyXG4gICAgaWYgKHRhcmdldC50cmlnZ2VyRG93bilcclxuICAgIHtcclxuICAgICAgdmFyIHQgPSB0aGlzLm5leHRCdWxsZXRUaW1lICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG4gICAgICBcclxuICAgICAgd2hpbGUgKHRoaXMubm93ID4gdGhpcy5uZXh0QnVsbGV0VGltZSlcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZmlyZSh0YXJnZXQsIHRhcmdldC54LCB0YXJnZXQueSwgdGFyZ2V0LmFuZ2xlLCB0aGlzLm9wdGlvbnMuZmlyZVZlbG9jaXR5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHM7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBCaXJkKClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG52YXIgQmlyZCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFByb3BlcnRpZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1c1xuICAgIH07XG4gIH0sXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLl9pZClcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcignVGhlIGJpcmRcXCdzIGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gdmFsdWUueDtcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcbiAgICB0aGlzLnNjYWxlID0gdmFsdWUuc2NhbGU7XG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcbiAgICB0aGlzLnJhZGl1cyA9IHZhbHVlLnJhZGl1cztcbiAgfSxcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIE1ldGhvZHNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkKSB7XG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xuXG4gICAgdGhpcy50eXBlID0gJ2JpcmQnO1xuXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuYmFuayA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAzO1xuXG4gICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMud29ybGQud2lkdGg7XG4gICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMud29ybGQuaGVpZ2h0O1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdGhpcy5iYW5rID0gdGhpcy5yYW5kb21pemVkQmFuaygpO1xuICAgIHRoaXMudmVsb2NpdHkgPSAyNSArIE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICB0aGlzLnNjYWxlID0gKE1hdGgucmFuZG9tKCkgKiAwLjQpICsgMC4xO1xuXG4gICAgdGhpcy5HTE9CQUxTID0ge1xuICAgICAgVkVMT0NJVFlfTUFYOiBCaXJkLnZlbG9jaXR5LFxuICAgICAgVkVMT0NJVFlfTUlOOiBCaXJkLnZlbG9jaXR5LFxuICAgIH07XG5cbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nJykpKHRoaXMud29ybGQpKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYXBwbHlBbGwoZWxhcHNlZCk7XG4gICAgXG4gICAgLy8gVE9ETzogZW5jYXBzdWxhdGUgYmlyZCBBSVxuICAgIFxuICAgIC8vIGJpcmRzIGhhdmUgYSAxLzIwMCBjaGFuY2Ugb2YgY2hhbmdpbmcgdGhlIGJhbmsgZXZlcnkgZnJhbWVcbiAgICBpZihNYXRoLnJhbmRvbSgpIDwgMC4wMDUpXG4gICAgICB0aGlzLmJhbmsgPSB0aGlzLnJhbmRvbWl6ZWRCYW5rKCk7XG4gIH0sXG4gIGJ1aWxkU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLmJpcmQoMCwgMCk7XG4gIH0sXG4gIHJhbmRvbWl6ZWRCYW5rOiBmdW5jdGlvbigpIHtcbiAgICAvLyB2YWx1ZSBpbiB0aGUgcmFuZ2UgWy0xLjAsIDEuMF0gXG4gICAgdmFyIGJhbmtGYWN0b3IgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyLjA7XG4gICAgLy8gdGhlIG1heGltdW0gYmFuayBhbmdsZSBcbiAgICB2YXIgYmFua01hZ25pdHVkZSA9IE1hdGguUEkgLyAyLjA7XG4gICAgLy8gc2NhbGUgdGhlIG1hZ25pdHVkZSBieSB0aGUgcmFuZG9taXplZCBmYWN0b3JcbiAgICByZXR1cm4gYmFua0ZhY3RvciAqIGJhbmtNYWduaXR1ZGU7IFxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcbiAgfVxufSk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IEJpcmQ7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCdWxsZXQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQnVsbGV0ID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcclxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXHJcbiAgICAgIHJhZGl1czogdGhpcy5yYWRpdXNcclxuICAgIH07XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGUgYnVsbGV0IGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ID0gdmFsdWUueDtcclxuICAgIHRoaXMueSA9IHZhbHVlLnk7XHJcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHZhbHVlLnJhZGl1cztcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCwgeCwgeSwgYW5nbGUsIHZlbG9jaXR5KSB7XHJcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XHJcblxyXG4gICAgdGhpcy5HTE9CQUxTID0ge1xyXG4gICAgICBWRUxPQ0lUWV9NQVg6IDEwMDAwMCxcclxuICAgICAgVkVMT0NJVFlfTUlOOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgdGhpcy5zcHJpdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDI7XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ2J1bGxldCc7XHJcblxyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfQ29sbGlkZXMnKSkoe2NhbGxiYWNrOiB0aGlzLmNvbGxpZGVIYW5kbGVyLmJpbmQodGhpcyl9KSk7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbicpKSh0aGlzLndvcmxkKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFwcGx5QWxsKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5idWxsZXQoMCwgMCk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gIH0sXHJcbiAgY29sbGlkZUhhbmRsZXI6IGZ1bmN0aW9uICh0YXJnZXQsIGRpc3RhbmNlKSB7XHJcbiAgICBpZiAodGFyZ2V0LnR5cGUgPT0gJ2JpcmQnKVxyXG4gICAge1xyXG4gICAgICB0YXJnZXQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldC50eXBlID09ICdwbGF5ZXInKVxyXG4gICAge1xyXG4gICAgICB0YXJnZXQuaGl0KHRoaXMsIGRpc3RhbmNlKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQnVsbGV0OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBSZXF1aXJlbWVudHNcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKSxcbiAgQnVsbGV0ID0gcmVxdWlyZSgnLi9CdWxsZXQnKSxcbiAgU21va2UgPSByZXF1aXJlKCcuL1Ntb2tlJyksXG4gIHBsYXllckNvdW50ID0gMDtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFBsYXllcigpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudmFyIFBsYXllciA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFByb3BlcnRpZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxuICAgICAgcmV0dXJuIHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy51aWQsXG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXG4gICAgICBhY2NlbGVyYXRlcjogdGhpcy5hY2NlbGVyYXRlcixcbiAgICAgIHR1cm46IHRoaXMudHVybixcbiAgICAgIGFjY2VsOiB0aGlzLmFjY2VsLFxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXG4gICAgICBoZWFsdGg6IHRoaXMuaGVhbHRoLFxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICBhbW1vOiB0aGlzLmFtbW8sXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgc21va2VzOiB0aGlzLnNtb2tlcyxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuU3RhdGUoKVxuICAgIH07XG4gIH0sXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBwbGFuZSBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xuICAgIH1cblxuICAgIHRoaXMudWlkID0gdmFsdWUudWlkO1xuICAgIHRoaXMueCA9IHZhbHVlLng7XG4gICAgdGhpcy55ID0gdmFsdWUueTtcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XG4gICAgdGhpcy5oZWFsdGggPSB2YWx1ZS5oZWFsdGg7XG4gICAgdGhpcy5hY2NlbGVyYXRlciA9IHZhbHVlLmFjY2VsZXJhdGVyO1xuICAgIHRoaXMuYW1tbyA9IHZhbHVlLmFtbW87XG4gICAgdGhpcy5yYWRpdXMgPSB2YWx1ZS5yYWRpdXM7XG4gICAgdGhpcy5zbW9rZXMgPSB2YWx1ZS5zbW9rZXM7XG5cbiAgICB0aGlzLnNldENoaWxkcmVuU3RhdGUodmFsdWUuY2hpbGRyZW4pO1xuICB9LFxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogTWV0aG9kc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgaW5pdDogZnVuY3Rpb24ocGFyZW50LCBpZCwgdWlkKSB7XG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xuXG4gICAgdGhpcy51aWQgPSB1aWQ7XG5cbiAgICB0aGlzLnR5cGUgPSAncGxheWVyJztcblxuICAgIHRoaXMuR0xPQkFMUyA9IHtcbiAgICAgIFZFTE9DSVRZX01BWDogNjAwLFxuICAgICAgVkVMT0NJVFlfTUlOOiA5MCxcbiAgICAgIEJBTktfUkFURTogTWF0aC5QSSAvIDIsXG4gICAgICBBQ0NFTEVSQVRJT05fUkFURTogMjUwLFxuICAgICAgREVDRUxFUkFUSU9OX1JBVEU6IDEwMFxuICAgIH07XG5cbiAgICB0aGlzLmJ1bGxldFByb3BzID0ge1xuICAgICAgZmlyZVJhdGU6IDEwMCxcbiAgICAgIGZpcmVWZWxvY2l0eTogNTAwXG4gICAgfTtcblxuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA0MDA7XG4gICAgdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gMDtcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICB0aGlzLmFtbW8gPSAxMDAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLkdMT0JBTFMuVkVMT0NJVFlfTUlOO1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdGhpcy5yYWRpdXMgPSAxNTtcblxuICAgIHRoaXMuc21va2VzID0gMDtcblxuICAgIHRoaXMudHJpZ2dlckRvd24gPSBmYWxzZTtcblxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcnKSkodGhpcy53b3JsZCkpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMnKSkodGhpcy5idWxsZXRQcm9wcykpO1xuICB9LFxuICBhdHRlbXB0U21va2VEcm9wOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgIHZhciBzZWxmPSB0aGlzO1xuICAgIC8vIFNtb2tlIGRyb3BzIGFyZSBPTkxZIHBlcmZvcm1lZCBieSB0aGUgc2VydmVyXG4gICAgaWYgKHR5cGVvZiBpc0NsaWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNDbGllbnQpXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAodGhpcy5oZWFsdGggPCA2MCAmJiB0aGlzLnNtb2tlcyA8IDIwKVxuICAgIHtcbiAgICAgIHZhciBzbW9rZURyb3AgPSAoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVhbHRoKSA8IDUuMDtcblxuICAgICAgaWYgKHNtb2tlRHJvcClcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Ntb2tlJywgdGhpcy5zbW9rZXMpXG4gICAgICAgIHRoaXMuc21va2VzKys7XG4gICAgICAgIHZhciBzbW9rZSA9IG5ldyBTbW9rZSh0aGlzLCAnc21va2UnICsgdGhpcy5yYW5kb21JZCgpLCB0aGlzLngsIHRoaXMueSwgdGhpcy5hbmdsZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuc21va2VzLS07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLndvcmxkLmdldENoaWxkcmVuKCkuYWRkKHNtb2tlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcbiAgICB0aGlzLmJ1bGxldFByb3BzLmZpcmVWZWxvY2l0eSA9IDUwMC4wICsgdGhpcy52ZWxvY2l0eTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy54ID09ICd1bmRlZmluZWQnIHx8IHRoaXMueCA9PT0gbnVsbClcbiAgICAgIHRocm93IEVycm9yKCd4IGlzICcsdGhpcy54KTtcblxuICAgIHRoaXMuYXR0ZW1wdFNtb2tlRHJvcChlbGFwc2VkKTtcbiAgICBcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcbiAgfSxcbiAgdXBkYXRlUGhhc2VyOiBmdW5jdGlvbiAocGhhc2VyKSB7XG4gICAgdGhpcy5fc3VwZXIocGhhc2VyKTtcblxuICAgIHRoaXMuc3ByaXRlLmRpc3BsYXlTdGF0dXNSaW5nKHRydWUsIHRoaXMuaGVhbHRoKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQucGxhbmUoMCwgMCk7XG5cbiAgICB3aW5kb3cuY2xpZW50LmdHYW1lT2JqZWN0cy5hZGQodGhpcy5zcHJpdGUpO1xuICB9LFxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcbiAgICBidWxsZXQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFkZChidWxsZXQpO1xuICAgIHJldHVybiBidWxsZXQ7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGhpdDogZnVuY3Rpb24gKHByb2plY3RpbGUsIGRpc3RhbmNlKSB7XG4gICAgdGhpcy5oZWFsdGggLT0gMSAqIChwcm9qZWN0aWxlLnZlbG9jaXR5IC8gMTAwMC4wKSAqIE1hdGgubWF4KDE1IC0gZGlzdGFuY2UsIDEpO1xuICAgIHRoaXMuaGVhbHRoID0gdGhpcy5oZWFsdGggPCAwID8gMCA6IHRoaXMuaGVhbHRoO1xuICB9XG59KTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU21va2UoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU21va2UgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG4gICAgICB0aW1lU3RhcnQgOiB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcclxuICAgICAgYmFuazogdGhpcy5iYW5rLFxyXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eVxyXG4gICAgfTtcclxuICB9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBTbW9rZSBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCA9IHZhbHVlLng7XHJcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IHZhbHVlLmR1cmF0aW9uO1xyXG4gICAgdGhpcy50aW1lU3RhcnQgPSB2YWx1ZS50aW1lU3RhcnQ7XHJcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xyXG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xyXG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCwgeCwgeSwgYW5nbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XHJcblxyXG4gICAgdGhpcy5HTE9CQUxTID0ge1xyXG4gICAgICBWRUxPQ0lUWV9NQVg6IDYwMCxcclxuICAgICAgVkVMT0NJVFlfTUlOOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGltZVN0YXJ0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSAoTWF0aC5yYW5kb20oKSAqIDIuMCArIDEuMCkgKiAxMDAwLjA7XHJcbiAgICB0aGlzLmJhbmsgPSAtMSArIChNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcclxuICAgIHRoaXMuYWNjZWxlcmF0b3IgPSAwO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ3Ntb2tlJztcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOmZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcclxuXHJcbiAgICB2YXIgZWxhcHNlZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVTdGFydCxcclxuICAgICAgcmF0aW8gPSAxLjAgLSAoZWxhcHNlZCAvIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChyYXRpbyA8IDAuMSlcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfSxcclxuICB1cGRhdGVQaGFzZXI6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBoYXNlcik7XHJcblxyXG4gICAgdmFyIGVsYXBzZWQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy50aW1lU3RhcnQsXHJcbiAgICAgIHJhdGlvID0gMS4wIC0gKGVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRMaWZlKHJhdGlvKTtcclxuXHJcbiAgICBpZiAocmF0aW8gPCAwLjEpXHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5zbW9rZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaylcclxuICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gU21va2U7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0JyksXHJcbiAgQmlyZCA9IHJlcXVpcmUoJy4vQmlyZCcpLFxyXG4gIFNtb2tlID0gcmVxdWlyZSgnLi9TbW9rZScpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQmlyZCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBXb3JsZCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKVxyXG4gICAgICBpZiAoa2V5ICE9ICdjaGlsZHJlbicpXHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWVba2V5XTtcclxuXHJcbiAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJykpXHJcbiAgICAgIHRoaXMuc2V0Q2hpbGRyZW5TdGF0ZSh2YWx1ZS5jaGlsZHJlbik7XHJcbiAgfSxcclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRpbGVXaWR0aDogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgIHRpbGVIZWlnaHQ6IHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgdGlsZXM6IHRoaXMudGlsZXMsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW5TdGF0ZSgpXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdXb3JsZCBpbml0IScpO1xyXG4gICAgdGhpcy50eXBlID0gJ3dvcmxkJztcclxuICAgIHRoaXMuX3N1cGVyKG51bGwsICdyb290Jyk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICBpZiAoIWVsYXBzZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgICAgIFxyXG4gICAgdGhpcy5fc3VwZXIoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBidWlsZENoaWxkcmVuT2JqZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldENoaWxkcmVuKG5ldyBIYXNoQXJyYXkoWydfaWQnLCAndWlkJywgJ3R5cGUnXSkpO1xyXG4gIH0sXHJcbiAgbmV3Q2hpbGRGcm9tU3RhdGU6IGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICB2YXIgY2hpbGQ7XHJcblxyXG4gICAgaWYgKGNoaWxkU3RhdGUudHlwZSA9PSAnYmlyZCcpXHJcbiAgICAgIGNoaWxkID0gbmV3IEJpcmQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3BsYXllcicpXHJcbiAgICAgIGNoaWxkID0gbmV3IFBsYXllcih0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGVsc2UgaWYgKGNoaWxkU3RhdGUudHlwZSA9PSAnc21va2UnKVxyXG4gICAgICBjaGlsZCA9IG5ldyBTbW9rZSh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coY2hpbGRTdGF0ZSk7XHJcbiAgICAgIHRocm93IEVycm9yKCdDYW5ub3QgZmlndXJlIG91dCB3aGF0IHRoZSBoZWxsIGEgXFwnJyArIGNoaWxkU3RhdGUudHlwZSArICdcXCcgaXMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBXb3JsZDsiLCJ2YXIgSGFzaEFycmF5ID0gZnVuY3Rpb24oa2V5RmllbGRzLCBjYWxsYmFjaykge1xuICB0aGlzLl9tYXAgPSB7fTtcbiAgdGhpcy5fbGlzdCA9IFtdO1xuICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgdGhpcy5rZXlGaWVsZHMgPSBrZXlGaWVsZHM7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdhbGwnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfSk7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdtYXAnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9KTtcblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygnY29uc3RydWN0Jyk7XG4gIH1cbn07XG5cbkhhc2hBcnJheS5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAga2V5ID0gdGhpcy5rZXlGaWVsZHNba2V5XTtcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLmZpbmQob2JqLCBrZXkpO1xuICAgICAgICBpZiAoaW5zdCkge1xuICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0uaW5kZXhPZihvYmopICE9IC0xKSB7XG4gICAgICAgICAgICAgIC8vIENhbm5vdCBhZGQgdGhlIHNhbWUgaXRlbSB0d2ljZVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tYXBbaW5zdF0ucHVzaChvYmopO1xuICAgICAgICAgIH0gZWxzZSB0aGlzLl9tYXBbaW5zdF0gPSBbb2JqXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0LnB1c2gob2JqKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ2FkZCcsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgIH1cbiAgfSxcbiAgYWRkTWFwOiBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHRoaXMuX21hcFtrZXldID0gb2JqO1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdhZGRNYXAnLCB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBvYmo6IG9ialxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiAoISh0aGlzLl9tYXBba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB8fCB0aGlzLl9tYXBba2V5XS5sZW5ndGggIT0gMSkgPyB0aGlzLl9tYXBba2V5XSA6IHRoaXMuX21hcFtrZXldWzBdO1xuICB9LFxuICBnZXRBbGw6IGZ1bmN0aW9uKGtleXMpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGtleXMpXG4gICAgICByZXMgPSByZXMuY29uY2F0KHRoaXMuZ2V0QXNBcnJheShrZXlzW2tleV0pKTtcblxuICAgIHJldHVybiByZXM7XG4gIH0sXG4gIGdldEFzQXJyYXk6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBba2V5XSB8fCBbXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLmhhc093blByb3BlcnR5KGtleSk7XG4gIH0sXG4gIGhhc011bHRpcGxlOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwW2tleV0gaW5zdGFuY2VvZiBBcnJheTtcbiAgfSxcbiAgcmVtb3ZlQnlLZXk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZW1vdmVkID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBhcmd1bWVudHNbaV07XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLl9tYXBba2V5XS5jb25jYXQoKTtcbiAgICAgIGlmIChpdGVtcykge1xuICAgICAgICByZW1vdmVkID0gcmVtb3ZlZC5jb25jYXQoaXRlbXMpO1xuICAgICAgICBmb3IgKHZhciBqIGluIGl0ZW1zKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tqXTtcbiAgICAgICAgICBmb3IgKHZhciBpeCBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICAgICAgdmFyIGtleTIgPSB0aGlzLmZpbmQoaXRlbSwgdGhpcy5rZXlGaWVsZHNbaXhdKTtcbiAgICAgICAgICAgIGlmIChrZXkyICYmIHRoaXMuX21hcFtrZXkyXSkge1xuICAgICAgICAgICAgICB2YXIgaXggPSB0aGlzLl9tYXBba2V5Ml0uaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKGl4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwW2tleTJdLnNwbGljZShpeCwgMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGhpcy5fbWFwW2tleTJdLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5Ml07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbGlzdC5zcGxpY2UodGhpcy5fbGlzdC5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmVCeUtleScsIHJlbW92ZWQpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBpeCBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5maW5kKGl0ZW0sIHRoaXMua2V5RmllbGRzW2l4XSk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICB2YXIgaXggPSB0aGlzLl9tYXBba2V5XS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgIGlmIChpeCAhPSAtMSlcbiAgICAgICAgICAgIHRoaXMuX21hcFtrZXldLnNwbGljZShpeCwgMSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbWFwW2tleV0ubGVuZ3RoID09IDApXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbWFwW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdC5zcGxpY2UodGhpcy5fbGlzdC5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlJywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUFsbDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9sZCA9IHRoaXMuX2xpc3QuY29uY2F0KCk7XG4gICAgdGhpcy5fbWFwID0ge307XG4gICAgdGhpcy5fbGlzdCA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZScsIG9sZCk7XG4gICAgfVxuICB9LFxuICBmaW5kOiBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2JqW3BhdGhdO1xuICAgIH1cblxuICAgIHZhciBkdXAgPSBwYXRoLmNvbmNhdCgpO1xuICAgIC8vIGVsc2UgYXNzdW1lIGFycmF5LlxuICAgIHdoaWxlIChkdXAubGVuZ3RoICYmIG9iaikge1xuICAgICAgb2JqID0gb2JqW2R1cC5zaGlmdCgpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICBjbG9uZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgbiA9IG5ldyBIYXNoQXJyYXkodGhpcy5rZXlGaWVsZHMuY29uY2F0KCksIGNhbGxiYWNrID8gY2FsbGJhY2sgOiB0aGlzLmNhbGxiYWNrKTtcbiAgICBuLmFkZC5hcHBseShuLCB0aGlzLmFsbC5jb25jYXQoKSk7XG4gICAgcmV0dXJuIG47XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaEFycmF5OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJpcmRTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gQmlyZFNwcml0ZShnYW1lLCB4LCB5KSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG4gIFxyXG4gIC8vIGFkZCB0aGUgYmlyZFNwcml0ZSBcclxuICB0aGlzLmJpcmRTcHJpdGUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdiaXJkJyk7XHJcbiAgIFxyXG4gIC8vIHlvdSBjYW4ndCBzZXQgdGhlIGFuY2hvciBwb2ludCBvZiBhIGdyb3VwLCBzbyBmb3IgeCAmIHkgdG8gY29ycmVzcG9uZFxyXG4gIC8vIHRvIHRoZSBCaXJkU3ByaXRlJ3MgY2VudGVyIHdlIGhhdmUgdG8gb2Zmc2V0IGl0IG1hbnVhbGx5XHJcbiAgdGhpcy5iaXJkU3ByaXRlLnggPSAtdGhpcy5iaXJkU3ByaXRlLndpZHRoICAvIDIuMDtcclxuICB0aGlzLmJpcmRTcHJpdGUueSA9IC10aGlzLmJpcmRTcHJpdGUuaGVpZ2h0IC8gMi4wO1xyXG59O1xyXG5cclxuQmlyZFNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5CaXJkU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJpcmRTcHJpdGU7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQdWJsaWMgTWV0aG9kcyBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkJpcmRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZSAqIDU3LjI5NTc3OTU7XHJcbiAgdGhpcy5zY2FsZS54ID0gdGhpcy5zY2FsZS55ID0gbW9kZWwuc2NhbGU7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5iaXJkID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IEJpcmRTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQnVsbGV0U3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIEJ1bGxldFNwcml0ZShnYW1lLCB4LCB5KSB7XHJcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XHJcbiBcclxuICAvLyBjb25maWd1cmUgZ3JvdXAgXHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG4gIFxyXG4gIC8vIGFkZCB0aGUgQnVsbGV0U3ByaXRlIFxyXG4gIHRoaXMuQnVsbGV0U3ByaXRlICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYnVsbGV0Jyk7XHJcbn07XHJcblxyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJ1bGxldFNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLmJ1bGxldCA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCdWxsZXRTcHJpdGUodGhpcy5nYW1lLCB4LCB5KSk7XHJcbn07IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFBsYW5lKCkgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuZnVuY3Rpb24gUGxhbmUoZ2FtZSwgeCwgeSkge1xuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcbiBcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xuICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgXG4gIC8vIGFkZCB0aGUgYWlycGxhbmUgXG4gIHRoaXMuYWlycGxhbmUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdhaXJwbGFuZScpO1xuICAgXG4gIC8vIHlvdSBjYW4ndCBzZXQgdGhlIGFuY2hvciBwb2ludCBvZiBhIGdyb3VwLCBzbyBmb3IgeCAmIHkgdG8gY29ycmVzcG9uZFxuICAvLyB0byB0aGUgcGxhbmUncyBjZW50ZXIgd2UgaGF2ZSB0byBvZmZzZXQgaXQgbWFudWFsbHlcbiAgdGhpcy5haXJwbGFuZS54ID0gLXRoaXMuYWlycGxhbmUud2lkdGggIC8gMi4wO1xuICB0aGlzLmFpcnBsYW5lLnkgPSAtdGhpcy5haXJwbGFuZS5oZWlnaHQgLyAyLjA7XG5cbiAgLy8gYWRkIHRoZSBzdGF0dXMgcmluZyBcbiAgdGhpcy5zdGF0dXNSaW5nID0gZ2FtZS5hZGQuZ3JhcGhpY3MoMC4wLCAwLjAsIHRoaXMpO1xufTtcblxuUGxhbmUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcblBsYW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBsYW5lO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogUHVibGljIE1ldGhvZHMgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5QbGFuZS5wcm90b3R5cGUuZGlzcGxheVN0YXR1c1JpbmcgPSBmdW5jdGlvbihkaXNwbGF5c1N0YXR1c1JpbmcsIGhlYWx0aCkge1xuICB2YXIgcmF0aW8gPSAoaGVhbHRoIC8gMTAwLjApO1xuXG4gIHRoaXMuc3RhdHVzUmluZy5hbHBoYSA9IGRpc3BsYXlzU3RhdHVzUmluZyA/IDEuMCAqIHJhdGlvICA6IDAuMDtcblxuICBpZiAoZGlzcGxheXNTdGF0dXNSaW5nKSB7XG4gICAgdGhpcy5zdGF0dXNSaW5nLmNsZWFyKCk7XG4gICAgdGhpcy5zdGF0dXNSaW5nLmxpbmVTdHlsZSgzLjAsIDB4M2JlYjcyKTtcbiAgICBcbiAgICB0aGlzLnN0YXR1c1JpbmcuYXJjKDAsIDAsIDIwLjAsIC0oTWF0aC5QSS80KSAqIHJhdGlvLCAoTWF0aC5QSSAvIDQpICogcmF0aW8gKTsgXG4gIH1cbn07XG5cblBsYW5lLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xuICB0aGlzLnggPSBtb2RlbC54O1xuICB0aGlzLnkgPSBtb2RlbC55O1xuICB0aGlzLmFuZ2xlID0gbW9kZWwuYW5nbGUgKiA1Ny4yOTU3Nzk1O1xuXG4gIGlmIChtb2RlbC5iYW5rIDwgMClcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMjtcbiAgZWxzZSBpZiAobW9kZWwuYmFuayA+IDApXG4gICAgdGhpcy5haXJwbGFuZS5mcmFtZSA9IDE7XG4gIGVsc2UgXG4gICAgdGhpcy5haXJwbGFuZS5mcmFtZSA9IDA7XG59O1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogRmFjdG9yeSBcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUucGxhbmUgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGxhbmUodGhpcy5nYW1lLCB4LCB5KSk7XG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNtb2tlU3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIFNtb2tlU3ByaXRlKGdhbWUsIHgsIHkpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgdGhpcy5hbmdsZSA9IDM2MCAqIE1hdGgucmFuZG9tKCk7XHJcbiAgdGhpcy5zdGFydFNjYWxlID0gTWF0aC5yYW5kb20oKSArIDAuMztcclxuICAvLyBhZGQgdGhlIFNtb2tlU3ByaXRlIFxyXG4gIHRoaXMuc21va2VTcHJpdGUgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnc21va2UnKTtcclxuICB0aGlzLnNtb2tlU3ByaXRlLnggPSAtdGhpcy5zbW9rZVNwcml0ZS53aWR0aCAvIDIuMDtcclxuICB0aGlzLnNtb2tlU3ByaXRlLnkgPSAtdGhpcy5zbW9rZVNwcml0ZS5oZWlnaHQgLyAyLjA7XHJcbiAgdGhpcy5zbW9rZVNwcml0ZS5mcmFtZSA9IDA7XHJcbn07XHJcblxyXG5TbW9rZVNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5TbW9rZVNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTbW9rZVNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5TbW9rZVNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbn07XHJcblxyXG5TbW9rZVNwcml0ZS5wcm90b3R5cGUuc2V0TGlmZSA9IGZ1bmN0aW9uIChsaWZlKSB7XHJcbiAgaWYgKHRoaXMuc21va2VTcHJpdGUpXHJcbiAgICB0aGlzLnNtb2tlU3ByaXRlLmZyYW1lID0gTWF0aC5mbG9vcihsaWZlICogNCk7XHJcblxyXG4gIHRoaXMuc2NhbGUueCA9IHRoaXMuc2NhbGUueSA9ICh0aGlzLnN0YXJ0U2NhbGUgKiBsaWZlKSArIDAuMjtcclxuXHJcbiAgdGhpcy5hbHBoYSA9IGxpZmUgKiAwLjg7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLnNtb2tlID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IFNtb2tlU3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSkpO1xyXG59OyIsInZhciBVc2VySW5wdXRTdGF0ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9Vc2VyU3RhdGUnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNDU3RhdGVNYW5hZ2VyKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFNDU3RhdGVNYW5hZ2VyID0gZnVuY3Rpb24oZnBzLCBnYW1lSW50ZXJmYWNlKSB7XHJcbiAgdGhpcy5nYW1lSW50ZXJmYWNlID0gZ2FtZUludGVyZmFjZTtcclxuICB0aGlzLmZyYW1lVGltZSA9IDEwMDAuMCAvIGZwcztcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5TQ1N0YXRlTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHVzZXJJbnB1dFN0YXRlczogW10sXHJcbiAgbGFzdFVwZGF0ZVRpbWVFbmQ6IHVuZGVmaW5lZCxcclxuICBlc3RTZXJ2ZXJUaW1lOiB1bmRlZmluZWQsXHJcbiAgbGFzdFNlcnZlclN0YXRlOiB1bmRlZmluZWQsXHJcbiAgaW50ZXJ2YWxJZDogdW5kZWZpbmVkLFxyXG4gIGxhdGVuY3k6IDAsXHJcbiAgbGFzdFNlbmRUb1NlcnZlclRpbWU6IDEwMDAuMCAvIDMwLjAsXHJcbiAgLyoqXHJcbiAgICogU2VuZCBhbiB1cGRhdGUgdG8gdGhlIHNlcnZlciBldmVyeSB0aGlzIHNvIG9mdGVuLlxyXG4gICAqL1xyXG4gIHNlcnZlclVwZGF0ZUludGVydmFsOiAxMCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBub3coKSB7XHJcbiAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgcGxheTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbEhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5mcmFtZVRpbWUpO1xyXG4gIH0sXHJcbiAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmludGVydmFsSWQpXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKClcclxuICB7XHJcbiAgICBpZiAodGhpcy5uZXdTZXJ2ZXJTdGF0ZSAmJiAhdGhpcy5sYXN0U2VydmVyU3RhdGUpXHJcbiAgICAgIHRoaXMubGFzdFNlcnZlclN0YXRlID0gdGhpcy5uZXdTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBBcyBsb25nIGFzIHRoZSBzZXJ2ZXIgaGFzIG5ldmVyIHNlbnQgdXMgYSBzdGF0ZSwgd2UgZG8gbm90aGluZy5cclxuICAgIGlmICghdGhpcy5sYXN0U2VydmVyU3RhdGUgfHwgdGhpcy5sYXRlbmN5ID09IDApXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIC8vIFRpbWUgdGhpcyB1cGRhdGUgc3RhcnRlZFxyXG4gICAgICB1cGRhdGVTdGFydCA9IHRoaXMubm93LFxyXG4gICAgICAvLyBUaW1lIHNpbmNlIG91ciBsYXN0IHVwZGF0ZSBlbmRlZFxyXG4gICAgICBlbGFwc2VkID0gdXBkYXRlU3RhcnQgLSB0aGlzLmxhc3RVcGRhdGVUaW1lRW5kLFxyXG4gICAgICAvLyBUaGUgc3RhdGUgb2YgYWxsIHVzZXIgaW5wdXRcclxuICAgICAgdXNlcklucHV0ID0gdGhpcy5nYW1lSW50ZXJmYWNlLnVzZXJJbnB1dDtcclxuXHJcbiAgICB0aGlzLmxhc3RVcGRhdGVUaW1lRW5kID0gdGhpcy5ub3c7XHJcblxyXG4gICAgLy8gU2V0IGxhc3Qgc2VydmVyIHN0YXRlIHRvIGVpdGhlciB0aGUgdXBkYXRlXHJcbiAgICB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSA9IHRoaXMubmV3U2VydmVyU3RhdGUgfHwgdGhpcy5sYXN0U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gVXBkYXRlIGdhbWUgaW50ZXJmYWNlIHRvIG9sZCBzZXJ2ZXIgc3RhdGVcclxuICAgIHRoaXMuZ2FtZUludGVyZmFjZS5zdGF0ZSA9IHRoaXMubGFzdFNlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIEVzdGltYXRlIHRoZSBjdXJyZW50IHNlcnZlciB0aW1lIGF0IHRoaXMgZXhhY3QgcG9pbnQgKHRoZSBzZXJ2ZXIgd2lsbCBiZSBiZWhpbmQgdXMgYnkgYSBwZXJpb2Qgb2YgdGltZSlcclxuICAgIHRoaXMuZXN0U2VydmVyVGltZSA9IE1hdGgucm91bmQodGhpcy5uZXdTZXJ2ZXJTdGF0ZSA/IHRoaXMubmV3U2VydmVyU3RhdGUudGltZSArICh0aGlzLmxhdGVuY3kgLyAyLjApIDogdGhpcy5lc3RTZXJ2ZXJUaW1lICsgZWxhcHNlZCk7XHJcblxyXG4gICAgLy8gRXN0YWJsaXNoIG91ciBzaW11bGF0aW9uIHN0YXJ0aW5nIHRpbWUuXHJcbiAgICB2YXIgdCA9IHRoaXMubGFzdFNlcnZlclN0YXRlLnRpbWUsXHJcbiAgICAgIHNpbUVsYXBzZWQgPSAwLjA7XHJcblxyXG4gICAgLy8gRmlsdGVyIG91dCBhbnkgb2xkIHVzZXIgZnJhbWUgc3RhdGVzXHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcyA9IHRoaXMudXNlcklucHV0U3RhdGVzLmZpbHRlcihmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHVzZXJJbnB1dFN0YXRlLnRpbWUgPiBzZWxmLmxhc3RTZXJ2ZXJTdGF0ZS50aW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgYWxsIGZyYW1lcyB0aGUgc2VydmVyIGhhcyBub3QgeWV0IHByb2Nlc3NlZC5cclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzLmZvckVhY2goZnVuY3Rpb24gKHVzZXJJbnB1dFN0YXRlKSB7XHJcbiAgICAgIHNpbUVsYXBzZWQgPSB1c2VySW5wdXRTdGF0ZS50aW1lIC0gdDtcclxuICAgICAgc2VsZi5nYW1lSW50ZXJmYWNlLnNpbXVsYXRlVXBkYXRlKHVzZXJJbnB1dFN0YXRlLmlucHV0LCBzaW1FbGFwc2VkKTtcclxuICAgICAgdCA9IHVzZXJJbnB1dFN0YXRlLnRpbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTYXZlIG91ciBjdXJyZW50IHN0YXRlXHJcbiAgICB2YXIgbmV3VXNlcklucHV0U3RhdGUgPSBuZXcgVXNlcklucHV0U3RhdGUodXNlcklucHV0LCB0aGlzLmVzdFNlcnZlclRpbWUpO1xyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMucHVzaChuZXdVc2VySW5wdXRTdGF0ZSk7XHJcblxyXG4gICAgLy8gRmluaXNoIHNpbWx1YXRpbmcgdGhlIHJlbWFpbmluZyBtaWxsaXNlY29uZHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgdXNlciBpbnB1dC5cclxuICAgIHRoaXMuZ2FtZUludGVyZmFjZS5zaW11bGF0ZVVwZGF0ZShuZXdVc2VySW5wdXRTdGF0ZS5pbnB1dCwgdGhpcy5lc3RTZXJ2ZXJUaW1lIC0gdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZXN0U2VydmVyVGltZSAtIHRoaXMubGFzdFNlbmRUb1NlcnZlclRpbWUgPiB0aGlzLnNlcnZlclVwZGF0ZUludGVydmFsKVxyXG4gICAge1xyXG4gICAgICAvLyBTZW5kIG91ciBzdGF0ZSB0byB0aGUgc2VydmVyXHJcbiAgICAgIHRoaXMuZ2FtZUludGVyZmFjZS51cGRhdGVTZXJ2ZXIobmV3VXNlcklucHV0U3RhdGUpO1xyXG5cclxuICAgICAgdGhpcy5sYXN0U2VuZFRvU2VydmVyVGltZSA9IHRoaXMuZXN0U2VydmVyVGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBpdCwgc28gdGhyb3cgaXQgYXdheS5cclxuICAgIHRoaXMubmV3U2VydmVyU3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGludGVydmFsSGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNDU3RhdGVNYW5hZ2VyOyIsInZhclxyXG4gIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvR2FtZU9iamVjdCcpLFxyXG4gIFdvcmxkID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1dvcmxkJyksXHJcbiAgUGxheWVyID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYXllcicpLFxyXG4gIExhdGVuY3lBbmFseXplciA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9MYXRlbmN5QW5hbHl6ZXInKSxcclxuICBTQ1N0YXRlTWFuYWdlciA9IHJlcXVpcmUoJy4vU2VydmVyQ2xpZW50U3RhdGVNYW5hZ2VyJyksXHJcbiAgVXNlcklucHV0UHJvY2Vzc29yID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3NvcicpLFxyXG4gIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHbG9iYWxzXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBGUFMgPSA2MCxcclxuICBTRVJWRVJfVElNRU9VVF9NUyA9IDEwMDAwLFxyXG4gIFBMQU5FX0dMT0JBTFMgPSBQbGF5ZXIucHJvdG90eXBlLkdMT0JBTFM7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBTa3lEdWVsQ2xpZW50KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFNreUR1ZWxDbGllbnQgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmxhdGVuY3lBbmFseXplciA9IG5ldyBMYXRlbmN5QW5hbHl6ZXIoKTtcclxuICB0aGlzLnNjU3RhdGVNYW5hZ2VyID0gbmV3IFNDU3RhdGVNYW5hZ2VyKDYwLCB0aGlzKTtcclxuICB0aGlzLnVzZXJJbnB1dFByb2Nlc3NvciA9IG5ldyBVc2VySW5wdXRQcm9jZXNzb3IoKTtcclxuXHJcbiAgdGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNreUR1ZWxDbGllbnQucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFydGVkOiBmYWxzZSxcclxuICBpbnB1dDoge30sXHJcbiAgcGxheWVyOiB1bmRlZmluZWQsXHJcbiAgZXJyb3JUZXh0OiB1bmRlZmluZWQsXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgc3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBzZXQgc3RhdGUodmFsdWUpIHtcclxuICAgIHRoaXMud29ybGQuc2V0U3RhdGUodmFsdWUud29ybGQpO1xyXG4gIH0sXHJcbiAgZ2V0IHVzZXJJbnB1dCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwOiB0aGlzLmlucHV0LnVwLmlzRG93bixcclxuICAgICAgZG93bjogdGhpcy5pbnB1dC5kb3duLmlzRG93bixcclxuICAgICAgbGVmdDogdGhpcy5pbnB1dC5sZWZ0LmlzRG93bixcclxuICAgICAgcmlnaHQ6IHRoaXMuaW5wdXQucmlnaHQuaXNEb3duLFxyXG4gICAgICB0cmlnZ2VyOiB0aGlzLmlucHV0LnRyaWdnZXIuaXNEb3duXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBsYXRlbmN5Q2hlY2s6IGZ1bmN0aW9uIChjb3VudCwgY2FsbGJhY2spIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgaSA9IDA7XHJcbiAgICAgIGNvdW50ID0gY291bnQgfHwgMTA7XHJcblxyXG4gICAgcGluZygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHBpbmcoKSB7XHJcbiAgICAgIHNlbGYubGF0ZW5jeUFuYWx5emVyLnN0YXJ0VGVzdCgpO1xyXG4gICAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci5waW5nJywgc2t5ZHVlbF9za3lkdWVsSGFuZGxlcl9waW5nSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2t5ZHVlbF9za3lkdWVsSGFuZGxlcl9waW5nSGFuZGxlcigpIHtcclxuICAgICAgc2VsZi5sYXRlbmN5QW5hbHl6ZXIuZW5kVGVzdCgpO1xyXG4gICAgICAoKytpIDwgY291bnQpID8gcGluZygpIDogY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0OiBmdW5jdGlvbiAocmlkKSB7XHJcbiAgICB0aGlzLnJpZCA9IHJpZDtcclxuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5sYXRlbmN5Q2hlY2soMTAsIHRoaXMuc3RhcnRTZXJ2ZXJDb25uZWN0aW9uLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgc3RvcDogZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgdGhpcy5lcnJvclRleHQgPSByZWFzb247XHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBhdXNlKCk7XHJcbiAgfSxcclxuICBzdGFydFNlcnZlckNvbm5lY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubGF0ZW5jeSA9IHRoaXMubGF0ZW5jeUFuYWx5emVyLmxhdGVuY3k7XHJcbiAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci5zdGFydCcsIHtcclxuICAgICAgcmlkOiB0aGlzLnJpZFxyXG4gICAgfSwgdGhpcy5zZXJ2ZXJDb25uZWN0aW9uX3N0YXJ0ZWRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgLy9TQ1N0YXRlTWFuYWdlciBJbnRlcmZhY2VcclxuICBzaW11bGF0ZVVwZGF0ZTogZnVuY3Rpb24gKHVzZXJJbnB1dCwgZWxhcHNlZCkge1xyXG4gICAgZWxhcHNlZCA9ICBlbGFwc2VkIC8gMTAwMC4wO1xyXG5cclxuICAgIGlmIChlbGFwc2VkID4gU0VSVkVSX1RJTUVPVVRfTVMpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3RvcCgnU2VydmVyIGRpc2Nvbm5lY3RlZCcpOyAgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKGVsYXBzZWQgPiAwLjIpXHJcbiAgICAgIHRocm93IEVycm9yKCdFbGFwc2VkIGlzIHdheXl5eSB0b28gaGlnaCBtYW4uIERpZCBzZXJ2ZXIgZGlzY29ubmVjdD8nKTtcclxuXHJcbiAgICB0aGlzLnVzZXJJbnB1dFByb2Nlc3Nvci51cGRhdGUodXNlcklucHV0LCBlbGFwc2VkLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLndvcmxkLnVwZGF0ZShlbGFwc2VkKTtcclxuICB9LFxyXG4gIC8vU0NTdGF0ZU1hbmFnZXIgSW50ZXJmYWNlXHJcbiAgdXBkYXRlU2VydmVyOiBmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgIHRoaXMubGF0ZW5jeUFuYWx5emVyLnN0YXJ0VGVzdCgpO1xyXG4gICAgcG9tZWxvLnJlcXVlc3QoJ3NreWR1ZWwuc2t5ZHVlbEhhbmRsZXIudXNlcklucHV0JywgdGhpcy51c2VySW5wdXQsIHRoaXMuc29ja2V0X3VwZGF0ZVNlcnZlclJlc3BvbnNlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIHNldHVwU3RhcnRTdGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsIHdvcmxkIHN0YXRlJywgc3RhdGUud29ybGQpO1xyXG5cclxuICAgIHRoaXMud29ybGQuc2V0U3RhdGUoc3RhdGUud29ybGQpO1xyXG5cclxuICAgIHRoaXMucGxheWVyID0gdGhpcy53b3JsZC5nZXRDaGlsZHJlbigpLmdldCh0aGlzLnVpZCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnBsYXllcilcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2cgKHN0YXRlKTtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1BsYXllciBjb3VsZCBub3QgYmUgZm91bmQgaW4gaW5jb21pbmcgc3RhdGUhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5uZXdTZXJ2ZXJTdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGxheSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBFdmVudHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHNlcnZlckNvbm5lY3Rpb25fc3RhcnRlZEhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICB0aGlzLnVpZCA9IGRhdGEudWlkO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09OTkVDVElPTiBzdGFydGVkJywgZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygnV0FJVElORyBmb3Igc2VydmVyIHN0YXRlJyk7XHJcblxyXG4gICAgcG9tZWxvLm9uKCdzZXJ2ZXJTdGF0ZScsIHRoaXMuc29ja2V0X3NlcnZlclN0YXRlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBsYXkoKTtcclxuICB9LFxyXG4gIHNvY2tldF9zZXJ2ZXJTdGF0ZUhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMuc2NTdGF0ZU1hbmFnZXIubGFzdFNlcnZlclN0YXRlKVxyXG4gICAgICB0aGlzLnNldHVwU3RhcnRTdGF0ZShkYXRhKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdGhpcy5zY1N0YXRlTWFuYWdlci5uZXdTZXJ2ZXJTdGF0ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzb2NrZXRfdXBkYXRlU2VydmVyUmVzcG9uc2VIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIuZW5kVGVzdCgpO1xyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5jbGllbnQgPSBuZXcgU2t5RHVlbENsaWVudCgpO1xyXG4iLCIvKiBhbiBhamF4IGxvZyBmaWxlIHRhaWxlciAvIHZpZXdlclxyXG5jb3B5cmlnaHQgMjAwNyBqb2huIG1pbm5paGFuLlxyXG4gXHJcbmh0dHA6Ly9mcmVlcG9zaXRvcnkuY29tXHJcbiBcclxuUmVsZWFzZWQgdW5kZXIgdGhlc2UgdGVybXNcclxuMS4gVGhpcyBzY3JpcHQsIGFzc29jaWF0ZWQgZnVuY3Rpb25zIGFuZCBIVE1MIGNvZGUgKFwidGhlIGNvZGVcIikgbWF5IGJlIHVzZWQgYnkgeW91IChcInRoZSByZWNpcGllbnRcIikgZm9yIGFueSBwdXJwb3NlLlxyXG4yLiBUaGlzIGNvZGUgbWF5IGJlIG1vZGlmaWVkIGluIGFueSB3YXkgZGVlbWVkIHVzZWZ1bCBieSB0aGUgcmVjaXBpZW50LlxyXG4zLiBUaGlzIGNvZGUgbWF5IGJlIHVzZWQgaW4gZGVyaXZhdGl2ZSB3b3JrcyBvZiBhbnkga2luZCwgYW55d2hlcmUsIGJ5IHRoZSByZWNpcGllbnQuXHJcbjQuIFlvdXIgdXNlIG9mIHRoZSBjb2RlIGluZGljYXRlcyB5b3VyIGFjY2VwdGFuY2Ugb2YgdGhlc2UgdGVybXMuXHJcbjUuIFRoaXMgbm90aWNlIG11c3QgYmUga2VwdCBpbnRhY3Qgd2l0aCBhbnkgdXNlIG9mIHRoZSBjb2RlIHRvIHByb3ZpZGUgYXR0cmlidXRpb24uXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KCkge1xyXG4gdmFyIHJlcXVlc3QgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB9IGNhdGNoICh0cnltaWNyb3NvZnQpIHtcclxuICAgdHJ5IHtcclxuICAgICByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNc3htbDIuWE1MSFRUUFwiKTtcclxuICAgfSBjYXRjaCAob3RoZXJtaWNyb3NvZnQpIHtcclxuICAgICB0cnkge1xyXG4gICAgICByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuICAgICB9IGNhdGNoIChmYWlsZWQpIHtcclxuICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiBpZiAocmVxdWVzdCA9PSBudWxsKSB7XHJcbiAgIGFsZXJ0KFwiRXJyb3IgY3JlYXRpbmcgcmVxdWVzdCBvYmplY3QhXCIpO1xyXG4gfSBlbHNlIHtcclxuICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiB9XHJcbn1cclxuIFxyXG52YXIgcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoKTtcclxuXHJcbndpbmRvdy5nZXRMb2cgPSBmdW5jdGlvbih0aW1lcikge1xyXG4gIHZhciB1cmwgPSBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgIT0gJ3d3dy5za3lkdWVsLmNvbScgPyAnOjMwMDEnIDogJycpICsgXCIvbG9nL2dhbWUtc2VydmVyLmxvZ1wiO1xyXG4gIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gdXBkYXRlUGFnZTtcclxuICByZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiAgc3RhcnRUYWlsKHRpbWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRUYWlsKHRpbWVyKSB7XHJcbiAgaWYgKHRpbWVyID09IFwic3RvcFwiKSB7XHJcbiAgICBzdG9wVGFpbCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ID0gc2V0VGltZW91dChcImdldExvZygpXCIsIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFRhaWwoKSB7XHJcbiAgY2xlYXJUaW1lb3V0KHQpO1xyXG4gIHZhciBwYXVzZSA9IFwiVGhlIGxvZyB2aWV3ZXIgaGFzIGJlZW4gcGF1c2VkLiBUbyBiZWdpbiB2aWV3aW5nIGFnYWluLCBjbGljayB0aGUgU3RhcnQgVmlld2VyIGJ1dHRvbi5cXG5cIjtcclxuICBsb2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcclxuICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhdXNlKTtcclxuICBsb2dEaXYucmVwbGFjZUNoaWxkKG5ld05vZGUsIGxvZ0Rpdi5jaGlsZE5vZGVzWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUGFnZSgpIHtcclxuICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgdmFyIGN1cnJlbnRMb2dWYWx1ZSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICBldmFsKGN1cnJlbnRMb2dWYWx1ZSk7XHJcbiAgICAgIGxvZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpO1xyXG4gICAgICB2YXIgbG9nTGluZSA9ICcgJztcclxuICAgICAgZm9yIChpID0gMDsgaSA8IGN1cnJlbnRMb2dWYWx1ZS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBsb2dMaW5lICs9IGN1cnJlbnRMb2dWYWx1ZVtpXSArIFwiXFxuXCI7XHJcbiAgICAgIH1cclxuICAgICAgbG9nRGl2LmlubmVySFRNTCA9IGxvZ0xpbmU7XHJcbiAgICB9IGVsc2VcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciEgUmVxdWVzdCBzdGF0dXMgaXMgXCIgKyByZXF1ZXN0LnN0YXR1cyk7XHJcbiAgfVxyXG59IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuTXV0YXRpb25PYnNlcnZlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgdmFyIHF1ZXVlID0gW107XG5cbiAgICBpZiAoY2FuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICB2YXIgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlTGlzdCA9IHF1ZXVlLnNsaWNlKCk7XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcXVldWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGhpZGRlbkRpdiwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCd5ZXMnLCAnbm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiJdfQ==
