import React from 'react'
import { Sell } from '../style';

const BestSellers = () => {
  return (
    <div>

      <div className="Trends">
        {Sell.map((item) => {
          return (
            <div className="Trends_img" style={{margin:"35px 0px 0px 80px"}} key={item.id}>
              <img src={item.image} alt="img" width={"350px"} />
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

export default BestSellers