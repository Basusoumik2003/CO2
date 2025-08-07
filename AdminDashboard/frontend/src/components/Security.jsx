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
  { name: "Individual Users", value: 65, color: "#10b981" },
  { name: "Organizations", value: 25, color: "#3b82f6" },
  { name: "Admins", value: 5, color: "#f59e0b" },
  { name: "Suspended", value: 5, color: "#ef4444" },
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
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12,847</div>
            <div className="flex items-center space-x-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              <span>+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Projects
            </CardTitle>
            <FileCheck className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">482</div>
            <div className="flex items-center space-x-1 text-xs text-blue-600">
              <TrendingUp className="h-3 w-3" />
              <span>+8.3% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Monthly Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$32,500</div>
            <div className="flex items-center space-x-1 text-xs text-yellow-600">
              <TrendingUp className="h-3 w-3" />
              <span>+15.2% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              CO₂ Reduced
            </CardTitle>
            <Activity className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">2,480</div>
            <div className="text-xs text-gray-600">tonnes this month</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
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
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Users"
                />
                <Line
                  type="monotone"
                  dataKey="projects"
                  stroke="#3b82f6"
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
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-600" />
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
                  stroke="#10b981"
                  fill="#10b981"
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
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
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
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-600" />
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
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <span>Recent Alerts</span>
              </div>
              <Badge variant="secondary">4 new</Badge>
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
            <Button variant="outline" size="sm" className="w-full mt-3">
              View All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      {/* REMOVED: Quick Actions and all elements below as per request */}
    </div>
  );
};

export default Overview;
