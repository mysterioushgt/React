import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
 
    {/* <!-- Login --> */}
    <section id="login" className="my-5">
        <div className="container">
            <div className="row">
                {/* <!-- Column-1 --> */}
                <div className="col-lg-6">
                    <img className="w-100" src="./Images/CollegeStudentsImage-1.jpeg" alt="College Students Image-1"
                        height="100%"/>
                </div>
                {/* <!-- End Column-1 --> */}

                {/* <!-- Column-2 --> */}
                <div className="col-lg-6 bglogin p-4">
                    <form>
                        {/* <!-- logo --> */}
                        <center>
                            <img className="mb-4 rounded-circle" src="./Images/logo.jpeg" alt="logo" width="20%" height="20%"/>
                        </center>

                        {/* <!-- Heading (Login) --> */}
                        <h1 className="mb-5 text-center" style={{color:'blue',fontSize:'60px'}}>Login</h1>

                        {/* <!-- Email --> */}
                        <div className="row mb-3">
                            <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">Email</div>
                            <div className="col-lg-10">
                                <input className="form-control" type="email" placeholder="name@example.com" required/>
                            </div>
                        </div>

                        {/* <!-- Password --> */}
                        <div className="row mb-5">
                            <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">Password</div>
                            <div className="col-lg-10">
                                <input className="form-control" type="password" required/>
                            </div>
                        </div>

                        {/* <!-- Button (Login) --> */}
                        <center>
                            <button className="btn btn-primary mb-5 btn-lg">Login</button>
                        </center>
                        
                        {/* <!-- Register Now --> */}
                        <center>
                            <p className="text-uppercase fw-light">Don't have an account? &nbsp;<Link to="/register">Register Now</Link></p>
                        </center>
                    </form>
                </div>
                {/* <!-- End Column-2 --> */}
            </div>
        </div>
    </section>
    {/* <!-- End Login --> */}

    </>
  )
}

export default Login