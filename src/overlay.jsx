import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    to: "/",
    title: "About us",
    items: ["Our team", "Press room", "Publications", "Our impact"]
  },
  {
    to: "/products",
    title: "Products",
    items: ["LOY-001", "LOY-002", "LOY-003", "Our guiding principles"]
  },
  {
    to: "/clinical",
    title: "Clinical trials",
    items: ["Stay study", "Qualifications", "Participating clinical sites", "Q&A"]
  },
  {
    to: "/vets",
    title: "For vets",
    items: ["Aging thesis", "Drugs in development", "Resources", "Continuing education", "Q&A"]
  },
  {
    to: "/owner",
    title: "For cat owners",
    items: ["Effect of aging", "For senior cats", "For large and giant cats", "Resources", "Q&A"]
  },
  {
    to: "/products",
    title: "Contact us",
    items: ["General inquiry", "Loyal veterinary team", "Press contact"]
  }
];

export default function Overlay({ isActive, setIsActive }) {
  return (
    <div
      className={`overlay-section-div transition-opacity duration-300 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0 invisible"
      }`}
    >
      <div className="header-logo overlay-logo text-2xl font-bold ">Meown</div>
       



      <nav className="overlay-ul  h-[calc(100vh-60px)] overflow-y-auto" aria-label="Overlay Navigation">
        {links.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.to}
            className="link-dsp block"
            onClick={() => setIsActive(false)}
          >
            <div className="div-dsp">
              <article className="article-dsp">
                <p className="p-dsp font-semibold text-lg mb-2">{link.title}</p>
                <ul className="ul-dsp list-disc list-inside space-y-1">
                  {link.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

