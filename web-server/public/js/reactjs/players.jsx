/** @jsx React.DOM */
var rjPlayers = React.createClass({
  componentDidMount: function () {
    this.setState({players: []});
    setInterval(this.update, 500);  
  },
  render: function() {
    if (!this.state)
      return <div/>;
    var playerList = this.state.players.map(function (player) {
      var st = {color: '#' + player.colorHex, 'font-weight': 'bold'};
      var isYou = (window.client.uid == player.uid) ? '>' : '';
      return (<div style={st} className="player">
        <span className="player-name">{isYou}{player.username}</span>
        <span className="player-score">{player.kills} : {player.deaths}</span>
        </div>);
    })
    return (<div id="players">{playerList}</div>);
  },
  update: function () {
    this.setState({players: window.client.playerMetaData});
  }
});