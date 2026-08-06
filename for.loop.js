// 1 - Initializes a variable to 0
// 2 - Runs code inside the loop
// 3 - Applies the third clause (i++)
// 4 - Checks the second condition
//   * if true, go to 2
//   * if false, we are done

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const fruits = ["apple", "banana", "kiwi", "avocado", "tomato"];

// for (let index = 0; index < fruits.length; index ++) {
//   console.log(fruits[index]);
// }

for (const fruit of fruits) {
  console.log(fruit);
}