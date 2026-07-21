const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const genButton = document.querySelector("#BTN");

const quotes = [
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    quote: "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck"
  },
  {
    quote: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel"
  },
  {
    quote: "Java is to JavaScript what car is to carpet.",
    author: "Chris Heilmann"
  },
  {
    quote: "Experience is simply the name we give our mistakes.",
    author: "Oscar Wilde"
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  }
];

function generateQuote(){

    let randomIndex = Math.floor(Math.random()*quotes.length);

    return quotes[randomIndex];
}

function displayQuotes(){

    const randomQuote = generateQuote();

    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`
}

genButton.addEventListener('click', displayQuotes);