import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CustomerPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  },[]);


  const loadCustomers=async()=>{
    const result = await axios.get("http://localhost:8080/customers");
    setCustomers(result.data)
  }

  return (
    <div className= 'container'>
        <div className = 'py-4'>
            <h2>Customer Page</h2>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">address</th>
      <th scope="col">phone</th>
      <th scope="col">startDate</th>
      <th scope="col">Edit </th>
    </tr>
  </thead>
  <tbody>

    {
      customers.map((customer,index)=>(
        <tr>
      <th scope="row" key ={index}>{index +1} </th>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.address}</td>
      <td>{customer.phone}</td>
      <td>{customer.startDate}</td>
      <td>
        <button className = "btn btn-primary mx-2">View</button>
        <button className = "btn btn-outline-primary mx-2">Edit</button>
        <button className = "btn btn-danger mx-2">Delete</button>
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
