//Some tasks from Intermediate Algorithm scripting part from FreeCodeCamp
//sum all items
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);

//Diff Two Arrays
function diff(arr1, arr2) {
  var newArr = [];
  newArr = arr1.concat(arr2); 
  function checkItem(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }
  return newArr.filter(checkItem);
}

diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
	["diorite", "andesite", "grass", "dirt", "dead shrub"]);

//return similar items in array
function similar(arr1, arr2) {
var arr = arr1.concat(arr2);
var results = [];
for (var i = 0; i<arr.length; i++) {
  if((results.indexOf(arr[i]) == -1) && (arr.indexOf(arr[i], i + 1) != -1)) {
      results.push(arr[i]);
   }
}
  return results;
}
similar(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
	["diorite", "andesite", "grass", "dirt", "dead shrub"]);

//Roman Numeral Converter
function convertToRoman(num) {
var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
    roman = '',
    i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

convertToRoman(568);

//find the object, that consists the property and a value
function whatIsInAName(arr, src) {

  var newArr = arr.filter(function(item) {
    if(Object.keys(src).every(function(k){ 
      return src.hasOwnProperty(k) && item.hasOwnProperty(k) && src[k] === item[k]}))
     else {
    return item;}
   });
  return newArr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//replace part of the string 
function myReplace(str, before, after) {
   var index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

//pigLatin game
function translatePigLatin(str) {
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
  return pigLatin;
}
translatePigLatin("glove");

// next letter 
function fearNotLetter(str) {
 for(var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

fearNotLetter("abce");

//typeof
function booWho(bool) {
  return typeof bool === 'boolean';
}

// unite arrays
function uniteUnique(arr) {
  var finalArray = [];
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//spinal tap
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

spinalCase('This Is Spinal Tap');

//prime number
function isPrime(number){
      for (i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
             return false;
          }
       }
      return true;
  }
isPrime(3);


//sum of prime numbers
function sumPrimes(num) {
  function isPrime(number){
      for (i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
             return false;
          }
       }
      return true;
  }
  if (num === 1){
    return 0;
  }
  if(isPrime(num) === false){
    return sumPrimes(num - 1);
  }
  if(isPrime(num) === true){
    return num + sumPrimes(num - 1);
  }
}

sumPrimes(977);

// find an elememnt
function findElement(arr, func) {
  filterArr = arr.filter(func);
  return filterArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });



function binaryAgent(str) {
  var biString = str.split(' ');
  var uniString = [];
  for(var i=0;i < biString.length;i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join('');
}


binaryAgent("01000001 01110010 01100101 01101110 00100111 
	01110100 00100000 01100010 01101111 01101110 01100110 
	01101001 01110010 01100101 01110011 00100000 01100110 
	01110101 01101110 00100001 00111111");


function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}
telephoneCheck("555-555-5555");

function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    function symDiff(arrayOne, arrayTwo) {
        var result = [];

        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }
    return args.reduce(symDiff);
}
