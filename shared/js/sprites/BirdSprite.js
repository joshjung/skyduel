/*======================================================*\
 * BirdSprite() 
\*======================================================*/
function BirdSprite(game, x, y) {
  Phaser.Group.call(this, game);
 
  // configure group 
  this.x = x;
  this.y = y;
  
  // add the birdSprite 
  this.birdSprite   = this.create(0, 0, 'bird');
   
  // you can't set the anchor point of a group, so for x & y to correspond
  // to the BirdSprite's center we have to offset it manually
  this.birdSprite.x = -this.birdSprite.width  / 2.0;
  this.birdSprite.y = -this.birdSprite.height / 2.0;
};

BirdSprite.prototype = Object.create(Phaser.Group.prototype);
BirdSprite.prototype.constructor = BirdSprite;

/*======================================================*\
 * Public Methods 
\*======================================================*/

BirdSprite.prototype.updateWithModel = function(model) {
  this.x = model.x;
  this.y = model.y;
  this.angle = model.angle * 57.2957795;
  this.scale.x = this.scale.y = model.scale;
};

/*======================================================*\
 * Factory 
\*======================================================*/

Phaser.GameObjectFactory.prototype.bird = function(x, y, group) {
  if(typeof group === 'undefined')
    group = this.world;
  
  return group.add(new BirdSprite(this.game, x, y));
};