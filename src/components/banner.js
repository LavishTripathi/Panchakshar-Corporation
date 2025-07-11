import "../css/banner.css"
import logo from "../Images/name.png"
export default function Banner(){
    return(
     
        <div id="opening" className="opening-page">
              <div className="read-more">
                <a href="https://drive.google.com/file/d/1O_h4k6klQ4U9jjyOBuVxV-iuzIEjJNmv/view?usp=sharing"><div className="overlap-group-10">
                  <div className="text-wrapper-45">Read more</div>
                </div></a>
              </div>
              <img
                className="name"
                src={logo}
              />
          
        </div>
      
    );
}