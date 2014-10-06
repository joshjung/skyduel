/** @jsx React.DOM */
var rjLogin = React.createClass({
  render: function() {
    return (
      <div id="loginView">
        <div id="loginTitle">
          SkyDuel
        </div>
        <table>
          <tr>
            <td>
              <input id="loginUser" type="text" placeholder="Username" />
            </td>
          </tr>
          <tr>
            <td>
              <input name="channels" type="text" id="channelList" placeholder="Channel" />
            </td>
          </tr>
          <tr>
            <td>
              <input id="login" type='button' value="Start!" />
            </td>
          </tr>
        </table>
        <div id="loginError" />
      </div>);
  }
});