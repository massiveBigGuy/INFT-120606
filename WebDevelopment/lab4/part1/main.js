/* Name: Spencer Fevreau
File: main.js
Date: 30 October 2024
main.js for part 1 lab 4 - Web Development Fundamentals INFT 1206-06
*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const inserty = ['the soup kitchen', 'Disneyland', 'the White House']
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);
  if(customName.value !== '') {
    const name = customName.value;
  }

  if(document.getElementById("uk").checked) {

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}