"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, MessageSquare, Code, Users, TrendingUp, TrendingDown, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UsageAnalytics() {
  // Mock data - replace with real analytics data
  const analyticsData = {
    currentPeriod: "December 2024",
    usage: {
      aiInteractions: {
        current: 2847,
        limit: 10000,
        change: 12.5,
        trend: "up",
      },
      projects: {
        current: 156,
        limit: 500,
        change: -3.2,
        trend: "down",
      },
      activeUsers: {
        current: 18,
        total: 24,
        change: 8.1,
        trend: "up",
      },
      storage: {
        current: 2.4,
        limit: 100,
        change: 15.3,
        trend: "up",
      },
    },
    topUsers: [
      {
        name: "Sarah Chen",
        email: "sarah.chen@techcorp.com",
        interactions: 456,
        projects: 12,
        lastActive: "2 hours ago",
      },
      {
        name: "Marcus Rodriguez",
        email: "marcus.rodriguez@techcorp.com",
        interactions: 389,
        projects: 8,
        lastActive: "1 hour ago",
      },
      {
        name: "Emily Johnson",
        email: "emily.johnson@techcorp.com",
        interactions: 234,
        projects: 6,
        lastActive: "4 hours ago",
      },
    ],
    dailyUsage: [
      { date: "Dec 1", interactions: 89, users: 12 },
      { date: "Dec 2", interactions: 156, users: 15 },
      { date: "Dec 3", interactions: 234, users: 18 },
      { date: "Dec 4", interactions: 198, users: 16 },
      { date: "Dec 5", interactions: 267, users: 19 },
    ],
    languageBreakdown: [
      { language: "TypeScript", percentage: 35, count: 998 },
      { language: "JavaScript", percentage: 28, count: 797 },
      { language: "Python", percentage: 20, count: 569 },
      { language: "React", percentage: 12, count: 342 },
      { language: "Node.js", percentage: 5, count: 141 },
    ],
  }

  const getTrendIcon = (trend: string, change: number) => {
    if (trend === "up") {
      return <TrendingUp className="h-4 w-4 text-green-400" />
    } else {
      return <TrendingDown className="h-4 w-4 text-red-400" />
    }
  }

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-400" : "text-red-400"
  }

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Usage Analytics</h2>
          <p className="text-gray-400">Monitor team activity and resource consumption</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="december">
            <SelectTrigger className="w-48 bg-[#1F2937] border-gray-700 text-white">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1F2937] border-gray-700">
              <SelectItem value="december">December 2024</SelectItem>
              <SelectItem value="november">November 2024</SelectItem>
              <SelectItem value="october">October 2024</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-700 text-gray-300">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Usage Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="h-8 w-8 text-[#00C7B1]" />
              <div className={`flex items-center gap-1 ${getTrendColor(analyticsData.usage.aiInteractions.trend)}`}>
                {getTrendIcon(analyticsData.usage.aiInteractions.trend, analyticsData.usage.aiInteractions.change)}
                <span className="text-sm font-medium">{analyticsData.usage.aiInteractions.change}%</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm">AI Interactions</p>
              <p className="text-2xl font-bold text-white">
                {analyticsData.usage.aiInteractions.current.toLocaleString()}
              </p>
              <div className="mt-2">
                <Progress
                  value={(analyticsData.usage.aiInteractions.current / analyticsData.usage.aiInteractions.limit) * 100}
                  className="h-2"
                />
                <p className="text-xs text-gray-400 mt-1">
                  {Math.round(
                    (analyticsData.usage.aiInteractions.current / analyticsData.usage.aiInteractions.limit) * 100,
                  )}
                  % of {analyticsData.usage.aiInteractions.limit.toLocaleString()} limit
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Code className="h-8 w-8 text-[#2563EB]" />
              <div className={`flex items-center gap-1 ${getTrendColor(analyticsData.usage.projects.trend)}`}>
                {getTrendIcon(analyticsData.usage.projects.trend, analyticsData.usage.projects.change)}
                <span className="text-sm font-medium">{Math.abs(analyticsData.usage.projects.change)}%</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active Projects</p>
              <p className="text-2xl font-bold text-white">{analyticsData.usage.projects.current}</p>
              <div className="mt-2">
                <Progress
                  value={(analyticsData.usage.projects.current / analyticsData.usage.projects.limit) * 100}
                  className="h-2"
                />
                <p className="text-xs text-gray-400 mt-1">
                  {Math.round((analyticsData.usage.projects.current / analyticsData.usage.projects.limit) * 100)}% of{" "}
                  {analyticsData.usage.projects.limit} limit
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-[#00C7B1]" />
              <div className={`flex items-center gap-1 ${getTrendColor(analyticsData.usage.activeUsers.trend)}`}>
                {getTrendIcon(analyticsData.usage.activeUsers.trend, analyticsData.usage.activeUsers.change)}
                <span className="text-sm font-medium">{analyticsData.usage.activeUsers.change}%</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active Users</p>
              <p className="text-2xl font-bold text-white">{analyticsData.usage.activeUsers.current}</p>
              <p className="text-xs text-gray-400 mt-2">of {analyticsData.usage.activeUsers.total} total members</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="h-8 w-8 text-[#2563EB]" />
              <div className={`flex items-center gap-1 ${getTrendColor(analyticsData.usage.storage.trend)}`}>
                {getTrendIcon(analyticsData.usage.storage.trend, analyticsData.usage.storage.change)}
                <span className="text-sm font-medium">{analyticsData.usage.storage.change}%</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Storage Used</p>
              <p className="text-2xl font-bold text-white">{analyticsData.usage.storage.current} GB</p>
              <div className="mt-2">
                <Progress
                  value={(analyticsData.usage.storage.current / analyticsData.usage.storage.limit) * 100}
                  className="h-2"
                />
                <p className="text-xs text-gray-400 mt-1">
                  {Math.round((analyticsData.usage.storage.current / analyticsData.usage.storage.limit) * 100)}% of{" "}
                  {analyticsData.usage.storage.limit} GB limit
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Users */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Top Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#00C7B1]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#00C7B1] font-semibold">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-white font-semibold">{user.interactions}</p>
                          <p className="text-gray-400 text-xs">Interactions</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-semibold">{user.projects}</p>
                          <p className="text-gray-400 text-xs">Projects</p>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">{user.lastActive}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Language Breakdown */}
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Language Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.languageBreakdown.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{lang.language}</span>
                    <div className="text-right">
                      <span className="text-white font-medium">{lang.percentage}%</span>
                      <p className="text-gray-400 text-xs">{lang.count} uses</p>
                    </div>
                  </div>
                  <Progress value={lang.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
