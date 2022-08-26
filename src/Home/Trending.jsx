import React from 'react'
import { Trend } from "../style";


const Trending = () => {
  return (
    <div>

<h1 style={{ margin: "50px 0px 0px 50px" }}>Trending Right Now</h1>
      <div className="Trends">
        {Trend.map((item) => {
          return (
            <div className="Trends_img" key={item.id}>
              <img src={item.image} alt="img" width={"270px"} />
              <h6 style={{ fontWeight: "bold" }}>{item.title}</h6>
              <p
                style={{
                  fontSize: "15px",
                  color: "darkgrey",
                  letterSpacing: "3px",
                }}
              >
                {item.type}
              </p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Trending