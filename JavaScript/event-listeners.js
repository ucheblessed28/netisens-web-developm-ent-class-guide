// An event listener is a procedure in JavaScript that waits for an event to occur on a specific element, 
// like a button click, a key press, or a mouse movement. When the event happens, 
// the event listener responds by executing a specific function.



// Event listeners are essential because they allow you to make your web pages interactive. 
// Without them, your webpage would be static, with no response to user actions.



// The Basic Structure of an Event Listener
// element.addEventListener(event, function, useCapture);

// element: The HTML element you want to listen for events on.
// event: The type of event you're listening for (e.g., "click", "mouseover").
// function: The function to be executed when the event occurs.
// useCapture (optional): A Boolean value that specifies whether the event should be captured in the capturing phase or the bubbling phase.


// Common Types of Event Listeners

// A.) Mouse Events

// 1.) Click: Triggered when an element is clicked.
// const button = document.getElementById("myButton");
// button.addEventListener("click", function() {
//   alert("Button was clicked!");
// });

// 2.) dblclick: Triggered when an element is double-clicked.
// const button = document.getElementById("myButton");
// button.addEventListener("dblclick", function() {
//   alert("Button was double-clicked!");
// });

// 3.) mouseover: Triggered when the mouse pointer is moved over an element.
// const button = document.getElementById("myButton");
// button.addEventListener("mouseover", function() {
//   button.style.backgroundColor = "blue";
// });

// 4.) mouseout: Triggered when the mouse pointer is moved out of an element.
// const button = document.getElementById("myButton");
// button.addEventListener("mouseout", function() {
//   button.style.backgroundColor = "";
// });

// B.) Keyboard Events
// 1.) keydown: Triggered when a key is pressed down.
// document.addEventListener("keydown", function(event) {
//     console.log("Key pressed: " + event.key);
//   });

// 2.) keyup: Triggered when a key is released.
// document.addEventListener("keyup", function(event) {
//     console.log("Key released: " + event.key);
//   });

// 3.) keypress: Triggered when a key is pressed (deprecated, use keydown or keyup).
// document.addEventListener("keypress", function(event) {
//     console.log("Key pressed: " + event.key);
//   });
  

// C.) Form Events
// 1.) submit: Triggered when a form is submitted.
// const form = document.getElementById("myForm");
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevents the form from being submitted
//   alert("Form submitted!");
// });

// 2.) change: Triggered when the value of an input element changes.
// const input = document.getElementById("myInput");
// input.addEventListener("change", function() {
//   console.log("Input value changed: " + input.value);
// });

// 3.) focus: Triggered when an element (like an input) gains focus.
// const input = document.getElementById("myInput");
// input.addEventListener("focus", function() {
//   input.style.backgroundColor = "yellow";
// });

// 4.) blur: Triggered when an element loses focus.
// const input = document.getElementById("myInput");
// input.addEventListener("blur", function() {
//   input.style.backgroundColor = "";
// });


// D.) Window Events
// 1.) load:Triggered when the entire page has loaded.
// window.addEventListener("load", function() {
//     alert("Page has fully loaded!");
//   });

// 2.) resize: Triggered when the browser window is resized.
// window.addEventListener("resize", function() {
//     console.log("Window resized to: " + window.innerWidth + "x" + window.innerHeight);
//   });

// 3.) scroll: Triggered when the user scrolls the page.
// window.addEventListener("scroll", function() {
//     console.log("Page scrolled!");
//   });



// Removing Event Listeners
// function handleClick() {
//     alert("Button clicked!");
//   }
  
//   const button = document.getElementById("myButton");
//   button.addEventListener("click", handleClick);
  
//   // Later, remove the event listener
//   button.removeEventListener("click", handleClick);
  
  

  



  
  



