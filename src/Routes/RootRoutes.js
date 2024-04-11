import React from "react";
import {Routes, Route, } from "react-router-dom";
import Home from "./Home";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";
import Study from "./Study";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import EditCard from "./EditCard";
import NotFound from "./NotFound";

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decks/*" >
        <Route path="new" element={<CreateDeck />} />
        <Route path=":deckId/*" >
          <Route path="" element={<Deck />} />
          <Route path="study" element={<Study />} />
          <Route path="edit" element={<EditDeck />} />
          <Route path="cards/*" >
            <Route path="new" element={<AddCard />} />
            <Route path=":cardId/*" >
              <Route path="edit" element={<EditCard />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RootRoutes;