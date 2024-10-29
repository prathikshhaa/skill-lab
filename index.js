const express = require('express')
const cors = require('cors')
const app=express();
app.use(cors());
app.listen(1234,()=>console.log('User Server Started'))
app.get("/search", (request, response) => {
    const input = request.query.input;+
    console.log('User search query',input)
    const results=searchKeywords.get(input);
    response.send(results);
});
const documents=[
    {"id": 1, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript", "content": "JavaScript is a high-level, dynamic, untyped, and interpreted programming language."},
    {"id": 2, "link": "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/", "content": "JavaScript is standardized in the ECMAScript language specification."},
    {"id": 3, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", "content": "JavaScript can be used for both client-side and server-side development."},
    {"id": 4, "link": "https://www.w3schools.com/js/js_intro.asp", "content": "JavaScript was created by Brendan Eich in 1995."},
    {"id": 5, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", "content": "JavaScript has built-in support for arrays."},
    {"id": 6, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object", "content": "Everything in JavaScript is an object or a primitive."},
    {"id": 7, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function", "content": "Functions in JavaScript are first-class objects."},
    {"id": 8, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String", "content": "JavaScript has built-in string manipulation capabilities."},
    {"id": 9, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number", "content": "JavaScript supports both integer and floating-point numbers."},
    {"id": 10, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean", "content": "Boolean values in JavaScript are true or false."},
    {"id": 11, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date", "content": "JavaScript has built-in date and time manipulation capabilities."},
    {"id": 12, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp", "content": "Regular expressions are supported in JavaScript for pattern matching."},
    {"id": 13, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling", "content": "JavaScript uses control flow statements like if, switch, and loops."},
    {"id": 14, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let", "content": "The let keyword is used to declare block-scoped variables."},
    {"id": 15, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const", "content": "The const keyword is used to declare block-scoped constants."},
    {"id": 16, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var", "content": "The var keyword declares variables globally or locally to the function."},
    {"id": 17, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise", "content": "Promises are used to handle asynchronous operations."},
    {"id": 18, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions", "content": "Functions can be defined using function declarations or expressions."},
    {"id": 19, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions", "content": "Arrow functions provide a concise syntax for writing functions."},
    {"id": 20, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map", "content": "The Map object holds key-value pairs and remembers the original insertion order."},
    {"id": 21, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set", "content": "The Set object lets you store unique values of any type."},
    {"id": 22, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap", "content": "WeakMap allows you to store key-value pairs where keys are objects."},
    {"id": 23, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet", "content": "WeakSet lets you store unique objects without preventing garbage collection."},
    {"id": 24, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON", "content": "JavaScript Object Notation (JSON) is a lightweight data interchange format."},
    {"id": 25, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math", "content": "The Math object provides properties and methods for mathematical constants and functions."},
    {"id": 26, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/console", "content": "The console object provides access to the browser's debugging console."},
    {"id": 27, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call", "content": "The call() method calls a function with a given this value and arguments."},
    {"id": 28, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply", "content": "The apply() method calls a function with a given this value and an array of arguments."},
    {"id": 29, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind", "content": "The bind() method creates a new function that, when called, has its this keyword set."},
    {"id": 30, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map", "content": "The map() method creates a new array with the results of calling a provided function."},
    {"id": 31, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter", "content": "The filter() method creates a new array with all elements that pass the test."},
    {"id": 32, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce", "content": "The reduce() method executes a reducer function on each element."},
    {"id": 33, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort", "content": "The sort() method sorts the elements of an array."},
    {"id": 34, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach", "content": "The forEach() method executes a provided function once for each array element."},
    {"id": 35, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find", "content": "The find() method returns the value of the first element that satisfies the testing function."},
    {"id": 36, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes", "content": "The includes() method determines whether an array includes a certain value."},
    {"id": 37, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat", "content": "The flat() method creates a new array with all sub-array elements concatenated."},
    {"id": 38, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat", "content": "The concat() method is used to merge two or more arrays."},
    {"id": 39, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push", "content": "The push() method adds one or more elements to the end of an array."},
    {"id": 40, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop", "content": "The pop() method removes the last element from an array."},
    {"id": 41, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift", "content": "The shift() method removes the first element from an array."},
    {"id": 42, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift", "content": "The unshift() method adds one or more elements to the beginning of an array."},
    {"id": 43, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring", "content": "The substring() method returns a part of the string between two specified indexes."},
    {"id": 44, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice", "content": "The slice() method extracts a section of a string and returns it as a new string."},
    {"id": 45, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim", "content": "The trim() method removes whitespace from both ends of a string."},
    {"id": 46, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase", "content": "The toUpperCase() method returns the calling string value converted to uppercase."},
    {"id": 47, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase", "content": "The toLowerCase() method returns the calling string value converted to lowercase."},
    {"id": 48, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace", "content": "The replace() method returns a new string with some or all matches replaced."},
    {"id": 49, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split", "content": "The split() method splits a string into an array of substrings."},
    {"id": 50, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf", "content": "The indexOf() method returns the index of the first occurrence of a specified value."},
    {"id": 51, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf", "content": "The lastIndexOf() method returns the index of the last occurrence of a specified value."},
    {"id": 52, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI", "content": "Math.PI returns the value of Pi, approximately 3.14159."},
    {"id": 53, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random", "content": "Math.random() returns a floating-point, pseudo-random number."},
    {"id": 54, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs", "content": "Math.abs() returns the absolute value of a number."},
    {"id": 55, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor", "content": "Math.floor() returns the largest integer less than or equal to a given number."},
    {"id": 56, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil", "content": "Math.ceil() returns the smallest integer greater than or equal to a given number."},
    {"id": 57, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt", "content": "Math.sqrt() returns the square root of a number."},
    {"id": 58, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow", "content": "Math.pow() returns the base to the exponent power."},
    {"id": 59, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round", "content": "Math.round() returns the value of a number rounded to the nearest integer."},
    {"id": 60, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max", "content": "Math.max() returns the largest of zero or more numbers."},
    {"id": 61, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min", "content": "Math.min() returns the smallest of zero or more numbers."},
    {"id": 62, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects", "content": "Objects in JavaScript are collections of key-value pairs."},
    {"id": 63, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create", "content": "Object.create() creates a new object, using an existing object as a prototype."},
    {"id": 64, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys", "content": "Object.keys() returns an array of a given object's own property names."},
    {"id": 65, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values", "content": "Object.values() returns an array of a given object's own enumerable property values."},
    {"id": 66, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries", "content": "Object.entries() returns an array of a given object's own enumerable string-keyed property pairs."},
    {"id": 67, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign", "content": "Object.assign() copies the values of all enumerable own properties from one or more source objects."},
    {"id": 68, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal", "content": "Object.seal() prevents new properties from being added to an object."},
    {"id": 69, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze", "content": "Object.freeze() freezes an object, preventing new properties from being added."},
    {"id": 70, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor", "content": "Object.getOwnPropertyDescriptor() returns a property descriptor for an object."},
    {"id": 71, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames", "content": "Object.getOwnPropertyNames() returns an array of all properties found directly in a given object."},
    {"id": 72, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype", "content": "Every JavaScript object has a prototype property."},
    {"id": 73, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype", "content": "Function.prototype allows you to define methods on all function objects."},
    {"id": 74, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype/toString", "content": "Function.prototype.toString() returns a string representing the source code of the function."},
    {"id": 75, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all", "content": "Promise.all() returns a single Promise that resolves when all of the promises have resolved."},
    {"id": 76, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race", "content": "Promise.race() returns a promise that resolves or rejects as soon as one of the promises resolves or rejects."},
    {"id": 77, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve", "content": "Promise.resolve() returns a Promise object that is resolved with a given value."},
    {"id": 78, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject", "content": "Promise.reject() returns a Promise object that is rejected with a given reason."},
    {"id": 79, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then", "content": "The then() method returns a Promise and executes its argument once the Promise is resolved."},
    {"id": 80, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch", "content": "The catch() method returns a Promise and deals with rejected cases."},
    {"id": 81, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_asynchronous_code", "content": "JavaScript handles asynchronous code with callbacks, promises, and async/await."},
    {"id": 82, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/async_function", "content": "An async function is a function declared with the async keyword."},
    {"id": 83, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/await", "content": "The await keyword is used to wait for a Promise to resolve."},
    {"id": 84, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Object_methods", "content": "JavaScript provides various methods for object manipulation."},
    {"id": 85, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now", "content": "Date.now() returns the number of milliseconds since January 1, 1970."},
    {"id": 86, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear", "content": "The getFullYear() method returns the year of a date as a four-digit number."},
    {"id": 87, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth", "content": "The getMonth() method returns the month of a date as a number (0-11)."},

    {"id": 88, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate", "content": "The getDate() method returns the day of the month (1-31) for a specified date."},
    {"id": 89, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours", "content": "The getHours() method returns the hour (0-23) for the specified date."},
    {"id": 90, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes", "content": "The getMinutes() method returns the minutes (0-59) for the specified date."},
    {"id": 91, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds", "content": "The getSeconds() method returns the seconds (0-59) for the specified date."},
    {"id": 92, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds", "content": "The getMilliseconds() method returns the milliseconds (0-999) for the specified date."},
    {"id": 93, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear", "content": "The setFullYear() method sets the full year for a specified date."},
    {"id": 94, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth", "content": "The setMonth() method sets the month for a specified date."},
    {"id": 95, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate", "content": "The setDate() method sets the day of the month for a specified date."},
    {"id": 96, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours", "content": "The setHours() method sets the hour for a specified date."},
    {"id": 97, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes", "content": "The setMinutes() method sets the minutes for a specified date."},
    {"id": 98, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds", "content": "The setSeconds() method sets the seconds for a specified date."},
    {"id": 99, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds", "content": "The setMilliseconds() method sets the milliseconds for a specified date."},
    {"id": 100, "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString", "content": "The toISOString() method returns the date as a string in ISO format."},
];
    // const searchQuery="Java"
    // for(let i=0;i<documents.length;i++){
        
    //     if(documents[i].content.includes(searchQuery)){
    //         console.log(documents[i].id)
    //     }
    // }
    const searchKeywords=new Map();
    documents.forEach((doc)=>{
    const words =doc.content.split(" ");
    words.forEach((word)=>{
        const lw = word.toLowerCase()
        if(!searchKeywords.has(lw)){
            searchKeywords.set(lw,[])
        }
        searchKeywords.get(lw).push(doc)
    });
});
    const query="JavaScript"
    console.log(searchKeywords.get(query))
   




