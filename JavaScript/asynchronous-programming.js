// JavaScript can perform tasks in the background (like fetching data from the internet), 
// while continuing to execute other code. 
// This is known as asynchronous programming.

// Why is Asynchronous Programming Important?
// When you're doing tasks that take some time to complete (like reading a file or fetching data from an API), you don't want the entire program to stop and wait. 
// Instead, JavaScript can continue to run other code while it waits for the slow task to finish.

// Asynchronous Programming with Callbacks
// Callbacks are often used to handle asynchronous operations. 
// Let's look at an example of how they work.


console.log("Task 1: Start");

// Callback function executed after 2 seconds (2000 milliseconds)
setTimeout(function() {
  console.log("Task 2: This is delayed by 2 seconds");
}, 2000);

console.log("Task 3: End");

// function fetchData(callback) {
//   console.log("Fetching data...");

//   // Simulate a delay (e.g., fetching data from an API)
//   setTimeout(() => {
//     const data = { user: "Nsikak", age: 26 };
//     callback(data);
//   }, 2000); // Wait 2 seconds before executing the callback
// }

// function processData(data) {
//   console.log(`User: ${data.user}, Age: ${data.age}`);
// }

// // Passing 'processData' as a callback to 'fetchData'
// fetchData(processData);



// Callback Hell Example
// Callback Hell happens when you have too many nested callbacks, making the code hard to read and maintain.
// Let's simulate a scenario where we need to fetch user details, process them, and save them to a database:

// function getUser(callback) {
//   setTimeout(() => {
//       callback({ name: "Nsikak" });
//   }, 1000);
// }

// function getAge(user, callback) {
//   setTimeout(() => {
//       callback({ ...user, age: 26 });
//   }, 1000);
// }

// function saveToDatabase(user, callback) {
//   setTimeout(() => {
//       callback("User saved to database: " + JSON.stringify(user));
//   }, 1000);
// }

// // This results in nested callbacks, which is known as "callback hell"
// getUser((user) => {
//   getAge(user, (userWithAge) => {
//       saveToDatabase(userWithAge, (message) => {
//           console.log(message); // Output: User saved to database: {"name":"Nsikak","age":26}
//       });
//   });
// });

// Callback Hell makes code harder to follow. Promises and async/await can help solve this problem.

//   Introduction to Promises
//   Callbacks are useful, but they can become tricky to manage when you have multiple asynchronous operations. 
//   Promises provide a cleaner way to handle asynchronous tasks.

//   What is a Promise?
//   A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

//   A promise can have one of three states:
//   Pending: The operation is ongoing.
//   Fulfilled: The operation completed successfully.
//   Rejected: The operation failed.

// const myPromise = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation
//   const success = false;

//   setTimeout(() => {
//     if (success) {
//       resolve("Operation successful!");
//     } else {
//       reject("Operation failed!");
//     }
//   }, 2000);
// });

// console.log('myPromise >>>', myPromise)

//   Handling a Promise
//   We can handle promises using .then() and .catch().

// myPromise
// .then((message) => {
//   console.log(message); // Output: Operation successful!
// })
// .catch((error) => {
//   console.log(error); // If failed, output: Operation failed!
// });


// Chaining Promises
// When you have multiple asynchronous tasks, you can chain promises to handle them in order.

// const fetchUser = new Promise((resolve, reject) => {
// setTimeout(() => resolve({ user: "Nsikak" }), 1000);
// });

// const fetchAge = new Promise((resolve, reject) => {
// setTimeout(() => resolve({ age: 26 }), 1000);
// });

// fetchUser
// .then((userData) => {
//   console.log(userData); // Output: { user: "Nsikak" }
//   return fetchAge;
// })
// .then((ageData) => {
//   console.log(ageData); // Output: { age: 26 }
// })
// .catch((error) => {
//   console.error(error);
// });



// ----------------------------------------------------------------------------
// Using async/await
// ----------------------------------------------------------------------------
// async/await is a newer syntax to handle asynchronous operations.
// It makes the code look synchronous while still being asynchronous under the hood.
// async/await improves readability, especially when there are multiple async operations.

// async function fetchUserData() {
//   try {
//       // Simulate fetching user data
//       const user = await new Promise((resolve) => {
//           setTimeout(() => resolve({ user: "Nsikak" }), 1000);
//       });
//       console.log("User fetched:", user);

//       // Simulate fetching age data
//       const age = await new Promise((resolve) => {
//           setTimeout(() => resolve({ age: 26 }), 1000);
//       });
//       console.log("Age fetched:", age);

//       // Combine user and age data
//       const userData = { ...user, ...age };
//       console.log("Combined User Data:", userData);

//   } catch (error) {
//       console.error("Error fetching data:", error);
//   }
// }

// fetchUserData();

// Explanation of async/await:
// 1. The `async` keyword before the function makes it return a Promise.
// 2. The `await` keyword pauses the execution until the Promise resolves or rejects.
// 3. We use `try...catch` to handle any errors, making the code more robust.
// Use cases for async/await include fetching data from APIs, reading files from disk, and making database queries.

// ----------------------------------------------------------------------------
// try...catch with Promises
// ----------------------------------------------------------------------------
// If you need to catch errors in Promises, a try...catch block can be used within an async function.

// async function handlePromiseWithError() {
//   const myPromise = new Promise((resolve, reject) => {
//       setTimeout(() => reject("Something went wrong!"), 1000); // This simulates an error
//   });

//   try {
//       const result = await myPromise;
//       console.log(result); // This line won't run due to the error
//   } catch (error) {
//       console.error("Caught an error:", error); // Error caught here
//   }
// }

// handlePromiseWithError();

// ----------------------------------------------------------------------------
// Summary of Asynchronous Programming Techniques
// ----------------------------------------------------------------------------
// 1. Callbacks: Older technique, prone to "callback hell" if nested deeply.
// 2. Promises: Offers a cleaner way to handle async code, using .then() and .catch().
// 3. Async/Await: Built on top of Promises, makes asynchronous code easier to read and maintain.
//    It also allows us to use try...catch for error handling instead of .catch() with Promises.

// Always choose the right tool depending on the complexity of the async operations you're handling!
