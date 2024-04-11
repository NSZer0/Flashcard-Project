import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function FlashcardItem({ cardId, cardFrontText, cardBackText, handleDeleteCard }) {
  const {deckId} = useParams();
  const navigate = useNavigate();

  const handleEditCard = () => navigate(`/decks/${deckId}/cards/${cardId}/edit`);

  return (
    <div className="card border-secondary my-3 col-sm-12 col-md-6">
      <div className="card-body text-secondary">
        <div className="row">
          <p className="card-text col-6">{cardFrontText}</p>
          <p className="card-text col-6">{cardBackText}</p>
        </div>
        <div className="float-right">
          <button type="button" className="btn btn-secondary mr-2" onClick={handleEditCard}><i className="bi bi-pencil"></i> Edit</button>
          <button type="button" className="btn btn-danger" onClick={() => handleDeleteCard(cardId)}><i className="bi bi-trash-fill"></i></button>
        </div>
      </div>
    </div>
  );
}

export default FlashcardItem;