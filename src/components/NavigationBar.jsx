import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggle } from "react-bootstrap"

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/" >E-Commerce App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto m-4">
          <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/product-landing" className={({ isActive }) => isActive ? "active" : ""}>
            Shop Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" className={({ isActive }) => isActive ? "active" : ""}>
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-product" className={({ isActive }) => isActive ? "active" : ""}>
            Add Product
          </Nav.Link>
          <Nav.Link as={NavLink} to="/customers" className={({ isActive }) => isActive ? "active" : ""}>
            Customers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-customer" className={({ isActive }) => isActive ? "active" : ""}>
            <small>Add-Edit </small>Customer
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-order" className={({ isActive }) => isActive ? "active" : ""}>
            Order
          </Nav.Link>
          <Nav.Link as={NavLink} to="/orders" className={({ isActive }) => isActive ? "active" : ""}>
            All Orders
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;