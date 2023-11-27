import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SalePage() {

  const [sales, setSales] = useState([]);

  useEffect(() => {
    loadSale();
  },[]);


  const loadSale=async()=>{
    const result = await axios.get("http://localhost:8080/sales");
    setSales(result.data);
  }

  // Calculate Commission

  const calculateCommision = (sale) => {
    const { product, salesperson } = sale;
  
    // Check if product is not null or undefined
    if (product && product.salePrice && salesperson && salesperson.commissionPercentage) {
      const commission = (product.salePrice * salesperson.commissionPercentage) / 100;
      return commission.toFixed(2);
    } else {
      // Handle the case where product or salesperson is null or undefined
      return 'N/A';
    }
  };
  



  return (
    <div className= 'container'>
        <div className = 'py-4'>
            <h2>Sale Page</h2>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Date</th>
      <th scope="col">Price</th>
      <th scope="col">Salesperson</th>
      <th scope="col">Salesperson Commission</th>
      <th scope="col">Edit </th>
    </tr>
  </thead>
  <tbody>

  {
  sales.map((sale, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{sale.product.name}</td>
      <td>{`${sale.customer.firstName} ${sale.customer.lastName}`}</td>
      <td>{sale.salesDate}</td>
      <td>{sale.product.salePrice}</td>
      <td>{`${sale.salesperson.firstName} ${sale.salesperson.lastName}`}</td>
      <td>{(sale.product.salePrice * sale.product.commissionPercentage / 100)}</td>

      <td>
        <button className="btn btn-primary mx-2">View</button>
        <button className="btn btn-outline-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </td>
    </tr>
  ))
}

  
  </tbody>
</table>
        <Link className="btn btn-primary" to = "/createuser"> Create Sale</Link>
        </div>
    </div>
  );
}
