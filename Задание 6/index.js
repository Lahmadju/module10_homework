const array = [1, 1, 1, 1, 1]

let isAllEqual = true;
for (let i = 1; i < array.length; i++) {
	if (array[i] !== array[0]) {
		isAllEqual = false;
	}
}

console.log (isAllEqual)