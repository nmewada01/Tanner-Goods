import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import {GiBeltArmor,GiDiscGolfBag,GiWallet,GiTriangleTarget} from "react-icons/gi"

import Spinners from "./Spinner/Spinner";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const {  loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    axios({
      url: "http://localhost:8080/Products",
      method: "GET",
    })
      .then((res) => {
        setLoading(true);
        setData(res.data);
        setFilter(res.data);
      }).then(()=> setLoading(false))
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [setLoading]);
 

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
              MAZAMA<GiTriangleTarget/>
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => filterProducts("bag")}
            >
              BAG<GiDiscGolfBag/>
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => filterProducts("belt")}
            >
              BELT<GiBeltArmor/>
            </Button>
            <Button
              className="gap_in_buttons"
              variant="outline-dark"
              onClick={() => filterProducts("wallet")}
            >
              WALLET<GiWallet/>
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
                  <Card.Img
                    variant="top"
                    className="container_img"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.type}</Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                    <NavLink
                      to={`/products/${item.id}`}
                      className="btn btn-outline-dark"
                    >
                     Buy Now
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
      <div>{loading ? <Spinners/> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
