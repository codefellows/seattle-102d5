function addName(){
  var userName = prompt('Hello, what is your name?');
  return '<h3>' + 'Hello ' + userName + '!' +'</h3>'
}

function askQuestion(){
  var answer = prompt("do you like dogs?");
  var response;

  if(answer === 'yes'){
      response = 'I love that!  dogs are awesome!'
    } else if (answer === 'no'){
      response = 'ok fine... ';
    } else {
      response = 'Dogs are cool!';
    }

  return '<h3>'+ response + '</h3>';
}

