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
      <li>Press room</li>
      <li>Publications</li>
      <li>Our impact</li>
    </ul>
  </a>

  <a href="">
    <article className="article-dsp">Products</article>
    <ul className="ul-dsp">
      <li>LOY-001</li>
      <li>LOY-002</li>
      <li>LOY-003</li>
      <li>Our guiding principles</li>
    </ul>
  </a>

  <a href="">
    <article className="article-dsp">Clinical trials</article>
    <ul className="ul-dsp">
      <li>Stay study</li>
      <li>Qualifications</li>
      <li>Participating clinical sites</li>
      <li>Q&A</li>
    </ul>
  </a>

  <a href="">
    <article className="article-dsp">For vets</article>
    <ul className="ul-dsp">
      <li>Aging thesis</li>
      <li>Drugs in development</li>
      <li>Resources</li>
      <li>Continuing education</li>
      <li>Q&A</li>
    </ul>
  </a>

  <a href="">
    <article className="article-dsp">For cat owners</article>
    <ul className="ul-dsp">
      <li>Effect of aging</li>
      <li>For senior cats</li>
      <li>For large and giant cats</li>
      <li>Resources</li>
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
      <li>Loyal veterinary team</li>
      <li>Press contact</li>
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
