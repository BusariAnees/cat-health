import "./assets/css/overlay.css";
import "./assets/css/sections.css";
import "./assets/css/footer.css";

import { lazy, Suspense, useState, useEffect } from "react";

const Home = lazy(() => import("./includes/home"));
const ScrollToTop = lazy(() => import("./components/scrollToTop"));
const Overlay = lazy(() => import("./overlay"));
const Header = lazy(() => import("./includes/header"));
const Modals = lazy(() => import("./components/modals"));
const Products = lazy(() => import("./pages/products"));
const Clinicals = lazy(() => import("./pages/clinicals"));
const Vets = lazy(() => import("./pages/vets"));
const Owner = lazy(() => import("./pages/owner"));

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showModal);
  }, [showModal]);

  return (
    <Suspense>
      <div className={`overlay ${isActive ? "overlay--active" : ""}`}>
        <Overlay isActive={isActive} setIsActive={setIsActive} />
      </div>
      <ScrollToTop />

      <main>
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
                <div className="p-[1.6rem] m:px-[4.5rem]">
                  <Header isActive={isActive} setIsActive={setIsActive} />
                </div>
                <Products  setShowModal={setShowModal}/>
              </>
            }
          />
          <Route
            path="/clinical"
            element={
              <>
                <div className="p-[1.6rem] m:px-[4.5rem]">
                  <Header isActive={isActive} setIsActive={setIsActive} />
                </div>
                <Clinicals setShowModal={setShowModal} />
              </>
            }
          />
          <Route
            path="/vets"
            element={
              <>
                <div className="p-[1.6rem] m:px-[4.5rem]">
                  <Header isActive={isActive} setIsActive={setIsActive} />
                </div>
                <Vets setShowModal={setShowModal} />
              </>
            }
          />
          <Route
            path="/owner"
            element={
              <>
                <div className="p-[1.6rem] m:px-[4.5rem]">
                  <Header isActive={isActive} setIsActive={setIsActive} />
                </div>
                <Owner setShowModal={setShowModal} />
              </>
            }
          />
        </Routes>
      </main>

      <Modals showModal={showModal} setShowModal={setShowModal} />
    </Suspense>
  );
}

export default App;
