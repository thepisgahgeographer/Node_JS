const fs = require("fs");
const path = require("path");
const os = require("os");
const url = require("url");

// fs.mkdir(path.join(__dirname, "\\testing"), {},
//     (err) => {
//         if (err) throw err;
//         console.log("Folder created");
//     });

// fs.writeFile(path.join(__dirname, "\\testing", "testing.txt"),
//     "Yuri is here", {},
//     (err) => {
//         if (err) throw err;
//         console.log("Written File");
//     }
// );

// console.log(os.platform());
// console.log(os.cpus());

// console.log(os.totalmem());

const myUrl = new URL("https://thepisgahgeo.maps.arcgis.com/home/item.html?id=91ae1ec7a4234369843f7d4490449642");

console.log(myUrl.href);
console.log(myUrl.hostname);
console.log(myUrl.searchParams);