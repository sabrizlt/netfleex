import React from 'react';
import './Jumbotron.css';

function Jumbotron() {
  return (
    <div
      className="jumbotron"
      style={{
        backgroundImage: `url(https://tse2.mm.bing.net/th?id=OIP.Mndpx7HXwc06Cve7YUc56AHaDx&pid=Api&P=0)`
      }}
    >
      <div className="jumbotron-text">
        <h1>Dark</h1>
        <p>Guarda questa esclusiva Netflix</p>
      </div>
    </div>
  );
}

export default Jumbotron;