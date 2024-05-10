// map
// Given an array of numbers [1, 2, 3, 4], use the map function to create a new array where each number is multiplied by 2.
// Expected output: [2, 4, 6, 8]

let nums1 = [1, 2, 3, 4];
let newNums = nums1.map(num => {
    return num * 2;
})
console.log(newNums);

// Given an array of words ["apple", "banana", "cherry"], use the map function to create a new array where each word is capitalized.
// Expected output: ["Apple", "Banana", "Cherry"]

let fruits = ["apple", "banana", "cherry"]
let capFruits = fruits.map(fruit => {
    return fruit.charAt(0).toUpperCase() + fruit.slice(1);
})
console.log(capFruits);

// filter
// Given an array of words ["apple", "banana", "cherry"], use the filter function to create a new array containing only words that start with the letter "a".
// Expected output: ["apple"]

let fruitsFilter = ["apple", "banana", "cherry"];
let aFruits = fruitsFilter.filter(fruit => {
    return fruit.charAt(0) === 'a';
})
console.log(aFruits);

// Given an array of objects [{name: "John", age: 20}, {name: "Jane", age: 25}], use the filter function to create a new array containing only people who are above the age of 21.
// Expected output: [{name: "Jane", age: 25}]

let people = [{name: "John", age: 20}, {name: "Jane", age: 25}];
let oldPeople = people.filter(person => {
    return person.age > 21;
})
console.log(oldPeople);

// forEach
// Given an array of numbers [1, 2, 3, 4], use the forEach function to console.log each number in the array.

let nums = [1, 2, 3, 4];
nums.forEach(num => {
    console.log(num);
})

// Given an array of words ["apple", "banana", "cherry"], use the forEach function to console.log a sentence containing each word in the array.
let fruitsForEach = ["apple", "banana", "cherry"];
fruitsForEach.forEach(fruit => {
    console.log(`I would like to eat a ${fruit}.`)
})

// Given an array of objects [{name: "John", age: 20}, {name: "Jane", age: 25}], use the forEach function to console.log a sentence for each person in the array, such as "John is 20 years old".

let forEachPeople = [{name: "John", age: 20}, {name: "Jane", age: 25}];
forEachPeople.forEach(person => {
    console.log(`${person.name} is ${person.age} years old.` )
})

// reduce

// Given an array of objects [{name: "John", age: 20}, {name: "Jane", age: 25}], use the reduce function to calculate the total age of all the people in the array.
// Expected output: 45
let reducePeople = [{name: "John", age: 20}, {name: "Jane", age: 25}];
let totalAges = reducePeople.reduce((totalAge, person) => {
    return totalAge + person.age; 
}, 0)

console.log(totalAges);

// Given an array of numbers [1, 2, 3, 4], use the reduce function to calculate the sum of all the numbers in the array.
// Expected output: 10

let numbers = [1, 2, 3, 4];
const sumOfNums = numbers.reduce((total, number) => {
    return total + number;
})
console.log(sumOfNums);

// Given an array of words ["apple", "banana", "cherry"], use the reduce function to find the longest word in the array.
// Expected output: "banana"

const words = ["apple", "bananas", "cherry"];
const longWord = words.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
})
console.log(longWord);

// Given an array of objects [{name: "John", age: 20}, {name: "Jane", age: 25}, {name: "Bob", age: 30}], use the reduce function to find the oldest person in the array.
// Expected output: {name: "Bob", age: 30}

let radPeople = [{name: "John", age: 20}, {name: "Jane", age: 25}, {name: "Bob", age: 30}];
const oldest = radPeople.reduce((acc, curr) => {
    return acc.age > curr.age ? acc : curr;
})
console.log(oldest);

// Given an array of numbers [2, 4, 6, 8], use the reduce function to calculate the product of all the numbers in the array.
// Expected output: 384

const ogNums = [2, 4, 6, 8];
const multiply = ogNums.reduce((acc, curr) => {
    return acc *= curr;
})

console.log(multiply);

// Turn an array of numbers into a long string of all those numbers.
let numms = [1,2,3];
const stringNums = numms.reduce((acc, curr) => {
    return `${acc}${curr}`
})

console.log(stringNums);

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// 227005

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalPrice = wishlist.reduce((acc, curr) => {
    return acc += curr.price;
}, 0)
console.log(totalPrice);

// Exercises:
/* Write a function cardTypeCheck that takes two parameters: 
an array of cards (Elyse's deck) and the type of card to count. 
The function should use forEach and return the number of cards 
in the deck of the specified type.*/

function cardTypeCheck(stack, card) {
  let cardNum = 0;
  stack.forEach( card => {
    if (card === card)
    cardNum++
  })
    return cardNum
}
const cardType = 3;

console.log(cardTypeCheck([1, 2, 3, 4], cardType));