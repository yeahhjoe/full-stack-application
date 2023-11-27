import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  },[]);


  const loadProducts=async()=>{
    const result = await axios.get("http://localhost:8080/products");
    setProducts(result.data);

  }
  return (
    <div className= 'container'>
        <div className = 'py-4'>
            <h2>Product Page</h2>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">manufacturer</th>
      <th scope="col">style</th>
      <th scope="col">purchasePrice</th>
      <th scope="col">qtyOnHand</th>
      <th scope="col">salePrice</th>
      <th scope="col">commissionPercentage</th>
      <th scope="col">Edit </th>
    </tr>
  </thead>
  <tbody>

    {
      products.map((product,index)=>(
        <tr>
      <th scope="row" key ={index}>{index +1} </th>
      <td>{product.name}</td>
      <td>{product.manufacturer}</td>
      <td>{product.style}</td>
      <td>{product.purchasePrice}</td>
      <td>{product.qtyOnHand}</td>
      <td>{product.salePrice}</td>
      <td>{product.commissionPercentage}</td>
      <td>
        
        <Link className = "btn btn-outline-primary mx-2" to ={`/editproduct/${product.id}`}>Update</Link>
        
      </td>
    </tr>
      ))
    }
  
  </tbody>
</table>
        </div>
    </div>
  );
}
