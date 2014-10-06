/** @jsx React.DOM */
var rjLogin = React.createClass({
  componentDidMount: function () {
    $(this.refs.loginUser.getDOMNode()).val('user' + Math.round(Math.random() * 100));
    $(this.refs.channel.getDOMNode()).val('chan');

    $(this.refs.loginError.getDOMNode()).show();
    $(this.refs.loginUser.getDOMNode()).show();
  },
  render: function() {
    return (
      <div id="loginView">
        <div id="loginTitle">
          SkyDuel
        </div>
        <table>
          <tr>
            <td>
              <input id="loginUser" ref="loginUser" type="text" placeholder="Username" />
            </td>
          </tr>
          <tr>
            <td>
              <input id="channelList" ref="channel" name="channels" type="text" placeholder="Channel" />
            </td>
          </tr>
          <tr>
            <td>
              <input id="login" type='button' value="Start!" onClick={this.login_clickHandler} />
            </td>
          </tr>
        </table>
        <div id="loginError" ref="loginError"/>
      </div>);
  },
  login_clickHandler: function (evt) {
    var self = this;

    username = $("#loginUser").val();
    rid = $('#channelList').val();

    if (username.length > 20 || username.length == 0 || rid.length > 20 || rid.length == 0) {
      showError(LENGTH_ERROR);
      return false;
    }

    if (!reg.test(username) || !reg.test(rid)) {
      showError(NAME_ERROR);
      return false;
    }

    //query entry of connection
    queryEntry(username, function(host, port) {
      pomelo.init({
        host: host,
        port: port,
        log: true
      }, function() {
        var route = "connector.entryHandler.enter";
        pomelo.request(route, {
          username: username,
          rid: rid
        }, function(data) {
          if (data.error) {
            showError(DUPLICATE_ERROR);
            return;
          }
          console.log('Showing chatroom!');

          self.props.main.showGame();
          
          setName();
          setRoom();
          showChat();
          initUserList(data);

          window.skyduel.start({width: 800, height: 600});
        });
      });
    });
  }
});