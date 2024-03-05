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
// function addNumber(a: number ,b: number){
//     return a + b;
// }
// let a = addNumber(4,5);
// console.log(a)

// function addPeople(a:string , b:string){
//     return a + b;
// }
// let c = addPeople('myat ','kyaw');
// console.log(c)

// function addString(d:number, e:string){
//     return d + e;
// }
// console.log(addString(3, 'luffy'));

// function example(name: String, greeting: String){
//     return `${name} ${greeting}`;
// }
// console.log(example('myat','hello'))

// //tuple
// let tuple:[number , string, number, boolean] = [2, 'cupid' , 6, true];

// console.log(tuple);

// // interfaces
// // type aliases
interface Author {
	name: string
	avatar: string
}
// example 1 - tuple

const authorOne: Author = { name: 'mario', avatar: '/img/mario.png' }
const authorTwo: Author = { name: 'myat', avatar: '/img/mario.png'}
// type Rgb = [number, number, number]

interface Post {
	title: string
	body: string
	tags: string[]
	created_at: Date
	author: Author
}
// function getRandomColor(): Rgb {
// 	const r = Math.floor(Math.random() * 255)
// 	const g = Math.floor(Math.random() * 255)
// 	const b = Math.floor(Math.random() * 255)

const newPost: Post = {
	title: 'my first post',
	body: 'something interesting',
	tags: ['gaming', 'tech'],
	created_at: new Date(),
	author: authorOne,
	// return [r, g, b]
}
const oldPost: Post = {
	title: 'hello ka bar gyi',
	body: 'heehee',
	tags: ['tech','gaming'],
	created_at: new Date(),
	author: authorTwo,
}
function addPost(post2: Post): void {
	console.log(`the title is ${post2.title} and the author is ${post2.author.name}`)
}
addPost(oldPost);

//----------------------------
// as function argument types
//----------------------------
// const colorOne = getRandomColor()
// const colorTwo = getRandomColor()
// console.log(colorOne, colorTwo)

function createPost(post: Post): void {
	console.log(`created post ${post.title} by ${post.author.name}`)
}
// example 2 - object literal

// createPost({ title: 'a new post title' })
createPost(newPost)
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