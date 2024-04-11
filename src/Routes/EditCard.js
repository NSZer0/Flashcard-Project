import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";
import PathDisplay from "../Components/PathDisplay";
import FormEditCard from "../Components/FormEditCard";

function EditCard() {
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const {deckId, cardId} = useParams();

  const navigate = useNavigate();

  const navInfo = [{url: `/decks/${deckId}`, name: deck.name}];

  useEffect(() => {
    const abortController = new AbortController()
    
    readDeck(deckId, abortController.signal)
      .then(response => {
        setDeck(() => response)
      });
    
    return () => abortController.abort()
  }, [deckId])

  useEffect(() => {
    const abortController = new AbortController()
    
    readCard(cardId, abortController.signal)
      .then(response => {
        setCard(() => response)
      });
    
    return () => abortController.abort()
  }, [cardId])

  useEffect(() => {
    if (deckId) {
      const abortController = new AbortController()
    
    readDeck(deckId, abortController.signal)
      .then(response => {
        setDeck(() => response)
      });
    
    return () => abortController.abort()
    }
  }, [deckId])

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCard(card);
    navigate(`/decks/${deckId}`);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate(`/decks/${deckId}`);
  }

  return (
    <>
      {deck.name ? (
        <>
          <PathDisplay navInfo={navInfo} activePathName={`Edit Card ${cardId}`}/>
          <h1>Edit Card</h1>
          <FormEditCard card={card} handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
        </>
      ) : (
        <div className="p-4 border border-top-0">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default EditCard;