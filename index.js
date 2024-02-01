let hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

console.log("Starting App. . .");
hltbService.search('Nioh').then(result => console.log(result));