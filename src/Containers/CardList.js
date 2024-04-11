import React from "react";
import FlashcardItem from "../Components/FlashcardItem";

function CardList({ cards, handleDeleteCard }) {
  const list = Array.isArray(cards) ? cards.map((card) => (
    <FlashcardItem key={card.id} cardId={card.id} cardFrontText={card.front} cardBackText={card.back} handleDeleteCard={handleDeleteCard} />
  )) : null;

  return (
    <>
      {list}
    </>
  );
}

export default CardList;