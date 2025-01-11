// Uncontrolled Component
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { object, func } from "prop-types";

const ProductForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock_quantity, setStockQuantity] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchProductDetails = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:5000/products/${id}`);
                    setName(response.data.name);
                    setPrice(response.data.price);
                    setStockQuantity(response.data.stock_quantity);
                } catch (error) {
                    console.error("Error fetching product details:", error);
                    setError(error.toString());
                }
            };
            fetchProductDetails();
        }
    }, [id]);

    const validateForm = () => {
        const errors = {};
        if (!name) errors.name = "Product name is required";
        if (!price || price <= 0) errors.price = "Product price must be a positive number";
        if (!stock_quantity || stock_quantity <= 0) errors.stock_quantity = "Quantity must be a positive number"
        return errors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setSubmitting(true);
            setError(null);
            const productData = { name, price };
            try {
                if (id) {
                    await axios.put(`http://127.0.0.1:5000/products/${selectedProduct.id}`, productData);
                } else {
                    await axios.post("http://127.0.0.1:5000/products", productData);
                }
                setName("");
                setPrice("");
                setStockQuantity("");
                setSubmitting(false);
                navigate("/products");
            } catch (error) {
                console.error("Error submitting product:", error);
                setError(error.toString());
                setSubmitting(false);
            }
        } else {
            setErrors(errors);
        }
    };

    if (isSubmitting) return <p>Submitting product data...</p>;
    if (error) return <p>Error submitting product data: {error}</p>;
           
    return (
        <form onSubmit={handleSubmit}>
            <h3>{id ? "Edit" : "Add"}Product</h3>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </label>
            <br />
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                {errors.price && <div style={{ color: "red" }}>{errors.price}</div>}
            </label>
            <br />
            <label>
                Stock Quantity:
                <input type="number" value={stock_quantity} onChange={(e) => setPrice(e.target.value)} />
                {errors.stock_quantity && <div style={{ color: "red" }}>{errors.stock_quantity}</div>}
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

ProductForm.propTypes = {
    selectedProduct: object,
    onProductUpdated: func
};

export default ProductForm;