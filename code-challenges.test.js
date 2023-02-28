// // ASSESSMENT 2: Coding Practical Questions with Jest

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.


// // a) Create a test with expect statements for each of the variables provided.
describe("divisibleByThree", ()=> {
    it("returns if given number is divisble by three", ()=> {
        const object1 = { number: 15 }
                // Expected output: "15 is divisible by three"
                const object2 = { number: 0 }
                // Expected output: "0 is divisible by three"
                const object3 = { number: -7 }
                // Expected output: "-7 is not divisible by three"
            expect(divisibleByThree(object1)).toEqual(`${15} is divisible by three`)
            expect(divisibleByThree(object2)).toEqual(`${0} is divisible by three`)
            expect(divisibleByThree(object3)).toEqual(`${-7} is not divisible by three`)
    })
})

// // //---> ReferenceError: divisibleByThree is not defined


// // // b) Create the function that makes the test pass.

// ---------Pseudo Code----------
// Input: An object of numbers
// Output: Whether or not the number is divisble by three evenly
// Create a function that takes in the object of the number.
// There are a few ways we could do this but we are just going to use an If/else conditional statement 
//   that takes the given number and applies the modulus operator and checks if that is equal to zero or not.
// If the modulus 3 of the given number is equal to zero then return that number is evenly divisbale by 3
 // else if the modules 3 of the given number is not zero return that this nubmer is not evenly divisible by 3.
const divisibleByThree = (object) => {
        if(object.number % 3 === 0){
            return `${object.number} is divisible by three`
        }else if(object.number % 3 !== 0){
            return `${object.number} is not divisible by three`
        }else return "something went wrong"
}

// -->  PASS  ./code-challenges.test.js
//    divisibleByThree
//    ✓ returns if given number is divisble by three (4 ms)

//  Test Suites: 1 passed, 1 total
//  Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//  a) Create a test with expect statements for each of the variables provided.
describe("capitalized", () => {
    it("Returns the given array with all words capitalized", ()=> {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// // -->     ReferenceError: capitalized is not defined

// // b) Create the function that makes the test pass.
//-------Pseudo Code:--------
//Input: array of Strings
//Out put: array of the same strings but with all first letters of the words capitalized.
// Create a functioned call capitalized that takes in the given array.
// we will be using the built in method .map to iterate through the entire array by each value.
// at each value you we will take the charAt(0) and assign the <toUpperCase> and assign that to the cap variable we created.
// create a lowerCaseLetters variable to hold the lowercase portion of the word values. 
//we slice the word after the first index and lower case it
// we then return the cap + the lowerCaseLetters

const capitalized = (array) => {
        return array.map((value) => {
            const cap = value.charAt(0).toUpperCase()
            const lowerCaseLetters = value.slice(1).toLowerCase()
            return cap + lowerCaseLetters
})
}
// //-->  PASS  ./code-challenges.test.js
// //   capitalized
// //   ✓ Returns the given array with all words capitalized (4 ms)

// // Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.
describe("indexOfFirstVowel", () => {
    it("Returns the index of the first vowel that is in the given string",()=> {
                const vowelTester1 = "learn"
                // Expected output: 1
                const vowelTester2 = "academy"
                // Expected output: 0
                const vowelTester3 = "challenges"
                // Expected output: 2
        expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
        expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
        expect(indexOfFirstVowel(vowelTester3)).toEqual(2)

       expect(firstVowelFinder(vowelTester1)).toEqual("1")
       expect(firstVowelFinder(vowelTester2)).toEqual("0")
       expect(firstVowelFinder(vowelTester3)).toEqual("2")
    })
})
//-->     ReferenceError: indexOfFirstVowel is not defined


// b) Create the function that makes the test pass.
//Spent way too many hours trying to get this disaster to work until finding the search method(below). I still wanted to finished this first function that i spent quite a bit of time on.

//-------Pseudo Code: 1st method----------
// input: String
//Out put: index of first vowel in string
// Create a function <firstVowelFinder> that takes in the given string.
// create an array called vowels within this function and populate the array with all vowels.
// we will then split the given string into an array using .split method.
// we will iterate through our array using .map, taking in the value and index as our parameters.
// within the first .map function use a conditiona statement us if/else to check whether any of the values match the value of the string index. if so return that index.
// Then use the .filter method to filter out all undifined array indexs.
// then join the remaining indexs that were returned.
// That we only need the first one found in the word. us .charAt(0) to only return the first index of the vowel.
const firstVowelFinder = (string) => {
    let vowels = ["a", "e", "i", "o", "u", "y"]
    return string.split("").map((value,index)=> {
        if(vowels.includes(value)){
            return index      
        }
    }).filter((value) => {
       return  value !== undefined    
}).join("").charAt(0)
}
//-->  PASS  ./code-challenges.test.js
// indexOfFirstVowel
//   ✓ Returns the index of the first vowel that is in the given string (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// the very simple way to make this function work :)
//-------Pseudo Code: 2nd method ---------
// input: string
// Out put: first index of a vowel value
// Create a function called indexOfFirstVowel.
// create a variable using <let> and call it checkingVowels.
// set this new var equal to the string input and use the .search method with all vowel included /[a,e,i,o,u]/i.
// return the the variable which will be where the vowels index was found.
const indexOfFirstVowel = (string) => {
       let checkingVowels = string.search(/[a,e,i,o,u]/i)
       return checkingVowels
}


//-->  PASS  ./code-challenges.test.js
//   indexOfFirstVowel
//   ✓ Returns the index of the first vowel that is in the given string (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



//-------- ALL FUNCTIONS PASSING TEST CASES--------
// PASS  ./code-challenges.test.js
// divisibleByThree
//   ✓ returns if given number is divisble by three (2 ms)
// capitalized
//   ✓ Returns the given array with all words capitalized
// indexOfFirstVowel
//   ✓ Returns the index of the first vowel that is in the given string

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

