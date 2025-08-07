// import React from "react";
// import { motion } from "framer-motion";
// import "./global.css"; 

// // SVG Icons
// const MapPinIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const CalendarIcon = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//     <path d="M16 2v4M8 2v4M3 10h18" />
//   </svg>
// );

// const TrendingUpIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
//     <polyline points="17 6 23 6 23 12" />
//   </svg>
// );

// const EyeIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//     <circle cx="12" cy="12" r="3" />
//   </svg>
// );

// const CarIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M14 16H9m10 0h-1a2 2 0 01-2-2v-6a2 2 0 012-2h5.5M2 10h3m-3 4h3m1.5-4v6m12-9v6M6 18a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4z" />
//   </svg>
// );

// const TreesIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m10-10a3 3 0 100-6 3 3 0 000 6zm-6 0a3 3 0 100-6 3 3 0 000 6z" />
//   </svg>
// );

// const SunIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="12" r="5" />
//     <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.14 12.14l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M17.64 6.36l1.42-1.42" />
//   </svg>
// );

// const WindIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
//   </svg>
// );

// const ZapIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//   </svg>
// );

// const DropletsIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M7 16.3c2-2.3 4-4.9 4-7.3 0-4-3-7.3-4-7.3S3 5 3 9c0 2.4 2 5 4 7.3zm10 0c2-2.3 4-4.9 4-7.3 0-4-3-7.3-4-7.3s-4 3-4 7.3c0 2.4 2 5 4 7.3z" />
//   </svg>
// );

// const FactoryIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5 12v-4m-2-9l3-3M2 7l3-3" />
//     <rect x="4" y="10" width="4" height="4" />
//     <rect x="10" y="6" width="4" height="4" />
//     <rect x="16" y="2" width="4" height="4" />
//   </svg>
// );

// const LeafIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M11 20A7 7 0 0118 7c0-2-1-4-3-5a1 1 0 00-1 1v6a1 1 0 01-1 1H7a1 1 0 00-1 1c1 4 4 7 7 7z" />
//   </svg>
// );

// // Icon mapping for asset types
// const ASSET_ICONS = {
//   EV: CarIcon,
//   Trees: TreesIcon,
//   Solar: SunIcon,
//   Wind: WindIcon,
//   Hydro: DropletsIcon,
//   Thermal: ZapIcon,
//   Bioenergy: LeafIcon,
//   "Carbon Capture": FactoryIcon,
// };

// // Color mapping for asset types
// const ASSET_COLORS = {
//   EV: { bg: "bg-indigo-light", text: "var(--color-indigo)" },
//   Trees: { bg: "bg-green-light", text: "var(--color-green)" },
//   Solar: { bg: "bg-yellow-light", text: "var(--color-yellow)" },
//   Wind: { bg: "bg-indigo-light", text: "var(--color-indigo)" },
//   Hydro: { bg: "bg-indigo-light", text: "var(--color-indigo)" },
//   Thermal: { bg: "bg-red-light", text: "var(--color-red)" },
//   Bioenergy: { bg: "bg-green-light", text: "var(--color-green)" },
//   "Carbon Capture": { bg: "var(--color-card-bg)", text: "var(--color-text-secondary)" },
// };

// // Status colors
// const STATUS_COLORS = {
//   Active: { bg: "bg-green-light", text: "var(--color-green-dark)" },
//   Maintenance: { bg: "bg-yellow-light", text: "var(--color-yellow-dark)" },
//   Offline: { bg: "bg-red-light", text: "var(--color-red)" },
// };

// const AssetCard = ({ asset, onViewDetails }) => {
//   const Icon = ASSET_ICONS[asset.type] || LeafIcon;
//   const { bg: iconBg, text: iconText } = ASSET_COLORS[asset.type] || {};
//   const { bg: statusBg, text: statusText } = STATUS_COLORS[asset.status] || {};

//   return (
//     <motion.div
//       className="card"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       whileHover={{ scale: 1.02 }}
//     >
//       <div className="card-header">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <motion.div
//               className={`icon-container ${iconBg}`}
//               style={{ color: iconText }}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Icon />
//             </motion.div>
//             <div>
//               <motion.h3
//                 className="font-semibold text-primary"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.1 }}
//               >
//                 {asset.name}
//               </motion.h3>
//               <p className="text-sm text-secondary">{asset.type}</p>
//             </div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, x: 10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <span
//               className={`badge ${statusBg}`}
//               style={{ color: statusText }}
//             >
//               {asset.status}
//             </span>
//           </motion.div>
//         </div>
//       </div>

//       <div className="card-content">
//         {/* Location */}
//         <div className="flex items-center space-x-2 text-sm text-secondary">
//           <MapPinIcon />
//           <span>{asset.location}</span>
//         </div>

//         {/* Credits Generated */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <TrendingUpIcon className="text-green" />
//             <span className="text-sm text-secondary">Credits Generated</span>
//           </div>
//           <motion.span
//             className="font-semibold text-lg text-green"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {asset.creditsGenerated.toLocaleString()}
//           </motion.span>
//         </div>

//         {/* Verification Status */}
//         <div className="flex items-center justify-between">
//           <span className="text-sm text-secondary">Verification</span>
//           <motion.span
//             className={`badge ${asset.verified ? "bg-green-light" : "var(--color-card-bg)"}`}
//             style={{ color: asset.verified ? "var(--color-green-dark)" : "var(--color-text-secondary)" }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             {asset.verified ? "Verified" : "Pending"}
//           </motion.span>
//         </div>

//         {/* Efficiency (if available) */}
//         {asset.efficiency && (
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-secondary">Efficiency</span>
//             <span className="text-sm font-semibold text-primary">{asset.efficiency}</span>
//           </div>
//         )}

//         {/* Last Updated */}
//         <div className="flex items-center space-x-2 text-xs text-secondary">
//           <CalendarIcon />
//           <span>Updated {asset.lastUpdated}</span>
//         </div>

//         {/* Action Button */}
//         <motion.button
//           className="button w-full"
//           onClick={() => onViewDetails(asset)}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <EyeIcon />
//           <span className="ml-2">View Details</span>
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default AssetCard;




import React from "react";
import { motion } from "framer-motion";
import "./orgDashboard.css"; 

// SVG Icons
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 16H9m10 0h-1a2 2 0 01-2-2v-6a2 2 0 012-2h5.5M2 10h3m-3 4h3m1.5-4v6m12-9v6M6 18a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

const TreesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m10-10a3 3 0 100-6 3 3 0 000 6zm-6 0a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.14 12.14l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M17.64 6.36l1.42-1.42" />
  </svg>
);

const WindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
  </svg>
);

const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const DropletsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 16.3c2-2.3 4-4.9 4-7.3 0-4-3-7.3-4-7.3S3 5 3 9c0 2.4 2 5 4 7.3zm10 0c2-2.3 4-4.9 4-7.3 0-4-3-7.3-4-7.3s-4 3-4 7.3c0 2.4 2 5 4 7.3z" />
  </svg>
);

const FactoryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5 12v-4m-2-9l3-3M2 7l3-3" />
    <rect x="4" y="10" width="4" height="4" />
    <rect x="10" y="6" width="4" height="4" />
    <rect x="16" y="2" width="4" height="4" />
  </svg>
);

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 20A7 7 0 0118 7c0-2-1-4-3-5a1 1 0 00-1 1v6a1 1 0 01-1 1H7a1 1 0 00-1 1c1 4 4 7 7 7z" />
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
  "Carbon Capture": { bg: "var(--color-card-bg)", text: "var(--color-text-secondary)" },
};

// Status colors
const STATUS_COLORS = {
  Active: { bg: "bg-green-light", text: "var(--color-green-dark)" },
  Maintenance: { bg: "bg-yellow-light", text: "var(--color-yellow-dark)" },
  Offline: { bg: "bg-red-light", text: "var(--color-red)" },
};

const AssetCard = ({ asset, onViewDetails }) => {
  const Icon = ASSET_ICONS[asset.type] || LeafIcon;
  const { bg: iconBg, text: iconText } = ASSET_COLORS[asset.type] || {};
  const { bg: statusBg, text: statusText } = STATUS_COLORS[asset.status] || {};

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
            <span
              className={`badge ${statusBg}`}
              style={{ color: statusText }}
            >
              {asset.status}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="card-content">
        {/* Location */}
        <div className="flex items-center space-x-2 text-sm text-secondary">
          <MapPinIcon />
          <span>{asset.location}</span>
        </div>

        {/* Credits Generated */}
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

        {/* Verification Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary">Verification</span>
          <motion.span
            className={`badge ${asset.verified ? "bg-green-light" : "var(--color-card-bg)"}`}
            style={{ color: asset.verified ? "var(--color-green-dark)" : "var(--color-text-secondary)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {asset.verified ? "Verified" : "Pending"}
          </motion.span>
        </div>

        {/* Efficiency (if available) */}
        {asset.efficiency && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary">Efficiency</span>
            <span className="text-sm font-semibold text-primary">{asset.efficiency}</span>
          </div>
        )}

        {/* Last Updated */}
        <div className="flex items-center space-x-2 text-xs text-secondary">
          <CalendarIcon />
          <span>Updated {asset.lastUpdated}</span>
        </div>

        {/* Action Button */}
        <motion.button
          className="button w-full"
          onClick={() => onViewDetails(asset)}
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

export default AssetCard;