// JavaScript can perform tasks in the background (like fetching data from the internet), 
// while continuing to execute other code. 
// This is known as asynchronous programming.

// Why is Asynchronous Programming Important?
// When you're doing tasks that take some time to complete (like reading a file or fetching data from an API), you don't want the entire program to stop and wait. 
// Instead, JavaScript can continue to run other code while it waits for the slow task to finish.

// Asynchronous Programming with Callbacks
// Callbacks are often used to handle asynchronous operations. 
// Let's look at an example of how they work.

function fetchData(callback) {
    console.log("Fetching data...");
  
    // Simulate a delay (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { user: "Nsikak", age: 26 };
      callback(data);
    }, 2000); // Wait 2 seconds before executing the callback
  }
  
  function processData(data) {
    console.log(`User: ${data.user}, Age: ${data.age}`);
  }
  
  // Passing 'processData' as a callback to 'fetchData'
  fetchData(processData);


//   Introduction to Promises
//   Callbacks are useful, but they can become tricky to manage when you have multiple asynchronous operations. 
//   Promises provide a cleaner way to handle asynchronous tasks.
  
//   What is a Promise?
//   A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
  
//   A promise can have one of three states:
  
//   Pending: The operation is ongoing.
//   Fulfilled: The operation completed successfully.
//   Rejected: The operation failed.

const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    const success = true;
  
    setTimeout(() => {
      if (success) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
    }, 2000);
  });

  
//   Handling a Promise
//   We can handle promises using .then() and .catch().

myPromise
  .then((message) => {
    console.log(message); // Output: Operation successful!
  })
  .catch((error) => {
    console.log(error); // If failed, output: Operation failed!
  });


// Chaining Promises
// When you have multiple asynchronous tasks, you can chain promises to handle them in order.

  const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ user: "Nsikak" }), 1000);
  });
  
  const fetchAge = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ age: 26 }), 1000);
  });
  
  fetchUser
    .then((userData) => {
      console.log(userData); // Output: { user: "Nsikak" }
      return fetchAge;
    })
    .then((ageData) => {
      console.log(ageData); // Output: { age: 26 }
    })
    .catch((error) => {
      console.error(error);
    });



// Summary
// Higher-Order Functions: Functions that take other functions as arguments or return functions.

// Callbacks: Functions passed into other functions and invoked after a task is complete. 
// They're commonly used in asynchronous programming.

// Asynchronous Programming: Allows tasks (like fetching data) to run in the background while other code continues to execute.

// Promises: A modern way to handle asynchronous tasks in JavaScript, making it easier to manage complex operations without "callback hell."