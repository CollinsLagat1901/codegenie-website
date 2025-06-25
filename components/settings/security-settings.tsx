"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Shield, Smartphone, Trash2, AlertTriangle, Clock, MapPin } from "lucide-react"

export function SecuritySettings() {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: false,
    sessionTimeout: true,
    loginAlerts: true,
  })

  const [isLoading, setIsLoading] = useState(false)

  // Mock session data
  const sessions = [
    {
      id: "1",
      device: "Chrome on Windows",
      location: "San Francisco, CA",
      lastActive: "2 hours ago",
      current: true,
    },
    {
      id: "2",
      device: "Safari on iPhone",
      location: "San Francisco, CA",
      lastActive: "1 day ago",
      current: false,
    },
    {
      id: "3",
      device: "Firefox on macOS",
      location: "New York, NY",
      lastActive: "3 days ago",
      current: false,
    },
  ]

  const handleEnable2FA = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setSecuritySettings({ ...securitySettings, twoFactorEnabled: true })
    setIsLoading(false)
  }

  const handleDeleteAccount = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)
    // Redirect to goodbye page
  }

  return (
    <div className="space-y-6">
      {/* Two-Factor Authentication */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="h-5 w-5 mr-2 text-[#00C7B1]" />
            Two-Factor Authentication
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Enable 2FA</Label>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <div className="flex items-center gap-2">
              {securitySettings.twoFactorEnabled ? (
                <Badge className="bg-green-500/20 text-green-400">Enabled</Badge>
              ) : (
                <Badge className="bg-gray-500/20 text-gray-400">Disabled</Badge>
              )}
              <Switch
                checked={securitySettings.twoFactorEnabled}
                onCheckedChange={handleEnable2FA}
                disabled={isLoading}
              />
            </div>
          </div>

          {!securitySettings.twoFactorEnabled && (
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <Smartphone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="text-blue-400 font-medium">Secure Your Account</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Enable 2FA to protect your account with an authenticator app like Google Authenticator or Authy.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Login & Session Settings */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Login & Sessions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Session Timeout</Label>
              <p className="text-sm text-gray-500">Automatically log out after 30 days of inactivity</p>
            </div>
            <Switch
              checked={securitySettings.sessionTimeout}
              onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, sessionTimeout: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Login Alerts</Label>
              <p className="text-sm text-gray-500">Get notified of new login attempts</p>
            </div>
            <Switch
              checked={securitySettings.loginAlerts}
              onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, loginAlerts: checked })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Active Sessions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-gray-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2563EB]/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{session.device}</span>
                    {session.current && <Badge className="bg-[#00C7B1] text-black text-xs">Current</Badge>}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {session.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {session.lastActive}
                    </div>
                  </div>
                </div>
              </div>
              {!session.current && (
                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                  Revoke
                </Button>
              )}
            </div>
          ))}
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
            <h4 className="text-red-400 font-medium mb-2">Delete Account</h4>
            <p className="text-sm text-gray-300 mb-4">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#111827] border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-white flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
                    Delete Account
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Are you absolutely sure? This action cannot be undone and will permanently delete:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Your account and profile information</li>
                    <li>All saved projects and AI conversations</li>
                    <li>Your subscription and billing history</li>
                    <li>All integrations and connected services</li>
                  </ul>
                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleDeleteAccount} disabled={isLoading} variant="destructive" className="flex-1">
                      {isLoading ? "Deleting..." : "Yes, Delete My Account"}
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-700 text-gray-300">
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
