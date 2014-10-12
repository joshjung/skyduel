/*===================================================*\
 * SkyduelRemote()
\*===================================================*/
var SkyduelRemote = function(app) {
  this.app = app;
  this.channelService = app.get('channelService');
};

/*===================================================*\
 * SkyduelRemote Prototype
\*===================================================*/
SkyduelRemote.prototype = {
  add: function(uid, sid, name, flag, cb) {
    var channel = this.channelService.getChannel(name, flag),
      username = uid.split('*')[0],
      param = {
        route: 'onAdd',
        user: username
      };
    
    channel.pushMessage(param);

    if (!!channel) {
      channel.add(uid, sid);
    }

    cb(this.getUserList(name, flag));
  },
  getUserList: function(name, flag) {
    var channel = this.channelService.getChannel(name, flag),
      users = !!channel ? channel.getMembers() : [];

    return users.map(function (user) {
      return user.split('*')[0];
    });
  },
  kick: function(uid, sid, name, cb) {
    var username = uid.split('*')[0],
      param = {
        route: 'onLeave',
        user: username
      },
      channel = this.channelService.getChannel(name, false);

    if (!!channel)
      channel.leave(uid, sid);

    channel.pushMessage(param);

    cb();
  }
};

/*===================================================*\
 * Exports
\*===================================================*/
module.exports = function(app) {
  return new SkyduelRemote(app);
};
