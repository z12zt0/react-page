const NewQuoteButton = ({handleClick=f=>f }) => {
    return (
        <button id="new-quote" onClick={() => handleClick()}>Get a new quote</button>
    );
};

export default NewQuoteButton;