// function sayHi(name) {
    // console.log(name);
//}
const sayHi = (name) =>{
    console.log(name);
}
sayHi('a')

setTimeout(() => {
    console.log('after');
}, 1000)

setTimeout(sayHi.bind(this, 'Me'), 4000)

setTimeout(() => console.log('after'), 1000)

(function sayHi(name) {

}, 'me')

const arr = [1, 3, 5];
arr.push(6);
arr.unshift(0);
const newArr = arr.concat(6);

const oldUser = Object.assign({},user,{address: 'XJTLU'})
const user = {
    name: "me",
    tel: '12345'
};

user.address = 'xjtlu'

const newUser = {
    ...user,
    address: 'xjtlu'
};

const url = 'https://www.baidu.com' + user.name + 'name=xxx' + 'email=xxx';
const newUrl = `https://www.baidu.com${user.name}***${newUser.address}`;
