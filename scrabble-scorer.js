// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
let choice = "";
let answer = "";
const input = require("readline-sync");
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
  console.log(letterPoints);
  //console.log(word + " is worth "+ letterPoints + " points.")
	//return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function simpleScore(y){
  y = y.toUpperCase();
	let letterPoints2 = 0;
  letterPoints2 = y.length.toString();
	//return letterPoints2;
  console.log(y +" is worth "+letterPoints2 +" points.")
}

function initialPrompt(choice) {
   answer = input.question("Let's play some scrabble! Enter a word:");
   console.log("0 - Score with Single Point rules");
   console.log("1 - Score with Bonus Vowels rules");
   console.log("2 - Score with Scrabble rules");
  

};
//makeLine(initialPrompt(line));
//makeLine(askQuestion(line));
//(line is inuput from askquestion funct)
function vowelBonusScore(z){
  //const vowels = ['A', 'E', 'I', 'O', 'U'];
  //let zAnswer = [];
  //const notVowels = ['B','C','D',];
  z = z.toUpperCase();
  let letterPoints3 = 0;
  //console.log(">word length: "+z.length);
  //console.log(">>your word: " + z);

	for (i = 0; i < z.length; i++) {

    if (z.charAt(i) == 'A'){
      letterPoints3 += 3;
    }else if
     (z.charAt(i) == 'E'){
      letterPoints3 += 3;
    }else if
     (z.charAt(i) == 'I'){
      letterPoints3 += 3;
    }else if
     (z.charAt(i) == 'O'){
      letterPoints3 += 3;
    }else if
     (z.charAt(i) == 'U'){
      letterPoints3 += 3;
    }else {
      letterPoints3 += 1;
    }
  //console.log(z.charAt(i));
  }
console.log(z + " is worth " + letterPoints3+" points.");
//return letterPoints3.toString();
}

let scrabbleScore;

const scoringAlgorithms ={ 
  1: ['Simple Score', 'Each letter is worth 1 point.','simpleScore()'],
  2: ['Bonus Vowels','Vowels are 3 pts, consonants are 1 pt.','vowelBonusScore()'],
  3: ['Scrabble','The traditional scoring algorithm.','oldScrabbleScorer()']
  };

function scorerPrompt(choicer) {
  choice = input.question("Enter 0,1,2: ")
  if (choice == 0){
      console.log("You chose 0 - Single Point Rules");
      console.log();
      simpleScore(answer);
  } else if (choice == 1){
      console.log("You chose 1 - Bonus Vowels Rules");
      vowelBonusScore(answer)
  } else if (choice == 2){
      console.log("You chose 2 - Scrabble Rules");
      oldScrabbleScorer(answer);
  } 


  return choice;
};



function transform() {};

let newPointStructure;

function runProgram(word,scoring) {
   initialPrompt(word);
   scorerPrompt(scoring);
  //console.log(choice + ' choice');
  //console.log(answer+ " word");
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

