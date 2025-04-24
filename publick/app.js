let quotes = []
let author = document.getElementById('AuthorName');
let dateYaQuote = document.getElementById('date');
let timeYaQuote = document.getElementById('time');
let quote = document.getElementById('wise');
function saveQuote(){
  author=author.value;
  timeYaQuote = timeYaQuote.value;
  dateYaQuote = dateYaQuote.value;
  quote = quote.value;
  let fullDate= new Date(`${dateYaQuote}T${timeYaQuote}`)
  
  const newQuote = {
    author: author,
    time: timeYaQuote,
    date: dateYaQuote,
    quote: quote,
    // nibaYakunze(){
    //   console.log(`${this.author} uyu niwe wanditse iy :
    //   ${quote}
    //   iki gihe: ${this.fullDate}`);
    // }
  }
  quotes.push(newQuote);
  console.log(quotes);
  saveQuote()
  
}
