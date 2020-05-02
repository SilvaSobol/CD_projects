function printUpTo(x){

  for(var i=0; i<1000000; i++){
      console.log(i);
   }if (x < 0){
       return false;
     }
}

  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(2); // should return false
  console.log(y);


  function printSum(x){
    var sum = 0;
    for(var i=0; i<x; i++;){
        sum = sum +i;
        console.log(i,sum);
    }
    //your code here
    return sum;
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // 

  
  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum = i*x.length;
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6