var connectorFinder = require('../../../util/connectorFinder');

var GateHandler = function(app) {
	this.app = app;
};

GateHandler.prototype = {
	requestConnectorForClient: function(msg, session, next) {
		var clientId = msg.clientId;
		if(!clientId) {
			next(null, {
				code: 500,
				reason: 'no clientId provided'
			});
			return;
		}

		// get all connectors
		var connectors = this.app.getServersByType('connector');
		if(!connectors || connectors.length === 0) {
			next(null, {
				code: 500,
				reason: 'no connectors found'
			});
			return;
		}

		// select connector for provided client.
		var connector = connectorFinder.findFor(clientId, connectors);
		next(null, {
			code: 200,
			host: connector.host,
			port: connector.clientPort
		});
	}
};

module.exports = function(app) {
	return new GateHandler(app);
};