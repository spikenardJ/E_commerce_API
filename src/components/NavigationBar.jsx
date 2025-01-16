import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggle } from "react-bootstrap"

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/" >E-Commerce App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto m-4">
          <Nav.Link as={NavLink} to="/" activeKey="isactive">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/product-landing" activeKey="isactive">
            Shop Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" activeKey="isactive">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-product" activeKey="isactive">
            Add Product
          </Nav.Link>
          <Nav.Link as={NavLink} to="/customers" activeKey="isactive">
            Customers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-customer" activeKey="isactive">
            <small>Add-Edit </small>Customer
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-order" activeKey="isactive">
            Order
          </Nav.Link>
          <Nav.Link as={NavLink} to="/orders" activeKey="isactive">
            All Orders
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;