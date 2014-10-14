/** @jsx React.DOM */
var rjGame = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <a href="/">
              <img src="/images/skyduelLogo350.png" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 game-panel">
            <rjSkyduel main={this.props.main} />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <rjMessenger main={this.props.main} />
          </div>
        </div>
      </div>);
  }
});