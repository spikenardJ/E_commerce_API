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
    const total = products.reduce((accumulator, product) => {
      return accumulator + parseFloat(product.price)
    },0)
    console.log(products)
    return total
  }

  return (
    <section className="blocktext mt-3" id="orders" style={{ backgroundColor: "lightgrey", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
      {orders.map(order => (
        <div className="mt-5 p-3" key={order.id} style={{ backgroundColor: "#f8f9fa", padding: "20px", border: "2px solid #ddd", borderRadius: "8px" }}>
          <h3><strong>Order ID: </strong>{order.id}</h3>
          <p><strong>Customer ID: </strong>{order.customer_id}
          <br /><br />
          <strong>Order Date: </strong>{order.date}
          <br /><br />
          <strong>Expected Delivery Date: </strong>{order.expected_delivery_date}
          </p>
          {order.order_products.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem", border: "1px solid #ddd", padding: "1rem" }}>
              <h4><strong>Product in Order:</strong></h4>
              <p><strong>Product Name:</strong> {item.product.name}
              <br /><br />
              <strong>Product ID:</strong> {item.product.id}
              <br /><br />
              <strong>Price:</strong> ${item.product.price.toFixed(2)}
              <br /><br />
              <strong>Quantity:</strong> {item.quantity}
              <br /><br />
              <strong>Subtotal:</strong> ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div>
            <p>Order Total: {calculateOrderTotal(order.order_products)}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OrderList;