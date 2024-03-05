type rgb = [string, string, number];

function testPractice() : rgb {
    const a = 'myat'
    const b = 'kyaw'
    const c = 24
    return [a,b,c]
}
const haha = testPractice()
console.log(haha)

type User = {
    name : string
    age : number
}
const userone : User = {
    name : 'myat',
    age : 24
}
function createUser(user: User): void {
    console.log(`Name is ${user.name} and age is ${user.age}`)
}
createUser(userone)
createUser({name: 'yoshi', age: 34})


interface Userone {
    type: 'user',
    username: string,
    age: number,
}
interface Person{
    type: 'person',
    name: string,
    age: number
}
const useroneone : Userone = {
    type : 'user',
    username : 'jennie',
    age : 26
}
const usertwo : Person = {
    type: 'person',
    name: 'jisoo',
    age: 30
}

function userDetails(value : Userone | Person) : void {
    if(value.type=== 'user'){
        console.log(`the user is ${value.username} and ${value.age}`)
    }
    else{
        console.log(`the person is ${value.name} and ${value.age}`)
    }
}
userDetails(usertwo)
userDetails(useroneone)

