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
  Textarea,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "./basic-ui";
import {
  Search,
  Filter,
  HeadphonesIcon,
  Eye,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  Mail,
  Phone,
  Calendar,
  Tag,
  FileText,
  Send,
  Archive,
  Star,
} from "lucide-react";

// Mock support tickets data
const supportTickets = [
  {
    id: "TICK-2024-001",
    title: "Cannot verify EV carbon credits",
    customer: "John Smith",
    email: "john.smith@email.com",
    priority: "high",
    status: "Open",
    category: "Verification",
    createdDate: "2024-06-15",
    lastUpdate: "2024-06-15 14:30",
    assignedTo: "Sarah Admin",
    description:
      "I submitted my Tesla Model 3 verification documents 3 days ago but haven't received any confirmation. The status still shows 'Under Review'.",
    messages: [
      {
        id: 1,
        sender: "John Smith",
        type: "customer",
        message:
          "I submitted my Tesla Model 3 verification documents 3 days ago but haven't received any confirmation.",
        timestamp: "2024-06-15 10:30",
      },
      {
        id: 2,
        sender: "Sarah Admin",
        type: "admin",
        message:
          "Thank you for contacting us. I'm reviewing your submission now. Could you please provide your vehicle VIN number?",
        timestamp: "2024-06-15 14:30",
      },
    ],
    tags: ["verification", "ev", "pending"],
  },
  {
    id: "TICK-2024-002",
    title: "Marketplace transaction failed",
    customer: "ABC Corporation",
    email: "admin@abccorp.com",
    priority: "medium",
    status: "In Progress",
    category: "Marketplace",
    createdDate: "2024-06-14",
    lastUpdate: "2024-06-15 09:15",
    assignedTo: "Mike Admin",
    description:
      "Payment was processed but carbon credits were not transferred to our account. Transaction ID: TX-789456",
    messages: [
      {
        id: 1,
        sender: "ABC Corporation",
        type: "customer",
        message:
          "Payment was processed but carbon credits were not transferred to our account. Transaction ID: TX-789456",
        timestamp: "2024-06-14 16:20",
      },
      {
        id: 2,
        sender: "Mike Admin",
        type: "admin",
        message:
          "I found the issue - there was a delay in the blockchain confirmation. Credits have been transferred now.",
        timestamp: "2024-06-15 09:15",
      },
    ],
    tags: ["marketplace", "payment", "blockchain"],
  },
  {
    id: "TICK-2024-003",
    title: "Account access issues",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    priority: "low",
    status: "Resolved",
    category: "Account",
    createdDate: "2024-06-13",
    lastUpdate: "2024-06-14 11:45",
    assignedTo: "Admin Team",
    description:
      "Unable to login after password reset. Getting 'invalid credentials' error.",
    messages: [
      {
        id: 1,
        sender: "Sarah Johnson",
        type: "customer",
        message:
          "Unable to login after password reset. Getting 'invalid credentials' error.",
        timestamp: "2024-06-13 14:20",
      },
      {
        id: 2,
        sender: "Admin Team",
        type: "admin",
        message:
          "I've reset your password manually. Please check your email for the new temporary password.",
        timestamp: "2024-06-14 11:45",
      },
    ],
    tags: ["account", "password", "login"],
  },
  {
    id: "TICK-2024-004",
    title: "API integration documentation request",
    customer: "GreenTech Solutions",
    email: "dev@greentech.com",
    priority: "medium",
    status: "Open",
    category: "Technical",
    createdDate: "2024-06-15",
    lastUpdate: "2024-06-15 16:20",
    assignedTo: "Technical Team",
    description:
      "Need detailed API documentation for carbon credit marketplace integration.",
    messages: [
      {
        id: 1,
        sender: "GreenTech Solutions",
        type: "customer",
        message:
          "Need detailed API documentation for carbon credit marketplace integration.",
        timestamp: "2024-06-15 16:20",
      },
    ],
    tags: ["api", "documentation", "integration"],
  },
];

const supportStats = [
  { label: "Open Tickets", value: 7, change: "+2", color: "red" },
  { label: "In Progress", value: 12, change: "-3", color: "yellow" },
  { label: "Resolved Today", value: 8, change: "+5", color: "green" },
  { label: "Avg Response Time", value: "2.5h", change: "-0.5h", color: "blue" },
];

const Support = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");

  const filteredTickets = supportTickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "Closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const sendReply = () => {
    if (replyMessage.trim() && selectedTicket) {
      // TODO: Implement message sending
      console.log("Sending reply:", replyMessage);
      setReplyMessage("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Support Management
          </h2>
          <p className="text-gray-600">
            Manage customer support tickets and inquiries
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Archive className="h-4 w-4 mr-2" />
            Archive Resolved
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <FileText className="h-4 w-4 mr-2" />
            Create Ticket
          </Button>
        </div>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {supportStats.map((stat, index) => (
          <Card key={index} className={`border-${stat.color}-200`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.label}
              </CardTitle>
              <HeadphonesIcon className={`h-4 w-4 text-${stat.color}-600`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <p className={`text-xs text-${stat.color}-600`}>
                {stat.change} from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span>Filter Tickets</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tickets..."
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
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Star className="h-4 w-4 mr-2" />
              Starred Only
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tickets Table */}
      <Card>
        <CardHeader>
          <CardTitle>Support Tickets ({filteredTickets.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Last Update</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-mono text-sm">
                      {ticket.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {ticket.customer
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium">
                            {ticket.customer}
                          </div>
                          <div className="text-xs text-gray-500">
                            {ticket.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs">
                        <div className="font-medium text-gray-900 truncate">
                          {ticket.title}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {ticket.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{ticket.category}</Badge>
                    </TableCell>
                    <TableCell>{ticket.assignedTo}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{ticket.lastUpdate}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedTicket(ticket)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>
                                Ticket Details: {ticket.id}
                              </DialogTitle>
                            </DialogHeader>
                            {selectedTicket && (
                              <div className="space-y-6">
                                {/* Ticket Header */}
                                <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Customer
                                      </label>
                                      <div className="flex items-center space-x-2 mt-1">
                                        <User className="h-4 w-4 text-gray-400" />
                                        <span>{selectedTicket.customer}</span>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Email
                                      </label>
                                      <div className="flex items-center space-x-2 mt-1">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <span>{selectedTicket.email}</span>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Category
                                      </label>
                                      <Badge variant="outline" className="mt-1">
                                        {selectedTicket.category}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Priority
                                      </label>
                                      <Badge
                                        className={getPriorityColor(
                                          selectedTicket.priority,
                                        )}
                                        style={{ marginTop: "4px" }}
                                      >
                                        {selectedTicket.priority.toUpperCase()}
                                      </Badge>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Status
                                      </label>
                                      <Badge
                                        className={getStatusColor(
                                          selectedTicket.status,
                                        )}
                                        style={{ marginTop: "4px" }}
                                      >
                                        {selectedTicket.status}
                                      </Badge>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-600">
                                        Assigned To
                                      </label>
                                      <p className="mt-1">
                                        {selectedTicket.assignedTo}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {/* Tags */}
                                <div>
                                  <label className="text-sm font-medium text-gray-600">
                                    Tags
                                  </label>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {selectedTicket.tags.map((tag, index) => (
                                      <Badge
                                        key={index}
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        <Tag className="h-3 w-3 mr-1" />
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                {/* Message Thread */}
                                <div>
                                  <label className="text-sm font-medium text-gray-600">
                                    Message Thread
                                  </label>
                                  <div className="mt-2 space-y-4 max-h-60 overflow-y-auto bg-gray-50 p-4 rounded-lg">
                                    {selectedTicket.messages.map((message) => (
                                      <div
                                        key={message.id}
                                        className={cn(
                                          "flex",
                                          message.type === "admin"
                                            ? "justify-end"
                                            : "justify-start",
                                        )}
                                      >
                                        <div
                                          className={cn(
                                            "max-w-xs lg:max-w-md px-4 py-2 rounded-lg",
                                            message.type === "admin"
                                              ? "bg-blue-600 text-white"
                                              : "bg-white border",
                                          )}
                                        >
                                          <div className="text-sm font-medium mb-1">
                                            {message.sender}
                                          </div>
                                          <div className="text-sm">
                                            {message.message}
                                          </div>
                                          <div
                                            className={cn(
                                              "text-xs mt-1",
                                              message.type === "admin"
                                                ? "text-blue-100"
                                                : "text-gray-500",
                                            )}
                                          >
                                            {message.timestamp}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Reply Section */}
                                <div>
                                  <label className="text-sm font-medium text-gray-600">
                                    Reply
                                  </label>
                                  <Textarea
                                    placeholder="Type your reply..."
                                    value={replyMessage}
                                    onChange={(e) =>
                                      setReplyMessage(e.target.value)
                                    }
                                    className="mt-2"
                                    rows={3}
                                  />
                                  <div className="flex justify-end space-x-2 mt-2">
                                    <Button variant="outline">
                                      Add Internal Note
                                    </Button>
                                    <Button
                                      onClick={sendReply}
                                      className="bg-blue-600 hover:bg-blue-700"
                                    >
                                      <Send className="h-4 w-4 mr-2" />
                                      Send Reply
                                    </Button>
                                  </div>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end space-x-2 pt-4 border-t">
                                  <Button variant="outline">Transfer</Button>
                                  <Button variant="outline">Escalate</Button>
                                  <Button variant="outline">
                                    <Star className="h-4 w-4 mr-2" />
                                    Star
                                  </Button>
                                  <Button className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Mark Resolved
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <MessageSquare className="h-4 w-4" />
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

export default Support;
