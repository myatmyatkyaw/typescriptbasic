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
