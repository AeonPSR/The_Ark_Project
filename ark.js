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

function getRandomAge() {
	//Age from 5 to 120
	//Should be more commonly between 25 and 55
	const age = getRandomInt(30)+25; // Base age between 25 and 55
	
	if (getRandomInt(99) > 49) //50% odd it's old
		age = age+ //TODO
	else { //50% it's young

	} 

	age = Math.max(1, finalAge); // Minimum age is 1
	age = Math.min(125, finalAge); // Maximum age is 125
	return age;
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

function calculateStatistics(iterations) {
	const ages = [];
	// Generate ages
	for (let i = 0; i < iterations; i++) {
		ages.push(getRandomAge());
	}
	// Calculate average
	const sum = ages.reduce((acc, curr) => acc + curr, 0);
	const average = sum / iterations;
	// Calculate standard deviation
	const variance = ages.reduce((acc, curr) => acc + Math.pow(curr - average, 2), 0) / iterations;
	const stdDeviation = Math.sqrt(variance);
	// Find maximum and minimum ages
	const maxAge = Math.max(...ages);
	const minAge = Math.min(...ages);
	// Display results
	console.log("Average Age:", average.toFixed(2));
	console.log("Standard Deviation:", stdDeviation.toFixed(2));
	console.log("Maximum Age:", maxAge);
	console.log("Minimum Age:", minAge);
}

function displayCharacters(characters) {
	const characterList = $('#characterList');
	characters.forEach(character => {
		const listItem = $('<li>').addClass('characterItem').text(character.getInfo());
		characterList.append(listItem);
	});
}

$(document).ready(function() {
//	const characters = createCharacterList();
//	displayCharacters(characters);
	calculateStatistics(5000);
});
