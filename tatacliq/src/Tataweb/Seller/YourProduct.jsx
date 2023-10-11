import React, { useContext, useEffect, useState } from "react";
import api from "../ApiConfig/index";
import AuthContext from "../context/AuthContext";
 import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const YourProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  // const [editData , seteditData] = useState({
    //     name:"",
    //     price:"",
    //     image:"",
    //     category:""
    //   })
  const {state} = useContext(AuthContext)
  const router = useNavigate()

  useEffect(() => {
    async function getProducts() {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        // const response = await axios.post("http://localhost:8000/get-your-products", { token })

        const response = await api.post("/get-your-products", { token });
        if (response.data.success) {
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    getProducts();
  }, []);

//   const editProduct = (id) => {
//     try {
        
//     } catch (error) {
//         toast.error("An error occurred while editing the prouct item from the cart.");
//   console.log(error); 
//     }

// }
  return (
    <div className="product-style">
                  {/* <h2>Added Products ({state?.user?.role})</h2> */}
                  

      <h1 style={{color:"red"}}>Your Products Here ...</h1>

      {allProducts?.length ? (

        <div style={{ display: "flex", justifyContent: "space-around" ,flexWrap:"wrap"  }}>
          {" "}
          {allProducts.map((product) => (
            <div
              style={{
                border: "2px solid black",
                width: "210px",
                height: "350px",
              }}
              key={product._id}
            >
              <img
                style={{ width: "100%", height: "70%"}}
                src={product.image}
              />
              <h3>Name : {product.name}</h3>
              <h3>Price : {product.price}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div style={{color:"red"}}>No Products found!</div>
      )}
    </div>
  );
};

export default YourProducts;
