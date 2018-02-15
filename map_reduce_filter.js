map(arr, f);
filter(arr,f);
reduce(arr,f);

var users=[
{ "id":1, "username":"user1", "age":22, "email":"user@hotmail.com","password":"1527393", "salary": 586},
{ "id":2, "username":"user2", "age":19, "email":"user2@hotmail.com", "password":"1527393", "salary": 1286},
{ "id":3, "username":"user2", "age":17, "email":"user2@hotmail.com", "password":"1527393", "salary": 886},
{ "id":2, "username":"user2", "age":23, "email":"user2@hotmail.com", "password":"1527393", "salary": 11566}];

var numbers = [1,2,3,34,5,6,7,64,4,3];

function map2(arr, f){
	var result = [];
	for (var i=0; i<arr.length; i++){
       result.push(f(arr[i]));
	}
	return result;
}

function filter2(arr, f){
   var result = []; 
   for (var i = 0; i<arr.length; i++) {
   		result.push(f(arr[i]));
   }
   return result;
}

users.filter3=function(f){
	var result=[];
	for (var i = 0; i<this.length; i++) {
		if(f(this[i])){
          result.push(this[i])
		}
	}
	return result;
}

function afterTwenty(value) { 
    return value.age>20; 
};
users.filter2(afterTwenty);

function userName(value) { 
    return value.email=="user@hotmail.com"; 
};
users.filter2(userName);

function userNameStart(value) { 
    return value.email.startsWith("user2"); 
};
users.filter2(userNameStart);

var numbers = [1,2,3,34,5,6,7,64,4,3];

function sum(item1, item2) { 
    return item1+item2; 
};

function prod(item1, item2) { 
    return item1*item2; 
};

numbers.reduce2(sum);
numbers.reduce2(prod);

function checkEmail(i){
	if(i.email === "user@hotmail.com"){
		return true;
	}
	return false;
}

users.filter3(checkEmail);

function checkUser(i){
	if(i.email=="user@hotmail.com"){
		return i;
	}
}

filter2(users, checkUser);

function addOne(value) { 
    return value + 1; 
};

function deductOne(value) { 
    return value - 1; 
};

function multiply(value) { 
    return value*value; 
};

function addA(value){
	return "a"+value;
}

map2(numbers, multiply);

function salary(n1, n2){
	if(n1.salary>n2.salary){
		return n1;
	} else {return n2;}
};

var strings = ["AA", "vv", "cc", "ala"];
function concatStr(n1,n2){
	return n1.concat(n2);
}

reduce2(strings, concatStr);

