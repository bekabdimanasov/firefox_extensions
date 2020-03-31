"use strict"

function binarySearch(list, item) {
	let low = 0,
		high = (list.length-1);

	while (low <= high) {
		
		let mid = (low + high);
		let guess = list[mid];

		if (guess === item) {
			return mid;
		}

		if (guess > item){
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

let myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, 11));