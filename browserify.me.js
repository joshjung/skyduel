// Library
var isClient = true;

require("./game-server/node_modules/jclass/lib/jclass.min.js");

// Shared

require("./shared/js/lib/HashArray.js");
require("./shared/js/characteristics/CharacteristicManager.js");
require("./shared/js/characteristics/Characteristic_Physics.js");
require("./shared/js/characteristics/Characteristic_ScreenWrapping.js");
require("./shared/js/characteristics/Characteristic_DestroyOffScreen.js");
require("./shared/js/characteristics/Characteristic_ShootsBullets.js");
require("./shared/js/gameObjects/Smoke.js");
require("./shared/js/gameObjects/Bullet.js");
require("./shared/js/gameObjects/Player.js");
require("./shared/js/gameObjects/Bird.js");
require("./shared/js/UserActions.js");
require("./shared/js/UserState.js");
require("./shared/js/UserInputProcessor.js");

// Sprites
require("./shared/js/sprites/SmokeSprite.js");
require("./shared/js/sprites/PlaneSprite.js");
require("./shared/js/sprites/BulletSprite.js");
require("./shared/js/sprites/BirdSprite.js");

// Client
require("./shared/js/LatencyAnalyzer.js");
require("./web-server/public/js/ServerClientStateManager.js");
require("./web-server/public/js/SkyDuelClient.js");

// View
require("./web-server/public/js/logViewer.js");