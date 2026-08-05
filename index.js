let age = 14;
let hasParentalConsent = false;
let message;

if (age >= 18) {
  message = "Welcome to the website";
} else if (age >= 12 && hasParentalConsent) {
  message = "You are allowed to access the website with parental consent";
} else if (age >= 12 && !hasParentalConsent) {
  message = "You need parental consent to access this website";
} else if (age >= 13) {
  message = "You can buy a limited amount of stuff on this website";
} else {
  message = "You are way too young, go away";
}

console.log(message);
