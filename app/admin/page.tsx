"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamManagement } from "@/components/admin/team-managements"
import { UsageAnalytics } from "@/components/admin/usage.analytics"
import { BillingManagement } from "@/components/admin/billing-management"
import { OrganizationSettings } from "@/components/admin/organization-settings"
import { AdminOverview } from "@/components/admin/admin-overview"
import { Users, BarChart3, CreditCard, Settings, Shield } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111827]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-400">Enterprise Control Center for CodeGenie</p>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#00C7B1]" />
              <span className="text-sm text-gray-300">Admin Access</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-[#111827] border border-gray-800">
            <TabsTrigger
              value="overview"
              className="flex items-center gap-2 data-[state=active]:bg-[#00C7B1] data-[state=active]:text-black"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="flex items-center gap-2 data-[state=active]:bg-[#00C7B1] data-[state=active]:text-black"
            >
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger
              value="usage"
              className="flex items-center gap-2 data-[state=active]:bg-[#00C7B1] data-[state=active]:text-black"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Usage</span>
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="flex items-center gap-2 data-[state=active]:bg-[#00C7B1] data-[state=active]:text-black"
            >
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Billing</span>
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="flex items-center gap-2 data-[state=active]:bg-[#00C7B1] data-[state=active]:text-black"
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <AdminOverview />
          </TabsContent>

          <TabsContent value="team">
            <TeamManagement />
          </TabsContent>

          <TabsContent value="usage">
            <UsageAnalytics />
          </TabsContent>

          <TabsContent value="billing">
            <BillingManagement />
          </TabsContent>

          <TabsContent value="settings">
            <OrganizationSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
