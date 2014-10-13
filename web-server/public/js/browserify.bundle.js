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
  this.options.fireRate = options.fireRate || 50.0;
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
      scale: this.scale,
      type: this.type
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
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id) {
    this._super(parent, id || this.getId());

    this.type = 'bird';

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

    this.x = 400;
    this.y = 400;
    this.bank = 0;
    this.accelerater = 0;
    this.health = 100;
    this.ammo = 1000;
    this.velocity = this.GLOBALS.VELOCITY_MIN;
    this.angle = Math.random() * Math.PI * 2;

    this.triggerDown = false;

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_ScreenWrapping'))(this.world));
    this.charManager.add(new (require('../characteristics/Characteristic_ShootsBullets'))(this.bulletProps));
  },
  update: function (elapsed) {
    this.bulletProps.fireVelocity = 500.0 + this.velocity;

    if (!this.x)
      throw Error('x is undefined',x );
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
    this.destroyed = true;

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
},{"../GameObject":4,"../lib/HashArray":18,"./Bird":14,"./Player":16}],18:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJyb3dzZXJpZnkubWUuanMiLCJnYW1lLXNlcnZlci9ub2RlX21vZHVsZXMvamNsYXNzL2xpYi9qY2xhc3MubWluLmpzIiwic2hhcmVkL2pzL0dhbWVPYmplY3QuanMiLCJzaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyLmpzIiwic2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzIiwic2hhcmVkL2pzL1VzZXJJbnB1dFByb2Nlc3Nvci5qcyIsInNoYXJlZC9qcy9Vc2VyU3RhdGUuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljTWFuYWdlci5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5qcyIsInNoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcuanMiLCJzaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvQmlyZC5qcyIsInNoYXJlZC9qcy9nYW1lT2JqZWN0cy9CdWxsZXQuanMiLCJzaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyLmpzIiwic2hhcmVkL2pzL2dhbWVPYmplY3RzL1dvcmxkLmpzIiwic2hhcmVkL2pzL2xpYi9IYXNoQXJyYXkuanMiLCJzaGFyZWQvanMvc3ByaXRlcy9CaXJkU3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvQnVsbGV0U3ByaXRlLmpzIiwic2hhcmVkL2pzL3Nwcml0ZXMvUGxhbmVTcHJpdGUuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9TZXJ2ZXJDbGllbnRTdGF0ZU1hbmFnZXIuanMiLCJ3ZWItc2VydmVyL3B1YmxpYy9qcy9Ta3lEdWVsQ2xpZW50LmpzIiwid2ViLXNlcnZlci9wdWJsaWMvanMvbG9nVmlld2VyLmpzIiwiLi4vLi4vLi4vLi4vLi4vdXNyL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIExpYnJhcnlcclxucmVxdWlyZShcIi4vZ2FtZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL2pjbGFzcy9saWIvamNsYXNzLm1pbi5qc1wiKTtcclxuXHJcbi8vIFNoYXJlZFxyXG5cclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2xpYi9IYXNoQXJyYXkuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcuanNcIik7XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbi5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvQnVsbGV0LmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvUGxheWVyLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvZ2FtZU9iamVjdHMvQmlyZC5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL1VzZXJBY3Rpb25zLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvVXNlclN0YXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvVXNlcklucHV0UHJvY2Vzc29yLmpzXCIpO1xyXG5cclxuLy8gU3ByaXRlc1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9QbGFuZVNwcml0ZS5qc1wiKTtcclxucmVxdWlyZShcIi4vc2hhcmVkL2pzL3Nwcml0ZXMvQnVsbGV0U3ByaXRlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9zaGFyZWQvanMvc3ByaXRlcy9CaXJkU3ByaXRlLmpzXCIpO1xyXG5cclxuLy8gQ2xpZW50XHJcbnJlcXVpcmUoXCIuL3NoYXJlZC9qcy9MYXRlbmN5QW5hbHl6ZXIuanNcIik7XHJcbnJlcXVpcmUoXCIuL3dlYi1zZXJ2ZXIvcHVibGljL2pzL1NlcnZlckNsaWVudFN0YXRlTWFuYWdlci5qc1wiKTtcclxucmVxdWlyZShcIi4vd2ViLXNlcnZlci9wdWJsaWMvanMvU2t5RHVlbENsaWVudC5qc1wiKTtcclxuXHJcbi8vIFZpZXdcclxucmVxdWlyZShcIi4vd2ViLXNlcnZlci9wdWJsaWMvanMvbG9nVmlld2VyLmpzXCIpOyIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwpe1xuLyohXG4gKiBKYXZhU2NyaXB0IEluaGVyaXRhbmNlIHdpdGggUHJpdmF0ZSBNZW1iZXJzXG4gKiBMYXJnZWx5IGJhc2VkIHVwb24gSm9obiBSZXNpZydzIGluaGVyaXRhbmNlIHRlY2huaXF1ZSxcbiAqIChzZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL3NpbXBsZS1qYXZhc2NyaXB0LWluaGVyaXRhbmNlLylcbiAqIHRoYXQgd2FzIGluc3BpcmVkIGJ5IGJhc2UyIGFuZCBQcm90b3R5cGUuXG4gKlxuICogV29ya3Mgd2l0aCBhbmQgd2l0aG91dCBub2RlLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqXG4gKiB2Mi4wLjQsIE1hcmNlbCBSaWVnZXIsIDIwMTNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yaWdhL2pjbGFzc1xuICogaHR0cHM6Ly9ucG1qcy5vcmcvcGFja2FnZS9qY2xhc3NcbiAqL1xudmFyIG5zLG5zS2V5O1xuaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCImJnR5cGVvZiBwcm9jZXNzIT09XCJ1bmRlZmluZWRcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCImJm1vZHVsZS5leHBvcnRzKXtucz1tb2R1bGU7bnNLZXk9XCJleHBvcnRzXCI7fWVsc2V7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe25zPXdpbmRvdztcbm5zS2V5PVwiSkNsYXNzXCI7fX0oZnVuY3Rpb24oZCxmKXt2YXIgYj1kW2ZdO3ZhciBhPXtleHRlbmRhYmxlOnRydWUsY3Rvck5hbWU6XCJpbml0XCIsc3VwZXJOYW1lOlwiX3N1cGVyXCIsZW5hYmxlUHJpdmFjeTp0cnVlLHByaXZhdGVQYXR0ZXJuOi9eX18uKy8sdHJhY2tpbmc6dHJ1ZSxwcml2YXRlTmFtZTpcIl9fXCIsbWV0aG9kc0tleTpcIl9qY01ldGhvZHNfXCIsZGVwdGhLZXk6XCJfamNEZXB0aF9cIixjYWxsZXJEZXB0aEtleTpcIl9qY0NhbGxlckRlcHRoX1wifTtcbnZhciBjPWZhbHNlO3ZhciBlPWZ1bmN0aW9uKCl7fTtlLmV4dGVuZD1mdW5jdGlvbihtLGcpe2c9Z3x8e307Zm9yKHZhciBxIGluIGEpe2lmKGdbcV09PT11bmRlZmluZWQpe2dbcV09YVtxXTt9fWlmKCFnLmVuYWJsZVByaXZhY3kpe2cucHJpdmF0ZVBhdHRlcm49bnVsbDtcbmcucHJpdmF0ZU5hbWU9bnVsbDt9dmFyIHI9dGhpcy5wcm90b3R5cGU7Yz10cnVlO3ZhciBvPW5ldyB0aGlzKCk7Yz1mYWxzZTtvW2cuZGVwdGhLZXldPXJbZy5kZXB0aEtleV18fDA7b1tnLmRlcHRoS2V5XSsrO3ZhciBrPW9bZy5kZXB0aEtleV07dmFyIGk9e307dmFyIGo9e307XG52YXIgcz17fTtmb3IodmFyIGggaW4gbSl7aWYobVtoXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXt2YXIgbj0oZnVuY3Rpb24odCx1KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdj10aGlzW2cuc3VwZXJOYW1lXTtpZighZy5wcml2YXRlUGF0dGVybnx8IWcucHJpdmF0ZVBhdHRlcm4udGVzdCh0KSl7dGhpc1tnLnN1cGVyTmFtZV09clt0XTtcbn12YXIgRDtpZihnLnByaXZhdGVOYW1lKXtEPXRoaXNbZy5wcml2YXRlTmFtZV07dGhpc1tnLnByaXZhdGVOYW1lXT1EfHxzO312YXIgeSxFLHgsSTtpZihnLnByaXZhdGVQYXR0ZXJuKXtpZih0aGlzW2cuY2FsbGVyRGVwdGhLZXldPT09dW5kZWZpbmVkKXt0aGlzW2cuY2FsbGVyRGVwdGhLZXldPWs7XG59eT10aGlzW2cubWV0aG9kc0tleV07aWYodD09Zy5jdG9yKXt0aGlzW2cubWV0aG9kc0tleV09eXx8aTtmb3IodmFyIHogaW4gaSl7aWYoIXRoaXNbZy5tZXRob2RzS2V5XVt6XSl7dGhpc1tnLm1ldGhvZHNLZXldW3pdPXt9O310aGlzW2cubWV0aG9kc0tleV1bel1ba109aVt6XVtrXTtcbnZhciBDPXRoaXNbZy5tZXRob2RzS2V5XVt6XVtrXTt0aGlzW2cubWV0aG9kc0tleV1bel1ba109ZnVuY3Rpb24oKXt2YXIgSz10aGlzW2cuc3VwZXJOYW1lXTt0aGlzW2cuc3VwZXJOYW1lXT10aGlzW2cubWV0aG9kc0tleV1bel1bay0xXTt2YXIgSj1DLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcbnRoaXNbZy5zdXBlck5hbWVdPUs7cmV0dXJuIEo7fTt9aT10aGlzW2cubWV0aG9kc0tleV07fWVsc2V7dGhpc1tnLm1ldGhvZHNLZXldPWk7fUU9e307Zm9yKHZhciB6IGluIHRoaXNbZy5tZXRob2RzS2V5XSl7RVt6XT10aGlzW3pdO3ZhciBGPU1hdGgubWF4LmFwcGx5KE1hdGgsT2JqZWN0LmtleXMoaVt6XSkpO1xudGhpc1t6XT1pW3pdW0ZdO31pZihnLnRyYWNraW5nKXt4PXt9O2Zvcih2YXIgRyBpbiBqKXt4W0ddPXRoaXNbR107dGhpc1tHXT1qW0ddO319aWYoZy50cmFja2luZyl7ST1PYmplY3Qua2V5cyh0aGlzKTt9fXZhciBCPXUuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKGcucHJpdmF0ZVBhdHRlcm4pe2lmKGcudHJhY2tpbmcpe3ZhciBIPU9iamVjdC5rZXlzKHRoaXMpO1xuZm9yKHZhciBHIGluIEgpe0c9SFtHXTtpZihnLnByaXZhdGVQYXR0ZXJuLnRlc3QoRykpe3hbR109dGhpc1tHXTtqW0ddPXRoaXNbR107fX1mb3IodmFyIEcgaW4gSSl7Rz1JW0ddO3ZhciBBPUguaW5kZXhPZihHKTwwJiZnLnByaXZhdGVQYXR0ZXJuLnRlc3QoRyk7aWYoQSl7ZGVsZXRlIGpbR107XG5kZWxldGUgdGhpc1tHXTt9fWZvcih2YXIgRyBpbiBqKXt2YXIgdz10aGlzW2cuY2FsbGVyRGVwdGhLZXldO2lmKHhbR109PT11bmRlZmluZWR8fGs9PXcpe2RlbGV0ZSB0aGlzW0ddO31lbHNle3RoaXNbR109eFtHXTt9fX1mb3IodmFyIEcgaW4gdGhpc1tnLm1ldGhvZHNLZXldKXtpZihFW0ddPT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tHXTtcbn1lbHNle3RoaXNbR109RVtHXTt9fWlmKHk9PT11bmRlZmluZWQpe2RlbGV0ZSB0aGlzW2cubWV0aG9kc0tleV07fWVsc2V7dGhpc1tnLm1ldGhvZHNLZXldPXk7fWlmKGs9PXRoaXNbZy5jYWxsZXJEZXB0aEtleV0pe2RlbGV0ZSB0aGlzW2cuY2FsbGVyRGVwdGhLZXldO1xufX1pZihnLnByaXZhdGVOYW1lKXtpZihEPT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLnByaXZhdGVOYW1lXTt9ZWxzZXt0aGlzW2cucHJpdmF0ZU5hbWVdPUQ7fX1pZih2PT09dW5kZWZpbmVkKXtkZWxldGUgdGhpc1tnLnN1cGVyTmFtZV07fWVsc2V7dGhpc1tnLnN1cGVyTmFtZV09djtcbn1yZXR1cm4gQjt9O30pKGgsbVtoXSk7dmFyIGw9Zy5wcml2YXRlUGF0dGVybiYmZy5wcml2YXRlUGF0dGVybi50ZXN0KGgpO2lmKGwpe2lbaF09e307aVtoXVtrXT1uO31lbHNle29baF09bjt9fWVsc2V7dmFyIGw9Zy50cmFja2luZyYmZy5wcml2YXRlUGF0dGVybiYmZy5wcml2YXRlUGF0dGVybi50ZXN0KGgpO1xuaWYobCl7altoXT1tW2hdO31lbHNle29baF09bVtoXTt9fX1mdW5jdGlvbiBwKCl7aWYoIWMmJnRoaXNbZy5jdG9yTmFtZV0pe3RoaXNbZy5jdG9yTmFtZV0uYXBwbHkodGhpcyxhcmd1bWVudHMpO319cC5wcm90b3R5cGU9bztwLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1wO1xuaWYoZy5leHRlbmRhYmxlIT09ZmFsc2Upe3AuZXh0ZW5kPWFyZ3VtZW50cy5jYWxsZWU7fXJldHVybiBwO307ZS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7dmFyIGc9ZFtmXTtkW2ZdPWI7cmV0dXJuIGc7fTtkW2ZdPWU7fSkobnMsbnNLZXkpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJyksdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBSZXF1aXJlc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyID0gcmVxdWlyZSgnLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyJyksXHJcbiAgSkNsYXNzID0gcmVxdWlyZSgnamNsYXNzJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi9saWIvSGFzaEFycmF5Jyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBHYW1lT2JqZWN0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEdhbWVPYmplY3QgPSBtb2R1bGUuZXhwb3J0cyA9IEpDbGFzcy5leHRlbmQoe1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFByb3BlcnRpZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzZXRQYXJlbnQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldFBhcmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gIH0sXHJcbiAgc2V0Q2hpbGRyZW46IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAvLyBEZXNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgdGhpcy5fY2hpbGRyZW4gPSB2YWx1ZTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuOiBmdW5jdGlvbigpIHtcclxuICAgIC8vIFNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xyXG4gIH0sXHJcbiAgc2V0SWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xyXG4gIH0sXHJcbiAgZ2V0SWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkIHx8ICh0aGlzLl9pZCA9IHRoaXMucmFuZG9tSWQoKSk7XHJcbiAgfSxcclxuICBzZXRTdGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XHJcbiAgfSxcclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLnN0YXRlO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuSWRzOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pbml0ZWQpXHJcbiAgICAgIHJldHVybiB7fTtcclxuXHJcbiAgICB2YXIgcmV0ID0ge307XHJcblxyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICByZXRbY2hpbGQuZ2V0SWQoKV0gPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9LFxyXG4gIHNldENoaWxkcmVuU3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIGlkcyA9IHRoaXMuZ2V0Q2hpbGRyZW5JZHMoKTtcclxuXHJcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICAgIHZhciBjaGlsZCA9IHNlbGYuZ2V0Q2hpbGRyZW4oKS5nZXQoY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICAgIGlmICghY2hpbGQpXHJcbiAgICAgICAgc2VsZi5nZXRDaGlsZHJlbigpLmFkZChzZWxmLm5ld0NoaWxkRnJvbVN0YXRlKGNoaWxkU3RhdGUpKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGNoaWxkLnNldFN0YXRlKGNoaWxkU3RhdGUpO1xyXG5cclxuICAgICAgZGVsZXRlIGlkc1tjaGlsZFN0YXRlLmlkXTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmRlc3Ryb3lVbmZvdW5kQ2hpbGRyZW5PblN0YXRlU2V0KVxyXG4gICAgICBmb3IgKHZhciBpZCBpbiBpZHMpXHJcbiAgICAgICAgdGhpcy5kZXN0cm95Q2hpbGRCeUlkKGlkKTtcclxuICB9LFxyXG4gIGdldENoaWxkcmVuU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRlZClcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldENoaWxkcmVuKCkuYWxsLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkLmdldFN0YXRlKCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldERpcnR5OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgLy8gRGVzZXJpYWxpemUgZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMuX2RpcnR5ID0gdmFsdWU7XHJcbiAgICAodGhpcy5fZGlydHkgJiYgdGhpcy5nZXRQYXJlbnQoKSkgPyB0aGlzLmdldFBhcmVudCgpLnNldERpcnR5KHRydWUpIDogJyc7XHJcbiAgICAhdGhpcy5fZGlydHkgPyB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgY2hpbGQuc2V0RGlydHkoZmFsc2UpO1xyXG4gICAgfSkgOiAnJztcclxuICB9LFxyXG4gIGdldERpcnR5OiBmdW5jdGlvbigpIHtcclxuICAgIC8vIFNlcmlhbGl6ZSBmcm9tIHNlcnZlclxyXG4gICAgcmV0dXJuIHRoaXMuX2RpcnR5O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHJhbmRvbUlkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTk5OTk5OTk5KS50b1N0cmluZygxNik7XHJcbiAgfSxcclxuICBpbml0OiBmdW5jdGlvbiAocGFyZW50LCBpZCkge1xyXG4gICAgaWYgKCFwYXJlbnQpXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHdvcmxkIGFuZCByb290IHRvJywgdGhpcyk7XHJcbiAgICAgIEdhbWVPYmplY3QucHJvdG90eXBlLndvcmxkID0gR2FtZU9iamVjdC5wcm90b3R5cGUucm9vdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRJZChpZCk7XHJcbiAgICB0aGlzLnR5cGUgPSAnR2FtZU9iamVjdCc7XHJcbiAgICB0aGlzLmJ1aWxkQ2hpbGRyZW5PYmplY3QoKTtcclxuICAgIHRoaXMuc2V0UGFyZW50KHBhcmVudCk7XHJcbiAgICB0aGlzLnNldERpcnR5KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc3ByaXRlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5kZXN0cm95VW5mb3VuZENoaWxkcmVuT25TdGF0ZVNldCA9IHRydWU7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyID0gbmV3IENoYXJhY3RlcmlzdGljTWFuYWdlcih0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluaXRlZD0gdHJ1ZTtcclxuICB9LFxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsYXBzZWQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vIFdpcGUgb3V0IGFueSBkZXN0cm95ZWQgY2hpbGRyZW4uXHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmNvbmNhdCgpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGlmIChjaGlsZC5kZXN0cm95ZWQpXHJcbiAgICAgICAgc2VsZi5nZXRDaGlsZHJlbigpLnJlbW92ZShjaGlsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZShlbGFwc2VkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hhck1hbmFnZXIuYXBwbHlBbGwoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcclxuICAgIHZhciBjaGlsZCA9IG5ldyBHYW1lT2JqZWN0KCk7XHJcbiAgICBjaGlsZC5pbml0KHRoaXMsIGNoaWxkU3RhdGUuaWQpXHJcbiAgICBjaGlsZC5zdGF0ZSA9IGNoaWxkU3RhdGU7XHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfSxcclxuICBkZXN0cm95Q2hpbGRCeUlkOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGRyZW4oKS5nZXQoaWQpO1xyXG4gICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLnJlbW92ZShjaGlsZCk7XHJcbiAgfSxcclxuICBidWlsZENoaWxkcmVuT2JqZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldENoaWxkcmVuKG5ldyBIYXNoQXJyYXkoWydfaWQnLCAndHlwZSddKSk7XHJcbiAgfSxcclxuICBidWlsZFNwcml0ZTogZnVuY3Rpb24gKHBoYXNlcikge1xyXG4gIH0sXHJcbiAgdXBkYXRlU3ByaXRlOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICBpZiAodGhpcy5zcHJpdGUgJiYgdGhpcy5kZXN0cm95ZWQpXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgaWYgKCF0aGlzLnNwcml0ZSlcclxuICAgICAgICB0aGlzLmJ1aWxkU3ByaXRlKHBoYXNlcik7XHJcblxyXG4gICAgICBpZiAodGhpcy5zcHJpdGUpXHJcbiAgICAgICAgdGhpcy5zcHJpdGUudXBkYXRlV2l0aE1vZGVsKHRoaXMpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlUGhhc2VyOiBmdW5jdGlvbiAocGhhc2VyKSB7XHJcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZVBoYXNlcihwaGFzZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTcHJpdGUocGhhc2VyKTtcclxuICB9LFxyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcbn0pOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEdsb2JhbHNcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIExBVEVOQ1lfQU5BTFlaRVJfREVGQVVMVF9NQVggPSAxMDtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIExhdGVuY3lBbmFseXplcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBMYXRlbmN5QW5hbHl6ZXIgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmRlYnVnID0gZmFsc2U7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuTGF0ZW5jeUFuYWx5emVyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhY2s6IFtdLFxyXG4gIG1heFN0YWNrTGVuZ3RoOiBMQVRFTkNZX0FOQUxZWkVSX0RFRkFVTFRfTUFYLFxyXG4gIGxhc3RUZXN0VGltZTogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IGxhdGVuY3koKSB7XHJcbiAgICAvLyBSZXR1cm5zIGEgd2VpZ2h0ZWQgYXZlcmFnZSBsYXRlbmN5LlxyXG4gICAgLy8gSXRlbSBhdCBpeCAwIGhhcyB3ZWlnaHQgb2YgMSBhbmQgaXRlbSBhdCBpeCBsZW5ndGggaGFzIHdlaWdodCBvZiBsZW5ndGguXHJcbiAgICB2YXIgbGF0VG90ID0gMCxcclxuICAgICAgdG90ID0gMDtcclxuXHJcbiAgICB0aGlzLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKGxhdCwgaXgsIGFycikge1xyXG4gICAgICBsYXRUb3QgKz0gbGF0ICogKGl4KzEpO1xyXG4gICAgICB0b3QgKz0gKGl4KzEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHZhbCA9IHRvdCA/IGxhdFRvdCAvIHRvdCA6IDE7XHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMQVRFTkNZJywgdmFsKTtcclxuXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH0sXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzdGFydFRlc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubGFzdFRlc3RUaW1lID0gdGhpcy5ub3c7XHJcbiAgfSxcclxuICBlbmRUZXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy5sYXN0VGVzdFRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWJ1ZylcclxuICAgICAgY29uc29sZS5sb2coJ0xBVEVOQ1knLCB0aGlzLmxhdGVuY3kpO1xyXG4gICAgdGhpcy5wdXNoKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgcHVzaDogZnVuY3Rpb24obGF0ZW5jeSkge1xyXG4gICAgdGhpcy5zdGFjay5wdXNoKGxhdGVuY3kpO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA+IHRoaXMubWF4U3RhY2tMZW5ndGgpXHJcbiAgICAgIHRoaXMuc3RhY2sudW5zaGlmdCgpO1xyXG4gIH0sXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc3RhY2sgPSBbXTtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBMYXRlbmN5QW5hbHl6ZXI7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVVNFUl9BQ1RJT05TID0ge1xyXG4gIExFRlRfRE9XTjogMHgwMDAxLFxyXG4gIExFRlRfVVA6IDB4MDAwMixcclxuICBSSUdIVF9ET1dOOiAweDAwMTAsXHJcbiAgUklHSFRfVVA6IDB4MDAyMCxcclxuICBVUF9ET1dOOiAweDAxMDAsXHJcbiAgVVBfVVA6IDB4MDIwMCxcclxuICBET1dOX0RPV046IDB4MTAwMCxcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gVVNFUl9BQ1RJT05TO1xyXG59IGVsc2Uge1xyXG4gIHdpbmRvdy5VU0VSX0FDVElPTlMgPSBVU0VSX0FDVElPTlM7XHJcbn0iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBVc2VySW5wdXRQcm9jZXNzb3IoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgVXNlcklucHV0UHJvY2Vzc29yID0gZnVuY3Rpb24oKSB7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuVXNlcklucHV0UHJvY2Vzc29yLnByb3RvdHlwZSA9IHtcclxuICB1cGRhdGU6IGZ1bmN0aW9uICh1c2VySW5wdXQsIGVsYXBzZWQsIHdvcmxkKSB7XHJcbiAgICBpZiAodXNlcklucHV0LmxlZnQpXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gLXdvcmxkLnBsYXllci5HTE9CQUxTLkJBTktfUkFURTtcclxuICAgIGVsc2UgaWYgKHVzZXJJbnB1dC5yaWdodClcclxuICAgICAgd29ybGQucGxheWVyLmJhbmsgPSB3b3JsZC5wbGF5ZXIuR0xPQkFMUy5CQU5LX1JBVEU7XHJcbiAgICBlbHNlXHJcbiAgICAgIHdvcmxkLnBsYXllci5iYW5rID0gMDtcclxuXHJcbiAgICBpZiAodXNlcklucHV0LnVwKVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSB3b3JsZC5wbGF5ZXIuR0xPQkFMUy5BQ0NFTEVSQVRJT05fUkFURTtcclxuICAgIGVsc2UgaWYgKHVzZXJJbnB1dC5kb3duKVxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSAtd29ybGQucGxheWVyLkdMT0JBTFMuREVDRUxFUkFUSU9OX1JBVEU7XHJcbiAgICBlbHNlIFxyXG4gICAgICB3b3JsZC5wbGF5ZXIuYWNjZWxlcmF0ZXIgPSAwLjA7XHJcblxyXG4gICAgd29ybGQucGxheWVyLnRyaWdnZXJEb3duID0gdXNlcklucHV0LnRyaWdnZXI7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcklucHV0UHJvY2Vzc29yOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFVzZXJJbnB1dFN0YXRlKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIFVzZXJJbnB1dFN0YXRlID0gZnVuY3Rpb24oaW5wdXQsIHRpbWUpIHtcclxuICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgdGhpcy50aW1lID0gdGltZTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5Vc2VySW5wdXRTdGF0ZS5wcm90b3R5cGUgPSB7XHJcbiAgaW5wdXQ6IHVuZGVmaW5lZCxcclxuICB0aW1lOiB1bmRlZmluZWRcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcklucHV0U3RhdGU7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljTWFuYWdlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIHRoaXMuY2hhcmFjdGVyaXN0aWNzID0gbmV3IEhhc2hBcnJheShbJ25hbWUnXSk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyLnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBWYXJpYWJsZXNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBjYWNoZToge30sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFkZDogZnVuY3Rpb24gKGNoYXJhY3RlcmlzdGljKSB7XHJcbiAgICB0aGlzLmNoYXJhY3RlcmlzdGljcy5hZGQoY2hhcmFjdGVyaXN0aWMpO1xyXG4gIH0sXHJcbiAgYXBwbHlBbGw6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmNhY2hlID0ge307XHJcblxyXG4gICAgdGhpcy5jaGFyYWN0ZXJpc3RpY3MuYWxsLmZvckVhY2goZnVuY3Rpb24gKGNoYXJhY3RlcmlzdGljKSB7XHJcbiAgICAgIGNoYXJhY3RlcmlzdGljLmFwcGx5VG8oc2VsZi5wYXJlbnQsIGVsYXBzZWQsIHNlbGYuY2FjaGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNNYW5hZ2VyOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4oKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHJvdG90eXBlXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbkNoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW4ucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdmFyIGRlc3Ryb3kgPSB0YXJnZXQueCA8IDAgfHwgdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggfHwgdGFyZ2V0LnkgPCAwIHx8IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodDtcclxuICAgIGlmIChkZXN0cm95KVxyXG4gICAgICB0YXJnZXQuZGVzdHJveSgpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX0Rlc3Ryb3lPZmZTY3JlZW47IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcygpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfUGh5c2ljcy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICBpZiAodHlwZW9mIHRhcmdldC52ZWxvY2l0eSA9PSAndW5kZWZpbmVkJylcclxuICAgICAgdGhyb3cgRXJyb3IoJ1RhcmdldCB2ZWxvY2l0eSBpcyB1bmRlZmluZWQgZm9yICcsIHRhcmdldCk7XHJcbiAgICBcclxuICAgIHZhciB2ID0gdGFyZ2V0LnZlbG9jaXR5O1xyXG4gICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZXInKSlcclxuICAgICAgdiA9IHRhcmdldC52ZWxvY2l0eSArICh0YXJnZXQuYWNjZWxlcmF0ZXIgKiBlbGFwc2VkKTtcclxuICAgIHRhcmdldC52ZWxvY2l0eSA9IHYgPiB0aGlzLm9wdGlvbnMuVkVMT0NJVFlfTUFYID8gdGhpcy5vcHRpb25zLlZFTE9DSVRZX01BWCA6ICh2IDwgdGhpcy5vcHRpb25zLlZFTE9DSVRZX01JTiA/IHRoaXMub3B0aW9ucy5WRUxPQ0lUWV9NSU4gOiB2KTtcclxuXHJcbiAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KCdiYW5rJykpXHJcbiAgICAgIHRhcmdldC5hbmdsZSArPSB0YXJnZXQuYmFuayAqIGVsYXBzZWQ7XHJcblxyXG4gICAgdGFyZ2V0LnggKz0gTWF0aC5jb3ModGFyZ2V0LmFuZ2xlKSAqIHRhcmdldC52ZWxvY2l0eSAqIGVsYXBzZWQ7XHJcbiAgICB0YXJnZXQueSArPSBNYXRoLnNpbih0YXJnZXQuYW5nbGUpICogdGFyZ2V0LnZlbG9jaXR5ICogZWxhcHNlZDtcclxuICB9XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXJpc3RpY19QaHlzaWNzOyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nKClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBhcHBseVRvOiBmdW5jdGlvbiAodGFyZ2V0LCBlbGFwc2VkLCBjYWNoZSkge1xyXG4gICAgdGFyZ2V0LnggPSB0YXJnZXQueCA8IDAgPyB0aGlzLm9wdGlvbnMud2lkdGggOiB0YXJnZXQueDtcclxuICAgIHRhcmdldC54ID0gdGFyZ2V0LnggPiB0aGlzLm9wdGlvbnMud2lkdGggPyB0YXJnZXQueCAlIHRoaXMub3B0aW9ucy53aWR0aCA6IHRhcmdldC54O1xyXG4gICAgdGFyZ2V0LnkgPSB0YXJnZXQueSA8IDAgPyB0aGlzLm9wdGlvbnMuaGVpZ2h0IDogdGFyZ2V0Lnk7XHJcbiAgICB0YXJnZXQueSA9IHRhcmdldC55ID4gdGhpcy5vcHRpb25zLmhlaWdodCA/IHRhcmdldC55ICUgdGhpcy5vcHRpb25zLmhlaWdodCA6IHRhcmdldC55O1xyXG4gIH1cclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEV4cG9ydCAobm9kZWpzIGFuZCBicm93c2VyIGFnZW50KVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nOyIsInZhciBCdWxsZXQgPSByZXF1aXJlKCcuLi9nYW1lT2JqZWN0cy9CdWxsZXQnKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIENoYXJhY3RlcmlzdGljX1Nob290c0J1bGxldHMoKVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gIHRoaXMub3B0aW9ucy5maXJlUmF0ZSA9IG9wdGlvbnMuZmlyZVJhdGUgfHwgNTAuMDtcclxuICB0aGlzLm9wdGlvbnMuZmlyZVZlbG9jaXR5ID0gb3B0aW9ucy5maXJlVmVsb2NpdHkgfHwgNzAwLjA7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0cy5wcm90b3R5cGUgPSB7XHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgbmV4dEJ1bGxldFRpbWU6IHVuZGVmaW5lZCxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGZpcmU6IGZ1bmN0aW9uICh0YXJnZXQsIHgsIHksIGFuZ2xlLCB2ZWxvY2l0eSlcclxuICB7XHJcbiAgICBpZiAodGFyZ2V0LmFtbW8gPD0gMClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0YXJnZXQsIHVuZGVmaW5lZCwgeCwgeSwgYW5nbGUsIHZlbG9jaXR5KTtcclxuICAgIHRhcmdldC5nZXRDaGlsZHJlbigpLmFkZChidWxsZXQpO1xyXG4gICAgdGFyZ2V0LmFtbW8tLTtcclxuICAgIHRoaXMubmV4dEJ1bGxldFRpbWUgPSB0aGlzLm5vdyArIHRoaXMub3B0aW9ucy5maXJlUmF0ZTtcclxuICB9LFxyXG4gIGFwcGx5VG86IGZ1bmN0aW9uICh0YXJnZXQsIGVsYXBzZWQsIGNhY2hlKSB7XHJcbiAgICBpZiAoIXRoaXMubmV4dEJ1bGxldFRpbWUpXHJcbiAgICAgIHRoaXMubmV4dEJ1bGxldFRpbWUgPSB0aGlzLm5vdyArIHRoaXMub3B0aW9ucy5maXJlUmF0ZTtcclxuXHJcbiAgICBpZiAodGFyZ2V0LnRyaWdnZXJEb3duKVxyXG4gICAge1xyXG4gICAgICB2YXIgdCA9IHRoaXMubmV4dEJ1bGxldFRpbWUgKyB0aGlzLm9wdGlvbnMuZmlyZVJhdGU7XHJcbiAgICAgIFxyXG4gICAgICB3aGlsZSAodGhpcy5ub3cgPiB0aGlzLm5leHRCdWxsZXRUaW1lKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5maXJlKHRhcmdldCwgdGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQuYW5nbGUsIHRoaXMub3B0aW9ucy5maXJlVmVsb2NpdHkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyaXN0aWNfU2hvb3RzQnVsbGV0czsiLCJ2YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoJy4uL0dhbWVPYmplY3QnKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEJpcmQoKVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBCaXJkID0gR2FtZU9iamVjdC5leHRlbmQoe1xuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogVmFyaWFibGVzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBhbmdsZTogMCxcbiAgYmFuazogMCxcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gICAqIFByb3BlcnRpZXNcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXG4gICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgdHlwZTogdGhpcy50eXBlXG4gICAgfTtcbiAgfSxcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuX2lkKVxuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCdUaGUgYmlyZFxcJ3MgaWRzIGRvIG5vdCBtYXRjaCBpbiBcXCdzZXQgc3RhdGUoKVxcJyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnggPSB2YWx1ZS54O1xuICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICB0aGlzLmJhbmsgPSB2YWx1ZS5iYW5rO1xuICAgIHRoaXMuc2NhbGUgPSB2YWx1ZS5zY2FsZTtcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xuICB9LFxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogTWV0aG9kc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgaW5pdDogZnVuY3Rpb24gKHBhcmVudCwgaWQpIHtcbiAgICB0aGlzLl9zdXBlcihwYXJlbnQsIGlkIHx8IHRoaXMuZ2V0SWQoKSk7XG5cbiAgICB0aGlzLnR5cGUgPSAnYmlyZCc7XG5cbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy53b3JsZC53aWR0aDtcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy53b3JsZC5oZWlnaHQ7XG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICB0aGlzLmJhbmsgPSB0aGlzLnJhbmRvbWl6ZWRCYW5rKCk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDI1ICsgTWF0aC5yYW5kb20oKSAqIDEwO1xuICAgIHRoaXMuc2NhbGUgPSAoTWF0aC5yYW5kb20oKSAqIDAuNCkgKyAwLjE7XG5cbiAgICB0aGlzLkdMT0JBTFMgPSB7XG4gICAgICBWRUxPQ0lUWV9NQVg6IEJpcmQudmVsb2NpdHksXG4gICAgICBWRUxPQ0lUWV9NSU46IEJpcmQudmVsb2NpdHksXG4gICAgfTtcblxuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1BoeXNpY3MnKSkodGhpcy5HTE9CQUxTKSk7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfU2NyZWVuV3JhcHBpbmcnKSkodGhpcy53b3JsZCkpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgdGhpcy5jaGFyTWFuYWdlci5hcHBseUFsbChlbGFwc2VkKTtcbiAgICBcbiAgICAvLyBUT0RPOiBlbmNhcHN1bGF0ZSBiaXJkIEFJXG4gICAgXG4gICAgLy8gYmlyZHMgaGF2ZSBhIDEvMjAwIGNoYW5jZSBvZiBjaGFuZ2luZyB0aGUgYmFuayBldmVyeSBmcmFtZVxuICAgIGlmKE1hdGgucmFuZG9tKCkgPCAwLjAwNSlcbiAgICAgIHRoaXMuYmFuayA9IHRoaXMucmFuZG9taXplZEJhbmsoKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQuYmlyZCgwLCAwKTtcbiAgfSxcbiAgcmFuZG9taXplZEJhbms6IGZ1bmN0aW9uKCkge1xuICAgIC8vIHZhbHVlIGluIHRoZSByYW5nZSBbLTEuMCwgMS4wXSBcbiAgICB2YXIgYmFua0ZhY3RvciA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIuMDtcbiAgICAvLyB0aGUgbWF4aW11bSBiYW5rIGFuZ2xlIFxuICAgIHZhciBiYW5rTWFnbml0dWRlID0gTWF0aC5QSSAvIDIuMDtcbiAgICAvLyBzY2FsZSB0aGUgbWFnbml0dWRlIGJ5IHRoZSByYW5kb21pemVkIGZhY3RvclxuICAgIHJldHVybiBiYW5rRmFjdG9yICogYmFua01hZ25pdHVkZTsgXG4gIH1cbn0pO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBCaXJkOyIsInZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQnVsbGV0KClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxudmFyIEJ1bGxldCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgICAgYW5nbGU6IHRoaXMuYW5nbGUsXHJcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUuaWQgIT0gdGhpcy5nZXRJZCgpKVxyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvcignVGhlIGJ1bGxldCBpZHMgZG8gbm90IG1hdGNoIGluIFxcJ3NldCBzdGF0ZSgpXFwnIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCA9IHZhbHVlLng7XHJcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xyXG4gICAgdGhpcy5hbmdsZSA9IHZhbHVlLmFuZ2xlO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGlkLCB4LCB5LCBhbmdsZSwgdmVsb2NpdHkpIHtcclxuICAgIHRoaXMuX3N1cGVyKHBhcmVudCwgaWQgfHwgdGhpcy5nZXRJZCgpKTtcclxuXHJcbiAgICB0aGlzLkdMT0JBTFMgPSB7XHJcbiAgICAgIFZFTE9DSVRZX01BWDogMTAwMDAwLFxyXG4gICAgICBWRUxPQ0lUWV9NSU46IDBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAnYnVsbGV0JztcclxuXHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xyXG4gICAgdGhpcy5jaGFyTWFuYWdlci5hZGQobmV3IChyZXF1aXJlKCcuLi9jaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNfRGVzdHJveU9mZlNjcmVlbicpKSh0aGlzLndvcmxkKSk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFwcGx5QWxsKGVsYXBzZWQpO1xyXG4gIH0sXHJcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gcGhhc2VyLmFkZC5idWxsZXQoMCwgMCk7XHJcbiAgfSxcclxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3ByaXRlKVxyXG4gICAgICB0aGlzLnNwcml0ZS5kZXN0cm95KHRydWUpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBCdWxsZXQ7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIFJlcXVpcmVtZW50c1xuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vR2FtZU9iamVjdCcpLFxuICBCdWxsZXQgPSByZXF1aXJlKCcuL0J1bGxldCcpLFxuICBwbGF5ZXJDb3VudCA9IDA7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGF5ZXIoKVxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnZhciBQbGF5ZXIgPSBHYW1lT2JqZWN0LmV4dGVuZCh7XG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICAgKiBQcm9wZXJ0aWVzXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmluaXRlZClcbiAgICAgIHJldHVybiB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkLFxuICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYmFuazogdGhpcy5iYW5rLFxuICAgICAgYWNjZWxlcmF0ZXI6IHRoaXMuYWNjZWxlcmF0ZXIsXG4gICAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgICBhY2NlbDogdGhpcy5hY2NlbCxcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgaGVhbHRoOiB0aGlzLmhlYWx0aCxcbiAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgYW1tbzogdGhpcy5hbW1vLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW5TdGF0ZSgpXG4gICAgfTtcbiAgfSxcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHZhbHVlLmlkICE9IHRoaXMuZ2V0SWQoKSlcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcignVGhlIHBsYW5lIGlkcyBkbyBub3QgbWF0Y2ggaW4gXFwnc2V0IHN0YXRlKClcXCchJyk7XG4gICAgfVxuXG4gICAgdGhpcy51aWQgPSB2YWx1ZS51aWQ7XG4gICAgdGhpcy54ID0gdmFsdWUueDtcbiAgICB0aGlzLnkgPSB2YWx1ZS55O1xuICAgIHRoaXMuYW5nbGUgPSB2YWx1ZS5hbmdsZTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgdGhpcy5iYW5rID0gdmFsdWUuYmFuaztcbiAgICB0aGlzLmhlYWx0aCA9IHZhbHVlLmhlYWx0aDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gdmFsdWUuYWNjZWxlcmF0ZXI7XG4gICAgdGhpcy5hbW1vID0gdmFsdWUuYW1tbztcbiAgICBcbiAgICB0aGlzLnNldENoaWxkcmVuU3RhdGUodmFsdWUuY2hpbGRyZW4pO1xuICB9LFxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAgICogTWV0aG9kc1xuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgaW5pdDogZnVuY3Rpb24ocGFyZW50LCBpZCwgdWlkKSB7XG4gICAgdGhpcy5fc3VwZXIocGFyZW50LCBpZCB8fCB0aGlzLmdldElkKCkpO1xuXG4gICAgdGhpcy51aWQgPSB1aWQ7XG5cbiAgICB0aGlzLnR5cGUgPSAncGxheWVyJztcblxuICAgIHRoaXMuR0xPQkFMUyA9IHtcbiAgICAgIFZFTE9DSVRZX01BWDogNjAwLFxuICAgICAgVkVMT0NJVFlfTUlOOiA5MCxcbiAgICAgIEJBTktfUkFURTogTWF0aC5QSSAvIDIsXG4gICAgICBBQ0NFTEVSQVRJT05fUkFURTogMjUwLFxuICAgICAgREVDRUxFUkFUSU9OX1JBVEU6IDEwMFxuICAgIH07XG5cbiAgICB0aGlzLmJ1bGxldFByb3BzID0ge1xuICAgICAgZmlyZVJhdGU6IDEwMCxcbiAgICAgIGZpcmVWZWxvY2l0eTogNTAwXG4gICAgfTtcblxuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA0MDA7XG4gICAgdGhpcy5iYW5rID0gMDtcbiAgICB0aGlzLmFjY2VsZXJhdGVyID0gMDtcbiAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICB0aGlzLmFtbW8gPSAxMDAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLkdMT0JBTFMuVkVMT0NJVFlfTUlOO1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG5cbiAgICB0aGlzLnRyaWdnZXJEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19QaHlzaWNzJykpKHRoaXMuR0xPQkFMUykpO1xuICAgIHRoaXMuY2hhck1hbmFnZXIuYWRkKG5ldyAocmVxdWlyZSgnLi4vY2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljX1NjcmVlbldyYXBwaW5nJykpKHRoaXMud29ybGQpKTtcbiAgICB0aGlzLmNoYXJNYW5hZ2VyLmFkZChuZXcgKHJlcXVpcmUoJy4uL2NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY19TaG9vdHNCdWxsZXRzJykpKHRoaXMuYnVsbGV0UHJvcHMpKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWxhcHNlZCkge1xuICAgIHRoaXMuYnVsbGV0UHJvcHMuZmlyZVZlbG9jaXR5ID0gNTAwLjAgKyB0aGlzLnZlbG9jaXR5O1xuXG4gICAgaWYgKCF0aGlzLngpXG4gICAgICB0aHJvdyBFcnJvcigneCBpcyB1bmRlZmluZWQnLHggKTtcbiAgICB0aGlzLl9zdXBlcihlbGFwc2VkKTtcbiAgfSxcbiAgYnVpbGRTcHJpdGU6IGZ1bmN0aW9uIChwaGFzZXIpIHtcbiAgICB0aGlzLnNwcml0ZSA9IHBoYXNlci5hZGQucGxhbmUoMCwgMCk7XG4gICAgdGhpcy5zcHJpdGUuZGlzcGxheVN0YXR1c1Jpbmcod2luZG93LmNsaWVudC5wbGF5ZXIudWlkID09PSB0aGlzLnVpZCk7XG5cbiAgICB3aW5kb3cuY2xpZW50LmdHYW1lT2JqZWN0cy5hZGQodGhpcy5zcHJpdGUpO1xuICB9LFxuICBuZXdDaGlsZEZyb21TdGF0ZTogZnVuY3Rpb24gKGNoaWxkU3RhdGUpIHtcbiAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLCBjaGlsZFN0YXRlLmlkKTtcbiAgICBidWxsZXQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XG4gICAgdGhpcy5nZXRDaGlsZHJlbigpLmFkZChidWxsZXQpO1xuICAgIHJldHVybiBidWxsZXQ7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdGhpcy5zcHJpdGUuZGVzdHJveSh0cnVlKTtcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcbiAgICB9XG4gIH1cbn0pO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogRXhwb3J0IChub2RlanMgYW5kIGJyb3dzZXIgYWdlbnQpXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7IiwidmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCcuLi9HYW1lT2JqZWN0JyksXHJcbiAgQmlyZCA9IHJlcXVpcmUoJy4vQmlyZCcpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyksXHJcbiAgSGFzaEFycmF5ID0gcmVxdWlyZSgnLi4vbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogQmlyZCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBXb3JsZCA9IEdhbWVPYmplY3QuZXh0ZW5kKHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc2V0U3RhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKVxyXG4gICAgICBpZiAoa2V5ICE9ICdjaGlsZHJlbicpXHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWVba2V5XTtcclxuXHJcbiAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJykpXHJcbiAgICAgIHRoaXMuc2V0Q2hpbGRyZW5TdGF0ZSh2YWx1ZS5jaGlsZHJlbik7XHJcbiAgfSxcclxuICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGVkKVxyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRpbGVXaWR0aDogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgIHRpbGVIZWlnaHQ6IHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgdGlsZXM6IHRoaXMudGlsZXMsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW5TdGF0ZSgpXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdXb3JsZCBpbml0IScpO1xyXG4gICAgdGhpcy50eXBlID0gJ3dvcmxkJztcclxuICAgIHRoaXMuX3N1cGVyKG51bGwsICdyb290Jyk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGFwc2VkKSB7XHJcbiAgICBpZiAoIWVsYXBzZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgICAgIFxyXG4gICAgdGhpcy5fc3VwZXIoZWxhcHNlZCk7XHJcbiAgfSxcclxuICBidWlsZENoaWxkcmVuT2JqZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldENoaWxkcmVuKG5ldyBIYXNoQXJyYXkoWydfaWQnLCAndWlkJywgJ3R5cGUnXSkpO1xyXG4gIH0sXHJcbiAgbmV3Q2hpbGRGcm9tU3RhdGU6IGZ1bmN0aW9uIChjaGlsZFN0YXRlKSB7XHJcbiAgICB2YXIgY2hpbGQ7XHJcblxyXG4gICAgaWYgKGNoaWxkU3RhdGUudHlwZSA9PSAnYmlyZCcpXHJcbiAgICAgIGNoaWxkID0gbmV3IEJpcmQodGhpcywgY2hpbGRTdGF0ZS5pZCk7XHJcbiAgICBlbHNlIGlmIChjaGlsZFN0YXRlLnR5cGUgPT0gJ3BsYXllcicpXHJcbiAgICAgIGNoaWxkID0gbmV3IFBsYXllcih0aGlzLCBjaGlsZFN0YXRlLmlkKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coY2hpbGRTdGF0ZSk7XHJcbiAgICAgIHRocm93IEVycm9yKCdDYW5ub3QgZmlndXJlIG91dCB3aGF0IHRoZSBoZWxsIGEgXFwnJyArIGNoaWxkU3RhdGUudHlwZSArICdcXCcgaXMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGQuc2V0U3RhdGUoY2hpbGRTdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBFeHBvcnQgKG5vZGVqcyBhbmQgYnJvd3NlciBhZ2VudClcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxubW9kdWxlLmV4cG9ydHMgPSBXb3JsZDsiLCJ2YXIgSGFzaEFycmF5ID0gZnVuY3Rpb24oa2V5RmllbGRzLCBjYWxsYmFjaykge1xuICB0aGlzLl9tYXAgPSB7fTtcbiAgdGhpcy5fbGlzdCA9IFtdO1xuICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgdGhpcy5rZXlGaWVsZHMgPSBrZXlGaWVsZHM7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdhbGwnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfSk7XG5cbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdtYXAnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9KTtcblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygnY29uc3RydWN0Jyk7XG4gIH1cbn07XG5cbkhhc2hBcnJheS5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAga2V5ID0gdGhpcy5rZXlGaWVsZHNba2V5XTtcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLmZpbmQob2JqLCBrZXkpO1xuICAgICAgICBpZiAoaW5zdCkge1xuICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXBbaW5zdF0uaW5kZXhPZihvYmopICE9IC0xKSB7XG4gICAgICAgICAgICAgIC8vIENhbm5vdCBhZGQgdGhlIHNhbWUgaXRlbSB0d2ljZVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tYXBbaW5zdF0ucHVzaChvYmopO1xuICAgICAgICAgIH0gZWxzZSB0aGlzLl9tYXBbaW5zdF0gPSBbb2JqXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0LnB1c2gob2JqKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ2FkZCcsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgIH1cbiAgfSxcbiAgYWRkTWFwOiBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHRoaXMuX21hcFtrZXldID0gb2JqO1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdhZGRNYXAnLCB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBvYmo6IG9ialxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiAoISh0aGlzLl9tYXBba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB8fCB0aGlzLl9tYXBba2V5XS5sZW5ndGggIT0gMSkgPyB0aGlzLl9tYXBba2V5XSA6IHRoaXMuX21hcFtrZXldWzBdO1xuICB9LFxuICBnZXRBc0FycmF5OiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwW2tleV0gfHwgW107XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICB9LFxuICBoYXNNdWx0aXBsZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFtrZXldIGluc3RhbmNlb2YgQXJyYXk7XG4gIH0sXG4gIHJlbW92ZUJ5S2V5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVtb3ZlZCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gYXJndW1lbnRzW2ldO1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5fbWFwW2tleV0uY29uY2F0KCk7XG4gICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgcmVtb3ZlZCA9IHJlbW92ZWQuY29uY2F0KGl0ZW1zKTtcbiAgICAgICAgZm9yICh2YXIgaiBpbiBpdGVtcykge1xuICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbal07XG4gICAgICAgICAgZm9yICh2YXIgaXggaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAgICAgIHZhciBrZXkyID0gdGhpcy5maW5kKGl0ZW0sIHRoaXMua2V5RmllbGRzW2l4XSk7XG4gICAgICAgICAgICBpZiAoa2V5MiAmJiB0aGlzLl9tYXBba2V5Ml0pIHtcbiAgICAgICAgICAgICAgdmFyIGl4ID0gdGhpcy5fbWFwW2tleTJdLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICAgIGlmIChpeCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcFtrZXkyXS5zcGxpY2UoaXgsIDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX21hcFtrZXkyXS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbWFwW2tleTJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKHRoaXMuX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjaygncmVtb3ZlQnlLZXknLCByZW1vdmVkKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIgaXggaW4gdGhpcy5rZXlGaWVsZHMpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZmluZChpdGVtLCB0aGlzLmtleUZpZWxkc1tpeF0pO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgdmFyIGl4ID0gdGhpcy5fbWFwW2tleV0uaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICBpZiAoaXggIT0gLTEpXG4gICAgICAgICAgICB0aGlzLl9tYXBba2V5XS5zcGxpY2UoaXgsIDEpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX21hcFtrZXldLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21hcFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKHRoaXMuX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soJ3JlbW92ZScsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuICByZW1vdmVBbGw6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbGQgPSB0aGlzLl9saXN0LmNvbmNhdCgpO1xuICAgIHRoaXMuX21hcCA9IHt9O1xuICAgIHRoaXMuX2xpc3QgPSBbXTtcblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCdyZW1vdmUnLCBvbGQpO1xuICAgIH1cbiAgfSxcbiAgZmluZDogZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9ialtwYXRoXTtcbiAgICB9XG5cbiAgICB2YXIgZHVwID0gcGF0aC5jb25jYXQoKTtcbiAgICAvLyBlbHNlIGFzc3VtZSBhcnJheS5cbiAgICB3aGlsZSAoZHVwLmxlbmd0aCAmJiBvYmopIHtcbiAgICAgIG9iaiA9IG9ialtkdXAuc2hpZnQoKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgY2xvbmU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIG4gPSBuZXcgSGFzaEFycmF5KHRoaXMua2V5RmllbGRzLmNvbmNhdCgpLCBjYWxsYmFjayA/IGNhbGxiYWNrIDogdGhpcy5jYWxsYmFjayk7XG4gICAgbi5hZGQuYXBwbHkobiwgdGhpcy5hbGwuY29uY2F0KCkpO1xuICAgIHJldHVybiBuO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hBcnJheTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBCaXJkU3ByaXRlKCkgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmZ1bmN0aW9uIEJpcmRTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICBcclxuICAvLyBhZGQgdGhlIGJpcmRTcHJpdGUgXHJcbiAgdGhpcy5iaXJkU3ByaXRlICAgPSB0aGlzLmNyZWF0ZSgwLCAwLCAnYmlyZCcpO1xyXG4gICBcclxuICAvLyB5b3UgY2FuJ3Qgc2V0IHRoZSBhbmNob3IgcG9pbnQgb2YgYSBncm91cCwgc28gZm9yIHggJiB5IHRvIGNvcnJlc3BvbmRcclxuICAvLyB0byB0aGUgQmlyZFNwcml0ZSdzIGNlbnRlciB3ZSBoYXZlIHRvIG9mZnNldCBpdCBtYW51YWxseVxyXG4gIHRoaXMuYmlyZFNwcml0ZS54ID0gLXRoaXMuYmlyZFNwcml0ZS53aWR0aCAgLyAyLjA7XHJcbiAgdGhpcy5iaXJkU3ByaXRlLnkgPSAtdGhpcy5iaXJkU3ByaXRlLmhlaWdodCAvIDIuMDtcclxufTtcclxuXHJcbkJpcmRTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcclxuQmlyZFNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCaXJkU3ByaXRlO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogUHVibGljIE1ldGhvZHMgXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5CaXJkU3ByaXRlLnByb3RvdHlwZS51cGRhdGVXaXRoTW9kZWwgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIHRoaXMueCA9IG1vZGVsLng7XHJcbiAgdGhpcy55ID0gbW9kZWwueTtcclxuICB0aGlzLmFuZ2xlID0gbW9kZWwuYW5nbGUgKiA1Ny4yOTU3Nzk1O1xyXG4gIHRoaXMuc2NhbGUueCA9IHRoaXMuc2NhbGUueSA9IG1vZGVsLnNjYWxlO1xyXG59O1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogRmFjdG9yeSBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeS5wcm90b3R5cGUuYmlyZCA9IGZ1bmN0aW9uKHgsIHksIGdyb3VwKSB7XHJcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcclxuICAgIGdyb3VwID0gdGhpcy53b3JsZDtcclxuICBcclxuICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCaXJkU3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSkpO1xyXG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIEJ1bGxldFNwcml0ZSgpIFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5mdW5jdGlvbiBCdWxsZXRTcHJpdGUoZ2FtZSwgeCwgeSkge1xyXG4gIFBoYXNlci5Hcm91cC5jYWxsKHRoaXMsIGdhbWUpO1xyXG4gXHJcbiAgLy8gY29uZmlndXJlIGdyb3VwIFxyXG4gIHRoaXMueCA9IHg7XHJcbiAgdGhpcy55ID0geTtcclxuICBcclxuICAvLyBhZGQgdGhlIEJ1bGxldFNwcml0ZSBcclxuICB0aGlzLkJ1bGxldFNwcml0ZSAgID0gdGhpcy5jcmVhdGUoMCwgMCwgJ2J1bGxldCcpO1xyXG59O1xyXG5cclxuQnVsbGV0U3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGhhc2VyLkdyb3VwLnByb3RvdHlwZSk7XHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCdWxsZXRTcHJpdGU7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQdWJsaWMgTWV0aG9kcyBcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkJ1bGxldFNwcml0ZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcclxuICB0aGlzLnggPSBtb2RlbC54O1xyXG4gIHRoaXMueSA9IG1vZGVsLnk7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBGYWN0b3J5IFxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5LnByb3RvdHlwZS5idWxsZXQgPSBmdW5jdGlvbih4LCB5LCBncm91cCkge1xyXG4gIGlmKHR5cGVvZiBncm91cCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XHJcbiAgXHJcbiAgcmV0dXJuIGdyb3VwLmFkZChuZXcgQnVsbGV0U3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSkpO1xyXG59OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG4gKiBQbGFuZSgpIFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZ1bmN0aW9uIFBsYW5lKGdhbWUsIHgsIHkpIHtcbiAgUGhhc2VyLkdyb3VwLmNhbGwodGhpcywgZ2FtZSk7XG4gXG4gIC8vIGNvbmZpZ3VyZSBncm91cCBcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbiAgXG4gIC8vIGFkZCB0aGUgYWlycGxhbmUgXG4gIHRoaXMuYWlycGxhbmUgICA9IHRoaXMuY3JlYXRlKDAsIDAsICdhaXJwbGFuZScpO1xuICAgXG4gIC8vIHlvdSBjYW4ndCBzZXQgdGhlIGFuY2hvciBwb2ludCBvZiBhIGdyb3VwLCBzbyBmb3IgeCAmIHkgdG8gY29ycmVzcG9uZFxuICAvLyB0byB0aGUgcGxhbmUncyBjZW50ZXIgd2UgaGF2ZSB0byBvZmZzZXQgaXQgbWFudWFsbHlcbiAgdGhpcy5haXJwbGFuZS54ID0gLXRoaXMuYWlycGxhbmUud2lkdGggIC8gMi4wO1xuICB0aGlzLmFpcnBsYW5lLnkgPSAtdGhpcy5haXJwbGFuZS5oZWlnaHQgLyAyLjA7XG5cbiAgLy8gYWRkIHRoZSBzdGF0dXMgcmluZyBcbiAgdGhpcy5zdGF0dXNSaW5nID0gZ2FtZS5hZGQuZ3JhcGhpY3MoMC4wLCAwLjAsIHRoaXMpO1xufTtcblxuUGxhbmUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQaGFzZXIuR3JvdXAucHJvdG90eXBlKTtcblBsYW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBsYW5lO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxuICogUHVibGljIE1ldGhvZHMgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5QbGFuZS5wcm90b3R5cGUuZGlzcGxheVN0YXR1c1JpbmcgPSBmdW5jdGlvbihkaXNwbGF5c1N0YXR1c1JpbmcpIHtcbiAgdGhpcy5zdGF0dXNSaW5nLmFscGhhID0gZGlzcGxheXNTdGF0dXNSaW5nID8gMC41IDogMC4wO1xuXG4gIGlmKGRpc3BsYXlzU3RhdHVzUmluZykge1xuICAgIHRoaXMuc3RhdHVzUmluZy5saW5lU3R5bGUoNi4wLCAweDNiZWI3Mik7XG4gICAgdGhpcy5zdGF0dXNSaW5nLmRyYXdDaXJjbGUoMCwgMCwgMzAuMCk7IFxuICB9XG59O1xuXG5QbGFuZS5wcm90b3R5cGUudXBkYXRlV2l0aE1vZGVsID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdGhpcy54ID0gbW9kZWwueDtcbiAgdGhpcy55ID0gbW9kZWwueTtcbiAgdGhpcy5hbmdsZSA9IG1vZGVsLmFuZ2xlICogNTcuMjk1Nzc5NTtcblxuICBpZiAobW9kZWwuYmFuayA8IDApXG4gICAgdGhpcy5haXJwbGFuZS5mcmFtZSA9IDI7XG4gIGVsc2UgaWYgKG1vZGVsLmJhbmsgPiAwKVxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAxO1xuICBlbHNlIFxuICAgIHRoaXMuYWlycGxhbmUuZnJhbWUgPSAwO1xufTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbiAqIEZhY3RvcnkgXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5QaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkucHJvdG90eXBlLnBsYW5lID0gZnVuY3Rpb24oeCwgeSwgZ3JvdXApIHtcbiAgaWYodHlwZW9mIGdyb3VwID09PSAndW5kZWZpbmVkJylcbiAgICBncm91cCA9IHRoaXMud29ybGQ7XG4gIHJldHVybiBncm91cC5hZGQobmV3IFBsYW5lKHRoaXMuZ2FtZSwgeCwgeSkpO1xufTsiLCJ2YXIgVXNlcklucHV0U3RhdGUgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvVXNlclN0YXRlJyk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBTQ1N0YXRlTWFuYWdlcigpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBTQ1N0YXRlTWFuYWdlciA9IGZ1bmN0aW9uKGZwcywgZ2FtZUludGVyZmFjZSkge1xyXG4gIHRoaXMuZ2FtZUludGVyZmFjZSA9IGdhbWVJbnRlcmZhY2U7XHJcbiAgdGhpcy5mcmFtZVRpbWUgPSAxMDAwLjAgLyBmcHM7XHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gKiBQcm90b3R5cGVcclxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuU0NTdGF0ZU1hbmFnZXIucHJvdG90eXBlID0ge1xyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogVmFyaWFibGVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICB1c2VySW5wdXRTdGF0ZXM6IFtdLFxyXG4gIGxhc3RVcGRhdGVUaW1lRW5kOiB1bmRlZmluZWQsXHJcbiAgZXN0U2VydmVyVGltZTogdW5kZWZpbmVkLFxyXG4gIGxhc3RTZXJ2ZXJTdGF0ZTogdW5kZWZpbmVkLFxyXG4gIGludGVydmFsSWQ6IHVuZGVmaW5lZCxcclxuICBsYXRlbmN5OiAwLFxyXG4gIGxhc3RTZW5kVG9TZXJ2ZXJUaW1lOiAxMDAwLjAgLyAzMC4wLFxyXG4gIC8qKlxyXG4gICAqIFNlbmQgYW4gdXBkYXRlIHRvIHRoZSBzZXJ2ZXIgZXZlcnkgdGhpcyBzbyBvZnRlbi5cclxuICAgKi9cclxuICBzZXJ2ZXJVcGRhdGVJbnRlcnZhbDogMTAsXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBQcm9wZXJ0aWVzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBnZXQgbm93KCkge1xyXG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgfSxcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIE1ldGhvZHNcclxuICBcXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHBsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuaW50ZXJ2YWxIYW5kbGVyLmJpbmQodGhpcyksIHRoaXMuZnJhbWVUaW1lKTtcclxuICB9LFxyXG4gIHBhdXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbElkKVxyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpXHJcbiAge1xyXG4gICAgaWYgKHRoaXMubmV3U2VydmVyU3RhdGUgJiYgIXRoaXMubGFzdFNlcnZlclN0YXRlKVxyXG4gICAgICB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZSA9IHRoaXMubmV3U2VydmVyU3RhdGU7XHJcblxyXG4gICAgLy8gQXMgbG9uZyBhcyB0aGUgc2VydmVyIGhhcyBuZXZlciBzZW50IHVzIGEgc3RhdGUsIHdlIGRvIG5vdGhpbmcuXHJcbiAgICBpZiAoIXRoaXMubGFzdFNlcnZlclN0YXRlIHx8IHRoaXMubGF0ZW5jeSA9PSAwKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAvLyBUaW1lIHRoaXMgdXBkYXRlIHN0YXJ0ZWRcclxuICAgICAgdXBkYXRlU3RhcnQgPSB0aGlzLm5vdyxcclxuICAgICAgLy8gVGltZSBzaW5jZSBvdXIgbGFzdCB1cGRhdGUgZW5kZWRcclxuICAgICAgZWxhcHNlZCA9IHVwZGF0ZVN0YXJ0IC0gdGhpcy5sYXN0VXBkYXRlVGltZUVuZCxcclxuICAgICAgLy8gVGhlIHN0YXRlIG9mIGFsbCB1c2VyIGlucHV0XHJcbiAgICAgIHVzZXJJbnB1dCA9IHRoaXMuZ2FtZUludGVyZmFjZS51c2VySW5wdXQ7XHJcblxyXG4gICAgdGhpcy5sYXN0VXBkYXRlVGltZUVuZCA9IHRoaXMubm93O1xyXG5cclxuICAgIC8vIFNldCBsYXN0IHNlcnZlciBzdGF0ZSB0byBlaXRoZXIgdGhlIHVwZGF0ZVxyXG4gICAgdGhpcy5sYXN0U2VydmVyU3RhdGUgPSB0aGlzLm5ld1NlcnZlclN0YXRlIHx8IHRoaXMubGFzdFNlcnZlclN0YXRlO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBnYW1lIGludGVyZmFjZSB0byBvbGQgc2VydmVyIHN0YXRlXHJcbiAgICB0aGlzLmdhbWVJbnRlcmZhY2Uuc3RhdGUgPSB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZTtcclxuXHJcbiAgICAvLyBFc3RpbWF0ZSB0aGUgY3VycmVudCBzZXJ2ZXIgdGltZSBhdCB0aGlzIGV4YWN0IHBvaW50ICh0aGUgc2VydmVyIHdpbGwgYmUgYmVoaW5kIHVzIGJ5IGEgcGVyaW9kIG9mIHRpbWUpXHJcbiAgICB0aGlzLmVzdFNlcnZlclRpbWUgPSBNYXRoLnJvdW5kKHRoaXMubmV3U2VydmVyU3RhdGUgPyB0aGlzLm5ld1NlcnZlclN0YXRlLnRpbWUgKyAodGhpcy5sYXRlbmN5IC8gMi4wKSA6IHRoaXMuZXN0U2VydmVyVGltZSArIGVsYXBzZWQpO1xyXG5cclxuICAgIC8vIEVzdGFibGlzaCBvdXIgc2ltdWxhdGlvbiBzdGFydGluZyB0aW1lLlxyXG4gICAgdmFyIHQgPSB0aGlzLmxhc3RTZXJ2ZXJTdGF0ZS50aW1lLFxyXG4gICAgICBzaW1FbGFwc2VkID0gMC4wO1xyXG5cclxuICAgIC8vIEZpbHRlciBvdXQgYW55IG9sZCB1c2VyIGZyYW1lIHN0YXRlc1xyXG4gICAgdGhpcy51c2VySW5wdXRTdGF0ZXMgPSB0aGlzLnVzZXJJbnB1dFN0YXRlcy5maWx0ZXIoZnVuY3Rpb24gKHVzZXJJbnB1dFN0YXRlKSB7XHJcbiAgICAgIHJldHVybiB1c2VySW5wdXRTdGF0ZS50aW1lID4gc2VsZi5sYXN0U2VydmVyU3RhdGUudGltZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNpbXVsYXRlIGFsbCBmcmFtZXMgdGhlIHNlcnZlciBoYXMgbm90IHlldCBwcm9jZXNzZWQuXHJcbiAgICB0aGlzLnVzZXJJbnB1dFN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh1c2VySW5wdXRTdGF0ZSkge1xyXG4gICAgICBzaW1FbGFwc2VkID0gdXNlcklucHV0U3RhdGUudGltZSAtIHQ7XHJcbiAgICAgIHNlbGYuZ2FtZUludGVyZmFjZS5zaW11bGF0ZVVwZGF0ZSh1c2VySW5wdXRTdGF0ZS5pbnB1dCwgc2ltRWxhcHNlZCk7XHJcbiAgICAgIHQgPSB1c2VySW5wdXRTdGF0ZS50aW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2F2ZSBvdXIgY3VycmVudCBzdGF0ZVxyXG4gICAgdmFyIG5ld1VzZXJJbnB1dFN0YXRlID0gbmV3IFVzZXJJbnB1dFN0YXRlKHVzZXJJbnB1dCwgdGhpcy5lc3RTZXJ2ZXJUaW1lKTtcclxuICAgIHRoaXMudXNlcklucHV0U3RhdGVzLnB1c2gobmV3VXNlcklucHV0U3RhdGUpO1xyXG5cclxuICAgIC8vIEZpbmlzaCBzaW1sdWF0aW5nIHRoZSByZW1haW5pbmcgbWlsbGlzZWNvbmRzIGJhc2VkIG9uIHRoZSBjdXJyZW50IHVzZXIgaW5wdXQuXHJcbiAgICB0aGlzLmdhbWVJbnRlcmZhY2Uuc2ltdWxhdGVVcGRhdGUobmV3VXNlcklucHV0U3RhdGUuaW5wdXQsIHRoaXMuZXN0U2VydmVyVGltZSAtIHQpO1xyXG5cclxuICAgIGlmICh0aGlzLmVzdFNlcnZlclRpbWUgLSB0aGlzLmxhc3RTZW5kVG9TZXJ2ZXJUaW1lID4gdGhpcy5zZXJ2ZXJVcGRhdGVJbnRlcnZhbClcclxuICAgIHtcclxuICAgICAgLy8gU2VuZCBvdXIgc3RhdGUgdG8gdGhlIHNlcnZlclxyXG4gICAgICB0aGlzLmdhbWVJbnRlcmZhY2UudXBkYXRlU2VydmVyKG5ld1VzZXJJbnB1dFN0YXRlKTtcclxuXHJcbiAgICAgIHRoaXMubGFzdFNlbmRUb1NlcnZlclRpbWUgPSB0aGlzLmVzdFNlcnZlclRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgaXQsIHNvIHRocm93IGl0IGF3YXkuXHJcbiAgICB0aGlzLm5ld1NlcnZlclN0YXRlID0gdW5kZWZpbmVkO1xyXG4gIH0sXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICAgKiBNZXRob2RzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBpbnRlcnZhbEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTQ1N0YXRlTWFuYWdlcjsiLCJ2YXJcclxuICBHYW1lT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vLi4vc2hhcmVkL2pzL0dhbWVPYmplY3QnKSxcclxuICBXb3JsZCA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9Xb3JsZCcpLFxyXG4gIFBsYXllciA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9nYW1lT2JqZWN0cy9QbGF5ZXInKSxcclxuICBMYXRlbmN5QW5hbHl6ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvTGF0ZW5jeUFuYWx5emVyJyksXHJcbiAgU0NTdGF0ZU1hbmFnZXIgPSByZXF1aXJlKCcuL1NlcnZlckNsaWVudFN0YXRlTWFuYWdlcicpLFxyXG4gIFVzZXJJbnB1dFByb2Nlc3NvciA9IHJlcXVpcmUoJy4uLy4uLy4uL3NoYXJlZC9qcy9Vc2VySW5wdXRQcm9jZXNzb3InKSxcclxuICBIYXNoQXJyYXkgPSByZXF1aXJlKCcuLi8uLi8uLi9zaGFyZWQvanMvbGliL0hhc2hBcnJheScpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogR2xvYmFsc1xyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG52YXIgRlBTID0gNjAsXHJcbiAgU0VSVkVSX1RJTUVPVVRfTVMgPSAxMDAwMCxcclxuICBQTEFORV9HTE9CQUxTID0gUGxheWVyLnByb3RvdHlwZS5HTE9CQUxTO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcclxuICogU2t5RHVlbENsaWVudCgpXHJcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbnZhciBTa3lEdWVsQ2xpZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5sYXRlbmN5QW5hbHl6ZXIgPSBuZXcgTGF0ZW5jeUFuYWx5emVyKCk7XHJcbiAgdGhpcy5zY1N0YXRlTWFuYWdlciA9IG5ldyBTQ1N0YXRlTWFuYWdlcig2MCwgdGhpcyk7XHJcbiAgdGhpcy51c2VySW5wdXRQcm9jZXNzb3IgPSBuZXcgVXNlcklucHV0UHJvY2Vzc29yKCk7XHJcblxyXG4gIHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcclxufTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAqIFByb3RvdHlwZVxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5Ta3lEdWVsQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gICAqIFZhcmlhYmxlc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgc3RhcnRlZDogZmFsc2UsXHJcbiAgaW5wdXQ6IHt9LFxyXG4gIHBsYXllcjogdW5kZWZpbmVkLFxyXG4gIGVycm9yVGV4dDogdW5kZWZpbmVkLFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogUHJvcGVydGllc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgZ2V0IHN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgc2V0IHN0YXRlKHZhbHVlKSB7XHJcbiAgICB0aGlzLndvcmxkLnNldFN0YXRlKHZhbHVlLndvcmxkKTtcclxuICB9LFxyXG4gIGdldCB1c2VySW5wdXQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cDogdGhpcy5pbnB1dC51cC5pc0Rvd24sXHJcbiAgICAgIGRvd246IHRoaXMuaW5wdXQuZG93bi5pc0Rvd24sXHJcbiAgICAgIGxlZnQ6IHRoaXMuaW5wdXQubGVmdC5pc0Rvd24sXHJcbiAgICAgIHJpZ2h0OiB0aGlzLmlucHV0LnJpZ2h0LmlzRG93bixcclxuICAgICAgdHJpZ2dlcjogdGhpcy5pbnB1dC50cmlnZ2VyLmlzRG93blxyXG4gICAgfTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogTWV0aG9kc1xyXG4gIFxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgbGF0ZW5jeUNoZWNrOiBmdW5jdGlvbiAoY291bnQsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgIGkgPSAwO1xyXG4gICAgICBjb3VudCA9IGNvdW50IHx8IDEwO1xyXG5cclxuICAgIHBpbmcoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBwaW5nKCkge1xyXG4gICAgICBzZWxmLmxhdGVuY3lBbmFseXplci5zdGFydFRlc3QoKTtcclxuICAgICAgcG9tZWxvLnJlcXVlc3QoJ3NreWR1ZWwuc2t5ZHVlbEhhbmRsZXIucGluZycsIHNreWR1ZWxfc2t5ZHVlbEhhbmRsZXJfcGluZ0hhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNreWR1ZWxfc2t5ZHVlbEhhbmRsZXJfcGluZ0hhbmRsZXIoKSB7XHJcbiAgICAgIHNlbGYubGF0ZW5jeUFuYWx5emVyLmVuZFRlc3QoKTtcclxuICAgICAgKCsraSA8IGNvdW50KSA/IHBpbmcoKSA6IGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdGFydDogZnVuY3Rpb24gKHJpZCkge1xyXG4gICAgdGhpcy5yaWQgPSByaWQ7XHJcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMubGF0ZW5jeUNoZWNrKDEwLCB0aGlzLnN0YXJ0U2VydmVyQ29ubmVjdGlvbi5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIHN0b3A6IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgIHRoaXMuZXJyb3JUZXh0ID0gcmVhc29uO1xyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5wYXVzZSgpO1xyXG4gIH0sXHJcbiAgc3RhcnRTZXJ2ZXJDb25uZWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLmxhdGVuY3kgPSB0aGlzLmxhdGVuY3lBbmFseXplci5sYXRlbmN5O1xyXG4gICAgcG9tZWxvLnJlcXVlc3QoJ3NreWR1ZWwuc2t5ZHVlbEhhbmRsZXIuc3RhcnQnLCB7XHJcbiAgICAgIHJpZDogdGhpcy5yaWRcclxuICAgIH0sIHRoaXMuc2VydmVyQ29ubmVjdGlvbl9zdGFydGVkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIC8vU0NTdGF0ZU1hbmFnZXIgSW50ZXJmYWNlXHJcbiAgc2ltdWxhdGVVcGRhdGU6IGZ1bmN0aW9uICh1c2VySW5wdXQsIGVsYXBzZWQpIHtcclxuICAgIGVsYXBzZWQgPSAgZWxhcHNlZCAvIDEwMDAuMDtcclxuXHJcbiAgICBpZiAoZWxhcHNlZCA+IFNFUlZFUl9USU1FT1VUX01TKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnN0b3AoJ1NlcnZlciBkaXNjb25uZWN0ZWQnKTsgICAgICBcclxuICAgIH1cclxuICAgIGlmIChlbGFwc2VkID4gMC4yKVxyXG4gICAgICB0aHJvdyBFcnJvcignRWxhcHNlZCBpcyB3YXl5eXkgdG9vIGhpZ2ggbWFuLiBEaWQgc2VydmVyIGRpc2Nvbm5lY3Q/Jyk7XHJcblxyXG4gICAgdGhpcy51c2VySW5wdXRQcm9jZXNzb3IudXBkYXRlKHVzZXJJbnB1dCwgZWxhcHNlZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy53b3JsZC51cGRhdGUoZWxhcHNlZCk7XHJcbiAgfSxcclxuICAvL1NDU3RhdGVNYW5hZ2VyIEludGVyZmFjZVxyXG4gIHVwZGF0ZVNlcnZlcjogZnVuY3Rpb24gKHVzZXJJbnB1dFN0YXRlKSB7XHJcbiAgICB0aGlzLmxhdGVuY3lBbmFseXplci5zdGFydFRlc3QoKTtcclxuICAgIHBvbWVsby5yZXF1ZXN0KCdza3lkdWVsLnNreWR1ZWxIYW5kbGVyLnVzZXJJbnB1dCcsIHRoaXMudXNlcklucHV0LCB0aGlzLnNvY2tldF91cGRhdGVTZXJ2ZXJSZXNwb25zZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBzZXR1cFN0YXJ0U3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbCB3b3JsZCBzdGF0ZScsIHN0YXRlLndvcmxkKTtcclxuXHJcbiAgICB0aGlzLndvcmxkLnNldFN0YXRlKHN0YXRlLndvcmxkKTtcclxuXHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMud29ybGQuZ2V0Q2hpbGRyZW4oKS5nZXQodGhpcy51aWQpO1xyXG5cclxuICAgIGlmICghdGhpcy5wbGF5ZXIpXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nIChzdGF0ZSk7XHJcbiAgICAgIHRocm93IEVycm9yKCdQbGF5ZXIgY291bGQgbm90IGJlIGZvdW5kIGluIGluY29taW5nIHN0YXRlIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubmV3U2VydmVyU3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICB0aGlzLnNjU3RhdGVNYW5hZ2VyLnBsYXkoKTtcclxuICB9LFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXHJcbiAgICogRXZlbnRzXHJcbiAgXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICBzZXJ2ZXJDb25uZWN0aW9uX3N0YXJ0ZWRIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdGhpcy51aWQgPSBkYXRhLnVpZDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnU0VSVkVSIENPTk5FQ1RJT04gc3RhcnRlZCcsIGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coJ1dBSVRJTkcgZm9yIHNlcnZlciBzdGF0ZScpO1xyXG5cclxuICAgIHBvbWVsby5vbignc2VydmVyU3RhdGUnLCB0aGlzLnNvY2tldF9zZXJ2ZXJTdGF0ZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5zY1N0YXRlTWFuYWdlci5wbGF5KCk7XHJcbiAgfSxcclxuICBzb2NrZXRfc2VydmVyU3RhdGVIYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgaWYgKCF0aGlzLnNjU3RhdGVNYW5hZ2VyLmxhc3RTZXJ2ZXJTdGF0ZSlcclxuICAgICAgdGhpcy5zZXR1cFN0YXJ0U3RhdGUoZGF0YSk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc2NTdGF0ZU1hbmFnZXIubmV3U2VydmVyU3RhdGUgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc29ja2V0X3VwZGF0ZVNlcnZlclJlc3BvbnNlSGFuZGxlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHRoaXMubGF0ZW5jeUFuYWx5emVyLmVuZFRlc3QoKTtcclxuICB9XHJcbn07XHJcblxyXG53aW5kb3cuY2xpZW50ID0gbmV3IFNreUR1ZWxDbGllbnQoKTtcclxuIiwiLyogYW4gYWpheCBsb2cgZmlsZSB0YWlsZXIgLyB2aWV3ZXJcclxuY29weXJpZ2h0IDIwMDcgam9obiBtaW5uaWhhbi5cclxuIFxyXG5odHRwOi8vZnJlZXBvc2l0b3J5LmNvbVxyXG4gXHJcblJlbGVhc2VkIHVuZGVyIHRoZXNlIHRlcm1zXHJcbjEuIFRoaXMgc2NyaXB0LCBhc3NvY2lhdGVkIGZ1bmN0aW9ucyBhbmQgSFRNTCBjb2RlIChcInRoZSBjb2RlXCIpIG1heSBiZSB1c2VkIGJ5IHlvdSAoXCJ0aGUgcmVjaXBpZW50XCIpIGZvciBhbnkgcHVycG9zZS5cclxuMi4gVGhpcyBjb2RlIG1heSBiZSBtb2RpZmllZCBpbiBhbnkgd2F5IGRlZW1lZCB1c2VmdWwgYnkgdGhlIHJlY2lwaWVudC5cclxuMy4gVGhpcyBjb2RlIG1heSBiZSB1c2VkIGluIGRlcml2YXRpdmUgd29ya3Mgb2YgYW55IGtpbmQsIGFueXdoZXJlLCBieSB0aGUgcmVjaXBpZW50LlxyXG40LiBZb3VyIHVzZSBvZiB0aGUgY29kZSBpbmRpY2F0ZXMgeW91ciBhY2NlcHRhbmNlIG9mIHRoZXNlIHRlcm1zLlxyXG41LiBUaGlzIG5vdGljZSBtdXN0IGJlIGtlcHQgaW50YWN0IHdpdGggYW55IHVzZSBvZiB0aGUgY29kZSB0byBwcm92aWRlIGF0dHJpYnV0aW9uLlxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdCgpIHtcclxuIHZhciByZXF1ZXN0ID0gbnVsbDtcclxuICB0cnkge1xyXG4gICByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgfSBjYXRjaCAodHJ5bWljcm9zb2Z0KSB7XHJcbiAgIHRyeSB7XHJcbiAgICAgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIik7XHJcbiAgIH0gY2F0Y2ggKG90aGVybWljcm9zb2Z0KSB7XHJcbiAgICAgdHJ5IHtcclxuICAgICAgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7XHJcbiAgICAgfSBjYXRjaCAoZmFpbGVkKSB7XHJcbiAgICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gaWYgKHJlcXVlc3QgPT0gbnVsbCkge1xyXG4gICBhbGVydChcIkVycm9yIGNyZWF0aW5nIHJlcXVlc3Qgb2JqZWN0IVwiKTtcclxuIH0gZWxzZSB7XHJcbiAgIHJldHVybiByZXF1ZXN0O1xyXG4gfVxyXG59XHJcbiBcclxudmFyIHJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KCk7XHJcblxyXG53aW5kb3cuZ2V0TG9nID0gZnVuY3Rpb24odGltZXIpIHtcclxuICB2YXIgdXJsID0gXCJodHRwOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICE9ICd3d3cuc2t5ZHVlbC5jb20nID8gJzozMDAxJyA6ICcnKSArIFwiL2xvZy9nYW1lLXNlcnZlci5sb2dcIjtcclxuICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHVwZGF0ZVBhZ2U7XHJcbiAgcmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gIHN0YXJ0VGFpbCh0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0VGFpbCh0aW1lcikge1xyXG4gIGlmICh0aW1lciA9PSBcInN0b3BcIikge1xyXG4gICAgc3RvcFRhaWwoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdCA9IHNldFRpbWVvdXQoXCJnZXRMb2coKVwiLCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BUYWlsKCkge1xyXG4gIGNsZWFyVGltZW91dCh0KTtcclxuICB2YXIgcGF1c2UgPSBcIlRoZSBsb2cgdmlld2VyIGhhcyBiZWVuIHBhdXNlZC4gVG8gYmVnaW4gdmlld2luZyBhZ2FpbiwgY2xpY2sgdGhlIFN0YXJ0IFZpZXdlciBidXR0b24uXFxuXCI7XHJcbiAgbG9nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dcIik7XHJcbiAgdmFyIG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXVzZSk7XHJcbiAgbG9nRGl2LnJlcGxhY2VDaGlsZChuZXdOb2RlLCBsb2dEaXYuY2hpbGROb2Rlc1swXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhZ2UoKSB7XHJcbiAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIHZhciBjdXJyZW50TG9nVmFsdWUgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dC5zcGxpdChcIlxcblwiKTtcclxuICAgICAgZXZhbChjdXJyZW50TG9nVmFsdWUpO1xyXG4gICAgICBsb2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcclxuICAgICAgdmFyIGxvZ0xpbmUgPSAnICc7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjdXJyZW50TG9nVmFsdWUubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgbG9nTGluZSArPSBjdXJyZW50TG9nVmFsdWVbaV0gKyBcIlxcblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxvZ0Rpdi5pbm5lckhUTUwgPSBsb2dMaW5lO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhIFJlcXVlc3Qgc3RhdHVzIGlzIFwiICsgcmVxdWVzdC5zdGF0dXMpO1xyXG4gIH1cclxufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
