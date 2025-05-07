'use client'
import Link from "next/link"
export default function About() {
    
    return (
        <>

        {/*About One Start*/}
        <section className="about-one" >
            <h5 style={{position: "relative",
                fontSize:"20px",
                fontWeight:" 700",
         textTransform: "uppercase",
         letterSpacing:" 0.016em"}}  className="pb-5 pt-5 text-center text-bold ">About Us </h5>
            {/* <div className="about-one__shape-2 float-bob-x">
                <img src="assets/images/shapes/about-one-shape-2.png" alt=""/>
            </div>
            <div className="about-one__shape-3 float-bob-y">
                <img src="assets/images/shapes/about-one-shape-3.png" alt=""/>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-one__img-box">
                                <div className="about-one__img">
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-one__img-2">
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                {/* <div className="about-one__logo">
                                    <img src="assets/images/resources/about-one-logo.png" alt=""/>
                                </div> */}
                                {/* <div className="about-one__shape-1 float-bob-y">
                                    <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        
                        <div className="about-one__right"> 
                            {/* about-one__title */}
                            <h3 style={{fontWeight:"700"}} className="">Urban Express: <span style={{       fontWeight:" 400",}}>Redefining Transportation Excellence </span> </h3>
                            <p className="about-one__text">Urban Express is a premier provider of comprehensive transportation solutions, specializing in Bus Operations and Fleet Management. With a dedication to reliability, safety, and efficiency, we offer a diverse range of services tailored to meet the unique needs of our clients. </p>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        {/* <span className="icon-payment"></span> */}
                                    </div>
                                    <div  className="content">
                                    
                                        <h3 style={{fontWeight:"400"}} className="pb-3 p-lg-0" >Urban Express is specializing in :</h3>
                                         <p className="pb-1 p-lg-0 ">
                                        <span className="icon-right-arrow"></span > BUS OPERATIONS AND FLEET MANAGEMENT </p>
                                        <p  className="pb-1 p-lg-0"><span className="icon-right-arrow"></span > TRANSPORTATION SERVICE FOR CORPORATE STAFF</p> 
                                        <p  className="pb-1 p-lg-0"> <span className="icon-right-arrow"></span >  CHARTERED ROUTE SERVICES</p>
                                        <p  className="pb-1 p-lg-0"><span className="icon-right-arrow"></span >  SCHOOL BUS SERVICES</p>
                                    </div>
                                </li>
                                <li>
                                   
                                    
                                        
                                            <p>Our steadfast commitment to excellence
                                               has established us as a trusted partner
                                               for businesses, schools, and organizations
                                            seeking top-notch transportation solutions.</p>
                                
                                </li>
                            </ul>
                            <div className="about-one__btn-and-client-img">
                                <div className="about-one__btn-box">
                                    <Link href="about-us" className="thm-btn about-one__btn">About Us</Link>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End*/}
        </>
    )
}
