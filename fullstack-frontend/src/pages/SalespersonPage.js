import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SalespersonPage() {

  const [salepersons, setSalepersons] = useState([]);

  useEffect(() => {
    loadSalespersons();
  },[]);


  const loadSalespersons=async()=>{
    const result = await axios.get("http://localhost:8080/salespeople");
    setSalepersons(result.data);
  }
  return (
    <div className= 'container'>
        <div className = 'py-4'>
            <h2>Salesperson Page</h2>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">address</th>
      <th scope="col">phone</th>
      <th scope="col">Manager</th>
      <th scope="col">startDate</th>
      <th scope="col">terminateDate </th>
      <th scope="col">Edit </th>
    </tr>
  </thead>
  <tbody>

    {
      salepersons.map((salesperson,index)=>(
        <tr>
      <th scope="row" key ={index}>{index +1} </th>
      <td>{salesperson.firstName}</td>
      <td>{salesperson.lastName}</td>
      <td>{salesperson.address}</td>
      <td>{salesperson.phone}</td>
      <td>{salesperson.manager}</td>
      <td>{salesperson.startDate}</td>
      <td>{salesperson.terminationDate}</td>
      <td>
        
        <Link className = "btn btn-outline-primary mx-2" to ={`/editsalesperson/${salesperson.id}`}>Update</Link>
        
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
