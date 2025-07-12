import "../css/endingpics.css"
import image1 from "../Images/4.jpg"
import image2 from "../Images/3.jpg"
import image3 from "../Images/2.jpg"
import image4 from "../Images/1.jpg"


export default function Endingpics(){
    return(
        <div className="element-pics">
                      <div className="overlap-2">
              <img
                className="sincerely-media"
                src={image4}
              />
              <img
                className="img"
                src={image3}
              />
            </div>
            <div className="overlap-group">
              <img
                className="keagan-henman"
                src={image2}
              />
              <img
                className="img"
                src={image1}
              />
            </div>

          </div>
    );
}