"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  FaUsers,
  FaUserPlus,
  FaCrown,
  FaEye,
  FaEdit,
  FaShieldAlt,
  FaUser,
  FaEnvelope,
  FaCog,
  FaTrash,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChartLine,
  FaEllipsisV,
} from "react-icons/fa"
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
}  from "./basic-ui";
import "./TeamManagement.css"


// Simple Dropdown Component
const SimpleDropdown = ({ trigger, children, align = "left" }) => {
  const [open, setOpen] = useState(false)

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
            {React.Children.map(children, (child) => React.cloneElement(child, { onClick: () => setOpen(false) }))}
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

const DropdownItem = ({ children, onClick, className }) => (
  <motion.div
    className={`dropdown-item ${className || ""}`}
    onClick={onClick}
    whileHover={{ backgroundColor: "var(--color-card-bg-hover)" }}
  >
    {children}
  </motion.div>
)

const TeamManagement = () => {
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [showMemberDetails, setShowMemberDetails] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

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
  ]

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
  ]

  // Filter team members
  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "all" || member.role === roleFilter
    return matchesSearch && matchesRole
  })

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "badge-red"
      case "Editor":
        return "badge-blue"
      case "Viewer":
        return "badge-green"
      default:
        return "badge-gray"
    }
  }

  const getRoleIcon = (role) => {
    switch (role) {
      case "Admin":
        return FaCrown
      case "Editor":
        return FaEdit
      case "Viewer":
        return FaEye
      default:
        return FaUser
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "badge-green"
      case "Inactive":
        return "badge-gray"
      case "Pending":
        return "badge-yellow"
      default:
        return "badge-gray"
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "create":
        return FaCheckCircle
      case "edit":
        return FaEdit
      case "delete":
        return FaTrash
      case "view":
        return FaEye
      case "login":
        return FaUser
      default:
        return FaChartLine
    }
  }

  const handleViewMember = (member) => {
    setSelectedMember(member)
    setShowMemberDetails(true)
  }

  const handlePromoteRole = (memberId, newRole) => {
    console.log(`Promoting member ${memberId} to ${newRole}`)
  }

  const handleRemoveMember = (memberId) => {
    console.log(`Removing member ${memberId}`)
  }

  const roleStats = {
    admin: teamMembers.filter((m) => m.role === "Admin").length,
    editor: teamMembers.filter((m) => m.role === "Editor").length,
    viewer: teamMembers.filter((m) => m.role === "Viewer").length,
    active: teamMembers.filter((m) => m.status === "Active").length,
    pending: teamMembers.filter((m) => m.status === "Pending").length,
  }

  return (
    <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Team Management</h1>
          <p className="text-secondary mt-1">Manage team members, roles, and permissions</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <FaCog className="w-4 h-4 mr-2" />
            Role Settings
          </Button>
          <Button onClick={() => setShowInviteModal(true)}>
                            <FaUserPlus size={20} style={{ color: '#3b82f6', marginRight: '8px' }} />
            Invite Member
          </Button>
        </div>
      </div>

      {/* Team Statistics */}
      <div className="grid-5 md-grid-5">
        {[
          {
            value: teamMembers.length,
            label: "Total Members",
            color: "text",
            icon: FaUsers,
            iconColor: "blue",
          },
          {
            value: roleStats.admin,
            label: "Admins",
            color: "text-red-600",
            icon: FaCrown,
            iconColor: "orange",
          },
          {
            value: roleStats.editor,
            label: "Editors",
            color: "text-blue-600",
            icon: FaEdit,
            iconColor: "violet",
          },
          {
            value: roleStats.viewer,
            label: "Viewers",
            color: "text-green-600",
            icon: FaEye,
            iconColor: "sky",
          },
          {
            value: roleStats.pending,
            label: "Pending",
            color: "text-yellow-600",
            icon: FaChartLine,
            iconColor: "orange",
          },
        ].map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="card-stats">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className={`icon ${stat.iconColor}`}>
                      <IconComponent />
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Search and Filters */}
      <div className="filterbar-container">
        <div className="filterbar-row">
          <span className="filterbar-label">Filter</span>
          <div className="filterbar-pills">
            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="filter-pill">
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div className="filterbar-search">
            <Input
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filterbar-search-input"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Team Members - New Innovative Design */}
        <Card className="card-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="icon-container-modern blue">
                  <FaUsers size={24} style={{ color: '#8b5cf6', marginRight: '8px' }} />
                </div>
                <div>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Active team collaboration</CardDescription>
                </div>
              </div>
              <div className="team-stats-mini">
                <span className="stat-bubble active">{roleStats.active}</span>
                <span className="stat-label">Active</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="team-grid">
              {filteredMembers.map((member, index) => {
                const RoleIcon = getRoleIcon(member.role)
                return (
                  <motion.div
                    key={member.id}
                    className="team-member-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="member-header">
                      <div className="avatar-container">
                        <Avatar className="member-avatar">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`status-dot ${member.status.toLowerCase()}`}></div>
                      </div>
                      <div className="member-actions">
                        <SimpleDropdown
                          trigger={
                            <button className="action-button">
                              <FaEllipsisV className="w-4 h-4" />
                            </button>
                          }
                          align="end"
                        >
                          <DropdownItem onClick={() => handleViewMember(member)}>
                            <FaUser size={20} style={{ color: '#10b981', marginRight: '8px' }} />
                            View Profile
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => handlePromoteRole(member.id, member.role === "Viewer" ? "Editor" : "Admin")}
                          >
                            <FaShieldAlt className="w-4 h-4 mr-2" />
                            {member.role === "Admin" ? "Demote" : "Promote"}
                          </DropdownItem>
                          <DropdownItem onClick={() => handleRemoveMember(member.id)} className="text-red">
                            <FaTrash className="w-4 h-4 mr-2" />
                            Remove
                          </DropdownItem>
                        </SimpleDropdown>
                      </div>
                    </div>

                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-email">{member.email}</p>

                      <div className="member-meta">
                        <div className="role-badge-modern">
                          <RoleIcon className="w-3 h-3" />
                          <span>{member.role}</span>
                        </div>
                        <div className="department-tag">{member.department}</div>
                      </div>

                      <div className="member-activity">
                        <span className="activity-text">Last active: {member.lastActive}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity - Timeline Design */}
        <Card className="card-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="icon-container-modern green">
                  <FaChartLine className="mr-2" />
                </div>
                <div>
                  <CardTitle>Activity Timeline</CardTitle>
                  <CardDescription>Real-time team actions</CardDescription>
                </div>
              </div>
              <div className="activity-filter">
                <button className="filter-chip active">All</button>
                <button className="filter-chip">Today</button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="activity-timeline">
              {activityLogs.map((log, index) => {
                const ActivityIconComponent = getActivityIcon(log.type)
                const member = teamMembers.find((m) => m.id === log.userId)
                const iconColor =
                  log.type === "create"
                    ? "green"
                    : log.type === "edit"
                      ? "violet"
                      : log.type === "delete"
                        ? "red"
                        : log.type === "view"
                          ? "sky"
                          : "purple"

                return (
                  <motion.div
                    key={log.id}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="timeline-marker">
                      <div className={`timeline-icon ${iconColor}`}>
                        <ActivityIconComponent />
                      </div>
                      <div className="timeline-line"></div>
                    </div>

                    <div className="timeline-content">
                      <div className="activity-header">
                        <div className="activity-user">
                          <Avatar className="activity-avatar">
                            <AvatarFallback>
                              {member?.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("") || "?"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="user-name">{member?.name}</span>
                            <span className="activity-time">{log.timestamp}</span>
                          </div>
                        </div>
                        <div className={`activity-type-badge ${log.type}`}>{log.type}</div>
                      </div>

                      <div className="activity-details">
                        <p className="activity-action">{log.action}</p>
                        <div className="activity-target">
                          <span className="target-label">Target:</span>
                          <span className="target-value">{log.target}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Role Permissions Table
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FaShieldAlt className="mr-2" />
            Role Permissions
          </CardTitle>
          <CardDescription>Overview of permissions for each role</CardDescription>
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
                  <TableCell className="font-medium">{row.permission}</TableCell>
                  <TableCell>
                    {row.admin ? (
                      <FaCheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <FaExclamationTriangle className="w-4 h-4 text-red-600" />
                    )}
                  </TableCell>
                  <TableCell>
                    {row.editor ? (
                      <FaCheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <FaExclamationTriangle className="w-4 h-4 text-red-600" />
                    )}
                  </TableCell>
                  <TableCell>
                    {row.viewer ? (
                      <FaCheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <FaExclamationTriangle className="w-4 h-4 text-red-600" />
                    )}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card> */}

      {/* Invite Member Modal */}
      <Dialog open={showInviteModal} onOpenChange={setShowInviteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
                              <FaUserPlus size={20} style={{ color: '#f97316', marginRight: '8px' }} />
              Invite Team Member
            </DialogTitle>
            <DialogDescription>Send an invitation to join your organization</DialogDescription>
          </DialogHeader>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter email address" />
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
              <Button variant="outline" onClick={() => setShowInviteModal(false)}>
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
            <DialogTitle className="flex items-center">
                              <FaUser size={20} style={{ color: '#ef4444', marginRight: '8px' }} />
              Member Profile
            </DialogTitle>
            <DialogDescription>Detailed information about team member</DialogDescription>
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
                  <AvatarImage src={selectedMember.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-lg">
                    {selectedMember.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{selectedMember.name}</h3>
                  <p className="text-secondary">{selectedMember.email}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge className={getRoleColor(selectedMember.role)}>{selectedMember.role}</Badge>
                    <Badge className={getStatusColor(selectedMember.status)}>{selectedMember.status}</Badge>
                  </div>
                </div>
              </div>
              <div className="grid-2">
                <div>
                  <Label className="text-sm font-medium text-secondary">Department</Label>
                  <p className="text-lg">{selectedMember.department}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">Join Date</Label>
                  <p className="text-lg">{selectedMember.joinDate}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">Phone</Label>
                  <p className="text-lg">{selectedMember.phone || "N/A"}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">Last Active</Label>
                  <p className="text-lg">{selectedMember.lastActive}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Button variant="outline">
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline">
                  <FaEdit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

export default TeamManagement
