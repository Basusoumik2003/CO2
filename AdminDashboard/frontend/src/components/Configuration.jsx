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
  Switch,
  Label,
  Textarea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./basic-ui";
import {
  Settings,
  Save,
  RotateCcw,
  DollarSign,
  Bell,
  Key,
  Database,
  Mail,
  Shield,
  Globe,
  AlertTriangle,
  CheckCircle,
  Copy,
  Eye,
  EyeOff,
} from "lucide-react";

const Configuration = () => {
  const [showApiKeys, setShowApiKeys] = useState({});
  const [emailSettings, setEmailSettings] = useState({
    smtpServer: "smtp.gmail.com",
    smtpPort: "587",
    username: "admin@greencredit.com",
    password: "**********",
    enableTLS: true,
    enableNotifications: true,
  });

  const [creditRules, setCreditRules] = useState({
    evCreditRate: "0.8",
    treeCreditRate: "1.2",
    solarCreditRate: "1.0",
    windCreditRate: "0.9",
    minVerificationPeriod: "7",
    autoApprovalThreshold: "100",
    requireThirdPartyAudit: true,
    enableMarketplaceFeatures: true,
  });

  const [fees, setFees] = useState({
    transactionFee: "2.5",
    listingFee: "1.0",
    verificationFee: "50.00",
    withdrawalFee: "0.5",
    enableDynamicPricing: false,
  });

  const apiKeys = [
    {
      name: "Blockchain API",
      key: "sk_live_blockchain_api_789xyz123",
      description: "Used for carbon credit token minting and transfers",
      status: "active",
      lastUsed: "2024-06-15 14:30",
    },
    {
      name: "Payment Gateway",
      key: "pk_live_payment_456abc789",
      description: "Stripe payment processing integration",
      status: "active",
      lastUsed: "2024-06-15 12:15",
    },
    {
      name: "Verification Service",
      key: "vk_live_verify_321def456",
      description: "Third-party asset verification service",
      status: "active",
      lastUsed: "2024-06-14 16:45",
    },
    {
      name: "Email Service",
      key: "ek_live_email_987ghi654",
      description: "SendGrid email delivery service",
      status: "active",
      lastUsed: "2024-06-15 10:20",
    },
  ];

  const toggleApiKeyVisibility = (index) => {
    setShowApiKeys((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // TODO: Show toast notification
  };

  const saveConfiguration = (section) => {
    // TODO: Implement configuration saving
    console.log(`Saving ${section} configuration`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Platform Configuration
          </h2>
          <p className="text-gray-600">
            Manage platform settings, credit rules, and integrations
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Save className="h-4 w-4 mr-2" />
            Save All Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="credit-rules" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="credit-rules">Credit Rules</TabsTrigger>
          <TabsTrigger value="fees">Fees & Pricing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        {/* Credit Rules Tab */}
        <TabsContent value="credit-rules" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-green-600" />
                <span>Carbon Credit Rules</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="ev-rate">EV Credit Rate (per mile)</Label>
                    <Input
                      id="ev-rate"
                      value={creditRules.evCreditRate}
                      onChange={(e) =>
                        setCreditRules({
                          ...creditRules,
                          evCreditRate: e.target.value,
                        })
                      }
                      placeholder="0.8"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Credits generated per mile driven
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="tree-rate">
                      Tree Credit Rate (per tree)
                    </Label>
                    <Input
                      id="tree-rate"
                      value={creditRules.treeCreditRate}
                      onChange={(e) =>
                        setCreditRules({
                          ...creditRules,
                          treeCreditRate: e.target.value,
                        })
                      }
                      placeholder="1.2"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Credits generated per tree planted
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="solar-rate">
                      Solar Credit Rate (per kWh)
                    </Label>
                    <Input
                      id="solar-rate"
                      value={creditRules.solarCreditRate}
                      onChange={(e) =>
                        setCreditRules({
                          ...creditRules,
                          solarCreditRate: e.target.value,
                        })
                      }
                      placeholder="1.0"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Credits generated per kWh produced
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="wind-rate">
                      Wind Credit Rate (per kWh)
                    </Label>
                    <Input
                      id="wind-rate"
                      value={creditRules.windCreditRate}
                      onChange={(e) =>
                        setCreditRules({
                          ...creditRules,
                          windCreditRate: e.target.value,
                        })
                      }
                      placeholder="0.9"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Credits generated per kWh produced
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="verification-period">
                      Min Verification Period (days)
                    </Label>
                    <Input
                      id="verification-period"
                      value={creditRules.minVerificationPeriod}
                      onChange={(e) =>
                        setCreditRules({
                          ...creditRules,
                          minVerificationPeriod: e.target.value,
                        })
                      }
                      placeholder="7"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Minimum days for verification process
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="auto-approval">
                      Auto Approval Threshold
                    </Label>
                    <Input
                      id="auto-approval"
                      value={creditRules.autoApprovalThreshold}
                      onChange={(e) =>
                        setCreditRules({
                          ...creditRules,
                          autoApprovalThreshold: e.target.value,
                        })
                      }
                      placeholder="100"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Credits below this amount are auto-approved
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="third-party-audit"
                      checked={creditRules.requireThirdPartyAudit}
                      onCheckedChange={(checked) =>
                        setCreditRules({
                          ...creditRules,
                          requireThirdPartyAudit: checked,
                        })
                      }
                    />
                    <Label htmlFor="third-party-audit">
                      Require Third-Party Audit
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="marketplace-features"
                      checked={creditRules.enableMarketplaceFeatures}
                      onCheckedChange={(checked) =>
                        setCreditRules({
                          ...creditRules,
                          enableMarketplaceFeatures: checked,
                        })
                      }
                    />
                    <Label htmlFor="marketplace-features">
                      Enable Marketplace Features
                    </Label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={() => saveConfiguration("credit-rules")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Credit Rules
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Fees & Pricing Tab */}
        <TabsContent value="fees" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span>Platform Fees & Pricing</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="transaction-fee">Transaction Fee (%)</Label>
                    <Input
                      id="transaction-fee"
                      value={fees.transactionFee}
                      onChange={(e) =>
                        setFees({ ...fees, transactionFee: e.target.value })
                      }
                      placeholder="2.5"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Percentage fee on marketplace transactions
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="listing-fee">Listing Fee (%)</Label>
                    <Input
                      id="listing-fee"
                      value={fees.listingFee}
                      onChange={(e) =>
                        setFees({ ...fees, listingFee: e.target.value })
                      }
                      placeholder="1.0"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Fee for creating marketplace listings
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="verification-fee">
                      Verification Fee ($)
                    </Label>
                    <Input
                      id="verification-fee"
                      value={fees.verificationFee}
                      onChange={(e) =>
                        setFees({ ...fees, verificationFee: e.target.value })
                      }
                      placeholder="50.00"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Fixed fee for asset verification
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="withdrawal-fee">Withdrawal Fee (%)</Label>
                    <Input
                      id="withdrawal-fee"
                      value={fees.withdrawalFee}
                      onChange={(e) =>
                        setFees({ ...fees, withdrawalFee: e.target.value })
                      }
                      placeholder="0.5"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Fee for withdrawing funds
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="dynamic-pricing"
                  checked={fees.enableDynamicPricing}
                  onCheckedChange={(checked) =>
                    setFees({ ...fees, enableDynamicPricing: checked })
                  }
                />
                <Label htmlFor="dynamic-pricing">Enable Dynamic Pricing</Label>
                <p className="text-xs text-gray-500 ml-2">
                  Adjust fees based on market conditions
                </p>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={() => saveConfiguration("fees")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Fee Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-blue-600" />
                <span>Email & Notification Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="smtp-server">SMTP Server</Label>
                    <Input
                      id="smtp-server"
                      value={emailSettings.smtpServer}
                      onChange={(e) =>
                        setEmailSettings({
                          ...emailSettings,
                          smtpServer: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input
                      id="smtp-port"
                      value={emailSettings.smtpPort}
                      onChange={(e) =>
                        setEmailSettings({
                          ...emailSettings,
                          smtpPort: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email-username">Username</Label>
                    <Input
                      id="email-username"
                      value={emailSettings.username}
                      onChange={(e) =>
                        setEmailSettings({
                          ...emailSettings,
                          username: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email-password">Password</Label>
                    <Input
                      id="email-password"
                      type="password"
                      value={emailSettings.password}
                      onChange={(e) =>
                        setEmailSettings({
                          ...emailSettings,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="enable-tls"
                      checked={emailSettings.enableTLS}
                      onCheckedChange={(checked) =>
                        setEmailSettings({
                          ...emailSettings,
                          enableTLS: checked,
                        })
                      }
                    />
                    <Label htmlFor="enable-tls">Enable TLS</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="enable-notifications"
                      checked={emailSettings.enableNotifications}
                      onCheckedChange={(checked) =>
                        setEmailSettings({
                          ...emailSettings,
                          enableNotifications: checked,
                        })
                      }
                    />
                    <Label htmlFor="enable-notifications">
                      Enable Email Notifications
                    </Label>
                  </div>
                </div>
              </div>
              <div>
                <Button variant="outline" className="mr-3">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Test Email
                </Button>
                <Button
                  onClick={() => saveConfiguration("notifications")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Email Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Keys Tab */}
        <TabsContent value="api-keys" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-yellow-600" />
                <span>API Keys & Integrations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((api, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-gray-900">
                          {api.name}
                        </h4>
                        <Badge
                          className={
                            api.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }
                        >
                          {api.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {api.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {showApiKeys[index]
                              ? api.key
                              : api.key.replace(/./g, "*").slice(0, 20) + "..."}
                          </code>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleApiKeyVisibility(index)}
                          >
                            {showApiKeys[index] ? (
                              <EyeOff className="h-3 w-3" />
                            ) : (
                              <Eye className="h-3 w-3" />
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(api.key)}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="text-xs text-gray-500">
                          Last used: {api.lastUsed}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button className="bg-yellow-600 hover:bg-yellow-700">
                  <Key className="h-4 w-4 mr-2" />
                  Generate New API Key
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Tab */}
        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  <span>Database Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Database Host</Label>
                  <Input value="postgres.greencredit.com" disabled />
                </div>
                <div>
                  <Label>Database Name</Label>
                  <Input value="greencredit_prod" disabled />
                </div>
                <div>
                  <Label>Connection Pool Size</Label>
                  <Input value="20" />
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">
                    Database connection healthy
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  <span>Security Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="2fa" defaultChecked />
                  <Label htmlFor="2fa">Require 2FA for Admins</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="ip-whitelist" defaultChecked />
                  <Label htmlFor="ip-whitelist">Enable IP Whitelisting</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="audit-logs" defaultChecked />
                  <Label htmlFor="audit-logs">Enable Audit Logging</Label>
                </div>
                <div>
                  <Label>Session Timeout (minutes)</Label>
                  <Input value="30" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <span>Platform Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Platform Name</Label>
                  <Input value="GreenCredit Platform" />
                </div>
                <div>
                  <Label>Default Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST</SelectItem>
                      <SelectItem value="pst">PST</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Maintenance Mode</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Switch id="maintenance" />
                    <Label htmlFor="maintenance">Enable Maintenance Mode</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Configuration;
