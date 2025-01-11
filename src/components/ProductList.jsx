import { array, func } from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/products");
            console.log(response)
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    
    const deletedProduct = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <div className="product-list">
            <h3>Products</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} (ID: {product.id})
                        <br />
                        <button onClick={() => navigate(`/edit-product/${product.id}`)}>Edit</button>
                        <button onClick={() => deletedProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProductList.propTypes = {
    products: array,
    onEditProduct: func,
    onProductDeleted: func
};

export default ProductList;