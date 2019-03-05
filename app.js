const axios = require('axios');
console.log(666);
axios.get('https://www.baidu.com').then(function(res){
    console.log(res);
});
