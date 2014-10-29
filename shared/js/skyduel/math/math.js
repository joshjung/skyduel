var $Math = module.exports = {
	dot: function (p1, p2, normalize) {
		var res = p1.x * p2.x + p1.y * p2.y;
		return normalize ? res / (p1.length() * p2.length()) : res;
	},
	length: function (x, y){
		return Math.sqrt(x*x+y*y);
	},
	Point: function (x, y) 
	{
		this.x = x;
		this.y = y;
	}
};

$Math.Point.prototype = {
	length: function () {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	},
	transform: function(angle, scale) {
		return new $Math.Point(
			scale * this.x * Math.cos(angle),
			scale * this.y * Math.sin(angle));	
	}
}