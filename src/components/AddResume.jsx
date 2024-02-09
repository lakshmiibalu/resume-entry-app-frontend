import React, { useState } from 'react'
import ResumeNav from './ResumeNav'
import axios from 'axios'

const AddResume = () => {

    const [input,setInput] = useState(
        {
            "name":"",
            "dob":"",
            "education":"",
            "skills":"",
            "project":" ",
            "extracurricular":""
     }
    )
    const inputHandler = (event)=>{
        setInput(
            {...input,[event.target.name]:event.target.value}
        )
    }
    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3004/api/upload/add",input).then(
            (response)=>{
                console.log(response.data)

                if (response.data.status == "success") {

                    alert("Resume added successfully")
                    setInput({
                        "name":"",
                        "dob":"",
                        "education":"",
                        "skills":"",
                        "project":" ",
                        "extracurricular":""
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

                            <label htmlFor="" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" name="dob" value={input.dob} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Education</label>
                            <input type="text" className="form-control" name="education" value={input.education} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Skills</label>
                            <input type="text" className="form-control" name="skills" value={input.skills} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Project</label>
                            <input type="text" className="form-control" name="project" value={input.project} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">ExtraCuricular</label>
                            <input type="text" className="form-control" name="extracurricular" value={input.extracurricular} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Add</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddResume