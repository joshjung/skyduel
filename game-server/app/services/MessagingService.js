/*===================================================*\
 * MessagingService()
\*===================================================*/
var MessagingService = function(app) {
  this.app = app;
};

/*===================================================*\
 * Prototype
\*===================================================*/
MessagingService.prototype = {
  send: function(from, message, type) {
    var channel = this.app.get('channelService').getChannel(this.rid, false);

    if (channel)
      channel.pushMessage('message', {
        message: message,
        from: from,
        type: type,
        time: (new Date).getTime()
      });
  }
};

/*===================================================*\
 * Export
\*===================================================*/
module.exports = MessagingService;