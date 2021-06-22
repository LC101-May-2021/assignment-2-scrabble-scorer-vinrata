// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
const vowelsPoints = {
  3:['A','E','I','O','U'],
  1:['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']
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
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word:");
   return word;
};

function simpleScore(word){
//return word.length();
word = word.toLowerCase();
let letterPoints2 = 0;
	for (let i = 0; i < word.length; i++) {
    letterPoints2++;
}
  return letterPoints2;
}
//console.log(simpleScore("candy"));

//let vowelBonusScore;
function vowelBonusScore(word){
	word = word.toLowerCase();
	let letterPoints3 = 0;
	for (let i = 0; i < word.length; i++) {
  if (['a','e','i','o','u'].includes(word[i])){
	  letterPoints3 += 3;
	}else{
    letterPoints3++;
  }
  }
	return letterPoints3;
 
}

function scrabbleScore(word,newPointStructure){
  	word = word.toLowerCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
 

			letterPoints += Number(newPointStructure[word[i]]);
		 
 
	  }
	return letterPoints;
 
};

const scoringAlgorithms0 = {
name:'Simple Score',
description:'Each letter is worth 1 point.',
scorerFunction: simpleScore
};
const scoringAlgorithms1 = {
name:'Bonus Vowels',
description:'Vowels are 3 pts, consonants are 1 pt.',
scorerFunction: vowelBonusScore
};
const scoringAlgorithms2 = {
name:'Scrabble',
description:'The traditional scoring algorithm',
scorerFunction: scrabbleScore
};
const scoringAlgorithms = [scoringAlgorithms0,scoringAlgorithms1,scoringAlgorithms2];


//1:['Bonus Vowels', 'Vowels are 3 pts, consonants are 1 pt.',"vowelBonusScore"],
//2:['Scrabble','The traditional scoring algorithm','oldPointStructure()']


function scorerPrompt(word) {
  console.log('Which scoring algorithm would you like to use?');
  console.log('0 - Simple: One point per character');
  console.log('1 - Vowel Bonus: Vowels are worth 3 points');
  console.log('2 - Scrabble: Uses scrabble point system');
  let answer = input.question("Enter 0, 1, or 2: ");

  return (scoringAlgorithms[Number(answer)].scorerFunction(word,newPointStructure));

}
  //answer = input.question("")
function transform(oldPointStructure) {
  let newTransform = {};
  for (item in oldPointStructure){
    let newArray = oldPointStructure[item];
    for (let i =0;i<newArray.length;i++){
    newTransform[(oldPointStructure[item][i]).toLowerCase()] = item;
    }
  }
  return newTransform;
  //console.log(newTransform);
};
//objectName["(oldPointStructure['key'][index])"] = propertyValue;
//objectName["new-key"] = propertyValue;

  let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word2 = initialPrompt();
   let score = scorerPrompt(word2,newPointStructure);
   console.log(`Score for '${word2}': ${score}`);

   //console.log(vowelBonusScore(word));
   //console.log(simpleScore(word));
   //console.log(scrabbleScore(word));
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

