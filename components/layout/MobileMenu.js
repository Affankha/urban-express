'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><img src="assets/images/resources/logo-1.png" width="100%"
                                alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                           
                                <li className={isActive.key == 1 ? "" : ""}><Link href="/">Home</Link>
                                    
                                    {/* <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div> */}
                                </li>
                                <li className={isActive.key == 1 ? "" : ""}><Link href="/vision-and-mission/">Vision and Mission</Link>
                                   

                                    {/* <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div> */}
                                </li>

                                <li><Link href="/about-us/">About Us</Link></li>
                                <li><Link href="/sch_bus_off/">School Bus offers</Link></li>
                               
                                
                                <li><Link href="/cli_bus_off/">Client Bus offers</Link></li>
                               

                                <li className={isActive.key == 1 ? "" : ""}><Link href="/our-services/"> Our Services</Link>
                                   

                                    {/* <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div> */}
                                </li>

                                

                                    <li ><Link href="/our-team/">Our Team</Link>
                                       

                                       
                                    </li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:needhelp@packageName__.com">needhelpbondor@gmail.cpm<br></br>
                            </Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:+971 52 1124 424">+971 52 1124 424</Link>
                        </li>
                    </ul>
                    {/* <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link href="#" className="fab fa-twitter"></Link>
                            <Link href="#" className="fab fa-facebook-square"></Link>
                            <Link href="#" className="fab fa-pinterest-p"></Link>
                            <Link href="#" className="fab fa-instagram"></Link>
                        </div>
                    </div> */}
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
