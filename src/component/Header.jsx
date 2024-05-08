import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    
    {/* <!-- Navbar --> */}
    <section id="navbar" className="fixed-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler mobileViewButton" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="true"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse d-lg-flex collapse justify-content-between text-center"
                    id="navbarsExample11">
                    <Link className="navbar-brand col-lg-3 me-0 webViewPosition" to="#">
                        <img className="rounded-circle" src="./Images/logo.jpeg" alt="logo" width="50px" height="50px"/>
                    </Link>
                    <ul className="navbar-nav col-lg-6 justify-content-lg-end">
                        <li className="nav-item my-auto">
                            <Link className="nav-link active text-light" aria-current="page" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item my-auto">
                            <Link className="nav-link text-light" to="/about">ABOUT</Link>
                        </li>
                        <li className="nav-item my-auto">
                            <Link className="nav-link text-light" to="/contact">CONTACT</Link>
                        </li>
                        <li className="nav-item my-auto">
                            <Link className="nav-link text-light" to="#">USER NAME</Link>
                        </li>
                        <li className="nav-item dropdown my-auto">
                            <Link to="#"
                                className="nav-link d-block link-body-emphasis text-decoration-none dropdown-toggle text-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="40" height="40"
                                    className="rounded-circle"/>
                            </Link>
                            <ul className="dropdown-menu text-small">
                                <li><Link className="dropdown-item" to="#">New project...</Link></li>
                                <li><Link className="dropdown-item" to="#">Settings</Link></li>
                                <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><Link className="dropdown-item" to="#">Log out</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item my-auto">
                            <button className="btn btn-primary me-3 border-light">Log out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    {/* <!-- End Navbar --> */}
    
    </>
  )
}

export default Header