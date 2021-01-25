var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./Link.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
	var link = new Link(gameEngine);

	gameEngine.init(ctx);
	gameEngine.addEntity(link);

	gameEngine.start();
});
