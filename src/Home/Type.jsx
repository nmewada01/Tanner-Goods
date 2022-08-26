import React from 'react'
import { type_images } from "../style";

const Type = () => {
  return (
    <div>

<div className="category_belt_wallet">
        {type_images.map((t) => {
          return (
            <div key={t.id}>
              <img src={t.images} alt="logo" width={"10px"} height={"10px"} />
              <h1>{t.titles}</h1>
              <button className="button">Shop Now</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Type