import React from "react";
import { cn } from "../lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
  Progress,
} from "./basic-ui";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  FileCheck,
  DollarSign,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Zap,
  Globe,
  Shield,
  Eye,
} from "lucide-react";

// Mock data for charts
const platformStatsData = [
  { month: "Jan", users: 1200, projects: 45, revenue: 15000 },
  { month: "Feb", users: 1450, projects: 52, revenue: 18500 },
  { month: "Mar", users: 1680, projects: 61, revenue: 22000 },
  { month: "Apr", users: 1890, projects: 68, revenue: 25500 },
  { month: "May", users: 2150, projects: 75, revenue: 29000 },
  { month: "Jun", users: 2380, projects: 82, revenue: 32500 },
];

const co2ReductionData = [
  { month: "Jan", reduction: 1250 },
  { month: "Feb", reduction: 1480 },
  { month: "Mar", reduction: 1720 },
  { month: "Apr", reduction: 1950 },
  { month: "May", reduction: 2200 },
  { month: "Jun", reduction: 2480 },
];

const userDistribution = [
  { name: "Individual Users", value: 65, color: "#86efac" },
  { name: "Organizations", value: 25, color: "#93c5fd" },
  { name: "Admins", value: 5, color: "#fbbf24" },
  { name: "Suspended", value: 5, color: "#fca5a5" },
];

const recentAlerts = [
  {
    id: 1,
    type: "warning",
    message: "High API usage detected from Organization ABC Corp",
    time: "2 minutes ago",
    severity: "medium",
  },
  {
    id: 2,
    type: "error",
    message: "Failed verification attempt for Project XYZ-789",
    time: "15 minutes ago",
    severity: "high",
  },
  {
    id: 3,
    type: "info",
    message: "New marketplace listing requires review",
    time: "1 hour ago",
    severity: "low",
  },
  {
    id: 4,
    type: "success",
    message: "System backup completed successfully",
    time: "2 hours ago",
    severity: "low",
  },
];

const systemMetrics = [
  { name: "Server Uptime", value: 99.9, unit: "%", trend: "up" },
  { name: "API Response Time", value: 245, unit: "ms", trend: "down" },
  { name: "Database Load", value: 65, unit: "%", trend: "up" },
  { name: "Active Sessions", value: 1847, unit: "", trend: "up" },
];

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold text-gray-700">
              Total Users
            </CardTitle>
            <Users className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">12,847</div>
            <div className="flex items-center space-x-1 text-sm text-green-600 font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold text-gray-700">
              Active Projects
            </CardTitle>
            <FileCheck className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">482</div>
            <div className="flex items-center space-x-1 text-sm text-blue-600 font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>+8.3% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold text-gray-700">
              Monthly Revenue
            </CardTitle>
            <DollarSign className="h-6 w-6 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">$32,500</div>
            <div className="flex items-center space-x-1 text-sm text-yellow-600 font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>+15.2% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold text-gray-700">
              CO₂ Reduced
            </CardTitle>
            <Activity className="h-6 w-6 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">2,480</div>
            <div className="text-sm text-gray-600 font-medium">tonnes this month</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-bold">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <span>Platform Growth</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={platformStatsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#86efac"
                  strokeWidth={2}
                  name="Users"
                />
                <Line
                  type="monotone"
                  dataKey="projects"
                  stroke="#93c5fd"
                  strokeWidth={2}
                  name="Projects"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* CO₂ Reduction Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-bold">
              <Activity className="h-6 w-6 text-green-600" />
              <span>CO₂ Reduction Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={co2ReductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="reduction"
                  stroke="#86efac"
                  fill="#86efac"
                  fillOpacity={0.2}
                  name="CO₂ Reduced (tonnes)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* System Status & Alerts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-bold">
              <Users className="h-6 w-6 text-blue-600" />
              <span>User Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={userDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {userDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {userDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg font-bold">
              <Activity className="h-6 w-6 text-green-600" />
              <span>System Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{metric.name}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">
                      {metric.value}
                      {metric.unit}
                    </span>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                  </div>
                </div>
                <Progress
                  value={
                    metric.name === "Active Sessions"
                      ? (metric.value / 2000) * 100
                      : metric.value
                  }
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg font-bold">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <span>Recent Alerts</span>
              </div>
              <Badge variant="secondary" className="text-sm font-semibold">4 new</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className={cn(
                  "p-3 rounded-lg border-l-4",
                  alert.severity === "high"
                    ? "border-red-500 bg-red-50"
                    : alert.severity === "medium"
                      ? "border-yellow-500 bg-yellow-50"
                      : alert.severity === "low"
                        ? "border-blue-500 bg-blue-50"
                        : "border-green-500 bg-green-50",
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                  <div className="ml-2">
                    {alert.type === "error" ? (
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    ) : alert.type === "warning" ? (
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    ) : alert.type === "success" ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-3 text-sm font-semibold">
              View All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-lg font-bold">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="quick-actions-grid">
            <Button variant="outline" size="sm" className="quick-action-btn">
              <Users className="h-6 w-6 text-blue-500 mb-2" />
              <span className="text-sm font-semibold">Add User</span>
            </Button>
            <Button variant="outline" size="sm" className="quick-action-btn">
              <FileCheck className="h-6 w-6 text-indigo-500 mb-2" />
              <span className="text-sm font-semibold">Verify Asset</span>
            </Button>
            <Button variant="outline" size="sm" className="quick-action-btn">
              <Shield className="h-6 w-6 text-green-500 mb-2" />
              <span className="text-sm font-semibold">Security Scan</span>
            </Button>
            <Button variant="outline" size="sm" className="quick-action-btn">
              <Globe className="h-6 w-6 text-cyan-500 mb-2" />
              <span className="text-sm font-semibold">System Status</span>
            </Button>
            <Button variant="outline" size="sm" className="quick-action-btn">
              <DollarSign className="h-6 w-6 text-yellow-500 mb-2" />
              <span className="text-sm font-semibold">Mint Tokens</span>
            </Button>
            <Button variant="outline" size="sm" className="quick-action-btn">
              <Activity className="h-6 w-6 text-emerald-500 mb-2" />
              <span className="text-sm font-semibold">View Logs</span>
            </Button>
            <Button variant="outline" size="sm" className="quick-action-btn">
              <AlertTriangle className="h-6 w-6 text-red-500 mb-2" />
              <span className="text-sm font-semibold">Send Alert</span>
            </Button>
            <Button variant="outline" size="sm" className="quick-action-btn">
              <Clock className="h-6 w-6 text-gray-500 mb-2" />
              <span className="text-sm font-semibold">Schedule Task</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
