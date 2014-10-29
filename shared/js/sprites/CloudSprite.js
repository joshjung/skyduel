/*======================================================*\
 * CloudSprite() 
\*======================================================*/
function CloudSprite(game, x, y) {
  Phaser.Group.call(this, game);
 
  // configure group 
  this.x = x;
  this.y = y;
  
  // add the cloudSprite 
  this.cloudSprite   = this.create(0, 0, 'cloud');
   
  // you can't set the anchor point of a group, so for x & y to correspond
  // to the CloudSprite's center we have to offset it manually
  this.cloudSprite.x = -this.cloudSprite.width  / 2.0;
  this.cloudSprite.y = -this.cloudSprite.height / 2.0;
};

CloudSprite.prototype = Object.create(Phaser.Group.prototype);
CloudSprite.prototype.constructor = CloudSprite;

/*======================================================*\
 * Public Methods 
\*======================================================*/
CloudSprite.prototype.updateWithModel = function(model) {
  this.x = model.x;
  this.y = model.y;
  this.angle = model.rotation * 57.2957795;
  this.scale.x = this.scale.y = model.scale;
};

/*======================================================*\
 * Factory 
\*======================================================*/
Phaser.GameObjectFactory.prototype.cloud = function(x, y) {
  return this.world.cloudGroup.add(new CloudSprite(this.game, x, y));
};