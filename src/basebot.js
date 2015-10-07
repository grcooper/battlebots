
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
					if(dir === "Up"){
						// Create Bullet
						console.log("shoot up");
					}
					else if (dir === "Down") {
						console.log("Shoot Down");
					}
					else if (dir === "Right") {
						console.log("Shoot Right");
					}
					else if (dir === "Left") {
						console.log("Shoot Left");
					}
					myBot.reloadTimer = 0;
				};
	this.speed = 20;
	this.reload = 30;
	this.chooseMove = chooseMoveFunction;
	this.chooseShoot = chooseShootFunction;
}