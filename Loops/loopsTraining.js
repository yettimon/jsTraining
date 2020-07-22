// Create a program that loops from 5 to 10 and logs each number to the console.
for (let counter = 5; counter <= 10; counter++){
	console.log(counter);
}

// The loop below loops from 0 to 3.
foar (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

/*
Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

Inside the block of the for loop, use console.log() to
log each element in the vacationSpots array after the string 'I would love to visit '.
For example, the first round of the loop should print 'I would love to visit Bali' to the console.*/

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i])
}
/*
1.
	You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists.
	Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.
2.
	Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends.
	Make exactly two of these the same as two of the friends in the bobsFollowers array.
3.
	Create a third variable named mutualFollowers and set it to an empty array.
4.
	Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop.
	If the current element from the outer loop is the same as the current element from the inner loop,
	push that element into the mutualFollowers array.

*/
// comparing two arrays of friends list on common names
const bobsFollowers = ['Marcus', 'Dmitriy', 'Ivan', 'Andrew'];

const tinasFollowers = ['Tanya', 'Dmitriy', 'Ivan'];

var mutualFollowers = [];

for (var i = 0; i < bobsFollowers.length; i++){
  for(var j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
    mutualFollowers.push(tinasFollowers[j]);
  }
  }

}
console.log('Mutual followers are : ' +mutualFollowers);

/*
task
add random values to array and stop loop while spade appears
*/
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard
while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
/*
do/while example
*/
const cupsOfSugarNeeded = 10;
var cupsAdded = 0;
do{
  cupsAdded++
}
while(cupsAdded < cupsOfSugarNeeded)
console.log(cupsAdded);

/*
break loop while Notorious B.I.G. appears*/
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  if(rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");
