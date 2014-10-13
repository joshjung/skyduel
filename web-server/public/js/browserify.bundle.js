(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Library
require("./game-server/node_modules/jclass/lib/jclass.min.js");

// Shared

require("./shared/js/lib/HashArray.js");
require("./shared/js/characteristics/CharacteristicManager.js");
require("./shared/js/characteristics/Characteristic_Physics.js");
require("./shared/js/characteristics/Characteristic_ScreenWrapping.js");
require("./shared/js/characteristics/Characteristic_DestroyOffScreen.js");
require("./shared/js/characteristics/Characteristic_ShootsBullets.js");
require("./shared/js/gameObjects/Bullet.js");
require("./shared/js/gameObjects/Player.js");
require("./shared/js/gameObjects/Bird.js");
require("./shared/js/UserActions.js");
require("./shared/js/UserState.js");
require("./shared/js/UserInputProcessor.js");

// Sprites
require("./shared/js/sprites/PlaneSprite.js");
require("./shared/js/sprites/BulletSprite.js");
require("./shared/js/sprites/BirdSprite.js");

// Client
require("./shared/js/LatencyAnalyzer.js");
require("./web-server/public/js/ServerClientStateManager.js");
require("./web-server/public/js/SkyDuelClient.js");

// View
require("./web-server/public/js/logViewer.js");
},{"./game-server/node_modules/jclass/lib/jclass.min.js":2,"./shared/js/LatencyAnalyzer.js":5,"./shared/js/UserActions.js":6,"./shared/js/UserInputProcessor.js":7,"./shared/js/UserState.js":8,"./shared/js/characteristics/CharacteristicManager.js":9,"./shared/js/characteristics/Characteristic_DestroyOffScreen.js":10,"./shared/js/characteristics/Characteristic_Physics.js":11,"./shared/js/characteristics/Characteristic_ScreenWrapping.js":12,"./shared/js/characteristics/Characteristic_ShootsBullets.js":13,"./shared/js/gameObjects/Bird.js":14,"./shared/js/gameObjects/Bullet.js":15,"./shared/js/gameObjects/Player.js":16,"./shared/js/lib/HashArray.js":18,"./shared/js/sprites/BirdSprite.js":19,"./shared/js/sprites/BulletSprite.js":20,"./shared/js/sprites/PlaneSprite.js":21,"./web-server/public/js/ServerClientStateManager.js":22,"./web-server/public/js/SkyDuelClient.js":23,"./web-server/public/js/logViewer.js":24}],2:[function(require,module,exports){
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
},{"_process":25}],3:[function(require,module,exports){
module.exports=require(2)
},{"/media/sf_dev/node/pomelo/skyduel/game-server/node_modules/jclass/lib/jclass.min.js":2,"_process":25}],4:[function(require,module,exports){
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
        this.destroyChildById(ids[id]);
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
    return Math.round(Math.random() * Number.MAX_VALUE).toString(16);
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
},{"./characteristics/CharacteristicManager":9,"./lib/HashArray":18,"jclass":3}],5:[function(require,module,exports){
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
},{"../lib/HashArray":18}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
    if (typeof target.velocity == 'undefined')
      throw Error('Target velocity is undefined for ', target);
    
    var v = target.velocity;
    if (target.hasOwnProperty('accelerater'))
      v = target.velocity + (target.accelerater * elapsed);
    target.velocity = v > this.options.VELOCITY_MAX ? this.options.VELOCITY_MAX : (v < this.options.VELOCITY_MIN ? this.options.VELOCITY_MIN : v);

    if (target.hasOwnProperty('bank'))
      target.angle += target.bank * elapsed;

    target.x += Math.cos(target.angle) * target.velocity * elapsed;
    target.y += Math.sin(target.angle) * target.velocity * elapsed;
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Physics;
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
var Bullet = require('../gameObjects/Bullet');

/*===================================================*\
 * Characteristic_ShootsBullets()
\*===================================================*/
var Characteristic_ShootsBullets = function(options) {
  this.options = options;
  this.options.fireRate = options.fireRate || 100.0;
  this.options.fireVelocity = options.fireVelocity || 700.0;
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
    
    var bullet = new Bullet(target, undefined, x, y, angle, velocity);
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
},{"../gameObjects/Bullet":15}],14:[function(require,module,exports){
var GameObject = require('../GameObject');

/*===================================================*\
 * Bird()
\*===================================================*/
var Bird = GameObject.extend({
  /*=========================*\
   * Variables
  \*=========================*/
  angle: 0,
  bank: 0,
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
      scale: this.scale
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
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id) {
    this._super(parent, id || this.getId());

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
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Bird;
},{"../GameObject":4,"../characteristics/Characteristic_Physics":11,"../characteristics/Characteristic_ScreenWrapping":12}],15:[function(require,module,exports){
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
      velocity: this.velocity
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

    this.type = 'bullet';

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
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Bullet;
},{"../GameObject":4,"../characteristics/Characteristic_DestroyOffScreen":10,"../characteristics/Characteristic_Physics":11}],16:[function(require,module,exports){
/*===================================================*\
 * Requirements
\*===================================================*/
var GameObject = require('../GameObject'),
  Bullet = require('./Bullet'),
  playerCount = 0;

/*===================================================*\
 * Player()
\*===================================================*/
var Player = GameObject.extend({
  /*=========================*\
   * Variables
  \*=========================*/
  x: 400,
  y: 400,
  angle: 0,
  velocity: 6,
  bank: 0,
  accelerater: 0,
  triggerDown: false,
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

    this.health = 100;
    this.ammo = 1000;

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_ScreenWrapping'))(this.world));
    this.charManager.add(new (require('../characteristics/Characteristic_ShootsBullets'))(this.bulletProps));
  },
  update: function (elapsed) {
    this.bulletProps.fireVelocity = 500.0 + this.velocity;

    this._super(elapsed);
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.plane(0, 0);
    this.sprite.displayStatusRing(window.client.player.uid === this.uid);

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

    if (this.sprite) {
      this.sprite.destroy(true);
      this.sprite = null;
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Player;
},{"../GameObject":4,"../characteristics/Characteristic_Physics":11,"../characteristics/Characteristic_ScreenWrapping":12,"../characteristics/Characteristic_ShootsBullets":13,"./Bullet":15}],17:[function(require,module,exports){
var GameObject = require('../GameObject'),
  Bullet = require('./Bullet'),
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
    this._super(null, 'root');
  },
  update: function (elapsed) {
    this._super(elapsed);
  },
  buildChildrenObject: function () {
    this.setChildren(new HashArray(['_id', 'uid', 'type']));
  },
  newChildFromState: function (childState) {
    var child;

    if (childState.type == 'bullet')
      child = new Bullet(this, childState.id);
    if (childState.type == 'player')
      child = new Player(this, childState.id);

    child.setState(childState);

    return child;
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = World;
},{"../GameObject":4,"../lib/HashArray":18,"./Bullet":15,"./Player":16}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
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
};

/*======================================================*\
 * Factory 
\*======================================================*/

Phaser.GameObjectFactory.prototype.bird = function(x, y, group) {
  if(typeof group === 'undefined')
    group = this.world;
  
  return group.add(new BirdSprite(this.game, x, y));
};
},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
/*======================================================*\
 * Plane() 
\*======================================================*/
function Plane(game, x, y) {
  Phaser.Group.call(this, game);
 
  // configure group 
  this.x = x;
  this.y = y;
  
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

Plane.prototype.displayStatusRing = function(displaysStatusRing) {
  this.statusRing.alpha = displaysStatusRing ? 0.5 : 0.0;

  if(displaysStatusRing) {
    this.statusRing.lineStyle(6.0, 0x3beb72);
    this.statusRing.drawCircle(0, 0, 30.0); 
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
},{}],22:[function(require,module,exports){
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
},{"../../../shared/js/UserState":8}],23:[function(require,module,exports){
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
    this.world.setState(value);
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

    this.players = new HashArray(['uid', 'id']);

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

},{"../../../shared/js/GameObject":4,"../../../shared/js/LatencyAnalyzer":5,"../../../shared/js/UserInputProcessor":7,"../../../shared/js/gameObjects/Player":16,"../../../shared/js/gameObjects/World":17,"../../../shared/js/lib/HashArray":18,"./ServerClientStateManager":22}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvQmlyZC5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9CdWxsZXQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1dvcmxkLmpzIiwic2hhcmVkL2pzL2xpYi9IYXNoQXJyYXkuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9CaXJkU3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvQnVsbGV0U3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXIuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9Ta3lEdWVsQ2xpZW50LmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvbG9nVmlld2VyLmpzIiwiLi4vLi4vLi4vLi4vLi4vdXNyL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBMaWJyYXJ5XHJcbnJlcXVpcmUoXCIuL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9qY2xhc3MvbGliL2pjbGFzcy5taW4uanNcIik7XHJcblxyXG4vLyBTaGFyZWRcclxuXHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9saWIvSGFzaEFycmF5LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4uanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0J1bGxldC5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYXllci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9Vc2VyQWN0aW9ucy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJTdGF0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qc1wiKTtcclxuXHJcbi8vIFNwcml0ZXNcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL0J1bGxldFNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvQmlyZFNwcml0ZS5qc1wiKTtcclxuXHJcbi8vIENsaWVudFxyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi93ZWItc2VydmVyL3B1YmxpYy9qcy9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL1NreUR1ZWxDbGllbnQuanNcIik7XHJcblxyXG4vLyBWaWV3XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL2xvZ1ZpZXdlci5qc1wiKTsiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsKXtcbi8qIVxuICogSmF2YVNjcmlwdCBJbmhlcml0YW5jZSB3aXRoIFByaXZhdGUgTWVtYmVyc1xuICogTGFyZ2VseSBiYXNlZCB1cG9uIEpvaG4gUmVzaWcncyBpbmhlcml0YW5jZSB0ZWNobmlxdWUsXG4gKiAoc2VlIGh0dHA6Ly9lam9obi5vcmcvYmxvZy9zaW1wbGUtamF2YXNjcmlwdC1pbmhlcml0YW5jZS8pXG4gKiB0aGF0IHdhcyBpbnNwaXJlZCBieSBiYXNlMiBhbmQgUHJvdG90eXBlLlxuICpcbiAqIFdvcmtzIHdpdGggYW5kIHdpdGhvdXQgbm9kZS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKlxuICogdjIuMC40LCBNYXJjZWwgUmllZ2VyLCAyMDEzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmlnYS9qY2xhc3NcbiAqIGh0dHBzOi8vbnBtanMub3JnL3BhY2thZ2UvamNsYXNzXG4gKi9cbnZhciBucyxuc0tleTtcbmlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiJiZ0eXBlb2YgcHJvY2VzcyE9PVwidW5kZWZpbmVkXCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyl7bnM9bW9kdWxlO25zS2V5PVwiZXhwb3J0c1wiO31lbHNle2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtucz13aW5kb3c7XG5uc0tleT1cIkpDbGFzc1wiO319KGZ1bmN0aW9uKGQsZil7dmFyIGI9ZFtmXTt2YXIgYT17ZXh0ZW5kYWJsZTp0cnVlLGN0b3JOYW1lOlwiaW5pdFwiLHN1cGVyTmFtZTpcIl9zdXBlclwiLGVuYWJsZVByaXZhY3k6dHJ1ZSxwcml2YXRlUGF0dGVybjovXl9fLisvLHRyYWNraW5nOnRydWUscHJpdmF0ZU5hbWU6XCJfX1wiLG1ldGhvZHNLZXk6XCJfamNNZXRob2RzX1wiLGRlcHRoS2V5OlwiX2pjRGVwdGhfXCIsY2FsbGVyRGVwdGhLZXk6XCJfamNDYWxsZXJEZXB0aF9cIn07XG52YXIgYz1mYWxzZTt2YXIgZT1mdW5jdGlvbigpe307ZS5leHRlbmQ9ZnVuY3Rpb24obSxnKXtnPWd8fHt9O2Zvcih2YXIgcSBpbiBhKXtpZihnW3FdPT09dW5kZWZpbmVkKXtnW3FdPWFbcV07fX1pZighZy5lbmFibGVQcml2YWN5KXtnLnByaXZhdGVQYXR0ZXJuPW51bGw7XG5nLnByaXZhdGVOYW1lPW51bGw7fXZhciByPXRoaXMucHJvdG90eXBlO2M9dHJ1ZTt2YXIgbz1uZXcgdGhpcygpO2M9ZmFsc2U7b1tnLmRlcHRoS2V5XT1yW2cuZGVwdGhLZXldfHwwO29bZy5kZXB0aEtleV0rKzt2YXIgaz1vW2cuZGVwdGhLZXldO3ZhciBpPXt9O3ZhciBqPXt9O1xudmFyIHM9e307Zm9yKHZhciBoIGluIG0pe2lmKG1baF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7dmFyIG49KGZ1bmN0aW9uKHQsdSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHY9dGhpc1tnLnN1cGVyTmFtZV07aWYoIWcucHJpdmF0ZVBhdHRlcm58fCFnLnByaXZhdGVQYXR0ZXJuLnRlc3QodCkpe3RoaXNbZy5zdXBlck5hbWVdPXJbdF07XG59dmFyIEQ7aWYoZy5wcml2YXRlTmFtZSl7RD10aGlzW2cucHJpdmF0ZU5hbWVdO3RoaXNbZy5wcml2YXRlTmFtZV09RHx8czt9dmFyIHksRSx4LEk7aWYoZy5wcml2YXRlUGF0dGVybil7aWYodGhpc1tnLmNhbGxlckRlcHRoS2V5XT09PXVuZGVmaW5lZCl7dGhpc1tnLmNhbGxlckRlcHRoS2V5XT1rO1xufXk9dGhpc1tnLm1ldGhvZHNLZXldO2lmKHQ9PWcuY3Rvcil7dGhpc1tnLm1ldGhvZHNLZXldPXl8fGk7Zm9yKHZhciB6IGluIGkpe2lmKCF0aGlzW2cubWV0aG9kc0tleV1bel0pe3RoaXNbZy5tZXRob2RzS2V5XVt6XT17fTt9dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdPWlbel1ba107XG52YXIgQz10aGlzW2cubWV0aG9kc0tleV1bel1ba107dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdPWZ1bmN0aW9uKCl7dmFyIEs9dGhpc1tnLnN1cGVyTmFtZV07dGhpc1tnLnN1cGVyTmFtZV09dGhpc1tnLm1ldGhvZHNLZXldW3pdW2stMV07dmFyIEo9Qy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG50aGlzW2cuc3VwZXJOYW1lXT1LO3JldHVybiBKO307fWk9dGhpc1tnLm1ldGhvZHNLZXldO31lbHNle3RoaXNbZy5tZXRob2RzS2V5XT1pO31FPXt9O2Zvcih2YXIgeiBpbiB0aGlzW2cubWV0aG9kc0tleV0pe0Vbel09dGhpc1t6XTt2YXIgRj1NYXRoLm1heC5hcHBseShNYXRoLE9iamVjdC5rZXlzKGlbel0pKTtcbnRoaXNbel09aVt6XVtGXTt9aWYoZy50cmFja2luZyl7eD17fTtmb3IodmFyIEcgaW4gail7eFtHXT10aGlzW0ddO3RoaXNbR109altHXTt9fWlmKGcudHJhY2tpbmcpe0k9T2JqZWN0LmtleXModGhpcyk7fX12YXIgQj11LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihnLnByaXZhdGVQYXR0ZXJuKXtpZihnLnRyYWNraW5nKXt2YXIgSD1PYmplY3Qua2V5cyh0aGlzKTtcbmZvcih2YXIgRyBpbiBIKXtHPUhbR107aWYoZy5wcml2YXRlUGF0dGVybi50ZXN0KEcpKXt4W0ddPXRoaXNbR107altHXT10aGlzW0ddO319Zm9yKHZhciBHIGluIEkpe0c9SVtHXTt2YXIgQT1ILmluZGV4T2YoRyk8MCYmZy5wcml2YXRlUGF0dGVybi50ZXN0KEcpO2lmKEEpe2RlbGV0ZSBqW0ddO1xuZGVsZXRlIHRoaXNbR107fX1mb3IodmFyIEcgaW4gail7dmFyIHc9dGhpc1tnLmNhbGxlckRlcHRoS2V5XTtpZih4W0ddPT09dW5kZWZpbmVkfHxrPT13KXtkZWxldGUgdGhpc1tHXTt9ZWxzZXt0aGlzW0ddPXhbR107fX19Zm9yKHZhciBHIGluIHRoaXNbZy5tZXRob2RzS2V5XSl7aWYoRVtHXT09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbR107XG59ZWxzZXt0aGlzW0ddPUVbR107fX1pZih5PT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLm1ldGhvZHNLZXldO31lbHNle3RoaXNbZy5tZXRob2RzS2V5XT15O31pZihrPT10aGlzW2cuY2FsbGVyRGVwdGhLZXldKXtkZWxldGUgdGhpc1tnLmNhbGxlckRlcHRoS2V5XTtcbn19aWYoZy5wcml2YXRlTmFtZSl7aWYoRD09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5wcml2YXRlTmFtZV07fWVsc2V7dGhpc1tnLnByaXZhdGVOYW1lXT1EO319aWYodj09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5zdXBlck5hbWVdO31lbHNle3RoaXNbZy5zdXBlck5hbWVdPXY7XG59cmV0dXJuIEI7fTt9KShoLG1baF0pO3ZhciBsPWcucHJpdmF0ZVBhdHRlcm4mJmcucHJpdmF0ZVBhdHRlcm4udGVzdChoKTtpZihsKXtpW2hdPXt9O2lbaF1ba109bjt9ZWxzZXtvW2hdPW47fX1lbHNle3ZhciBsPWcudHJhY2tpbmcmJmcucHJpdmF0ZVBhdHRlcm4mJmcucHJpdmF0ZVBhdHRlcm4udGVzdChoKTtcbmlmKGwpe2pbaF09bVtoXTt9ZWxzZXtvW2hdPW1baF07fX19ZnVuY3Rpb24gcCgpe2lmKCFjJiZ0aGlzW2cuY3Rvck5hbWVdKXt0aGlzW2cuY3Rvck5hbWVdLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt9fXAucHJvdG90eXBlPW87cC5wcm90b3R5cGUuY29uc3RydWN0b3I9cDtcbmlmKGcuZXh0ZW5kYWJsZSE9PWZhbHNlKXtwLmV4dGVuZD1hcmd1bWVudHMuY2FsbGVlO31yZXR1cm4gcDt9O2Uubm9Db25mbGljdD1mdW5jdGlvbigpe3ZhciBnPWRbZl07ZFtmXT1iO3JldHVybiBnO307ZFtmXT1lO30pKG5zLG5zS2V5KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUmVxdWlyZXNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljTWFuYWdlciA9IHJlcXVpcmUoJy4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlcicpLFxyXG4gIEpDbGFzcyA9IHJlcXVpcmUoJ2pjbGFzcycpLFxyXG4gIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2FtZU9iamVjdCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBHYW1lT2JqZWN0ID0gbW9kdWxlLmV4cG9ydHMgPSBKQ2xhc3MuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2V0UGFyZW50OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICB9LFxyXG4gIHNldENoaWxkcmVuOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRGVzZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMuX2NoaWxkcmVuID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBTZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcclxuICB9LFxyXG4gIHNldElkOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldElkOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZCB8fCAodGhpcy5faWQgPSB0aGlzLnJhbmRvbUlkKCkpO1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZC5zdGF0ZTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlbklkczogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgdmFyIHJldCA9IHt9O1xyXG5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcmV0W2NoaWxkLmdldElkKCldID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfSxcclxuICBzZXRDaGlsZHJlblN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpZHMgPSB0aGlzLmdldENoaWxkcmVuSWRzKCk7XHJcblxyXG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xyXG4gICAgICB2YXIgY2hpbGQgPSBzZWxmLmdldENoaWxkcmVuKCkuZ2V0KGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgICBpZiAoIWNoaWxkKVxyXG4gICAgICAgIHNlbGYuZ2V0Q2hpbGRyZW4oKS5hZGQoc2VsZi5uZXdDaGlsZEZyb21TdGF0ZShjaGlsZFN0YXRlKSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBjaGlsZC5zZXRTdGF0ZShjaGlsZFN0YXRlKTtcclxuXHJcbiAgICAgIGRlbGV0ZSBpZHNbY2hpbGRTdGF0ZS5pZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5kZXN0cm95VW5mb3VuZENoaWxkcmVuT25TdGF0ZVNldClcclxuICAgICAgZm9yICh2YXIgaWQgaW4gaWRzKVxyXG4gICAgICAgIHRoaXMuZGVzdHJveUNoaWxkQnlJZChpZHNbaWRdKTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldENoaWxkcmVuKCkuYWxsLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkLmdldFN0YXRlKCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldERpcnR5OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRGVzZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMuX2RpcnR5ID0gdmFsdWU7XHJcbiAgICAodGhpcy5fZGlydHkgJiYgdGhpcy5nZXRQYXJlbnQoKSkgPyB0aGlzLmdldFBhcmVudCgpLnNldERpcnR5KHRydWUpIDogJyc7XHJcbiAgICAhdGhpcy5fZGlydHkgPyB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQuc2V0RGlydHkoZmFsc2UpO1xyXG4gICAgfSkgOiAnJztcclxuICB9LFxyXG4gIGdldERpcnR5OiBmdW5jdGlvbigpIHtcclxuICAgIC8vIFNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgcmV0dXJuIHRoaXMuX2RpcnR5O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHJhbmRvbUlkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9WQUxVRSkudG9TdHJpbmcoMTYpO1xyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQpIHtcclxuICAgIGlmICghcGFyZW50KVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZygnU2V0dGluZyB3b3JsZCBhbmQgcm9vdCB0bycsIHRoaXMpO1xyXG4gICAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS53b3JsZCA9IEdhbWVPYmplY3QucHJvdG90eXBlLnJvb3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SWQoaWQpO1xyXG4gICAgdGhpcy50eXBlID0gJ0dhbWVPYmplY3QnO1xyXG4gICAgdGhpcy5idWlsZENoaWxkcmVuT2JqZWN0KCk7XHJcbiAgICB0aGlzLnNldFBhcmVudChwYXJlbnQpO1xyXG4gICAgdGhpcy5zZXREaXJ0eSh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuZGVzdHJveVVuZm91bmRDaGlsZHJlbk9uU3RhdGVTZXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlciA9IG5ldyBDaGFyYWN0ZXJpc3RpY01hbmFnZXIodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0ZWQ9IHRydWU7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyBXaXBlIG91dCBhbnkgZGVzdHJveWVkIGNoaWxkcmVuLlxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5jb25jYXQoKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBpZiAoY2hpbGQuZGVzdHJveWVkKVxyXG4gICAgICAgIHNlbGYuZ2V0Q2hpbGRyZW4oKS5yZW1vdmUoY2hpbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC51cGRhdGUoZWxhcHNlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFwcGx5QWxsKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgbmV3Q2hpbGRGcm9tU3RhdGU6IGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICB2YXIgY2hpbGQgPSBuZXcgR2FtZU9iamVjdCgpO1xyXG4gICAgY2hpbGQuaW5pdCh0aGlzLCBjaGlsZFN0YXRlLmlkKVxyXG4gICAgY2hpbGQuc3RhdGUgPSBjaGlsZFN0YXRlO1xyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH0sXHJcbiAgZGVzdHJveUNoaWxkQnlJZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmdldENoaWxkcmVuKCkuZ2V0KGlkKTtcclxuICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5yZW1vdmUoY2hpbGQpO1xyXG4gIH0sXHJcbiAgYnVpbGRDaGlsZHJlbk9iamVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXRDaGlsZHJlbihuZXcgSGFzaEFycmF5KFsnX2lkJywgJ3R5cGUnXSkpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICB9LFxyXG4gIHVwZGF0ZVNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgaWYgKHRoaXMuc3ByaXRlICYmIHRoaXMuZGVzdHJveWVkKVxyXG4gICAgICAgIHRoaXMuc3ByaXRlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmICghdGhpcy5zcHJpdGUpXHJcbiAgICAgICAgdGhpcy5idWlsZFNwcml0ZShwaGFzZXIpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAgICAgIHRoaXMuc3ByaXRlLnVwZGF0ZVdpdGhNb2RlbCh0aGlzKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVwZGF0ZVBoYXNlcjogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBjaGlsZC51cGRhdGVQaGFzZXIocGhhc2VyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3ByaXRlKHBoYXNlcik7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcbiAgfVxyXG59KTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHbG9iYWxzXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBMQVRFTkNZX0FOQUxZWkVSX0RFRkFVTFRfTUFYID0gMTA7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBMYXRlbmN5QW5hbHl6ZXIoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgTGF0ZW5jeUFuYWx5emVyID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkxhdGVuY3lBbmFseXplci5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHN0YWNrOiBbXSxcclxuICBtYXhTdGFja0xlbmd0aDogTEFURU5DWV9BTkFMWVpFUl9ERUZBVUxUX01BWCxcclxuICBsYXN0VGVzdFRpbWU6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBsYXRlbmN5KCkge1xyXG4gICAgLy8gUmV0dXJucyBhIHdlaWdodGVkIGF2ZXJhZ2UgbGF0ZW5jeS5cclxuICAgIC8vIEl0ZW0gYXQgaXggMCBoYXMgd2VpZ2h0IG9mIDEgYW5kIGl0ZW0gYXQgaXggbGVuZ3RoIGhhcyB3ZWlnaHQgb2YgbGVuZ3RoLlxyXG4gICAgdmFyIGxhdFRvdCA9IDAsXHJcbiAgICAgIHRvdCA9IDA7XHJcblxyXG4gICAgdGhpcy5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChsYXQsIGl4LCBhcnIpIHtcclxuICAgICAgbGF0VG90ICs9IGxhdCAqIChpeCsxKTtcclxuICAgICAgdG90ICs9IChpeCsxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB2YWwgPSB0b3QgPyBsYXRUb3QgLyB0b3QgOiAxO1xyXG4gICAgaWYgKHRoaXMuZGVidWcpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTEFURU5DWScsIHZhbCk7XHJcblxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9LFxyXG4gIGdldCBub3coKSB7XHJcbiAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhcnRUZXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmxhc3RUZXN0VGltZSA9IHRoaXMubm93O1xyXG4gIH0sXHJcbiAgZW5kVGVzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMubGFzdFRlc3RUaW1lO1xyXG4gICAgaWYgKHRoaXMuZGVidWcpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdMQVRFTkNZJywgdGhpcy5sYXRlbmN5KTtcclxuICAgIHRoaXMucHVzaChlbGFwc2VkKTtcclxuICB9LFxyXG4gIHB1c2g6IGZ1bmN0aW9uKGxhdGVuY3kpIHtcclxuICAgIHRoaXMuc3RhY2sucHVzaChsYXRlbmN5KTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiB0aGlzLm1heFN0YWNrTGVuZ3RoKVxyXG4gICAgICB0aGlzLnN0YWNrLnVuc2hpZnQoKTtcclxuICB9LFxyXG4gIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnN0YWNrID0gW107XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gTGF0ZW5jeUFuYWx5emVyOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVTRVJfQUNUSU9OUyA9IHtcclxuICBMRUZUX0RPV046IDB4MDAwMSxcclxuICBMRUZUX1VQOiAweDAwMDIsXHJcbiAgUklHSFRfRE9XTjogMHgwMDEwLFxyXG4gIFJJR0hUX1VQOiAweDAwMjAsXHJcbiAgVVBfRE9XTjogMHgwMTAwLFxyXG4gIFVQX1VQOiAweDAyMDAsXHJcbiAgRE9XTl9ET1dOOiAweDEwMDAsXHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IFVTRVJfQUNUSU9OUztcclxufSBlbHNlIHtcclxuICB3aW5kb3cuVVNFUl9BQ1RJT05TID0gVVNFUl9BQ1RJT05TO1xyXG59IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogVXNlcklucHV0UHJvY2Vzc29yKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVzZXJJbnB1dFByb2Nlc3NvciA9IGZ1bmN0aW9uKCkge1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblVzZXJJbnB1dFByb2Nlc3Nvci5wcm90b3R5cGUgPSB7XHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAodXNlcklucHV0LCBlbGFwc2VkLCB3b3JsZCkge1xyXG4gICAgaWYgKHVzZXJJbnB1dC5sZWZ0KVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IC13b3JsZC5wbGF5ZXIuR0xPQkFMUy5CQU5LX1JBVEU7XHJcbiAgICBlbHNlIGlmICh1c2VySW5wdXQucmlnaHQpXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gd29ybGQucGxheWVyLkdMT0JBTFMuQkFOS19SQVRFO1xyXG4gICAgZWxzZVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYmFuayA9IDA7XHJcblxyXG4gICAgaWYgKHVzZXJJbnB1dC51cClcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gd29ybGQucGxheWVyLkdMT0JBTFMuQUNDRUxFUkFUSU9OX1JBVEU7XHJcbiAgICBlbHNlIGlmICh1c2VySW5wdXQuZG93bilcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gLXdvcmxkLnBsYXllci5HTE9CQUxTLkRFQ0VMRVJBVElPTl9SQVRFO1xyXG4gICAgZWxzZSBcclxuICAgICAgd29ybGQucGxheWVyLmFjY2VsZXJhdGVyID0gMC4wO1xyXG5cclxuICAgIHdvcmxkLnBsYXllci50cmlnZ2VyRG93biA9IHVzZXJJbnB1dC50cmlnZ2VyO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dFByb2Nlc3NvcjsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBVc2VySW5wdXRTdGF0ZSgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBVc2VySW5wdXRTdGF0ZSA9IGZ1bmN0aW9uKGlucHV0LCB0aW1lKSB7XHJcbiAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gIHRoaXMudGltZSA9IHRpbWU7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuVXNlcklucHV0U3RhdGUucHJvdG90eXBlID0ge1xyXG4gIGlucHV0OiB1bmRlZmluZWQsXHJcbiAgdGltZTogdW5kZWZpbmVkXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dFN0YXRlOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4uL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljTWFuYWdlcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY01hbmFnZXIgPSBmdW5jdGlvbihwYXJlbnQpIHtcclxuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICB0aGlzLmNoYXJhY3RlcmlzdGljcyA9IG5ldyBIYXNoQXJyYXkoWyduYW1lJ10pO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljTWFuYWdlci5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgY2FjaGU6IHt9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhZGQ6IGZ1bmN0aW9uIChjaGFyYWN0ZXJpc3RpYykge1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MuYWRkKGNoYXJhY3RlcmlzdGljKTtcclxuICB9LFxyXG4gIGFwcGx5QWxsOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5jYWNoZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuY2hhcmFjdGVyaXN0aWNzLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGFyYWN0ZXJpc3RpYykge1xyXG4gICAgICBjaGFyYWN0ZXJpc3RpYy5hcHBseVRvKHNlbGYucGFyZW50LCBlbGFwc2VkLCBzZWxmLmNhY2hlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljTWFuYWdlcjsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4gPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIHZhciBkZXN0cm95ID0gdGFyZ2V0LnggPCAwIHx8IHRhcmdldC54ID4gdGhpcy5vcHRpb25zLndpZHRoIHx8IHRhcmdldC55IDwgMCB8fCB0YXJnZXQueSA+IHRoaXMub3B0aW9ucy5oZWlnaHQ7XHJcbiAgICBpZiAoZGVzdHJveSlcclxuICAgICAgdGFyZ2V0LmRlc3Ryb3koKTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19EZXN0cm95T2ZmU2NyZWVuOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1BoeXNpY3MoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX1BoeXNpY3MucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQudmVsb2NpdHkgPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHRocm93IEVycm9yKCdUYXJnZXQgdmVsb2NpdHkgaXMgdW5kZWZpbmVkIGZvciAnLCB0YXJnZXQpO1xyXG4gICAgXHJcbiAgICB2YXIgdiA9IHRhcmdldC52ZWxvY2l0eTtcclxuICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoJ2FjY2VsZXJhdGVyJykpXHJcbiAgICAgIHYgPSB0YXJnZXQudmVsb2NpdHkgKyAodGFyZ2V0LmFjY2VsZXJhdGVyICogZWxhcHNlZCk7XHJcbiAgICB0YXJnZXQudmVsb2NpdHkgPSB2ID4gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01BWCA/IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NQVggOiAodiA8IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NSU4gPyB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUlOIDogdik7XHJcblxyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYmFuaycpKVxyXG4gICAgICB0YXJnZXQuYW5nbGUgKz0gdGFyZ2V0LmJhbmsgKiBlbGFwc2VkO1xyXG5cclxuICAgIHRhcmdldC54ICs9IE1hdGguY29zKHRhcmdldC5hbmdsZSkgKiB0YXJnZXQudmVsb2NpdHkgKiBlbGFwc2VkO1xyXG4gICAgdGFyZ2V0LnkgKz0gTWF0aC5zaW4odGFyZ2V0LmFuZ2xlKSAqIHRhcmdldC52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfUGh5c2ljczsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIHRhcmdldC54ID0gdGFyZ2V0LnggPCAwID8gdGhpcy5vcHRpb25zLndpZHRoIDogdGFyZ2V0Lng7XHJcbiAgICB0YXJnZXQueCA9IHRhcmdldC54ID4gdGhpcy5vcHRpb25zLndpZHRoID8gdGFyZ2V0LnggJSB0aGlzLm9wdGlvbnMud2lkdGggOiB0YXJnZXQueDtcclxuICAgIHRhcmdldC55ID0gdGFyZ2V0LnkgPCAwID8gdGhpcy5vcHRpb25zLmhlaWdodCA6IHRhcmdldC55O1xyXG4gICAgdGFyZ2V0LnkgPSB0YXJnZXQueSA+IHRoaXMub3B0aW9ucy5oZWlnaHQgPyB0YXJnZXQueSAlIHRoaXMub3B0aW9ucy5oZWlnaHQgOiB0YXJnZXQueTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZzsiLCJ2YXIgQnVsbGV0ID0gcmVxdWlyZSgnLi4vZ2FtZU9iamVjdHMvQnVsbGV0Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBDaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICB0aGlzLm9wdGlvbnMuZmlyZVJhdGUgPSBvcHRpb25zLmZpcmVSYXRlIHx8IDEwMC4wO1xyXG4gIHRoaXMub3B0aW9ucy5maXJlVmVsb2NpdHkgPSBvcHRpb25zLmZpcmVWZWxvY2l0eSB8fCA3MDAuMDtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5DaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBuZXh0QnVsbGV0VGltZTogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgbm93KCkge1xyXG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZmlyZTogZnVuY3Rpb24gKHRhcmdldCwgeCwgeSwgYW5nbGUsIHZlbG9jaXR5KVxyXG4gIHtcclxuICAgIGlmICh0YXJnZXQuYW1tbyA8PSAwKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBcclxuICAgIHZhciBidWxsZXQgPSBuZXcgQnVsbGV0KHRhcmdldCwgdW5kZWZpbmVkLCB4LCB5LCBhbmdsZSwgdmVsb2NpdHkpO1xyXG4gICAgdGFyZ2V0LmdldENoaWxkcmVuKCkuYWRkKGJ1bGxldCk7XHJcbiAgICB0YXJnZXQuYW1tby0tO1xyXG4gICAgdGhpcy5uZXh0QnVsbGV0VGltZSA9IHRoaXMubm93ICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG4gIH0sXHJcbiAgYXBwbHlUbzogZnVuY3Rpb24gKHRhcmdldCwgZWxhcHNlZCwgY2FjaGUpIHtcclxuICAgIGlmICghdGhpcy5uZXh0QnVsbGV0VGltZSlcclxuICAgICAgdGhpcy5uZXh0QnVsbGV0VGltZSA9IHRoaXMubm93ICsgdGhpcy5vcHRpb25zLmZpcmVSYXRlO1xyXG5cclxuICAgIGlmICh0YXJnZXQudHJpZ2dlckRvd24pXHJcbiAgICB7XHJcbiAgICAgIHZhciB0ID0gdGhpcy5uZXh0QnVsbGV0VGltZSArIHRoaXMub3B0aW9ucy5maXJlUmF0ZTtcclxuICAgICAgXHJcbiAgICAgIHdoaWxlICh0aGlzLm5vdyA+IHRoaXMubmV4dEJ1bGxldFRpbWUpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmZpcmUodGFyZ2V0LCB0YXJnZXQueCwgdGFyZ2V0LnksIHRhcmdldC5hbmdsZSwgdGhpcy5vcHRpb25zLmZpcmVWZWxvY2l0eSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogQmlyZCgpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudmFyIEJpcmQgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBWYXJpYWJsZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGFuZ2xlOiAwLFxuICBiYW5rOiAwLFxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogUHJvcGVydGllc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5faWQsXG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBiYW5rOiB0aGlzLmJhbmssXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGVcbiAgICB9O1xuICB9LFxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5faWQpXG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBiaXJkXFwncyBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xuICAgIH1cblxuICAgIHRoaXMueCA9IHZhbHVlLng7XG4gICAgdGhpcy55ID0gdmFsdWUueTtcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xuICAgIHRoaXMuYmFuayA9IHZhbHVlLmJhbms7XG4gICAgdGhpcy5zY2FsZSA9IHZhbHVlLnNjYWxlO1xuICB9LFxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogTWV0aG9kc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQpIHtcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XG5cbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy53b3JsZC53aWR0aDtcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy53b3JsZC5oZWlnaHQ7XG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB0aGlzLmJhbmsgPSB0aGlzLnJhbmRvbWl6ZWRCYW5rKCk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDI1ICsgTWF0aC5yYW5kb20oKSAqIDEwO1xuICAgIHRoaXMuc2NhbGUgPSAoTWF0aC5yYW5kb20oKSAqIDAuNCkgKyAwLjE7XG5cbiAgICB0aGlzLkdMT0JBTFMgPSB7XG4gICAgICBWRUxPQ0lUWV9NQVg6IEJpcmQudmVsb2NpdHksXG4gICAgICBWRUxPQ0lUWV9NSU46IEJpcmQudmVsb2NpdHksXG4gICAgfTtcblxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcnKSkodGhpcy53b3JsZCkpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hcHBseUFsbChlbGFwc2VkKTtcbiAgICBcbiAgICAvLyBUT0RPOiBlbmNhcHN1bGF0ZSBiaXJkIEFJXG4gICAgXG4gICAgLy8gYmlyZHMgaGF2ZSBhIDEvMjAwIGNoYW5jZSBvZiBjaGFuZ2luZyB0aGUgYmFuayBldmVyeSBmcmFtZVxuICAgIGlmKE1hdGgucmFuZG9tKCkgPCAwLjAwNSlcbiAgICAgIHRoaXMuYmFuayA9IHRoaXMucmFuZG9taXplZEJhbmsoKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQuYmlyZCgwLCAwKTtcbiAgfSxcbiAgcmFuZG9taXplZEJhbms6IGZ1bmN0aW9uKCkge1xuICAgIC8vIHZhbHVlIGluIHRoZSByYW5nZSBbLTEuMCwgMS4wXSBcbiAgICB2YXIgYmFua0ZhY3RvciA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIuMDtcbiAgICAvLyB0aGUgbWF4aW11bSBiYW5rIGFuZ2xlIFxuICAgIHZhciBiYW5rTWFnbml0dWRlID0gTWF0aC5QSSAvIDIuMDtcbiAgICAvLyBzY2FsZSB0aGUgbWFnbml0dWRlIGJ5IHRoZSByYW5kb21pemVkIGZhY3RvclxuICAgIHJldHVybiBiYW5rRmFjdG9yICogYmFua01hZ25pdHVkZTsgXG4gIH1cbn0pO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBCaXJkOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQnVsbGV0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEJ1bGxldCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXHJcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvcignVGhlIGJ1bGxldCBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCA9IHZhbHVlLng7XHJcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xyXG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkLCB4LCB5LCBhbmdsZSwgdmVsb2NpdHkpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcclxuXHJcbiAgICB0aGlzLkdMT0JBTFMgPSB7XHJcbiAgICAgIFZFTE9DSVRZX01BWDogMTAwMDAwLFxyXG4gICAgICBWRUxPQ0lUWV9NSU46IDBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAnYnVsbGV0JztcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbicpKSh0aGlzLndvcmxkKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFwcGx5QWxsKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5idWxsZXQoMCwgMCk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBCdWxsZXQ7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFJlcXVpcmVtZW50c1xuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpLFxuICBCdWxsZXQgPSByZXF1aXJlKCcuL0J1bGxldCcpLFxuICBwbGF5ZXJDb3VudCA9IDA7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGF5ZXIoKVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBQbGF5ZXIgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBWYXJpYWJsZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIHg6IDQwMCxcbiAgeTogNDAwLFxuICBhbmdsZTogMCxcbiAgdmVsb2NpdHk6IDYsXG4gIGJhbms6IDAsXG4gIGFjY2VsZXJhdGVyOiAwLFxuICB0cmlnZ2VyRG93bjogZmFsc2UsXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBQcm9wZXJ0aWVzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZClcbiAgICAgIHJldHVybiB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkLFxuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYWNjZWxlcmF0ZXI6IHRoaXMuYWNjZWxlcmF0ZXIsXG4gICAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgICBhY2NlbDogdGhpcy5hY2NlbCxcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aCxcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgYW1tbzogdGhpcy5hbW1vLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW5TdGF0ZSgpXG4gICAgfTtcbiAgfSxcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcignVGhlIHBsYW5lIGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XG4gICAgfVxuXG4gICAgdGhpcy51aWQgPSB2YWx1ZS51aWQ7XG4gICAgdGhpcy54ID0gdmFsdWUueDtcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcbiAgICB0aGlzLmhlYWx0aCA9IHZhbHVlLmhlYWx0aDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gdmFsdWUuYWNjZWxlcmF0ZXI7XG4gICAgdGhpcy5hbW1vID0gdmFsdWUuYW1tbztcblxuICAgIHRoaXMuc2V0Q2hpbGRyZW5TdGF0ZSh2YWx1ZS5jaGlsZHJlbik7XG4gIH0sXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBNZXRob2RzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBpbml0OiBmdW5jdGlvbihwYXJlbnQsIGlkLCB1aWQpIHtcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XG5cbiAgICB0aGlzLnVpZCA9IHVpZDtcblxuICAgIHRoaXMudHlwZSA9ICdwbGF5ZXInO1xuXG4gICAgdGhpcy5HTE9CQUxTID0ge1xuICAgICAgVkVMT0NJVFlfTUFYOiA2MDAsXG4gICAgICBWRUxPQ0lUWV9NSU46IDkwLFxuICAgICAgQkFOS19SQVRFOiBNYXRoLlBJIC8gMixcbiAgICAgIEFDQ0VMRVJBVElPTl9SQVRFOiAyNTAsXG4gICAgICBERUNFTEVSQVRJT05fUkFURTogMTAwXG4gICAgfTtcblxuICAgIHRoaXMuYnVsbGV0UHJvcHMgPSB7XG4gICAgICBmaXJlUmF0ZTogMTAwLFxuICAgICAgZmlyZVZlbG9jaXR5OiA1MDBcbiAgICB9O1xuXG4gICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgdGhpcy5hbW1vID0gMTAwMDtcblxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcnKSkodGhpcy53b3JsZCkpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMnKSkodGhpcy5idWxsZXRQcm9wcykpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgdGhpcy5idWxsZXRQcm9wcy5maXJlVmVsb2NpdHkgPSA1MDAuMCArIHRoaXMudmVsb2NpdHk7XG5cbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQucGxhbmUoMCwgMCk7XG4gICAgdGhpcy5zcHJpdGUuZGlzcGxheVN0YXR1c1Jpbmcod2luZG93LmNsaWVudC5wbGF5ZXIudWlkID09PSB0aGlzLnVpZCk7XG5cbiAgICB3aW5kb3cuY2xpZW50LmdHYW1lT2JqZWN0cy5hZGQodGhpcy5zcHJpdGUpO1xuICB9LFxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcbiAgICBidWxsZXQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFkZChidWxsZXQpO1xuICAgIHJldHVybiBidWxsZXQ7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc3ByaXRlKSB7XG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xuICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xuICAgIH1cbiAgfVxufSk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKSxcclxuICBCdWxsZXQgPSByZXF1aXJlKCcuL0J1bGxldCcpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQmlyZCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBXb3JsZCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKVxyXG4gICAgICBpZiAoa2V5ICE9ICdjaGlsZHJlbicpXHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWVba2V5XTtcclxuXHJcbiAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJykpXHJcbiAgICAgIHRoaXMuc2V0Q2hpbGRyZW5TdGF0ZSh2YWx1ZS5jaGlsZHJlbik7XHJcbiAgfSxcclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRpbGVXaWR0aDogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgIHRpbGVIZWlnaHQ6IHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgdGlsZXM6IHRoaXMudGlsZXMsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW5TdGF0ZSgpXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdXb3JsZCBpbml0IScpO1xyXG4gICAgdGhpcy5fc3VwZXIobnVsbCwgJ3Jvb3QnKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuX3N1cGVyKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgYnVpbGRDaGlsZHJlbk9iamVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXRDaGlsZHJlbihuZXcgSGFzaEFycmF5KFsnX2lkJywgJ3VpZCcsICd0eXBlJ10pKTtcclxuICB9LFxyXG4gIG5ld0NoaWxkRnJvbVN0YXRlOiBmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xyXG4gICAgdmFyIGNoaWxkO1xyXG5cclxuICAgIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ2J1bGxldCcpXHJcbiAgICAgIGNoaWxkID0gbmV3IEJ1bGxldCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3BsYXllcicpXHJcbiAgICAgIGNoaWxkID0gbmV3IFBsYXllcih0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuXHJcbiAgICBjaGlsZC5zZXRTdGF0ZShjaGlsZFN0YXRlKTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmxkOyIsInZhciBIYXNoQXJyYXkgPSBmdW5jdGlvbihrZXlGaWVsZHMsIGNhbGxiYWNrKSB7XG4gIHRoaXMuX21hcCA9IHt9O1xuICB0aGlzLl9saXN0ID0gW107XG4gIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICB0aGlzLmtleUZpZWxkcyA9IGtleUZpZWxkcztcblxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ2FsbCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0O1xuICB9KTtcblxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ21hcCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH0pO1xuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCdjb25zdHJ1Y3QnKTtcbiAgfVxufTtcblxuSGFzaEFycmF5LnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmtleUZpZWxkcykge1xuICAgICAgICBrZXkgPSB0aGlzLmtleUZpZWxkc1trZXldO1xuICAgICAgICB2YXIgaW5zdCA9IHRoaXMuZmluZChvYmosIGtleSk7XG4gICAgICAgIGlmIChpbnN0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuX21hcFtpbnN0XSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hcFtpbnN0XS5pbmRleE9mKG9iaikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gQ2Fubm90IGFkZCB0aGUgc2FtZSBpdGVtIHR3aWNlXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX21hcFtpbnN0XS5wdXNoKG9iaik7XG4gICAgICAgICAgfSBlbHNlIHRoaXMuX21hcFtpbnN0XSA9IFtvYmpdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3QucHVzaChvYmopO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygnYWRkJywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7XG4gICAgfVxuICB9LFxuICBhZGRNYXA6IGZ1bmN0aW9uKGtleSwgb2JqKSB7XG4gICAgdGhpcy5fbWFwW2tleV0gPSBvYmo7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ2FkZE1hcCcsIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIG9iajogb2JqXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuICghKHRoaXMuX21hcFtrZXldIGluc3RhbmNlb2YgQXJyYXkpIHx8IHRoaXMuX21hcFtrZXldLmxlbmd0aCAhPSAxKSA/IHRoaXMuX21hcFtrZXldIDogdGhpcy5fbWFwW2tleV1bMF07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICB9LFxuICBoYXNNdWx0aXBsZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFtrZXldIGluc3RhbmNlb2YgQXJyYXk7XG4gIH0sXG4gIHJlbW92ZUJ5S2V5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVtb3ZlZCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gYXJndW1lbnRzW2ldO1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5fbWFwW2tleV0uY29uY2F0KCk7XG4gICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgcmVtb3ZlZCA9IHJlbW92ZWQuY29uY2F0KGl0ZW1zKTtcbiAgICAgICAgZm9yICh2YXIgaiBpbiBpdGVtcykge1xuICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbal07XG4gICAgICAgICAgZm9yICh2YXIgaXggaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAgICAgIHZhciBrZXkyID0gdGhpcy5maW5kKGl0ZW0sIHRoaXMua2V5RmllbGRzW2l4XSk7XG4gICAgICAgICAgICBpZiAoa2V5MiAmJiB0aGlzLl9tYXBba2V5Ml0pIHtcbiAgICAgICAgICAgICAgdmFyIGl4ID0gdGhpcy5fbWFwW2tleTJdLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICAgIGlmIChpeCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcFtrZXkyXS5zcGxpY2UoaXgsIDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX21hcFtrZXkyXS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbWFwW2tleTJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKHRoaXMuX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlQnlLZXknLCByZW1vdmVkKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgaXggaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZmluZChpdGVtLCB0aGlzLmtleUZpZWxkc1tpeF0pO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgdmFyIGl4ID0gdGhpcy5fbWFwW2tleV0uaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICBpZiAoaXggIT0gLTEpXG4gICAgICAgICAgICB0aGlzLl9tYXBba2V5XS5zcGxpY2UoaXgsIDEpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX21hcFtrZXldLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKHRoaXMuX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZScsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuICByZW1vdmVBbGw6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbGQgPSB0aGlzLl9saXN0LmNvbmNhdCgpO1xuICAgIHRoaXMuX21hcCA9IHt9O1xuICAgIHRoaXMuX2xpc3QgPSBbXTtcblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmUnLCBvbGQpO1xuICAgIH1cbiAgfSxcbiAgZmluZDogZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9ialtwYXRoXTtcbiAgICB9XG5cbiAgICB2YXIgZHVwID0gcGF0aC5jb25jYXQoKTtcbiAgICAvLyBlbHNlIGFzc3VtZSBhcnJheS5cbiAgICB3aGlsZSAoZHVwLmxlbmd0aCAmJiBvYmopIHtcbiAgICAgIG9iaiA9IG9ialtkdXAuc2hpZnQoKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgY2xvbmU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIG4gPSBuZXcgSGFzaEFycmF5KHRoaXMua2V5RmllbGRzLmNvbmNhdCgpLCBjYWxsYmFjayA/IGNhbGxiYWNrIDogdGhpcy5jYWxsYmFjayk7XG4gICAgbi5hZGQuYXBwbHkobiwgdGhpcy5hbGwuY29uY2F0KCkpO1xuICAgIHJldHVybiBuO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hBcnJheTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCaXJkU3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIEJpcmRTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICBcclxuICAvLyBhZGQgdGhlIGJpcmRTcHJpdGUgXHJcbiAgdGhpcy5iaXJkU3ByaXRlICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYmlyZCcpO1xyXG4gICBcclxuICAvLyB5b3UgY2FuJ3Qgc2V0IHRoZSBhbmNob3IgcG9pbnQgb2YgYSBncm91cCwgc28gZm9yIHggJiB5IHRvIGNvcnJlc3BvbmRcclxuICAvLyB0byB0aGUgQmlyZFNwcml0ZSdzIGNlbnRlciB3ZSBoYXZlIHRvIG9mZnNldCBpdCBtYW51YWxseVxyXG4gIHRoaXMuYmlyZFNwcml0ZS54ID0gLXRoaXMuYmlyZFNwcml0ZS53aWR0aCAgLyAyLjA7XHJcbiAgdGhpcy5iaXJkU3ByaXRlLnkgPSAtdGhpcy5iaXJkU3ByaXRlLmhlaWdodCAvIDIuMDtcclxufTtcclxuXHJcbkJpcmRTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuQmlyZFNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCaXJkU3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5CaXJkU3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxuICB0aGlzLmFuZ2xlID0gbW9kZWwuYW5nbGUgKiA1Ny4yOTU3Nzk1O1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuYmlyZCA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCaXJkU3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSkpO1xyXG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJ1bGxldFNwcml0ZSgpIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBCdWxsZXRTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICBcclxuICAvLyBhZGQgdGhlIEJ1bGxldFNwcml0ZSBcclxuICB0aGlzLkJ1bGxldFNwcml0ZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2J1bGxldCcpO1xyXG59O1xyXG5cclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCdWxsZXRTcHJpdGU7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQdWJsaWMgTWV0aG9kcyBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5idWxsZXQgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgQnVsbGV0U3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSkpO1xyXG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGFuZSgpIFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZ1bmN0aW9uIFBsYW5lKGdhbWUsIHgsIHkpIHtcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XG4gXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbiAgXG4gIC8vIGFkZCB0aGUgYWlycGxhbmUgXG4gIHRoaXMuYWlycGxhbmUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdhaXJwbGFuZScpO1xuICAgXG4gIC8vIHlvdSBjYW4ndCBzZXQgdGhlIGFuY2hvciBwb2ludCBvZiBhIGdyb3VwLCBzbyBmb3IgeCAmIHkgdG8gY29ycmVzcG9uZFxuICAvLyB0byB0aGUgcGxhbmUncyBjZW50ZXIgd2UgaGF2ZSB0byBvZmZzZXQgaXQgbWFudWFsbHlcbiAgdGhpcy5haXJwbGFuZS54ID0gLXRoaXMuYWlycGxhbmUud2lkdGggIC8gMi4wO1xuICB0aGlzLmFpcnBsYW5lLnkgPSAtdGhpcy5haXJwbGFuZS5oZWlnaHQgLyAyLjA7XG5cbiAgLy8gYWRkIHRoZSBzdGF0dXMgcmluZyBcbiAgdGhpcy5zdGF0dXNSaW5nID0gZ2FtZS5hZGQuZ3JhcGhpY3MoMC4wLCAwLjAsIHRoaXMpO1xufTtcblxuUGxhbmUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcblBsYW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBsYW5lO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogUHVibGljIE1ldGhvZHMgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5QbGFuZS5wcm90b3R5cGUuZGlzcGxheVN0YXR1c1JpbmcgPSBmdW5jdGlvbihkaXNwbGF5c1N0YXR1c1JpbmcpIHtcbiAgdGhpcy5zdGF0dXNSaW5nLmFscGhhID0gZGlzcGxheXNTdGF0dXNSaW5nID8gMC41IDogMC4wO1xuXG4gIGlmKGRpc3BsYXlzU3RhdHVzUmluZykge1xuICAgIHRoaXMuc3RhdHVzUmluZy5saW5lU3R5bGUoNi4wLCAweDNiZWI3Mik7XG4gICAgdGhpcy5zdGF0dXNSaW5nLmRyYXdDaXJjbGUoMCwgMCwgMzAuMCk7IFxuICB9XG59O1xuXG5QbGFuZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdGhpcy54ID0gbW9kZWwueDtcbiAgdGhpcy55ID0gbW9kZWwueTtcbiAgdGhpcy5hbmdsZSA9IG1vZGVsLmFuZ2xlICogNTcuMjk1Nzc5NTtcblxuICBpZiAobW9kZWwuYmFuayA8IDApXG4gICAgdGhpcy5haXJwbGFuZS5mcmFtZSA9IDI7XG4gIGVsc2UgaWYgKG1vZGVsLmJhbmsgPiAwKVxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAxO1xuICBlbHNlIFxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAwO1xufTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEZhY3RvcnkgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLnBsYW5lID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XG4gIHJldHVybiBncm91cC5hZGQobmV3IFBsYW5lKHRoaXMuZ2FtZSwgeCwgeSkpO1xufTsiLCJ2YXIgVXNlcklucHV0U3RhdGUgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvVXNlclN0YXRlJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBTQ1N0YXRlTWFuYWdlcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBTQ1N0YXRlTWFuYWdlciA9IGZ1bmN0aW9uKGZwcywgZ2FtZUludGVyZmFjZSkge1xyXG4gIHRoaXMuZ2FtZUludGVyZmFjZSA9IGdhbWVJbnRlcmZhY2U7XHJcbiAgdGhpcy5mcmFtZVRpbWUgPSAxMDAwLjAgLyBmcHM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuU0NTdGF0ZU1hbmFnZXIucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICB1c2VySW5wdXRTdGF0ZXM6IFtdLFxyXG4gIGxhc3RVcGRhdGVUaW1lRW5kOiB1bmRlZmluZWQsXHJcbiAgZXN0U2VydmVyVGltZTogdW5kZWZpbmVkLFxyXG4gIGxhc3RTZXJ2ZXJTdGF0ZTogdW5kZWZpbmVkLFxyXG4gIGludGVydmFsSWQ6IHVuZGVmaW5lZCxcclxuICBsYXRlbmN5OiAwLFxyXG4gIGxhc3RTZW5kVG9TZXJ2ZXJUaW1lOiAxMDAwLjAgLyAzMC4wLFxyXG4gIC8qKlxyXG4gICAqIFNlbmQgYW4gdXBkYXRlIHRvIHRoZSBzZXJ2ZXIgZXZlcnkgdGhpcyBzbyBvZnRlbi5cclxuICAgKi9cclxuICBzZXJ2ZXJVcGRhdGVJbnRlcnZhbDogMTAsXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgbm93KCkge1xyXG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHBsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuaW50ZXJ2YWxIYW5kbGVyLmJpbmQodGhpcyksIHRoaXMuZnJhbWVUaW1lKTtcclxuICB9LFxyXG4gIHBhdXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbElkKVxyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAge1xyXG4gICAgaWYgKHRoaXMubmV3U2VydmVyU3RhdGUgJiYgIXRoaXMubGFzdFNlcnZlclN0YXRlKVxyXG4gICAgICB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSA9IHRoaXMubmV3U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gQXMgbG9uZyBhcyB0aGUgc2VydmVyIGhhcyBuZXZlciBzZW50IHVzIGEgc3RhdGUsIHdlIGRvIG5vdGhpbmcuXHJcbiAgICBpZiAoIXRoaXMubGFzdFNlcnZlclN0YXRlIHx8IHRoaXMubGF0ZW5jeSA9PSAwKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAvLyBUaW1lIHRoaXMgdXBkYXRlIHN0YXJ0ZWRcclxuICAgICAgdXBkYXRlU3RhcnQgPSB0aGlzLm5vdyxcclxuICAgICAgLy8gVGltZSBzaW5jZSBvdXIgbGFzdCB1cGRhdGUgZW5kZWRcclxuICAgICAgZWxhcHNlZCA9IHVwZGF0ZVN0YXJ0IC0gdGhpcy5sYXN0VXBkYXRlVGltZUVuZCxcclxuICAgICAgLy8gVGhlIHN0YXRlIG9mIGFsbCB1c2VyIGlucHV0XHJcbiAgICAgIHVzZXJJbnB1dCA9IHRoaXMuZ2FtZUludGVyZmFjZS51c2VySW5wdXQ7XHJcblxyXG4gICAgdGhpcy5sYXN0VXBkYXRlVGltZUVuZCA9IHRoaXMubm93O1xyXG5cclxuICAgIC8vIFNldCBsYXN0IHNlcnZlciBzdGF0ZSB0byBlaXRoZXIgdGhlIHVwZGF0ZVxyXG4gICAgdGhpcy5sYXN0U2VydmVyU3RhdGUgPSB0aGlzLm5ld1NlcnZlclN0YXRlIHx8IHRoaXMubGFzdFNlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBnYW1lIGludGVyZmFjZSB0byBvbGQgc2VydmVyIHN0YXRlXHJcbiAgICB0aGlzLmdhbWVJbnRlcmZhY2Uuc3RhdGUgPSB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBFc3RpbWF0ZSB0aGUgY3VycmVudCBzZXJ2ZXIgdGltZSBhdCB0aGlzIGV4YWN0IHBvaW50ICh0aGUgc2VydmVyIHdpbGwgYmUgYmVoaW5kIHVzIGJ5IGEgcGVyaW9kIG9mIHRpbWUpXHJcbiAgICB0aGlzLmVzdFNlcnZlclRpbWUgPSBNYXRoLnJvdW5kKHRoaXMubmV3U2VydmVyU3RhdGUgPyB0aGlzLm5ld1NlcnZlclN0YXRlLnRpbWUgKyAodGhpcy5sYXRlbmN5IC8gMi4wKSA6IHRoaXMuZXN0U2VydmVyVGltZSArIGVsYXBzZWQpO1xyXG5cclxuICAgIC8vIEVzdGFibGlzaCBvdXIgc2ltdWxhdGlvbiBzdGFydGluZyB0aW1lLlxyXG4gICAgdmFyIHQgPSB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZS50aW1lLFxyXG4gICAgICBzaW1FbGFwc2VkID0gMC4wO1xyXG5cclxuICAgIC8vIEZpbHRlciBvdXQgYW55IG9sZCB1c2VyIGZyYW1lIHN0YXRlc1xyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMgPSB0aGlzLnVzZXJJbnB1dFN0YXRlcy5maWx0ZXIoZnVuY3Rpb24gKHVzZXJJbnB1dFN0YXRlKSB7XHJcbiAgICAgIHJldHVybiB1c2VySW5wdXRTdGF0ZS50aW1lID4gc2VsZi5sYXN0U2VydmVyU3RhdGUudGltZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNpbXVsYXRlIGFsbCBmcmFtZXMgdGhlIHNlcnZlciBoYXMgbm90IHlldCBwcm9jZXNzZWQuXHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgICBzaW1FbGFwc2VkID0gdXNlcklucHV0U3RhdGUudGltZSAtIHQ7XHJcbiAgICAgIHNlbGYuZ2FtZUludGVyZmFjZS5zaW11bGF0ZVVwZGF0ZSh1c2VySW5wdXRTdGF0ZS5pbnB1dCwgc2ltRWxhcHNlZCk7XHJcbiAgICAgIHQgPSB1c2VySW5wdXRTdGF0ZS50aW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2F2ZSBvdXIgY3VycmVudCBzdGF0ZVxyXG4gICAgdmFyIG5ld1VzZXJJbnB1dFN0YXRlID0gbmV3IFVzZXJJbnB1dFN0YXRlKHVzZXJJbnB1dCwgdGhpcy5lc3RTZXJ2ZXJUaW1lKTtcclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzLnB1c2gobmV3VXNlcklucHV0U3RhdGUpO1xyXG5cclxuICAgIC8vIEZpbmlzaCBzaW1sdWF0aW5nIHRoZSByZW1haW5pbmcgbWlsbGlzZWNvbmRzIGJhc2VkIG9uIHRoZSBjdXJyZW50IHVzZXIgaW5wdXQuXHJcbiAgICB0aGlzLmdhbWVJbnRlcmZhY2Uuc2ltdWxhdGVVcGRhdGUobmV3VXNlcklucHV0U3RhdGUuaW5wdXQsIHRoaXMuZXN0U2VydmVyVGltZSAtIHQpO1xyXG5cclxuICAgIGlmICh0aGlzLmVzdFNlcnZlclRpbWUgLSB0aGlzLmxhc3RTZW5kVG9TZXJ2ZXJUaW1lID4gdGhpcy5zZXJ2ZXJVcGRhdGVJbnRlcnZhbClcclxuICAgIHtcclxuICAgICAgLy8gU2VuZCBvdXIgc3RhdGUgdG8gdGhlIHNlcnZlclxyXG4gICAgICB0aGlzLmdhbWVJbnRlcmZhY2UudXBkYXRlU2VydmVyKG5ld1VzZXJJbnB1dFN0YXRlKTtcclxuXHJcbiAgICAgIHRoaXMubGFzdFNlbmRUb1NlcnZlclRpbWUgPSB0aGlzLmVzdFNlcnZlclRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgaXQsIHNvIHRocm93IGl0IGF3YXkuXHJcbiAgICB0aGlzLm5ld1NlcnZlclN0YXRlID0gdW5kZWZpbmVkO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbnRlcnZhbEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTQ1N0YXRlTWFuYWdlcjsiLCJ2YXJcclxuICBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL0dhbWVPYmplY3QnKSxcclxuICBXb3JsZCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9Xb3JsZCcpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGF5ZXInKSxcclxuICBMYXRlbmN5QW5hbHl6ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyJyksXHJcbiAgU0NTdGF0ZU1hbmFnZXIgPSByZXF1aXJlKCcuL1NlcnZlckNsaWVudFN0YXRlTWFuYWdlcicpLFxyXG4gIFVzZXJJbnB1dFByb2Nlc3NvciA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9Vc2VySW5wdXRQcm9jZXNzb3InKSxcclxuICBIYXNoQXJyYXkgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgRlBTID0gNjAsXHJcbiAgU0VSVkVSX1RJTUVPVVRfTVMgPSAxMDAwMCxcclxuICBQTEFORV9HTE9CQUxTID0gUGxheWVyLnByb3RvdHlwZS5HTE9CQUxTO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU2t5RHVlbENsaWVudCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBTa3lEdWVsQ2xpZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIgPSBuZXcgTGF0ZW5jeUFuYWx5emVyKCk7XHJcbiAgdGhpcy5zY1N0YXRlTWFuYWdlciA9IG5ldyBTQ1N0YXRlTWFuYWdlcig2MCwgdGhpcyk7XHJcbiAgdGhpcy51c2VySW5wdXRQcm9jZXNzb3IgPSBuZXcgVXNlcklucHV0UHJvY2Vzc29yKCk7XHJcblxyXG4gIHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5Ta3lEdWVsQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhcnRlZDogZmFsc2UsXHJcbiAgaW5wdXQ6IHt9LFxyXG4gIHBsYXllcjogdW5kZWZpbmVkLFxyXG4gIGVycm9yVGV4dDogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IHN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgc2V0IHN0YXRlKHZhbHVlKSB7XHJcbiAgICB0aGlzLndvcmxkLnNldFN0YXRlKHZhbHVlKTtcclxuICB9LFxyXG4gIGdldCB1c2VySW5wdXQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cDogdGhpcy5pbnB1dC51cC5pc0Rvd24sXHJcbiAgICAgIGRvd246IHRoaXMuaW5wdXQuZG93bi5pc0Rvd24sXHJcbiAgICAgIGxlZnQ6IHRoaXMuaW5wdXQubGVmdC5pc0Rvd24sXHJcbiAgICAgIHJpZ2h0OiB0aGlzLmlucHV0LnJpZ2h0LmlzRG93bixcclxuICAgICAgdHJpZ2dlcjogdGhpcy5pbnB1dC50cmlnZ2VyLmlzRG93blxyXG4gICAgfTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgbGF0ZW5jeUNoZWNrOiBmdW5jdGlvbiAoY291bnQsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIGkgPSAwO1xyXG4gICAgICBjb3VudCA9IGNvdW50IHx8IDEwO1xyXG5cclxuICAgIHBpbmcoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBwaW5nKCkge1xyXG4gICAgICBzZWxmLmxhdGVuY3lBbmFseXplci5zdGFydFRlc3QoKTtcclxuICAgICAgcG9tZWxvLnJlcXVlc3QoJ3NreWR1ZWwuc2t5ZHVlbEhhbmRsZXIucGluZycsIHNreWR1ZWxfc2t5ZHVlbEhhbmRsZXJfcGluZ0hhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNreWR1ZWxfc2t5ZHVlbEhhbmRsZXJfcGluZ0hhbmRsZXIoKSB7XHJcbiAgICAgIHNlbGYubGF0ZW5jeUFuYWx5emVyLmVuZFRlc3QoKTtcclxuICAgICAgKCsraSA8IGNvdW50KSA/IHBpbmcoKSA6IGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdGFydDogZnVuY3Rpb24gKHJpZCkge1xyXG4gICAgdGhpcy5yaWQgPSByaWQ7XHJcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMucGxheWVycyA9IG5ldyBIYXNoQXJyYXkoWyd1aWQnLCAnaWQnXSk7XHJcblxyXG4gICAgdGhpcy5sYXRlbmN5Q2hlY2soMTAsIHRoaXMuc3RhcnRTZXJ2ZXJDb25uZWN0aW9uLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgc3RvcDogZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgdGhpcy5lcnJvclRleHQgPSByZWFzb247XHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBhdXNlKCk7XHJcbiAgfSxcclxuICBzdGFydFNlcnZlckNvbm5lY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubGF0ZW5jeSA9IHRoaXMubGF0ZW5jeUFuYWx5emVyLmxhdGVuY3k7XHJcbiAgICBwb21lbG8ucmVxdWVzdCgnc2t5ZHVlbC5za3lkdWVsSGFuZGxlci5zdGFydCcsIHtcclxuICAgICAgcmlkOiB0aGlzLnJpZFxyXG4gICAgfSwgdGhpcy5zZXJ2ZXJDb25uZWN0aW9uX3N0YXJ0ZWRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgLy9TQ1N0YXRlTWFuYWdlciBJbnRlcmZhY2VcclxuICBzaW11bGF0ZVVwZGF0ZTogZnVuY3Rpb24gKHVzZXJJbnB1dCwgZWxhcHNlZCkge1xyXG4gICAgZWxhcHNlZCA9ICBlbGFwc2VkIC8gMTAwMC4wO1xyXG5cclxuICAgIGlmIChlbGFwc2VkID4gU0VSVkVSX1RJTUVPVVRfTVMpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc3RvcCgnU2VydmVyIGRpc2Nvbm5lY3RlZCcpOyAgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKGVsYXBzZWQgPiAwLjIpXHJcbiAgICAgIHRocm93IEVycm9yKCdFbGFwc2VkIGlzIHdheXl5eSB0b28gaGlnaCBtYW4uIERpZCBzZXJ2ZXIgZGlzY29ubmVjdD8nKTtcclxuXHJcbiAgICB0aGlzLnVzZXJJbnB1dFByb2Nlc3Nvci51cGRhdGUodXNlcklucHV0LCBlbGFwc2VkLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLndvcmxkLnVwZGF0ZShlbGFwc2VkKTtcclxuICB9LFxyXG4gIC8vU0NTdGF0ZU1hbmFnZXIgSW50ZXJmYWNlXHJcbiAgdXBkYXRlU2VydmVyOiBmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgIHRoaXMubGF0ZW5jeUFuYWx5emVyLnN0YXJ0VGVzdCgpO1xyXG4gICAgcG9tZWxvLnJlcXVlc3QoJ3NreWR1ZWwuc2t5ZHVlbEhhbmRsZXIudXNlcklucHV0JywgdGhpcy51c2VySW5wdXQsIHRoaXMuc29ja2V0X3VwZGF0ZVNlcnZlclJlc3BvbnNlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIHNldHVwU3RhcnRTdGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsIHdvcmxkIHN0YXRlJywgc3RhdGUud29ybGQpO1xyXG5cclxuICAgIHRoaXMud29ybGQuc2V0U3RhdGUoc3RhdGUud29ybGQpO1xyXG5cclxuICAgIHRoaXMucGxheWVyID0gdGhpcy53b3JsZC5nZXRDaGlsZHJlbigpLmdldCh0aGlzLnVpZCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnBsYXllcilcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2cgKHN0YXRlKTtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1BsYXllciBjb3VsZCBub3QgYmUgZm91bmQgaW4gaW5jb21pbmcgc3RhdGUhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5uZXdTZXJ2ZXJTdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIucGxheSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBFdmVudHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHNlcnZlckNvbm5lY3Rpb25fc3RhcnRlZEhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICB0aGlzLnVpZCA9IGRhdGEudWlkO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09OTkVDVElPTiBzdGFydGVkJywgZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygnV0FJVElORyBmb3Igc2VydmVyIHN0YXRlJyk7XHJcblxyXG4gICAgcG9tZWxvLm9uKCdzZXJ2ZXJTdGF0ZScsIHRoaXMuc29ja2V0X3NlcnZlclN0YXRlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBsYXkoKTtcclxuICB9LFxyXG4gIHNvY2tldF9zZXJ2ZXJTdGF0ZUhhbmRsZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMuc2NTdGF0ZU1hbmFnZXIubGFzdFNlcnZlclN0YXRlKVxyXG4gICAgICB0aGlzLnNldHVwU3RhcnRTdGF0ZShkYXRhKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdGhpcy5zY1N0YXRlTWFuYWdlci5uZXdTZXJ2ZXJTdGF0ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzb2NrZXRfdXBkYXRlU2VydmVyUmVzcG9uc2VIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIuZW5kVGVzdCgpO1xyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5jbGllbnQgPSBuZXcgU2t5RHVlbENsaWVudCgpO1xyXG4iLCIvKiBhbiBhamF4IGxvZyBmaWxlIHRhaWxlciAvIHZpZXdlclxyXG5jb3B5cmlnaHQgMjAwNyBqb2huIG1pbm5paGFuLlxyXG4gXHJcbmh0dHA6Ly9mcmVlcG9zaXRvcnkuY29tXHJcbiBcclxuUmVsZWFzZWQgdW5kZXIgdGhlc2UgdGVybXNcclxuMS4gVGhpcyBzY3JpcHQsIGFzc29jaWF0ZWQgZnVuY3Rpb25zIGFuZCBIVE1MIGNvZGUgKFwidGhlIGNvZGVcIikgbWF5IGJlIHVzZWQgYnkgeW91IChcInRoZSByZWNpcGllbnRcIikgZm9yIGFueSBwdXJwb3NlLlxyXG4yLiBUaGlzIGNvZGUgbWF5IGJlIG1vZGlmaWVkIGluIGFueSB3YXkgZGVlbWVkIHVzZWZ1bCBieSB0aGUgcmVjaXBpZW50LlxyXG4zLiBUaGlzIGNvZGUgbWF5IGJlIHVzZWQgaW4gZGVyaXZhdGl2ZSB3b3JrcyBvZiBhbnkga2luZCwgYW55d2hlcmUsIGJ5IHRoZSByZWNpcGllbnQuXHJcbjQuIFlvdXIgdXNlIG9mIHRoZSBjb2RlIGluZGljYXRlcyB5b3VyIGFjY2VwdGFuY2Ugb2YgdGhlc2UgdGVybXMuXHJcbjUuIFRoaXMgbm90aWNlIG11c3QgYmUga2VwdCBpbnRhY3Qgd2l0aCBhbnkgdXNlIG9mIHRoZSBjb2RlIHRvIHByb3ZpZGUgYXR0cmlidXRpb24uXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KCkge1xyXG4gdmFyIHJlcXVlc3QgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB9IGNhdGNoICh0cnltaWNyb3NvZnQpIHtcclxuICAgdHJ5IHtcclxuICAgICByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNc3htbDIuWE1MSFRUUFwiKTtcclxuICAgfSBjYXRjaCAob3RoZXJtaWNyb3NvZnQpIHtcclxuICAgICB0cnkge1xyXG4gICAgICByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuICAgICB9IGNhdGNoIChmYWlsZWQpIHtcclxuICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gXHJcbiBpZiAocmVxdWVzdCA9PSBudWxsKSB7XHJcbiAgIGFsZXJ0KFwiRXJyb3IgY3JlYXRpbmcgcmVxdWVzdCBvYmplY3QhXCIpO1xyXG4gfSBlbHNlIHtcclxuICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiB9XHJcbn1cclxuIFxyXG52YXIgcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoKTtcclxuXHJcbndpbmRvdy5nZXRMb2cgPSBmdW5jdGlvbih0aW1lcikge1xyXG4gIHZhciB1cmwgPSBcImh0dHA6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgIT0gJ3d3dy5za3lkdWVsLmNvbScgPyAnOjMwMDEnIDogJycpICsgXCIvbG9nL2dhbWUtc2VydmVyLmxvZ1wiO1xyXG4gIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gdXBkYXRlUGFnZTtcclxuICByZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiAgc3RhcnRUYWlsKHRpbWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRUYWlsKHRpbWVyKSB7XHJcbiAgaWYgKHRpbWVyID09IFwic3RvcFwiKSB7XHJcbiAgICBzdG9wVGFpbCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ID0gc2V0VGltZW91dChcImdldExvZygpXCIsIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFRhaWwoKSB7XHJcbiAgY2xlYXJUaW1lb3V0KHQpO1xyXG4gIHZhciBwYXVzZSA9IFwiVGhlIGxvZyB2aWV3ZXIgaGFzIGJlZW4gcGF1c2VkLiBUbyBiZWdpbiB2aWV3aW5nIGFnYWluLCBjbGljayB0aGUgU3RhcnQgVmlld2VyIGJ1dHRvbi5cXG5cIjtcclxuICBsb2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcclxuICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhdXNlKTtcclxuICBsb2dEaXYucmVwbGFjZUNoaWxkKG5ld05vZGUsIGxvZ0Rpdi5jaGlsZE5vZGVzWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUGFnZSgpIHtcclxuICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgdmFyIGN1cnJlbnRMb2dWYWx1ZSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICBldmFsKGN1cnJlbnRMb2dWYWx1ZSk7XHJcbiAgICAgIGxvZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpO1xyXG4gICAgICB2YXIgbG9nTGluZSA9ICcgJztcclxuICAgICAgZm9yIChpID0gMDsgaSA8IGN1cnJlbnRMb2dWYWx1ZS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBsb2dMaW5lICs9IGN1cnJlbnRMb2dWYWx1ZVtpXSArIFwiXFxuXCI7XHJcbiAgICAgIH1cclxuICAgICAgbG9nRGl2LmlubmVySFRNTCA9IGxvZ0xpbmU7XHJcbiAgICB9IGVsc2VcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciEgUmVxdWVzdCBzdGF0dXMgaXMgXCIgKyByZXF1ZXN0LnN0YXR1cyk7XHJcbiAgfVxyXG59IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuTXV0YXRpb25PYnNlcnZlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgdmFyIHF1ZXVlID0gW107XG5cbiAgICBpZiAoY2FuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICB2YXIgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlTGlzdCA9IHF1ZXVlLnNsaWNlKCk7XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcXVldWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGhpZGRlbkRpdiwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCd5ZXMnLCAnbm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiJdfQ==
