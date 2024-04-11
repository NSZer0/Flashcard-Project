import React from "react";

function FormEditCard({ card = {}, handleChange, handleSubmit, handleCancel }) {
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <textarea
            className="form-control"
            id="front"
            name="front"
            placeholder="Front side of card"
            rows="3"
            onChange={(event) => handleChange(event)}
            value={card.front}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="back"
            name="back"
            placeholder="Back side of card"
            rows="3"
            onChange={(event) => handleChange(event)}
            value={card.back}
          />
        </div>
        <button type="cancel" className="btn btn-secondary mr-3" onClick={(event) => handleCancel(event)}>{card.id ? ("Cancel") : ("Done")}</button>
        <button type="submit" className="btn btn-primary">{card.id ? ("Submit") : ("Save")}</button>
      </form>
    </>
  );
}

export default FormEditCard;