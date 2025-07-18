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
      className={`overlay-section-div transition-opacity duration-300 ease-in-out  z-[9999]${
        isActive ? "opacity-100" : "opacity-0 invisible"
      }`}
    >
      {/* Top Header */}
<div className="flex items-start">
<div className="  overlay-logo  text-2xl font-bold">Meown</div>
</div>
      

     
  

      {/* Navigation */}
        <nav className="overlay-ul  z-40 h-[calc(100vh-60px)] overflow-y-auto mb-[4rem]" aria-label="Overlay Navigation">
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






// export default function Overlay({ isActive, setIsActive }) {
//   return (
//     <div
//       className={`overlay-section-div transition-opacity duration-300 ease-in-out  z-[9999]${
//         isActive ? "opacity-100" : "opacity-0 invisible"
//       }`}
//     >
//       <div className="header-logo overlay-logo text-2xl font-bold z-50">Meown</div>
//         <div
//                  className={`hamburger ${isActive ? "active" : ""}`}
//                  onClick={() => {
//                    setIsActive(!isActive)}
//                  }
//                >
//                  <span></span>
//                  <span></span>
//                </div>

// {/* <button
//                   onClick={() => setIsActive(false)}
//                   className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
//                 >
//                   <FontAwesomeIcon icon={faXmark} />
//                 </button> */}


//       <nav className="overlay-ul  z-40 h-[calc(100vh-60px)] overflow-y-auto" aria-label="Overlay Navigation">
//         {links.map((link, idx) => (
//           <NavLink
//             key={idx}
//             to={link.to}
//             className="link-dsp block"
//             onClick={() => setIsActive(false)}
//           >
//             <div className="div-dsp">
//               <article className="article-dsp">
//                 <p className="p-dsp font-semibold text-lg mb-2">{link.title}</p>
//                 <ul className="ul-dsp list-disc list-inside space-y-1">
//                   {link.items.map((item, itemIdx) => (
//                     <li key={itemIdx}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             </div>
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// }

