// function asyncTask() {
//     console.log('Start');
//     sleep(2000).then((data) => console.log(data));
//     //setTimeout(() => console.log('Timer done'), 1000);//里面是回调函数
//     //console.log('End');
// }

async function asyncTask() {
    console.log('Start');
    const data = await sleep(2000);
    console.log(data);
    //setTimeout(() => console.log('Timer done'), 1000);//里面是回调函数
    //console.log('End');
}
// const sleep = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Slept');
//             resolve();
//         }, ms)
//     })
// }
const sleep = (ms) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Slept');
        resolve('ok');
    }, ms);
})

asyncTask();

function callBackExample(data, cb){
    cb(data);
}

callBackExample('Steve', console.log);