# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: I know that the arguments are the variable refered to when you invoke a function that intakes parameters. Too my knowledge you can use parameter and arguments interchangably.

Researched answer: The difference between parameters and an argument is that the argument is refered to the vaiables when a function is invoked but parameter is refering to the variables when the function is created/declared.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: Value(the value you of the element) Index(the index of the value), array(the array itself) - value is the required parameter. index and array are optional.

Researched answer: "currentValue" this is the only requireed parameter. it contains the value of the current element. Index, this contains the index of the current element and this one is optional. Array, this contains the array on which the map function is applied.

3. What is the difference between map and filter?

Your answer: map and filter both iterate through an array. they both return a new array; map returns the same size array but filter will return a subset of the prior array. Both map and filter area array prototype which means they both must be called on an array.

Researched answer: Both map and filter are prototypes arrays which means they oth must be called upon an array. With that being said there are some differences and scenarios where we should use map over filter or filter over map; First off, map iterates through the array value by value and performs a specfic operation over each value and will return a new array BUT WITH the same length. Filter on the other hand, will create a new array but a subset of the prior array if the value makes it through the conditional statement within the filter.

1. What is iteration?

Your answer: Iteration is the process in which we perform count in a specific manner until a conditions is met. For an example - for loops; you can specify where the iteration starts and counting by a specific amount until we reach a certain point

Researched answer:iteration is simply the number of time(s) a loop can be executed before a condition is met and therefore stops the iteration.

1. What is the difference between a function and a method?

Your answer: A function is a block of code that has a specific role/job/functionality that can then be called at any point within your project. It can have a parameter and also will return data.

Researched answer: Well first of all a function is a block of code that can be called on in other places of your porject. Function has a name and it can take in a parameter of data if needed and will return data. A method usually a small piece of code that can be called by its name. Method is using a larger block of code that someone else has already written to make our lives easier. A method is associateed with an object

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting in Javascript is the practice of placing all declerations at the top of the file.
This can help with the flow of code and help keep track of which variables/functions or method have a specific scope on the file.

Researched answer: JavaScript Hoisting is the process to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. From what I found these are three different behaviors of Hoisting ---
1) Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
2)Being able to reference a variable in its scope before the line it is declared, without throwing a 
3) ReferenceError, but the value is always undefined. ("Declaration hoisting")
The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: is a template for objects and methods with data types. Usually falls under a specific category together 

2. Spread operator: the spread operator is a short cut to quickly copy all or part of an existing array into another array by using the ( ... ) syntax on the array.

3. React state: React state is a built in method within React  that is used to hold real time information for a specific component.

4. React props: React Props are like function arguments in JavaScript and attributes in HTML. React Props are another way to hold data for a react component. THey can also be using to pass data from different components as parameters within HTML attributes.

5. DOM events: DOM or Document Object Model Events are signals to that back end that our browsers has been interacted with  or that something has occured and the state needs to be updated based off the signal that was given by the user(what was interacted with on the web page)
