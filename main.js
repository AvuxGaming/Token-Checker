// Source Code Of Token Checker | https://azazel.ga

var request = require("request");
var chalk = require('chalk');
var fs = require('fs');
var readline = require('readline');
var config = require("./config.json");

fs.writeFileSync('./output/nitro.txt', '');
fs.writeFileSync('./output/invalid.txt', '');
fs.writeFileSync('./output/verified.txt', '');
fs.writeFileSync('./output/unverified.txt', '');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r/gi, '').split("\n");

var file = 'tokens.txt';
var linesCount = 0;
var rl = readline.createInterface({
 input: fs.createReadStream(file),
 output: process.stdout,
 terminal: false
});

var verifiedArr = [];
var unverifiedArr = [];
var invalidArr = [];
var nitroArr = [];
rl.on('line', function (line) {
 linesCount++; // on each linebreak, add +1 to 'linesCount'
});
rl.on('close', function () { // print the result when the 'close' event is called
});
var acc;

var i = 0;

setInterval(function()
{
  // [ DONT REMOVE / DELETE THIS | THIS IS CREDIT SECTION | IF YOU REMOVE THIS SECTION THE SCRIPT WILL BE ERROR / CORRUPT ]

    var _0xb2b0=["\x6C\x65\x6E\x67\x74\x68","\x2E\x2F\x6F\x75\x74\x70\x75\x74\x2F\x75\x6E\x76\x65\x72\x69\x66\x69\x65\x64\x2E\x74\x78\x74","","\x6A\x6F\x69\x6E","\x2C","\x73\x70\x6C\x69\x74","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x2E\x2F\x6F\x75\x74\x70\x75\x74\x2F\x69\x6E\x76\x61\x6C\x69\x64\x2E\x74\x78\x74","\x2E\x2F\x6F\x75\x74\x70\x75\x74\x2F\x76\x65\x72\x69\x66\x69\x65\x64\x2E\x74\x78\x74","\x2E\x2F\x6F\x75\x74\x70\x75\x74\x2F\x6E\x69\x74\x72\x6F\x2E\x74\x78\x74","\x5B","\x20\x43\x48\x45\x43\x4B\x45\x52\x20\x46\x49\x4E\x49\x53\x48\x45\x44\x20\x7C","\x63\x79\x61\x6E","\x20\x59\x6F\x75\x74\x75\x62\x65","\x72\x65\x64","\x20\x41\x76\x75\x78\x20","\x79\x65\x6C\x6C\x6F\x77","\x5D","\x6C\x6F\x67","\x65\x78\x69\x74","\x63\x6C\x65\x61\x72"];if(i>= tokens[_0xb2b0[0]]){fs[_0xb2b0[6]](_0xb2b0[1],unverifiedArr.toString()[_0xb2b0[5]](_0xb2b0[4])[_0xb2b0[3]](_0xb2b0[2]));fs[_0xb2b0[6]](_0xb2b0[7],invalidArr.toString()[_0xb2b0[5]](_0xb2b0[4])[_0xb2b0[3]](_0xb2b0[2]));fs[_0xb2b0[6]](_0xb2b0[8],verifiedArr.toString()[_0xb2b0[5]](_0xb2b0[4])[_0xb2b0[3]](_0xb2b0[2]));fs[_0xb2b0[6]](_0xb2b0[9],nitroArr.toString()[_0xb2b0[5]](_0xb2b0[4])[_0xb2b0[3]](_0xb2b0[2]));console[_0xb2b0[18]](_0xb2b0[10]+ chalk[_0xb2b0[12]](_0xb2b0[11])+ chalk[_0xb2b0[14]](_0xb2b0[13])+ chalk[_0xb2b0[16]](_0xb2b0[15])+ _0xb2b0[17]);process[_0xb2b0[19]](1)};check(tokens[i]);console[_0xb2b0[20]]()

    //════════════════════════════════════════════════════════════════════════════════════════════════════════════════
    
    console.log(chalk.magenta("*   ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗███████╗██████╗  *\nA  ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝██╔════╝██╔══██╗ A\nV  ██║     ███████║█████╗  ██║     █████╔╝ █████╗  ██████╔╝ V\nU  ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ██╔══╝  ██╔══██╗ U\nX  ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗███████╗██║  ██║ X\n*   ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ *") + " \n \n[" + chalk.yellow(" Nitro       : ") + nitroArr.length +" ] \n" + "[" + chalk.blue(" Verified    : ") + verifiedArr.length +" ]\n[" + chalk.red(" Invalid     : ") + invalidArr.length +" ]\n[" + chalk.gray(" Unverified  : ") + unverifiedArr.length +" ]\n[" + chalk.green(" Total Token : ") + linesCount + " ]");
    i++;
}, config.interval);

function check(token)
{
    request({
        method: "GET",
        url: "https://discordapp.com/api/v7/users/@me",
        headers: 
        {
            authorization: token
        }
    }, (error, response, body) => {
        if(!body) return;
        var json = JSON.parse(body);
        acc = json;
        if(!json.id)  
        {
            invalidArr.push(token + "\n");
        }
        else if(!json.verified) 
        {
            unverifiedArr.push(token + "\n");
        }
        else
        {
            if(config.usernames) verifiedArr.push(token + " | " + json.username + "#" + json.discriminator + "\n");
            else verifiedArr.push(token + "\n");
        }
    });
// " | username: " + json.username + "#" + json.discriminator +
    request({
        method: "GET",
        url: "https://discord.com/api/v7/users/@me/billing/subscriptions",
        headers: 
        {
            authorization: token
        }
    }, (error, response, body) => {
        if(!body) return;
        var json = JSON.parse(body);
        if(json.length == 1) 
        {
            if(config.usernames) nitroArr.push(token + " | username: " + acc.username + "#" + acc.discriminator + "\n");
            else nitroArr.push(token + "\n");
        }
    });
}
