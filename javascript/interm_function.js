//Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
    
    var sum = 0;
    for(var i=0; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sigma(4));


//Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function sigma(num){
    
    var sum = 1;
    for(var i = 1; i<=num; i++){
        sum = sum * i;
    }
    return sum;
}
console.log(sigma(4));




//Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function Fib(n){
    var arr = [0,1];
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    else{
        for(var i=2; i<=n; i++){
            arr.push(arr[i-1]+arr[i-2]);
        }
    }
    return arr[n];
}
console.log(Fib(10));

//Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.


function SecToLast(arr){
    
    var sec2largest = 0;
   for(var i=0; i<=arr.length; i++){
      if(sec2largest = arr[arr.length-2]){
      }
       else(sec2largest = null)
   }
      return sec2largest;
}
console.log(SecToLast([0]));



function SecToLast(arr){
    
       var sec2largest = 0;
       if(sec2largest = arr[arr.length-2]){
       }
       else (sec2largest = null)
      return sec2largest;
}
    console.log(SecToLast([3,4,5,6,7,8]));

   
   function secondToLast(arr){
    var secondToLast=arr.length-1;
    if(secondToLast<arr.length-1){
      ;
    }
    return secondToLast;
}
console.log(secondToLast([1]));




    //console.log(secToLast(1,2,3,4,5));

//Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function SecToLast(arr){
    
    var sec2largest = 0;
    for(var i=0; i<=arr.length; i++){
       if(sec2largest = arr[arr.length-2]){
       }
       else (sec2largest = null)
    
    }
    return sec2largest;
    
}
    console.log(SecToLast([3]));




//Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr){
    var max = arr[0];
    var secondmax = null;

    for(var i = 0; i < arr.length; i++){
        if (arr[i]>max){
            secondmax = max;
            max = arr[i];
        }
        //console.log(arr[i]<max && arr[i]>secondmax)
        if(arr[i]<max && arr[i]>secondmax){
            secondmax = arr[i];
        }
    }
    return arr;
}
console.log(secondLargest([42,43,56,34,67,34,27,81]));


//Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].