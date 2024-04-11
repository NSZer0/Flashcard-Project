import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import PathDisplay from "../Components/PathDisplay";
import FormEditDeck from "../Components/FormEditDeck";

function EditDeck() {
  const [deck, setDeck] = useState({});
  const {deckId} = useParams();
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

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    updateDeck(deck)
      .then(response => navigate(`/decks/${response.id}`));
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate(`/decks/${deckId}`);
  }

  return (
    <>
      {deck.name ? (
        <>
          <PathDisplay navInfo={navInfo} activePathName="Edit Deck"/>
          <h1>Edit Deck</h1>
          <FormEditDeck deck={deck} handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
        </>
      ) : (
        <div className="p-4 border border-top-0">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default EditDeck;