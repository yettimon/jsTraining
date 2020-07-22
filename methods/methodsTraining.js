const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// log all first letters from the animals array words
const secretMessage = animals.map((el) =>el[0])

console.log(secretMessage.join(''));


// divide big numbers for 100
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number => {
  return number / 100;
})

console.log(smallNumbers);


/*
Call the .filter() method on randomNumbers to return values that are less than 250.
Save them to a new array called smallNumbers, declared with const.
nvoke .filter() on the favoriteWords array to return elements that have more than 7 characters.
Save the returned array to a const variable named longFavoriteWords.
*/
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers
const smallNumbers = randomNumbers.filter(number =>{
  return number < 250;
});
console.log(smallNumbers);

// Call .filter() on favoriteWords
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
console.log(longFavoriteWords);


/*
	1.Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and
	save the returned value to a const variable named foundAnimal.

	2.Call .findIndex() on the animals array return the index of the first element that starts with 's'.
	Assign the returned value to a const variable named startsWithS.
*/
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(num => {
  return num === 'elephant';
})

console.log(foundAnimal);


const startsWithS = animals.findIndex(el => {
  return el.charAt(0) === 's';
})

console.log(startsWithS);


/*
.reduce() Method
*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue) => {
  console.log('The value of accumulator: ',accumulator);
  console.log('The value of currentValue: ',currentValue);
  return accumulator + currentValue;
}, 10)

console.log(newSum);

/*

*/
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some( word => {
  return word.length < 6;
}));

const interestingWords = words.filter(word => word.length >5);
console.log(interestingWords);
console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));


/*

*/
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//   method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

//  method that will return a new array
const longCities = cities.filter(city => city.length > 7);

//  method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// method that will return a new array
const smallerNums = nums.map(num => num - 5);

//  method that will return a boolean value
nums.some(num => num < 0);
