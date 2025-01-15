import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const PlaceOrder = () => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [orderDate, setOrderDate] = useState('');
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get("http://localhost:5000/customers")
      .then(response => setCustomers(response.data))
      .catch(error => console.error("Error fetching customers:", error));


    axios.get("http://localhost:5000/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // const handleProductChange = (productId, quantity) => {
  //   setSelectedProducts(prevProducts => {
  //     const existingProduct = prevProducts.find(p => p.product_id === productId);
  //     if (existingProduct) {
  //       return prevProducts.map(p =>
  //         p.product_id === productId ? { ...p, quantity } : p
  //       );
  //     } else {
  //       return [...prevProducts, { product_id: productId, quantity }];
  //     }
  //   });
  // };

  const handleProductChange = (productId, quantity) => {
    setSelectedProducts((prevProducts) => {
      if (quantity > 0) {
        const existingProduct = prevProducts.find((p) => p.product_id === productId);
        if (existingProduct) {
          return prevProducts.map((p) =>
            p.product_id === productId ? { ...p, quantity } : p
          );
        } else {
          return [...prevProducts, { product_id: productId, quantity }];
        }
      } else {
        return prevProducts.filter((p) => p.product_id !== productId);
      }
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      customer_id: selectedCustomer,
      date: orderDate,
      expected_delivery_date: expectedDeliveryDate, 
      products: selectedProducts.filter(p => p.quantity > 0)
    };

    axios.post("http://localhost:5000/orders", orderData)
      .then(() => {
        alert("Order placed successfully");
        navigate("/orders");
      })
      .catch(error => {
        console.error("Error placing order:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Customer</Form.Label>
          <Form.Control as="select" value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)} required>
            <option value="">Select Customer</option>
            {customers.map(customer => (
              <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Order Date</Form.Label>
          <Form.Control type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Expected Delivery Date</Form.Label>
          <Form.Control type="date" value={expectedDeliveryDate} onChange={(e) => setExpectedDeliveryDate(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Products</Form.Label>
          {products.map(product => (
            <div key={product.id}>
              <Form.Check
                type="checkbox"
                label={product.name}
                onChange={(e) => handleProductChange(product.id, e.target.checked ? 1 : 0)}
              />
              {selectedProducts.find(p => p.product_id === product.id) && (
                <Form.Control
                  type="number"
                  min="1"
                  value={selectedProducts.find(p => p.product_id === product.id).quantity}
                  onChange={(e) => handleProductChange(product.id, parseInt(e.target.value))}
                />
              )}
            </div>
          ))}
        </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="secondary" size="lg" className="btn shadow-lg mb-4 mt-5">Place Order</Button>
          </div>
      </Form>
    </div>
  );
};

export default PlaceOrder;  