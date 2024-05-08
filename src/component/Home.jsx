// write rfce
import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Home() {
  return (
    <>

    {/* Header */}
    <Header/>

    {/* <!-- carousel --> */}
    <section id="carousel">
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
           
            
            <div className="carousel-inner">
                {/* <!-- item-1 --> */}
                <div className="carousel-item active" data-bs-interval="4000">
                    <img className="carouselHeight" src="./Images/CampusImage-1.avif" alt="Campus Image-1"/>
                </div>

                {/* <!-- item-2 --> */}
                <div className="carousel-item" data-bs-interval="2000">
                    <img className="carouselHeight" src="./Images/CampusImage-2.avif" alt="Campus Image-2"/>
                </div>

                {/* <!-- item-3 --> */}
                <div className="carousel-item" data-bs-interval="2000">
                    <img className="carouselHeight" src="./Images/CampusImage-3.jpeg" alt="Campus Image-3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    {/* <!-- End Carousel --> */}

    {/* <!-- Courses --> */}
    <section id="courses">

        <section className="pt-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Welcome User</h1>
                    <p className="lead text-body-secondary">MAHARANA PRATAP COLLEGE OF TECHNOLOGY, GWALIOR</p>
                </div>
            </div>
        </section>

        {/* <!-- Detail --> */}
        <div className="container" id="detail">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col">
                    <div className="card card-cover h-100 p-5 overflow-hidden text-bg-white rounded-4 shadow-lg">
                        <p className="fw-light text-dark tmy-auto">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Iste, amet? Quam obcaecati dolore excepturi culpa est, sit dicta vitae
                            eligendi deserunt autem nemo placeat, iusto id ipsa ex ut expedita?</p>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 p-5 overflow-hidden text-bg-white rounded-4 shadow-lg">
                        <p className="fw-light text-dark my-auto">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Iste, amet? Quam obcaecati dolore excepturi culpa est, sit dicta vitae
                            eligendi deserunt autem nemo placeat, iusto id ipsa ex ut expedita?</p>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 p-5 overflow-hidden text-bg-white rounded-4 shadow-lg">
                        <p className="fw-light text-dark my-auto">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Iste, amet? Quam obcaecati dolore excepturi culpa est, sit dicta vitae
                            eligendi deserunt autem nemo placeat, iusto id ipsa ex ut expedita?</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Detail --> */}

        <div className="album py-5">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {/* <!-- card-1 --> */}
                    <div className="col">
                        <div className="card shadow-sm">
                            <img className="rounded w-100" src="./Images/Course-1.jpeg" alt="Course-1" height="200rem"/>
                            <div className="card-body text-center">
                                <h2>B.Tech</h2>
                                <p className="card-text">B.Tech is a professional undergraduate engineering degree</p>
                                <button type="button" className="btn text-light">Register</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card-2 --> */}
                    <div className="col">
                        <div className="card shadow-sm">
                            <img className="rounded w-100" src="./Images/Course-2.jpeg" alt="Course-2" height="200rem"/>
                            <div className="card-body text-center">
                                <h2>BCA</h2>
                                <p className="card-text">BCA is a three-year Bachelors Degree in Computer Application</p>
                                <button type="button" className="btn text-light">Register</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card-3 --> */}
                    <div className="col">
                        <div className="card shadow-sm">
                            <img className="rounded w-100" src="./Images/Course-3.jpeg" alt="Course-3" height="200rem"/>
                            <div className="card-body text-center">
                                <h2>MCA</h2>
                                <p className="card-text">MCA is a professional post-graduation degree in Computer
                                    Application</p>
                                <button type="button" className="btn text-light">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    {/* <!-- End Courses --> */}

    {/* Footer */}
    <Footer/>

    </>
  )
}

export default Home