import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { listDecks, deleteDeck } from "../utils/api";
import DeckList from "../Containers/DeckList";

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    
    listDecks(abortController.signal)
      .then(setDecks);

    return () => abortController.abort();
  }, []);

  const handleDeleteDeck = async (deckIdToDelete, deckName) => {
    if (window.confirm(`Delete the deck: ${deckName}?\r\n\r\nYou will not be able to recover it.`)) {
      await deleteDeck(deckIdToDelete);
      setDecks((currentDecks) => currentDecks.filter((deck) => deck.id !== deckIdToDelete));
    }
  }

  return (
    <>
      {decks[1] ? (
        <>
          <Link to="/decks/new" type="button" className="btn btn-secondary"><i className="bi bi-plus"></i> Create Deck</Link>
          <DeckList decks={decks} handleDeleteDeck={handleDeleteDeck}/>
        </>
      ) : (
        <div className="p-4 border border-top-0">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default Home;