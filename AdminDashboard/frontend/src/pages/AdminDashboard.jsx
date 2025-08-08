import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { cn } from "../lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/basic-ui";
import {
  Shield,
  Users,
  FileCheck,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  HeadphonesIcon,
  Settings,
  Lock,
  AlertTriangle,
  Activity,
  TrendingUp,
} from "lucide-react";

// Import admin dashboard components
import Overview from "../components/Overview";
import AdminUsers from "../components/AdminUsers";
import Assets from "../components/Assets";
import Marketplace from "../components/Marketplace";
import Community from "../components/Community";
import Analytics from "../components/Analytics";
import Support from "../components/Support";
import Configuration from "../components/Configuration";
import Security from "../components/Security";
import GoCarbonLogo from "../../public/GoCarbonPositive_Logo.png";
import { useMemo } from "react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  const [pendingCount, setPendingCount] = useState(0);

 useEffect(() => {
  fetch("http://localhost:5000/api/assets/pending-count")  // <-- add port 5000
    .then((res) => res.json())
    .then((data) => {
      console.log("Pending count from backend:", data.count);
      setPendingCount(data.count);
    })
    .catch((err) => console.error(err));
}, []);



  const tabs = useMemo(() => [
    {
      id: "overview",
      label: "Overview",
      icon: Activity,
      component: Overview,
      badge: null,
      path: "/admin/overview",
    },
    {
      id: "users",
      label: "Users",
      icon: Users,
      component: AdminUsers,
      badge: "12", // Pending approvals
      path: "/admin/users",
    },
    {
      id: "assets",
      label: "Assets",
      icon: FileCheck,
      component: Assets,
     badge: String(pendingCount), // ensures it's always a string
  // Pending verification
      path: "/admin/assets",
    },
    {
      id: "marketplace",
      label: "Marketplace",
      icon: ShoppingCart,
      component: Marketplace,
      badge: "3", // Active disputes
      path: "/admin/marketplace",
    },
    {
      id: "community",
      label: "Community",
      icon: MessageSquare,
      component: Community,
      badge: "5", // Flagged content
      path: "/admin/community",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      component: Analytics,
      badge: null,
      path: "/admin/analytics",
    },
    {
      id: "support",
      label: "Support",
      icon: HeadphonesIcon,
      component: Support,
      badge: "7", // Open tickets
      path: "/admin/support",
    },
    {
      id: "configuration",
      label: "Configuration",
      icon: Settings,
      component: Configuration,
      badge: null,
      path: "/admin/configuration",
    },
    {
      id: "security",
      label: "Security",
      icon: Lock,
      component: Security,
      badge: "2", // Security alerts
      path: "/admin/security",
    },
  ], [pendingCount]);

  // Update active tab based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const currentTab = tabs.find(tab => currentPath.includes(tab.id));
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const tab = tabs.find(t => t.id === tabId);
    if (tab) {
      navigate(tab.path);
    }
  };

  // Redirect to overview if no specific route
  useEffect(() => {
    if (location.pathname === "/admin" || location.pathname === "/admin/") {
      navigate("/admin/overview");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                  src={GoCarbonLogo}
                  alt="GoCarbonPositive Logo"
                  className="h-16 w-16 object-contain"
                />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-base text-gray-600">
                  Platform management and control center
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge
                variant="secondary"
                className="bg-emerald-100 text-emerald-800 border-emerald-200 text-sm font-semibold"
              >
                <Activity className="h-4 w-4 mr-1" />
                System Online
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {/* Tab Navigation */}
          <div className="nav-tabs mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              // Assign a color class based on tab id
              let iconColor = '';
              switch (tab.id) {
                case 'overview': iconColor = 'text-emerald-500'; break;
                case 'users': iconColor = 'text-blue-500'; break;
                case 'assets': iconColor = 'text-indigo-500'; break;
                case 'marketplace': iconColor = 'text-orange-500'; break;
                case 'community': iconColor = 'text-pink-500'; break;
                case 'analytics': iconColor = 'text-cyan-500'; break;
                case 'support': iconColor = 'text-yellow-500'; break;
                case 'configuration': iconColor = 'text-gray-500'; break;
                case 'security': iconColor = 'text-red-500'; break;
                default: iconColor = 'text-gray-400';
              }
              return (
                <div
                  key={tab.id}
                  className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <Icon className={`nav-tab-icon ${iconColor}`} />
                  <span className="nav-tab-label">{tab.label}</span>
                  {tab.badge && (
                    <span className="nav-tab-badge">{String(tab.badge)}</span>

                  )}
                </div>
              );
            })}
          </div>
          {/* Route Content */}
          <div className="mt-0">
            <Routes>
              {tabs.map((tab) => (
                <Route
                  key={tab.id}
                  path={tab.id}
                  element={<tab.component />}
                />
              ))}
              <Route path="*" element={<Navigate to="overview" replace />} />
            </Routes>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
