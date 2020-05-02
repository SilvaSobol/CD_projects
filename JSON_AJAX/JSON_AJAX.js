
//Asynchronous JavaScript And XML 
//the process of sending and receiving data instantly without a webpage reload is called AJAX
//XMLHttpRequest establish the connection with the URL and helps send and receive the data! 'GET' or 'POST'

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
ourRequest.onload =function(){
    var ourData = JSON.parse(ourRequest.responseText);// JSON.parse defines an array data
    console.log(ourData[0]);//define the request
};
ourRequest.send();