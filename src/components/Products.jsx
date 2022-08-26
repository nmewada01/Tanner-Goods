import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const { Load, loading, setLoading } = useContext(AuthContext);
  const { count, setCount } = useContext(AuthContext);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/Products",
      method: "GET",
    })
      .then((res) => {
        setLoading(true);
        setData(res.data);
        setFilter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  setLoading(false);

  const filterProducts = (cat) => {
    const updatedList = data.filter((curItem) => curItem.category === cat);
    setFilter(updatedList);
  };

  const Price = (p, t) => {
    const updatedPrice = data.filter(
      (curItem) => curItem.price > p && curItem.price < t
    );
    setFilter(updatedPrice);
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="container_button">
          <div>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => setFilter(data)}
            >
              ALL
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => filterProducts("tanner")}
            >
              TANNER GOODS
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => filterProducts("mazama")}
            >
              MAZAMA
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => filterProducts("bag")}
            >
              BAG
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => filterProducts("belt")}
            >
              BELT
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => filterProducts("wallet")}
            >
              WALLET
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => Price(100, 500)}
            >
              100-500
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => Price(500, 2000)}
            >
              500-ABOVE
            </Button>
          </div>
        </div>
        <div className="Products_container">
          {filter.map((item) => {
            return (
              <div key={item.id} className="Products_inside_container">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.type}</Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                    <NavLink
                      to={`/products/${item.id}`}
                      className="btn btn-outline-dark"
                      onClick={() => setCount(count + 1)}
                    >
                      Add to Card
                    </NavLink>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>New Arrivals</h1>
      <hr />
      <div>{loading ? <Load /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;

// <img src={item.image} alt="images" width={"270px"}/>
//             <h6 style={{ fontWeight: "bold" }}>{item.title}</h6>
//               <p
//                 style={{
//                   fontSize: "15px",
//                   color: "darkgrey",
//                   letterSpacing: "3px",
//                 }}
//               >
//                 {item.type}
//               </p>
//               <p>{item.price}</p>

// {/* <Card style={{ width: "18rem" }}>
// <Card.Img variant="top" src={it.image} />
// <Card.Body>
//   <Card.Title>{it.title}</Card.Title>
//   <Card.Text>{it.type}</Card.Text>
//   <Card.Text>${it.price}</Card.Text>
//   <Button variant="success">Add to Card</Button>
// </Card.Body>
// </Card> */}
