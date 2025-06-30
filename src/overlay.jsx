import { NavLink } from "react-router-dom";

export default function Overlay(props) {
  return (
    <>
     <div className={`overlay-section-div ${props.isActive ? 'opacity-100' : 'opacity-0 invisible '} `}>
  <div className="header-logo overlay-logo">Meown</div>
  <div className="overlay-ul h-screen overflow-y-auto">
    <NavLink to="/" className="link-dsp" onClick={() => props.setIsActive(false)}>  
      <div className="div-dsp">
        <article className="article-dsp">
          <p className="p-dsp">About us</p>
          <ul className="ul-dsp">
            <li>Our team</li>
            <li>Press room</li>
            <li>Publications</li>
            <li>Our impact</li>
          </ul>
        </article>
      </div>
    </NavLink>
  

    <NavLink to="/products"  className="link-dsp" onClick={() => props.setIsActive(false)}>
      <div className="div-dsp">
        <article className="article-dsp">
          <p className="p-dsp">Products</p>
          <ul className="ul-dsp">
            <li>LOY-001</li>
            <li>LOY-002</li>
            <li>LOY-003</li>
            <li>Our guiding principles</li>
          </ul>
        </article>
      </div>
      </NavLink>

      <NavLink to="/clinical"  className="link-dsp" onClick={() => props.setIsActive(false)}>
      <div className="div-dsp">
        <article className="article-dsp">
          <p className="p-dsp">Clinical trials</p>
          <ul className="ul-dsp">
            <li>Stay study</li>
            <li>Qualifications</li>
            <li>Participating clinical sites</li>
            <li>Q&A</li>
          </ul>
        </article>
      </div>
      </NavLink>

      <NavLink to="/vets"  className="link-dsp" onClick={() => props.setIsActive(false)}>
      <div className="div-dsp">
        <article className="article-dsp">
          <p className="p-dsp">For vets</p>
          <ul className="ul-dsp">
            <li>Aging thesis</li>
            <li>Drugs in development</li>
            <li>Resources</li>
            <li>Continuing education</li>
            <li>Q&A</li>
          </ul>
        </article>
      </div>
      </NavLink>

      <NavLink to="/owner"  className="link-dsp" onClick={() => props.setIsActive(false)}>
      <div className="div-dsp">
        <article className="article-dsp">
          <p className="p-dsp">For cat owners</p>
          <ul className="ul-dsp">
            <li>Effect of aging</li>
            <li>For senior cats</li>
            <li>For large and giant cats</li>
            <li>Resources</li>
            <li>Q&A</li>
          </ul>
        </article>
      </div>
      </NavLink>

  

      <NavLink to="/products"  className="link-dsp" onClick={() => props.setIsActive(false)}>
      <div className="div-dsp">
        <article className="article-dsp">
          <p className="p-dsp">Contact us</p>
          <ul className="ul-dsp">
            <li>General inquiry</li>
            <li>Loyal veterinary team</li>
            <li>Press contact</li>
          </ul>
        </article>
      </div>
      </NavLink>
  </div>
</div>

    </>
  );
}
