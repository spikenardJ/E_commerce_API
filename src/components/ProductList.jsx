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
                            {product.name} (ID: {product.id})
                            <div>
                                <Button variant="primary" onClick={() => navigate(`/edit-product/${product.id}`)} className="me-2">Edit</Button>
                                <Button variant="danger" onClick={() => deletedProduct(product.id)}>Delete</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                </Col>
            </Row>
        </Container>

        // <div className="product-list">
        //     <h3>Products</h3>
        //     <ul>
        //         {products.map(product => (
        //             <li key={product.id}>
        //                 {product.name} (ID: {product.id})
        //                 <br />
        //                 <button onClick={() => navigate(`/edit-product/${product.id}`)}>Edit</button>
        //                 <button onClick={() => deletedProduct(product.id)}>Delete</button>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    );
};

ProductList.propTypes = {
    products: array,
    onEditProduct: func,
    onProductDeleted: func
};

export default ProductList;