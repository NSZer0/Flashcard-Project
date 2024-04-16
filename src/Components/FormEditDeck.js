import React from "react";

function FormEditDeck({ deck = {}, handleChange, handleSubmit, handleCancel }) {
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Deck Name"
            onChange={(event) => handleChange(event)}
            value={deck.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            placeholder="Brief description of the deck"
            rows="4"
            onChange={(event) => handleChange(event)}
            value={deck.description}
          />
        </div>
        <button type="cancel" className="btn btn-secondary mr-3" onClick={(event) => handleCancel(event)}>Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default FormEditDeck;