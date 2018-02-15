function mergeSort(arr, i, j) {
    var middle = parseInt(arr.length / 2); 
    if(arr.length<2) {return arr;}
    else {
    return merge(mergeSort(arr, 0, middle), mergeSort(arr, middle-1, arr.lenght));
}
}
function merge(left, right) {
    var i = 0;
    var j = 0;
    var result = [];

    while (i < left.length || j < right.length) {
        if (i === left.length) {
            // j is the only index left_part
            result.push(right[j]);
            j++;
        } 
      else if (j === right.length || left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result;
}

