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
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
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
//   ScrollArea,
// } from "../components/basic-ui";

// // SVG Icons


// const AlertTriangleIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
//     <line x1="12" y1="9" x2="12" y2="13" />
//     <line x1="12" y1="17" x2="12.01" y2="17" />
//   </svg>
// );

// const UsersIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
//   </svg>
// );

// const UserPlusIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//     <circle cx="8.5" cy="7" r="4" />
//     <path d="M20 8v6m3-3h-6" />
//   </svg>
// );

// const CrownIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
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

// const ShieldIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//   </svg>
// );

// const UserIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
//     <circle cx="12" cy="7" r="4" />
//   </svg>
// );

// const MailIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//     <path d="M22 6l-10 7L2 6" />
//   </svg>
// );

// const SettingsIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
//     <circle cx="12" cy="12" r="3" />
//   </svg>
// );

// const Trash2Icon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
//   </svg>
// );

// const CheckCircleIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//     <path d="M22 4L12 14.01l-3-3" />
//   </svg>
// );

// const ActivityIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//   </svg>
// );

// const MoreVerticalIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="5" r="1" />
//     <circle cx="12" cy="12" r="1" />
//     <circle cx="12" cy="19" r="1" />
//   </svg>
// );

// // Simple Dropdown Component
// const SimpleDropdown = ({ trigger, children, align = "left" }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.div
//       className="dropdown-menu"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div onClick={() => setOpen(!open)}>{trigger}</div>
//       {open && (
//         <>
//           <div
//             className="fixed inset-0 z-40"
//             onClick={() => setOpen(false)}
//           />
//           <motion.div
//             className={`dropdown-content ${align === "end" ? "dropdown-content-end" : ""}`}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {React.Children.map(children, (child) =>
//               React.cloneElement(child, { onClick: () => setOpen(false) }),
//             )}
//           </motion.div>
//         </>
//       )}
//     </motion.div>
//   );
// };

// const DropdownItem = ({ children, onClick, className }) => (
//   <motion.div
//     className={`dropdown-item ${className || ""}`}
//     onClick={onClick}
//     whileHover={{ backgroundColor: "var(--color-card-bg-hover)" }}
//   >
//     {children}
//   </motion.div>
// );

// const TeamManagement = () => {
//   const [showInviteModal, setShowInviteModal] = useState(false);
//   const [showMemberDetails, setShowMemberDetails] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [roleFilter, setRoleFilter] = useState("all");

//   // Mock team members data
//   const teamMembers = [
//     {
//       id: "USER-001",
//       name: "John Smith",
//       email: "john.smith@company.com",
//       role: "Admin",
//       department: "Sustainability",
//       joinDate: "2023-01-15",
//       lastActive: "2 hours ago",
//       status: "Active",
//       phone: "+1 (555) 123-4567",
//     },
//     {
//       id: "USER-002",
//       name: "Sarah Johnson",
//       email: "sarah.johnson@company.com",
//       role: "Editor",
//       department: "Environmental",
//       joinDate: "2023-03-20",
//       lastActive: "1 day ago",
//       status: "Active",
//       phone: "+1 (555) 234-5678",
//     },
//     {
//       id: "USER-003",
//       name: "Mike Wilson",
//       email: "mike.wilson@company.com",
//       role: "Viewer",
//       department: "Operations",
//       joinDate: "2023-06-10",
//       lastActive: "3 days ago",
//       status: "Active",
//       phone: "+1 (555) 345-6789",
//     },
//     {
//       id: "USER-004",
//       name: "Emma Davis",
//       email: "emma.davis@company.com",
//       role: "Editor",
//       department: "Compliance",
//       joinDate: "2023-08-05",
//       lastActive: "5 hours ago",
//       status: "Active",
//       phone: "+1 (555) 456-7890",
//     },
//     {
//       id: "USER-005",
//       name: "David Brown",
//       email: "david.brown@company.com",
//       role: "Viewer",
//       department: "Fleet",
//       joinDate: "2023-11-12",
//       lastActive: "1 week ago",
//       status: "Inactive",
//       phone: "+1 (555) 567-8901",
//     },
//     {
//       id: "USER-006",
//       name: "Lisa Anderson",
//       email: "lisa.anderson@company.com",
//       role: "Editor",
//       department: "Analytics",
//       joinDate: "2024-01-08",
//       lastActive: "Never",
//       status: "Pending",
//     },
//   ];

//   // Mock activity logs
//   const activityLogs = [
//     {
//       id: "LOG-001",
//       userId: "USER-001",
//       action: "Updated asset verification",
//       target: "Solar Farm #3",
//       timestamp: "2024-01-22 14:30",
//       type: "edit",
//     },
//     {
//       id: "LOG-002",
//       userId: "USER-002",
//       action: "Generated compliance report",
//       target: "EU ETS Q4 Report",
//       timestamp: "2024-01-22 13:15",
//       type: "create",
//     },
//     {
//       id: "LOG-003",
//       userId: "USER-004",
//       action: "Viewed team dashboard",
//       target: "Dashboard Overview",
//       timestamp: "2024-01-22 12:45",
//       type: "view",
//     },
//     {
//       id: "LOG-004",
//       userId: "USER-003",
//       action: "Logged into system",
//       target: "System Login",
//       timestamp: "2024-01-22 09:20",
//       type: "login",
//     },
//     {
//       id: "LOG-005",
//       userId: "USER-001",
//       action: "Deleted old asset record",
//       target: "EV-OLD-001",
//       timestamp: "2024-01-21 16:00",
//       type: "delete",
//     },
//   ];

//   // Filter team members
//   const filteredMembers = teamMembers.filter((member) => {
//     const matchesSearch =
//       member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       member.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesRole = roleFilter === "all" || member.role === roleFilter;
//     return matchesSearch && matchesRole;
//   });

//   const getRoleColor = (role) => {
//     switch (role) {
//       case "Admin":
//         return "badge-red";
//       case "Editor":
//         return "badge-blue";
//       case "Viewer":
//         return "badge-green";
//       default:
//         return "badge-gray";
//     }
//   };

//   const getRoleIcon = (role) => {
//     switch (role) {
//       case "Admin":
//         return CrownIcon;
//       case "Editor":
//         return EditIcon;
//       case "Viewer":
//         return EyeIcon;
//       default:
//         return UserIcon;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active":
//         return "badge-green";
//       case "Inactive":
//         return "badge-gray";
//       case "Pending":
//         return "badge-yellow";
//       default:
//         return "badge-gray";
//     }
//   };

//   const getActivityIcon = (type) => {
//     switch (type) {
//       case "create":
//         return CheckCircleIcon;
//       case "edit":
//         return EditIcon;
//       case "delete":
//         return Trash2Icon;
//       case "view":
//         return EyeIcon;
//       case "login":
//         return UserIcon;
//       default:
//         return ActivityIcon;
//     }
//   };

//   const handleViewMember = (member) => {
//     setSelectedMember(member);
//     setShowMemberDetails(true);
//   };

//   const handlePromoteRole = (memberId, newRole) => {
//     console.log(`Promoting member ${memberId} to ${newRole}`);
//   };

//   const handleRemoveMember = (memberId) => {
//     console.log(`Removing member ${memberId}`);
//   };

//   const roleStats = {
//     admin: teamMembers.filter((m) => m.role === "Admin").length,
//     editor: teamMembers.filter((m) => m.role === "Editor").length,
//     viewer: teamMembers.filter((m) => m.role === "Viewer").length,
//     active: teamMembers.filter((m) => m.status === "Active").length,
//     pending: teamMembers.filter((m) => m.status === "Pending").length,
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
//           <h1 className="text-3xl font-bold">Team Management</h1>
//           <p className="text-secondary mt-1">
//             Manage team members, roles, and permissions
//           </p>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Button variant="outline">
//             <SettingsIcon className="w-4 h-4 mr-2" />
//             Role Settings
//           </Button>
//           <Button onClick={() => setShowInviteModal(true)}>
//             <UserPlusIcon className="w-4 h-4 mr-2" />
//             Invite Member
//           </Button>
//         </div>
//       </div>

//       {/* Team Statistics */}
//       <div className="grid-1 md-grid-5">
//         {[
//           { value: teamMembers.length, label: "Total Members", color: "text" },
//           { value: roleStats.admin, label: "Admins", color: "text-red-600" },
//           { value: roleStats.editor, label: "Editors", color: "text-blue-600" },
//           { value: roleStats.viewer, label: "Viewers", color: "text-green-600" },
//           { value: roleStats.pending, label: "Pending", color: "text-yellow-600" },
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

//       {/* Search and Filters */}
//       <Card>
//         <CardContent className="p-4">
//           <div className="flex items-center space-x-4">
//             <div className="flex-1">
//               <Input
//                 placeholder="Search members by name or email..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <select
//               value={roleFilter}
//               onChange={(e) => setRoleFilter(e.target.value)}
//               className="select"
//             >
//               <option value="all">All Roles</option>
//               <option value="Admin">Admin</option>
//               <option value="Editor">Editor</option>
//               <option value="Viewer">Viewer</option>
//             </select>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="grid-1 lg-grid-2">
//         {/* Team Members */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Team Members</CardTitle>
//             <CardDescription>
//               Manage team member roles and permissions
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {filteredMembers.map((member, index) => {
//                 const RoleIcon = getRoleIcon(member.role);
//                 return (
//                   <motion.div
//                     key={member.id}
//                     className="flex items-center space-x-4 p-3 rounded-lg"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     whileHover={{ backgroundColor: "var(--color-gray-50)" }}
//                   >
//                     <Avatar>
//                       <AvatarImage src={member.avatar} />
//                       <AvatarFallback>
//                         {member.name
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center justify-between">
//                         <p className="text-sm font-medium truncate">
//                           {member.name}
//                         </p>
//                         <Badge className={getStatusColor(member.status)}>
//                           {member.status}
//                         </Badge>
//                       </div>
//                       <p className="text-sm text-secondary truncate">
//                         {member.email}
//                       </p>
//                       <div className="flex items-center space-x-2 mt-1">
//                         <Badge className={getRoleColor(member.role)}>
//                           <RoleIcon className="w-3 h-3 mr-1" />
//                           {member.role}
//                         </Badge>
//                         <span className="text-xs text-secondary">
//                           {member.department}
//                         </span>
//                       </div>
//                     </div>
//                     <SimpleDropdown
//                       trigger={
//                         <Button variant="ghost" className="button-sm">
//                           <MoreVerticalIcon className="w-4 h-4" />
//                         </Button>
//                       }
//                       align="end"
//                     >
//                       <DropdownItem onClick={() => handleViewMember(member)}>
//                         <UserIcon className="w-4 h-4 mr-2" />
//                         View Profile
//                       </DropdownItem>
//                       <DropdownItem
//                         onClick={() =>
//                           handlePromoteRole(
//                             member.id,
//                             member.role === "Viewer" ? "Editor" : "Admin",
//                           )
//                         }
//                       >
//                         <ShieldIcon className="w-4 h-4 mr-2" />
//                         {member.role === "Admin" ? "Demote" : "Promote"}
//                       </DropdownItem>
//                       <DropdownItem
//                         onClick={() => handleRemoveMember(member.id)}
//                         className="text-red"
//                       >
//                         <Trash2Icon className="w-4 h-4 mr-2" />
//                         Remove
//                       </DropdownItem>
//                     </SimpleDropdown>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Activity Logs */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Activity</CardTitle>
//             <CardDescription>
//               Team member actions and system events
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ScrollArea className="scroll-area-96">
//               <div className="space-y-3">
//                 {activityLogs.map((log, index) => {
//                   const ActivityIcon = getActivityIcon(log.type);
//                   const member = teamMembers.find((m) => m.id === log.userId);
//                   return (
//                     <motion.div
//                       key={log.id}
//                       className="flex items-start space-x-3 p-3 rounded-lg"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3, delay: index * 0.1 }}
//                       whileHover={{ backgroundColor: "var(--color-gray-50)" }}
//                     >
//                       <div
//                         className={`p-2 rounded-lg ${
//                           log.type === "create"
//                             ? "bg-green-100"
//                             : log.type === "edit"
//                             ? "bg-blue-100"
//                             : log.type === "delete"
//                             ? "bg-red-100"
//                             : log.type === "view"
//                             ? "bg-gray-100"
//                             : "bg-purple-100"
//                         }`}
//                       >
//                         <ActivityIcon
//                           className={`w-4 h-4 ${
//                             log.type === "create"
//                               ? "text-green-600"
//                               : log.type === "edit"
//                               ? "text-blue-600"
//                               : log.type === "delete"
//                               ? "text-red-600"
//                               : log.type === "view"
//                               ? "text-gray-600"
//                               : "text-purple"
//                           }`}
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center justify-between">
//                           <p className="text-sm font-medium">{member?.name}</p>
//                           <span className="text-xs text-secondary">
//                             {log.timestamp}
//                           </span>
//                         </div>
//                         <p className="text-sm text-secondary mt-1">
//                           {log.action}
//                         </p>
//                         <p className="text-xs text-secondary mt-1">
//                           Target: {log.target}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </ScrollArea>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Role Permissions Table */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Role Permissions</CardTitle>
//           <CardDescription>
//             Overview of permissions for each role
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Permission</TableHead>
//                 <TableHead>Admin</TableHead>
//                 <TableHead>Editor</TableHead>
//                 <TableHead>Viewer</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {[
//                 {
//                   permission: "View Dashboard",
//                   admin: true,
//                   editor: true,
//                   viewer: true,
//                 },
//                 {
//                   permission: "Edit Assets",
//                   admin: true,
//                   editor: true,
//                   viewer: false,
//                 },
//                 {
//                   permission: "Generate Reports",
//                   admin: true,
//                   editor: true,
//                   viewer: false,
//                 },
//                 {
//                   permission: "Manage Team",
//                   admin: true,
//                   editor: false,
//                   viewer: false,
//                 },
//               ].map((row, index) => (
//                 <motion.tr
//                   key={index}
//                   className="table-row"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   <TableCell className="font-medium">
//                     {row.permission}
//                   </TableCell>
//                   <TableCell>
//                     {row.admin ? (
//                       <CheckCircleIcon className="w-4 h-4 text-green-600" />
//                     ) : (
//                       <AlertTriangleIcon className="w-4 h-4 text-red-600" />
//                     )}
//                   </TableCell>
//                   <TableCell>
//                     {row.editor ? (
//                       <CheckCircleIcon className="w-4 h-4 text-green-600" />
//                     ) : (
//                       <AlertTriangleIcon className="w-4 h-4 text-red-600" />
//                     )}
//                   </TableCell>
//                   <TableCell>
//                     {row.viewer ? (
//                       <CheckCircleIcon className="w-4 h-4 text-green-600" />
//                     ) : (
//                       <AlertTriangleIcon className="w-4 h-4 text-red-600" />
//                     )}
//                   </TableCell>
//                 </motion.tr>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Invite Member Modal */}
//       <Dialog open={showInviteModal} onOpenChange={setShowInviteModal}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Invite Team Member</DialogTitle>
//             <DialogDescription>
//               Send an invitation to join your organization
//             </DialogDescription>
//           </DialogHeader>
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div>
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter email address"
//               />
//             </div>
//             <div>
//               <Label htmlFor="role">Role</Label>
//               <select id="role" className="select">
//                 <option value="">Select role</option>
//                 <option value="viewer">Viewer</option>
//                 <option value="editor">Editor</option>
//                 <option value="admin">Admin</option>
//               </select>
//             </div>
//             <div>
//               <Label htmlFor="department">Department</Label>
//               <select id="department" className="select">
//                 <option value="">Select department</option>
//                 <option value="sustainability">Sustainability</option>
//                 <option value="environmental">Environmental</option>
//                 <option value="operations">Operations</option>
//                 <option value="compliance">Compliance</option>
//                 <option value="fleet">Fleet</option>
//                 <option value="analytics">Analytics</option>
//               </select>
//             </div>
//             <div className="flex justify-end space-x-2">
//               <Button
//                 variant="outline"
//                 onClick={() => setShowInviteModal(false)}
//               >
//                 Cancel
//               </Button>
//               <Button>Send Invitation</Button>
//             </div>
//           </motion.div>
//         </DialogContent>
//       </Dialog>

//       {/* Member Details Modal */}
//       <Dialog open={showMemberDetails} onOpenChange={setShowMemberDetails}>
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle>Member Profile</DialogTitle>
//             <DialogDescription>
//               Detailed information about team member
//             </DialogDescription>
//           </DialogHeader>
//           {selectedMember && (
//             <motion.div
//               className="space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex items-center space-x-4">
//                 <Avatar className="avatar-lg">
//                   <AvatarImage src={selectedMember.avatar} />
//                   <AvatarFallback className="text-lg">
//                     {selectedMember.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <h3 className="text-xl font-semibold">
//                     {selectedMember.name}
//                   </h3>
//                   <p className="text-secondary">{selectedMember.email}</p>
//                   <div className="flex items-center space-x-2 mt-2">
//                     <Badge className={getRoleColor(selectedMember.role)}>
//                       {selectedMember.role}
//                     </Badge>
//                     <Badge className={getStatusColor(selectedMember.status)}>
//                       {selectedMember.status}
//                     </Badge>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid-2">
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Department
//                   </Label>
//                   <p className="text-lg">{selectedMember.department}</p>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Join Date
//                   </Label>
//                   <p className="text-lg">{selectedMember.joinDate}</p>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Phone
//                   </Label>
//                   <p className="text-lg">{selectedMember.phone || "N/A"}</p>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-medium text-secondary">
//                     Last Active
//                   </Label>
//                   <p className="text-lg">{selectedMember.lastActive}</p>
//                 </div>
//               </div>

//               <div className="flex justify-end space-x-2 pt-4 border-t">
//                 <Button variant="outline">
//                   <MailIcon className="w-4 h-4 mr-2" />
//                   Send Email
//                 </Button>
//                 <Button variant="outline">
//                   <EditIcon className="w-4 h-4 mr-2" />
//                   Edit Profile
//                 </Button>
//               </div>
//             </motion.div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </motion.div>
//   );
// };

// export default TeamManagement;



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
  Avatar,
  AvatarFallback,
  AvatarImage,
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
  ScrollArea,
} from "./basic-ui";

// SVG Icons

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
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
  </svg>
);

const UserPlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6m3-3h-6" />
  </svg>
);

const CrownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
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

const ShieldIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Trash2Icon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
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

const ActivityIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const MoreVerticalIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

// Simple Dropdown Component
const SimpleDropdown = ({ trigger, children, align = "left" }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="dropdown-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <motion.div
            className={`dropdown-content ${align === "end" ? "dropdown-content-end" : ""}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { onClick: () => setOpen(false) }),
            )}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const DropdownItem = ({ children, onClick, className }) => (
  <motion.div
    className={`dropdown-item ${className || ""}`}
    onClick={onClick}
    whileHover={{ backgroundColor: "var(--color-card-bg-hover)" }}
  >
    {children}
  </motion.div>
);

const TeamManagement = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showMemberDetails, setShowMemberDetails] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Mock team members data
  const teamMembers = [
    {
      id: "USER-001",
      name: "John Smith",
      email: "john.smith@company.com",
      role: "Admin",
      department: "Sustainability",
      joinDate: "2023-01-15",
      lastActive: "2 hours ago",
      status: "Active",
      phone: "+1 (555) 123-4567",
    },
    {
      id: "USER-002",
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      role: "Editor",
      department: "Environmental",
      joinDate: "2023-03-20",
      lastActive: "1 day ago",
      status: "Active",
      phone: "+1 (555) 234-5678",
    },
    {
      id: "USER-003",
      name: "Mike Wilson",
      email: "mike.wilson@company.com",
      role: "Viewer",
      department: "Operations",
      joinDate: "2023-06-10",
      lastActive: "3 days ago",
      status: "Active",
      phone: "+1 (555) 345-6789",
    },
    {
      id: "USER-004",
      name: "Emma Davis",
      email: "emma.davis@company.com",
      role: "Editor",
      department: "Compliance",
      joinDate: "2023-08-05",
      lastActive: "5 hours ago",
      status: "Active",
      phone: "+1 (555) 456-7890",
    },
    {
      id: "USER-005",
      name: "David Brown",
      email: "david.brown@company.com",
      role: "Viewer",
      department: "Fleet",
      joinDate: "2023-11-12",
      lastActive: "1 week ago",
      status: "Inactive",
      phone: "+1 (555) 567-8901",
    },
    {
      id: "USER-006",
      name: "Lisa Anderson",
      email: "lisa.anderson@company.com",
      role: "Editor",
      department: "Analytics",
      joinDate: "2024-01-08",
      lastActive: "Never",
      status: "Pending",
    },
  ];

  // Mock activity logs
  const activityLogs = [
    {
      id: "LOG-001",
      userId: "USER-001",
      action: "Updated asset verification",
      target: "Solar Farm #3",
      timestamp: "2024-01-22 14:30",
      type: "edit",
    },
    {
      id: "LOG-002",
      userId: "USER-002",
      action: "Generated compliance report",
      target: "EU ETS Q4 Report",
      timestamp: "2024-01-22 13:15",
      type: "create",
    },
    {
      id: "LOG-003",
      userId: "USER-004",
      action: "Viewed team dashboard",
      target: "Dashboard Overview",
      timestamp: "2024-01-22 12:45",
      type: "view",
    },
    {
      id: "LOG-004",
      userId: "USER-003",
      action: "Logged into system",
      target: "System Login",
      timestamp: "2024-01-22 09:20",
      type: "login",
    },
    {
      id: "LOG-005",
      userId: "USER-001",
      action: "Deleted old asset record",
      target: "EV-OLD-001",
      timestamp: "2024-01-21 16:00",
      type: "delete",
    },
  ];

  // Filter team members
  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "badge-red";
      case "Editor":
        return "badge-blue";
      case "Viewer":
        return "badge-green";
      default:
        return "badge-gray";
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "Admin":
        return CrownIcon;
      case "Editor":
        return EditIcon;
      case "Viewer":
        return EyeIcon;
      default:
        return UserIcon;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "badge-green";
      case "Inactive":
        return "badge-gray";
      case "Pending":
        return "badge-yellow";
      default:
        return "badge-gray";
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "create":
        return CheckCircleIcon;
      case "edit":
        return EditIcon;
      case "delete":
        return Trash2Icon;
      case "view":
        return EyeIcon;
      case "login":
        return UserIcon;
      default:
        return ActivityIcon;
    }
  };

  const handleViewMember = (member) => {
    setSelectedMember(member);
    setShowMemberDetails(true);
  };

  const handlePromoteRole = (memberId, newRole) => {
    console.log(`Promoting member ${memberId} to ${newRole}`);
  };

  const handleRemoveMember = (memberId) => {
    console.log(`Removing member ${memberId}`);
  };

  const roleStats = {
    admin: teamMembers.filter((m) => m.role === "Admin").length,
    editor: teamMembers.filter((m) => m.role === "Editor").length,
    viewer: teamMembers.filter((m) => m.role === "Viewer").length,
    active: teamMembers.filter((m) => m.status === "Active").length,
    pending: teamMembers.filter((m) => m.status === "Pending").length,
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
          <h1 className="text-3xl font-bold">Team Management</h1>
          <p className="text-secondary mt-1">
            Manage team members, roles, and permissions
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <SettingsIcon className="w-4 h-4 mr-2" />
            Role Settings
          </Button>
          <Button onClick={() => setShowInviteModal(true)}>
            <UserPlusIcon className="w-4 h-4 mr-2" />
            Invite Member
          </Button>
        </div>
      </div>

      {/* Team Statistics */}
      <div className="grid-1 md-grid-5">
        {[
          { value: teamMembers.length, label: "Total Members", color: "text" },
          { value: roleStats.admin, label: "Admins", color: "text-red-600" },
          { value: roleStats.editor, label: "Editors", color: "text-blue-600" },
          {
            value: roleStats.viewer,
            label: "Viewers",
            color: "text-green-600",
          },
          {
            value: roleStats.pending,
            label: "Pending",
            color: "text-yellow-600",
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

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Search members by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="select"
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <div className="grid-1 lg-grid-2">
        {/* Team Members */}
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Manage team member roles and permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMembers.map((member, index) => {
                const RoleIcon = getRoleIcon(member.role);
                return (
                  <motion.div
                    key={member.id}
                    className="flex items-center space-x-4 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ backgroundColor: "var(--color-gray-50)" }}
                  >
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">
                          {member.name}
                        </p>
                        <Badge className={getStatusColor(member.status)}>
                          {member.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-secondary truncate">
                        {member.email}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getRoleColor(member.role)}>
                          <RoleIcon className="w-3 h-3 mr-1" />
                          {member.role}
                        </Badge>
                        <span className="text-xs text-secondary">
                          {member.department}
                        </span>
                      </div>
                    </div>
                    <SimpleDropdown
                      trigger={
                        <Button variant="ghost" className="button-sm">
                          <MoreVerticalIcon className="w-4 h-4" />
                        </Button>
                      }
                      align="end"
                    >
                      <DropdownItem onClick={() => handleViewMember(member)}>
                        <UserIcon className="w-4 h-4 mr-2" />
                        View Profile
                      </DropdownItem>
                      <DropdownItem
                        onClick={() =>
                          handlePromoteRole(
                            member.id,
                            member.role === "Viewer" ? "Editor" : "Admin",
                          )
                        }
                      >
                        <ShieldIcon className="w-4 h-4 mr-2" />
                        {member.role === "Admin" ? "Demote" : "Promote"}
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleRemoveMember(member.id)}
                        className="text-red"
                      >
                        <Trash2Icon className="w-4 h-4 mr-2" />
                        Remove
                      </DropdownItem>
                    </SimpleDropdown>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Activity Logs */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Team member actions and system events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="scroll-area-96">
              <div className="space-y-3">
                {activityLogs.map((log, index) => {
                  const ActivityIcon = getActivityIcon(log.type);
                  const member = teamMembers.find((m) => m.id === log.userId);
                  return (
                    <motion.div
                      key={log.id}
                      className="flex items-start space-x-3 p-3 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ backgroundColor: "var(--color-gray-50)" }}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          log.type === "create"
                            ? "bg-green-100"
                            : log.type === "edit"
                              ? "bg-blue-100"
                              : log.type === "delete"
                                ? "bg-red-100"
                                : log.type === "view"
                                  ? "bg-gray-100"
                                  : "bg-purple-100"
                        }`}
                      >
                        <ActivityIcon
                          className={`w-4 h-4 ${
                            log.type === "create"
                              ? "text-green-600"
                              : log.type === "edit"
                                ? "text-blue-600"
                                : log.type === "delete"
                                  ? "text-red-600"
                                  : log.type === "view"
                                    ? "text-gray-600"
                                    : "text-purple"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{member?.name}</p>
                          <span className="text-xs text-secondary">
                            {log.timestamp}
                          </span>
                        </div>
                        <p className="text-sm text-secondary mt-1">
                          {log.action}
                        </p>
                        <p className="text-xs text-secondary mt-1">
                          Target: {log.target}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Role Permissions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Role Permissions</CardTitle>
          <CardDescription>
            Overview of permissions for each role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Permission</TableHead>
                <TableHead>Admin</TableHead>
                <TableHead>Editor</TableHead>
                <TableHead>Viewer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  permission: "View Dashboard",
                  admin: true,
                  editor: true,
                  viewer: true,
                },
                {
                  permission: "Edit Assets",
                  admin: true,
                  editor: true,
                  viewer: false,
                },
                {
                  permission: "Generate Reports",
                  admin: true,
                  editor: true,
                  viewer: false,
                },
                {
                  permission: "Manage Team",
                  admin: true,
                  editor: false,
                  viewer: false,
                },
              ].map((row, index) => (
                <motion.tr
                  key={index}
                  className="table-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <TableCell className="font-medium">
                    {row.permission}
                  </TableCell>
                  <TableCell>
                    {row.admin ? (
                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    ) : (
                      <AlertTriangleIcon className="w-4 h-4 text-red-600" />
                    )}
                  </TableCell>
                  <TableCell>
                    {row.editor ? (
                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    ) : (
                      <AlertTriangleIcon className="w-4 h-4 text-red-600" />
                    )}
                  </TableCell>
                  <TableCell>
                    {row.viewer ? (
                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    ) : (
                      <AlertTriangleIcon className="w-4 h-4 text-red-600" />
                    )}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Invite Member Modal */}
      <Dialog open={showInviteModal} onOpenChange={setShowInviteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite Team Member</DialogTitle>
            <DialogDescription>
              Send an invitation to join your organization
            </DialogDescription>
          </DialogHeader>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <select id="role" className="select">
                <option value="">Select role</option>
                <option value="viewer">Viewer</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <select id="department" className="select">
                <option value="">Select department</option>
                <option value="sustainability">Sustainability</option>
                <option value="environmental">Environmental</option>
                <option value="operations">Operations</option>
                <option value="compliance">Compliance</option>
                <option value="fleet">Fleet</option>
                <option value="analytics">Analytics</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setShowInviteModal(false)}
              >
                Cancel
              </Button>
              <Button>Send Invitation</Button>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Member Details Modal */}
      <Dialog open={showMemberDetails} onOpenChange={setShowMemberDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Member Profile</DialogTitle>
            <DialogDescription>
              Detailed information about team member
            </DialogDescription>
          </DialogHeader>
          {selectedMember && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <Avatar className="avatar-lg">
                  <AvatarImage src={selectedMember.avatar} />
                  <AvatarFallback className="text-lg">
                    {selectedMember.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">
                    {selectedMember.name}
                  </h3>
                  <p className="text-secondary">{selectedMember.email}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge className={getRoleColor(selectedMember.role)}>
                      {selectedMember.role}
                    </Badge>
                    <Badge className={getStatusColor(selectedMember.status)}>
                      {selectedMember.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid-2">
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Department
                  </Label>
                  <p className="text-lg">{selectedMember.department}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Join Date
                  </Label>
                  <p className="text-lg">{selectedMember.joinDate}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Phone
                  </Label>
                  <p className="text-lg">{selectedMember.phone || "N/A"}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">
                    Last Active
                  </Label>
                  <p className="text-lg">{selectedMember.lastActive}</p>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Button variant="outline">
                  <MailIcon className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline">
                  <EditIcon className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default TeamManagement;