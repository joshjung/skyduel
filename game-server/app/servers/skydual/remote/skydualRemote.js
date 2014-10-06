module.exports = function(app) {
  return new SkyDualRemote(app);
};

var SkyDualRemote = function(app) {
  this.app = app;

  this.channelService = app.get('channelService');
};

SkyDualRemote.prototype.add = function(uid, sid, name, flag, cb) {
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

  cb(this.get(name, flag));
};

SkyDualRemote.prototype.get = function(name, flag) {
  var users = [],
    channel = this.channelService.getChannel(name, flag);

  if (!!channel) {
    users = channel.getMembers();
  }

  for (var i = 0; i < users.length; i++) {
    users[i] = users[i].split('*')[0];
  }

  return users;
};

SkyDualRemote.prototype.kick = function(uid, sid, name) {
  var channel = this.channelService.getChannel(name, false);

  // leave channel
  if (!!channel) {
    channel.leave(uid, sid);
  }

  var username = uid.split('*')[0],
    param = {
      route: 'onLeave',
      user: username
    };

  channel.pushMessage(param);
};