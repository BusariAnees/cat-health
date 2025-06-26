import { useState, useEffect } from "react";

import Home from "./includes/home";
import ScrollToTop from "./components/scrollToTop";

import "./assets/css/overlay.css";
import "./assets/css/sections.css";
import "./assets/css/footer.css";

import Overlay from "./overlay";
import Header from "./includes/header";
import Modals from "./components/modals";

import Products from "./pages/products";
import Clinicals from "./pages/clinicals";
import Vets from "./pages/vets";
import Owner from "./pages/owner";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(false);


  const [showModal, setShowModal] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <>
      <div className={`overlay ${isActive ? "overlay--active" : ""}`}>
        <Overlay isActive={isActive} setIsActive={setIsActive} />
      </div>

      {/* Routes are always here */}
     
      <ScrollToTop /> 
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setShowModal={setShowModal}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Header isActive={isActive} setIsActive={setIsActive} />
              <Products />
            </>
          }
        />
        <Route path="/clinical" element={
        <>
        
         <Header isActive={isActive} setIsActive={setIsActive} />
         <Clinicals   setShowModal={setShowModal} />
        </>
        
       } />
        <Route path="/vets" element={
        <>
            <Header isActive={isActive} setIsActive={setIsActive} />
         <Vets  setShowModal={setShowModal}/>
        </>
        
      } />
        <Route path="/owner" element={<>
          <Header isActive={isActive} setIsActive={setIsActive} />
          <Owner setShowModal={setShowModal}/>
        </>} />
      </Routes>
 
   

      {/* modal components */}
      <Modals showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
