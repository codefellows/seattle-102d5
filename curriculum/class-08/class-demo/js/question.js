var answer = prompt("do you like dogs?");
var response;

if(answer === 'yes'){
  response = 'I love that!  dogs are awesome!'
} else if (answer === 'no'){
  response = 'ok fine... ';
} else {
  response = 'Dogs are cool!';
}

document.write('<h3>'+ response + '</h3>');

