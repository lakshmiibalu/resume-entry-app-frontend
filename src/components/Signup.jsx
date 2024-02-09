import React, { useState } from 'react'
import ResumeNav from './ResumeNav'
import axios from 'axios'

const Signup = () => {
    const [input,setInput] = useState(
        {
            "name":"",
            "age":"",
            "phnno":"",
            "email":"",
            "password":""
     }
    )
    const inputHandler = (event)=>{
        setInput(
            {...input,[event.target.name]:event.target.value}
        )
    }
    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3004/api/resume/signup",input).then(
            (response)=>{
                console.log(response.data)

                if (response.data.status == "success") {

                    alert("Signup successfull")
                    setInput({
                        "name":"",
                        "age":"",
                        "phnno":"",
                        "email":"",
                        "password":""
                 })
                    
                } else {
                    alert("Something went wrong")
                    
                }
            }
        )
    }
  return (
    <div>

        <ResumeNav/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" name="phnno" value={input.phnno} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Signup</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup