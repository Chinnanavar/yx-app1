import React from 'react';
import data from './NestedData.json';
import './NestedJson.css';

const NestedJson = () => {
  return (
    <>
      <h1>Nested JSON</h1>
      <div className="container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>Author: {item.author}</p>

           
            {item.description.map((sitem, subIndex) => (
                <div key={subIndex}>
                  <p>Year: {sitem.year}</p>
                  <p>Genre: {sitem.genre}</p>
                </div>
              ))}

            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NestedJson;
