/** @jsx React.DOM */
var rjMain = React.createClass({
  render: function() {
    return (
      <div id="app">
        <rjLogin />
        <div id="chatHistory"></div>
        <div id="toolbar">
          <ul id="status">
            <li>
              users:
              <select name="users" id="usersList">
                <option value="*">
                  all
                </option>
              </select>
            </li>
            <li>
              name:
              <span id="name">
              </span>
            </li>
            <li>
              room:
              <span id="room">
              </span>
            </li>
          </ul>
          <input tabindex="1" type="text" id="entry" />
        </div>
      </div>
    );
  }
});

React.renderComponent(<rjMain />, document.getElementById('rjMain'));