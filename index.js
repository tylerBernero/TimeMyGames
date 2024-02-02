const prompt = require('prompt-sync')();
const hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

function main() {
    console.log("*** Welcome to Time My Games ***");

    var game = prompt("Please enter the name of a game: ");
//    console.log('You entered: ' +  game);
     hltbService.search(game).then(result => {
        for(let game of result) {
        	console.log(game.name + ' - ' + game.gameplayMain + ' hours');
        }
//        console.log(result);
     }).finally(() => {
     	prompt("Press ENTER to exit. . .");
     });

     return 0
 }

 main();