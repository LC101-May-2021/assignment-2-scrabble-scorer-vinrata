// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let word = "";
const vowelsPoints = {
  1:['A','E','I','O','U'],
  2:['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']
};
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelsPoints) {
 
		 if (vowelsPoints[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word:");
};

function simpleScore(word){
//return word.length();
word = word.toUpperCase();
let letterPoints2 = 0;
	for (let i = 0; i < word.length; i++) {
    letterPoints2++;
}
  return letterPoints2;
}


//let vowelBonusScore;
function vowelBonusScore(word){
	word = word.toUpperCase();
	let letterPoints3 = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints3 += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints3;
 }


let scrabbleScore;
const scoringAlgorithms0 = {
name:'Simple Score',
description:'Each letter is worth 1 point.',
scorerFunction: simpleScore
};
const scoringAlgorithm1 = {
name:'Bonus Vowels',
description:'Vowels are 3 pts, consonants are 1 pt.',
scorerFunction: vowelBonusScore
};
const scoringAlgorithms2 = {
name:'Scrabble',
description:'The traditional scoring algorithm',
scorerFunction:oldPointStructure
};
const scoringAlgorithms = [scoringAlgorithms0,scoringAlgorithm1,scoringAlgorithms2];


//1:['Bonus Vowels', 'Vowels are 3 pts, consonants are 1 pt.',"vowelBonusScore"],
//2:['Scrabble','The traditional scoring algorithm','oldPointStructure()']


function scorerPrompt() {
  console.log('Which scoring algorithm would you like to use?');
  console.log('0 - Simple: One point per character');
  console.log('1 - Vowel Bonus: Vowels are worth 3 points');
  console.log('2 - Scrabble: Uses scrabble point system');
  answer = input.question("Enter 0, 1, or 2: ");
  if (answer == '0'){

  }


}
  //answer = input.question("")
function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   console.log("your word is: " + word);

   //console.log(vowelBonusScore(word));
   //console.log(simpleScore(word));
   //console.log(oldScrabbleScorer(word));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

