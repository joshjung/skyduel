/*===================================================*\
 * Requires
\*===================================================*/
var Util = require('../../../shared/js/skyduel/util'),
  HashArray = require('../../../shared/js/lib/HashArray'),
  JClass = require('jclass'),
  GameControllerFactory = require('../../../shared/js/skyduel/controllers/GameControllerFactory');

/*===================================================*\
 * Globals
\*===================================================*/
var FPS = 30,
  MIN_FRAME_TIME = 0.3,
  /**
   * How many seconds to wait to update the clients with data.
   */
  CLIENT_UPDATE_FPS = 30;

/*===================================================*\
 * SkyDuelService()
\*===================================================*/
var SkyDuelService = JClass.extend({
  init: function(app) {
    this.app = app;

    this.messaging = app.get('messagingService');
    this.git = app.get('gitService');
    this.game = GameControllerFactory.newInstanceOf(0);

    this.lastTime = undefined;
    this.elapsed = undefined;
    this.clientUpdateTimer = 0;

    this.id = 'sid:' + Math.round(Math.random() * 100).toString(16) + ':' + process.pid;

    setInterval(this.__frameHandler.bind(this), 1000 / FPS);
  },
  /*============================*\
   * Properties
  \*============================*/
  __getNow: function() {
    return (new Date()).getTime();
  },
  /*============================*\
   * Methods
  \*============================*/
  __sendState: function() {
    var channel = this.app.get('channelService').getChannel(this.rid, false);

    if (channel)
      channel.pushMessage('serverState', this.game.getState());
  },
  /*============================*\
   * Events
  \*============================*/
  /**
   * Called once per frame, defined by the FPS property above.
   */
  __frameHandler: function () {
    var self = this;

    if (!this.lastTime)
      return this.lastTime = this.__getNow();

    // Elapsed is 0.0-0.3 seconds.
    this.elapsed =  (this.__getNow() - this.lastTime) / 1000.0;
    this.lastTime = this.__getNow();
    this.elapsed = (this.elapsed > MIN_FRAME_TIME ? MIN_FRAME_TIME : this.elapsed);

    this.game.serverUpdate(this.elapsed);

    if ((this.clientUpdateTimer += this.elapsed) > (1000.0 / CLIENT_UPDATE_FPS))
    {
      this.__sendState();
      this.clientUpdateTimer = 0;
    }
  },
  /**
   * Called when the socket receives user input.
   */
  session_userInputHandler: function(msg, session) {
    this.game.addUserInputForSession(session.uid);
  },
  /**
   * Called by the skyduelHandler whenever a user disconnects or is forcibly removed from
   * the game by a connection issue.
   */
  session_disconnectedHandler: function (uid) {
    this.world.players.removeByKey(uid);
    this.world.getChildren().get(uid).destroy();
  },
  /**
   * Called by the skyduelHandler whenever a new user connects.
   */
  session_connectedHandler: function(session, rid) {
    this.startSession = this.startSession || session;
    this.rid = rid;
    this.game.addSession(session);
  }
});

/*===================================================*\
 * Export
\*===================================================*/
module.exports = SkyDuelService;