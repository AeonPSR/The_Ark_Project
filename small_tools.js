function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRandomElementFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function getStatMod(stat) {
    if (stat % 2 == 1)
        stat--;
    mod = stat - 10;
    mod = mod/2;
	return mod;
}

export {getRandomInt, getRandomElementFromArray, getStatMod};