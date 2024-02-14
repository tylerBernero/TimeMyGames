const prompt = require('prompt-sync')();
const hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

	var promises = [];	// array of promises
	var doAgain = true;
	var gameName;
	var totalTime = 0;

function main() {
	console.log("*** Welcome to Time My Games ***");

	console.log("Please enter the name of a game: ");
	gameName = prompt("").toLowerCase().trim();

	while(doAgain) {
		promises.push(searchGame(gameName));
		console.log('\nAdded ' + gameName + ' to the list\n');
		console.log('Enter another name of a game or press (2) to print list:');
		gameName = prompt("").trim();

		if (gameName === '2') {
			doAgain = false;
		}
	}

	console.log("\nYour Games:");

	Promise.all(promises)
		.then(results => {
			for (const resp of results) {
				console.log(resp[0].name + ': ' + resp[0].gameplayMain + ' hours');
				totalTime += resp[0].gameplayMain;
			}

			console.log("\nTotal Time to Complete: " + totalTime + ' hours');
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