// import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
// import { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList";
import CustomerFormWrapper from "./components/CustomerFormWrapper";
// import OrderList from "./components/OrderList";
import ProductList from "./components/ProductList";
// import CustomerForm from "./components/CustomerForm";
import ProductForm from "./components/ProductForm";
import ProductLanding from "./components/ProductLanding";
// import axios from "axios";
import NavigationBar from "./components/NavigationBar";
import OrderList from "./components/OrderList";
import OrderForm from "./components/OrderForm";
import NotFound from "./components/NotFound";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-landing" element={<ProductLanding />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<ProductForm />} />
        <Route path="/add-customer/" element={<CustomerFormWrapper />} />
        <Route path="/edit-customer/:id" element={<CustomerFormWrapper />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/add-order" element={<OrderForm />} />
        <Route path="/edit-order/:id" element={<OrderForm />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
