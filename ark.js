//import { startGame, endGame, playerMove } from './gameFunctions.js';
import { names, jobs } from './arrays.js';
import { getRandomInt, getRandomElementFromArray, getStatMod } from './small_tools.js';

class Traits {
	constructor(others) {
		this.job = getRandomElementFromArray(jobs);
		this.health = "Alive";
		this.others = others || {};
	}

	addTrait(key, value) {
		this.others[key] = value;
	}

	removeTrait(key) {
		delete this.others[key];
	}

	displayTraits() {
		return `<br />Job: ${this.job} | Health: ${this.health}| Other Traits: ${JSON.stringify(this.others).replace(/,/g, '<br />')}`;
	}
}

class Character {
	constructor(name, age, job) {
		this.name = name;
		this.age = age;
		this.status = "Alive";
		this.traits = new Traits(job);
		this.stats = {
			strength: getRandomInt(18),
			dexterity: getRandomInt(18),
			constitution: getRandomInt(18),
			intelligence: getRandomInt(18),
			wisdom: getRandomInt(18),
			charisma: getRandomInt(18),
			perception: getRandomInt(18),
			luck: getRandomInt(18),
		};
	}

	getInfoDebug() {
		return `Name: ${this.name} | Age: ${this.age} | Status: ${this.status} <br /><br />
		Strength: ${this.stats.strength}<br />
		Dexterity: ${this.stats.strength}<br />
		Constitution: ${this.stats.strength}<br />
		Intelligence: ${this.stats.strength}<br />
		Wisdom: ${this.stats.strength}<br />
		Charisma:${this.stats.strength}<br />
		Perception: ${this.stats.strength}<br />
		Luck: ${this.stats.strength}<br />
		<br />${this.traits.displayTraits()}`;
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
		const listItem = $('<li>').addClass('characterItem').html(character.getInfoDebug());
		characterList.append(listItem);
	});
}

$(document).ready(function() {
	const characters = createCharacterList();
	displayCharacters(characters);
});
