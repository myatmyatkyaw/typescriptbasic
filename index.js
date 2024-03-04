"use strict";
// let person:string = 'myat';
// let age:number = 3;
// let single:boolean = true;
// let ages = [1,2,3,4];
// ages.push(5);
// console.log(ages);
// let people = ['a','b','c'];
// people.push('d');
// console.log(people);
// let me = {
//     name: 'sakura',
//     age: 20,
//     single: false
// }
// me.age = 9;
// console.log(me);
//for function
function addNumber(a, b) {
    return a + b;
}
let a = addNumber(4, 5);
console.log(a);
function addPeople(a, b) {
    return a + b;
}
let c = addPeople('myat ', 'kyaw');
console.log(c);
function addString(d, e) {
    return d + e;
}
console.log(addString(3, 'luffy'));
function example(name, greeting) {
    return `${name} ${greeting}`;
}
console.log(example('myat', 'hello'));
//tuple
let tuple = [2, 'cupid', 6, true];
console.log(tuple);
// example 1 - tuple
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newPost = {
        title: 'my first post',
        body: 'something interesting',
        tags: ['gaming', 'tech'],
        created_at: new Date(),
        author: authorOne,
        return: [r, g, b]
    };
    //----------------------------
    // as function argument types
    //----------------------------
    const colorOne = getRandomColor();
    const colorTwo = getRandomColor();
    console.log(colorOne, colorTwo);
    function createPost(post) {
        console.log(`created post ${post.title} by ${post.author.name}`);
    }
    // example 2 - object literal
    // createPost({ title: 'a new post title' })
    createPost(newPost);
    //-------------
    // with arrays
    //-------------
    const userOne = { name: 'mario', score: 75 };
    let posts = [];
    function formatUser(user) {
        console.log(`${user.name} has a score of ${user.score}.`);
    }
    // posts.push({ title: 'some title' })
    posts.push(newPost);
    formatUser(userOne);
    formatUser({ name: 'yoshi', score: 100 });
}
