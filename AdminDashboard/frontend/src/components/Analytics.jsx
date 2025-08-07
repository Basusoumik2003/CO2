import React, { useState } from "react";
import { cn } from "../lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  ComposedChart,
} from "recharts";
import {
  BarChart3,
  Download,
  Filter,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Globe,
  Calendar,
  FileText,
  Target,
} from "lucide-react";

// Mock analytics data
const platformGrowthData = [
  { month: "Jan", users: 1200, projects: 45, revenue: 15000, co2Reduced: 850 },
  { month: "Feb", users: 1450, projects: 52, revenue: 18500, co2Reduced: 1020 },
  { month: "Mar", users: 1680, projects: 61, revenue: 22000, co2Reduced: 1250 },
  { month: "Apr", users: 1890, projects: 68, revenue: 25500, co2Reduced: 1480 },
  { month: "May", users: 2150, projects: 75, revenue: 29000, co2Reduced: 1720 },
  { month: "Jun", users: 2380, projects: 82, revenue: 32500, co2Reduced: 1950 },
];

const assetTypeDistribution = [
  { name: "Electric Vehicles", value: 35, color: "#93c5fd" },
  { name: "Trees", value: 28, color: "#86efac" },
  { name: "Solar", value: 18, color: "#fbbf24" },
  { name: "Wind", value: 12, color: "#67e8f9" },
  { name: "Others", value: 7, color: "#c4b5fd" },
];

const regionalData = [
  { region: "North America", users: 8500, revenue: 125000, projects: 245 },
  { region: "Europe", users: 6200, revenue: 89000, projects: 185 },
  { region: "Asia Pacific", users: 4800, revenue: 67000, projects: 142 },
  { region: "Latin America", users: 2100, revenue: 28000, projects: 68 },
  { region: "Africa", users: 1800, revenue: 23000, projects: 52 },
  { region: "Middle East", users: 1200, revenue: 18000, projects: 35 },
];

const marketplaceActivity = [
  { day: "Mon", listings: 25, transactions: 18, volume: 45000 },
  { day: "Tue", listings: 32, transactions: 24, volume: 58000 },
  { day: "Wed", listings: 28, transactions: 21, volume: 52000 },
  { day: "Thu", listings: 35, transactions: 29, volume: 67000 },
  { day: "Fri", listings: 42, transactions: 35, volume: 78000 },
  { day: "Sat", listings: 18, transactions: 15, volume: 35000 },
  { day: "Sun", listings: 22, transactions: 19, volume: 42000 },
];

const topPerformers = [
  {
    name: "GreenTech Solutions",
    type: "Organization",
    credits: 12500,
    revenue: 315000,
  },
  { name: "EcoFarm Ltd", type: "Organization", credits: 8900, revenue: 223000 },
  {
    name: "Solar Innovations",
    type: "Organization",
    credits: 7200,
    revenue: 180000,
  },
  {
    name: "Clean Energy Co",
    type: "Organization",
    credits: 6800,
    revenue: 170000,
  },
  {
    name: "TreePlanting Inc",
    type: "Organization",
    credits: 5500,
    revenue: 137500,
  },
];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("6months");
  const [reportType, setReportType] = useState("platform");

  const exportData = (format) => {
    // TODO: Implement data export functionality
    console.log(`Exporting data in ${format} format`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h2>
          <p className="text-gray-600">
            Comprehensive platform analytics and insights
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={() => exportData("csv")}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="outline" size="sm" onClick={() => exportData("pdf")}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total CO₂ Reduced
            </CardTitle>
            <Activity className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">125,847</div>
            <p className="text-xs text-blue-600">
              tonnes equivalent to 2.5M trees
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Platform Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$2.4M</div>
            <p className="text-xs text-green-600">+23.5% vs last period</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Users
            </CardTitle>
            <Users className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12,847</div>
            <p className="text-xs text-yellow-600">+12.8% user growth</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Global Projects
            </CardTitle>
            <Globe className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <p className="text-xs text-purple-600">across 45 countries</p>
          </CardContent>
        </Card>
      </div>

      {/* Platform Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span>Platform Growth Analytics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={platformGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="users" fill="#93c5fd" name="Users" />
              <Bar
                yAxisId="left"
                dataKey="projects"
                fill="#86efac"
                name="Projects"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                stroke="#fbbf24"
                strokeWidth={3}
                name="Revenue ($)"
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="co2Reduced"
                fill="#c4b5fd"
                fillOpacity={0.2}
                stroke="#c4b5fd"
                name="CO₂ Reduced (tonnes)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span>Asset Type Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={assetTypeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {assetTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regional Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-green-600" />
              <span>Regional Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionalData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="region" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="users" fill="#93c5fd" name="Users" />
                <Bar dataKey="projects" fill="#86efac" name="Projects" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Marketplace Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-purple-600" />
            <span>Weekly Marketplace Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={marketplaceActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="listings"
                fill="#93c5fd"
                name="New Listings"
              />
              <Bar
                yAxisId="left"
                dataKey="transactions"
                fill="#86efac"
                name="Transactions"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="volume"
                stroke="#fbbf24"
                strokeWidth={3}
                name="Volume ($)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Performers Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-yellow-600" />
            <span>Top Performing Organizations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Rank</th>
                  <th className="text-left py-3 px-4">Organization</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Credits Generated</th>
                  <th className="text-left py-3 px-4">Revenue Generated</th>
                  <th className="text-left py-3 px-4">Performance</th>
                </tr>
              </thead>
              <tbody>
                {topPerformers.map((performer, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Badge
                          variant={index === 0 ? "default" : "outline"}
                          className={
                            index === 0
                              ? "bg-yellow-500"
                              : index === 1
                                ? "bg-gray-400"
                                : index === 2
                                  ? "bg-orange-500"
                                  : ""
                          }
                        >
                          #{index + 1}
                        </Badge>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">{performer.name}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{performer.type}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      {performer.credits.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 font-semibold text-green-600">
                      ${performer.revenue.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{
                              width: `${(performer.credits / 15000) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {Math.round((performer.credits / 15000) * 100)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span>Export & Reporting</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" onClick={() => exportData("csv")}>
              <Download className="h-4 w-4 mr-2" />
              Platform Report (CSV)
            </Button>
            <Button variant="outline" onClick={() => exportData("pdf")}>
              <Download className="h-4 w-4 mr-2" />
              Executive Summary (PDF)
            </Button>
            <Button variant="outline" onClick={() => exportData("xlsx")}>
              <Download className="h-4 w-4 mr-2" />
              Financial Report (Excel)
            </Button>
            <Button variant="outline" onClick={() => exportData("json")}>
              <Download className="h-4 w-4 mr-2" />
              API Data (JSON)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
