const fruits = ["apple", "banana", "kiwi", "avocado", "tomato"];

// More modern, functional function declaration
const printFruitInformationNew = fruit => {
  console.log(`The fruit is ${fruit}, and it has ${fruit.length} letters.`);
  console.log("This is the new version");
}

for (const fruit of fruits) {
  printFruitInformation(fruit);
}

printFruitInformation("Aardvark");

for (const fruit of fruits) {
  printFruitInformationNew(fruit);
}

// Classical syntax for defining functions
function printFruitInformation(fruit) {
  console.log(`The fruit is ${fruit}, and it has ${fruit.length} letters.`);
  console.log("This is the old version");
}