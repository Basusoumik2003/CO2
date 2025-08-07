import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Input,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./basic-ui";

// SVG Icons
const GridIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const ListIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.1" y2="6" />
    <line x1="3" y1="12" x2="3.1" y2="12" />
    <line x1="3" y1="18" x2="3.1" y2="18" />
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

const MapIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16" />
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
    <path d="M18.5 2.5a2.828 2.828 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h6a1 1 0 011 1v2" />
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

const CalendarIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
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
    <polyline points="22 4 12 14.01 9 11.01" />
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
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.1" y2="16" />
  </svg>
);

const LayersIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const CarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 16H9m10 0h-1a2 2 0 01-2-2v-6a2 2 0 012-2h5.5M2 10h3m-3 4h3m1.5-4v6m12-9v6M6 18a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

const TreesIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m10-10a3 3 0 100-6 3 3 0 000 6zm-6 0a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

const SunIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.14 12.14l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M17.64 6.36l1.42-1.42" />
  </svg>
);

const WindIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
  </svg>
);

const ZapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const DropletsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 16.3c2-2.3 4-4.9 4-7.3 0-4-3-7.3-4-7.3S3 5 3 9c0 2.4 2 5 4 7.3zm10 0c2-2.3 4-4.9 4-7.3 0-4-3-7.3-4-7.3s-4 3-4 7.3c0 2.4 2 5 4 7.3z" />
  </svg>
);

const FactoryIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5 12v-4m-2-9l3-3M2 7l3-3" />
    <rect x="4" y="10" width="4" height="4" />
    <rect x="10" y="6" width="4" height="4" />
    <rect x="16" y="2" width="4" height="4" />
  </svg>
);

const LeafIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M11 20A7 7 0 0118 7c0-2-1-4-3-5a1 1 0 00-1 1v6a1 1 0 01-1 1H7a1 1 0 00-1 1c1 4px 4 7px 7 7z" />
  </svg>
);

// Icon mapping for asset types
const ASSET_ICONS = {
  EV: CarIcon,
  Trees: TreesIcon,
  Solar: SunIcon,
  Wind: WindIcon,
  Hydro: DropletsIcon,
  Thermal: ZapIcon,
  Bioenergy: LeafIcon,
  "Carbon Capture": FactoryIcon,
};

// Color mapping for asset types
const ASSET_COLORS = {
  EV: { bg: "bg-indigo-light", text: "var(--color-indigo)" },
  Trees: { bg: "bg-green-light", text: "var(--color-green)" },
  Solar: { bg: "bg-yellow-light", text: "var(--color-yellow)" },
  Wind: { bg: "bg-indigo-light", text: "var(--color-indigo)" },
  Hydro: { bg: "bg-indigo-light", text: "var(--color-indigo)" },
  Thermal: { bg: "bg-red-light", text: "var(--color-red)" },
  Bioenergy: { bg: "bg-green-light", text: "var(--color-green)" },
  "Carbon Capture": {
    bg: "var(--color-card-bg)",
    text: "var(--color-text-secondary)",
  },
};

// Status colors
const STATUS_COLORS = {
  Active: { bg: "bg-green-light", text: "var(--color-green-dark)" },
  Maintenance: { bg: "bg-yellow-light", text: "var(--color-yellow-dark)" },
  Offline: { bg: "bg-red-light", text: "var(--color-red)" },
};

// Asset Card Component (from previous conversion)
const AssetCard = ({ asset, onClick }) => {
  const Icon = ASSET_ICONS[asset.type] || LeafIcon;
  const { bg: iconBg, text: iconText } = ASSET_COLORS[asset.type] || {};
  const { bg: statusBg, color: statusText } = STATUS_COLORS[asset.status] || {};

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              className={`icon-container ${iconBg}`}
              style={{ color: iconText }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon />
            </motion.div>
            <div>
              <motion.h3
                className="font-semibold text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {asset.name}
              </motion.h3>
              <p className="text-sm text-secondary">{asset.type}</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`badge ${statusBg}`} style={{ color: statusText }}>
              {asset.status}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="card-content">
        <div className="flex items-center space-x-2 text-sm text-secondary">
          <MapPinIcon />
          <span>{asset.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUpIcon className="text-green" />
            <span className="text-sm text-secondary">Credits Generated</span>
          </div>
          <motion.span
            className="font-semibold text-lg text-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {asset.creditsGenerated.toLocaleString()}
          </motion.span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary">Verification</span>
          <motion.span
            className={`badge ${asset.verified ? "bg-green-light" : "var(--color-card-bg)"}`}
            style={{
              color: asset.verified
                ? "var(--color-green-dark)"
                : "var(--color-text-secondary)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {asset.verified ? "Verified" : "Pending"}
          </motion.span>
        </div>

        {asset.efficiency && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary">Efficiency</span>
            <span className="text-sm font-semibold text-primary">
              {asset.efficiency}
            </span>
          </div>
        )}

        <div className="flex items-center space-x-2 text-xs text-secondary">
          <CalendarIcon />
          <span>Updated {asset.lastUpdated}</span>
        </div>

        <motion.button
          className="button w-full"
          onClick={() => onClick(asset)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <EyeIcon />
          <span className="ml-2">View Details</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

// Filter Panel Component
const FilterPanel = ({
  filters,
  onFilterChange,
  isExpanded,
  onToggleExpanded,
  activeFiltersCount,
}) => {
  const updateFilter = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      search: "",
      assetType: "All Types",
      region: "All Regions",
      verificationStatus: "All Status",
      status: "All Status",
      showVerifiedOnly: false,
    });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary">{activeFiltersCount}</Badge>
            )}
          </CardTitle>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={onToggleExpanded}>
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Input
              placeholder="Search assets by name or ID..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="input-search"
            />
          </div>

          {isExpanded && (
            <motion.div
              className="grid-1 md-grid-3 pt-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <select
                value={filters.assetType}
                onChange={(e) => updateFilter("assetType", e.target.value)}
                className="select"
              >
                <option value="All Types">All Types</option>
                <option value="EV">EV</option>
                <option value="Trees">Trees</option>
                <option value="Solar">Solar</option>
                <option value="Wind">Wind</option>
                <option value="Hydro">Hydro</option>
                <option value="Thermal">Thermal</option>
                <option value="Bioenergy">Bioenergy</option>
                <option value="Carbon Capture">Carbon Capture</option>
              </select>

              <select
                value={filters.status}
                onChange={(e) => updateFilter("status", e.target.value)}
                className="select"
              >
                <option value="All Status">All Status</option>
                <option value="Active">Active</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Offline">Offline</option>
              </select>

              <select
                value={filters.region}
                onChange={(e) => updateFilter("region", e.target.value)}
                className="select"
              >
                <option value="All Regions">All Regions</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Asia Pacific">Asia Pacific</option>
                <option value="Latin America">Latin America</option>
              </select>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const AssetManagement = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showAssetDetails, setShowAssetDetails] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  // Mock asset data
  const mockAssets = [
    {
      id: "EV-001",
      name: "Tesla Model 3 Fleet",
      type: "EV",
      location: "San Francisco, CA",
      creditsGenerated: 245,
      verified: true,
      lastUpdated: "2 hours ago",
      status: "Active",
      efficiency: "95.2%",
      region: "North America",
    },
    {
      id: "SOLAR-003",
      name: "Rooftop Solar Array",
      type: "Solar",
      location: "Phoenix, AZ",
      creditsGenerated: 892,
      verified: true,
      lastUpdated: "1 day ago",
      status: "Active",
      efficiency: "88.7%",
      region: "North America",
    },
    {
      id: "WIND-002",
      name: "Offshore Wind Farm",
      type: "Wind",
      location: "North Sea, UK",
      creditsGenerated: 1534,
      verified: true,
      lastUpdated: "3 hours ago",
      status: "Active",
      efficiency: "91.3%",
      region: "Europe",
    },
    {
      id: "TREE-001",
      name: "Amazon Reforestation",
      type: "Trees",
      location: "Acre, Brazil",
      creditsGenerated: 678,
      verified: false,
      lastUpdated: "5 days ago",
      status: "Active",
      region: "Latin America",
    },
    {
      id: "HYDRO-001",
      name: "Small Hydro Plant",
      type: "Hydro",
      location: "Vancouver, BC",
      creditsGenerated: 423,
      verified: true,
      lastUpdated: "1 day ago",
      status: "Maintenance",
      efficiency: "82.1%",
      region: "North America",
    },
  ];

  // Filter state
  const [filters, setFilters] = useState({
    search: "",
    assetType: "All Types",
    region: "All Regions",
    verificationStatus: "All Status",
    status: "All Status",
    showVerifiedOnly: false,
  });

  // Filter assets based on current filters
  const filteredAssets = useMemo(() => {
    return mockAssets.filter((asset) => {
      if (
        filters.search &&
        !asset.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !asset.id.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      if (
        filters.assetType !== "All Types" &&
        asset.type !== filters.assetType
      ) {
        return false;
      }

      if (filters.region !== "All Regions" && asset.region !== filters.region) {
        return false;
      }

      if (filters.status !== "All Status" && asset.status !== filters.status) {
        return false;
      }

      if (filters.showVerifiedOnly && !asset.verified) {
        return false;
      }

      return true;
    });
  }, [mockAssets, filters]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    if (filters.assetType !== "All Types") count++;
    if (filters.region !== "All Regions") count++;
    if (filters.status !== "All Status") count++;
    if (filters.showVerifiedOnly) count++;
    return count;
  }, [filters]);

  const handleViewDetails = (asset) => {
    setSelectedAsset(asset);
    setShowAssetDetails(true);
  };

  const exportAssets = (format) => {
    console.log(`Exporting assets in ${format} format`);
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
          <h1 className="text-3xl font-bold">Asset Management</h1>
          <p className="text-secondary mt-1">
            Manage and monitor your carbon credit generating assets
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={() => setShowMap(true)}>
            <MapIcon />
            <span className="ml-2">Map View</span>
          </Button>
          <Button variant="outline" onClick={() => setShowBulkUpload(true)}>
            <UploadIcon />
            <span className="ml-2">Bulk Upload</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">
                <DownloadIcon />
                <span className="ml-2">Export</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => exportAssets("csv")}>
                Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => exportAssets("xlsx")}>
                Export as Excel
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => exportAssets("pdf")}>
                Export as PDF
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>
            <PlusIcon />
            <span className="ml-2">Add Asset</span>
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid-1 md-grid-4">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Total Assets</p>
                <p className="text-2xl font-bold">{mockAssets.length}</p>
              </div>
              <LayersIcon className="text-blue" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Verified</p>
                <p className="text-2xl font-bold text-green">
                  {mockAssets.filter((a) => a.verified).length}
                </p>
              </div>
              <CheckCircleIcon className="text-green" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Pending</p>
                <p className="text-2xl font-bold text-yellow">
                  {mockAssets.filter((a) => !a.verified).length}
                </p>
              </div>
              <ClockIcon className="text-yellow" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Maintenance</p>
                <p className="text-2xl font-bold text-orange">
                  {mockAssets.filter((a) => a.status === "Maintenance").length}
                </p>
              </div>
              <AlertCircleIcon className="text-orange" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Panel */}
      <FilterPanel
        filters={filters}
        onFilterChange={setFilters}
        isExpanded={filtersExpanded}
        onToggleExpanded={() => setFiltersExpanded(!filtersExpanded)}
        activeFiltersCount={activeFiltersCount}
      />

      {/* View Toggle and Results */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-secondary">
            Showing {filteredAssets.length} of {mockAssets.length} assets
          </span>
          {activeFiltersCount > 0 && (
            <Badge variant="outline">{activeFiltersCount} filters active</Badge>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <GridIcon />
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("table")}
          >
            <ListIcon />
          </Button>
        </div>
      </div>

      {/* Assets Display */}
      {viewMode === "grid" ? (
        <div className="grid-1 md-grid-2 lg-grid-3">
          {filteredAssets.map((asset) => (
            <AssetCard
              key={asset.id}
              asset={asset}
              onClick={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Verified</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAssets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="text-sm text-secondary">{asset.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{asset.type}</Badge>
                  </TableCell>
                  <TableCell>{asset.location}</TableCell>
                  <TableCell className="font-medium">
                    {asset.creditsGenerated.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={`badge-${asset.status.toLowerCase()}`}>
                      {asset.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {asset.verified ? (
                      <CheckCircleIcon className="text-green" />
                    ) : (
                      <ClockIcon className="text-yellow" />
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant="ghost" size="sm">
                          <MoreVerticalIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => handleViewDetails(asset)}
                        >
                          <EyeIcon />
                          <span className="ml-2">View Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <EditIcon />
                          <span className="ml-2">Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TrashIcon />
                          <span className="ml-2">Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* Asset Details Modal */}
      <Dialog open={showAssetDetails} onOpenChange={setShowAssetDetails}>
        <DialogContent className="dialog-content-medium">
          <DialogHeader>
            <DialogTitle>Asset Details</DialogTitle>
            <DialogDescription>
              Detailed information about {selectedAsset?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedAsset && (
            <div className="space-y-4">
              <div className="grid-2">
                <div>
                  <label className="text-sm text-secondary">Asset ID</label>
                  <p className="text-lg font-semibold">{selectedAsset.id}</p>
                </div>
                <div>
                  <label className="text-sm text-secondary">Type</label>
                  <p className="text-lg font-semibold">{selectedAsset.type}</p>
                </div>
                <div>
                  <label className="text-sm text-secondary">Location</label>
                  <p className="text-lg font-semibold">
                    {selectedAsset.location}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-secondary">
                    Credits Generated
                  </label>
                  <p className="text-lg font-semibold text-green">
                    {selectedAsset.creditsGenerated.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Map Modal */}
      <Dialog open={showMap} onOpenChange={setShowMap}>
        <DialogContent className="dialog-content-large">
          <DialogHeader>
            <DialogTitle>Asset Map</DialogTitle>
            <DialogDescription>
              Geographical distribution of your assets
            </DialogDescription>
          </DialogHeader>
          <div className="h-96 bg-card-bg rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-secondary mx-auto mb-4" />
              <p className="text-secondary">
                Interactive map will be displayed here
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bulk Upload Modal */}
      <Dialog open={showBulkUpload} onOpenChange={setShowBulkUpload}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bulk Upload Assets</DialogTitle>
            <DialogDescription>
              Upload multiple assets via CSV file
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-color rounded-lg p-6 text-center">
              <UploadIcon className="h-12 w-12 text-secondary mx-auto mb-4" />
              <p className="text-secondary">Drag and drop your CSV file here</p>
              <Input type="file" accept=".csv" className="mt-4" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default AssetManagement;