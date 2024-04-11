import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import Flashcard from '../Components/Flashcard';

function CardsView({ cards = [] }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);
  const {deckId} = useParams();
  const navigate = useNavigate();

  const nTotalCards = cards.length;
  const currentCard = nTotalCards > 0 ? cards[currentCardIndex] : null;

  const handleFlip = () => setIsFront(() => !isFront);
  const handleNext = () => {
    if (currentCardIndex === (nTotalCards - 1)) {
      if (window.confirm("Restart this deck?\r\n\r\nClick 'Cancel' to return to the home page.")) {
        setCurrentCardIndex(() => 0);
        setIsFront(() => true);
      }
      else
        navigate("/");
    }
    else {
      setCurrentCardIndex((currentIndex) => currentIndex+1);
      setIsFront(() => true);
    }
  }

  const cardCountMessage = () => nTotalCards === 1 ? "is only 1 card" : `are ${nTotalCards} cards`;

  return (
    <>
      {cards.length < 3 ? (
        <>
          <h2>Not enough cards.</h2>
          <h5>You need at least 3 cards to study. There {cardCountMessage()} in this deck.</h5>
          <Link to={`/decks/${deckId}/cards/new`} type="button" className="btn btn-primary"><i className="bi bi-plus"></i> Add Cards</Link>
        </>
      ) : (
        <Flashcard
          currentCardIndex={currentCardIndex}
          totalCards={nTotalCards}
          cardTextFront={currentCard.front}
          cardTextBack={currentCard.back}
          isFront={isFront}
          handleFlip={handleFlip}
          handleNext={handleNext}
        />
      )}
    </>
  );
}

export default CardsView;