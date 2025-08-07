import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Input,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./basic-ui";

// SVG Icons
const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const UploadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
  </svg>
);

const FileTextIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const SendIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <path d="M22 2L15 22l-4-9-9-4 20-7z" />
  </svg>
);

const CalculatorIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="8" y1="18" x2="16" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const QuickActions = () => {
  const [showAddAsset, setShowAddAsset] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const quickActions = [
    {
      title: "Add New Asset",
      description: "Register a new carbon reduction asset",
      icon: PlusIcon,
      color: "blue",
      onClick: () => setShowAddAsset(true),
    },
    {
      title: "Upload Documents",
      description: "Submit verification documents",
      icon: UploadIcon,
      color: "green",
      onClick: () => {},
    },
    {
      title: "Generate Report",
      description: "Create compliance or progress report",
      icon: FileTextIcon,
      color: "purple",
      onClick: () => setShowReport(true),
    },
    {
      title: "Submit Credits",
      description: "Submit carbon credits for verification",
      icon: SendIcon,
      color: "orange",
      onClick: () => {},
    },
    {
      title: "Calculate Emissions",
      description: "Use our carbon footprint calculator",
      icon: CalculatorIcon,
      color: "indigo",
      onClick: () => {},
    },
    {
      title: "Verify Asset",
      description: "Mark asset verification as complete",
      icon: CheckIcon,
      color: "green",
      onClick: () => {},
    },
  ];

  const recentActions = [
    {
      action: "Added Solar Panel Array SP-045",
      time: "2 hours ago",
      status: "completed",
    },
    {
      action: "Uploaded verification documents",
      time: "5 hours ago",
      status: "pending",
    },
    {
      action: "Generated monthly report",
      time: "1 day ago",
      status: "completed",
    },
    {
      action: "Submitted 150 carbon credits",
      time: "2 days ago",
      status: "in-review",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "badge-success";
      case "pending":
        return "badge-warning";
      case "in-review":
        return "badge-info";
      default:
        return "badge-default";
    }
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Quick Actions Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and shortcuts for faster workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid-2 md-grid-3 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className="cursor-pointer hover-card"
                    onClick={action.onClick}
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`inline-flex p-3 rounded-lg bg-${action.color}-100 mb-3`}
                      >
                        <Icon className={`w-6 h-6 text-${action.color}-600`} />
                      </div>
                      <h3 className="font-semibold mb-2">{action.title}</h3>
                      <p className="text-sm text-secondary">
                        {action.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Actions</CardTitle>
          <CardDescription>
            Your recent activity and submissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActions.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div>
                  <div className="font-medium">{item.action}</div>
                  <div className="text-sm text-secondary">{item.time}</div>
                </div>
                <Badge className={getStatusColor(item.status)}>
                  {item.status.replace("-", " ")}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Asset Modal */}
      <Dialog open={showAddAsset} onOpenChange={setShowAddAsset}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Asset</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Asset Name
              </label>
              <Input placeholder="Enter asset name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Asset Type
              </label>
              <select className="select w-full">
                <option>Solar Panel</option>
                <option>Wind Turbine</option>
                <option>Electric Vehicle</option>
                <option>Carbon Capture</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Input placeholder="Enter location" />
            </div>
            <div className="flex space-x-2 pt-4">
              <Button className="button-primary flex-1">Add Asset</Button>
              <Button
                className="button-ghost flex-1"
                onClick={() => setShowAddAsset(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Generate Report Modal */}
      <Dialog open={showReport} onOpenChange={setShowReport}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate Report</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Report Type
              </label>
              <select className="select w-full">
                <option>Monthly Progress Report</option>
                <option>Compliance Report</option>
                <option>Carbon Credit Summary</option>
                <option>Asset Performance Report</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Date Range
              </label>
              <div className="grid-2 gap-2">
                <Input type="date" />
                <Input type="date" />
              </div>
            </div>
            <div className="flex space-x-2 pt-4">
              <Button className="button-primary flex-1">Generate Report</Button>
              <Button
                className="button-ghost flex-1"
                onClick={() => setShowReport(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default QuickActions;