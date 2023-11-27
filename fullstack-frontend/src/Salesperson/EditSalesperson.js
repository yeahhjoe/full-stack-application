import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditSalesperson() {

    let navigate = useNavigate();

    const {id} = useParams()

    // Use a useSate hook (sale contains the propoerties, useSate updates the values)

    const [salesperson, setSalesperson] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        manager: '',
        startDate: '',
        terminationDate: ''

    });

    const{firstName,lastName,address,phone,manager,startDate,terminationDate}=salesperson;

    
    const onInputChange = (e)=>(
        setSalesperson({...salesperson, [e.target.name]: e.target.value})
    )

    useEffect(() =>{
        loadSalesperson()
    },[])
    
      

    // Create function to put  data (update)to database (use axios)
    const onSubmit= async (e)=>{
        e.preventDefault(); // weird url
        await axios.put(`http://localhost:8080/salesperson/${id}`, salesperson)
        navigate("/salesperson")
    }

    // update based on productId
    const loadSalesperson = async () =>{
        const result = await axios.get(`http://localhost:8080/salesperson/${id}`)
        setSalesperson(result.data)
    }

  return (
    <div className = "container">
        <div className = "row">
            <div className = "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Update Salesperson</h2>
                <form onSubmit={(e)=> onSubmit(e)}>

                
                <div className = "mb-3">
                    <label htmlFor = "firstName" className= "form-label">
                        firstName
                    </label>
                    <input
                    type = "text"
                    className='form-control'
                    placeholder='Enter firstName'
                    name = "firstName"
                    value = {firstName}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "lastName" className= "form-label">
                    lastName
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the lastName'
                    name = "lastName"
                    value = {lastName}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "address" className= "form-label">
                    address
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the address'
                    name = "address"
                    value = {address}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "phone" className= "form-label">
                    phone
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the phone #'
                    name = "phone"
                    value = {phone}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "manager" className= "form-label">
                    manager
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the manager'
                    name = "manager"
                    value = {manager}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "startDate" className= "form-label">
                    startDate
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the startDate'
                    name = "startDate"
                    value = {startDate}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "terminationDate" className= "form-label">
                    terminationDate
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the terminationDate'
                    name = "terminationDate"
                    value = {terminationDate}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <button type ="submit" className = "btn btn-outline-primary ">
                    Submit
                    </button>
                    <Link className = "btn btn-outline-danger mx-2 " to = "/salesperson">
                    Cancel
                    </Link>
                    </form>
            </div>
        </div>

    </div>
  )
}
