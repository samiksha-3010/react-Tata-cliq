import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import api from '../ApiConfig';

const EditProduct = () => {
  const [userdata, setUserdata] = useState({ name: "", price: "", image: "" ,category: "" })
  const handlechange = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };
  const {id} = useParams()
  
  function selectrole(event) {
    // console.log(event.target.value ,"role")
    setUserdata({ ...userdata, ["category"]: event.target.value });
  }
  const handleSubmit = async (e ) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await api.post(
        "http://localhost:8000/edit-product",
        { token, userdata, productId:id }
      );

      if (response?.data?.success) {
        toast.success(response.data.message);  
      }
    } catch (error) {
      console.log(error);
    }
  };
    
    
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <h4>Edit Product Seller</h4> <br />
        <label>Product Name :</label>
        <br />
        <input
          value={userdata.name}
          type="text"
          onChange={handlechange}
          name="name"
        />
        <br />
        <br />
        <label>Brand :</label>
        <br />
        <input
          value={userdata.brand}
          type="text"
          onChange={handlechange}
          name="brand"
        />
        <br />
        <label>Product Price :</label>
        <br />
        <input
          value={userdata.price}
          type="number"
          onChange={handlechange}
          name="price"
        />
        <br />
        <label>Product Image :</label>
        <br />
        <input
          value={userdata.image}
          type="text"
          onChange={handlechange}
          name="image"
        />
        <br />
        
        <br />
        <label>Product Category :</label><br/>
        <select id="select" onChange={selectrole} value={userdata.category}>
          <option value="Other">Other</option>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
          <option value="Kids">Kids</option>
          <option value="Beauty">Beauty</option>
       
        </select>
        <br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  )
}



export default EditProduct