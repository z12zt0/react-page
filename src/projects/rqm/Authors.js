const Authors = ({ quote, author }) => {
    console.log("DATA IN AUTHOR", author, quote);
    const result = () => {
        if (author && author !== null && author !== "") {
            return author;
        } else if  (author === "") {
            return "Unknown";
        } else {
            return quote.match(/(?<=\.\s).+/ig);
        }
    };
    return (
        <h3 id="author">{result()}</h3>
    );
};

export default Authors;