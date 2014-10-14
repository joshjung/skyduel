/** @jsx React.DOM */
var GATE_PORT = 3080,
  GATE_HOST = window.location.hostname,
  USERNAME_REGEX = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
  mockUserNames = ['balloon_buster', 'bam', 'bird', 'black_swallow', 'blackie','buck',
  'cowboy', 'demon_of_rabaul', 'drunken_duncan', 'flying_knight', 'hawkeye', 'little_dragon', 'moose', 'mad_major',
  'petit_rouge', 'pyker', 'red_baron', 'the_red_baron', 'red_knight', 'robin', 'snow_eagle', 'tiger_tim', 'timbertoes', 'wiggly_wings', 'white_eagle', 'wrong_way'];

/**========================================================================*\
 * Login Process:
 * 1) Request gate access
 * 2) Gate response contains 500 ERR OR host:port where connector resides
 * 3) Connect ot host:port connector
\**========================================================================*/
var rjLogin = React.createClass({
  /*==================================================*\
   * Methods
  \*==================================================*/
  componentDidMount: function () {
    $(this.refs.loginUser.getDOMNode()).val(mockUserNames[Math.floor(Math.random() * mockUserNames.length)]);
    $(this.refs.channel.getDOMNode()).val('chan');

    $(this.refs.loginError.getDOMNode()).hide();
    $(this.refs.login.getDOMNode()).show();

    pomelo.on('disconnect', this.pomelo_disconnectHandler.bind(this));
  },
  render: function() {
    return (
      <div className="container-fluid"  ref="login">
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <img src="/images/skyduelLogo800.png" />
          </div>
        </div>
        <div className="row">
          <section id="loginView" className="col-sm-7 col-md-7 col-md-offset-2 panel">
           <div className="form-signin">
            <div className="float-right">
              <button className="btn btn-lg btn-primary" onClick={this.login_clickHandler}>Join game...</button>
            </div>
            <input id="loginUser" ref="loginUser" type="text" placeholder="Username" />
            <input id="channelList" ref="channel" name="channels" type="text" placeholder="Channel" />
           </div>
            <div id="loginError" ref="loginError"/>
          </section>
        </div>
      </div>);
  },
  showError: function (content) {
    $('#loginError').text(content);
    $('#loginError').show();
  },
  /**
   * Queries the gateHandler.js on the server side for a connector.
   */
  initializeConnectionToGate: function () {
    // Begin connection to the socket.
    pomelo.init({
      host: GATE_HOST,
      port: GATE_PORT,
      log: true
    }, this.pomelo_initHandler.bind(this));
  },
  enterConnector: function (host, port) {
    pomelo.init({
      host: host,
      port: port,
      log: true
    }, this.connector_initHandler.bind(this));
  },
  /*==================================================*\
   * Events
  \*==================================================*/
  login_clickHandler: function (evt) {
    // Set globals
    username = $("#loginUser").val();
    rid = $('#channelList').val();

    if (username.length > 20 || username.length == 0 || rid.length > 20 || rid.length == 0) {
      this.showError(LENGTH_ERROR);
    }

    if ( !USERNAME_REGEX.test(username) || !USERNAME_REGEX.test(rid)) {
      this.showError('Username/game id is invalid. Do not user special characters!');
    }

    this.initializeConnectionToGate();
  },
  pomelo_initHandler: function (clientId) {
    // Now that we are connected, request a connector.
    pomelo.request('gate.gateHandler.requestConnectorForClient', {
      clientId: clientId
    }, this.gateHandler_queryEntryResponseHandler.bind(this));
  },
  gateHandler_queryEntryResponseHandler: function (data) {
    this.ignoreDisconnect= true;
    pomelo.disconnect();
    this.ignoreDisconnect= false;

    if (data.code === 500) {
      this.showError(LOGIN_ERROR + ':' + data.reason);
      return;
    }

    // We have data and it is not an error! We can now connect to our game.
    this.enterConnector(data.host, data.port);
  },
  connector_initHandler: function(data) {
    pomelo.request('connector.entryHandler.enter', {
      username: username,
      rid: rid
    }, this.connector_enterResponseHandler.bind(this));
  },
  connector_enterResponseHandler: function (data) {
    if (data.error) {
      this.showError(DUPLICATE_ERROR);
      return;
    }

    $(this.refs.login.getDOMNode()).hide();

    this.props.main.showGame();
    
    window.client.start(rid);
  },
  pomelo_disconnectHandler: function (reason) {
    if (this.ignoreDisconnect)
      return;

    var reasonDetail = '';

    if (reason.type == 'close')
    {
      reasonDetail = 'Socket connection was closed. Server is probably down temporarily.';
    }

    this.showError('Could not connect to the server. Please try again shortly. ' + reasonDetail);
  }
});