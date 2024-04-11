import React from "react";
import Header from "./Components/Header";
import RootRoutes from "./Routes/RootRoutes";

function App() {
  return (
    <div className="app-routes">
      <Header />
      <div className="container">
        <RootRoutes />
      </div>
    </div>
  );
}

export default App;
