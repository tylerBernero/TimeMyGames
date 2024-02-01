// let hltb = require('howlongtobeat');
// let hltbService = new hltb.HowLongToBeatService();
const express= require('express');
const app = express();
const port = 5000;

console.log("Starting App. . .");
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});
// hltbService.search('Nioh').then(result => console.log(result));
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});