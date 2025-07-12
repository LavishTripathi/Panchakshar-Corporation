import "../css/footer.css"
import image from"../Images/mask-group@2x.png"
export default function Footer(){
    return(
            <div className="ending-info">
                        <div className="contact">
                        <div className="text-container">    
                                 <div className="paragraph-container-3">
                  <div className="text-wrapper-9">CONTACT US </div>
                  
                  <a href="https://wa.me/918115036481" target="_blank">
                  <div className="text-wrapper-11">+91-8115036481</div></a>
                  <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=Contact@panchakshar.com&amp;su=Hello&amp;body=I%20want%20to%20connect%20with%20you" target="_blank">
                <div className="text-wrapper-12">Contact@panchakshar.com</div></a>
                </div>
              <div className="text-container-3">
<p className="design-adit-tiwari">
  Design:
  <a href="https://www.linkedin.com/in/adittiwari/" target="_blank" className="linkedin-link">
    <i className="fab fa-linkedin"></i> Adit Tiwari
  </a><br />

  <span className="developer-line">
    Development:
    <a href="https://www.linkedin.com/in/lavish-tripathi-18b86927b/" target="_blank" className="linkedin-link">
      <i className="fab fa-linkedin"></i>   Lavish Tripathi
    </a>
  </span>
</p>
              </div>
              </div>
            </div>    
            <div className="navigation">
                  <div className="containert">
                <div className="paragraph-container-2">
                  <div className="text-wrapper-2">LOCATE US</div>
                  <div className="text-wrapper-6">
                    <a
                      href="https://www.google.com/maps/dir//A-90,+A+Block,+Block+A,+Sector+10,+Noida,+Uttar+Pradesh+201301/@28.588377,77.2467769,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cebe93b854bd7:0xecb22650094f104f!2m2!1d77.3291783!2d28.5884019?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
                      >Google Maps</a
                    >
                  </div>
                  <div className="text-wrapper-7">
                    <a
                      href="https://maps.apple.com/?ll=28.588468,77.329087&q=Dropped%20Pin&_ext=EiYpTH+bTH6VPEAx1vJfULxUU0A5SCrnBMuXPEBBCPYD7mNVU0BQBA%3D%3D&t=m"
                      >Apple Maps</a
                    >
                  </div>
                  <div className="text-wrapper-8">
                    <a href="https://maps.app.goo.gl/7va6YvjMBjUsYyXr9"
                      >Street View</a
                    >
                  </div>
                </div>
                <div className="comapanl">
                    <a
                      href="https://www.facebook.com/p/Panchakshar-Corporation-100071607792402/"
                      ><img
                        className="img-2"
                        src="https://c.animaapp.com/VFQnVRMH/img/container.svg"
                    /></a>
                 
                  
                    <a
                      href="https://www.linkedin.com/company/panchakshar-corporation/"
                      ><img
                        className="img-3"
                        src="https://c.animaapp.com/VFQnVRMH/img/slider.svg"
                    /></a>

                  <a href="https://www.indiamart.com/panchaksharcorporation/"
                    ><img
                      className="mask-group"
                      src={image}
                  /></a>

                </div>
                 </div>
      
            </div>
            <div className="information">
              <div className="text-container">            
                <div className="paragraph-container">
                  <div className="text-wrapper-2">INFORMATION</div>
                  <div className="text-wrapper-3"><a href="#about">About</a></div>
                  <a href="#product"><div className="text-wrapper-4">Product Ranges</div></a>
                  <a href="#customize"><div className="text-wrapper-5">Customization</div></a>
                </div>
                <div className="text-wrapper">All rights reserved 2025 - <br/> Panchakshar Corporation</div>

              </div>
            </div>
          </div>
    );
}