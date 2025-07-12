import logo from "../Images/name2.png"
import clogo from "../Images/company-logo.png"

import "../css/navbar.css"
export default function Navbar(){
  const setDisplay = () => {
    document.documentElement.style.setProperty('--displayprop','block')
  }
    const setDisplayOff = () => {
    document.documentElement.style.setProperty('--displayprop','none')
    }

    return(

      
        <div className="navbar">
            <div className="logo">
            <a href="#opening" className="spec"><img className="clogo" src={clogo} /></a>
            <a href="#opening"><img class="navlogo" src={logo}/></a>
            </div>
            <div className="page-shifts">
                <div className="closenav nav-link" onClick={()=>setDisplayOff()} >Close</div>
                <div className="nav-container">
                  <div className="nav-link"><a href="#opening">Home</a></div>
                  <div className="nav-link"><a href="#about">About Us</a></div>
                  <div className="nav-link"><a href="#product">Products</a></div>
                  <div className="nav-link"><a href="#customize">Customization</a></div>
                </div>  
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMK9wGGd-wZpTPtLTIH0F7gLuA4nYWCxAFqdhyNMRjZ6Nc5g/viewform?usp=sharing&ouid=111726376474671795411">
                  <div className="blue-box">
                    <img className="view" src="https://c.animaapp.com/VFQnVRMH/img/view.svg"/>
                    <div className="text-wrapper-50">Enquire Now</div>
                  </div></a>
            </div>
        <i class="bars fas fa-bars fa-2x" onClick={()=>setDisplay()}></i>
    </div>
            
    );
}