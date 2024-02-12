const prompt = require('prompt-sync')();
const hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

function main() {
	console.log("*** Welcome to Time My Games ***");

	var promises = [];	// array of promises
	var doAgain = true;

	while(doAgain) {
		var gameName = prompt("Please enter the name of a game: ").toLowerCase().trim();

		promises.push(searchGame(gameName));

		doAgainPrompt = prompt("Would you like to search for another game? (Y/N) ").toLowerCase().trim();

		if (doAgainPrompt === 'n') {
			doAgain = false;
		}
	}

	Promise.all(promises)
		.then(results => {
			for (const resp of results) {
				console.log(resp[0].name + ' / ' + resp[0].gameplayMain + ' hours');
			}
		}).catch(error => {
			console.log("Error loading games / times: " + e);
		}).finally(() => {
			prompt("Press any key to exit. . .");
		});


	return 0
 }

function searchGame(gameName) {
		return hltbService.search(gameName);
//		hltbService.search(gameName).then(result => {
//		console.log(gameName + ' returned ' + result.length + ' results');
//			for(let game of result) {
//				console.log(game.name + ' - ' + game.gameplayMain + ' hours');
//
//				if (game.name.includes(' ' + gameName) || game.name.includes(gameName + ' ')) {
//					console.log('*** MATCH ***');
//				}
//			}
//		});
 }

 main();