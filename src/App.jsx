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
// import axios from "axios";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import "./AppStyles.css";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-customer/" element={<CustomerFormWrapper />} />
        <Route path="/edit-customer/:id" element={<CustomerFormWrapper />} />
        <Route path="/customers" element={<CustomerList />} />
        {/* <Route path="/add-customer" element={<CustomerForm />} />
        <Route path="/edit-customer/:id" element={<CustomerForm />} /> */}
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<ProductForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedCustomerId: null
//     };
//   }

//   handleCustomerSelect = (customerId) => {
//     this.setState({ selectedCustomerId: customerId });
//   }

//   updateCustomerList = () => {
//     this.customerListRef.fetchCustomers();
//   };

//   render() {
//     const { selectedCustomerId } = this.state;

//     return (
//       <div className="app-container">
//         <h1>Our Customers</h1>
//         <CustomerForm customerId={selectedCustomerId} onUpdateCustomerList={this.updateCustomerList}/>
//         <CustomerList ref={ref => this.customerListRef = ref} onCustomerSelect={this.handleCustomerSelect} />
//         {selectedCustomerId && (
//           <OrderList 
//             customerId={selectedCustomerId} 
//             onOrderSelect={this.handleOrderSelect} 
//           />
//         )}
//       </div>
//     );
//   }
// }

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleEditProduct = (product) => {
//     setSelectedProducts(product);
//   };

//   const handleProductUpdated = () => {
//     fetchProducts()
//   };

//   const handleProductDeleted = () => {
//     fetchProducts()
//   };

//   return (
//     <div className="app-container">
//       <h1>Product Management</h1>
//       <ProductForm selectedProduct={selectedProduct}
//       onProductUpdated={handleProductUpdated} 
//       />
//       <ProductList 
//       products={products}
//       onEditProduct={handleEditProduct}
//       onProductDeleted={handleProductDeleted} 
//       />
//     </div>
//   );
// };

export default App;
