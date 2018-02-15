var balanced ="({{[]}})";
var noBalanced ="({}[]}}{}";

function checkBalance(arr){
   arr = arr.split("");
   console.log(arr);
   var stack = [];
   var len=arr.length;
   for(var i=0; i<len; i++){
      if(arr[i]==="{" || arr[i]==="[" || arr[i]==="("){
      	stack.push(arr[i]);
      	console.log(stack);
      }
      else {
      	if(arr[i]==="}"){
      		if(stack[stack.length-1]=="{"){
      		  stack.pop();	
      		  console.log(stack);
      		}
      		else {
      		  return "No balanced";
      		}
      	}
      	else if(arr[i]==="]"){
      		if(stack[stack.length-1]=="["){
      		  stack.pop();	
      		  console.log(stack);
      		}
      		else {
      		  return "No balanced";
      		}
      	}
      	else if(arr[i]===")"){
      		if(stack[stack.length-1]=="("){
      		  stack.pop();	
      		  console.log(stack);
      		}
      		else {
      		  return "No balanced";
      		}
     
      	}
      	else {
      		return "No balanced";
      	}

      }
   }
   if(stack.length==0){
   	return "Balanced";
   }
} 
checkBalance(noBalanced);

