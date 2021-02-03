/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * An array of philosophy quotes
***/

const quotes = [ 
  {quote: `The unexamined life is not worth living.`, source: `Socrates`},
  {quote: `Whereof one cannot speak, thereof one must be silent.`, source: `Wittgenstein`},
  {quote: `Entities should not be multiplied unnecessarily.`, source: `William of Ockham`},
  {quote: `We live in the best of all possible worlds.`, source: `Leibniz`, citation: `Essays of Theodicy on the Goodness of God, the Freedom of Man and the Origin of Evil`, year: `1710`},
  {quote: `You can discover more about a person in an hour of play than in a year of conversation.`, source: `Plato`}
];

/***
 * `getRandomQuote` function
 * rand chooses a random number between 0 and 4, which are the numeric values of the objects in our array, this is then returns whichever object, 0 through 4, that results from math.random
***/

function getRandomQuote() {
  let rand = Math.floor(Math.random() * 5);
  return quotes[rand];
}

/***
 * `printQuote` function
 * Retrieves the random quote from the previous function. Concatenates a string together of the quote and source, and if it has a year or citation, it will include those as well, then send final string into HTML. 
***/

function printQuote() {
  let quote = getRandomQuote();
  let string = `<p class="quote"> ${quote.quote} </p> <p class="source"> ${quote.source}`;
  if ( quote.citation !== undefined) {
    string = string + ` <span class="citation"> ${quote.citation} </span>`;  
  }
  if (quote.year !== undefined) {
    string = string + ` <span class="year"> ${quote.year} </span>`
  }
  string = string + ` </p>`
  
  document.getElementById('quote-box').innerHTML = string; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);