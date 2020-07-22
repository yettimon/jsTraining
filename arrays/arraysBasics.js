/*
change last value in array
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils.pop('Spork');
utensils.push('Spoon');
console.log(utensils);
/*
arrays task #2

Find the length of the objectives array and log it to the console.

*/
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

/*
arrays task 3

Add two elements to the chores array using .push().
Use console.log to print your chores array to make sure your items were added.

*/

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('cook dinner', 'mop floor');

console.log(chores);

/*
Task 4
The .pop() Method
Use the .pop() method to remove the last element from chores.
*/
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores);

/*
Task 5
Use the .shift() method to remove the first item from the array groceryList.
Log the new groceryList to the console.
Use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
After calling .unshift() on groceryList, log groceryList to the console.
Use .slice() to provide your friend with a list of these three things.
Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.

You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.

Under the code you added for step 2, use .slice() to provide  with a list of these three things.

Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.
*/
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);
// Find the index of a particular element in groceryList using .indexOf().
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


/*
Task 3
Under the console.log() statement, define another function named removeElement that takes a parameter of newArr.
Inside the function body call .pop() on newArr.
Call removeElement() with an argument of concept.
After calling removeElement(concept), check the value of concept by logging it to console.
*/

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

removeElement = newArr => {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

/*
Create a variable numberClusters. Assign as its value an array with three array elements.

The first array element should hold the elements 1 and 2 in that order.
The second array element should hold the elements 3 and 4 in that order.
The third array element should hold the elements 5 and 6 in that order.
Declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.
*/
const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];
