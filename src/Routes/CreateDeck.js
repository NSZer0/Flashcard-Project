import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDeck } from "../utils/api";
import PathDisplay from "../Components/PathDisplay";
import FormEditDeck from "../Components/FormEditDeck";

function CreateDeck() {
  const initialFormState = {
    name: "",
    description: ""
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createDeck(formData);
    navigate(`/decks/${response.id}`);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  }

  return (
    <>
      <PathDisplay activePathName="Create Deck" />
      <h1>Create Deck</h1>
      <FormEditDeck handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
    </>
  );
}

export default CreateDeck;