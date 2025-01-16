// Home Page using Bootstrap Cards, Buttons, and Images to enhance user experience

import React from "react";
import { Button, Card, CardGroup, Image } from "react-bootstrap";
import { HashLink, NavHashLink } from "react-router-hash-link";
import 'bootstrap/dist/css/bootstrap.min.css';
import shopImage from "../images/shop.png";
import itImage from "../images/it.jpg";
import kitchenImage from "../images/kitchen.jpg";
import toyImage from "../images/toy.jpg"
import "../Style.css"

const HomePage = () => {
    return (
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
        <h1 className="mb-5 mt-5">Welcome to the E-commerce App!</h1>
        <h3>For all your shopping needs!</h3>
        <Image 
          src={shopImage} 
          alt="Welcome" 
          fluid 
          className="mb-4 rounded d-block mx-auto img-fluid w-90"
          border="2px solid #ddd"
        />
  
        <div className="mt-4">
          <CardGroup>
            <Card className="card" style={{ width: "18rem", margin: "10px", borderRadius: "10px"}}>
                <Card.Img variant="top" src={itImage} />
                <Card.Body>
                <Card.Title>IT Products</Card.Title>
                <Card.Text>
                    Check out our IT products!
                </Card.Text>
                <div className="text-center">
                <Button href="/product-landing" variant="dark"><NavHashLink to="./product-landing/#itProducts" activeClassName="selected" style={{ color: "white", textDecoration: "none" }}>IT Products</NavHashLink></Button>
                </div>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: "18rem", margin: "10px", borderRadius: "10px" }}>
                <Card.Img variant="top" src={kitchenImage} />
                <Card.Body>
                <Card.Title>Kitchen Products</Card.Title>
                <Card.Text>
                    Check out our kitchen products!
                </Card.Text>
                <div id="kitchen-link" className="text-center">
                    <Button href="/product-landing" variant="dark"><NavHashLink to="./product-landing/#kitchenProducts" activeClassName="selected" style={{ color: "white", textDecoration: "none" }}>Kitchen Products</NavHashLink></Button>
                </div>
                </Card.Body>
            </Card>
            <Card className="card" style={{ width: "18rem", margin: "10px", borderRadius: "10px" }}>
                <Card.Img variant="top" src={toyImage} />
                <Card.Body>
                <Card.Title>Tech Toys</Card.Title>
                <Card.Text>
                    Check out our tech toys!
                </Card.Text>
                <div className="text-center">
                <Button href="/product-landing" variant="dark"><NavHashLink to="./product-landing/#techToys" activeClassName="selected" style={{ color: "white", textDecoration: "none" }}>Tech Toys</NavHashLink></Button>
                </div>
                </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="d-grid gap-2">
            <Button href="/product-landing" variant="secondary" size="lg" className="btn shadow-lg mb-4 mt-5">Shop Now</Button>
        </div>
      </div>
    );
  };
  
  export default HomePage;