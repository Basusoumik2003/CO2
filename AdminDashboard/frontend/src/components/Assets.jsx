// import React, { useState } from "react";
// import { cn } from "../lib/utils";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   Button,
//   Badge,
//   Input,
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   Textarea,
// } from "./basic-ui";
// import {
//   Search,
//   Filter,
//   FileCheck,
//   Eye,
//   CheckCircle,
//   XCircle,
//   AlertTriangle,
//   Download,
//   Upload,
//   Calendar,
//   MapPin,
//   Activity,
//   DollarSign,
//   Car,
//   Trees,
//   Sun,
//   Wind,
//   Droplets,
//   Zap,
//   Factory,
//   Leaf,
// } from "lucide-react";

// // Asset icon mapping
// const ASSET_ICONS = {
//   EV: Car,
//   Trees: Trees,
//   Solar: Sun,
//   Wind: Wind,
//   Hydro: Droplets,
//   Thermal: Zap,
//   Bioenergy: Leaf,
//   "Carbon Capture": Factory,
// };

// // Mock assets data for verification
// const pendingAssets = [
  
   
// {
//     id: 2,
//     name: "Reforestation Project - Amazon",
//     type: "Trees",
//     owner: "EcoFarm Ltd",
//     submittedDate: "2024-06-13",
//     location: "Brazil",
//     estimatedCredits: 5000,
//     documents: [
//       "Land Ownership",
//       "Planting Certificate",
//       "Satellite Images",
//       "Third-party Audit",
//     ],
//     status: "Under Review",
//     priority: "medium",
//     description: "Planting 10,000 native trees in deforested Amazon region",
//     verificationDocuments: {
//       "Land Ownership": {
//         status: "approved",
//         reviewedBy: "Admin",
//         date: "2024-06-13",
//       },
//       "Planting Certificate": {
//         status: "approved",
//         reviewedBy: "Admin",
//         date: "2024-06-13",
//       },
//       "Satellite Images": { status: "pending", reviewedBy: null, date: null },
//       "Third-party Audit": {
//         status: "rejected",
//         reviewedBy: "Admin",
//         date: "2024-06-14",
//         reason: "Incomplete audit report",
//       },
//     },
//   },
 
// ];

// const auditLogs = [
//   {
//     id: 1,
//     timestamp: "2024-06-15 14:30:25",
//     action: "Asset Approved",
//     assetName: "Wind Farm Project Alpha",
//     admin: "John Admin",
//     details: "Approved after successful third-party verification",
//     creditsIssued: 3500,
//   },
//   {
//     id: 2,
//     timestamp: "2024-06-15 11:20:15",
//     action: "Document Rejected",
//     assetName: "Reforestation Project - Amazon",
//     admin: "Sarah Admin",
//     details: "Third-party audit report incomplete - requested revision",
//     creditsIssued: 0,
//   },
//   {
//     id: 3,
//     timestamp: "2024-06-15 09:45:30",
//     action: "Asset Submitted",
//     assetName: "Tesla Model 3 Fleet - NYC",
//     admin: "System",
//     details: "New asset submission received for verification",
//     creditsIssued: 0,
//   },
//   {
//     id: 4,
//     timestamp: "2024-06-14 16:15:45",
//     action: "Verification Started",
//     assetName: "Solar Panel Installation",
//     admin: "Mike Admin",
//     details: "Started verification process - assigned to expert reviewer",
//     creditsIssued: 0,
//   },
// ];

// const Assets = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [typeFilter, setTypeFilter] = useState("all");
//   const [selectedAsset, setSelectedAsset] = useState(null);
//   const [verificationNotes, setVerificationNotes] = useState("");

//   const filteredAssets = pendingAssets.filter((asset) => {
//     const matchesSearch =
//       asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       asset.owner.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus =
//       statusFilter === "all" || asset.status === statusFilter;
//     const matchesType = typeFilter === "all" || asset.type === typeFilter;
//     return matchesSearch && matchesStatus && matchesType;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending Verification":
//         return "bg-yellow-100 text-yellow-800";
//       case "Under Review":
//         return "bg-blue-100 text-blue-800";
//       case "Approved":
//         return "bg-green-100 text-green-800";
//       case "Rejected":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case "high":
//         return "bg-red-100 text-red-800";
//       case "medium":
//         return "bg-yellow-100 text-yellow-800";
//       case "low":
//         return "bg-green-100 text-green-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getDocumentStatusColor = (status) => {
//     switch (status) {
//       case "approved":
//         return "bg-green-100 text-green-800";
//       case "pending":
//         return "bg-yellow-100 text-yellow-800";
//       case "rejected":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900">
//             Asset Verification
//           </h2>
//           <p className="text-gray-600">
//             Review and verify carbon credit assets
//           </p>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Button variant="outline" size="sm">
//             <Download className="h-4 w-4 mr-2" />
//             Export Report
//           </Button>
//           <Button variant="outline" size="sm">
//             <Upload className="h-4 w-4 mr-2" />
//             Bulk Verify
//           </Button>
//         </div>
//       </div>

//       {/* Verification Queue Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <Card className="border-yellow-200">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium text-gray-600">
//               Pending Verification
//             </CardTitle>
//             <AlertTriangle className="h-4 w-4 text-yellow-600" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold text-gray-900">8</div>
//             <p className="text-xs text-yellow-600">
//               Requires immediate attention
//             </p>
//           </CardContent>
//         </Card>

//         <Card className="border-blue-200">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium text-gray-600">
//               Under Review
//             </CardTitle>
//             <Eye className="h-4 w-4 text-blue-600" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold text-gray-900">12</div>
//             <p className="text-xs text-blue-600">In verification process</p>
//           </CardContent>
//         </Card>

//         <Card className="border-green-200">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium text-gray-600">
//               Approved Today
//             </CardTitle>
//             <CheckCircle className="h-4 w-4 text-green-600" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold text-gray-900">5</div>
//             <p className="text-xs text-green-600">Credits issued: 15,250</p>
//           </CardContent>
//         </Card>

//         <Card className="border-red-200">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium text-gray-600">
//               Rejected
//             </CardTitle>
//             <XCircle className="h-4 w-4 text-red-600" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold text-gray-900">2</div>
//             <p className="text-xs text-red-600">Require resubmission</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Filters */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center space-x-2">
//             <Filter className="h-5 w-5 text-gray-600" />
//             <span>Filter Assets</span>
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <Input
//                 placeholder="Search assets..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <Select value={statusFilter} onValueChange={setStatusFilter}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Filter by status" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Status</SelectItem>
//                 <SelectItem value="Pending Verification">
//                   Pending Verification
//                 </SelectItem>
//                 <SelectItem value="Under Review">Under Review</SelectItem>
//                 <SelectItem value="Approved">Approved</SelectItem>
//                 <SelectItem value="Rejected">Rejected</SelectItem>
//               </SelectContent>
//             </Select>
//             <Select value={typeFilter} onValueChange={setTypeFilter}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Filter by type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Types</SelectItem>
//                 <SelectItem value="EV">Electric Vehicles</SelectItem>
//                 <SelectItem value="Trees">Trees</SelectItem>
//                 <SelectItem value="Solar">Solar</SelectItem>
//                 <SelectItem value="Wind">Wind</SelectItem>
//                 <SelectItem value="Hydro">Hydro</SelectItem>
//                 <SelectItem value="Thermal">Thermal</SelectItem>
//                 <SelectItem value="Bioenergy">Bioenergy</SelectItem>
//                 <SelectItem value="Carbon Capture">Carbon Capture</SelectItem>
//               </SelectContent>
//             </Select>
//             <Button variant="outline">
//               <Download className="h-4 w-4 mr-2" />
//               Export Filtered
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Assets Table */}
//       <Card>
//         <CardHeader>
//           <CardTitle>
//             Assets Pending Verification ({filteredAssets.length})
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Asset</TableHead>
//                   <TableHead>Type</TableHead>
//                   <TableHead>Owner</TableHead>
//                   <TableHead>Location</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Priority</TableHead>
//                   <TableHead>Est. Credits</TableHead>
//                   <TableHead>Submitted</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredAssets.map((asset) => {
//                   const Icon = ASSET_ICONS[asset.type];
//                   return (
//                     <TableRow key={asset.id}>
//                       <TableCell>
//                         <div className="flex items-center space-x-3">
//                           <div className="p-2 bg-gray-100 rounded-lg">
//                             <Icon className="h-4 w-4" />
//                           </div>
//                           <div>
//                             <div className="font-medium text-gray-900">
//                               {asset.name}
//                             </div>
//                             <div className="text-sm text-gray-500 max-w-xs truncate">
//                               {asset.description}
//                             </div>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell>{asset.type}</TableCell>
//                       <TableCell>{asset.owner}</TableCell>
//                       <TableCell>
//                         <div className="flex items-center space-x-1">
//                           <MapPin className="h-3 w-3 text-gray-400" />
//                           <span className="text-sm">{asset.location}</span>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <Badge className={getStatusColor(asset.status)}>
//                           {asset.status}
//                         </Badge>
//                       </TableCell>
//                       <TableCell>
//                         <Badge className={getPriorityColor(asset.priority)}>
//                           {asset.priority.toUpperCase()}
//                         </Badge>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex items-center space-x-1">
//                           <DollarSign className="h-3 w-3 text-green-600" />
//                           <span>{asset.estimatedCredits.toLocaleString()}</span>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex items-center space-x-1">
//                           <Calendar className="h-3 w-3 text-gray-400" />
//                           <span className="text-sm">{asset.submittedDate}</span>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex items-center space-x-2">
//                           <Dialog>
//                             <DialogTrigger asChild>
//                               <Button
//                                 variant="outline"
//                                 size="sm"
//                                 onClick={() => setSelectedAsset(asset)}
//                               >
//                                 <Eye className="h-4 w-4" />
//                               </Button>
//                             </DialogTrigger>
//                             <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
//                               <DialogHeader>
//                                 <DialogTitle>
//                                   Asset Verification: {asset.name}
//                                 </DialogTitle>
//                               </DialogHeader>
//                               {selectedAsset && (
//                                 <div className="space-y-6">
//                                   {/* Asset Overview */}
//                                   <div className="grid grid-cols-2 gap-6">
//                                     <div className="space-y-4">
//                                       <div>
//                                         <label className="text-sm font-medium text-gray-600">
//                                           Asset Name
//                                         </label>
//                                         <p className="text-lg font-semibold">
//                                           {selectedAsset.name}
//                                         </p>
//                                       </div>
//                                       <div>
//                                         <label className="text-sm font-medium text-gray-600">
//                                           Description
//                                         </label>
//                                         <p className="text-sm">
//                                           {selectedAsset.description}
//                                         </p>
//                                       </div>
//                                       <div>
//                                         <label className="text-sm font-medium text-gray-600">
//                                           Owner
//                                         </label>
//                                         <p>{selectedAsset.owner}</p>
//                                       </div>
//                                     </div>
//                                     <div className="space-y-4">
//                                       <div>
//                                         <label className="text-sm font-medium text-gray-600">
//                                           Type
//                                         </label>
//                                         <p>{selectedAsset.type}</p>
//                                       </div>
//                                       <div>
//                                         <label className="text-sm font-medium text-gray-600">
//                                           Location
//                                         </label>
//                                         <p>{selectedAsset.location}</p>
//                                       </div>
//                                       <div>
//                                         <label className="text-sm font-medium text-gray-600">
//                                           Estimated Credits
//                                         </label>
//                                         <p className="text-lg font-semibold text-green-600">
//                                           {selectedAsset.estimatedCredits.toLocaleString()}
//                                         </p>
//                                       </div>
//                                     </div>
//                                   </div>

//                                   {/* Document Verification */}
//                                   <div>
//                                     <h3 className="text-lg font-semibold mb-4">
//                                       Document Verification
//                                     </h3>
//                                     <div className="space-y-3">
//                                       {Object.entries(
//                                         selectedAsset.verificationDocuments,
//                                       ).map(([docName, docStatus]) => (
//                                         <div
//                                           key={docName}
//                                           className="flex items-center justify-between p-3 border rounded-lg"
//                                         >
//                                           <div className="flex-1">
//                                             <h4 className="font-medium">
//                                               {docName}
//                                             </h4>
//                                             {docStatus.reviewedBy && (
//                                               <p className="text-sm text-gray-500">
//                                                 Reviewed by{" "}
//                                                 {docStatus.reviewedBy} on{" "}
//                                                 {docStatus.date}
//                                               </p>
//                                             )}
//                                             {docStatus.reason && (
//                                               <p className="text-sm text-red-600 mt-1">
//                                                 Reason: {docStatus.reason}
//                                               </p>
//                                             )}
//                                           </div>
//                                           <div className="flex items-center space-x-2">
//                                             <Badge
//                                               className={getDocumentStatusColor(
//                                                 docStatus.status,
//                                               )}
//                                             >
//                                               {docStatus.status}
//                                             </Badge>
//                                             <Button variant="outline" size="sm">
//                                               <Eye className="h-4 w-4" />
//                                             </Button>
//                                           </div>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>

//                                   {/* Verification Notes */}
//                                   <div>
//                                     <label className="text-sm font-medium text-gray-600">
//                                       Verification Notes
//                                     </label>
//                                     <Textarea
//                                       placeholder="Add notes about the verification process..."
//                                       value={verificationNotes}
//                                       onChange={(e) =>
//                                         setVerificationNotes(e.target.value)
//                                       }
//                                       className="mt-2"
//                                       rows={3}
//                                     />
//                                   </div>

//                                   {/* Actions */}
//                                   <div className="flex justify-end space-x-3 pt-4 border-t">
//                                     <Button variant="outline">
//                                       Request More Info
//                                     </Button>
//                                     <Button variant="outline">
//                                       Schedule Review
//                                     </Button>
//                                     <Button variant="destructive">
//                                       <XCircle className="h-4 w-4 mr-2" />
//                                       Reject
//                                     </Button>
//                                     <Button className="bg-green-600 hover:bg-green-700">
//                                       <CheckCircle className="h-4 w-4 mr-2" />
//                                       Approve & Issue Credits
//                                     </Button>
//                                   </div>
//                                 </div>
//                               )}
//                             </DialogContent>
//                           </Dialog>
//                           <Button
//                             size="sm"
//                             className="bg-green-600 hover:bg-green-700"
//                           >
//                             <CheckCircle className="h-4 w-4" />
//                           </Button>
//                           <Button size="sm" variant="destructive">
//                             <XCircle className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   );
//                 })}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Audit Log */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center space-x-2">
//             <Activity className="h-5 w-5 text-blue-600" />
//             <span>Verification Audit Log</span>
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Timestamp</TableHead>
//                   <TableHead>Action</TableHead>
//                   <TableHead>Asset</TableHead>
//                   <TableHead>Admin</TableHead>
//                   <TableHead>Details</TableHead>
//                   <TableHead>Credits Issued</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {auditLogs.map((log) => (
//                   <TableRow key={log.id}>
//                     <TableCell className="font-mono text-sm">
//                       {log.timestamp}
//                     </TableCell>
//                     <TableCell>
//                       <Badge
//                         className={
//                           log.action.includes("Approved")
//                             ? "bg-green-100 text-green-800"
//                             : log.action.includes("Rejected")
//                               ? "bg-red-100 text-red-800"
//                               : "bg-blue-100 text-blue-800"
//                         }
//                       >
//                         {log.action}
//                       </Badge>
//                     </TableCell>
//                     <TableCell>{log.assetName}</TableCell>
//                     <TableCell>{log.admin}</TableCell>
//                     <TableCell className="max-w-xs truncate">
//                       {log.details}
//                     </TableCell>
//                     <TableCell>
//                       {log.creditsIssued > 0 ? (
//                         <span className="text-green-600 font-medium">
//                           +{log.creditsIssued.toLocaleString()}
//                         </span>
//                       ) : (
//                         <span className="text-gray-400">-</span>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Assets;
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./basic-ui";
import {
  Eye,
  CheckCircle,
  XCircle,
  Car,
  Trees,
  Sun,
  Wind,
  Droplets,
  Zap,
  Factory,
  Leaf,
} from "lucide-react";

const ASSET_ICONS = {
  EV: Car,
  Tree: Trees,
  Solar: Sun,
  Wind: Wind,
  Hydro: Droplets,
  Thermal: Zap,
  Bioenergy: Leaf,
  "Carbon Capture": Factory,
};

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const res = await fetch("https://admin-service-5g36.onrender.com/api/assets");
      const json = await res.json();
      if (json.status === "success") {
        setAssets(json.data); // ✅ Sab assets ko set karo (pending, approved, rejected)
      } else {
        console.error("Failed to fetch assets");
      }
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

const updateStatus = async (assetId, newStatus) => {
  try {
    const res = await fetch(`https://admin-service-5g36.onrender.com/api/assets/${assetId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (res.ok) {
      fetchAssets();
    } else {
      console.error("Failed to update status");
    }
  } catch (error) {
    console.error("Error updating status:", error);
  }
};


  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>All Assets ({assets.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted at</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => {
                  const Icon = ASSET_ICONS[asset.asset_type] || Factory;
                  return (
                    <TableRow key={asset.id}>
                      <TableCell>{asset.asset_id}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Icon className="h-4 w-4" />
                          <span>{asset.asset_type}</span>
                        </div>
                      </TableCell>
                      <TableCell>{asset.owner}</TableCell>
                      <TableCell>{asset.area}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(asset.status)}>
                          {asset.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(asset.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {/* View button */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setSelectedAsset(asset)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  Asset Details: {asset.asset_id}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="space-y-2">
                                <p>
                                  <strong>Owner:</strong> {asset.owner}
                                </p>
                                <p>
                                  <strong>Type:</strong> {asset.asset_type}
                                </p>
                                <p>
                                  <strong>Area:</strong> {asset.area}
                                </p>
                                <p>
                                  <strong>Status:</strong> {asset.status}
                                </p>
                                <p>
                                  <strong>Submitted at:</strong>{" "}
                                  {new Date(asset.created_at).toLocaleDateString()}
                                </p>
                              </div>
                            </DialogContent>
                          </Dialog>

                          {/* Approve button */}
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100 hover:bg-green-200"
                            onClick={() => updateStatus(asset.id, "approved")}
                          >
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </Button>

                          {/* Reject button */}
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100 hover:bg-red-200"
                            onClick={() => updateStatus(asset.id, "rejected")}
                          >
                            <XCircle className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Assets;
