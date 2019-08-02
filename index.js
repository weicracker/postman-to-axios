const Mustache = require("mustache");
const fs = require("fs");
const postman = require("./postman/test.json");

let temp = fs.readFileSync("./template/temp.mustache").toString();
var output = Mustache.render(temp, postman);
console.log(output);
console.log(postman);
fs.writeFileSync("./cache/remote.js",output);