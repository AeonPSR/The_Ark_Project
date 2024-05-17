//import { startGame, endGame, playerMove } from './gameFunctions.js';
import { names, jobs } from './arrays.js';
import { getRandomInt, getRandomElementFromArray } from './small_tools.js';

class Character {
	constructor(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
		this.status = "Alive";
	}
	getInfo() {
		return `Name: ${this.name} | Age: ${this.age} | Job: ${this.job} | Status: ${this.status}`;
	}
}

function getRandomAge(trait) {
	//Age from 5 to 120
	//Should be more commonly between 25 and 55
	//Let's use a trait system to give age range to the population, and so the
	//odds and repartition will be dictated by the odds of each trait appearing.
	const minAge = 5;
	const maxAge = 120;
	const range = maxAge - minAge;
	return minAge + getRandomInt(range);
}

function createCharacterList() {
	const characters = [];
	const playerCount = parseInt(prompt("How many characters do you want to create?"));
	for (let i = 0; i < playerCount; i++) {
		const name = getRandomElementFromArray(names);
		const age = getRandomAge();
		const job = getRandomElementFromArray(jobs);
		const character = new Character(name, age, job);
		characters.push(character);
	}
	return characters;
}

function displayCharacters(characters) {
	const characterList = $('#characterList');
	characters.forEach(character => {
		const listItem = $('<li>').addClass('characterItem').text(character.getInfo());
		characterList.append(listItem);
	});
}

$(document).ready(function() {
	const characters = createCharacterList();
	displayCharacters(characters);
});
