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
function addNumber(a: number ,b: number){
    return a + b;
}
let a = addNumber(4,5);
console.log(a)

function addPeople(a:string , b:string){
    return a + b;
}
let c = addPeople('myat ','kyaw');
console.log(c)

function addString(d:number, e:string){
    return d + e;
}
console.log(addString(3, 'luffy'));

function example(name: String, greeting: String){
    return `${name} ${greeting}`;
}
console.log(example('myat','hello'))

//tuple
let tuple:[number , string, number, boolean] = [2, 'cupid' , 6, true];

console.log(tuple);

//interface
interface Post {
    title: string,
    post: string,
    quantity: number
}
const newPost:Post = {title:'hello world', post: 'heehee', quantity:10}
console.log(newPost);

function createPost(postp: Post): void {
    console.log(`Created by ${postp.post} and the title is ${postp.title}`);
}
createPost(newPost)
