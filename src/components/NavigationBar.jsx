import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarToggle } from "react-bootstrap"

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/" >E-Commerce App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-customer" activeclassname="active">
            Add Customer
          </Nav.Link>
          <Nav.Link as={NavLink} to="/customers" activeclassname="active">
            Customers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-product" activeclassname="active">
            Add Product
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" activeclassname="active">
            Products
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  //   <nav className="clearfix">
  //     <NavLink to="/" activeclassname="active">Home</NavLink>
  //     <NavLink to="/add-customer" activeclassname="active">Add Customer</NavLink>
  //     <NavLink to="/customers" activeclassname="active">Customers</NavLink>
  //     <NavLink to="/add-product" activeclassname="active">Add Product</NavLink>
  //     <NavLink to="/products" activeclassname="active">Products</NavLink>
  //   </nav>
  // );
}

export default NavigationBar;