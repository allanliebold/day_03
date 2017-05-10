'use strict';
alert('Time for a guessing game!');

var ready = prompt('Are you ready? Y/N').toLowerCase();
console.log('Ready?:', ready);

var sure = prompt('Are you sure? Y/N').toLowerCase();
console.log('Sure?:', sure);

if ((ready === 'y' || ready === 'yes') && (sure === 'y' || sure === 'yes')){
  alert('Confidence. I like it! Okay, here we go!');
}
if ((ready === 'n' || ready === 'no') || (sure === 'n' || sure === 'no')){
  alert('Well, I\'m starting anyway.');
}

var answer1 = prompt('Question 1: Are you bigger than a bread box? Y/N').toLowerCase();
console.log('Answer 1:', answer1);

var answer2 = prompt('Question 2: Are you alive? Y/N').toLowerCase();
console.log('Answer 2:', answer2);

var answer3 = prompt('Question 3: Do you mostly come out at night, mostly? Y/N').toLowerCase();
console.log('Answer 3:', answer3);

var answer4 = prompt('Question 4: Are you vulnerable to fire? Y/N').toLowerCase();
console.log('Answer 4:', answer4);

var answer5 = prompt('Question 5: Can you read minds? Y/N').toLowerCase();
console.log('Answer 5:', answer5);

alert('Okay, I got this. Thinking... thinking...');
alert('You are a...');

if(answer1 === 'n' || answer1 === 'no'){
  alert('Teeny tiny...');
}
if(answer2 === 'n' || answer2 === 'no'){
  alert('Undead...');
}
if(answer3 === 'y' || answer3 === 'yes'){
  alert('Nocturnal...');
}
if(answer4 === 'n' || answer4 === 'no'){
    alert('Fireproof...');
}
if(answer5 === 'y' || answer5 === 'yes'){
  alert('Telepathic...');
}

alert('...Potato?');
var result = prompt('Am I right? Y/N').toLowerCase();

if(result === 'n' || result === 'no'){
  alert('You cheated!');
} else {
  alert('Huzzah!');
}

alert('Let\'s play another game. Okay, riddle me this...');

var guess;
var tries = 4;
var counter = 1;

while(tries > 0){
  console.log('Last guess:', guess);
  console.log('Tries left:', tries);
  console.log('Attempt:', counter);
  guess = parseInt(prompt('How many Lowe\'s could Rob Lowe rob if Rob Lowe could rob Lowe\'s? You have ' + tries + ' guesses.'));
  if (guess < 17){
    alert('You underestimate Mr. Lowe.');
    counter++;
    tries--;
  } else if (guess > 17) {
    alert('Whoa there. Too much.');
    counter++;
    tries--;
  } else if (isNaN(guess) || guess === null) {
    alert('That\'s not a number.');
  } else if (guess === 17){
    break;
  }
}

if (guess === 17){
  alert('Exactly right!');
} else {
  alert('Bzzzt! Game over! Now you\'ll never know the exact extent of Robe Lowe\'s robbery prowess!');
}
