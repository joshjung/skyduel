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
      var phst = {'background-color': '#' + player.colorHex, width: Math.round(player.health/2) + 'px', height: '14px'};
      var isYou = (window.client.uid == player.uid) ? '>' : '';
      var stat = player.health ? (<div className="player-health-wrapper">
            <div style={phst}/>
          </div>) : (<span>DEAD </span>);
      return (<div style={st} className="player">
        <span className="player-name">{isYou}{player.username}</span>
        
        <span className="player-score">{stat}{player.kills} : {player.deaths}</span>
        </div>);
    })
    return (<div id="players">{playerList}</div>);
  },
  update: function () {
    this.setState({players: window.client.playerMetaData});
  }
});