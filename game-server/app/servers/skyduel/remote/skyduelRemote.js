module.exports = function(app) {
  return new ChatRemote(app);
};

var ChatRemote = function(app) {
  this.app = app;
  this.channelService = app.get('channelService');
};

ChatRemote.prototype.add = function(uid, sid, name, flag, cb) {
  var channel = this.channelService.getChannel(name, flag);
  var username = uid.split('*')[0];
  var param = {
    route: 'onAdd',
    user: username
  };
  
  channel.pushMessage(param);

  if (!!channel) {
    channel.add(uid, sid);
  }

  cb(this.get(name, flag));
};

ChatRemote.prototype.get = function(name, flag) {
  var users = [];
  var channel = this.channelService.getChannel(name, flag);
  
  if (!!channel) {
    users = channel.getMembers();
  }

  for (var i = 0; i < users.length; i++) {
    users[i] = users[i].split('*')[0];
  }

  return users;
};

ChatRemote.prototype.kick = function(uid, sid, name, cb) {
  var channel = this.channelService.getChannel(name, false);
  // leave channel
  if (!!channel) {
    channel.leave(uid, sid);
  }
  var username = uid.split('*')[0];
  var param = {
    route: 'onLeave',
    user: username
  };
  channel.pushMessage(param);
  cb();
};