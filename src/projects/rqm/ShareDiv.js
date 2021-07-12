const ShareDiv = ({author, quote}) => {

    const resultAuthor = (quote, author) => {
        if (author && author !== null && author !== "") {
            return author;
        } else if  (author === "") {
            return "Unknown";
        } else {
            return quote.match(/(?<=\.\s).+/ig);
        }
    }

    const resultQuote = (quote) => {
        return quote.match(/^.+\./);
    }

    author = resultAuthor(quote, author);
    quote = resultQuote(quote);

    return (
        <button>
            <a id="tweet-quote" className="twitter-share-button"
  href={`https://twitter.com/intent/tweet?text=${quote}&hashtags=${author}`}
  data-size="large">
                Tweet
            </a>
        </button>
    );
};

export default ShareDiv;