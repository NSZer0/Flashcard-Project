import React from "react";
import { Link } from 'react-router-dom'

function PathDisplay({ navInfo = [], activePathName }) {
  const paths = navInfo.map((path, index) => {
    return (
      <li className="breadcrumb-item" key={index}><Link to={path.url}>{path.name}</Link></li>
    )
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/"><i className="bi bi-house-door-fill"></i> Home</Link></li>
        {paths}
        <li className="breadcrumb-item active" aria-current="page">{activePathName}</li>
      </ol>
    </nav>
  );
}

export default PathDisplay;