/*
WHILE LOOPS
Let’s write a program to help us budget money for this month’s grocery shopping.
TASK:
1. Create two number variables:
a. budget - set to 10 (the total amount you have to spend)
b. itemCost - set to 2 (the cost of each grocery item)
2. Create a while loop:
a. The loop should run while the value of budget is greater than or equal to
itemCost.
b. Each time the loop runs, subtract the itemCost value from the budget
and print out what the cost was and how much remains in the budget.
BONUS TASK:
Try changing the values of budget and itemCost to see how it affects how many
times the loop runs.
*/

let budget = 10;
const itemCost = 2;

while (budget >= itemCost) {
  budget = budget - itemCost;
  console.log(`The cost was ${itemCost}, and you have ${budget} left`)
}