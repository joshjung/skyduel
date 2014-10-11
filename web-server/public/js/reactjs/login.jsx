/** @jsx React.DOM */
var rjLogin = React.createClass({
  componentDidMount: function () {
    $(this.refs.loginUser.getDOMNode()).val('user' + Math.round(Math.random() * 100));
    $(this.refs.channel.getDOMNode()).val('chan');

    $(this.refs.loginError.getDOMNode()).hide();
    $(this.refs.login.getDOMNode()).show();
  },
  render: function() {
    return (
      <div className="container-fluid"  ref="login">
        <div className="row">
          <section id="loginView" className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 id="loginTitle" className="text-center login-title">SkyDuel</h1>
            <div className="account-wall">
             <div className="form-signin">
              <input id="loginUser" ref="loginUser" type="text" placeholder="Username" />
              <input id="channelList" ref="channel" name="channels" type="text" placeholder="Channel" />
              <button className="btn btn-lg btn-primary btn-block" onClick={this.login_clickHandler}>Sign in</button>
              <a href="/log/game-server.log" target="_blank">game-server.log</a><br/>
              <a href="/log/web-server.log" target="_blank">web-server.log</a>
             </div>
            </div>
            <div id="loginError" ref="loginError"/>
          </section>
        </div>
      </div>);
  },
  login_clickHandler: function (evt) {
    var self = this;

    var username = $("#loginUser").val(),
      rid = $('#channelList').val();

    if (username.length > 20 || username.length == 0 || rid.length > 20 || rid.length == 0) {
      showError(LENGTH_ERROR);
      return false;
    }

    if (!reg.test(username) || !reg.test(rid)) {
      $("#loginError").text(content);
      $("#loginError").show();
      return false;
    }

    //query entry of connection
    queryEntry(username, function(host, port) {
      pomelo.init({
        host: host,
        port: port,
        log: true
      }, function() {
        pomelo.request('connector.entryHandler.enter', {
          username: username,
          rid: rid
        }, function(data) {
          if (data.error) {
            showError(DUPLICATE_ERROR);
            return;
          }

          $(self.refs.login.getDOMNode()).hide();

          self.props.main.showGame();
          
          setName();
          setRoom();
          //showChat();
          //initUserList(data);

          window.client.start(rid);
        });
      });
    });
  }
});
