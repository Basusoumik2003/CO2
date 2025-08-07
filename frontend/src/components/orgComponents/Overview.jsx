// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   Progress,
//   Badge,
// } from "../components/basic-ui";

// // SVG Icons
// const TrendingUpIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
//     <polyline points="17 6 23 6 23 12" />
//   </svg>
// );

// const TrendingDownIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
//     <polyline points="17 18 23 18 23 12" />
//   </svg>
// );

// const LeafIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M21 15c0-4.5-3.6-8.2-8-8.9C8.5 6.2 5 9.7 5 14c0 2.7 1.3 5.1 3.4 6.7L3 21l1.3-4.7C6.1 18.3 8.9 20 12 20c4.4 0 8-3.6 8-8 0-1.1-.2-2.2-.6-3.2" />
//   </svg>
// );

// const AwardIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="8" r="7" />
//     <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
//   </svg>
// );

// const TargetIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="12" r="10" />
//     <circle cx="12" cy="12" r="6" />
//     <circle cx="12" cy="12" r="2" />
//   </svg>
// );

// const BuildingIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M3 21h18M5 7h14v14H5zm4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z" />
//   </svg>
// );

// const CalendarIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//     <path d="M16 2v4M8 2v4M3 10h18" />
//   </svg>
// );

// const MapPinIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const Overview = () => {
//   // Mock data for KPIs
//   const kpiData = [
//     {
//       title: "Total Carbon Credits",
//       value: "2,847",
//       change: "+12.5%",
//       trend: "up",
//       icon: AwardIcon,
//       color: "text-green",
//       bgColor: "bg-green-100",
//     },
//     {
//       title: "CO₂ Reduced (Tons)",
//       value: "1,423.5",
//       change: "+8.2%",
//       trend: "up",
//       icon: LeafIcon,
//       color: "text-blue",
//       bgColor: "bg-blue-100",
//     },
//     {
//       title: "Active Assets",
//       value: "156",
//       change: "+3",
//       trend: "up",
//       icon: BuildingIcon,
//       color: "text-purple",
//       bgColor: "bg-purple-100",
//     },
//     {
//       title: "Verified Credits",
//       value: "2,203",
//       change: "77.4%",
//       trend: "up",
//       icon: TargetIcon,
//       color: "text-orange",
//       bgColor: "bg-orange-100",
//     },
//     {
//       title: "Monthly Growth",
//       value: "18.7%",
//       change: "+2.3%",
//       trend: "up",
//       icon: TrendingUpIcon,
//       color: "text-green",
//       bgColor: "bg-green-100",
//     },
//     {
//       title: "Active Projects",
//       value: "24",
//       change: "+2",
//       trend: "up",
//       icon: CalendarIcon,
//       color: "text-indigo",
//       bgColor: "bg-indigo-100",
//     },
//   ];

//   // Mock progress data
//   const progressData = [
//     {
//       title: "Carbon Neutral Goal 2024",
//       current: 2847,
//       target: 5000,
//       percentage: 57,
//       deadline: "Dec 31, 2024",
//     },
//     {
//       title: "EU Compliance Target",
//       current: 1200,
//       target: 1500,
//       percentage: 80,
//       deadline: "Mar 15, 2024",
//     },
//     {
//       title: "Asset Diversification",
//       current: 7,
//       target: 10,
//       percentage: 70,
//       deadline: "Jun 30, 2024",
//     },
//   ];

//   // Mock compliance data
//   const complianceRegions = [
//     { region: "European Union", score: 92, status: "Compliant" },
//     { region: "United States", score: 88, status: "Compliant" },
//     { region: "Asia Pacific", score: 76, status: "Monitor" },
//     { region: "Global South", score: 85, status: "Compliant" },
//   ];

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
//           <h1 className="text-3xl font-bold">Dashboard Overview</h1>
//           <p className="text-secondary mt-1">
//             Monitor your carbon positive progress and key metrics
//           </p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Badge variant="outline" className="border-green">
//             <LeafIcon className="text-green w-3 h-3 mr-1" />
//             Carbon Positive
//           </Badge>
//         </div>
//       </div>

//       {/* KPI Cards Grid */}
//       <div className="grid-1 md-grid-2 lg-grid-3">
//         {kpiData.map((kpi, index) => {
//           const Icon = kpi.icon;
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div className={`${kpi.bgColor} p-3 rounded-lg`}>
//                       <Icon className={`${kpi.color}`} />
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       {kpi.trend === "up" ? (
//                         <TrendingUpIcon className="text-green" />
//                       ) : (
//                         <TrendingDownIcon className="text-red" />
//                       )}
//                       <span
//                         className={`text-sm font-medium ${
//                           kpi.trend === "up" ? "text-green" : "text-red"
//                         }`}
//                       >
//                         {kpi.change}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <div className="text-2xl font-bold">{kpi.value}</div>
//                     <div className="text-sm text-secondary mt-1">{kpi.title}</div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           );
//         })}
//       </div>

//       <div className="grid-1 lg-grid-2">
//         {/* Progress Trackers */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center space-x-2">
//               <TargetIcon className="text-blue" />
//               <span>Goal Progress</span>
//             </CardTitle>
//             <CardDescription>
//               Track your carbon targets and milestones
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             {progressData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <span className="font-medium">{item.title}</span>
//                     <span className="text-sm text-secondary">
//                       {item.percentage}%
//                     </span>
//                   </div>
//                   <Progress value={item.percentage} />
//                   <div className="flex items-center justify-between text-sm text-secondary">
//                     <span>
//                       {item.current.toLocaleString()} /{" "}
//                       {item.target.toLocaleString()} credits
//                     </span>
//                     <span className="flex items-center">
//                       <CalendarIcon className="mr-1" />
//                       {item.deadline}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </CardContent>
//         </Card>

//         {/* Compliance Summary */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center space-x-2">
//               <MapPinIcon className="text-purple" />
//               <span>Compliance Overview</span>
//             </CardTitle>
//             <CardDescription>
//               Regional compliance status and scores
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {complianceRegions.map((region, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 rounded-full bg-green-500" />
//                     <span className="font-medium">{region.region}</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <span className="text-lg font-semibold">{region.score}%</span>
//                     <Badge
//                       variant={region.status === "Compliant" ? "default" : "secondary"}
//                       className={
//                         region.status === "Compliant" ? "badge-green" : "badge-yellow"
//                       }
//                     >
//                       {region.status}
//                     </Badge>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//             <motion.div
//               className="mt-6 p-4 bg-blue-50 rounded-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3, delay: 0.4 }}
//             >
//               <div className="text-center">
//                 <div className="text-sm text-blue font-medium">
//                   Overall Compliance Score
//                 </div>
//                 <div className="text-3xl font-bold text-blue-dark mt-1">
//                   85.25%
//                 </div>
//                 <div className="text-sm text-blue mt-1">
//                   Above industry average
//                 </div>
//               </div>
//             </motion.div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Recent Activity Feed */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Activity</CardTitle>
//           <CardDescription>Latest updates and transactions</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {[
//               {
//                 action: "Credit Verification",
//                 item: "Solar Farm #3",
//                 status: "Completed",
//                 time: "2 hours ago",
//                 type: "success",
//               },
//               {
//                 action: "Asset Registration",
//                 item: "EV Fleet Expansion",
//                 status: "Pending",
//                 time: "4 hours ago",
//                 type: "warning",
//               },
//               {
//                 action: "Compliance Report",
//                 item: "Q4 EU Report",
//                 status: "Submitted",
//                 time: "1 day ago",
//                 type: "success",
//               },
//               {
//                 action: "Team Update",
//                 item: "New Member Added",
//                 status: "Completed",
//                 time: "2 days ago",
//                 type: "info",
//               },
//             ].map((activity, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-center space-x-4 p-3 rounded-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 whileHover={{ backgroundColor: "var(--color-gray-50)" }}
//               >
//                 <div
//                   className={`w-3 h-3 rounded-full ${
//                     activity.type === "success"
//                       ? "bg-green-500"
//                       : activity.type === "warning"
//                       ? "bg-yellow-500"
//                       : "bg-blue-500"
//                   }`}
//                 />
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <span className="font-medium">{activity.action}</span>
//                     <span className="text-sm text-secondary">{activity.time}</span>
//                   </div>
//                   <div className="flex items-center justify-between mt-1">
//                     <span className="text-sm text-secondary">{activity.item}</span>
//                     <Badge variant="outline" className="text-xs">
//                       {activity.status}
//                     </Badge>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export default Overview;






import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Progress,
  Badge,
} from "./basic-ui";

// SVG Icons
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

const TrendingDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
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
    <path d="M21 15c0-4.5-3.6-8.2-8-8.9C8.5 6.2 5 9.7 5 14c0 2.7 1.3 5.1 3.4 6.7L3 21l1.3-4.7C6.1 18.3 8.9 20 12 20c4.4 0 8-3.6 8-8 0-1.1-.2-2.2-.6-3.2" />
  </svg>
);

const AwardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const TargetIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 21h18M5 7h14v14H5zm4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z" />
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

const MapPinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Overview = () => {
  // Mock data for KPIs
  const kpiData = [
    {
      title: "Total Carbon Credits",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: AwardIcon,
      color: "text-green",
      bgColor: "bg-green-100",
    },
    {
      title: "CO₂ Reduced (Tons)",
      value: "1,423.5",
      change: "+8.2%",
      trend: "up",
      icon: LeafIcon,
      color: "text-blue",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Assets",
      value: "156",
      change: "+3",
      trend: "up",
      icon: BuildingIcon,
      color: "text-purple",
      bgColor: "bg-purple-100",
    },
    {
      title: "Verified Credits",
      value: "2,203",
      change: "77.4%",
      trend: "up",
      icon: TargetIcon,
      color: "text-orange",
      bgColor: "bg-orange-100",
    },
    {
      title: "Monthly Growth",
      value: "18.7%",
      change: "+2.3%",
      trend: "up",
      icon: TrendingUpIcon,
      color: "text-green",
      bgColor: "bg-green-100",
    },
    {
      title: "Active Projects",
      value: "24",
      change: "+2",
      trend: "up",
      icon: CalendarIcon,
      color: "text-indigo",
      bgColor: "bg-indigo-100",
    },
  ];

  // Mock progress data
  const progressData = [
    {
      title: "Carbon Neutral Goal 2024",
      current: 2847,
      target: 5000,
      percentage: 57,
      deadline: "Dec 31, 2024",
    },
    {
      title: "EU Compliance Target",
      current: 1200,
      target: 1500,
      percentage: 80,
      deadline: "Mar 15, 2024",
    },
    {
      title: "Asset Diversification",
      current: 7,
      target: 10,
      percentage: 70,
      deadline: "Jun 30, 2024",
    },
  ];

  // Mock compliance data
  const complianceRegions = [
    { region: "European Union", score: 92, status: "Compliant" },
    { region: "United States", score: 88, status: "Compliant" },
    { region: "Asia Pacific", score: 76, status: "Monitor" },
    { region: "Global South", score: 85, status: "Compliant" },
  ];

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
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-secondary mt-1">
            Monitor your carbon positive progress and key metrics
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="border-green">
            <LeafIcon className="text-green w-3 h-3 mr-1" />
            Carbon Positive
          </Badge>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid-1 md-grid-2 lg-grid-3">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                      <Icon className={`${kpi.color}`} />
                    </div>
                    <div className="flex items-center space-x-1">
                      {kpi.trend === "up" ? (
                        <TrendingUpIcon className="text-green" />
                      ) : (
                        <TrendingDownIcon className="text-red" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          kpi.trend === "up" ? "text-green" : "text-red"
                        }`}
                      >
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-bold">{kpi.value}</div>
                    <div className="text-sm text-secondary mt-1">
                      {kpi.title}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid-1 lg-grid-2">
        {/* Progress Trackers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TargetIcon className="text-blue" />
              <span>Goal Progress</span>
            </CardTitle>
            <CardDescription>
              Track your carbon targets and milestones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {progressData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-sm text-secondary">
                      {item.percentage}%
                    </span>
                  </div>
                  <Progress value={item.percentage} />
                  <div className="flex items-center justify-between text-sm text-secondary">
                    <span>
                      {item.current.toLocaleString()} /{" "}
                      {item.target.toLocaleString()} credits
                    </span>
                    <span className="flex items-center">
                      <CalendarIcon className="mr-1" />
                      {item.deadline}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Compliance Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPinIcon className="text-purple" />
              <span>Compliance Overview</span>
            </CardTitle>
            <CardDescription>
              Regional compliance status and scores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceRegions.map((region, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="font-medium">{region.region}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-semibold">
                      {region.score}%
                    </span>
                    <Badge
                      variant={
                        region.status === "Compliant" ? "default" : "secondary"
                      }
                      className={
                        region.status === "Compliant"
                          ? "badge-green"
                          : "badge-yellow"
                      }
                    >
                      {region.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-6 p-4 bg-blue-50 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-sm text-blue font-medium">
                  Overall Compliance Score
                </div>
                <div className="text-3xl font-bold text-blue-dark mt-1">
                  85.25%
                </div>
                <div className="text-sm text-blue mt-1">
                  Above industry average
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates and transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Credit Verification",
                item: "Solar Farm #3",
                status: "Completed",
                time: "2 hours ago",
                type: "success",
              },
              {
                action: "Asset Registration",
                item: "EV Fleet Expansion",
                status: "Pending",
                time: "4 hours ago",
                type: "warning",
              },
              {
                action: "Compliance Report",
                item: "Q4 EU Report",
                status: "Submitted",
                time: "1 day ago",
                type: "success",
              },
              {
                action: "Team Update",
                item: "New Member Added",
                status: "Completed",
                time: "2 days ago",
                type: "info",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ backgroundColor: "var(--color-gray-50)" }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    activity.type === "success"
                      ? "bg-green-500"
                      : activity.type === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{activity.action}</span>
                    <span className="text-sm text-secondary">
                      {activity.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-secondary">
                      {activity.item}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Overview;