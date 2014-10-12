var crc = require('crc');

module.exports.findFor = function(uid, connectors) {
	return connectors[Math.abs(crc.crc32(uid)) % connectors.length];
};