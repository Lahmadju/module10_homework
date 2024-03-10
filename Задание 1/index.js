let input = prompt("Введите значение:");
let value = +input;

if (!isNaN(value)) {
	if (typeof value === 'number') {
		alert (value);
			if (value % 2 === 0) {
			console.log("Число " + value + " четное.");
			} 
			else {
			console.log("Число " + value + " нечетное.");
			}
	}
} 
else {
console.log("Упс, кажется, вы ошиблись.");
alert('Упс, кажется, вы ошиблись.')
}