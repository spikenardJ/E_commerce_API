// Individual Product Details page displaying details of product

import axios from "axios"
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const ProductsDetails = () => {

    
    const {id} = useParams()
    const [products, setProduct] = useState(null)


    const getProductInfo = (id) => {
        axios.get(`http://127.0.0.1:5000/products/${id}`)
        .then(response => {
          console.log(response)
          setSelectedProductInfo(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      }


      useEffect(()=>{
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/products/${id}`)
                console.log(response)
                setProduct(response.data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchProduct();

      },[])

  return (
    
    <div>
    
        {products ?(
            <>
            <div>
                <h3 className="mt-3 mb-3">Product Details</h3>
                <h5>{products.name}</h5>
                <p>ID: {products.id}</p>
                <p>Price: ${products.price}</p>
                <p>Quantity: {products.stock_quantity}</p>

                <br /><br />

                <div className="text-center">
                    <Link to="/products">
                        <Button className="m-2" variant="secondary" size="sm">Back to Products</Button>
                    </Link>
                
                </div>

                <div>
                    {/* View and Manage Product Stock Levels (Bonus), Restock Products When Low (Bonus) */}
                    {products.stock_quantity <= 5 && (
                        <div className="text-center">
                            <p>Only a few items left in stock!</p>
                            <Link to="/add-product">
                                <Button className="m-2" variant="danger" size="lg">Order More {products.name} Now!</Button>
                            </Link>
                        </div>
                    )}
                </div>
    </div>

            </>
        ) : (
            <> 
            <p>User Not Found</p>
                <Link to="/products">
                    <Button className="m-2" variant="secondary" size="sm">Back to Products</Button>
                </Link>
            </>
            
        )}
       
    </div>
    
  )
}

export default ProductsDetails;