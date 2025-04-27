
let authorInput = document.getElementById('AuthorName');
let dateYaQuoteInput = document.getElementById('date');
let timeYaQuoteInput = document.getElementById('time');
let quoteInput = document.getElementById('wise');

// for selecting needed quote-> select >options
const selectQuote = document.getElementById('select');

let quotes = JSON.parse(localStorage.getItem('quotes'))||[];

function saveQuote(){
  const author = authorInput.value.trim();
  const timeYaQuote = timeYaQuoteInput.value;
  const dateYaQuote = dateYaQuoteInput.value; 
  const quote = quoteInput.value.trim();
  let fullDate= new Date(`${dateYaQuote}T${timeYaQuote}`)

  if(!author || !timeYaQuote || !dateYaQuote || !quote){
    alert(`fill all form please!!`)
    return;
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
  quoteSelectDropDown();
  // console.log(quotes)--- no need to consoloLog this if it works well
}

// function to allow select quote work auto
function quoteSelectDropDown(){
  selectQuote.innerHTML = `<option value="">Select a Quote</option>`;

  quotes.forEach((agaquote)=>{
    const option = document.createElement('option');
    option.value = agaquote.id;
    option.textContent = `${agaquote.author} - ${new Date(agaquote.igihe).toLocaleString()}`
    selectQuote.appendChild(option);
  })
}
quoteSelectDropDown()

// function to search by author---> I better use filter
  function searchByAuthor(){
    // id="wise" && id="searcByAuthor"
    let mySearch = document.getElementById('searcByAuthor').value.trim().toLowerCase();
    const inputField = document.getElementById('wise');
    quotes.filter((quote)=>{
      if(quote.author.toLowerCase() === mySearch){
        inputField.value = `Date: ${quote.igihe}
        Author: ${quote.author}
        -------------------------------------------------------------------
        ${quote.quote}`
      }
    })

  }
  document.getElementById('searcByAuthor').addEventListener('input', searchByAuthor);
