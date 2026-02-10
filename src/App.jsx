import { BrowserRouter as Router, Route, Routes, useLocation, useRoutes } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layouts/Layout"
import Index from "./pages/Index"
import FungiGro from "./pages/FungiGro"
import MushroomFarming from "./pages/MushroomFarming"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Notfound from "./pages/Notfound"
import React from 'react'
import { HelmetProvider } from "react-helmet-async";
import Briqquettes from "./pages/Briqquettes";

export default function App() {
  
  const element = useRoutes([
    {
      path: "/",
      element: <Index />
    },
    {
      path: "/products/fungigro",
      element: (
        <FungiGro />
      )
    },
    {
      path: "/products/mushroom",
      element: (
        <MushroomFarming />
      )
    },
    {
      path: "/about-leadfut",
      element: (
        <About />
      )
    },
    {
      path: "/contactus",
      element: (
        <Contact />
      )
    },
    {
      path: "/blog",
      element: (
        <Blog />
      )
    },
    {
      path: "/products/biomass",
      element: (
        <Briqquettes />
      )
    },
    {
      path: "*",
      element: (
        <Notfound />
      )
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <HelmetProvider>
      <Layout>
        <AnimatePresence mode="wait">    
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </Layout>
    </HelmetProvider>
  );
}