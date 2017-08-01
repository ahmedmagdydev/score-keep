import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

///////// map example /////////////

// const numbers = [4, 9, 16, 25];
// console.log(numbers.map(Math.sqrt));

// const users = [
//                 {
//                     name:'ahmed',
//                     age:30
//                 },
//                 {
//                     name:'karim',
//                     age:29
//                 }
//             ];
// const userNames = users.map((user) => {return user.name})
// console.log(userNames);

///////// filter example /////////////

// const ages = [32, 33, 16, 40, 5];
// const adults = ages.filter((age) =>{ return age >= 18})
// console.log(adults)


// const users = [
//                 {
//                     name:'ahmed',
//                     age:30
//                 },
//                 {
//                     name:'karim',
//                     age:29
//                 }
//             ];
// const userNames = users.filter((user) => {return user.age >= 30})
// console.log(userNames);


///////// every example /////////////

// const ages = [32, 33, 16, 40];
// const areAdults = ages.every((age)=>{return age >= 18})
// console.log(areAdults)

///////// const example /////////////

// const foo = 123;
// if (true) {
//     const foo = 456;
// }
// console.log(foo)


///////// template string example /////////////

// const name = 'ahmed';
// console.log(`Hi, my age is ${name}`);


///////// arrow function example /////////////

// const multiply = (x, y) => x*y
// console.log(multiply(5,5))

///////// spread objects example /////////////

// const arr1 = ['two', 'three'];
// const arr2 = ['one', ...arr1, 'four', 'five'];
// console.log(arr2)

// const numbers = [9, 4, 7, 1];
// console.log(Math.min(...numbers))

// const user = {
//     department:'ui',
//     age:30,
//     level:'senior'
// }

// const ahmed = {...user, name:'ahmed'}
// console.log(ahmed)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
