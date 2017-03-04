'use strict';
var fs = require('fs');
var path = require('path');
var filepath = path.join(__dirname,'fs.js');
console.log(__dirname);
console.log(path.basename(filepath));
console.log(path.basename(filepath,'.js'));