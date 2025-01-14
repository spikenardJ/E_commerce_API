import axios from "axios"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

const ProductsDetails = () => {

    
    const {id} = useParams()
    const [products, setProduct] = useState(null);


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
            {/* <h2>{products.product_name}</h2>
            <p>${products.price}</p>
            <p> Availiable in Stock: {products.stock}</p> */}
            <Link to="/products" >Back to All Products</Link>
            <div>
                <h3 className="mt-3 mb-3">Product Details</h3>
                {/* <p>ID: {products.id}</p>
                <p>Name: {products.name}</p> */}
                <p>Price: ${products.price}</p>

                {/* <p>In Stock: {products.product.stock}</p> */}
                <div className="text-center">
                    <Link to="/products">
                        <Button className="m-2" variant="secondary" size="sm">Back to Products</Button>
                    </Link>
                    {/* <Button variant="danger" size="sm" onClick={handleDelete}>Delete {customer.name}</Button> */}
                </div>
    </div>

            </>
        ) : (
            <> <p> No User Found</p>
            <Link to="/products" >Back to All Products</Link>
            </>
            
        )}
       
    </div>
    
  )
}

export default ProductsDetails;