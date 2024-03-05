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
createUser({ name: 'yoshi', age: 34 });
const useroneone = {
    type: 'user',
    username: 'jennie',
    age: 26
};
const usertwo = {
    type: 'person',
    name: 'jisoo',
    age: 30
};
function userDetails(value) {
    if (value.type === 'user') {
        console.log(`the user is ${value.username} and ${value.age}`);
    }
    else {
        console.log(`the person is ${value.name} and ${value.age}`);
    }
}
userDetails(usertwo);
userDetails(useroneone);
