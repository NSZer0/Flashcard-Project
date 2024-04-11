import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import PathDisplay from "../Components/PathDisplay";
import CardsView from "../Containers/CardsView";

function Study() {
  const [deck, setDeck] = useState({});
  const {deckId} = useParams();

  const navInfo = [{url: `/decks/${deckId}`, name: deck.name}];

  useEffect(() => {
    const abortController = new AbortController();
    
    readDeck(deckId, abortController.signal)
      .then(response => {
        setDeck(response);
      })

    return () => abortController.abort();
  }, [deckId]);

  return (
    <>
      {deck.name ? (
        <>
          <PathDisplay navInfo={navInfo} activePathName="Study"/>
          <h1>Study: {deck.name}</h1>
          <CardsView cards={deck.cards}/>
        </>
      ) : (
        <div className="p-4 border border-top-0">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default Study;