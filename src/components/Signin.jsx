import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Signin = () => {
    const [data,setData]=useState(
        {
            "emailid":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>SIGN IN</b></h1></center>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">PASSWORD</label>
                <input type="password" id="" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-secondary" onClick={readValue}>Sign In</button></center>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <center> <a href="/signup">New User ?</a></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin