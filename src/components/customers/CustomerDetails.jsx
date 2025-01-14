import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching customer details for ID:", id);
    axios.get(`http://localhost:5000/customers/${id}`)
      .then(response => {
        console.log("Customer data fetched:", response.data);
        setCustomer(response.data);
      })
      .catch(error => {
        console.error("Error fetching customer details:", error);
        setError(error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/customers/${id}`)
      .then(() => {
        alert('Customer deleted successfully');
        navigate('/customers');
      })
      .catch(error => console.error("Error deleting customer:", error));
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3 className="mt-3 mb-3">Customer Details</h3>
      <p>ID: {customer.id}</p>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <button onClick={handleDelete}>Delete Customer</button>
      <Link to="/customers">Back to Customers</Link>
    </div>
  );
};

export default CustomerDetails;