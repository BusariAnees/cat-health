export default function Overlay() {
  return (
    <>
      <div className="header-logo">Meown</div>
      <a href="">
        <article>About us</article>
        <ul>
          <li>Our team</li>
          <li>Press room</li>
          <li>Publications</li>
          <li>Our impact</li>
        </ul>
      </a>

      <a href="">
        <ul>
          <article>Products</article>

          <li>LOY-001</li>
          <li>LOY-002</li>
          <li>LOY-003</li>
          <li>Our guiding principles</li>
        </ul>
      </a>

      <a href="">
        <article>Clinical trials</article>
        <ul>
          <li>Stay study</li>
          <li>Qualifications</li>
          <li>Participatingclinical sites </li>
          <li>Q&A</li>
        </ul>
      </a>

      <a href="">
        <article>Clinical trials</article>
        <ul>
          <li>Stay study</li>
          <li>Qualifications</li>
          <li>Participatingclinical sites </li>
          <li>Q&A</li>
        </ul>
      </a>
      <a href="">
        <article>For vets</article>
        <ul>
          <li>Aging thesis</li>
          <li>Drugs in development</li>
          <li>Resources </li>
          <li>Continuing education </li>
          <li>Q&A</li>
        </ul>
      </a>

      <a href="">
        <article>For cat owners</article>
        <ul>
          <li>Effect of aging</li>
          <li>For senior cats</li>
          <li>For large and giant cats</li>
          <li>Resources </li>
          <li>Q&A</li>
        </ul>
      </a>

      <a href="">
        <article>Blog</article>
        <ul>
          <li>Learn more about aging health in cats</li>
        </ul>
      </a>
      <a href="">
        <article>Contact us</article>
        <ul>
          <li>General inquiry</li>
          <li>loyal veteinary team </li>
          <li>Press contact </li>
        </ul>
      </a>
      <div
              className={`hamburger ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <span></span>
              <span></span>
            </div>
    </>
  );
}
