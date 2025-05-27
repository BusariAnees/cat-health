export default function Overlay(props) {
  return (
    <>
      <div className="overlay-section-div">
        <div className="header-logo overlay-logo">Meown</div>
        <div className="overlay-ul">
          <a href="">
            <article className="article-dsp">About us</article>
            <ul className="ul-dsp">
              <li>Our team</li>
              <div className="line-dsp">/</div>
              <li>Press room</li>
              <div className="line-dsp">/</div>
              <li>Publications</li>
               <div className="line-dsp">/</div> <br />
              <li>Our impact</li>
            </ul>
          </a>

          <a href="">
            <article className="article-dsp">Products</article>
            <ul className="ul-dsp">
              <li>LOY-001</li>
              <div className="line-dsp">/</div>
              <li>LOY-002</li>
              <div className="line-dsp">/</div>
              <li>LOY-003</li>
              <div className="line-dsp">/</div> <br />
              <li>Our guiding principles</li>
            </ul>
          </a>

          <a href="">
            <article className="article-dsp">Clinical trials</article>
            <ul className="ul-dsp">
              <li>Stay study</li>
              <div className="line-dsp">/</div>
              <li>Qualifications</li>
              <div className="line-dsp">/</div>  <br />
              <li>Participatingclinical sites </li>
              <div className="line-dsp">/</div>
              <li>Q&A</li>
            </ul>
          </a>

          <a href="">
            <article className="article-dsp">Clinical trials</article>
            <ul className="ul-dsp">
              <li>Stay study</li>
              <div className="line-dsp">/</div>
              <li>Qualifications</li>
              <div className="line-dsp">/</div>  <br />
              <li>Participatingclinical sites </li>
              <div className="line-dsp">/</div>
              <li>Q&A</li>
            </ul>
          </a>
          <a href="">
            <article className="article-dsp">For vets</article>
            <ul className="ul-dsp">
              <li>Aging thesis</li>
              <div className="line-dsp">/</div>
              <li>Drugs in development</li>
              <div className="line-dsp">/</div>  <br />
              <li>Resources </li>
              <div className="line-dsp">/</div> <br />
              <li>Continuing education </li> 
              <div className="line-dsp">/</div> 
              <li>Q&A</li>
            </ul>
          </a>

          <a href="">
            <article className="article-dsp">For cat owners</article>
            <ul className="ul-dsp">
              <li>Effect of aging</li>
              <div className="line-dsp">/</div> 
              <li>For senior cats</li>
              <div className="line-dsp">/</div> <br />
              <li>For large and giant cats</li>
              <div className="line-dsp">/</div>
              <li>Resources </li>
              <div className="line-dsp">/</div> <br />
              <li>Q&A</li>
            </ul>
          </a>

          <a href="">
            <article className="article-dsp">Blog</article>
            <ul className="ul-dsp">
              <li>Learn more about aging health in cats</li>
            </ul>
          </a>
          <a href="">
            <article className="article-dsp">Contact us</article>
            <ul className="ul-dsp">
              <li>General inquiry</li>
              <div className="line-dsp">/</div>
              <li>loyal veteinary team </li>
              <div className="line-dsp">/</div>
              <li>Press contact </li>
            </ul>
          </a>
        </div>
        {/* <div
          className={`hamburger ${props.isActive ? "active" : ""}`}
          onClick={() => setIsActive(!props.isActive)}
        >
          <span></span>
          <span></span>
        </div> */}
      </div>
    </>
  );
}
