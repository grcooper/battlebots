
// Basic random movement bot

function randMove(myBot){
	var choice = Math.round(Math.random() * 4);
	if(choice === 0){
		myBot.move(myBot, "Up");
	}
	else if (choice === 1) {
		myBot.move(myBot, "Down");
	}
	else if (choice === 2) {
		myBot.move(myBot, "Left");
	}
	else {
		myBot.move(myBot, "Right");
	}
}

// Basic Random Shooting

function randShoot(myBot){
	var choice = Math.round(Math.random() * 4);
	if(choice === 0){
		myBot.shoot(myBot, "Up");
	}
	else if (choice === 1) {
		myBot.shoot(myBot, "Down");
	}
	else if (choice === 2) {
		myBot.shoot(myBot, "Right");
	}
	else {
		myBot.shoot(myBot, "Left");
	}
}