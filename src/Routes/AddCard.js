import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, createCard } from "../utils/api";
import PathDisplay from "../Components/PathDisplay";
import FormEditCard from "../Components/FormEditCard";

function AddCard() {
  const [deck, setDeck] = useState({});
  const initialFormState = {
    front: "",
    back: ""
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  
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
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createCard(deckId, formData)
      .then(() => setFormData({ ...initialFormState }))
      .then(() => event.target.reset());
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate(`/decks/${deckId}`);
  }

  return (
    <>
      {deck.name ? (
        <>
          <PathDisplay navInfo={navInfo} activePathName="Add Card"/>
          <h1>{deck.name}: Add Card</h1>
          <FormEditCard handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
        </>
      ) : (
        <div className="p-4 border border-top-0">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default AddCard;