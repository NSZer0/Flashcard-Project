import React from "react";
import DeckCard from "../Components/DeckCard";

function DeckList({ decks, handleDeleteDeck }) {
  const list = Array.isArray(decks) ? decks.map((deck) => (
    <DeckCard key={deck.id} deckId={deck.id} cardsInDeck={deck.cards.length} name={deck.name} description={deck.description} handleDeleteDeck={handleDeleteDeck} />
  )) : null;

  return (
    <>
      {list}
    </>
  );
}

export default DeckList;