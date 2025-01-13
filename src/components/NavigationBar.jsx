import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggle } from "react-bootstrap"

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/" >E-Commerce App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto m-4">
          <Nav.Link as={NavLink} to="/" activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/product-landing" activeclassname="active">
            Shop Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" activeclassname="active">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-product" activeclassname="active">
            Add Product
          </Nav.Link>
          <Nav.Link as={NavLink} to="/customers" activeclassname="active">
            Customers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-customer" activeclassname="active">
            Add Customer
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;