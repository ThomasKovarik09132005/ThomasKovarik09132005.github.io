var level01 = function (window) {


    window.opspark = window.opspark || {};


    var draw = window.opspark.draw;
    var createjs = window.createjs;


    window.opspark.runLevelInGame = function(game) {
        // some useful constants
        var groundY = game.groundY;


        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);


        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = (Math.random(150) * 1500);
        sawBladeHitZone.y = (Math.random(300) * 500);
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;}
    for (var i = 0; i <= 3; i++){
        createSawBlade();
    }
   
    function createEnemy(x,y) {
        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(50, 50, "red");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x
        enemy.y = y
        game.addGameItem(enemy);
        enemy.velocityX = -1
        enemy.rotationalVelocity = -5 * Math.random();
        enemy.onPlayerCollision = function () {
            game.changeIntegrity(-10)
        };
        enemy.onProjectileCollision = function () {
            game.increaseScore(100);
            enemy.fadeOut();
        }
   
    }








    createEnemy(400, groundY - 10);
    createEnemy(800, groundY - 100);
    createEnemy(1200, groundY - 50);




    function createReward(x,y) {
        var enemy = game.createGameItem("reward", 25);
        var redSquare = draw.rect(50, 50, "green");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x
        enemy.y = y
        game.addGameItem(enemy);
        enemy.velocityX = -1
        enemy.rotationalVelocity = -1 * Math.random();
        enemy.onPlayerCollision = function () {
            game.changeIntegrity(100)
            enemy.fadeOut();
        }




   
    }




    createReward(1000, groundY - 10);




    function createMarker(x,y) {
        var enemy = game.createGameItem("marker", 25);
        var redSquare = draw.rect(50, 50, "white");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x
        enemy.y = y
        game.addGameItem(enemy);
        enemy.velocityX = -1
        enemy.rotationalVelocity = -1 * Math.random();
        enemy.onPlayerCollision = function () {
            startLevel()
        };
        enemy.onProjectileCollision = function () {
            startLevel()
        };
    }
    createMarker(1600, groundY - 30);


        // DO NOT EDIT CODE BELOW HERE
    }
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}


