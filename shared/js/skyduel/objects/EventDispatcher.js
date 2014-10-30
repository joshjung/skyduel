/*===================================================*\
 * Requires
\*===================================================*/
var JClass = require('jclass'),
	EventEmitter = require('events').EventEmitter;

/*===================================================*\
 * GameObject()
\*===================================================*/
var EventDispatcher = module.exports = JClass.extend(EventEmitter.prototype);