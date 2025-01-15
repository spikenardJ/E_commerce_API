import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/orders')
      .then(response => {
        console.log('Fetched orders:', response.data); // Log the fetched orders
        setOrders(response.data);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  function calculateOrderTotal(products) {
    const total = products.reduce((accumulator, item) => {
      return accumulator + (item.product.price * item.quantity)
    },0)
    console.log(products)
    return total
  }

  return (
    <section className="blocktext mt-3" id="orders" style={{ backgroundColor: "lightgrey", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
      {orders.length >= 1 && orders.map(order => (
        <div className="mt-5 p-3" key={order.id} style={{ backgroundColor: "#f8f9fa", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
          <h3><strong>Order ID: </strong>{order.id}</h3>
          <p><strong>Customer ID: </strong>{order.customer_id}
          <br />
          <strong>Order Date: </strong>{order.date}
          <br />
          <strong>Expected Delivery Date: </strong>{order.expected_delivery_date}
          </p>
          {order.order_products.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem", border: "1px solid #ddd", padding: "1rem" }}>
              <h5><strong>Product in Order:</strong></h5>
              <p><strong>Product Name:</strong> {item.product.name}
              <br />
              <strong>Product ID:</strong> {item.product.id}
              <br />
              <strong>Price:</strong> ${item.product.price.toFixed(2)}
              <br />
              <strong>Quantity:</strong> {item.quantity}
              <br />
              <strong>Subtotal:</strong> ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div>
            <h5 className="mb-5"><strong>Order Total:</strong> {calculateOrderTotal(order.order_products).toFixed(2)}</h5>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OrderList;