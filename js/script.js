/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "AD 160 - AD 180",
    tags: "Philosophy"
  },
  {
    quote: "Go out and do something. It isn't your room that's the prison, it's yourself",
    source: "Sylvia Plath",
    citation: "The Unabridged Journals of Sylvia Plath",
    year: "1982",
    tags: "Biography"
  },
  {
    quote: "You cannot find peace by avoiding life",
    source: "Virginia Woolf",
    citation: "The Voyage Out",
    year: "1915",
    tags: "Novel"
  },
  {
    quote: "A girl should be two things: who and what she wants",
    source: "Coco Chanel",
    citation: null,
    year: null,
    tags: "Motivation"
  },
  {
    quote: "You can never be overdressed or overeducated",
    source: "Oscar Wilde",
    citation: "Phrases and Philosophies for the Use of the Young",
    year: "1894",
    tags: "Inspiration"
  },
]

/***
 * `getRandomQuote` function
***/

let getRandomQuote = (quoteArr) => {
  //create a random number from 0 to length of array and store it in randomNum 
  let randomNum = Math.floor(Math.random()* quoteArr.length)

  //returns the quote that matches the array
  return quoteArr[randomNum]
} 

//console.log(getRandomQuote(quotes))

/***
 * `printQuote` function
***/
let printQuote = () =>{
  let randomQuote = getRandomQuote(quotes)
  let quoteStr = '<p class="quote"> ' + `${randomQuote.quote}` + '</p> ' +
    '<p class="source"> ' +` ${randomQuote.source}` 
  //check if the qoute obj has a citation/year/tags property, if doesn't return, otherwise add it to the string
  if (randomQuote.citation !== null){
    quoteStr += '<span class="citation"></span>' + `${randomQuote.citation}` + '</span>'
  }else{

  }
  if (randomQuote.year != null){
    quoteStr += '<span class="year">' + `${randomQuote.year}` + '</span>'
  }
  if (randomQuote.tags != null){
    quoteStr += '<span class="year">' + `${randomQuote.tags}` + '</span> </p>'
  }else{
    quoteStr += '</p>'
  }
  document.getElementById('quote-box').innerHTML = quoteStr
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false) 