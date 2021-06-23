import Quote from "./components/Quote";

import React, { useState, useEffect } from "react";

function App() {
  //state
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });

  const generate = async () => {
    setQuote(await fetchQuote());
  };
  const fetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random").then(
      (response) => response.json()
    );
  };

  useEffect(async () => {
    setQuote(await fetchQuote());
  }, []);

  return (
    <div className="App">
      <Quote quote={quote} />

      <button onClick={generate}>Generate new Quote</button>
    </div>
  );
}

export default App;
