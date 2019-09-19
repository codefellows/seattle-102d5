function addName(){
  var userName = prompt('Hello, what is your name?');
  return '<h3>' + 'Hello ' + userName + '!' +'</h3>'
}

function howMany(){
  var count = prompt('How many do you want to order?');
  while(count === '' || isNaN(count)){
    count = prompt('Please enter a number.  How many do you want to order?');
  }
  return Number(count);
}

function getItem(){
  var order = '';
  var item;

  while(order === ''){
    order = prompt('What would you like to order?');
  }
  
  // while (order !== 'house' && order !== 'hotel') {
  //   order = prompt('Please enter "house" or "hotel"...');
  // }

  if (order === 'house'){
    item = '<img src="images/house.png">';
  } else if (order === 'hotel'){
    item = '<img src="images/hotel.png">';
  } 
  else {
    item = '<strong>No items ordered</strong>';
  }
  return item;
 
}

function showOrder (){
  var item = getItem();
  var total = howMany();
  var result = '';

  for(var i = 0; i < total; i++){
    var realCount = i + 1;
    result = result + '<p>Model #' + realCount + ' ' + item + '</p>'
  }
  return result;
}






