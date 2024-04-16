import React from "react";
import PathDisplay from "../Components/PathDisplay";

function NotFound() {
  return (
    <div className="NotFound">
      <PathDisplay activePathName="Page Not Found"/>
      <h1>Page Not Found</h1>
    </div>
  );
}

export default NotFound;
