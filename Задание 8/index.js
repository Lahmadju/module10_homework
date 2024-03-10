let map = new Map();
map.set('key', 'prop');
map.set(1, 'prop2');
map.set(true, 123);

for (let [keys, values] of map) {
	console.log(`Ключ: ${keys}, значение: ${values}`);
}
