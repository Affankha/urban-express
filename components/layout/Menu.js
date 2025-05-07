import Link from "next/link"

export default function Menu() {

    return (
        <>
       
            <ul className="main-menu__list">
                <li className="">
                    <Link href="/">Home </Link>
                   
                </li>
                <li className="">
                    <Link href="/vision-and-mission/">Vision  and Mission</Link>
                  
                </li>
                <li className="">
                    <Link href="/about-us/">About Us</Link>
                   
                </li>
                <li className="">
                    <Link href="/sch_bus_off/">School Bus Offers</Link>
                   
                </li>
                <li className="">
                    <Link href="/cli_bus_off/">Client Bus Offers</Link>
                   
                </li>
                <li className="">
                    <Link href="/our-services/">Our Services</Link>
                    
                </li>
                
                <li className="">
                    <Link href="/our-team/">Our Team</Link>
                    
                </li>
                
                <li>
                    <Link href="/contact/">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}
