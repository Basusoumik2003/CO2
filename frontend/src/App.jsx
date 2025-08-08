import React from 'react';
import { useState, useEffect } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Home';
import UserDashboard from './userDashboard';
import OrgDashboard from '../../OrgDashboard/frontend/src/pages/OrgDashboard';
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
import AddAsset from '../../OrgDashboard/frontend/src/components/AddAsset';
import EcoVoyageGame from '../../Frontend/src/pages/EcoVoyage/EcoVoyageGame';
import Ecoshooter from '../../Frontend/src/pages/EcoShooter/Bubble';
import Memorygame from '../../Frontend/src/pages/MemoryGame/Memory';
import Activities from './activities';
import ActivityDetail from './activityDetail';
import Careers from './pages/Careers';
import CaseStudy from './pages/CaseStudy';

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  
const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

useEffect(() => {
  const handleStorageChange = () => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  };

  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, []);

  // Helper to decide when to hide Navbar
 const shouldHideNavbar = () => {
  const hideNavbarRoutes = ['/', '/userDashboard', '/orgDashboard'];
  return (
    hideNavbarRoutes.includes(location.pathname) ||
    location.pathname.startsWith('/games') ||
    !isAuthenticated
  );
};


  return (
    <>
      <ToastContainer />
      {!shouldHideNavbar() && <UserNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Games />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/orgDashboard" element={<OrgDashboard />} />
        <Route path="/upload" element={<Upload />} />
       <Route path="/blog" element={<Blog isAuthenticated={isAuthenticated} />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view-assets" element={<ViewAssets />} />
        <Route path="/add-asset" element={<AddAsset />} />
        <Route path="/community" element={<Community />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/games/eco-voyage" element={<EcoVoyageGame />} />
        <Route path="/games/eco-shooter" element={<Ecoshooter />} />
        <Route path="/games/memory" element={<Memorygame />} />
        <Route path="/activities" element={<Activities/>}/>
        <Route path="/activity/:activityKey" element={<ActivityDetail/>}/>
      </Routes>
    </>
  );
};

export default App;