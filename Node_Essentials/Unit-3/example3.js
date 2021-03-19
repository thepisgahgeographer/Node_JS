var fs = require('fs');
console.log('Starting program...');
var fileContents = fs.readFileSync('C:/Users/yuri7100/Desktop/NC_Features/NC_Features_20210101.txt', 'utf8');
var numberOfWords = fileContents.split(/[ ,.\n]+/).length;
console.log('There are ' + numberOfWords + ' words in this file.');
console.log('Program finished.');
