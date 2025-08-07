// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   Button,
//   Badge,
//   Input,
//   Label,
//   Textarea,
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../components/basic-ui";

// // SVG Icons
// const FileTextIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
//     <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
//   </svg>
// );

// const DownloadIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
//   </svg>
// );

// const UploadIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
//   </svg>
// );

// const CalendarIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//     <path d="M16 2v4M8 2v4M3 10h18" />
//   </svg>
// );

// const ClockIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="12" r="10" />
//     <path d="M12 6v6l4 2" />
//   </svg>
// );

// const CheckCircleIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//     <path d="M22 4L12 14.01l-3-3" />
//   </svg>
// );

// const AlertTriangleIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
//     <path d="M12 9v4M12 17h.01" />
//   </svg>
// );

// const PlusIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M12 5v14M5 12h14" />
//   </svg>
// );

// const EyeIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//     <circle cx="12" cy="12" r="3" />
//   </svg>
// );

// const EditIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
//     <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
//   </svg>
// );

// const GlobeIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="12" r="10" />
//     <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10M12 2a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10" />
//   </svg>
// );

// const BuildingIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M3 21h18M6 18V9a3 3 0 013-3h6a3 3 0 013 3v9M9 6V3h6v3M8 21v-3h8v3M10 12h4M10 15h4M10 9h4" />
//   </svg>
// );

// const ShieldIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//   </svg>
// );

// const AwardIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="8" r="7" />
//     <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
//   </svg>
// );

// const ComplianceReports = () => {
//   const [showReportGenerator, setShowReportGenerator] = useState(false);
//   const [showReportDetails, setShowReportDetails] = useState(false);
//   const [selectedReport, setSelectedReport] = useState(null);

//   // Mock compliance reports data
//   const reports = [
//     {
//       id: "RPT-001",
//       title: "Q4 2023 EU ETS Report",
//       type: "EU ETS",
//       region: "Europe",
//       status: "Approved",
//       deadline: "2024-01-31",
//       submittedDate: "2024-01-15",
//       approvedDate: "2024-01-25",
//       template: "EU ETS Standard Template",
//       description: "Quarterly emissions trading system compliance report",
//     },
//     {
//       id: "RPT-002",
//       title: "CDP Climate Change 2024",
//       type: "CDP",
//       region: "Global",
//       status: "Submitted",
//       deadline: "2024-02-28",
//       submittedDate: "2024-02-20",
//       template: "CDP Climate Template",
//       description: "Annual climate change disclosure report",
//     },
//     {
//       id: "RPT-003",
//       title: "ISO 14064 Verification",
//       type: "ISO 14264",
//       region: "North America",
//       status: "Draft",
//       deadline: "2024-03-15",
//       template: "ISO 14064 Template",
//       description: "Greenhouse gas quantification and verification",
//     },
//     {
//       id: "RPT-004",
//       title: "India PAT Compliance",
//       type: "PAT India",
//       region: "Asia",
//       status: "Rejected",
//       deadline: "2024-02-10",
//       submittedDate: "2024-02-08",
//       template: "PAT India Template",
//       description: "Perform, Achieve and Trade scheme compliance",
//     },
//     {
//       id: "RPT-005",
//       title: "California CARB Report",
//       type: "CARB",
//       region: "North America",
//       status: "Draft",
//       deadline: "2024-04-01",
//       template: "CARB Template",
//       description: "California Air Resources Board compliance report",
//     },
//   ];

//   // Mock compliance alerts
//   const alerts = [
//     {
//       id: "ALERT-001",
//       type: "deadline",
//       severity: "high",
//       message: "ISO 14064 Verification report due in 15 days",
//       dueDate: "2024-03-15",
//       reportType: "ISO 14064",
//     },
//     {
//       id: "ALERT-002",
//       type: "missing",
//       severity: "medium",
//       message: "Missing Q1 2024 TCFD disclosure",
//       dueDate: "2024-04-30",
//       reportType: "TCFD",
//     },
//     {
//       id: "ALERT-003",
//       type: "update",
//       severity: "low",
//       message: "New EU Taxonomy requirements published",
//       dueDate: "2024-06-01",
//       reportType: "EU Taxonomy",
//     },
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Approved":
//         return "badge-green";
//       case "Submitted":
//         return "badge-blue";
//       case "Draft":
//         return "badge-gray";
//       case "Rejected":
//         return "badge-red";
//       default:
//         return "badge-gray";
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "Approved":
//         return CheckCircleIcon;
//       case "Submitted":
//         return ClockIcon;
//       case "Draft":
//         return EditIcon;
//       case "Rejected":
//         return AlertTriangleIcon;
//       default:
//         return FileTextIcon;
//     }
//   };

//   const getAlertColor = (severity) => {
//     switch (severity) {
//       case "high":
//         return "alert-high border-red";
//       case "medium":
//         return "alert-medium border-yellow";
//       case "low":
//         return "alert-low border-blue";
//       default:
//         return "alert-low border-gray";
//     }
//   };

//   const getAlertDotColor = (severity) => {
//     switch (severity) {
//       case "high":
//         return "bg-red-500";
//       case "medium":
//         return "bg-yellow-500";
//       case "low":
//         return "bg-blue-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const handleViewReport = (report) => {
//     setSelectedReport(report);
//     setShowReportDetails(true);
//   };

//   const handleDownloadReport = (reportId, format) => {
//     console.log(`Downloading report ${reportId} in ${format} format`);
//   };

//   const statusStats = {
//     total: reports.length,
//     approved: reports.filter((r) => r.status === "Approved").length,
//     submitted: reports.filter((r) => r.status === "Submitted").length,
//     draft: reports.filter((r) => r.status === "Draft").length,
//     rejected: reports.filter((r) => r.status === "Rejected").length,
//   };

//   return (
//     <motion.div
//       className="space-y-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Page Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">Compliance Reports</h1>
//           <p className="text-secondary mt-1">
//             Manage regulatory compliance and generate reports
//           </p>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Button variant="outline">
//             <UploadIcon className="w-4 h-4 mr-2" />
//             Import Data
//           </Button>
//           <Button onClick={() => setShowReportGenerator(true)}>
//             <PlusIcon className="w-4 h-4 mr-2" />
//             New Report
//           </Button>
//         </div>
//       </div>

//       {/* Status Summary Cards */}
//       <div className="grid-1 md-grid-5">
//         {[
//           { value: statusStats.total, label: "Total Reports", color: "text" },
//           { value: statusStats.approved, label: "Approved", color: "text-green-600" },
//           { value: statusStats.submitted, label: "Submitted", color: "text-blue-600" },
//           { value: statusStats.draft, label: "Draft", color: "text-gray-600" },
//           { value: statusStats.rejected, label: "Rejected", color: "text-red-600" },
//         ].map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//           >
//             <Card>
//               <CardContent className="p-4 text-center">
//                 <div className={`text-2xl font-bold ${stat.color}`}>
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-secondary">{stat.label}</div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>

//       {/* Compliance Alerts */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center space-x-2">
//             <AlertTriangleIcon className="w-5 h-5 text-orange" />
//             <span>Compliance Alerts</span>
//             <Badge className="badge-destructive">{alerts.length}</Badge>
//           </CardTitle>
//           <CardDescription>
//             Important deadlines and compliance updates
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-3">
//             {alerts.map((alert, index) => (
//               <motion.div
//                 key={alert.id}
//                 className={`flex items-center space-x-3 p-3 rounded-lg ${getAlertColor(alert.severity)}`}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <div className={`alert-dot ${getAlertDotColor(alert.severity)}`} />
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <p className="font-medium">{alert.message}</p>
//                     <div className="flex items-center space-x-2">
//                       <Badge className="badge-outline">{alert.reportType}</Badge>
//                       <span className="text-sm text-secondary">
//                         Due: {alert.dueDate}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Reports Table */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Reports Management</CardTitle>
//           <CardDescription>
//             View, edit, and manage all compliance reports
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Report</TableHead>
//                 <TableHead>Type</TableHead>
//                 <TableHead>Region</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Deadline</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {reports.map((report, index) => {
//                 const StatusIcon = getStatusIcon(report.status);
//                 return (
//                   <motion.tr
//                     key={report.id}
//                     className="table-row"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                   >
//                     <TableCell>
//                       <div>
//                         <div className="font-medium">{report.title}</div>
//                         <div className="text-sm text-secondary">{report.id}</div>
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <Badge className="badge-outline">{report.type}</Badge>
//                     </TableCell>
//                     <TableCell>
//                       <div className="flex items-center space-x-2">
//                         <GlobeIcon className="w-4 h-4 text-gray-400" />
//                         <span>{report.region}</span>
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <div className="flex items-center space-x-2">
//                         <StatusIcon className="w-4 h-4" />
//                         <Badge className={getStatusColor(report.status)}>
//                           {report.status}
//                         </Badge>
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <div className="flex items-center space-x-2">
//                         <CalendarIcon className="w-4 h-4 text-gray-400" />
//                         <span>{report.deadline}</span>
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <div className="flex items-center space-x-2">
//                         <Button
//                           variant="ghost"
//                           className="button-sm"
//                           onClick={() => handleViewReport(report)}
//                         >
//                           <EyeIcon className="w-4 h-4" />
//                         </Button>
//                         <Button variant="ghost" className="button-sm">
//                           <EditIcon className="w-4 h-4" />
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           className="button-sm"
//                           onClick={() => handleDownloadReport(report.id, "pdf")}
//                         >
//                           <DownloadIcon className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </motion.tr>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Compliance Frameworks */}
//       <div className="grid-1 md-grid-2 lg-grid-3">
//         {[
//           {
//             title: "EU Frameworks",
//             icon: <BuildingIcon className="w-5 h-5 text-blue" />,
//             items: [
//               { name: "EU ETS", status: "Active", color: "badge-green" },
//               { name: "EU Taxonomy", status: "Preparing", color: "badge-yellow" },
//               { name: "CSRD", status: "Pending", color: "badge-gray" },
//             ],
//           },
//           {
//             title: "Global Standards",
//             icon: <ShieldIcon className="w-5 h-5 text-green" />,
//             items: [
//               { name: "CDP", status: "Active", color: "badge-green" },
//               { name: "TCFD", status: "Submitted", color: "badge-blue" },
//               { name: "GRI", status: "Active", color: "badge-green" },
//             ],
//           },
//           {
//             title: "Certifications",
//             icon: <AwardIcon className="w-5 h-5 text-purple" />,
//             items: [
//               { name: "ISO 14064", status: "Due", color: "badge-yellow" },
//               { name: "Gold Standard", status: "Certified", color: "badge-green" },
//               { name: "VCS", status: "Verified", color: "badge-green" },
//             ],
//           },
//         ].map((framework, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2">
//                   {framework.icon}
//                   <span>{framework.title}</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   {framework.items.map((item, idx) => (
//                     <div key={idx} className="flex items-center justify-between">
//                       <span className="text-sm">{item.name}</span>
//                       <Badge className={item.color}>{item.status}</Badge>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>

//       {/* Report Generator Modal */}
//       <Dialog open={showReportGenerator} onOpenChange={setShowReportGenerator}>
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle>Generate New Report</DialogTitle>
//             <DialogDescription>
//               Create a new compliance report using our templates
//             </DialogDescription>
//           </DialogHeader>
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="grid-2">
//               <div>
//                 <Label htmlFor="report-title">Report Title</Label>
//                 <Input id="report-title" placeholder="Enter report title" />
//               </div>
//               <div>
//                 <Label htmlFor="report-type">Report Type</Label>
//                 <select id="report-type" className="select">
//                   <option value="">Select type</option>
//                   <option value="EU ETS">EU ETS</option>
//                   <option value="CDP">CDP</option>
//                   <option value="TCFD">TCFD</option>
//                   <option value="ISO 14064">ISO 14064</option>
//                   <option value="GRI">GRI</option>
//                   <option value="SASB">SASB</option>
//                 </select>
//               </div>
//               <div>
//                 <Label htmlFor="region">Region</Label>
//                 <select id="region" className="select">
//                   <option value="">Select region</option>
//                   <option value="Global">Global</option>
//                   <option value="Europe">Europe</option>
//                   <option value="North America">North America</option>
//                   <option value="Asia Pacific">Asia Pacific</option>
//                   <option value="Latin America">Latin America</option>
//                 </select>
//               </div>
//               <div>
//                 <Label htmlFor="deadline">Deadline</Label>
//                 <Input id="deadline" type="date" />
//               </div>
//             </div>
//             <div>
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 placeholder="Enter report description"
//                 rows={3}
//               />
//             </div>
//             <div className="flex justify-end space-x-2">
//               <Button
//                 variant="outline"
//                 onClick={() => setShowReportGenerator(false)}
//               >
//                 Cancel
//               </Button>
//               <Button>Generate Report</Button>
//             </div>
//           </motion.div>
//         </DialogContent>
//       </Dialog>

//       {/* Report Details Modal */}
//       <Dialog open={showReportDetails} onOpenChange={setShowReportDetails}>
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle>Report Details</DialogTitle>
//             <DialogDescription>
//               Detailed information about the compliance report
//             </DialogDescription>
//           </DialogHeader>
//           {selectedReport && (
//             <motion.div
//               className="space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="grid-2">
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Report ID
//                   </Label>
//                   <p className="text-lg font-semibold">{selectedReport.id}</p>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Status
//                   </Label>
//                   <Badge className={getStatusColor(selectedReport.status)}>
//                     {selectedReport.status}
//                   </Badge>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Type
//                   </Label>
//                   <p className="text-lg font-semibold">{selectedReport.type}</p>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Region
//                   </Label>
//                   <p className="text-lg font-semibold">
//                     {selectedReport.region}
//                   </p>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Deadline
//                   </Label>
//                   <p className="text-lg font-semibold">
//                     {selectedReport.deadline}
//                   </p>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Template
//                   </Label>
//                   <p className="text-lg font-semibold">
//                     {selectedReport.template}
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <Label className="text-sm font-medium text-secondary">
//                   Description
//                 </Label>
//                 <p className="mt-1">{selectedReport.description}</p>
//               </div>
//               <div className="flex justify-end space-x-2 pt-4 border-t">
//                 <Button variant="outline">
//                   <DownloadIcon className="w-4 h-4 mr-2" />
//                   Download PDF
//                 </Button>
//                 <Button variant="outline">
//                   <DownloadIcon className="w-4 h-4 mr-2" />
//                   Download Excel
//                 </Button>
//                 <Button>
//                   <EditIcon className="w-4 h-4 mr-2" />
//                   Edit Report
//                 </Button>
//               </div>
//             </motion.div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </motion.div>
//   );
// };

// export default ComplianceReports;





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
  Label,
  Textarea,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./basic-ui";

// SVG Icons
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

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
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

const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EditIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10M12 2a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10" />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 21h18M6 18V9a3 3 0 013-3h6a3 3 0 013 3v9M9 6V3h6v3M8 21v-3h8v3M10 12h4M10 15h4M10 9h4" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const AwardIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="7" />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

const ComplianceReports = () => {
  const [showReportGenerator, setShowReportGenerator] = useState(false);
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  // Mock compliance reports data
  const reports = [
    {
      id: "RPT-001",
      title: "Q4 2023 EU ETS Report",
      type: "EU ETS",
      region: "Europe",
      status: "Approved",
      deadline: "2024-01-31",
      submittedDate: "2024-01-15",
      approvedDate: "2024-01-25",
      template: "EU ETS Standard Template",
      description: "Quarterly emissions trading system compliance report",
    },
    {
      id: "RPT-002",
      title: "CDP Climate Change 2024",
      type: "CDP",
      region: "Global",
      status: "Submitted",
      deadline: "2024-02-28",
      submittedDate: "2024-02-20",
      template: "CDP Climate Template",
      description: "Annual climate change disclosure report",
    },
    {
      id: "RPT-003",
      title: "ISO 14064 Verification",
      type: "ISO 14264",
      region: "North America",
      status: "Draft",
      deadline: "2024-03-15",
      template: "ISO 14064 Template",
      description: "Greenhouse gas quantification and verification",
    },
    {
      id: "RPT-004",
      title: "India PAT Compliance",
      type: "PAT India",
      region: "Asia",
      status: "Rejected",
      deadline: "2024-02-10",
      submittedDate: "2024-02-08",
      template: "PAT India Template",
      description: "Perform, Achieve and Trade scheme compliance",
    },
    {
      id: "RPT-005",
      title: "California CARB Report",
      type: "CARB",
      region: "North America",
      status: "Draft",
      deadline: "2024-04-01",
      template: "CARB Template",
      description: "California Air Resources Board compliance report",
    },
  ];

  // Mock compliance alerts
  const alerts = [
    {
      id: "ALERT-001",
      type: "deadline",
      severity: "high",
      message: "ISO 14064 Verification report due in 15 days",
      dueDate: "2024-03-15",
      reportType: "ISO 14064",
    },
    {
      id: "ALERT-002",
      type: "missing",
      severity: "medium",
      message: "Missing Q1 2024 TCFD disclosure",
      dueDate: "2024-04-30",
      reportType: "TCFD",
    },
    {
      id: "ALERT-003",
      type: "update",
      severity: "low",
      message: "New EU Taxonomy requirements published",
      dueDate: "2024-06-01",
      reportType: "EU Taxonomy",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "badge-green";
      case "Submitted":
        return "badge-blue";
      case "Draft":
        return "badge-gray";
      case "Rejected":
        return "badge-red";
      default:
        return "badge-gray";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return CheckCircleIcon;
      case "Submitted":
        return ClockIcon;
      case "Draft":
        return EditIcon;
      case "Rejected":
        return AlertTriangleIcon;
      default:
        return FileTextIcon;
    }
  };

  const getAlertColor = (severity) => {
    switch (severity) {
      case "high":
        return "alert-high border-red";
      case "medium":
        return "alert-medium border-yellow";
      case "low":
        return "alert-low border-blue";
      default:
        return "alert-low border-gray";
    }
  };

  const getAlertDotColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setShowReportDetails(true);
  };

  const handleDownloadReport = (reportId, format) => {
    console.log(`Downloading report ${reportId} in ${format} format`);
  };

  const statusStats = {
    total: reports.length,
    approved: reports.filter((r) => r.status === "Approved").length,
    submitted: reports.filter((r) => r.status === "Submitted").length,
    draft: reports.filter((r) => r.status === "Draft").length,
    rejected: reports.filter((r) => r.status === "Rejected").length,
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Compliance Reports</h1>
          <p className="text-secondary mt-1">
            Manage regulatory compliance and generate reports
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <UploadIcon className="w-4 h-4 mr-2" />
            Import Data
          </Button>
          <Button onClick={() => setShowReportGenerator(true)}>
            <PlusIcon className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>
      </div>

      {/* Status Summary Cards */}
      <div className="grid-1 md-grid-5">
        {[
          { value: statusStats.total, label: "Total Reports", color: "text" },
          {
            value: statusStats.approved,
            label: "Approved",
            color: "text-green-600",
          },
          {
            value: statusStats.submitted,
            label: "Submitted",
            color: "text-blue-600",
          },
          { value: statusStats.draft, label: "Draft", color: "text-gray-600" },
          {
            value: statusStats.rejected,
            label: "Rejected",
            color: "text-red-600",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Compliance Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangleIcon className="w-5 h-5 text-orange" />
            <span>Compliance Alerts</span>
            <Badge className="badge-destructive">{alerts.length}</Badge>
          </CardTitle>
          <CardDescription>
            Important deadlines and compliance updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                className={`flex items-center space-x-3 p-3 rounded-lg ${getAlertColor(alert.severity)}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className={`alert-dot ${getAlertDotColor(alert.severity)}`}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{alert.message}</p>
                    <div className="flex items-center space-x-2">
                      <Badge className="badge-outline">
                        {alert.reportType}
                      </Badge>
                      <span className="text-sm text-secondary">
                        Due: {alert.dueDate}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <CardTitle>Reports Management</CardTitle>
          <CardDescription>
            View, edit, and manage all compliance reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report, index) => {
                const StatusIcon = getStatusIcon(report.status);
                return (
                  <motion.tr
                    key={report.id}
                    className="table-row"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <TableCell>
                      <div>
                        <div className="font-medium">{report.title}</div>
                        <div className="text-sm text-secondary">
                          {report.id}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="badge-outline">{report.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <GlobeIcon className="w-4 h-4 text-gray-400" />
                        <span>{report.region}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="w-4 h-4" />
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="w-4 h-4 text-gray-400" />
                        <span>{report.deadline}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          className="button-sm"
                          onClick={() => handleViewReport(report)}
                        >
                          <EyeIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" className="button-sm">
                          <EditIcon className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="button-sm"
                          onClick={() => handleDownloadReport(report.id, "pdf")}
                        >
                          <DownloadIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Compliance Frameworks */}
      <div className="grid-1 md-grid-2 lg-grid-3">
        {[
          {
            title: "EU Frameworks",
            icon: <BuildingIcon className="w-5 h-5 text-blue" />,
            items: [
              { name: "EU ETS", status: "Active", color: "badge-green" },
              {
                name: "EU Taxonomy",
                status: "Preparing",
                color: "badge-yellow",
              },
              { name: "CSRD", status: "Pending", color: "badge-gray" },
            ],
          },
          {
            title: "Global Standards",
            icon: <ShieldIcon className="w-5 h-5 text-green" />,
            items: [
              { name: "CDP", status: "Active", color: "badge-green" },
              { name: "TCFD", status: "Submitted", color: "badge-blue" },
              { name: "GRI", status: "Active", color: "badge-green" },
            ],
          },
          {
            title: "Certifications",
            icon: <AwardIcon className="w-5 h-5 text-purple" />,
            items: [
              { name: "ISO 14064", status: "Due", color: "badge-yellow" },
              {
                name: "Gold Standard",
                status: "Certified",
                color: "badge-green",
              },
              { name: "VCS", status: "Verified", color: "badge-green" },
            ],
          },
        ].map((framework, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {framework.icon}
                  <span>{framework.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {framework.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm">{item.name}</span>
                      <Badge className={item.color}>{item.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Report Generator Modal */}
      <Dialog open={showReportGenerator} onOpenChange={setShowReportGenerator}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Generate New Report</DialogTitle>
            <DialogDescription>
              Create a new compliance report using our templates
            </DialogDescription>
          </DialogHeader>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid-2">
              <div>
                <Label htmlFor="report-title">Report Title</Label>
                <Input id="report-title" placeholder="Enter report title" />
              </div>
              <div>
                <Label htmlFor="report-type">Report Type</Label>
                <select id="report-type" className="select">
                  <option value="">Select type</option>
                  <option value="EU ETS">EU ETS</option>
                  <option value="CDP">CDP</option>
                  <option value="TCFD">TCFD</option>
                  <option value="ISO 14064">ISO 14064</option>
                  <option value="GRI">GRI</option>
                  <option value="SASB">SASB</option>
                </select>
              </div>
              <div>
                <Label htmlFor="region">Region</Label>
                <select id="region" className="select">
                  <option value="">Select region</option>
                  <option value="Global">Global</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="Asia Pacific">Asia Pacific</option>
                  <option value="Latin America">Latin America</option>
                </select>
              </div>
              <div>
                <Label htmlFor="deadline">Deadline</Label>
                <Input id="deadline" type="date" />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter report description"
                rows={3}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setShowReportGenerator(false)}
              >
                Cancel
              </Button>
              <Button>Generate Report</Button>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Report Details Modal */}
      <Dialog open={showReportDetails} onOpenChange={setShowReportDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Report Details</DialogTitle>
            <DialogDescription>
              Detailed information about the compliance report
            </DialogDescription>
          </DialogHeader>
          {selectedReport && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid-2">
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Report ID
                  </Label>
                  <p className="text-lg font-semibold">{selectedReport.id}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Status
                  </Label>
                  <Badge className={getStatusColor(selectedReport.status)}>
                    {selectedReport.status}
                  </Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Type
                  </Label>
                  <p className="text-lg font-semibold">{selectedReport.type}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Region
                  </Label>
                  <p className="text-lg font-semibold">
                    {selectedReport.region}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Deadline
                  </Label>
                  <p className="text-lg font-semibold">
                    {selectedReport.deadline}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Template
                  </Label>
                  <p className="text-lg font-semibold">
                    {selectedReport.template}
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-secondary">
                  Description
                </Label>
                <p className="mt-1">{selectedReport.description}</p>
              </div>
              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Button variant="outline">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download Excel
                </Button>
                <Button>
                  <EditIcon className="w-4 h-4 mr-2" />
                  Edit Report
                </Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ComplianceReports;