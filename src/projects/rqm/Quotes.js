const Quotes = ({ quote }) => {
    console.log("DATA IN QUOTES", quote)
    const shortedQuote = quote.match(/^.+\./);
    return (
        <h3 id="text">{shortedQuote}</h3>
    );
};

export default Quotes;