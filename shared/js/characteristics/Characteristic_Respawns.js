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