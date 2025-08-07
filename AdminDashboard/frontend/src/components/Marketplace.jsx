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
} from "./basic-ui";
import {
  Search,
  Filter,
  ShoppingCart,
  Eye,
  Flag,
  MessageSquare,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Activity,
} from "lucide-react";

// Mock marketplace data
const marketplaceListings = [
  {
    id: 1,
    title: "Tesla EV Credits - Premium Grade",
    seller: "GreenTech Solutions",
    credits: 1250,
    pricePerCredit: 25.5,
    totalValue: 31875,
    category: "EV",
    status: "Active",
    listedDate: "2024-06-10",
    views: 245,
    inquiries: 8,
    flagged: false,
    description:
      "High-quality carbon credits from verified Tesla fleet operations in NYC",
  },
  {
    id: 2,
    title: "Amazon Reforestation Credits",
    seller: "EcoFarm Ltd",
    credits: 5000,
    pricePerCredit: 18.75,
    totalValue: 93750,
    category: "Trees",
    status: "Under Review",
    listedDate: "2024-06-12",
    views: 156,
    inquiries: 12,
    flagged: true,
    description:
      "Verified tree planting project in Brazilian Amazon rainforest",
  },
  {
    id: 3,
    title: "Solar Energy Credits - Certified",
    seller: "SolarTech Inc",
    credits: 2800,
    pricePerCredit: 22.0,
    totalValue: 61600,
    category: "Solar",
    status: "Sold",
    listedDate: "2024-06-08",
    views: 89,
    inquiries: 15,
    flagged: false,
    description:
      "Commercial solar installation credits from California facility",
  },
];

const activeDisputes = [
  {
    id: 1,
    disputeId: "DISP-2024-001",
    listing: "Tesla EV Credits - Premium Grade",
    buyer: "ABC Corporation",
    seller: "GreenTech Solutions",
    issue: "Credit Quality Dispute",
    status: "Open",
    submittedDate: "2024-06-14",
    priority: "high",
    description: "Buyer claims credits don't match verification documents",
    amount: 31875,
    lastUpdate: "2024-06-15",
  },
  {
    id: 2,
    disputeId: "DISP-2024-002",
    listing: "Amazon Reforestation Credits",
    buyer: "Green Industries",
    seller: "EcoFarm Ltd",
    issue: "Delivery Dispute",
    status: "In Progress",
    submittedDate: "2024-06-13",
    priority: "medium",
    description: "Credits not transferred after payment confirmed",
    amount: 15000,
    lastUpdate: "2024-06-14",
  },
];

const marketplaceStats = [
  { label: "Active Listings", value: 127, change: "+8.5%", color: "blue" },
  { label: "Total Volume", value: "$2.4M", change: "+15.2%", color: "green" },
  { label: "Avg. Price", value: "$23.45", change: "-2.1%", color: "yellow" },
  { label: "Pending Reviews", value: 15, change: "+5", color: "orange" },
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedListing, setSelectedListing] = useState(null);
  const [selectedDispute, setSelectedDispute] = useState(null);

  const filteredListings = marketplaceListings.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || listing.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || listing.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Marketplace Management
          </h2>
          <p className="text-gray-600">
            Monitor listings, resolve disputes, and manage marketplace activity
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
          <Button variant="outline" size="sm">
            <Activity className="h-4 w-4 mr-2" />
            Activity Log
          </Button>
        </div>
      </div>

      {/* Marketplace Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {marketplaceStats.map((stat, index) => (
          <Card key={index} className={`border-${stat.color}-200`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.label}
              </CardTitle>
              <ShoppingCart className={`h-4 w-4 text-${stat.color}-600`} />
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

      {/* Active Disputes Alert */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-800">
            <AlertTriangle className="h-5 w-5" />
            <span>Active Disputes Requiring Attention</span>
            <Badge variant="destructive">{activeDisputes.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activeDisputes.map((dispute) => (
              <div
                key={dispute.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg border"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <Badge
                      className={
                        dispute.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : dispute.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }
                    >
                      {dispute.priority.toUpperCase()}
                    </Badge>
                    <h4 className="font-medium text-gray-900">
                      {dispute.disputeId}
                    </h4>
                    <span className="text-sm text-gray-600">
                      {dispute.issue}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {dispute.listing}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {dispute.buyer} vs {dispute.seller} • Amount: $
                    {dispute.amount.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedDispute(dispute)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>
                          Dispute Details: {dispute.disputeId}
                        </DialogTitle>
                      </DialogHeader>
                      {selectedDispute && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-600">
                                Buyer
                              </label>
                              <p>{selectedDispute.buyer}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-600">
                                Seller
                              </label>
                              <p>{selectedDispute.seller}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-600">
                                Issue Type
                              </label>
                              <p>{selectedDispute.issue}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-600">
                                Amount
                              </label>
                              <p className="font-semibold">
                                ${selectedDispute.amount.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">
                              Description
                            </label>
                            <p className="text-sm mt-1">
                              {selectedDispute.description}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">
                              Resolution Notes
                            </label>
                            <Textarea
                              placeholder="Add resolution notes..."
                              className="mt-2"
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline">Contact Parties</Button>
                            <Button variant="outline">Request Evidence</Button>
                            <Button variant="destructive">Favor Buyer</Button>
                            <Button className="bg-green-600 hover:bg-green-700">
                              Favor Seller
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Resolve
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
            <span>Filter Listings</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search listings..."
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
                <SelectItem value="Under Review">Under Review</SelectItem>
                <SelectItem value="Sold">Sold</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="EV">Electric Vehicles</SelectItem>
                <SelectItem value="Trees">Trees</SelectItem>
                <SelectItem value="Solar">Solar</SelectItem>
                <SelectItem value="Wind">Wind</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Flag className="h-4 w-4 mr-2" />
              View Flagged Only
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Listings Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Marketplace Listings ({filteredListings.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Listing</TableHead>
                  <TableHead>Seller</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredListings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {listing.flagged && (
                          <Flag className="h-4 w-4 text-red-500" />
                        )}
                        <div>
                          <div className="font-medium text-gray-900">
                            {listing.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {listing.category}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{listing.seller}</TableCell>
                    <TableCell>{listing.credits.toLocaleString()}</TableCell>
                    <TableCell>${listing.pricePerCredit.toFixed(2)}</TableCell>
                    <TableCell className="font-semibold">
                      ${listing.totalValue.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          listing.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : listing.status === "Under Review"
                              ? "bg-yellow-100 text-yellow-800"
                              : listing.status === "Sold"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                        }
                      >
                        {listing.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{listing.views}</span>
                        <MessageSquare className="h-3 w-3 text-gray-400 ml-2" />
                        <span className="text-sm">{listing.inquiries}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedListing(listing)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>
                                Listing Details: {listing.title}
                              </DialogTitle>
                            </DialogHeader>
                            {selectedListing && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Seller
                                    </label>
                                    <p>{selectedListing.seller}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Category
                                    </label>
                                    <p>{selectedListing.category}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Credits
                                    </label>
                                    <p>
                                      {selectedListing.credits.toLocaleString()}
                                    </p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Price per Credit
                                    </label>
                                    <p>
                                      $
                                      {selectedListing.pricePerCredit.toFixed(
                                        2,
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">
                                    Description
                                  </label>
                                  <p className="text-sm mt-1">
                                    {selectedListing.description}
                                  </p>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Views
                                    </label>
                                    <p>{selectedListing.views}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Inquiries
                                    </label>
                                    <p>{selectedListing.inquiries}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600">
                                      Listed Date
                                    </label>
                                    <p>{selectedListing.listedDate}</p>
                                  </div>
                                </div>
                                <div className="flex justify-end space-x-2">
                                  <Button variant="outline">
                                    Contact Seller
                                  </Button>
                                  <Button variant="outline">
                                    View Analytics
                                  </Button>
                                  <Button variant="destructive">
                                    {listing.flagged
                                      ? "Remove Flag"
                                      : "Flag Listing"}
                                  </Button>
                                  <Button className="bg-green-600 hover:bg-green-700">
                                    Approve
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button
                          size="sm"
                          variant={listing.flagged ? "destructive" : "outline"}
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

export default Marketplace;
