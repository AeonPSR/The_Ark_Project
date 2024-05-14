// import { startGame, endGame, playerMove } from './gameFunctions.js';

class Character {
	constructor(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
		this.status = "Alive";
	}

	getInfo() {
		return `Name: ${this.name}, Age: ${this.age}, Job: ${this.job}, Status: ${this.status}`;
	}
}

function getRandomAge() {
	return (Math.floor(Math.random() * 125) + 1);
}

function createCharacterList() {
	const characters = [];
	const playerCount = parseInt(prompt("How many characters do you want to create?"));
	for (let i = 0; i < playerCount; i++) {
		const name = prompt(`Enter name for character ${i + 1}:`);
		const age = parseInt(prompt(`Enter age for character ${i + 1}:`));
		const job = prompt(`Enter job for character ${i + 1}:`);
		const character = new Character(name, age, job);
		characters.push(character);
	}
	return characters;
}

function main() {
	const characters = createCharacterList();
	console.log(characters);
}

// Call main function to start the game
main();
