let countdown = -10;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

// This *ALWAYS* executes the first iteration
do {
  console.log(countdown);
  countdown--;
} while (countdown > 0)

// console.log(countdown); // Prints 0
