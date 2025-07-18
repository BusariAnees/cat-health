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
      className={`fixed inset-0 bg-white transition-opacity duration-300 ease-in-out z-[9999] ${
        isActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
      }`}
      onClick={(e) => e.stopPropagation()} // Prevent closing by clicking outside
    >
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 border-b relative z-50">
        <div className="text-2xl font-bold">Meown</div>

       
      </div>

      {/* Navigation with scrollable content */}
      <nav
        className="overlay-ul relative z-40 h-[calc(100vh-60px)] overflow-y-auto px-6 py-4"
        aria-label="Overlay Navigation"
      >
        {links.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.to}
            className="block mb-6"
            onClick={(e) => {
              e.stopPropagation(); // Prevent from bubbling to overlay
              setIsActive(false);
            }}
          >
            <p className="font-semibold text-lg mb-2">{link.title}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {link.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

