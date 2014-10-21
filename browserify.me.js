// Library
var isClient = true;

require("./game-server/node_modules/jclass/lib/jclass.min.js");

// Sprites
require("./shared/js/sprites/BirdSprite");
require("./shared/js/sprites/BulletSprite");
require("./shared/js/sprites/PlanePartSprite");
require("./shared/js/sprites/PlaneSprite");
require("./shared/js/sprites/SmokeSprite");

// Client
require("./web-server/public/js/SkyDuelClientInterface.js");