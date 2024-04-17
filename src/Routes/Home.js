import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { listDecks, deleteDeck } from "../utils/api";
import DeckList from "../Containers/DeckList";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchData = async () => {
      const response = await listDecks(abortController.signal)
      setDecks(response);

      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };

    fetchData();

    // listDecks(abortController.signal)
    //   .then(setDecks)
    //   .then(setIsLoading(false));

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
      <Link to="/decks/new" type="button" className="btn btn-secondary mb-3"><i className="bi bi-plus"></i> Create Deck</Link>
      {isLoading ? (
        <div className="p-4 border">
          <p>Loading Decks...</p>
        </div>
      ) : (
        <>
          {decks.length > 0 ? (<DeckList decks={decks} handleDeleteDeck={handleDeleteDeck}/>) : (<h2>No decks to display</h2>)}
        </>
      )}
    </>
  );
}

export default Home;