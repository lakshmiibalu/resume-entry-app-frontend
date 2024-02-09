import React, { useEffect, useState } from 'react'
import ResumeNav from './ResumeNav'

import axios from 'axios'

const ViewResume = () => {
    const [data,setData] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:3004/api/upload/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>

        <ResumeNav/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex">

                                    <div class="card border-success mb-3" >
                                    <div class="card-header bg-transparent border-success">{value.name}</div>
                                    <div class="card-body text-success">
                                        
                                        <p class="card-text">Date of Birth : {value.dob}</p>
                                        <p class="card-text">Education : {value.education}</p>
                                        <p class="card-text">Skills : {value.skills}</p>
                                        <p class="card-text">Projects : {value.project}</p>
                                        <p class="card-text">ExtraCurricular : {value.extracurricular}</p>
                                    </div>
                                    <div class="card-footer bg-transparent border-success">Footer</div>
                                    </div>
            
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewResume

