
let authorInput = document.getElementById('AuthorName');
let dateYaQuoteInput = document.getElementById('date');
let timeYaQuoteInput = document.getElementById('time');
let quoteInput = document.getElementById('wise');
let quotes = JSON.parse(localStorage.getItem('quotes'))||[];

function saveQuote(){
  const author = authorInput.value.trim();
  const timeYaQuote = timeYaQuoteInput.value;
  const dateYaQuote = dateYaQuoteInput.value; 
  const quote = quoteInput.value.trim();
  let fullDate= new Date(`${dateYaQuote}T${timeYaQuote}`)

  if(!author || !timeYaQuote || !dateYaQuote || !quote){
    alert(`fill all form please!!`)
  }
  
  const newQuote = {
    id: Date.now(),//for diffeeretiating all quotes
    igihe: fullDate,
    author: author,
    quote: quote,
    // nibaYakunze(){
    //   console.log(`${this.author} uyu niwe wanditse iy :
    //   ${quote}
    //   iki gihe: ${this.fullDate}`);
    // }
  }
 quotes.push(newQuote);
 localStorage.setItem('quotes', JSON.stringify(quotes));
 
  authorInput.value = "";
  timeYaQuoteInput.value = "";
  quoteInput.value = "";
  dateYaQuoteInput.value = "";
  alert('Saved successful');
  console.log(quotes)
}

