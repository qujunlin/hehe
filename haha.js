import { finished } from "stream";

const arr = ['a', 'b', 'c']
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

arr.forEach((element, i) => {
    console.log(element, i);
    arr[i] = element + 'ok';
});

const newArr = arr.map((ele, i) => {
    return ele + 'ok';
});

const newArr = arr.map(ele => ele + 'ok');

const user = [
    {
        name: 'steve',
        age: 1
    },
    {
        name: 'a',
        age: 2
    },
    {
        name: 'v',
        age: 3
    },
]

const filteredUser = user.filter(user => {
    return user.name === 'a'
})

const filteredUser = user.filter(user => user.name === 'a')

let num = 0;

user.forEach(user => {
    num += user.age;
});
const Num = user.reduce((acc, cur) => {
    return acc + cur.age;
}, 0)
const Num = user.reduce((acc, cur) => acc + cur.age, 0);

// indexOf()找位置

// includes()boolean

// find()

// some()

console.log(user)

console.log(arr);