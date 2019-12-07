'use strict';

// const products = ['apples', 'grapes', 'bananas'];

// const massage = 'Lorem ipsum dolor sit amet';

// console.log(massage);

// const words = massage.split(' ');

// console.log(words);

// const snakeCaseMessage = words.join('_');
// console.log(snakeCaseMessage);

// const indexOfApples = products.indexOf('apples');
// console.log(indexOfApples);

// if (indexOfApples !== -1) {
//     console.log('yes');
// }

// const users = ['Mango', 'Ajax', 'Poly'];
// const login = prompt('Введите логин');

// // const isRegistered = users.includes(login);

// if (users.includes(login)) {
//     console.log('Добро пожаловать');
// } else {
//     console.log('Неверный логин');
// }


const message = 'qq www rrr eeee yy ttttt';
const words = message.split(' ');
console.log(words);
const leftCount = 4;
const rightCount = 5;
const max = words.length - 1;


let target;

for (let i = 1; i < max; i += 1) {
    console.log(words[i]);
    const prevElLength = words[i-1].length;
    const nextElLength = words[i+1].length;


if (prevElLength === leftCount && nextElLength === rightCount) {
    target = words[i];
    }
}
console.log(words);
console.log(`Нужное слово: ${target}`);
 