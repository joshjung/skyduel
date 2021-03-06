/*===================================================*\
 * Requires
\*===================================================*/
var Util = require('../../../shared/js/skyduel/util'),
  HashArray = require('hasharray'),
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
		this.game.messaging = this.messaging;

    this.lastTime = undefined;
    this.elapsed = undefined;
    this.clientUpdateTimer = 0;

    this.id = 'sid:' + Math.round(Math.random() * 100).toString(16) + ':' + process.pid;
    this.interval = undefined;
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
    else
      console.log('WARNING: attempted to push to channel but does not exist', this.rid)
  },
  /*============================*\
   * Events
  \*============================*/
  __start: function () {
    this.interval = setInterval(this.__frameHandler.bind(this), 1000 / FPS);
  },
  __reset: function () {
    this.game.reset();
    this.game.start();
    clearInterval(this.interval);
  },
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

    this.clientUpdateTimer += this.elapsed;

    if (this.clientUpdateTimer > CLIENT_UPDATE_FPS / 1000.0)
    {
      this.__sendState();
      this.clientUpdateTimer = 0;
    }
  },
  /**
   * Called when the socket receives user input.
   */
  session_userInputHandler: function(msg, session) {
    this.game.addUserInputForSession(session.uid, msg);
  },
  /**
   * Called by the skyduelHandler whenever a user disconnects or is forcibly removed from
   * the game by a connection issue.
   */
  session_disconnectedHandler: function (uid) {
    console.log('SESSION DISCONNECTED:',uid);
    this.game.world.players.removeByKey(uid);
    this.game.world.getChildren().get(uid).destroy();

    if (this.game.world.getChildren().getAsArray('player').length == 0)
      this.__reset();
  },
  /**
   * Called by the skyduelHandler whenever a new user connects.
   */
  session_connectedHandler: function(session, rid) {
    this.startSession = this.startSession || session;
    this.rid = rid;
    console.log('SESSION CONNECTED:',session.uid);

    if (!this.interval)
    {
      this.__reset();
      this.__start();
    }

    this.game.addSession(session);
  }
});

/*===================================================*\
 * Export
\*===================================================*/
module.exports = SkyDuelService;