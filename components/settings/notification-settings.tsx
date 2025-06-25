"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Mail, MessageSquare, Code, Bell } from "lucide-react"

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    aiInteractionAlerts: true,
    projectUpdateAlerts: false,
    weeklyDigest: true,
    securityAlerts: true,
    frequency: "immediate",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Show success message
  }

  const updateNotification = (key: string, value: boolean | string) => {
    setNotifications({ ...notifications, [key]: value })
  }

  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Mail className="h-5 w-5 mr-2 text-[#00C7B1]" />
            Email Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Enable Email Notifications</Label>
              <p className="text-sm text-gray-500">Receive notifications via email</p>
            </div>
            <Switch
              checked={notifications.emailNotifications}
              onCheckedChange={(checked) => updateNotification("emailNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Weekly Digest</Label>
              <p className="text-sm text-gray-500">Summary of your weekly activity</p>
            </div>
            <Switch
              checked={notifications.weeklyDigest}
              onCheckedChange={(checked) => updateNotification("weeklyDigest", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Security Alerts</Label>
              <p className="text-sm text-gray-500">Important security notifications</p>
            </div>
            <Switch
              checked={notifications.securityAlerts}
              onCheckedChange={(checked) => updateNotification("securityAlerts", checked)}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">Notification Frequency</Label>
            <Select value={notifications.frequency} onValueChange={(value) => updateNotification("frequency", value)}>
              <SelectTrigger className="bg-[#1F2937] border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1F2937] border-gray-700">
                <SelectItem value="immediate">Immediate</SelectItem>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Activity Notifications */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Bell className="h-5 w-5 mr-2 text-[#2563EB]" />
            Activity Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1 flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-[#00C7B1]" />
              <div>
                <Label className="text-gray-300">AI Interaction Alerts</Label>
                <p className="text-sm text-gray-500">Notifications for AI responses and suggestions</p>
              </div>
            </div>
            <Switch
              checked={notifications.aiInteractionAlerts}
              onCheckedChange={(checked) => updateNotification("aiInteractionAlerts", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1 flex items-center gap-3">
              <Code className="h-5 w-5 text-[#2563EB]" />
              <div>
                <Label className="text-gray-300">Project Update Alerts</Label>
                <p className="text-sm text-gray-500">Notifications when projects are modified</p>
              </div>
            </div>
            <Switch
              checked={notifications.projectUpdateAlerts}
              onCheckedChange={(checked) => updateNotification("projectUpdateAlerts", checked)}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={isLoading} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
        <Save className="h-4 w-4 mr-2" />
        {isLoading ? "Saving..." : "Save Notification Settings"}
      </Button>
    </div>
  )
}
