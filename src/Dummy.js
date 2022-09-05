import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { url } from './Api/api';


const Dummy = () => {
    const navigate=useNavigate()
    let formik=useFormik({
        initialValues:{
          name:"",
        },
        // onSubmit:async (values)=>{
        //   try{
        //     const login =await axios.post(`${url}/capstonetasks`,values);
        //    localStorage.setItem("react_app_token",login.data.token);
        //   }catch(error){
        //     console.log(error);
        //   }
        // }
        onSubmit :async (values)=>{
          try{
           const capstonetasks = await axios.post(`${url}/capstonetasks`,values,{
              headers:{
                "Authorization":`${localStorage.getItem}(react_app_token)`
              }
             })
             alert(capstonetasks.data.message)
             localStorage.setItem("react_app_token", capstonetasks.data.token);
            //  handleClickOpen()
          }catch(error){
            console.log(error);
          }
        }


      });

      

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="col-lg-12">
              <label>name</label>
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}

              />
            </div>
            <div className="col-lg-12 mt-2">
              <input
                type="submit"
                value="submit"
                className="btn btn-primary"
              />
            </div>
          </form>
      </div>
      </div>
      <p>Dont have account? Please <Link to={"/register"}>register</Link> </p>
      <p>dashboard <Link to={"/dashboard"}>dashboard</Link> </p>
    </div>
  )
}

export default Dummy