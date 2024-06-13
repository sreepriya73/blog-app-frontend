import React, { useState } from 'react'
import NavBar from './NavBar'

const Signup = () => {
    const [data,setData]=useState({
        "name":"",
        "emailid":"",
        "password":""
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(response.data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>SIGN UP</b></h1></center>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" name='' value={data.} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">EMAIL</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">PASSWORD</label>
                <input type="password" name="" id="" className="form-control" /><br />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-success">REGISTER</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup