#!/usr/bin/env node

var fs = require('fs');

// isPrime 
// return true if n is a prime number, else return false 
var isPrime = function(n) {
  var i;
  var isPrime = true;
  for(i = 2; i < n; i++) {
    if(n % i == 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime
};



var firstkprime = function(k) {
  var i; 
  var arr = [];

  for (i = 2; i < k+1; i++) { // 1 is not a prime, so start at 2
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr;
};

// Print to console
var fmt = function(arr) {
  return arr.join(" ");
};

var k = 100;
var outfile = "prime.txt";
fs.writeFileSync(outfile, fmt(firstkprime(k)));
