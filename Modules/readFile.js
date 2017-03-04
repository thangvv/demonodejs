'use strict';
var fs = require('fs');
fs.open('demo.html','r', function (err, fd) {
    if(err) {
        return console.log(err);
    }
    fs.close(fd);
});
fs.readFile('demo.html', function (err, fd) {
    if(err) {
        return console.log(err);
    }
    console.log(fd);
})
fs.readFile('demo.html',{encoding:'utf8'}, function (err, result) {
    if(err) {
        return console.log(err);
    }
    console.log(result);
})
fs.writeFile('demo2.html','Hello',function(err,result){
    if(err){
        return console.log(err);
    }
    console.log('done');
})
fs.readFile('demo.html',{encoding:'utf8'},function(err,result){
    if(err){
        return console.log(err);
    }
    fs.writeFile('demo2.html',result,function(err,result){
       if(err)
       {
           return console.log(err);
       }
       console.log('done');
    });
});