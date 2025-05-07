'use client'
import Link from "next/link"
import { GoGoal } from "react-icons/go";
import { SlSpeedometer } from "react-icons/sl";
import { HiLightBulb } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaHandsHoldingCircle } from "react-icons/fa6";
export default function Work() {
    
    return (
        <>

        {/*Work Steps One Start */}
        <section style={{marginBottom:"5%"}}  className="work-steps-one">
            <div className="work-steps-one__bg-shape"
                style={{ backgroundImage: 'url(assets/images/shapes/work-steps-one-bg-shape.png)' }} ></div>
            {/* <div className="work-steps-one__shape-5 float-bob-y">
                <img src="assets/images/shapes/work-steps-one-shape-4.png" alt=""/>
            </div> */}
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">the urbanexpress difference</span>
                    </div>
                   
                    <br></br>
                    <p>Consistently delivering excellent
Customer Service does not happen by
accident, it happens on purpose.</p>
                </div>
                <div className="work-steps-one__inner">
                   
                    <ul className="work-steps-one__list list-unstyled">
                        <li>
                            <div  className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                </div>
                               
                                <span  className="">< BsGraphUpArrow/></span>
                            </div>
                            <p   className="work-steps-one__text"><Link href="about">Progressive outlook</Link></p>
                            <br></br>
                           
                        
                            <div style={{ textAlign: "justify", paddingLeft: "5px" }}>
  {[
    "Constantly looking to develop and improve",
    "Looking to the future",
    "Building on past achievements",
    "Being prepared to change",
  ].map((text, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
      <span style={{ marginRight: "5px" }}>•</span>
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  ))}
  <br />
 
</div>

                        
                        </li>
                        <li >
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                    
                                </div>
                             
                                <span className=""><GoGoal/></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Commitment</Link></p>
                            <br></br>
                           
                            <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingLeft: "5px",
    listStyleType: "none",
    alignItems: "flex-start",
  }}
>
  <div style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
    <span>•</span>
    <p style={{ margin: 0 }}>Trying new ideas</p>
  </div>
  <div style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
    <span>•</span>
    <p style={{ margin: 0 }}>Effort to make ideas work</p>
  </div>
  <div style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
    <span>•</span>
    <p style={{ margin: 0 , textAlign:"left"}}>
      Improvement through an engaged workforce
    </p>
  </div>
  <div style={{ display: "flex", alignItems: "flex-start", gap:"5px" }}>
    <span >•</span>
    <p style={{ margin: 0 , textAlign:"left" , gap:"5px" }}>
        Making time for our Customers and colleagues
    </p>
  </div>
</div>

                        </li>
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                </div>
                               
                                <span className=""> <FaHandshakeSimple/></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Engaging with stakeholders</Link></p>
                            <br></br>
                            <div style={{textAlign:"justify",alignItems:"center", paddingLeft:" 5px"}}>
                            
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <span style={{ marginTop:"-10%", paddingTop:"0%"}}>•</span>
    <p>Giving customers our full attention and support</p>
  </div>
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <span>•</span>
    <p>An individual part to play</p>
  </div>
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <span>•</span>
    <p>Collaborative working</p>
  </div>
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <span>•</span>
    <p>Work with each other as a team</p>
  </div>
</div>

                            </div>
                        </li>
                    </ul>
                   
                </div>
                <br></br>
                <br></br>
                <div style={{paddingTop:"3%"}} className="work-steps-one__inner">
                   
                    <ul className="work-steps-one__list list-unstyled">
                        <li>
                            <div  className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                </div>
                              
                                <span className=""><FaHandsHoldingCircle/></span>
                            </div>
                            <p  className="work-steps-one__text"><Link href="about">Trust</Link></p>
                            <br></br>
                           
                            <div style={{ textAlign: "justify", paddingLeft: "5px" }}>
  {[
    "Being transparent",
    "Simplifying processes",
    "Avoid confusion, save time and costs",
    "Communicate, communicate, communicate",
  ].map((text, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
      <span style={{ marginRight: "8px" }}>•</span>
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  ))}
 <br></br>
</div>

                        </li>
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                </div>
                                
                                <span className=""><SlSpeedometer /></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Role model performance</Link></p>
                            <br></br>
                           
                           
                            <div style={{ textAlign: "justify", paddingLeft: "5px" }}>
  {[
    "We want our business to be admired",
    "We want everyone to be inspired to be ‘like us’",
    "We want to be the best in everything we do",
    "Achieved by our own performance",
  ].map((text, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
      <span style={{ marginRight: "8px", }}>•</span>
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  ))}
</div>

                        </li>
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                </div>
                              
                                <span className="">< HiLightBulb/></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Innovation</Link></p>
                            <br></br>
                            
                            <div style={{ textAlign: "justify", paddingLeft: "5px" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
    <span style={{ marginRight: "8px" }}>•</span>
    <p style={{ margin: 0 }}>Growth mindset</p>
  </div>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
    <span style={{ marginRight: "8px" }}>•</span>
    <p style={{ margin: 0 }}>Sharing ideas</p>
  </div>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
    <span style={{ marginRight: "8px" }}>•</span>
    <p style={{ margin: 0 }}>Challenging the status quo</p>
  </div>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
    <span style={{ marginRight: "8px", marginTop:"-10%" }}>•</span>
    <p style={{ margin: 0 }}>
      Leveraging technology to improve the customer experience.
    </p>
  </div>
</div>

                        </li>
                    </ul>
                   
                </div>
            </div>
        </section>
        {/*Work Steps One End */}
        </>
    )
}
