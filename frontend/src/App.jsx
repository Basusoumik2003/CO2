import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from './Home';
import UserDashboard from './userDashboard';
//import OrgDashboard from '../../OrgDashboard/frontend/src/pages/OrgDashboard'
import Upload from './upload';
import Blog from './blog';
import Engage from './engage';
import Wallet from './wallet';
import Profile from './profile';
import Games from './game';
import About from './about';
import Community from './community';
import UserNavbar from './userNavbar';
import ViewAssets from "./ViewAssets";
import Contact from './contact';
//import AddAsset from '../../OrgDashboard/frontend/src/components/AddAsset';
import EcoVoyageGame from './pages/EcoVoyage/EcoVoyageGame';
import Ecoshooter from './pages/EcoShooter/Bubble';
import Memorygame from './pages/MemoryGame/Memory';
import Activities from './activities';
import ActivityDetail from './activityDetail';
import Careers from './pages/Careers';

import CaseStudy from './pages/CaseStudy';

const App = () => {
  const location = useLocation();

  // Initial auth state based on token in localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  // Listen for storage events (e.g. login/logout in other tabs)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Update auth state immediately after login/signup
  const handleAuthChange = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }
  };

  // This useEffect forces re-check of auth on every route change, ensuring navbar updates immediately
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, [location.pathname]);

  // Decide when to hide Navbar
  const shouldHideNavbar = () => {
    const hideNavbarRoutes = ['/', '/userDashboard', '/orgDashboard'];

    // Always show navbar on these pages even if authenticated
    const alwaysShowNavbarRoutes = ['/blog', '/engage', '/community', '/careers', '/case-studies', '/contact', '/about'];

    if (!isAuthenticated) return true;  // Hide navbar if not logged in

    if (hideNavbarRoutes.includes(location.pathname)) return true; // hide on these

    if (location.pathname.startsWith('/games')) return true;  // hide on /games*

    if (alwaysShowNavbarRoutes.includes(location.pathname)) return false; // explicitly show navbar

    return false; // default: show navbar
  };

  return (
    <>
      <ToastContainer />
      {!shouldHideNavbar() && <UserNavbar onAuthChange={handleAuthChange} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Games />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
{/*         <Route path="/orgDashboard" element={<OrgDashboard />} /> */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/blog" element={<Blog isAuthenticated={isAuthenticated} />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view-assets" element={<ViewAssets />} />
{/*         <Route path="/add-asset" element={<AddAsset />} /> */}
        <Route path="/community" element={<Community />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/games/eco-voyage" element={<EcoVoyageGame />} />
        <Route path="/games/eco-shooter" element={<Ecoshooter />} />
        <Route path="/games/memory" element={<Memorygame />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activity/:activityKey" element={<ActivityDetail />} />
      </Routes>
    </>
  );
};

export default App;
