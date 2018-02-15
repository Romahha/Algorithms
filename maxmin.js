function maxMin(arr, f){
	var maxMin = arr[0];
	for (var i = 1;  i < arr.length; i++) {
		if(f(maxMin, arr[i])){
			maxMin = arr[i];
		}
	}
	return maxMin;
}
function minNumber(min, index){
	if(min > index) {
		return true;
	}
	return false;
}

function maxNumber(max, index){
	if(max < index) {
		return true;
	}
	return false;
}
var numbers = [3,4,5,6,8,21,6,1];
var cars = [
        {
	         make : 'audi',
             model: 'r8',
             year: '2012'
        },
        {
             make: 'landroverevoque',
             model: 'rs5',
             year: '2013'
        },
        {
             make: 'ford',
             model: 'mustang',
             year: '2014'
        },
        {
             make: 'ford',
             model: 'fusion',
             year: '2015'
        },
        {
             make: 'kia',
             model: 'optima',
             year: '2019'
        }, ];

maxMin(numbers, minNumber);
maxMin(numbers, maxNumber);

function minYear(min, index){
	if(min.year > index.year) {
		return true;
	}
	return false;
}
function maxYear(min, index){
	if(min.year < index.year) {
		return true;
	}
	return false;
}
maxMin(cars, minYear);
maxMin(cars, maxYear);
function minModelName(min, index){
	if(min.model.length > index.model.length) {
		return true;
	}
	return false;
}
function maxModelName(min, index){
	if(min.model.length < index.model.length) {
		return true;
	}
	return false;
}
maxMin(cars, minModelName);
maxMin(cars, maxModelName);
function maxMakeNameUnicode(max, index){
	var sum = 0;
	for(var i=0; i<index.make.length; i++){
	sum =+ index.make.charCodeAt(i);
	}
	console.log(sum);
	if(max.make.length < index.make.length) {
		return true;
	}
	return false;
}

maxMin(cars, maxMakeNameUnicode);
