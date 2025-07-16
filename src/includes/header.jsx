import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

 
 function Header({isActive, setIsActive}){
    return (
        <>
        <div className="header-div">
           <header className="header">
             <Link to="/" className="header-logo">Meown</Link>
             
               <nav className="header-nav">
               <NavLink to="/products">Products</NavLink>
            <NavLink to="/clinical">Clinical &nbsp;trials</NavLink>
            <NavLink to="/vets">For&nbsp;vets</NavLink>
            <NavLink to="/owner">For&nbsp;cat&nbsp;owners</NavLink>
           
               </nav>
             
           
           </header>
           <div
                 className={`hamburger ${isActive ? "active" : ""}`}
                 onClick={(e) => {
                  e.preventDefault(); // prevents accidental navigation
                  e.stopPropagation(); // prevents bubbling
                   setIsActive(!isActive)}
                 }
               >
                 <span></span>
                 <span></span>
               </div>
          
           </div>
       </>
    )

}


export default Header;