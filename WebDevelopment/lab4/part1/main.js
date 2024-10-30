/* Name: Spencer Fevreau
File: main.js
Date: 30 October 2024
main.js for part 1 lab 4 - Web Development Fundamentals INFT 1206-06
*/

/*
** DEFINITIONS * *
*/

// Import customName, randomize, and story from the index.html document.
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Random value function
function randomValueFromArray(array){
// Each time the function is called, define a new random number
  const random = Math.floor(Math.random()*array.length);
// Return the random number to the "array" field.
  return array[random];
}

// storyText taken from raw-text.txt
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

// Define arrays of strings.
const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const inserty = ['the soup kitchen', 'Disneyland', 'the White House']
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

/*
** FUNCTIONALITY * *
*/

// Adds an event listner to the randomize button, listening for clicks on the button.
randomize.addEventListener('click', result);

// Result function setup, provides the story content.
function result() {
// New story generates a new story from the raw text each time the result function is called.
    let newStory = storyText;

// Get specific items from array, and place them into variables.
    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);
// Replace the empty pieces of the story with the selected variable.
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);
// Replace default character 'Bob' with whatever name has been inserted.
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;

    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}