import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CustomerList from "./components/customers/CustomerList";
import CustomerFormWrapper from "./components/customers/CustomerFormWrapper";
import CustomerDetails from "./components/customers/CustomerDetails";
import ProductList from "./components/products/ProductList";
import ProductForm from "./components/products/ProductForm";
import ProductLanding from "./components/products/ProductLanding";
import ProductDetails from "./components/products/ProductDetails";
import NavigationBar from "./components/NavigationBar";
import OrderList from "./components/orders/OrderList";
import OrderForm from "./components/orders/OrderForm";
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
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/add-customer/" element={<CustomerFormWrapper />} />
        <Route path="/edit-customer/:id" element={<CustomerFormWrapper />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customer-details/:id" element={<CustomerDetails />} />
        <Route path="/add-order" element={<OrderForm />} />
        <Route path="/edit-order/:id" element={<OrderForm />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
