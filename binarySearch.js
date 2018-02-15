function binarySearch(num, arr) {
	var len = arr.length;
	var high = arr[len-1];
    if (num > high) {
        console.log("not found");
        return false;
    }
    
    var middle = Math.floor(len/2);
    
    if (num == arr[middle]) {
       console.log("found! It is at " + middle);
        return true;
    }
    else if (num > arr[middle] && len>1) {
        return binarySearch(num, arr.splice(middle+1, high));
    }
    else if (num < arr[middle] && len>1){
        return binarySearch(num, arr.splice(0, middle-1));
    }
    else {console.log("ups");
    return false;
    }
} binarySearch(2, [1,2,3,4,5,6,7]);
