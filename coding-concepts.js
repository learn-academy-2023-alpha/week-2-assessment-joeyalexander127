// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: It will split the given string into an array at each letter
// b) Verify and explain: The String was split into an array by each character (including spaces). The reason this works is because by invoking the split Built-in-Method it will parse through the string and throw it into an array however you tell it to split it by. In this case it was by character ("").

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}

console.log(greeter("LEARN Student"))
// a) Your answer: undefined because there is no return statement for the function.
// b) Verify and explain: This console log returned undefined because the the function "greeter" has no return statement.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: It will return the array with every value multiplied by 2 ([8, 10, 12, 14, 16 ])
// b) Verify and explain: This reason this returns the array with every value multiplied by 2 is because they are invoking the .map method on the array, taking in the each value as a parameter and then multieplying that value by 2 nd return the array.


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This will remove all even numbers from the array and just return the array with odd numbers ([ 11, 13, 15 ])
// b) Verify and explain: Yes, only the odds numbers were returned in the array. The reason for this is is because we are invoking the filter method on the array which will return a subset of the array based off the conditions that were applied with in this function. return the numbers that dont equal 0 when you take the modulus 2 will only be odd numbers. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaSctipt"
// b) Verify and explain: The reason javascript is returned is because you invoke the myCodingSkills object and specifically calling the langeuage array at index zero. which is where "JavaScript" is sitting within that objects array
