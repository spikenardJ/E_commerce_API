// Products List component to List all Products, Product ID, button linking to edit product, and an option to delete product
// Displays stock quantity to View and Manage Product Stock Levels (Bonus)

import { array, func } from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, ListGroup, Row, Col } from "react-bootstrap";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/products");
            setProducts(response.data);
            console.log(response.data)
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
        <Container>
            <Row>
                <Col>
                <h3>Products</h3>
                <ListGroup>
                    {products.map(product => (
                        <ListGroup.Item key={product.id} className="d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded">
                            {product.name}  (ID: {product.id}) (Quantity: {product.stock_quantity})
                            <div>
                                <Button variant="secondary" onClick={() => navigate(`/product-details/${product.id}`)} className="me-2">{product.name} Details</Button>
                                <Button variant="secondary" onClick={() => navigate(`/edit-product/${product.id}`)} className="me-2">Edit</Button>
                                <Button variant="danger" onClick={() => deletedProduct(product.id)}>Delete</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

ProductList.propTypes = {
    products: array,
    onEditProduct: func,
    onProductDeleted: func
};

export default ProductList;