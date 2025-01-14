import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div>
    {orders.map(order => (
      <div key={order.id}>
        <h3>Order ID: {order.id}</h3>
        <p>Customer ID: {order.customer_id}</p>
        <p>Order Date: {order.date}</p>
        <p>Expected Delivery Date: {order.expected_delivery_date}</p>
        <h4>Products:</h4>
        {order.order_products.map((item, index) => (
          <div key={index} style={{ marginBottom: "1rem", border: "1px solid #ddd", padding: "1rem" }}>
            <p><strong>Product Name:</strong> {item.product.name}</p>
            <p><strong>Product ID:</strong> {item.product.id}</p>
            <p><strong>Price:</strong> ${item.product.price.toFixed(2)}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Total:</strong> ${(item.product.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
  );
};

export default OrderList;