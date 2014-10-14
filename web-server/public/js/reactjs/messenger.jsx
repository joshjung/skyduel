/** @jsx React.DOM */
var rjMessenger = React.createClass({
  componentDidMount: function () {
    this.history = '<h1>Welcome to Skyduel!!</h1>';

    pomelo.on('message', this.pomelo_messageHandler.bind(this));
    pomelo.on('disconnect', this.pomelo_disconnectHandler.bind(this));

    $(this.refs.iChat.getDOMNode()).keypress(this.iChat_keyPressHandler);
  },
  receive: function (from, message, type) {
    $('#history').append('<strong>' + from + '</strong>: ' + this.stripTags(message) + '<br/><div class=\'line\'');
  },
  stripTags: function(value)
  {
     return value.replace(/<(?:.|\n)*?>/gm, '');
  },
  send: function (message) {
    pomelo.request('skyduel.messagingHandler.send', {
      rid: window.client.rid,
      message: message,
      from: window.client.username,
      type: 'chat'
    }, this.pomelo_messageResponseHandler.bind(this));
  },
  render: function() {
    return (
      <div id="messenger" className="panel">
        <div id="history">{this.history}</div>
        <div id="input">
          <input id="iChat" ref="iChat" type="text" placeholder="Chat publicly here..." />
        </div>
      </div>);
  },
  pomelo_messageHandler: function (data)  {
    this.receive(data.from, data.message, data.type);
  },
  pomelo_messageResponseHandler: function (data) {
    $(this.refs.iChat.getDOMNode()).attr('value', '');
  },
  pomelo_disconnectHandler: function (reason) {
    console.log('disconnected received', reason);
    this.props.main.showLogin();
  },
  iChat_keyPressHandler: function(e) {
    if (e.keyCode != 13)
      return;

    message = $(this.refs.iChat.getDOMNode()).val().replace("\n", "");

    if (message && message != '') {
      this.send(message);
    }
  }
});