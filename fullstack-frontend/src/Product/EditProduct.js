import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditProduct() {

    let navigate = useNavigate();

    const {id} = useParams()

    // Use a useSate hook (sale contains the propoerties, useSate updates the values)

    const [product, setProduct] = useState({
        name: '',
        manufacturer: '',
        style: '',
        purchasePrice: '',
        qtyOnHand: '',
        salePrice: '',
        commissionPercentage: ''

    });

    const{name,manufacturer,style,purchasePrice,qtyOnHand,salePrice,commissionPercentage}=product;

    
    const onInputChange = (e)=>(
        setProduct({...product, [e.target.name]: e.target.value})
    )

    useEffect(() =>{
        loadProduct()
    },[])
    
      

    // Create function to put  data (update)to database (use axios)
    const onSubmit= async (e)=>{
        e.preventDefault(); // weird url
        await axios.put(`http://localhost:8080/product/${id}`, product)
        navigate("/product")
    }

    // update based on productId
    const loadProduct = async () =>{
        const result = await axios.get(`http://localhost:8080/product/${id}`)
        setProduct(result.data)
    }

  return (
    <div className = "container">
        <div className = "row">
            <div className = "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Update Product</h2>
                <form onSubmit={(e)=> onSubmit(e)}>

                
                <div className = "mb-3">
                    <label htmlFor = "name" className= "form-label">
                        Name
                    </label>
                    <input
                    type = "text"
                    className='form-control'
                    placeholder='Enter Name of Product'
                    name = "name"
                    value = {name}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "manufacturer" className= "form-label">
                        manufacturer
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the manufacturer'
                    name = "manufacturer"
                    value = {manufacturer}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "style" className= "form-label">
                        style
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the Customer Id'
                    name = "style"
                    value = {style}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "purchasePrice" className= "form-label">
                    purchasePrice
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the purchase Price'
                    name = "purchasePrice"
                    value = {purchasePrice}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "qtyOnHand" className= "form-label">
                    quantity
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the quantity'
                    name = "qtyOnHand"
                    value = {qtyOnHand}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "salePrice" className= "form-label">
                    salePrice
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the salePrice'
                    name = "salePrice"
                    value = {salePrice}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor = "commissionPercentage" className= "form-label">
                    commissionPercentage
                    </label>
                    <input
                    type = {"text"}
                    className='form-control'
                    placeholder='Enter the commissionPercentage'
                    name = "commissionPercentage"
                    value = {commissionPercentage}
                    onChange= {(e)=>onInputChange(e)}
                    />
                </div>
                <button type ="submit" className = "btn btn-outline-primary ">
                    Submit
                    </button>
                    <Link className = "btn btn-outline-danger mx-2 " to = "/product">
                    Cancel
                    </Link>
                    </form>
            </div>
        </div>

    </div>
  )
}
