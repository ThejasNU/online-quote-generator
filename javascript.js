const Quote = document.getElementById("quote");
const Author = document.getElementById("author");

//function to generate the new quote each time
function getQuote(){
    fetch("http://quotes.stormconsultancy.co.uk/random.json").then((res) => {
        return res.json();
    })
    .then((data) => {
        Quote.innerText = data.quote;
        Author.innerText = `-${data.author}`;
    });
}
getQuote();

