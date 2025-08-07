import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Progress,
  Badge,
} from "./basic-ui";

// SVG Icons
const TruckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 18V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2z" />
    <path d="M14 9h4l2 2v7h-2" />
    <circle cx="6.5" cy="18.5" r="2.5" />
    <circle cx="17.5" cy="18.5" r="2.5" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const FuelIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 12a9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9 9 9 0 00-9 9z" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const RouteIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10 2v20M14 2v20M4 7l4-4 4 4M20 17l-4 4-4-4" />
  </svg>
);

const FleetManagement = () => {
  // Fleet specific data
  const fleetStats = [
    {
      title: "Total Vehicles",
      value: "156",
      change: "+8",
      icon: TruckIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Routes",
      value: "42",
      change: "+3",
      icon: RouteIcon,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Fuel Saved (L)",
      value: "12,847",
      change: "+15.2%",
      icon: FuelIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "CO₂ Reduced",
      value: "38.5T",
      change: "+12.8%",
      icon: MapPinIcon,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const vehicleTypes = [
    { type: "Electric Vehicles", count: 89, percentage: 57, color: "green" },
    { type: "Hybrid Vehicles", count: 45, percentage: 29, color: "blue" },
    { type: "Traditional Vehicles", count: 22, percentage: 14, color: "gray" },
  ];

  const recentRoutes = [
    {
      id: "RT-001",
      from: "Warehouse A",
      to: "Distribution Center",
      distance: "45.2 km",
      efficiency: "92%",
    },
    {
      id: "RT-002",
      from: "Store 1",
      to: "Store 5",
      distance: "23.8 km",
      efficiency: "88%",
    },
    {
      id: "RT-003",
      from: "Depot",
      to: "Client Location",
      distance: "67.1 km",
      efficiency: "95%",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Fleet Stats */}
      <div className="grid-2 lg-grid-4">
        {fleetStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-secondary">{stat.title}</div>
                      <div className="text-sm text-green-600">
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid-1 lg-grid-2">
        {/* Vehicle Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Types</CardTitle>
            <CardDescription>
              Distribution of vehicles in your fleet
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{vehicle.type}</span>
                  <span className="text-sm text-secondary">
                    {vehicle.count} vehicles
                  </span>
                </div>
                <Progress value={vehicle.percentage} />
                <div className="text-right text-sm text-secondary">
                  {vehicle.percentage}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Routes */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Routes</CardTitle>
            <CardDescription>Latest optimized delivery routes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRoutes.map((route, index) => (
                <motion.div
                  key={route.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div>
                    <div className="font-medium">{route.id}</div>
                    <div className="text-sm text-secondary">
                      {route.from} → {route.to}
                    </div>
                    <div className="text-sm text-secondary">
                      {route.distance}
                    </div>
                  </div>
                  <Badge
                    className={`${route.efficiency >= "90%" ? "badge-success" : "badge-warning"}`}
                  >
                    {route.efficiency}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default FleetManagement;