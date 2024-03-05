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
// example 1 - tuple
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const authorTwo = { name: 'myat', avatar: '/img/mario.png' };
// function getRandomColor(): Rgb {
// 	const r = Math.floor(Math.random() * 255)
// 	const g = Math.floor(Math.random() * 255)
// 	const b = Math.floor(Math.random() * 255)
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    created_at: new Date(),
    author: authorOne,
    // return [r, g, b]
};
const oldPost = {
    title: 'hello ka bar gyi',
    body: 'heehee',
    tags: ['tech', 'gaming'],
    created_at: new Date(),
    author: authorTwo,
};
function addPost(post2) {
    console.log(`the title is ${post2.title} and the author is ${post2.author.name}`);
}
addPost(oldPost);
//----------------------------
// as function argument types
//----------------------------
// const colorOne = getRandomColor()
// const colorTwo = getRandomColor()
// console.log(colorOne, colorTwo)
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
// example 2 - object literal
// createPost({ title: 'a new post title' })
createPost(newPost);
// type User = {
// 	name: string
// 	score: number
// }
//-------------
// with arrays
//-------------
// const userOne: User = { name: 'mario', score: 75 }
// let posts: Post[] = []
// function formatUser(user: User): void {
// 	console.log(`${user.name} has a score of ${user.score}.`)
// }
// // posts.push({ title: 'some title' })
// posts.push(newPost)
// formatUser(userOne)
// formatUser({ name: 'yoshi', score: 100 }) }
