// Conditionals are used to perform different actions based on different conditions. 
// The main conditional statements in JavaScript are:


// if Statement:

// if (condition) {
//   code to execute if condition is true
// }

// let password = '12345678';

// if(password === '12345678wqwttrtry'){
//     console.log('logged in successfully');
// }else{
//     console.log('invalid credentials');
// }

// console.log(typeof 'Musa');
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof '55');


// Get the user input and store it in the variable
let score = prompt("Please enter your score: ");
console.log('Score before trimming: ' + score);
console.log('length before trimming: ' + score.length);

// Remove any leading or trailing whitespaces from the score
score = score.trim();
console.log('Score after trimming: ' + score);
console.log('length after trimming: ' + score.length);


// check if score is greater than 0
if(score.length > 0 && !isNaN(score) ){
    // Convert Score into a number
    score = Number(score);
    console.log('Score after converting to number: ' + score);
    if(score >=0 && score <= 100){
        if(score >= 70){
            console.log('Congratulations, you scored an A');
        }else if(score >=60){
            console.log('Congratulations, you scored a B');
        }else if(score >=50){
            console.log('Congratulations, you scored a C');
        }else if(score >=45){
            console.log('Congratulations, you scored a D');
        }else{
            console.log('Congratulations, you scored an F, come back next year Dummy');
        }
    }else{
        console.log('invalid score, out of range')
    }
   
}else{
    console.log('Invalid score');
}



// let bankBalance = 70000;

// if(bankBalance > 80000){
//     console.log('rich Investor');
// }else if(bankBalance > 65000){
//     console.log('Agba baller');
// }else if(bankBalance > 50000){
//     console.log('Odogwu');
// }else if(bankBalance > 20000){
//     console.log('you are a Public servant');
// }else if(bankBalance > 10000){
//     console.log('you are broke');
// }else{
//     console.log('you are a broke bum');
// }



// if...else Statement:
// if (condition) {
//     code to execute if condition is true
//   } else {
//     code to execute if condition is false
//   }


// else if Statement:
// if (condition1) {
//     code to execute if condition1 is true
//   } else if (condition2) {
//     code to execute if condition2 is true
//   } else {
//     code to execute if neither condition1 nor condition2 is true
//   }
  

// switch Statement:
// switch (expression) {
//     case value1:
//       code to execute if expression === value1
//       break;
//     case value2:
//       code to execute if expression === value2
//       break;
//     add more cases as needed
//     default:
//       code to execute if expression doesn't match any case
//   }

let num = 2 + 5;
// switch (num){
//     case 7:
//         console.log('seven');
//         break;
//     case 4:
//         console.log('four');
//         break;
//     default:
//         console.log('invalid number');
// }