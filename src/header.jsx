import "./assets/css/App.css";
import { Link } from "react-router-dom";

 
 function Header({isActive, setIsActive}){
    return (
        <>
        <div className="header-div">
           <header className="header">
             <Link to="/" className="header-logo">Meown</Link>
             <div className="header-nav-container">
               <nav className="header-nav">
               <Link to="/products">Products</Link>
              <Link to="/clinical">Clinical trials</Link>
              <Link to="/vets">For vets</Link>
              <Link to="/owner">For cat owners</Link>
              <Link to="/blog">Blog</Link>
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