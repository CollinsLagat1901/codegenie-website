"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Save, Monitor, Sun, Moon, Grid3X3, List } from "lucide-react"

export function PreferencesSettings() {
  const [preferences, setPreferences] = useState({
    theme: "dark",
    language: "en",
    defaultView: "grid",
    timezone: "UTC-8",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Show success message
  }

  return (
    <div className="space-y-6">
      {/* Theme Settings */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label className="text-gray-300">Theme</Label>
            <RadioGroup
              value={preferences.theme}
              onValueChange={(value) => setPreferences({ ...preferences, theme: value })}
              className="grid grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2 p-4 border border-gray-700 rounded-lg hover:border-[#00C7B1] transition-colors">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <Sun className="h-4 w-4" />
                  Light
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border border-gray-700 rounded-lg hover:border-[#00C7B1] transition-colors">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <Moon className="h-4 w-4" />
                  Dark
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border border-gray-700 rounded-lg hover:border-[#00C7B1] transition-colors">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system" className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <Monitor className="h-4 w-4" />
                  System
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Language & Region */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Language & Region</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-gray-300">Language</Label>
              <Select
                value={preferences.language}
                onValueChange={(value) => setPreferences({ ...preferences, language: value })}
              >
                <SelectTrigger className="bg-[#1F2937] border-gray-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1F2937] border-gray-700">
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Timezone</Label>
              <Select
                value={preferences.timezone}
                onValueChange={(value) => setPreferences({ ...preferences, timezone: value })}
              >
                <SelectTrigger className="bg-[#1F2937] border-gray-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1F2937] border-gray-700">
                  <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                  <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                  <SelectItem value="UTC+0">Greenwich Mean Time (UTC+0)</SelectItem>
                  <SelectItem value="UTC+1">Central European Time (UTC+1)</SelectItem>
                  <SelectItem value="UTC+8">China Standard Time (UTC+8)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interface Preferences */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Interface</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label className="text-gray-300">Default Project View</Label>
            <RadioGroup
              value={preferences.defaultView}
              onValueChange={(value) => setPreferences({ ...preferences, defaultView: value })}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-4 border border-gray-700 rounded-lg hover:border-[#00C7B1] transition-colors">
                <RadioGroupItem value="grid" id="grid" />
                <Label htmlFor="grid" className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <Grid3X3 className="h-4 w-4" />
                  Grid View
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border border-gray-700 rounded-lg hover:border-[#00C7B1] transition-colors">
                <RadioGroupItem value="list" id="list" />
                <Label htmlFor="list" className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <List className="h-4 w-4" />
                  List View
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={isLoading} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
        <Save className="h-4 w-4 mr-2" />
        {isLoading ? "Saving..." : "Save Preferences"}
      </Button>
    </div>
  )
}
