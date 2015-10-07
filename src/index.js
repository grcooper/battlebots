// Make the game fullscreen
var winW = document.body.offsetWidth;
var winH = document.body.offsetHeight;

// PHASER GAME CREATION
var game = new Phaser.Game(winW, winH, Phaser.AUTO);

//Labels
var titleLabel, startGameLabel;
// FONTS
var titleFont = { font: '30px Arial', fill: '#fff' };
var menuItemFont = { font: '24px Arial', fill: '#fff' };

// Groups
var bots;


// Shuffle Function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// STATES
var menuState = {
	preload: function() {

	},
	create: function() {
		// Menu Creation
		game.stage.backgroundColour = '#000000';
		titleLabel = game.add.text(game.world.centerX - 75, game.world.centerY - 100, 'Battle Bots', titleFont);
		startGameLabel = game.add.text(game.world.centerX - 100, game.world.centerY, 'Start Game', menuItemFont);
		startGameLabel.inputEnabled = true;
		startGameLabel.events.onInputDown.add(startGame, game);
	},
	update: function() {

	}
}

var gameState = {
	preload: function() {
		// Preload Assets
		game.load.image('randBot', 'src/assets/square.png');
	},
	create: function() {
		bots = game.add.group();
		var randBot = bots.create(0,0, 'randBot');
		randBot.bot = new Bot("RandBot", randMove, randShoot);
		randBot.bot.x = 0;
		randBot.bot.y = 0;
		console.log(randBot.bot);
	},
	update: function() {
		for(var i = 0; i < bots.length; i++) {
			bots.children[i].bot.chooseMove(bots.children[i].bot);
			if(bots.children[i].bot.reloadTimer >= bots.children[i].bot.reload){
				bots.children[i].bot.chooseShoot(bots.children[i].bot);
			}
			else {
				bots.children[i].bot.reloadTimer++;
			}
			bots.children[i].x = bots.children[i].bot.x;
			bots.children[i].y = bots.children[i].bot.y;
		}
		bots = shuffle(bots);
	}
}


// Helper Functions

function startGame() {
	game.state.start('GameState');
}

// Handle and add States
game.state.add('MenuState', menuState);
game.state.add('GameState', gameState);
game.state.start('MenuState');




