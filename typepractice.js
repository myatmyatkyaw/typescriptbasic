"use strict";
function testPractice() {
    const a = 'myat';
    const b = 'kyaw';
    const c = 24;
    return [a, b, c];
}
const haha = testPractice();
console.log(haha);
const userone = {
    name: 'myat',
    age: 24
};
function createUser(user) {
    console.log(`Name is ${user.name} and age is ${user.age}`);
}
createUser(userone);
