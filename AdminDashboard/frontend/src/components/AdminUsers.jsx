import React, { useState } from "react";
import { cn } from "../lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "./basic-ui";
import {
  Search,
  Filter,
  UserPlus,
  MoreHorizontal,
  Eye,
  Ban,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Building,
  Shield,
  AlertTriangle,
  Download,
  Upload,
} from "lucide-react";

// Mock user data
const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    role: "Individual",
    status: "Active",
    joinDate: "2024-01-15",
    location: "New York, USA",
    phone: "+1 (555) 123-4567",
    avatar: null,
    credits: 1250,
    projects: 3,
    verified: true,
    lastLogin: "2024-06-15 14:30",
    registrationIP: "192.168.1.100",
    kycStatus: "Approved",
  },
  {
    id: 2,
    name: "ABC Corporation",
    email: "admin@abccorp.com",
    role: "Organization",
    status: "Pending",
    joinDate: "2024-06-10",
    location: "California, USA",
    phone: "+1 (555) 987-6543",
    avatar: null,
    credits: 0,
    projects: 0,
    verified: false,
    lastLogin: "Never",
    registrationIP: "203.45.67.89",
    kycStatus: "Under Review",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    role: "Individual",
    status: "Suspended",
    joinDate: "2024-03-20",
    location: "London, UK",
    phone: "+44 20 1234 5678",
    avatar: null,
    credits: 780,
    projects: 2,
    verified: true,
    lastLogin: "2024-06-12 09:15",
    registrationIP: "45.123.89.45",
    kycStatus: "Rejected",
  },
  {
    id: 4,
    name: "GreenTech Solutions",
    email: "contact@greentech.com",
    role: "Organization",
    status: "Active",
    joinDate: "2024-02-28",
    location: "Berlin, Germany",
    phone: "+49 30 12345678",
    avatar: null,
    credits: 3450,
    projects: 8,
    verified: true,
    lastLogin: "2024-06-15 11:45",
    registrationIP: "78.90.123.45",
    kycStatus: "Approved",
  },
  {
    id: 5,
    name: "Michael Chen",
    email: "m.chen@email.com",
    role: "Admin",
    status: "Active",
    joinDate: "2024-01-01",
    location: "Singapore",
    phone: "+65 8123 4567",
    avatar: null,
    credits: 0,
    projects: 0,
    verified: true,
    lastLogin: "2024-06-15 16:20",
    registrationIP: "139.180.123.45",
    kycStatus: "Approved",
  },
];

const pendingApprovals = [
  {
    id: 6,
    name: "EcoFarm Ltd",
    email: "info@ecofarm.com",
    type: "Organization",
    submittedDate: "2024-06-14",
    documents: ["Business License", "Environmental Certificate", "Tax ID"],
    reason: "New organization registration",
  },
  {
    id: 7,
    name: "David Wilson",
    email: "d.wilson@email.com",
    type: "Individual",
    submittedDate: "2024-06-13",
    documents: ["Identity Verification", "Address Proof"],
    reason: "Account verification",
  },
];

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "Admin":
        return <Shield className="h-4 w-4" />;
      case "Organization":
        return <Building className="h-4 w-4" />;
      default:
        return <div className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-600">
            Manage user accounts, roles, and permissions
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import Users
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Pending Approvals */}
      <Card className="border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <span>Pending Approvals</span>
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-800"
            >
              {pendingApprovals.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingApprovals.map((approval) => (
              <div
                key={approval.id}
                className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {approval.name}
                      </h4>
                      <p className="text-sm text-gray-600">{approval.email}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {approval.reason} • Submitted {approval.submittedDate}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {approval.documents.map((doc, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {doc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    Review
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive">
                    <XCircle className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span>Filter Users</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="Individual">Individual</SelectItem>
                <SelectItem value="Organization">Organization</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Filtered
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>KYC</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Projects</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getRoleIcon(user.role)}
                        <span>{user.role}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          user.kycStatus === "Approved"
                            ? "bg-green-100 text-green-800"
                            : user.kycStatus === "Under Review"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {user.kycStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.credits.toLocaleString()}</TableCell>
                    <TableCell>{user.projects}</TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>
                      <span className="text-sm">{user.lastLogin}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedUser(user)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>
                                User Details: {user.name}
                              </DialogTitle>
                            </DialogHeader>
                            {selectedUser && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Email
                                      </label>
                                      <div className="flex items-center space-x-2 mt-1">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <span>{selectedUser.email}</span>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Phone
                                      </label>
                                      <div className="flex items-center space-x-2 mt-1">
                                        <Phone className="h-4 w-4 text-gray-400" />
                                        <span>{selectedUser.phone}</span>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Location
                                      </label>
                                      <div className="flex items-center space-x-2 mt-1">
                                        <MapPin className="h-4 w-4 text-gray-400" />
                                        <span>{selectedUser.location}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Join Date
                                      </label>
                                      <div className="flex items-center space-x-2 mt-1">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        <span>{selectedUser.joinDate}</span>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Registration IP
                                      </label>
                                      <div className="mt-1">
                                        <span className="font-mono text-sm">
                                          {selectedUser.registrationIP}
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Credits & Projects
                                      </label>
                                      <div className="mt-1 space-y-1">
                                        <div>
                                          {selectedUser.credits} credits earned
                                        </div>
                                        <div>
                                          {selectedUser.projects} projects
                                          active
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-end space-x-2 pt-4 border-t">
                                  <Button variant="outline">Edit User</Button>
                                  <Button variant="outline">
                                    Send Message
                                  </Button>
                                  <Button variant="outline">
                                    View Activity
                                  </Button>
                                  <Button variant="destructive">
                                    <Ban className="h-4 w-4 mr-2" />
                                    Suspend User
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          className={
                            user.status === "Suspended"
                              ? "text-green-600 border-green-600"
                              : "text-red-600 border-red-600"
                          }
                        >
                          {user.status === "Suspended" ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Ban className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;
