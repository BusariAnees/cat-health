import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

 
 function Header({isActive, setIsActive}){
    return (
        <>
        <div className="header-div">
           <header className="header">
             <Link to="/" className="header-logo">Meown</Link>
             <div className="header-nav-container">
               <nav className="header-nav">
               <NavLink to="/products">Products</NavLink>
            <NavLink to="/clinical">Clinical trials</NavLink>
            <NavLink to="/vets">For vets</NavLink>
            <NavLink to="/owner">For cat owners</NavLink>
            <NavLink to="/blog">Blog</NavLink>
               </nav>
             
             </div>
           </header>
             <div
                 className={`hamburger ${isActive ? "active" : ""}`}
                 onClick={() => setIsActive(!isActive)}
               >
                 <span></span>
                 <span></span>
               </div>
           </div>
       </>
    )

}


export default Header;