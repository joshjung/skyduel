/*===================================================*\
 * Requires
\*===================================================*/
var chatRemote = require('../remote/skyduelRemote'),
  SkyDuelServer = require('../../../main/SkyDuelServer');

/*===================================================*\
 * SkyDuelHandler()
\*===================================================*/
var SkyDuelHandler = function(app) {
  this.app = app;
};

/*===================================================*\
 * prototype
\*===================================================*/
SkyDuelHandler.prototype = {
  /*========================*\
   * Variables
  \*========================*/
  server: undefined,
  /*========================*\
   * Client Interface
  \*========================*/
  ping: function (msg, session, next) {
    next(null, {code: 200});
  },
  start: function (msg, session, next) {
    console.log('skyduelHandler: start');
    if (!this.server)
    {
      this.server = new SkyDuelServer(this, msg, session);
    }
    else
    {
      this.server.addPlayerFor(session);  
    }

    next(null, {
      code: 200,
      uid: session.uid
    });
  },
  userInput: function (msg, session, next) {
    if (this.server)
      this.server.socket_userInputHandler(msg, session)
    
    next(null, {code: 200});
  }
  // ,sendChat: function(msg, session, next) {
  //   var rid = session.get('rid'),
  //     username = session.uid.split('*')[0],
  //     channelService = this.app.get('channelService'),
  //     param = {
  //       msg: msg.content,
  //       from: username,
  //       target: msg.target
  //     };
    
  //   channel = channelService.getChannel(rid, false);

  //   if(msg.target == '*') {
  //     channel.pushMessage('onChat', param);
  //   }
  //   else {
  //     var tuid = msg.target + '*' + rid,
  //       tsid = channel.getMember(tuid)['sid'];

  //     channelService.pushMessageByUids('onChat', param, [{
  //       uid: tuid,
  //       sid: tsid
  //     }]);
  //   }

  //   next(null, {route: msg.route});
  // }
};

/*===================================================*\
 * exports
\*===================================================*/
module.exports = function(app) {
  return new SkyDuelHandler(app);
};