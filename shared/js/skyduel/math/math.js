var $Math = module.exports = {
	dot: function (p1, p2, normalize) {
		var res = p1.x * p2.x + p1.y * p2.y;
		return normalize ? res / (p1.length() * p2.length()) : res;
	},
	Point: function (x, y) 
	{
		if (!arguments[1])
		{
			this.x = Math.cos(x);
			this.y = Math.sin(x);
			return;
		}
		
		this.x = x;
		this.y = y;
	}
};

$Math.Point.prototype = {
	length: function () {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	},
	multiply: function(scale) {
		return new $Math.Point(this.x * scale, this.y * scale);
	},
	add: function (x, y) {
		var v = new $Math.Point(0, 0);
		
		if (!arguments[1])
		{
			v.x += x.x;
			v.y += x.y;
			return v;
		}
		
		v.x = x;
		v.y = y;
		
		return v;
	},
	transform: function(angle, scale) {
		return new $Math.Point(
			scale * this.x * Math.cos(angle),
			scale * this.y * Math.sin(angle));	
	}
};