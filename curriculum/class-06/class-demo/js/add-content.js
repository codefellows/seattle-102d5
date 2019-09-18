var today = new Date();
// var answer = prompt("do you like dogs?");
var hourNow = today.getHours();
var greeting;
// var message;

// if(answer === 'yes'){
//   message = 'I love that!  dogs are awesome!'
// } else if (answer === 'no'){
//   message = 'ok fine... ';
// } else {
//   message = 'Dogs are cool!';
// }


if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>'+ greeting + '</h3>');

