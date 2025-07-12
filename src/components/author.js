import "../css/author.css"
import pic from "../Images/mask-group-2@2x.png"
import pict from "../Images/mask-group-3@2x.png"
import wlogo from "../Images/whatsapp-brands-solid.svg"

export default function Author(){
    return(
        <div className="hover-wrapper">
          <div className="hover-cont">
            <div class="durgesh-sir-photo">
                <div className="overlap-26">
                  <div className="mask-containerr">
                    <div className="ellipse-3"></div>
                    <img
                      className="mask-group-2"
                      src={pic}
                    />
                    <img
                      className="mask-group-3"
                      src={pict}
                    />
                  </div>
                </div>
            </div>
            <div className="text-control">
            <div className="author-name">    
            <div className="text-wrapper-38">Mr. Durgesh Kumar</div>
            <div className="text-wrapper-37">FOUNDER</div>
            </div>
            <div className="links">
                  <div className="facebook">
                    <a href="https://www.facebook.com/p/Panchakshar-Corporation-100071607792402/">
                      <img className="img-2" src="https://c.animaapp.com/VFQnVRMH/img/facebook.svg" /></a>
                  </div>
                  <div className="linkedin">
                    <a href="https://www.linkedin.com/in/durgesh-kumar-84477518/"><img
                      class="img-3"
                      src="https://c.animaapp.com/VFQnVRMH/img/linked-in.svg"
                    /></a>
                  </div>
                  <div className="Whatsapp">
                    <a  href="https://wa.me/917678625149" target="_blank"><img
                      className="img-4"
                      src={wlogo}
                      alt="logo"
                      />
                    </a></div>
            </div>
            <div className="contact-button">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Durgesh@panchakshar.in&su=Hello&body=I%20want%20to%20connect%20with%20you" target="_blank">
                    <div className="overlap-group-8">
                      <div className="text-wrapper-36">Contact</div>
                    </div>
                  </a>
            </div>
            </div>
          </div>
        </div>
    );
}