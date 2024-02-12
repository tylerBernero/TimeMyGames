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
		console.log('\nAdded ' + gameName + ' to the list\n');
		console.log('Would you like to search for another game (1) or print list (2):');
		doAgainPrompt = prompt("").trim();

		if (doAgainPrompt === '2') {
			doAgain = false;
		}
	}

	console.log("\nYour Games:");

	Promise.all(promises)
		.then(results => {
			for (const resp of results) {
				console.log(resp[0].name + ' / ' + resp[0].gameplayMain + ' hours');
			}
		}).catch(error => {
			console.log("\nError loading games / times: " + e);
		}).finally(() => {
			prompt("Press any key to exit. . .");
		});


	return 0
 }

function searchGame(gameName) {
		return hltbService.search(gameName);
 }

 main();