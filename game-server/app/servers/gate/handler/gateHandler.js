module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

Handler.prototype.queryEntry = function(msg, session, next) {
	var uid = msg.uid;

	if (!uid) {
		next(null, {
			code: 500
		});
		return;
	}
  
	var connectors = this.app.getServersByType('skyduel');

	if (!connectors || connectors.length === 0) {
		next(null, {
			code: 500
		});
		return;
	}

	// here we just start `ONE` connector server, so we return the connectors[0] 
	var res = connectors[0];
	next(null, {
		code: 200,
		host: res.host,
		port: res.clientPort
	});
};