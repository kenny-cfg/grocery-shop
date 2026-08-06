/*
FOR LOOPS
Let’s write a shopping list!
TASK:
1. Create an array of three grocery items you need
2. Using a for loop, console.log() each item in the array
Hint: we can use the array.length() function in the loop
BONUS TASK:
3. Number the items so the output looks like this:
“1. Butter”
“2. Eggs”
“3. Sugar”
*/

const groceryItems = ["Butter", "Eggs", "Sugar"];

// groceryItems = ["New Item"]; // This is illegal because *const*

// Not the bonus task
for (const item of groceryItems) {
  console.log(item);
}

// The bonus task
for (let index = 0; index < groceryItems.length; index++) {
  console.log(`${index + 1}. ${groceryItems[index]}`)
}
