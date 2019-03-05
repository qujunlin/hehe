const axios = require('axios');
console.log(666);
axios.get('https://www.baidu.com').then(function(res){
    console.log(res);
});
console.log(777);

const lib = require('./lib');
//Const addOne = require('./lib');
console.log(addOne(3))

