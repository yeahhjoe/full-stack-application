import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddSale() {

    let navigate = useNavigate();

    // Use a useSate hook (sale contains the propoerties, useSate updates the values)

    const [sale, setSale] = useState({
        productId: '',
        salespersonId: '',
        customerId: '',
        salesDate: '',
    });

    const{productId, salespersonId, customerId, salesDate}=sale;

    /*
    const onInputChange = (e)=>(
        setSale({...sale, [e.target.name]: e.target.value})
    )
    */

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setSale({
          ...sale,
          [name]: name.endsWith('Id') ? parseInt(value, 10) : value,
        });
      };
      

    // Create function to post data to database (use axios)
    const onSubmit= async (e)=>{
        e.preventDefault(); // weird url
        await axios.post("http://localhost:8080/sale", sale)
        navigate("/sale")
    }

  return (
    <div className = "container">
        <div className = "row">
            <div className = "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Create Sale</h2>
                <form onSubmit={(e)=> onSubmit(e)}>

                
                <div className = "mb-3">
                    <label htmlFor = "productId" className= "form-label">
                        Product #
                    </label>
                    <input
                    type = "text"
                    className='form-control'
                    placeholder='Enter the Product Id'
                    name = "productId"
                    value = {productId}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "salespersonId" className= "form-label">
                        Salesperson #
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the Salesperson Id'
                    name = "salespersonId"
                    value = {salespersonId}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "customerId" className= "form-label">
                        Customer #
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the Customer Id'
                    name = "customerId"
                    value = {customerId}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "salesDate" className= "form-label">
                        Sales Date
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the Sales Date'
                    name = "salesDate"
                    value = {salesDate}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <button type ="submit" className = "btn btn-outline-primary ">
                    Submit
                    </button>
                    <Link className = "btn btn-outline-danger mx-2 " to = "/sale">
                    Cancel
                    </Link>
                    </form>
            </div>
        </div>

    </div>
  )
}
