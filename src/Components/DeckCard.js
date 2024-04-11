import React from "react";
import { Link } from 'react-router-dom';

function DeckCard({ deckId, cardsInDeck, name, description, isOverviewPage = false, handleDeleteDeck }) {
  const cardCount = () => {
    const strCountSuffix = cardsInDeck === 1 ? "card" : "cards"
    return `${cardsInDeck} ${strCountSuffix}`;
  }

  return (
    <div className="card border-secondary my-3 col-sm-12 col-md-6">
      <div className="card-body text-secondary">
        <h4 className="card-title font-weight-bold d-inline-block">{name}</h4>
        <p className="card-title float-right">{cardCount()}</p>
        <p className="card-text">{description}</p>
        {isOverviewPage ? (
          <Link to={`/decks/${deckId}/edit`} type="button" className="btn btn-secondary mr-2"><i className="bi bi-pencil"></i> Edit</Link>
        ) : (
          <Link to={`/decks/${deckId}`} type="button" className="btn btn-secondary mr-2"><i className="bi bi-eye"></i> View</Link>
        )}
        <Link to={`/decks/${deckId}/study`} type="button" className="btn btn-primary"><i className="bi bi-journal-bookmark"></i> Study</Link>
        {isOverviewPage &&
          <Link to={`/decks/${deckId}/cards/new`} type="button" className="btn btn-primary ml-2"><i className="bi bi-plus"></i> Add Cards</Link>
        }
        <button type="button" className="btn btn-danger float-right" onClick={() => handleDeleteDeck(deckId, name)}><i className="bi bi-trash-fill"></i></button>
      </div>
    </div>
  );
}

export default DeckCard;