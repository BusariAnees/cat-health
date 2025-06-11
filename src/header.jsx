import "./assets/css/App.css";
 
 function Header({isActive, setIsActive}){
    return (
        <>
        <div className="header-div">
           <header className="header">
             <div className="header-logo">Meown</div>
             <div className="header-nav-container">
               <nav className="header-nav">
                 <a href="">Products</a>
                 <a href="">Clinical trials</a>
                 <a href="">For vets</a>
                 <a href="">For cat owners</a>
                 <a href="">Blog</a>
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