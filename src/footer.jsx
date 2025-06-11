import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer (){
 return (
    <>
    <div className="footer-div">
        <div className="footer-ds">
        <p className="footer-p-1">Be the first to know</p>
<p className="footer-p-2">when we release more details on our products</p>
<button className="btn-connected ">
            <a className="btn-connected-a" href="">
              {" "}
              Stay connected
            </a>
            <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
          </button>
        </div>
<div className="footer-ground">
<p >© 2025 Cellular Longevity, Inc.</p>
          {/* <FontAwesomeIcon className="awesome-icon" icon={faXTwitter} /> */}
          <p>Privacy Policy</p>
</div>

    </div>
    </>
 )
}