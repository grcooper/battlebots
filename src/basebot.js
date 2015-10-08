
// Bot constructor

// String, Function, Function
function Bot(name, chooseMoveFunction, chooseShootFunction) {
	this.x = 0;
	this.y = 0;
	this.name = name;
	this.reloadTimer = 0;
	this.move = function (myBot, dir) {
					//console.log("base move");
					if(dir === "Up"){
						myBot.x -= myBot.speed;
					}
					else if (dir === "Down") {
						myBot.x += myBot.speed;
					}
					else if (dir === "Right") {
						myBot.y += myBot.speed;
					}
					else if (dir === "Left") {
						myBot.y -= myBot.speed;
					}
				};
	this.shoot = function (myBot, dir) {
					bullet = bullets.create(this.x, this.y, 'randBot');
	        		bullet.scale.setTo(0.2, 0.5);
	        		game.physics.arcade.enable(bullet);
					bullet.body.enable = true;
					bullet.body.friction = {x: 0, y: 0};
					bullet.body.drag = {x: 0, y: 0};
					if(dir === "Up"){
						// Create Bullet
						bullet.body.velocity = {x: 0, y: -500};
					}
					else if (dir === "Down") {
						bullet.body.velocity = {x: 0, y: 500};
					}
					else if (dir === "Right") {
						bullet.body.velocity = {x: 500, y: 0};
					}
					else if (dir === "Left") {
						bullet.body.velocity = {x: -500, y: 0};
					}
					myBot.reloadTimer = 0;
				};
	this.speed = 20;
	this.reload = 30;
	this.chooseMove = chooseMoveFunction;
	this.chooseShoot = chooseShootFunction;
}




