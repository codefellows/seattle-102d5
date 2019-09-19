var today = new Date();
// var answer = prompt("do you like dogs?");
var hourNow = today.getHours();
var greeting;

function giveInstructions (name, instructions){
    var message = 'Hello ' + name + ', How are you?  Please ' + instructions + '!'; 
    return message;
}

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

