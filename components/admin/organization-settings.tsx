"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Building, Shield, Key, Clock, FileText, Save, ExternalLink, AlertTriangle } from "lucide-react"

export function OrganizationSettings() {
  const [orgSettings, setOrgSettings] = useState({
    name: "TechCorp Inc.",
    subdomain: "techcorp",
    website: "https://techcorp.com",
    ssoEnabled: false,
    dataRetention: "90",
    auditLogs: true,
    requireTwoFactor: false,
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Show success message
  }

  const updateSetting = (key: string, value: any) => {
    setOrgSettings({ ...orgSettings, [key]: value })
  }

  return (
    <div className="space-y-6">
      {/* Organization Details */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Building className="h-5 w-5 mr-2 text-[#00C7B1]" />
            Organization Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-gray-300">Organization Name</Label>
              <Input
                value={orgSettings.name}
                onChange={(e) => updateSetting("name", e.target.value)}
                className="bg-[#1F2937] border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Website</Label>
              <Input
                value={orgSettings.website}
                onChange={(e) => updateSetting("website", e.target.value)}
                className="bg-[#1F2937] border-gray-700 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">Custom Subdomain</Label>
            <div className="flex items-center gap-2">
              <Input
                value={orgSettings.subdomain}
                onChange={(e) => updateSetting("subdomain", e.target.value)}
                className="bg-[#1F2937] border-gray-700 text-white"
                placeholder="your-org"
              />
              <span className="text-gray-400">.codegenie.ai</span>
            </div>
            <p className="text-sm text-gray-500">
              Your team will access CodeGenie at {orgSettings.subdomain}.codegenie.ai
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="h-5 w-5 mr-2 text-[#2563EB]" />
            Security & Authentication
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Single Sign-On (SSO)</Label>
              <p className="text-sm text-gray-500">Enable SAML/OAuth authentication</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500/20 text-yellow-400">Coming Soon</Badge>
              <Switch
                checked={orgSettings.ssoEnabled}
                onCheckedChange={(checked) => updateSetting("ssoEnabled", checked)}
                disabled
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Require Two-Factor Authentication</Label>
              <p className="text-sm text-gray-500">Enforce 2FA for all team members</p>
            </div>
            <Switch
              checked={orgSettings.requireTwoFactor}
              onCheckedChange={(checked) => updateSetting("requireTwoFactor", checked)}
            />
          </div>

          {orgSettings.ssoEnabled && (
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Key className="h-4 w-4 text-blue-400" />
                <span className="text-blue-400 font-medium">SSO Configuration</span>
              </div>
              <div className="space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Identity Provider</Label>
                    <Select defaultValue="google">
                      <SelectTrigger className="bg-[#1F2937] border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1F2937] border-gray-700">
                        <SelectItem value="google">Google Workspace</SelectItem>
                        <SelectItem value="azure">Azure AD</SelectItem>
                        <SelectItem value="okta">Okta</SelectItem>
                        <SelectItem value="saml">Custom SAML</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Domain</Label>
                    <Input placeholder="techcorp.com" className="bg-[#1F2937] border-gray-700 text-white" />
                  </div>
                </div>
                <Button variant="outline" className="border-gray-700 text-gray-300">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Configure SSO
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Data & Privacy */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <FileText className="h-5 w-5 mr-2 text-[#00C7B1]" />
            Data & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-gray-300">Data Retention Period</Label>
            <Select value={orgSettings.dataRetention} onValueChange={(value) => updateSetting("dataRetention", value)}>
              <SelectTrigger className="bg-[#1F2937] border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1F2937] border-gray-700">
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
                <SelectItem value="180">6 months</SelectItem>
                <SelectItem value="365">1 year</SelectItem>
                <SelectItem value="unlimited">Unlimited</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">How long to keep deleted projects and conversation history</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Audit Logs</Label>
              <p className="text-sm text-gray-500">Track all administrative actions</p>
            </div>
            <Switch
              checked={orgSettings.auditLogs}
              onCheckedChange={(checked) => updateSetting("auditLogs", checked)}
            />
          </div>

          {orgSettings.auditLogs && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-green-400 font-medium">Audit Log Retention</span>
              </div>
              <p className="text-sm text-gray-300">
                Audit logs are retained for 2 years and include user actions, permission changes, and data access.
              </p>
              <Button variant="ghost" className="mt-2 p-0 h-auto text-green-400 hover:text-green-300">
                View Audit Logs →
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-800/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <h4 className="text-red-400 font-medium mb-2">Transfer Organization Ownership</h4>
            <p className="text-sm text-gray-300 mb-4">
              Transfer ownership of this organization to another admin member.
            </p>
            <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
              Transfer Ownership
            </Button>
          </div>

          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <h4 className="text-red-400 font-medium mb-2">Delete Organization</h4>
            <p className="text-sm text-gray-300 mb-4">
              Permanently delete this organization and all associated data. This action cannot be undone.
            </p>
            <Button variant="destructive">Delete Organization</Button>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={isLoading} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
        <Save className="h-4 w-4 mr-2" />
        {isLoading ? "Saving..." : "Save Settings"}
      </Button>
    </div>
  )
}
