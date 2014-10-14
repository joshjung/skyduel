/** @jsx React.DOM */
var rjGame = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-md-9 col-lg-8 game-panel">
            <rjSkyduel main={this.props.main} />
          </div>
          <div className="col-sm-4 col-md-3 col-lg-4">
            <rjMessenger main={this.props.main} />
          </div>
        </div>
      </div>);
  }
});