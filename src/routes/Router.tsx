// src/routes/Router.tsx
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import CarouselComponent from "../pages/CarouselComponent";
import About from "../pages/About";
import Detail from "../pages/Detail";
import DonationGrid from "../pages/DonationGrid";
import Volunteer from "../pages/Volunteer";
import AboutRoute from "../pages/AboutRoute";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <CarouselComponent />
            <About />
            <Detail />
            <DonationGrid />
            <Volunteer />
            <Footer />
          </>
        }
      />

      <Route
        path="/about-section"
        element={
          <>
            <Header />
            <AboutRoute />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
