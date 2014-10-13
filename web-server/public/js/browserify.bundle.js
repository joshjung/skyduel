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
  lastBulletTime: undefined,
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
    this.lastBulletTime = this.now;
  },
  applyTo: function (target, elapsed, cache) {
    if (!this.lastBulletTime)
      this.lastBulletTime = this.now;

    if (target.triggerDown)
    {
      var t = 0;
      
      while (t < elapsed)
      {
        this.fire(target, target.x, target.y, target.angle, this.options.fireVelocity);

        t += this.options.fireRate / 1000.0;
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
    this.exists = true;

    this.type = 'bullet';

    this.charManager = new CharacteristicManager(this);
    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_DestroyOffScreen'))(this.parent.world));
  },
  update: function (elapsed) {
    this.charManager.applyAll(elapsed);
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.bullet(0, 0);
  },
  destroy: function () {
    this.exists = false;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvQmlyZC5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9CdWxsZXQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1dvcmxkLmpzIiwic2hhcmVkL2pzL2xpYi9IYXNoQXJyYXkuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9CaXJkU3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvQnVsbGV0U3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXIuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9Ta3lEdWVsQ2xpZW50LmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvbG9nVmlld2VyLmpzIiwiLi4vLi4vLi4vLi4vLi4vdXNyL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBMaWJyYXJ5XHJcbnJlcXVpcmUoXCIuL2dhbWUtc2VydmVyL25vZGVfbW9kdWxlcy9qY2xhc3MvbGliL2pjbGFzcy5taW4uanNcIik7XHJcblxyXG4vLyBTaGFyZWRcclxuXHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9saWIvSGFzaEFycmF5LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4uanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0J1bGxldC5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL1BsYXllci5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2dhbWVPYmplY3RzL0JpcmQuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9Vc2VyQWN0aW9ucy5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJTdGF0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qc1wiKTtcclxuXHJcbi8vIFNwcml0ZXNcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9zcHJpdGVzL0J1bGxldFNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvQmlyZFNwcml0ZS5qc1wiKTtcclxuXHJcbi8vIENsaWVudFxyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi93ZWItc2VydmVyL3B1YmxpYy9qcy9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL1NreUR1ZWxDbGllbnQuanNcIik7XHJcblxyXG4vLyBWaWV3XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL2xvZ1ZpZXdlci5qc1wiKTsiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsKXtcbi8qIVxuICogSmF2YVNjcmlwdCBJbmhlcml0YW5jZSB3aXRoIFByaXZhdGUgTWVtYmVyc1xuICogTGFyZ2VseSBiYXNlZCB1cG9uIEpvaG4gUmVzaWcncyBpbmhlcml0YW5jZSB0ZWNobmlxdWUsXG4gKiAoc2VlIGh0dHA6Ly9lam9obi5vcmcvYmxvZy9zaW1wbGUtamF2YXNjcmlwdC1pbmhlcml0YW5jZS8pXG4gKiB0aGF0IHdhcyBpbnNwaXJlZCBieSBiYXNlMiBhbmQgUHJvdG90eXBlLlxuICpcbiAqIFdvcmtzIHdpdGggYW5kIHdpdGhvdXQgbm9kZS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKlxuICogdjIuMC40LCBNYXJjZWwgUmllZ2VyLCAyMDEzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmlnYS9qY2xhc3NcbiAqIGh0dHBzOi8vbnBtanMub3JnL3BhY2thZ2UvamNsYXNzXG4gKi9cbnZhciBucyxuc0tleTtcbmlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiJiZ0eXBlb2YgcHJvY2VzcyE9PVwidW5kZWZpbmVkXCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyl7bnM9bW9kdWxlO25zS2V5PVwiZXhwb3J0c1wiO31lbHNle2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtucz13aW5kb3c7XG5uc0tleT1cIkpDbGFzc1wiO319KGZ1bmN0aW9uKGQsZil7dmFyIGI9ZFtmXTt2YXIgYT17ZXh0ZW5kYWJsZTp0cnVlLGN0b3JOYW1lOlwiaW5pdFwiLHN1cGVyTmFtZTpcIl9zdXBlclwiLGVuYWJsZVByaXZhY3k6dHJ1ZSxwcml2YXRlUGF0dGVybjovXl9fLisvLHRyYWNraW5nOnRydWUscHJpdmF0ZU5hbWU6XCJfX1wiLG1ldGhvZHNLZXk6XCJfamNNZXRob2RzX1wiLGRlcHRoS2V5OlwiX2pjRGVwdGhfXCIsY2FsbGVyRGVwdGhLZXk6XCJfamNDYWxsZXJEZXB0aF9cIn07XG52YXIgYz1mYWxzZTt2YXIgZT1mdW5jdGlvbigpe307ZS5leHRlbmQ9ZnVuY3Rpb24obSxnKXtnPWd8fHt9O2Zvcih2YXIgcSBpbiBhKXtpZihnW3FdPT09dW5kZWZpbmVkKXtnW3FdPWFbcV07fX1pZighZy5lbmFibGVQcml2YWN5KXtnLnByaXZhdGVQYXR0ZXJuPW51bGw7XG5nLnByaXZhdGVOYW1lPW51bGw7fXZhciByPXRoaXMucHJvdG90eXBlO2M9dHJ1ZTt2YXIgbz1uZXcgdGhpcygpO2M9ZmFsc2U7b1tnLmRlcHRoS2V5XT1yW2cuZGVwdGhLZXldfHwwO29bZy5kZXB0aEtleV0rKzt2YXIgaz1vW2cuZGVwdGhLZXldO3ZhciBpPXt9O3ZhciBqPXt9O1xudmFyIHM9e307Zm9yKHZhciBoIGluIG0pe2lmKG1baF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7dmFyIG49KGZ1bmN0aW9uKHQsdSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHY9dGhpc1tnLnN1cGVyTmFtZV07aWYoIWcucHJpdmF0ZVBhdHRlcm58fCFnLnByaXZhdGVQYXR0ZXJuLnRlc3QodCkpe3RoaXNbZy5zdXBlck5hbWVdPXJbdF07XG59dmFyIEQ7aWYoZy5wcml2YXRlTmFtZSl7RD10aGlzW2cucHJpdmF0ZU5hbWVdO3RoaXNbZy5wcml2YXRlTmFtZV09RHx8czt9dmFyIHksRSx4LEk7aWYoZy5wcml2YXRlUGF0dGVybil7aWYodGhpc1tnLmNhbGxlckRlcHRoS2V5XT09PXVuZGVmaW5lZCl7dGhpc1tnLmNhbGxlckRlcHRoS2V5XT1rO1xufXk9dGhpc1tnLm1ldGhvZHNLZXldO2lmKHQ9PWcuY3Rvcil7dGhpc1tnLm1ldGhvZHNLZXldPXl8fGk7Zm9yKHZhciB6IGluIGkpe2lmKCF0aGlzW2cubWV0aG9kc0tleV1bel0pe3RoaXNbZy5tZXRob2RzS2V5XVt6XT17fTt9dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdPWlbel1ba107XG52YXIgQz10aGlzW2cubWV0aG9kc0tleV1bel1ba107dGhpc1tnLm1ldGhvZHNLZXldW3pdW2tdPWZ1bmN0aW9uKCl7dmFyIEs9dGhpc1tnLnN1cGVyTmFtZV07dGhpc1tnLnN1cGVyTmFtZV09dGhpc1tnLm1ldGhvZHNLZXldW3pdW2stMV07dmFyIEo9Qy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG50aGlzW2cuc3VwZXJOYW1lXT1LO3JldHVybiBKO307fWk9dGhpc1tnLm1ldGhvZHNLZXldO31lbHNle3RoaXNbZy5tZXRob2RzS2V5XT1pO31FPXt9O2Zvcih2YXIgeiBpbiB0aGlzW2cubWV0aG9kc0tleV0pe0Vbel09dGhpc1t6XTt2YXIgRj1NYXRoLm1heC5hcHBseShNYXRoLE9iamVjdC5rZXlzKGlbel0pKTtcbnRoaXNbel09aVt6XVtGXTt9aWYoZy50cmFja2luZyl7eD17fTtmb3IodmFyIEcgaW4gail7eFtHXT10aGlzW0ddO3RoaXNbR109altHXTt9fWlmKGcudHJhY2tpbmcpe0k9T2JqZWN0LmtleXModGhpcyk7fX12YXIgQj11LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihnLnByaXZhdGVQYXR0ZXJuKXtpZihnLnRyYWNraW5nKXt2YXIgSD1PYmplY3Qua2V5cyh0aGlzKTtcbmZvcih2YXIgRyBpbiBIKXtHPUhbR107aWYoZy5wcml2YXRlUGF0dGVybi50ZXN0KEcpKXt4W0ddPXRoaXNbR107altHXT10aGlzW0ddO319Zm9yKHZhciBHIGluIEkpe0c9SVtHXTt2YXIgQT1ILmluZGV4T2YoRyk8MCYmZy5wcml2YXRlUGF0dGVybi50ZXN0KEcpO2lmKEEpe2RlbGV0ZSBqW0ddO1xuZGVsZXRlIHRoaXNbR107fX1mb3IodmFyIEcgaW4gail7dmFyIHc9dGhpc1tnLmNhbGxlckRlcHRoS2V5XTtpZih4W0ddPT09dW5kZWZpbmVkfHxrPT13KXtkZWxldGUgdGhpc1tHXTt9ZWxzZXt0aGlzW0ddPXhbR107fX19Zm9yKHZhciBHIGluIHRoaXNbZy5tZXRob2RzS2V5XSl7aWYoRVtHXT09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbR107XG59ZWxzZXt0aGlzW0ddPUVbR107fX1pZih5PT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLm1ldGhvZHNLZXldO31lbHNle3RoaXNbZy5tZXRob2RzS2V5XT15O31pZihrPT10aGlzW2cuY2FsbGVyRGVwdGhLZXldKXtkZWxldGUgdGhpc1tnLmNhbGxlckRlcHRoS2V5XTtcbn19aWYoZy5wcml2YXRlTmFtZSl7aWYoRD09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5wcml2YXRlTmFtZV07fWVsc2V7dGhpc1tnLnByaXZhdGVOYW1lXT1EO319aWYodj09PXVuZGVmaW5lZCl7ZGVsZXRlIHRoaXNbZy5zdXBlck5hbWVdO31lbHNle3RoaXNbZy5zdXBlck5hbWVdPXY7XG59cmV0dXJuIEI7fTt9KShoLG1baF0pO3ZhciBsPWcucHJpdmF0ZVBhdHRlcm4mJmcucHJpdmF0ZVBhdHRlcm4udGVzdChoKTtpZihsKXtpW2hdPXt9O2lbaF1ba109bjt9ZWxzZXtvW2hdPW47fX1lbHNle3ZhciBsPWcudHJhY2tpbmcmJmcucHJpdmF0ZVBhdHRlcm4mJmcucHJpdmF0ZVBhdHRlcm4udGVzdChoKTtcbmlmKGwpe2pbaF09bVtoXTt9ZWxzZXtvW2hdPW1baF07fX19ZnVuY3Rpb24gcCgpe2lmKCFjJiZ0aGlzW2cuY3Rvck5hbWVdKXt0aGlzW2cuY3Rvck5hbWVdLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt9fXAucHJvdG90eXBlPW87cC5wcm90b3R5cGUuY29uc3RydWN0b3I9cDtcbmlmKGcuZXh0ZW5kYWJsZSE9PWZhbHNlKXtwLmV4dGVuZD1hcmd1bWVudHMuY2FsbGVlO31yZXR1cm4gcDt9O2Uubm9Db25mbGljdD1mdW5jdGlvbigpe3ZhciBnPWRbZl07ZFtmXT1iO3JldHVybiBnO307ZFtmXT1lO30pKG5zLG5zS2V5KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUmVxdWlyZXNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljTWFuYWdlciA9IHJlcXVpcmUoJy4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlcicpLFxyXG4gIEpDbGFzcyA9IHJlcXVpcmUoJ2pjbGFzcycpLFxyXG4gIEhhc2hBcnJheSA9IHJlcXVpcmUoJy4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2FtZU9iamVjdCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBHYW1lT2JqZWN0ID0gbW9kdWxlLmV4cG9ydHMgPSBKQ2xhc3MuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2V0UGFyZW50OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICB9LFxyXG4gIHNldENoaWxkcmVuOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRGVzZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMuX2NoaWxkcmVuID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBTZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcclxuICB9LFxyXG4gIHNldElkOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldElkOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZCB8fCAodGhpcy5faWQgPSB0aGlzLnJhbmRvbUlkKCkpO1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZC5zdGF0ZTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgfSxcclxuICBnZXRDaGlsZHJlbklkczogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgdmFyIHJldCA9IHt9O1xyXG5cclxuICAgIHRoaXMuZ2V0Q2hpbGRyZW4oKS5hbGwuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcmV0W2NoaWxkLmdldElkKCldID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfSxcclxuICBzZXRDaGlsZHJlblN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpZHMgPSB0aGlzLmdldENoaWxkcmVuSWRzKCk7XHJcblxyXG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTdGF0ZSkge1xyXG4gICAgICB2YXIgY2hpbGQgPSBzZWxmLmdldENoaWxkcmVuKCkuZ2V0KGNoaWxkU3RhdGUuaWQpO1xyXG4gICAgICBpZiAoIWNoaWxkKVxyXG4gICAgICAgIHNlbGYuZ2V0Q2hpbGRyZW4oKS5hZGQoc2VsZi5uZXdDaGlsZEZyb21TdGF0ZShjaGlsZFN0YXRlKSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBjaGlsZC5zZXRTdGF0ZShjaGlsZFN0YXRlKTtcclxuXHJcbiAgICAgIGRlbGV0ZSBpZHNbY2hpbGRTdGF0ZS5pZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5kZXN0cm95VW5mb3VuZENoaWxkcmVuT25TdGF0ZVNldClcclxuICAgICAgZm9yICh2YXIgaWQgaW4gaWRzKVxyXG4gICAgICAgIHRoaXMuZGVzdHJveUNoaWxkQnlJZChpZHNbaWRdKTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldENoaWxkcmVuKCkuYWxsLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkLmdldFN0YXRlKCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldERpcnR5OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRGVzZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMuX2RpcnR5ID0gdmFsdWU7XHJcbiAgICAodGhpcy5fZGlydHkgJiYgdGhpcy5nZXRQYXJlbnQoKSkgPyB0aGlzLmdldFBhcmVudCgpLnNldERpcnR5KHRydWUpIDogJyc7XHJcbiAgICAhdGhpcy5fZGlydHkgPyB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQuc2V0RGlydHkoZmFsc2UpO1xyXG4gICAgfSkgOiAnJztcclxuICB9LFxyXG4gIGdldERpcnR5OiBmdW5jdGlvbigpIHtcclxuICAgIC8vIFNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgcmV0dXJuIHRoaXMuX2RpcnR5O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHJhbmRvbUlkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9WQUxVRSkudG9TdHJpbmcoMTYpO1xyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQpIHtcclxuICAgIGlmICghcGFyZW50KVxyXG4gICAge1xyXG4gICAgICBjb25zb2xlLmxvZygnU2V0dGluZyB3b3JsZCBhbmQgcm9vdCB0bycsIHRoaXMpO1xyXG4gICAgICBHYW1lT2JqZWN0LnByb3RvdHlwZS53b3JsZCA9IEdhbWVPYmplY3QucHJvdG90eXBlLnJvb3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SWQoaWQpO1xyXG4gICAgdGhpcy50eXBlID0gJ0dhbWVPYmplY3QnO1xyXG4gICAgdGhpcy5idWlsZENoaWxkcmVuT2JqZWN0KCk7XHJcbiAgICB0aGlzLnNldFBhcmVudChwYXJlbnQpO1xyXG4gICAgdGhpcy5zZXREaXJ0eSh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuZGVzdHJveVVuZm91bmRDaGlsZHJlbk9uU3RhdGVTZXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlciA9IG5ldyBDaGFyYWN0ZXJpc3RpY01hbmFnZXIodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0ZWQ9IHRydWU7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZShlbGFwc2VkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYXBwbHlBbGwoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgIHZhciBjaGlsZCA9IG5ldyBHYW1lT2JqZWN0KCk7XHJcbiAgICBjaGlsZC5pbml0KHRoaXMsIGNoaWxkU3RhdGUuaWQpXHJcbiAgICBjaGlsZC5zdGF0ZSA9IGNoaWxkU3RhdGU7XHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfSxcclxuICBkZXN0cm95Q2hpbGRCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGRyZW4oKS5nZXQoaWQpO1xyXG4gICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLnJlbW92ZShjaGlsZCk7XHJcbiAgfSxcclxuICBidWlsZENoaWxkcmVuT2JqZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldENoaWxkcmVuKG5ldyBIYXNoQXJyYXkoWydfaWQnLCAndHlwZSddKSk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gIH0sXHJcbiAgdXBkYXRlU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICBpZiAodGhpcy5zcHJpdGUgJiYgdGhpcy5kZXN0cm95ZWQpXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgaWYgKCF0aGlzLnNwcml0ZSlcclxuICAgICAgICB0aGlzLmJ1aWxkU3ByaXRlKHBoYXNlcik7XHJcblxyXG4gICAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICAgICAgdGhpcy5zcHJpdGUudXBkYXRlV2l0aE1vZGVsKHRoaXMpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlUGhhc2VyOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZVBoYXNlcihwaGFzZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTcHJpdGUocGhhc2VyKTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcbn0pOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIExBVEVOQ1lfQU5BTFlaRVJfREVGQVVMVF9NQVggPSAxMDtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIExhdGVuY3lBbmFseXplcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBMYXRlbmN5QW5hbHl6ZXIgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmRlYnVnID0gZmFsc2U7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuTGF0ZW5jeUFuYWx5emVyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhY2s6IFtdLFxyXG4gIG1heFN0YWNrTGVuZ3RoOiBMQVRFTkNZX0FOQUxZWkVSX0RFRkFVTFRfTUFYLFxyXG4gIGxhc3RUZXN0VGltZTogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IGxhdGVuY3koKSB7XHJcbiAgICAvLyBSZXR1cm5zIGEgd2VpZ2h0ZWQgYXZlcmFnZSBsYXRlbmN5LlxyXG4gICAgLy8gSXRlbSBhdCBpeCAwIGhhcyB3ZWlnaHQgb2YgMSBhbmQgaXRlbSBhdCBpeCBsZW5ndGggaGFzIHdlaWdodCBvZiBsZW5ndGguXHJcbiAgICB2YXIgbGF0VG90ID0gMCxcclxuICAgICAgdG90ID0gMDtcclxuXHJcbiAgICB0aGlzLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKGxhdCwgaXgsIGFycikge1xyXG4gICAgICBsYXRUb3QgKz0gbGF0ICogKGl4KzEpO1xyXG4gICAgICB0b3QgKz0gKGl4KzEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHZhbCA9IHRvdCA/IGxhdFRvdCAvIHRvdCA6IDE7XHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMQVRFTkNZJywgdmFsKTtcclxuXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH0sXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFydFRlc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubGFzdFRlc3RUaW1lID0gdGhpcy5ub3c7XHJcbiAgfSxcclxuICBlbmRUZXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy5sYXN0VGVzdFRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgY29uc29sZS5sb2coJ0xBVEVOQ1knLCB0aGlzLmxhdGVuY3kpO1xyXG4gICAgdGhpcy5wdXNoKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgcHVzaDogZnVuY3Rpb24obGF0ZW5jeSkge1xyXG4gICAgdGhpcy5zdGFjay5wdXNoKGxhdGVuY3kpO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA+IHRoaXMubWF4U3RhY2tMZW5ndGgpXHJcbiAgICAgIHRoaXMuc3RhY2sudW5zaGlmdCgpO1xyXG4gIH0sXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc3RhY2sgPSBbXTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBMYXRlbmN5QW5hbHl6ZXI7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVVNFUl9BQ1RJT05TID0ge1xyXG4gIExFRlRfRE9XTjogMHgwMDAxLFxyXG4gIExFRlRfVVA6IDB4MDAwMixcclxuICBSSUdIVF9ET1dOOiAweDAwMTAsXHJcbiAgUklHSFRfVVA6IDB4MDAyMCxcclxuICBVUF9ET1dOOiAweDAxMDAsXHJcbiAgVVBfVVA6IDB4MDIwMCxcclxuICBET1dOX0RPV046IDB4MTAwMCxcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gVVNFUl9BQ1RJT05TO1xyXG59IGVsc2Uge1xyXG4gIHdpbmRvdy5VU0VSX0FDVElPTlMgPSBVU0VSX0FDVElPTlM7XHJcbn0iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBVc2VySW5wdXRQcm9jZXNzb3IoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVXNlcklucHV0UHJvY2Vzc29yID0gZnVuY3Rpb24oKSB7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuVXNlcklucHV0UHJvY2Vzc29yLnByb3RvdHlwZSA9IHtcclxuICB1cGRhdGU6IGZ1bmN0aW9uICh1c2VySW5wdXQsIGVsYXBzZWQsIHdvcmxkKSB7XHJcbiAgICBpZiAodXNlcklucHV0LmxlZnQpXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gLXdvcmxkLnBsYXllci5HTE9CQUxTLkJBTktfUkFURTtcclxuICAgIGVsc2UgaWYgKHVzZXJJbnB1dC5yaWdodClcclxuICAgICAgd29ybGQucGxheWVyLmJhbmsgPSB3b3JsZC5wbGF5ZXIuR0xPQkFMUy5CQU5LX1JBVEU7XHJcbiAgICBlbHNlXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gMDtcclxuXHJcbiAgICBpZiAodXNlcklucHV0LnVwKVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSB3b3JsZC5wbGF5ZXIuR0xPQkFMUy5BQ0NFTEVSQVRJT05fUkFURTtcclxuICAgIGVsc2UgaWYgKHVzZXJJbnB1dC5kb3duKVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSAtd29ybGQucGxheWVyLkdMT0JBTFMuREVDRUxFUkFUSU9OX1JBVEU7XHJcbiAgICBlbHNlIFxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSAwLjA7XHJcblxyXG4gICAgd29ybGQucGxheWVyLnRyaWdnZXJEb3duID0gdXNlcklucHV0LnRyaWdnZXI7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcklucHV0UHJvY2Vzc29yOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFVzZXJJbnB1dFN0YXRlKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVzZXJJbnB1dFN0YXRlID0gZnVuY3Rpb24oaW5wdXQsIHRpbWUpIHtcclxuICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgdGhpcy50aW1lID0gdGltZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5Vc2VySW5wdXRTdGF0ZS5wcm90b3R5cGUgPSB7XHJcbiAgaW5wdXQ6IHVuZGVmaW5lZCxcclxuICB0aW1lOiB1bmRlZmluZWRcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcklucHV0U3RhdGU7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljTWFuYWdlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIHRoaXMuY2hhcmFjdGVyaXN0aWNzID0gbmV3IEhhc2hBcnJheShbJ25hbWUnXSk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBjYWNoZToge30sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFkZDogZnVuY3Rpb24gKGNoYXJhY3RlcmlzdGljKSB7XHJcbiAgICB0aGlzLmNoYXJhY3RlcmlzdGljcy5hZGQoY2hhcmFjdGVyaXN0aWMpO1xyXG4gIH0sXHJcbiAgYXBwbHlBbGw6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmNhY2hlID0ge307XHJcblxyXG4gICAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoYXJhY3RlcmlzdGljKSB7XHJcbiAgICAgIGNoYXJhY3RlcmlzdGljLmFwcGx5VG8oc2VsZi5wYXJlbnQsIGVsYXBzZWQsIHNlbGYuY2FjaGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4oKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4ucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIGRlc3Ryb3kgPSB0YXJnZXQueCA8IDAgfHwgdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggfHwgdGFyZ2V0LnkgPCAwIHx8IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodDtcclxuICAgIGlmIChkZXN0cm95KVxyXG4gICAgICB0YXJnZXQuZGVzdHJveSgpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW47IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICBpZiAodHlwZW9mIHRhcmdldC52ZWxvY2l0eSA9PSAndW5kZWZpbmVkJylcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RhcmdldCB2ZWxvY2l0eSBpcyB1bmRlZmluZWQgZm9yICcsIHRhcmdldCk7XHJcbiAgICBcclxuICAgIHZhciB2ID0gdGFyZ2V0LnZlbG9jaXR5O1xyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZXInKSlcclxuICAgICAgdiA9IHRhcmdldC52ZWxvY2l0eSArICh0YXJnZXQuYWNjZWxlcmF0ZXIgKiBlbGFwc2VkKTtcclxuICAgIHRhcmdldC52ZWxvY2l0eSA9IHYgPiB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUFYID8gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01BWCA6ICh2IDwgdGhpcy5vcHRpb25zLlZFTE9DSVRZX01JTiA/IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NSU4gOiB2KTtcclxuXHJcbiAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KCdiYW5rJykpXHJcbiAgICAgIHRhcmdldC5hbmdsZSArPSB0YXJnZXQuYmFuayAqIGVsYXBzZWQ7XHJcblxyXG4gICAgdGFyZ2V0LnggKz0gTWF0aC5jb3ModGFyZ2V0LmFuZ2xlKSAqIHRhcmdldC52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcbiAgICB0YXJnZXQueSArPSBNYXRoLnNpbih0YXJnZXQuYW5nbGUpICogdGFyZ2V0LnZlbG9jaXR5ICogZWxhcHNlZDtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdGFyZ2V0LnggPSB0YXJnZXQueCA8IDAgPyB0aGlzLm9wdGlvbnMud2lkdGggOiB0YXJnZXQueDtcclxuICAgIHRhcmdldC54ID0gdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggPyB0YXJnZXQueCAlIHRoaXMub3B0aW9ucy53aWR0aCA6IHRhcmdldC54O1xyXG4gICAgdGFyZ2V0LnkgPSB0YXJnZXQueSA8IDAgPyB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGFyZ2V0Lnk7XHJcbiAgICB0YXJnZXQueSA9IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodCA/IHRhcmdldC55ICUgdGhpcy5vcHRpb25zLmhlaWdodCA6IHRhcmdldC55O1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nOyIsInZhciBCdWxsZXQgPSByZXF1aXJlKCcuLi9nYW1lT2JqZWN0cy9CdWxsZXQnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gIHRoaXMub3B0aW9ucy5maXJlUmF0ZSA9IG9wdGlvbnMuZmlyZVJhdGUgfHwgMTAwLjA7XHJcbiAgdGhpcy5vcHRpb25zLmZpcmVWZWxvY2l0eSA9IG9wdGlvbnMuZmlyZVZlbG9jaXR5IHx8IDcwMC4wO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGxhc3RCdWxsZXRUaW1lOiB1bmRlZmluZWQsXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBub3coKSB7XHJcbiAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBmaXJlOiBmdW5jdGlvbiAodGFyZ2V0LCB4LCB5LCBhbmdsZSwgdmVsb2NpdHkpXHJcbiAge1xyXG4gICAgaWYgKHRhcmdldC5hbW1vIDw9IDApXHJcbiAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgdmFyIGJ1bGxldCA9IG5ldyBCdWxsZXQodGFyZ2V0LCB1bmRlZmluZWQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSk7XHJcbiAgICB0YXJnZXQuZ2V0Q2hpbGRyZW4oKS5hZGQoYnVsbGV0KTtcclxuICAgIHRhcmdldC5hbW1vLS07XHJcbiAgICB0aGlzLmxhc3RCdWxsZXRUaW1lID0gdGhpcy5ub3c7XHJcbiAgfSxcclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgaWYgKCF0aGlzLmxhc3RCdWxsZXRUaW1lKVxyXG4gICAgICB0aGlzLmxhc3RCdWxsZXRUaW1lID0gdGhpcy5ub3c7XHJcblxyXG4gICAgaWYgKHRhcmdldC50cmlnZ2VyRG93bilcclxuICAgIHtcclxuICAgICAgdmFyIHQgPSAwO1xyXG4gICAgICBcclxuICAgICAgd2hpbGUgKHQgPCBlbGFwc2VkKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5maXJlKHRhcmdldCwgdGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQuYW5nbGUsIHRoaXMub3B0aW9ucy5maXJlVmVsb2NpdHkpO1xyXG5cclxuICAgICAgICB0ICs9IHRoaXMub3B0aW9ucy5maXJlUmF0ZSAvIDEwMDAuMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHM7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBCaXJkKClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG52YXIgQmlyZCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFZhcmlhYmxlc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgYW5nbGU6IDAsXG4gIGJhbms6IDAsXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBQcm9wZXJ0aWVzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIGJhbms6IHRoaXMuYmFuayxcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICBzY2FsZTogdGhpcy5zY2FsZVxuICAgIH07XG4gIH0sXG4gIHNldFN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLl9pZClcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcignVGhlIGJpcmRcXCdzIGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gdmFsdWUueDtcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcbiAgICB0aGlzLnNjYWxlID0gdmFsdWUuc2NhbGU7XG4gIH0sXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBNZXRob2RzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCkge1xuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcblxuICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndvcmxkLndpZHRoO1xuICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndvcmxkLmhlaWdodDtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgIHRoaXMuYmFuayA9IHRoaXMucmFuZG9taXplZEJhbmsoKTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gMjUgKyBNYXRoLnJhbmRvbSgpICogMTA7XG4gICAgdGhpcy5zY2FsZSA9IChNYXRoLnJhbmRvbSgpICogMC40KSArIDAuMTtcblxuICAgIHRoaXMuR0xPQkFMUyA9IHtcbiAgICAgIFZFTE9DSVRZX01BWDogQmlyZC52ZWxvY2l0eSxcbiAgICAgIFZFTE9DSVRZX01JTjogQmlyZC52ZWxvY2l0eSxcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TY3JlZW5XcmFwcGluZycpKSh0aGlzLndvcmxkKSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFwcGx5QWxsKGVsYXBzZWQpO1xuICAgIFxuICAgIC8vIFRPRE86IGVuY2Fwc3VsYXRlIGJpcmQgQUlcbiAgICBcbiAgICAvLyBiaXJkcyBoYXZlIGEgMS8yMDAgY2hhbmNlIG9mIGNoYW5naW5nIHRoZSBiYW5rIGV2ZXJ5IGZyYW1lXG4gICAgaWYoTWF0aC5yYW5kb20oKSA8IDAuMDA1KVxuICAgICAgdGhpcy5iYW5rID0gdGhpcy5yYW5kb21pemVkQmFuaygpO1xuICB9LFxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5iaXJkKDAsIDApO1xuICB9LFxuICByYW5kb21pemVkQmFuazogZnVuY3Rpb24oKSB7XG4gICAgLy8gdmFsdWUgaW4gdGhlIHJhbmdlIFstMS4wLCAxLjBdIFxuICAgIHZhciBiYW5rRmFjdG9yID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMi4wO1xuICAgIC8vIHRoZSBtYXhpbXVtIGJhbmsgYW5nbGUgXG4gICAgdmFyIGJhbmtNYWduaXR1ZGUgPSBNYXRoLlBJIC8gMi4wO1xuICAgIC8vIHNjYWxlIHRoZSBtYWduaXR1ZGUgYnkgdGhlIHJhbmRvbWl6ZWQgZmFjdG9yXG4gICAgcmV0dXJuIGJhbmtGYWN0b3IgKiBiYW5rTWFnbml0dWRlOyBcbiAgfVxufSk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IEJpcmQ7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCdWxsZXQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQnVsbGV0ID0gR2FtZU9iamVjdC5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHg6IHRoaXMueCxcclxuICAgICAgeTogdGhpcy55LFxyXG4gICAgICBhbmdsZTogdGhpcy5hbmdsZSxcclxuICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHlcclxuICAgIH07XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5pZCAhPSB0aGlzLmdldElkKCkpXHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCdUaGUgYnVsbGV0IGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ID0gdmFsdWUueDtcclxuICAgIHRoaXMueSA9IHZhbHVlLnk7XHJcbiAgICB0aGlzLmFuZ2xlID0gdmFsdWUuYW5nbGU7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSkge1xyXG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xyXG5cclxuICAgIHRoaXMuR0xPQkFMUyA9IHtcclxuICAgICAgVkVMT0NJVFlfTUFYOiAxMDAwMDAsXHJcbiAgICAgIFZFTE9DSVRZX01JTjogMFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIHRoaXMuc3ByaXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5leGlzdHMgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdidWxsZXQnO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIgPSBuZXcgQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyKHRoaXMpO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcycpKSh0aGlzLkdMT0JBTFMpKTtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4nKSkodGhpcy5wYXJlbnQud29ybGQpKTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYXBwbHlBbGwoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBwaGFzZXIuYWRkLmJ1bGxldCgwLCAwKTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZXhpc3RzID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBCdWxsZXQ7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFJlcXVpcmVtZW50c1xuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpLFxuICBCdWxsZXQgPSByZXF1aXJlKCcuL0J1bGxldCcpLFxuICBwbGF5ZXJDb3VudCA9IDA7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGF5ZXIoKVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBQbGF5ZXIgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBWYXJpYWJsZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIHg6IDQwMCxcbiAgeTogNDAwLFxuICBhbmdsZTogMCxcbiAgdmVsb2NpdHk6IDYsXG4gIGJhbms6IDAsXG4gIGFjY2VsZXJhdGVyOiAwLFxuICB0cmlnZ2VyRG93bjogZmFsc2UsXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBQcm9wZXJ0aWVzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZClcbiAgICAgIHJldHVybiB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkLFxuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYWNjZWxlcmF0ZXI6IHRoaXMuYWNjZWxlcmF0ZXIsXG4gICAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgICBhY2NlbDogdGhpcy5hY2NlbCxcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aCxcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgYW1tbzogdGhpcy5hbW1vLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW5TdGF0ZSgpXG4gICAgfTtcbiAgfSxcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcignVGhlIHBsYW5lIGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XG4gICAgfVxuXG4gICAgdGhpcy51aWQgPSB2YWx1ZS51aWQ7XG4gICAgdGhpcy54ID0gdmFsdWUueDtcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcbiAgICB0aGlzLmhlYWx0aCA9IHZhbHVlLmhlYWx0aDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gdmFsdWUuYWNjZWxlcmF0ZXI7XG4gICAgdGhpcy5hbW1vID0gdmFsdWUuYW1tbztcblxuICAgIHRoaXMuc2V0Q2hpbGRyZW5TdGF0ZSh2YWx1ZS5jaGlsZHJlbik7XG4gIH0sXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBNZXRob2RzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBpbml0OiBmdW5jdGlvbihwYXJlbnQsIGlkLCB1aWQpIHtcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XG5cbiAgICB0aGlzLnVpZCA9IHVpZDtcblxuICAgIHRoaXMudHlwZSA9ICdwbGF5ZXInO1xuXG4gICAgdGhpcy5HTE9CQUxTID0ge1xuICAgICAgVkVMT0NJVFlfTUFYOiA2MDAsXG4gICAgICBWRUxPQ0lUWV9NSU46IDkwLFxuICAgICAgQkFOS19SQVRFOiBNYXRoLlBJIC8gMixcbiAgICAgIEFDQ0VMRVJBVElPTl9SQVRFOiAyNTAsXG4gICAgICBERUNFTEVSQVRJT05fUkFURTogMTAwXG4gICAgfTtcblxuICAgIHRoaXMuYnVsbGV0UHJvcHMgPSB7XG4gICAgICBmaXJlUmF0ZTogMTAwLFxuICAgICAgZmlyZVZlbG9jaXR5OiA1MDBcbiAgICB9O1xuXG4gICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgdGhpcy5hbW1vID0gMTAwMDtcblxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcnKSkodGhpcy53b3JsZCkpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMnKSkodGhpcy5idWxsZXRQcm9wcykpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgdGhpcy5idWxsZXRQcm9wcy5maXJlVmVsb2NpdHkgPSA1MDAuMCArIHRoaXMudmVsb2NpdHk7XG5cbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQucGxhbmUoMCwgMCk7XG4gICAgdGhpcy5zcHJpdGUuZGlzcGxheVN0YXR1c1Jpbmcod2luZG93LmNsaWVudC5wbGF5ZXIudWlkID09PSB0aGlzLnVpZCk7XG5cbiAgICB3aW5kb3cuY2xpZW50LmdHYW1lT2JqZWN0cy5hZGQodGhpcy5zcHJpdGUpO1xuICB9LFxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcbiAgICBidWxsZXQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFkZChidWxsZXQpO1xuICAgIHJldHVybiBidWxsZXQ7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc3ByaXRlKSB7XG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xuICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xuICAgIH1cbiAgfVxufSk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKSxcclxuICBCdWxsZXQgPSByZXF1aXJlKCcuL0J1bGxldCcpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQmlyZCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBXb3JsZCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKVxyXG4gICAgICBpZiAoa2V5ICE9ICdjaGlsZHJlbicpXHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWVba2V5XTtcclxuXHJcbiAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJykpXHJcbiAgICAgIHRoaXMuc2V0Q2hpbGRyZW5TdGF0ZSh2YWx1ZS5jaGlsZHJlbik7XHJcbiAgfSxcclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRpbGVXaWR0aDogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgIHRpbGVIZWlnaHQ6IHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgdGlsZXM6IHRoaXMudGlsZXMsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW5TdGF0ZSgpXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdXb3JsZCBpbml0IScpO1xyXG4gICAgdGhpcy5fc3VwZXIobnVsbCwgJ3Jvb3QnKTtcclxuICB9LFxyXG4gIGJ1aWxkQ2hpbGRyZW5PYmplY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0Q2hpbGRyZW4obmV3IEhhc2hBcnJheShbJ19pZCcsICd1aWQnLCAndHlwZSddKSk7XHJcbiAgfSxcclxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgIHZhciBjaGlsZDtcclxuXHJcbiAgICBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdidWxsZXQnKVxyXG4gICAgICBjaGlsZCA9IG5ldyBCdWxsZXQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBpZiAoY2hpbGRTdGF0ZS50eXBlID09ICdwbGF5ZXInKVxyXG4gICAgICBjaGlsZCA9IG5ldyBQbGF5ZXIodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcblxyXG4gICAgY2hpbGQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBXb3JsZDsiLCJ2YXIgSGFzaEFycmF5ID0gZnVuY3Rpb24oa2V5RmllbGRzLCBjYWxsYmFjaykge1xuICB0aGlzLl9tYXAgPSB7fTtcbiAgdGhpcy5fbGlzdCA9IFtdO1xuICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgdGhpcy5rZXlGaWVsZHMgPSBrZXlGaWVsZHM7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdhbGwnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfSk7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdtYXAnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9KTtcblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygnY29uc3RydWN0Jyk7XG4gIH1cbn07XG5cbkhhc2hBcnJheS5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAga2V5ID0gdGhpcy5rZXlGaWVsZHNba2V5XTtcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLmZpbmQob2JqLCBrZXkpO1xuICAgICAgICBpZiAoaW5zdCkge1xuICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0uaW5kZXhPZihvYmopICE9IC0xKSB7XG4gICAgICAgICAgICAgIC8vIENhbm5vdCBhZGQgdGhlIHNhbWUgaXRlbSB0d2ljZVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tYXBbaW5zdF0ucHVzaChvYmopO1xuICAgICAgICAgIH0gZWxzZSB0aGlzLl9tYXBbaW5zdF0gPSBbb2JqXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0LnB1c2gob2JqKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ2FkZCcsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgIH1cbiAgfSxcbiAgYWRkTWFwOiBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHRoaXMuX21hcFtrZXldID0gb2JqO1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdhZGRNYXAnLCB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBvYmo6IG9ialxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiAoISh0aGlzLl9tYXBba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB8fCB0aGlzLl9tYXBba2V5XS5sZW5ndGggIT0gMSkgPyB0aGlzLl9tYXBba2V5XSA6IHRoaXMuX21hcFtrZXldWzBdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXAuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgfSxcbiAgaGFzTXVsdGlwbGU6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBba2V5XSBpbnN0YW5jZW9mIEFycmF5O1xuICB9LFxuICByZW1vdmVCeUtleTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuX21hcFtrZXldLmNvbmNhdCgpO1xuICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgIHJlbW92ZWQgPSByZW1vdmVkLmNvbmNhdChpdGVtcyk7XG4gICAgICAgIGZvciAodmFyIGogaW4gaXRlbXMpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2pdO1xuICAgICAgICAgIGZvciAodmFyIGl4IGluIHRoaXMua2V5RmllbGRzKSB7XG4gICAgICAgICAgICB2YXIga2V5MiA9IHRoaXMuZmluZChpdGVtLCB0aGlzLmtleUZpZWxkc1tpeF0pO1xuICAgICAgICAgICAgaWYgKGtleTIgJiYgdGhpcy5fbWFwW2tleTJdKSB7XG4gICAgICAgICAgICAgIHZhciBpeCA9IHRoaXMuX21hcFtrZXkyXS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgICBpZiAoaXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBba2V5Ml0uc3BsaWNlKGl4LCAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9tYXBba2V5Ml0ubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXkyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9saXN0LnNwbGljZSh0aGlzLl9saXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fbWFwW2tleV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZUJ5S2V5JywgcmVtb3ZlZCk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGl4IGluIHRoaXMua2V5RmllbGRzKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmZpbmQoaXRlbSwgdGhpcy5rZXlGaWVsZHNbaXhdKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIHZhciBpeCA9IHRoaXMuX21hcFtrZXldLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgaWYgKGl4ICE9IC0xKVxuICAgICAgICAgICAgdGhpcy5fbWFwW2tleV0uc3BsaWNlKGl4LCAxKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9tYXBba2V5XS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0LnNwbGljZSh0aGlzLl9saXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmUnLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlQWxsOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2xkID0gdGhpcy5fbGlzdC5jb25jYXQoKTtcbiAgICB0aGlzLl9tYXAgPSB7fTtcbiAgICB0aGlzLl9saXN0ID0gW107XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlJywgb2xkKTtcbiAgICB9XG4gIH0sXG4gIGZpbmQ6IGZ1bmN0aW9uKG9iaiwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvYmpbcGF0aF07XG4gICAgfVxuXG4gICAgdmFyIGR1cCA9IHBhdGguY29uY2F0KCk7XG4gICAgLy8gZWxzZSBhc3N1bWUgYXJyYXkuXG4gICAgd2hpbGUgKGR1cC5sZW5ndGggJiYgb2JqKSB7XG4gICAgICBvYmogPSBvYmpbZHVwLnNoaWZ0KCldO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGNsb25lOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciBuID0gbmV3IEhhc2hBcnJheSh0aGlzLmtleUZpZWxkcy5jb25jYXQoKSwgY2FsbGJhY2sgPyBjYWxsYmFjayA6IHRoaXMuY2FsbGJhY2spO1xuICAgIG4uYWRkLmFwcGx5KG4sIHRoaXMuYWxsLmNvbmNhdCgpKTtcbiAgICByZXR1cm4gbjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoQXJyYXk7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQmlyZFNwcml0ZSgpIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBCaXJkU3ByaXRlKGdhbWUsIHgsIHkpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgXHJcbiAgLy8gYWRkIHRoZSBiaXJkU3ByaXRlIFxyXG4gIHRoaXMuYmlyZFNwcml0ZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2JpcmQnKTtcclxuICAgXHJcbiAgLy8geW91IGNhbid0IHNldCB0aGUgYW5jaG9yIHBvaW50IG9mIGEgZ3JvdXAsIHNvIGZvciB4ICYgeSB0byBjb3JyZXNwb25kXHJcbiAgLy8gdG8gdGhlIEJpcmRTcHJpdGUncyBjZW50ZXIgd2UgaGF2ZSB0byBvZmZzZXQgaXQgbWFudWFsbHlcclxuICB0aGlzLmJpcmRTcHJpdGUueCA9IC10aGlzLmJpcmRTcHJpdGUud2lkdGggIC8gMi4wO1xyXG4gIHRoaXMuYmlyZFNwcml0ZS55ID0gLXRoaXMuYmlyZFNwcml0ZS5oZWlnaHQgLyAyLjA7XHJcbn07XHJcblxyXG5CaXJkU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcbkJpcmRTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmlyZFNwcml0ZTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFB1YmxpYyBNZXRob2RzIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQmlyZFNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbiAgdGhpcy5hbmdsZSA9IG1vZGVsLmFuZ2xlICogNTcuMjk1Nzc5NTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEZhY3RvcnkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLmJpcmQgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgQmlyZFNwcml0ZSh0aGlzLmdhbWUsIHgsIHkpKTtcclxufTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCdWxsZXRTcHJpdGUoKSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZnVuY3Rpb24gQnVsbGV0U3ByaXRlKGdhbWUsIHgsIHkpIHtcclxuICBQaGFzZXIuR3JvdXAuY2FsbCh0aGlzLCBnYW1lKTtcclxuIFxyXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcclxuICB0aGlzLnggPSB4O1xyXG4gIHRoaXMueSA9IHk7XHJcbiAgXHJcbiAgLy8gYWRkIHRoZSBCdWxsZXRTcHJpdGUgXHJcbiAgdGhpcy5CdWxsZXRTcHJpdGUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdidWxsZXQnKTtcclxufTtcclxuXHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBoYXNlci5Hcm91cC5wcm90b3R5cGUpO1xyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnVsbGV0U3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5CdWxsZXRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XHJcbiAgdGhpcy54ID0gbW9kZWwueDtcclxuICB0aGlzLnkgPSBtb2RlbC55O1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuYnVsbGV0ID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcclxuICBpZih0eXBlb2YgZ3JvdXAgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gIFxyXG4gIHJldHVybiBncm91cC5hZGQobmV3IEJ1bGxldFNwcml0ZSh0aGlzLmdhbWUsIHgsIHkpKTtcclxufTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogUGxhbmUoKSBcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5mdW5jdGlvbiBQbGFuZShnYW1lLCB4LCB5KSB7XG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xuIFxuICAvLyBjb25maWd1cmUgZ3JvdXAgXG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG4gIFxuICAvLyBhZGQgdGhlIGFpcnBsYW5lIFxuICB0aGlzLmFpcnBsYW5lICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYWlycGxhbmUnKTtcbiAgIFxuICAvLyB5b3UgY2FuJ3Qgc2V0IHRoZSBhbmNob3IgcG9pbnQgb2YgYSBncm91cCwgc28gZm9yIHggJiB5IHRvIGNvcnJlc3BvbmRcbiAgLy8gdG8gdGhlIHBsYW5lJ3MgY2VudGVyIHdlIGhhdmUgdG8gb2Zmc2V0IGl0IG1hbnVhbGx5XG4gIHRoaXMuYWlycGxhbmUueCA9IC10aGlzLmFpcnBsYW5lLndpZHRoICAvIDIuMDtcbiAgdGhpcy5haXJwbGFuZS55ID0gLXRoaXMuYWlycGxhbmUuaGVpZ2h0IC8gMi4wO1xuXG4gIC8vIGFkZCB0aGUgc3RhdHVzIHJpbmcgXG4gIHRoaXMuc3RhdHVzUmluZyA9IGdhbWUuYWRkLmdyYXBoaWNzKDAuMCwgMC4wLCB0aGlzKTtcbn07XG5cblBsYW5lLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XG5QbGFuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQbGFuZTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFB1YmxpYyBNZXRob2RzIFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuUGxhbmUucHJvdG90eXBlLmRpc3BsYXlTdGF0dXNSaW5nID0gZnVuY3Rpb24oZGlzcGxheXNTdGF0dXNSaW5nKSB7XG4gIHRoaXMuc3RhdHVzUmluZy5hbHBoYSA9IGRpc3BsYXlzU3RhdHVzUmluZyA/IDAuNSA6IDAuMDtcblxuICBpZihkaXNwbGF5c1N0YXR1c1JpbmcpIHtcbiAgICB0aGlzLnN0YXR1c1JpbmcubGluZVN0eWxlKDYuMCwgMHgzYmViNzIpO1xuICAgIHRoaXMuc3RhdHVzUmluZy5kcmF3Q2lyY2xlKDAsIDAsIDMwLjApOyBcbiAgfVxufTtcblxuUGxhbmUucHJvdG90eXBlLnVwZGF0ZVdpdGhNb2RlbCA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHRoaXMueCA9IG1vZGVsLng7XG4gIHRoaXMueSA9IG1vZGVsLnk7XG4gIHRoaXMuYW5nbGUgPSBtb2RlbC5hbmdsZSAqIDU3LjI5NTc3OTU7XG5cbiAgaWYgKG1vZGVsLmJhbmsgPCAwKVxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAyO1xuICBlbHNlIGlmIChtb2RlbC5iYW5rID4gMClcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMTtcbiAgZWxzZSBcbiAgICB0aGlzLmFpcnBsYW5lLmZyYW1lID0gMDtcbn07XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBGYWN0b3J5IFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5wbGFuZSA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgZ3JvdXAgPSB0aGlzLndvcmxkO1xuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQbGFuZSh0aGlzLmdhbWUsIHgsIHkpKTtcbn07IiwidmFyIFVzZXJJbnB1dFN0YXRlID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL1VzZXJTdGF0ZScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU0NTdGF0ZU1hbmFnZXIoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU0NTdGF0ZU1hbmFnZXIgPSBmdW5jdGlvbihmcHMsIGdhbWVJbnRlcmZhY2UpIHtcclxuICB0aGlzLmdhbWVJbnRlcmZhY2UgPSBnYW1lSW50ZXJmYWNlO1xyXG4gIHRoaXMuZnJhbWVUaW1lID0gMTAwMC4wIC8gZnBzO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblNDU3RhdGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgdXNlcklucHV0U3RhdGVzOiBbXSxcclxuICBsYXN0VXBkYXRlVGltZUVuZDogdW5kZWZpbmVkLFxyXG4gIGVzdFNlcnZlclRpbWU6IHVuZGVmaW5lZCxcclxuICBsYXN0U2VydmVyU3RhdGU6IHVuZGVmaW5lZCxcclxuICBpbnRlcnZhbElkOiB1bmRlZmluZWQsXHJcbiAgbGF0ZW5jeTogMCxcclxuICBsYXN0U2VuZFRvU2VydmVyVGltZTogMTAwMC4wIC8gMzAuMCxcclxuICAvKipcclxuICAgKiBTZW5kIGFuIHVwZGF0ZSB0byB0aGUgc2VydmVyIGV2ZXJ5IHRoaXMgc28gb2Z0ZW4uXHJcbiAgICovXHJcbiAgc2VydmVyVXBkYXRlSW50ZXJ2YWw6IDEwLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmludGVydmFsSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLmZyYW1lVGltZSk7XHJcbiAgfSxcclxuICBwYXVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZClcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gIH0sXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKVxyXG4gIHtcclxuICAgIGlmICh0aGlzLm5ld1NlcnZlclN0YXRlICYmICF0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSlcclxuICAgICAgdGhpcy5sYXN0U2VydmVyU3RhdGUgPSB0aGlzLm5ld1NlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIEFzIGxvbmcgYXMgdGhlIHNlcnZlciBoYXMgbmV2ZXIgc2VudCB1cyBhIHN0YXRlLCB3ZSBkbyBub3RoaW5nLlxyXG4gICAgaWYgKCF0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSB8fCB0aGlzLmxhdGVuY3kgPT0gMClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgLy8gVGltZSB0aGlzIHVwZGF0ZSBzdGFydGVkXHJcbiAgICAgIHVwZGF0ZVN0YXJ0ID0gdGhpcy5ub3csXHJcbiAgICAgIC8vIFRpbWUgc2luY2Ugb3VyIGxhc3QgdXBkYXRlIGVuZGVkXHJcbiAgICAgIGVsYXBzZWQgPSB1cGRhdGVTdGFydCAtIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQsXHJcbiAgICAgIC8vIFRoZSBzdGF0ZSBvZiBhbGwgdXNlciBpbnB1dFxyXG4gICAgICB1c2VySW5wdXQgPSB0aGlzLmdhbWVJbnRlcmZhY2UudXNlcklucHV0O1xyXG5cclxuICAgIHRoaXMubGFzdFVwZGF0ZVRpbWVFbmQgPSB0aGlzLm5vdztcclxuXHJcbiAgICAvLyBTZXQgbGFzdCBzZXJ2ZXIgc3RhdGUgdG8gZWl0aGVyIHRoZSB1cGRhdGVcclxuICAgIHRoaXMubGFzdFNlcnZlclN0YXRlID0gdGhpcy5uZXdTZXJ2ZXJTdGF0ZSB8fCB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZ2FtZSBpbnRlcmZhY2UgdG8gb2xkIHNlcnZlciBzdGF0ZVxyXG4gICAgdGhpcy5nYW1lSW50ZXJmYWNlLnN0YXRlID0gdGhpcy5sYXN0U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gRXN0aW1hdGUgdGhlIGN1cnJlbnQgc2VydmVyIHRpbWUgYXQgdGhpcyBleGFjdCBwb2ludCAodGhlIHNlcnZlciB3aWxsIGJlIGJlaGluZCB1cyBieSBhIHBlcmlvZCBvZiB0aW1lKVxyXG4gICAgdGhpcy5lc3RTZXJ2ZXJUaW1lID0gTWF0aC5yb3VuZCh0aGlzLm5ld1NlcnZlclN0YXRlID8gdGhpcy5uZXdTZXJ2ZXJTdGF0ZS50aW1lICsgKHRoaXMubGF0ZW5jeSAvIDIuMCkgOiB0aGlzLmVzdFNlcnZlclRpbWUgKyBlbGFwc2VkKTtcclxuXHJcbiAgICAvLyBFc3RhYmxpc2ggb3VyIHNpbXVsYXRpb24gc3RhcnRpbmcgdGltZS5cclxuICAgIHZhciB0ID0gdGhpcy5sYXN0U2VydmVyU3RhdGUudGltZSxcclxuICAgICAgc2ltRWxhcHNlZCA9IDAuMDtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3V0IGFueSBvbGQgdXNlciBmcmFtZSBzdGF0ZXNcclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzID0gdGhpcy51c2VySW5wdXRTdGF0ZXMuZmlsdGVyKGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgICByZXR1cm4gdXNlcklucHV0U3RhdGUudGltZSA+IHNlbGYubGFzdFNlcnZlclN0YXRlLnRpbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSBhbGwgZnJhbWVzIHRoZSBzZXJ2ZXIgaGFzIG5vdCB5ZXQgcHJvY2Vzc2VkLlxyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAodXNlcklucHV0U3RhdGUpIHtcclxuICAgICAgc2ltRWxhcHNlZCA9IHVzZXJJbnB1dFN0YXRlLnRpbWUgLSB0O1xyXG4gICAgICBzZWxmLmdhbWVJbnRlcmZhY2Uuc2ltdWxhdGVVcGRhdGUodXNlcklucHV0U3RhdGUuaW5wdXQsIHNpbUVsYXBzZWQpO1xyXG4gICAgICB0ID0gdXNlcklucHV0U3RhdGUudGltZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNhdmUgb3VyIGN1cnJlbnQgc3RhdGVcclxuICAgIHZhciBuZXdVc2VySW5wdXRTdGF0ZSA9IG5ldyBVc2VySW5wdXRTdGF0ZSh1c2VySW5wdXQsIHRoaXMuZXN0U2VydmVyVGltZSk7XHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcy5wdXNoKG5ld1VzZXJJbnB1dFN0YXRlKTtcclxuXHJcbiAgICAvLyBGaW5pc2ggc2ltbHVhdGluZyB0aGUgcmVtYWluaW5nIG1pbGxpc2Vjb25kcyBiYXNlZCBvbiB0aGUgY3VycmVudCB1c2VyIGlucHV0LlxyXG4gICAgdGhpcy5nYW1lSW50ZXJmYWNlLnNpbXVsYXRlVXBkYXRlKG5ld1VzZXJJbnB1dFN0YXRlLmlucHV0LCB0aGlzLmVzdFNlcnZlclRpbWUgLSB0KTtcclxuXHJcbiAgICBpZiAodGhpcy5lc3RTZXJ2ZXJUaW1lIC0gdGhpcy5sYXN0U2VuZFRvU2VydmVyVGltZSA+IHRoaXMuc2VydmVyVXBkYXRlSW50ZXJ2YWwpXHJcbiAgICB7XHJcbiAgICAgIC8vIFNlbmQgb3VyIHN0YXRlIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgdGhpcy5nYW1lSW50ZXJmYWNlLnVwZGF0ZVNlcnZlcihuZXdVc2VySW5wdXRTdGF0ZSk7XHJcblxyXG4gICAgICB0aGlzLmxhc3RTZW5kVG9TZXJ2ZXJUaW1lID0gdGhpcy5lc3RTZXJ2ZXJUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGl0LCBzbyB0aHJvdyBpdCBhd2F5LlxyXG4gICAgdGhpcy5uZXdTZXJ2ZXJTdGF0ZSA9IHVuZGVmaW5lZDtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgaW50ZXJ2YWxIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU0NTdGF0ZU1hbmFnZXI7IiwidmFyXHJcbiAgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9HYW1lT2JqZWN0JyksXHJcbiAgV29ybGQgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvV29ybGQnKSxcclxuICBQbGF5ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyJyksXHJcbiAgTGF0ZW5jeUFuYWx5emVyID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL0xhdGVuY3lBbmFseXplcicpLFxyXG4gIFNDU3RhdGVNYW5hZ2VyID0gcmVxdWlyZSgnLi9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXInKSxcclxuICBVc2VySW5wdXRQcm9jZXNzb3IgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvVXNlcklucHV0UHJvY2Vzc29yJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL2xpYi9IYXNoQXJyYXknKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEZQUyA9IDYwLFxyXG4gIFNFUlZFUl9USU1FT1VUX01TID0gMTAwMDAsXHJcbiAgUExBTkVfR0xPQkFMUyA9IFBsYXllci5wcm90b3R5cGUuR0xPQkFMUztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFNreUR1ZWxDbGllbnQoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgU2t5RHVlbENsaWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMubGF0ZW5jeUFuYWx5emVyID0gbmV3IExhdGVuY3lBbmFseXplcigpO1xyXG4gIHRoaXMuc2NTdGF0ZU1hbmFnZXIgPSBuZXcgU0NTdGF0ZU1hbmFnZXIoNjAsIHRoaXMpO1xyXG4gIHRoaXMudXNlcklucHV0UHJvY2Vzc29yID0gbmV3IFVzZXJJbnB1dFByb2Nlc3NvcigpO1xyXG5cclxuICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuU2t5RHVlbENsaWVudC5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHN0YXJ0ZWQ6IGZhbHNlLFxyXG4gIGlucHV0OiB7fSxcclxuICBwbGF5ZXI6IHVuZGVmaW5lZCxcclxuICBlcnJvclRleHQ6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGdldCBzdGF0ZSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIHNldCBzdGF0ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy53b3JsZC5zZXRTdGF0ZSh2YWx1ZSk7XHJcbiAgfSxcclxuICBnZXQgdXNlcklucHV0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXA6IHRoaXMuaW5wdXQudXAuaXNEb3duLFxyXG4gICAgICBkb3duOiB0aGlzLmlucHV0LmRvd24uaXNEb3duLFxyXG4gICAgICBsZWZ0OiB0aGlzLmlucHV0LmxlZnQuaXNEb3duLFxyXG4gICAgICByaWdodDogdGhpcy5pbnB1dC5yaWdodC5pc0Rvd24sXHJcbiAgICAgIHRyaWdnZXI6IHRoaXMuaW5wdXQudHJpZ2dlci5pc0Rvd25cclxuICAgIH07XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGxhdGVuY3lDaGVjazogZnVuY3Rpb24gKGNvdW50LCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICBpID0gMDtcclxuICAgICAgY291bnQgPSBjb3VudCB8fCAxMDtcclxuXHJcbiAgICBwaW5nKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGluZygpIHtcclxuICAgICAgc2VsZi5sYXRlbmN5QW5hbHl6ZXIuc3RhcnRUZXN0KCk7XHJcbiAgICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnBpbmcnLCBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBza3lkdWVsX3NreWR1ZWxIYW5kbGVyX3BpbmdIYW5kbGVyKCkge1xyXG4gICAgICBzZWxmLmxhdGVuY3lBbmFseXplci5lbmRUZXN0KCk7XHJcbiAgICAgICgrK2kgPCBjb3VudCkgPyBwaW5nKCkgOiBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnQ6IGZ1bmN0aW9uIChyaWQpIHtcclxuICAgIHRoaXMucmlkID0gcmlkO1xyXG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnBsYXllcnMgPSBuZXcgSGFzaEFycmF5KFsndWlkJywgJ2lkJ10pO1xyXG5cclxuICAgIHRoaXMubGF0ZW5jeUNoZWNrKDEwLCB0aGlzLnN0YXJ0U2VydmVyQ29ubmVjdGlvbi5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIHN0b3A6IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgIHRoaXMuZXJyb3JUZXh0ID0gcmVhc29uO1xyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5wYXVzZSgpO1xyXG4gIH0sXHJcbiAgc3RhcnRTZXJ2ZXJDb25uZWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLmxhdGVuY3kgPSB0aGlzLmxhdGVuY3lBbmFseXplci5sYXRlbmN5O1xyXG4gICAgcG9tZWxvLnJlcXVlc3QoJ3NreWR1ZWwuc2t5ZHVlbEhhbmRsZXIuc3RhcnQnLCB7XHJcbiAgICAgIHJpZDogdGhpcy5yaWRcclxuICAgIH0sIHRoaXMuc2VydmVyQ29ubmVjdGlvbl9zdGFydGVkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIC8vU0NTdGF0ZU1hbmFnZXIgSW50ZXJmYWNlXHJcbiAgc2ltdWxhdGVVcGRhdGU6IGZ1bmN0aW9uICh1c2VySW5wdXQsIGVsYXBzZWQpIHtcclxuICAgIGVsYXBzZWQgPSAgZWxhcHNlZCAvIDEwMDAuMDtcclxuXHJcbiAgICBpZiAoZWxhcHNlZCA+IFNFUlZFUl9USU1FT1VUX01TKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnN0b3AoJ1NlcnZlciBkaXNjb25uZWN0ZWQnKTsgICAgICBcclxuICAgIH1cclxuICAgIGlmIChlbGFwc2VkID4gMC4yKVxyXG4gICAgICB0aHJvdyBFcnJvcignRWxhcHNlZCBpcyB3YXl5eXkgdG9vIGhpZ2ggbWFuLiBEaWQgc2VydmVyIGRpc2Nvbm5lY3Q/Jyk7XHJcblxyXG4gICAgdGhpcy51c2VySW5wdXRQcm9jZXNzb3IudXBkYXRlKHVzZXJJbnB1dCwgZWxhcHNlZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy53b3JsZC51cGRhdGUoZWxhcHNlZCk7XHJcbiAgfSxcclxuICAvL1NDU3RhdGVNYW5hZ2VyIEludGVyZmFjZVxyXG4gIHVwZGF0ZVNlcnZlcjogZnVuY3Rpb24gKHVzZXJJbnB1dFN0YXRlKSB7XHJcbiAgICB0aGlzLmxhdGVuY3lBbmFseXplci5zdGFydFRlc3QoKTtcclxuICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnVzZXJJbnB1dCcsIHRoaXMudXNlcklucHV0LCB0aGlzLnNvY2tldF91cGRhdGVTZXJ2ZXJSZXNwb25zZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBzZXR1cFN0YXJ0U3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbCB3b3JsZCBzdGF0ZScsIHN0YXRlLndvcmxkKTtcclxuXHJcbiAgICB0aGlzLndvcmxkLnNldFN0YXRlKHN0YXRlLndvcmxkKTtcclxuXHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMud29ybGQuZ2V0Q2hpbGRyZW4oKS5nZXQodGhpcy51aWQpO1xyXG5cclxuICAgIGlmICghdGhpcy5wbGF5ZXIpXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nIChzdGF0ZSk7XHJcbiAgICAgIHRocm93IEVycm9yKCdQbGF5ZXIgY291bGQgbm90IGJlIGZvdW5kIGluIGluY29taW5nIHN0YXRlIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubmV3U2VydmVyU3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBsYXkoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogRXZlbnRzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzZXJ2ZXJDb25uZWN0aW9uX3N0YXJ0ZWRIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdGhpcy51aWQgPSBkYXRhLnVpZDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnU0VSVkVSIENPTk5FQ1RJT04gc3RhcnRlZCcsIGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coJ1dBSVRJTkcgZm9yIHNlcnZlciBzdGF0ZScpO1xyXG5cclxuICAgIHBvbWVsby5vbignc2VydmVyU3RhdGUnLCB0aGlzLnNvY2tldF9zZXJ2ZXJTdGF0ZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5wbGF5KCk7XHJcbiAgfSxcclxuICBzb2NrZXRfc2VydmVyU3RhdGVIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgaWYgKCF0aGlzLnNjU3RhdGVNYW5hZ2VyLmxhc3RTZXJ2ZXJTdGF0ZSlcclxuICAgICAgdGhpcy5zZXR1cFN0YXJ0U3RhdGUoZGF0YSk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubmV3U2VydmVyU3RhdGUgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc29ja2V0X3VwZGF0ZVNlcnZlclJlc3BvbnNlSGFuZGxlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHRoaXMubGF0ZW5jeUFuYWx5emVyLmVuZFRlc3QoKTtcclxuICB9XHJcbn07XHJcblxyXG53aW5kb3cuY2xpZW50ID0gbmV3IFNreUR1ZWxDbGllbnQoKTtcclxuIiwiLyogYW4gYWpheCBsb2cgZmlsZSB0YWlsZXIgLyB2aWV3ZXJcclxuY29weXJpZ2h0IDIwMDcgam9obiBtaW5uaWhhbi5cclxuIFxyXG5odHRwOi8vZnJlZXBvc2l0b3J5LmNvbVxyXG4gXHJcblJlbGVhc2VkIHVuZGVyIHRoZXNlIHRlcm1zXHJcbjEuIFRoaXMgc2NyaXB0LCBhc3NvY2lhdGVkIGZ1bmN0aW9ucyBhbmQgSFRNTCBjb2RlIChcInRoZSBjb2RlXCIpIG1heSBiZSB1c2VkIGJ5IHlvdSAoXCJ0aGUgcmVjaXBpZW50XCIpIGZvciBhbnkgcHVycG9zZS5cclxuMi4gVGhpcyBjb2RlIG1heSBiZSBtb2RpZmllZCBpbiBhbnkgd2F5IGRlZW1lZCB1c2VmdWwgYnkgdGhlIHJlY2lwaWVudC5cclxuMy4gVGhpcyBjb2RlIG1heSBiZSB1c2VkIGluIGRlcml2YXRpdmUgd29ya3Mgb2YgYW55IGtpbmQsIGFueXdoZXJlLCBieSB0aGUgcmVjaXBpZW50LlxyXG40LiBZb3VyIHVzZSBvZiB0aGUgY29kZSBpbmRpY2F0ZXMgeW91ciBhY2NlcHRhbmNlIG9mIHRoZXNlIHRlcm1zLlxyXG41LiBUaGlzIG5vdGljZSBtdXN0IGJlIGtlcHQgaW50YWN0IHdpdGggYW55IHVzZSBvZiB0aGUgY29kZSB0byBwcm92aWRlIGF0dHJpYnV0aW9uLlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdCgpIHtcclxuIHZhciByZXF1ZXN0ID0gbnVsbDtcclxuICB0cnkge1xyXG4gICByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgfSBjYXRjaCAodHJ5bWljcm9zb2Z0KSB7XHJcbiAgIHRyeSB7XHJcbiAgICAgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIik7XHJcbiAgIH0gY2F0Y2ggKG90aGVybWljcm9zb2Z0KSB7XHJcbiAgICAgdHJ5IHtcclxuICAgICAgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7XHJcbiAgICAgfSBjYXRjaCAoZmFpbGVkKSB7XHJcbiAgICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gaWYgKHJlcXVlc3QgPT0gbnVsbCkge1xyXG4gICBhbGVydChcIkVycm9yIGNyZWF0aW5nIHJlcXVlc3Qgb2JqZWN0IVwiKTtcclxuIH0gZWxzZSB7XHJcbiAgIHJldHVybiByZXF1ZXN0O1xyXG4gfVxyXG59XHJcbiBcclxudmFyIHJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KCk7XHJcblxyXG53aW5kb3cuZ2V0TG9nID0gZnVuY3Rpb24odGltZXIpIHtcclxuICB2YXIgdXJsID0gXCJodHRwOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICE9ICd3d3cuc2t5ZHVlbC5jb20nID8gJzozMDAxJyA6ICcnKSArIFwiL2xvZy9nYW1lLXNlcnZlci5sb2dcIjtcclxuICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHVwZGF0ZVBhZ2U7XHJcbiAgcmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gIHN0YXJ0VGFpbCh0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0VGFpbCh0aW1lcikge1xyXG4gIGlmICh0aW1lciA9PSBcInN0b3BcIikge1xyXG4gICAgc3RvcFRhaWwoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdCA9IHNldFRpbWVvdXQoXCJnZXRMb2coKVwiLCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BUYWlsKCkge1xyXG4gIGNsZWFyVGltZW91dCh0KTtcclxuICB2YXIgcGF1c2UgPSBcIlRoZSBsb2cgdmlld2VyIGhhcyBiZWVuIHBhdXNlZC4gVG8gYmVnaW4gdmlld2luZyBhZ2FpbiwgY2xpY2sgdGhlIFN0YXJ0IFZpZXdlciBidXR0b24uXFxuXCI7XHJcbiAgbG9nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dcIik7XHJcbiAgdmFyIG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXVzZSk7XHJcbiAgbG9nRGl2LnJlcGxhY2VDaGlsZChuZXdOb2RlLCBsb2dEaXYuY2hpbGROb2Rlc1swXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhZ2UoKSB7XHJcbiAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIHZhciBjdXJyZW50TG9nVmFsdWUgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dC5zcGxpdChcIlxcblwiKTtcclxuICAgICAgZXZhbChjdXJyZW50TG9nVmFsdWUpO1xyXG4gICAgICBsb2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcclxuICAgICAgdmFyIGxvZ0xpbmUgPSAnICc7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjdXJyZW50TG9nVmFsdWUubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgbG9nTGluZSArPSBjdXJyZW50TG9nVmFsdWVbaV0gKyBcIlxcblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxvZ0Rpdi5pbm5lckhUTUwgPSBsb2dMaW5lO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhIFJlcXVlc3Qgc3RhdHVzIGlzIFwiICsgcmVxdWVzdC5zdGF0dXMpO1xyXG4gIH1cclxufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
