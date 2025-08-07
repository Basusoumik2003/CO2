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
  MessageSquare,
  Eye,
  Flag,
  Pin,
  Trash2,
  Edit,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  ThumbsUp,
  Heart,
  Share,
  Clock,
} from "lucide-react";

// Mock community posts data
const communityPosts = [
  {
    id: 1,
    title: "Best practices for EV carbon credit calculation",
    author: "Sarah Johnson",
    authorRole: "Individual",
    content:
      "I've been working on optimizing my EV usage for maximum carbon credit generation. Here are some tips that have worked for me...",
    category: "Discussion",
    status: "Published",
    postedDate: "2024-06-15",
    lastActivity: "2024-06-15 14:30",
    likes: 24,
    comments: 8,
    shares: 3,
    flagged: false,
    pinned: false,
    moderationNotes: "",
    tags: ["EV", "Carbon Credits", "Tips"],
  },
  {
    id: 2,
    title: "Suspicious marketplace listing - possible fraud",
    author: "Anonymous User",
    authorRole: "Individual",
    content:
      "I found a listing that seems too good to be true. The seller is offering 10,000 credits at $5 each, which is way below market rate...",
    category: "Report",
    status: "Flagged",
    postedDate: "2024-06-14",
    lastActivity: "2024-06-15 09:15",
    likes: 12,
    comments: 15,
    shares: 0,
    flagged: true,
    pinned: false,
    moderationNotes: "Under investigation - potential fraud alert",
    tags: ["Fraud Alert", "Marketplace", "Report"],
  },
  {
    id: 3,
    title: "New regulations for carbon credit verification",
    author: "GreenTech Solutions",
    authorRole: "Organization",
    content:
      "The latest EU regulations require additional documentation for carbon credit verification. Here's what you need to know...",
    category: "News",
    status: "Published",
    postedDate: "2024-06-13",
    lastActivity: "2024-06-14 16:45",
    likes: 45,
    comments: 22,
    shares: 18,
    flagged: false,
    pinned: true,
    moderationNotes: "Pinned due to regulatory importance",
    tags: ["Regulations", "EU", "Verification"],
  },
  {
    id: 4,
    title: "Inappropriate content - investment scam",
    author: "ScamUser123",
    authorRole: "Individual",
    content:
      "🚨 URGENT: Make 1000% profit in 24 hours with our exclusive carbon credit investment scheme! Limited time offer...",
    category: "Spam",
    status: "Hidden",
    postedDate: "2024-06-15",
    lastActivity: "2024-06-15 11:20",
    likes: 0,
    comments: 1,
    shares: 0,
    flagged: true,
    pinned: false,
    moderationNotes: "Removed for spam/scam content",
    tags: ["Spam", "Scam", "Investment"],
  },
];

const moderationQueue = [
  {
    id: 5,
    title: "Question about tree planting project verification",
    author: "New User",
    reportReason: "Inappropriate Content",
    reportedBy: "Community Member",
    submittedDate: "2024-06-15",
    priority: "medium",
    content:
      "How long does it typically take to get verification for a tree planting project?",
    reportDetails:
      "User claims this contains misleading information about verification times",
  },
  {
    id: 6,
    title: "Selling carbon credits below market price",
    author: "Suspicious Seller",
    reportReason: "Potential Fraud",
    reportedBy: "Multiple Users",
    submittedDate: "2024-06-14",
    priority: "high",
    content:
      "Offering verified carbon credits at 50% below market rate. Quick sale needed!",
    reportDetails: "Multiple users reported this as potential fraud or scam",
  },
];

const communityStats = [
  { label: "Total Posts", value: 1247, change: "+12.5%", color: "blue" },
  { label: "Active Users", value: 892, change: "+8.3%", color: "green" },
  { label: "Flagged Content", value: 5, change: "+2", color: "red" },
  { label: "Pinned Posts", value: 3, change: "0", color: "yellow" },
];

const Community = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [moderationNotes, setModerationNotes] = useState("");

  const filteredPosts = communityPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || post.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || post.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Flagged":
        return "bg-red-100 text-red-800";
      case "Hidden":
        return "bg-gray-100 text-gray-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Community Management
          </h2>
          <p className="text-gray-600">
            Moderate content, manage posts, and engage with the community
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Bulk Actions
          </Button>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {communityStats.map((stat, index) => (
          <Card key={index} className={`border-${stat.color}-200`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.label}
              </CardTitle>
              <MessageSquare className={`h-4 w-4 text-${stat.color}-600`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <p className={`text-xs text-${stat.color}-600`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Moderation Queue */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-800">
            <AlertTriangle className="h-5 w-5" />
            <span>Moderation Queue</span>
            <Badge variant="destructive">{moderationQueue.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {moderationQueue.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg border"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <Badge className={getPriorityColor(item.priority)}>
                      {item.priority.toUpperCase()}
                    </Badge>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <span className="text-sm text-gray-600">
                      by {item.author}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Reported for: {item.reportReason} by {item.reportedBy}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.reportDetails}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    Review
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span>Filter Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search posts..."
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
                <SelectItem value="Published">Published</SelectItem>
                <SelectItem value="Flagged">Flagged</SelectItem>
                <SelectItem value="Hidden">Hidden</SelectItem>
                <SelectItem value="Under Review">Under Review</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Discussion">Discussion</SelectItem>
                <SelectItem value="News">News</SelectItem>
                <SelectItem value="Question">Question</SelectItem>
                <SelectItem value="Report">Report</SelectItem>
                <SelectItem value="Spam">Spam</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Flag className="h-4 w-4 mr-2" />
              View Flagged Only
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Community Posts ({filteredPosts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Post</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Posted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {post.flagged && (
                          <Flag className="h-4 w-4 text-red-500" />
                        )}
                        {post.pinned && (
                          <Pin className="h-4 w-4 text-blue-500" />
                        )}
                        <div className="max-w-xs">
                          <div className="font-medium text-gray-900 truncate">
                            {post.title}
                          </div>
                          <div className="text-sm text-gray-500 truncate">
                            {post.content}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium">
                            {post.author}
                          </div>
                          <div className="text-xs text-gray-500">
                            {post.authorRole}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{post.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(post.status)}>
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-3 w-3 text-gray-400" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-3 w-3 text-gray-400" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share className="h-3 w-3 text-gray-400" />
                          <span>{post.shares}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{post.postedDate}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedPost(post)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>
                                Post Details: {post.title}
                              </DialogTitle>
                            </DialogHeader>
                            {selectedPost && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Author
                                    </label>
                                    <p>
                                      {selectedPost.author} (
                                      {selectedPost.authorRole})
                                    </p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Category
                                    </label>
                                    <p>{selectedPost.category}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Status
                                    </label>
                                    <Badge
                                      className={getStatusColor(
                                        selectedPost.status,
                                      )}
                                    >
                                      {selectedPost.status}
                                    </Badge>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Posted
                                    </label>
                                    <p>{selectedPost.postedDate}</p>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">
                                    Content
                                  </label>
                                  <p className="text-sm mt-1 p-3 bg-gray-50 rounded">
                                    {selectedPost.content}
                                  </p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">
                                    Tags
                                  </label>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {selectedPost.tags.map((tag, index) => (
                                      <Badge
                                        key={index}
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">
                                    Moderation Notes
                                  </label>
                                  <Textarea
                                    placeholder="Add moderation notes..."
                                    value={moderationNotes}
                                    onChange={(e) =>
                                      setModerationNotes(e.target.value)
                                    }
                                    className="mt-2"
                                  />
                                </div>
                                <div className="flex justify-end space-x-2">
                                  <Button variant="outline">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                  </Button>
                                  <Button variant="outline">
                                    <Pin className="h-4 w-4 mr-2" />
                                    {selectedPost.pinned ? "Unpin" : "Pin"}
                                  </Button>
                                  <Button variant="outline">
                                    <Flag className="h-4 w-4 mr-2" />
                                    {selectedPost.flagged
                                      ? "Remove Flag"
                                      : "Flag"}
                                  </Button>
                                  <Button variant="destructive">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Hide
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button
                          size="sm"
                          variant={post.pinned ? "default" : "outline"}
                          className={
                            post.pinned ? "bg-blue-600 hover:bg-blue-700" : ""
                          }
                        >
                          <Pin className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant={post.flagged ? "destructive" : "outline"}
                        >
                          <Flag className="h-4 w-4" />
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

export default Community;
