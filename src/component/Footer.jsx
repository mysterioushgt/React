import React from 'react'

function Footer() {
  return (
    <>
    
    {/* <!-- Footer --> */}
    <section id="footer">
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 p-5 mt-5 border-top justify-content-between">

                <div className="col mb-3">
                    <label className="text-light text-uppercase mb-4 fw-bold fs-5 p-2">Our Constituent Colleges</label>
                    
                    <ul className="nav flex-column p-2">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Institute of Engineering
                                and Technology, Gwalior</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Institute of Engineering
                                and Technology, Lucknow</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <label className="text-light text-uppercase mb-4 fw-bold fs-5 p-2">Useful Links</label>
                    <ul className="nav flex-column p-2">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About Us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Contact</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Log out</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <label className="text-light text-uppercase mb-4 fw-bold fs-5 p-2">Personal Detail</label>
                    <ul className="nav flex-column p-2">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i
                                    className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;hr@mpct.in</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i
                                    className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;9956082314</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;&nbsp;Gwalior, U.P.,India</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    </section>
    {/* <!-- End Footer --> */}

    {/* <!-- Social Media Link --> */}
    <section id="social">
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">

                <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                    <li className="ms-3 my-auto"><a className="text-white" href="#"><img src="./Images/fb-icon.png" alt="facebook icon" width="30px" height="30px"/></a></li>
                    <li className="ms-3 my-auto"><a className="text-white" href="#"><img src="./Images/yt-icon.jpeg" alt="youtube icon" width="40px" height="40px"/></a></li>
                    <li className="ms-3 my-auto"><a className="text-white" href="#"><img src="./Images/linkedin-icon.webp" alt="linkedin icon" width="30px" height="30px"/></a></li>
                    <li className="ms-3 my-auto"><a className="text-white" href="#"><img src="./Images/twitter-icon.png" alt="twitter icon" width="30px" height="30px"/></a></li>
                </ul>

            </footer>
        </div>
    </section>
    {/* <!-- End Social Media Link --> */}
    
    </>
  )
}

export default Footer