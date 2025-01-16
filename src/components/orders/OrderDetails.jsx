// Individual order details display when customer makes a purchase including order details, subtotals, and order total

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
  const { orderId } = useParams(); // Get the orderId from the URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/orders/${orderId}`);
        setOrder(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch order details. Please try again later.");
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  function calculateOrderSubtotal(products) {
    const subtotal = products.reduce((accumulator, item) => {
      return (item.product.price * item.quantity)
    },0)
    console.log(products)
    return subtotal
  }

  function calculateOrderTotal(products) {
    const total = products.reduce((accumulator, item) => {
      return accumulator + (item.product.price * item.quantity)
    },0)
    console.log(products)
    return total
  }

  return (
    <section className="blocktext mt-5" id="orders" style={{ backgroundColor: "lightgrey", padding: "20px", border: "1px solid #696969", borderRadius: "8px" }}>
      <h3>Order Details</h3>
      {order && (
        <div>
          <p><strong>Order ID:</strong> {order.id}
          <br />
          <strong>Date:</strong> {order.date}
          <br />
          <strong>Expected Delivery Date:</strong> {order.expected_delivery_date}
          <br />
          <strong>Customer ID:</strong> {order.customer_id}</p>
          <ul>
            {order.order_products.map((product, index) => (
              <li className="rounded" key={index} style={{ marginBottom: "1rem", border: "1px solid #696969", padding: "1rem" }}>
                <h5><strong>Products</strong></h5>
                <p><strong>Product Name:</strong> {product.product.name}
                <br />
                <strong>Quantity:</strong> {product.quantity}
                <br />
                <strong>Price:</strong> ${product.product.price.toFixed(2)}
                <br />
                <strong>Subtotal:</strong> $ {(product.product.price * product.quantity).toFixed(2)}
                </p>
              </li>
            ))}
            <div>
            <h5 className="mb-5"><strong>Order Total:</strong> $ {calculateOrderTotal(order.order_products).toFixed(2)}</h5>
          </div>
          </ul>
        </div>
      )}
    </section>
  );
};

export default OrderDetails;