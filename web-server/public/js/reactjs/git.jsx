/** @jsx React.DOM */
var rjGit = React.createClass({
  componentDidMount: function () {
    var self = this;
    self.setState({entries: []});
    $.ajax({
      url: 'gitEntries.json',
      success: function (data) {
        console.log('Entries received!', data)
        self.setState({entries: data});
      },
      dataType: 'json'
    });
  },
  render: function() {
    var entriesOutput = [];

    if (this.state && this.state.entries)
      this.state.entries.forEach(function (entry) {
        var d = new Date(entry.date).toDateString();
        var href = 'https://github.com/joshjung/skyduel/commit/' + entry.sha;
        entriesOutput.push(
          <div className="git-entry">
            <div>
              <span className="date">{d}</span>
              <span className="sha"><a href={href} target="_blank">{entry.sha.substring(entry.sha.length - 5)}</a></span>
              <span>{entry.author}</span>
            </div>
            <div>{entry.message}</div>
          </div>);
      });
    return (
      <div id="git">
        <h4>
          <a href="https://github.com/joshjung/skyduel/commits/master" target="_blank">Latest Github Updates</a>
        </h4>
        <div className="entries">
          {entriesOutput}
        </div>
      </div>);
  }
});