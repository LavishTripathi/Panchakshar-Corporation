import "../css/idea.css"
import firstimg from "../Images/First.jpg"
import secondimg from "../Images/second.jpg"
import thirdimg from "../Images/Third.jpg"
export default function Idea(){
    return(
        <div className="any-every">
          <div className="overlap-22">
            <div className="overlap-23">
            <div className="firsti">
              <div className="title-txt">
                <div className="overlap-24">
                                    <div className="overlap-group-7">
                    <p className="div-2">
                      <span className="text-wrapper-33">Imagine </span>
                      <span className="text-wrapper-34">Anything <br /><div className="text-wrapper-35">&</div></span>
                    </p>
                  </div>
                  <div className="overlap-25">
                    <p className="div-2">
                      <span className="text-wrapper-33">Wear </span>
                      <span className="text-wrapper-34">Everything<br /></span>
                    </p>
                  </div>
                  

                </div>
                            <p className="header-txt-2">
              T-shirts | Lowers | Track-suits | Joggers | Cargo Pants | Hoodies
              | Sweatshirts | Jackets | Shorts | Polo T-shirts | Crop tops |
              Tanks | Jersey | Leggings | Sportswear | School Uniforms |
              Corporate T-shirts | Tactical Garments | Hospital aprons |
              Promotional wear
            </p>
              </div>
             
              <img
                className="fabric-closeup"
                src={firstimg}
              />
        </div>
            <div className="secondi">
              <><img
                className="tshirt-front"
                src={secondimg}
              /></>
              <img
                className="tshirt-back"uni
                src={thirdimg}
              /> 
            </div>
            </div>

          </div>
        </div>  
    );
}