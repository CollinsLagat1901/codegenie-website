"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Code, TrendingUp, AlertTriangle, Calendar, ArrowUpRight, Crown } from "lucide-react"

export function AdminOverview() {
  // Mock data - replace with real data from your backend
  const overviewData = {
    organization: {
      name: "TechCorp Inc.",
      plan: "Enterprise",
      members: 24,
      activeMembers: 18,
    },
    usage: {
      aiInteractions: 2847,
      aiInteractionsLimit: 10000,
      projects: 156,
      projectsLimit: 500,
      storage: 2.4, // GB
      storageLimit: 100, // GB
    },
    billing: {
      currentPeriod: "Dec 1 - Dec 31, 2024",
      nextBilling: "Jan 1, 2025",
      amount: "$299/month",
    },
    recentActivity: [
      {
        user: "Sarah Chen",
        action: "Created new project",
        project: "E-commerce API",
        time: "2 hours ago",
      },
      {
        user: "Marcus Rodriguez",
        action: "Completed AI session",
        project: "Mobile App Backend",
        time: "4 hours ago",
      },
      {
        user: "Emily Johnson",
        action: "Invited new member",
        project: "team@techcorp.com",
        time: "1 day ago",
      },
    ],
    alerts: [
      {
        type: "warning",
        message: "Approaching AI interaction limit (85% used)",
        action: "Upgrade plan",
      },
      {
        type: "info",
        message: "3 pending team invitations",
        action: "Review invites",
      },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Organization Summary */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white text-2xl">{overviewData.organization.name}</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-[#2563EB] text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  {overviewData.organization.plan}
                </Badge>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{overviewData.organization.members} members</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{overviewData.organization.activeMembers}</div>
              <div className="text-sm text-gray-400">Active this month</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Team Members</p>
                <p className="text-2xl font-bold text-white">{overviewData.organization.members}</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +3 this month
                </p>
              </div>
              <Users className="h-8 w-8 text-[#00C7B1]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">AI Interactions</p>
                <p className="text-2xl font-bold text-white">{overviewData.usage.aiInteractions.toLocaleString()}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {Math.round((overviewData.usage.aiInteractions / overviewData.usage.aiInteractionsLimit) * 100)}% of
                  limit
                </p>
              </div>
              <MessageSquare className="h-8 w-8 text-[#2563EB]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Projects</p>
                <p className="text-2xl font-bold text-white">{overviewData.usage.projects}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {Math.round((overviewData.usage.projects / overviewData.usage.projectsLimit) * 100)}% of limit
                </p>
              </div>
              <Code className="h-8 w-8 text-[#00C7B1]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Next Billing</p>
                <p className="text-lg font-bold text-white">{overviewData.billing.amount}</p>
                <p className="text-xs text-gray-400 mt-1">{overviewData.billing.nextBilling}</p>
              </div>
              <Calendar className="h-8 w-8 text-[#2563EB]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Usage Progress */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Usage Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">AI Interactions</span>
                  <span className="text-gray-400">
                    {overviewData.usage.aiInteractions.toLocaleString()} /{" "}
                    {overviewData.usage.aiInteractionsLimit.toLocaleString()}
                  </span>
                </div>
                <Progress
                  value={(overviewData.usage.aiInteractions / overviewData.usage.aiInteractionsLimit) * 100}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Projects</span>
                  <span className="text-gray-400">
                    {overviewData.usage.projects} / {overviewData.usage.projectsLimit}
                  </span>
                </div>
                <Progress
                  value={(overviewData.usage.projects / overviewData.usage.projectsLimit) * 100}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Storage</span>
                  <span className="text-gray-400">
                    {overviewData.usage.storage} GB / {overviewData.usage.storageLimit} GB
                  </span>
                </div>
                <Progress
                  value={(overviewData.usage.storage / overviewData.usage.storageLimit) * 100}
                  className="h-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <Button variant="ghost" size="sm" className="text-[#00C7B1] hover:text-[#00A693]">
                  View All
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {overviewData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-[#00C7B1]/20 rounded-full flex items-center justify-center">
                      <Code className="h-4 w-4 text-[#00C7B1]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-gray-400 text-xs">{activity.project}</p>
                    </div>
                    <span className="text-gray-500 text-xs">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts & Quick Actions */}
        <div className="space-y-6">
          {/* Alerts */}
          <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
                Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {overviewData.alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    alert.type === "warning"
                      ? "bg-yellow-500/10 border-yellow-500/20"
                      : "bg-blue-500/10 border-blue-500/20"
                  }`}
                >
                  <p className={`text-sm ${alert.type === "warning" ? "text-yellow-400" : "text-blue-400"}`}>
                    {alert.message}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className={`mt-2 p-0 h-auto ${
                      alert.type === "warning"
                        ? "text-yellow-400 hover:text-yellow-300"
                        : "text-blue-400 hover:text-blue-300"
                    }`}
                  >
                    {alert.action} →
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-[#00C7B1] hover:bg-[#00A693] text-black">
                <Users className="h-4 w-4 mr-2" />
                Invite Team Member
              </Button>
              <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Usage Report
              </Button>
              <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                <Crown className="h-4 w-4 mr-2" />
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
