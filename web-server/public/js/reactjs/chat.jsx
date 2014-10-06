/** @jsx React.DOM */
var rjChat = React.createClass({
  componentDidMount: function () {
    var self = this;

    $(this.refs.chatHistory.getDOMNode()).show();
    $(this.refs.toolbar.getDOMNode()).hide();

    pomelo.on('onChat', function(data) {
      this.addMessage(data.from, data.target, data.msg);

      $("#chatHistory").show();

      if (data.from !== username)
        tip('message', data.from);
    });

    pomelo.on('onAdd', function(data) {
      var user = data.user;
      tip('online', user);
      addUser(user);
    });

    pomelo.on('onLeave', function(data) {
      var user = data.user;
      tip('offline', user);
      removeUser(user);
    });

    //handle disconect message, occours when the client is disconnect with servers
    pomelo.on('disconnect', function(reason) {
      self.props.main.showLogin();
    });

    //deal with chat mode.
    $("#entry").keypress(function(e) {
      var route = "skyduel.skyduelHandler.send",
        target = $("#usersList").val();

      if (e.keyCode != 13)
        return;

      var msg = $("#entry").attr("value").replace("\n", "");

      if (!util.isBlank(msg)) {
        pomelo.request(route, {
          rid: rid,
          content: msg,
          from: username,
          target: target
        }, function(data) {
          $("#entry").attr("value", "");

          if (target != '*' && target != username) {
            addMessage(username, target, msg);

            $("#chatHistory").show();
          }
        });
      }
    });
  },
  render: function() {
    return (
      <div id="chat">
        <div id = "chatHistory" ref="chatHistory"/>
        <div id="toolbar" ref="toolbar">
          <ul id="status">
            <li>users:
              <select name="users" id="usersList">
                <option value="*">all</option>
              </select>
            </li>
            <li>name:
              <span id = "name"></span>
            </li>
            <li>room:
              <span id = "room"></span>
            </li>
          </ul>
          <input tabindex="1" type="text" id="entry" />
        </div>
      </div>);
  }
});