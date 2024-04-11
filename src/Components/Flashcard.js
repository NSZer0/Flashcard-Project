import React from "react";

function Flashcard({ currentCardIndex, totalCards, cardTextFront, cardTextBack, isFront, handleFlip, handleNext }) {
  return (
    <div className="card border-secondary my-3 col-sm-12 col-md-6">
      <div className="card-body text-secondary">
        <h4 className="card-title">Card {currentCardIndex+1} of {totalCards}</h4>
        <p className="card-text">{isFront ? (cardTextFront) : (cardTextBack)}</p>
        <button type="button" className="btn btn-secondary mr-2" onClick={handleFlip}>Flip</button>
        {!isFront &&
          <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
        }
      </div>
    </div>
  );
}

export default Flashcard;