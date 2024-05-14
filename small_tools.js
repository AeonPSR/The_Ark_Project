function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRandomElementFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

export {getRandomInt, getRandomElementFromArray};