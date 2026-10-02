import "../css/overlap.css"
import imageback from "../Images/2nd last image.jpg"
import clogo from "../Images/company-logo.png"
export default function Overlap(){
    return(
<div class="overlap-3">
  <div class="BG">
    <img class="mediamodifier-2" src={imageback} alt="Background" />

    <div class="footer-address">
      <p class="a-sector-noida">
        <span class="span">B-99, 1st Floor. Sector-10, Noida-201301</span>
      </p>
    </div>

    <img class="company-logo" src={clogo} alt="Company Logo" />
  </div>
</div>
    );
}