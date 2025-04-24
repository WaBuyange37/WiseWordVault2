let author = document.getElementById('AuthorName');
let dateYaQuote = document.getElementById('date');
let timeYaQuote = document.getElementById('time');
let quote = document.getElementById('wise');
function saveQuote(){
  author=author.value;
  timeYaQuote.value;
  dateYaQuote.value;
  quote.value;
  let fullDate= new Date(`${dateYaQuote}T${timeYaQuote}`)
  console.log(`${author} uyu niwe wanditse iy :
    ${quote}
    iki gihe: ${fullDate}`);
  
}
