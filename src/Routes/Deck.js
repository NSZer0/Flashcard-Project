import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../utils/api";
import PathDisplay from "../Components/PathDisplay";
import DeckCard from "../Components/DeckCard";
import CardList from "../Containers/CardList";

function Deck() {
  const [deck, setDeck] = useState({});
  const {deckId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    
    readDeck(deckId, abortController.signal)
      .then(response => {
        setDeck(response);
      })

    return () => abortController.abort();
  }, [deckId]);

  const handleDeleteDeck = async (deckIdToDelete, deckName) => {
    if (window.confirm(`Delete the deck: ${deckName}?\r\n\r\nYou will not be able to recover it.`)) {
      await deleteDeck(deckIdToDelete);
      navigate("/");
    }
  }

  const handleDeleteCard = async (cardIdToDelete) => {
    if (window.confirm(`Delete this card?\r\n\r\nYou will not be able to recover it.`)) {
      await deleteCard(cardIdToDelete);
      navigate(0);
    }
  }

  return (
    <>
      {deck.name ? (
        <>
          <PathDisplay activePathName={deck.name}/>
          <DeckCard
            deckId={deck.id}
            cardsInDeck={deck.cards.length}
            name={deck.name}
            description={deck.description}
            isOverviewPage={true}
            handleDeleteDeck={handleDeleteDeck}
          />
          <h1>Cards</h1>
          <CardList cards={deck.cards} handleDeleteCard={handleDeleteCard}/>
        </>
      ) : (
        <div className="p-4 border border-top-0">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default Deck;