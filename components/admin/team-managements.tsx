"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Users, UserPlus, MoreVertical, Mail, Shield, UserX, Crown, Search, Filter } from "lucide-react"

export function TeamManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterRole, setFilterRole] = useState("all")
  const [showInviteDialog, setShowInviteDialog] = useState(false)
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteRole, setInviteRole] = useState("member")
  const [isLoading, setIsLoading] = useState(false)

  // Mock data - replace with real data from your backend
  const teamData = {
    members: [
      {
        id: "1",
        name: "Alex Johnson",
        email: "alex.johnson@techcorp.com",
        role: "owner",
        status: "active",
        lastActive: "2 hours ago",
        joinedDate: "2024-01-15",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "2",
        name: "Sarah Chen",
        email: "sarah.chen@techcorp.com",
        role: "admin",
        status: "active",
        lastActive: "1 hour ago",
        joinedDate: "2024-01-20",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "3",
        name: "Marcus Rodriguez",
        email: "marcus.rodriguez@techcorp.com",
        role: "member",
        status: "active",
        lastActive: "30 minutes ago",
        joinedDate: "2024-02-01",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "4",
        name: "Emily Johnson",
        email: "emily.johnson@techcorp.com",
        role: "member",
        status: "inactive",
        lastActive: "3 days ago",
        joinedDate: "2024-02-10",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    pendingInvites: [
      {
        id: "inv1",
        email: "john.doe@techcorp.com",
        role: "member",
        invitedBy: "Alex Johnson",
        invitedDate: "2024-03-01",
        status: "pending",
      },
      {
        id: "inv2",
        email: "jane.smith@techcorp.com",
        role: "admin",
        invitedBy: "Sarah Chen",
        invitedDate: "2024-02-28",
        status: "pending",
      },
    ],
    planLimits: {
      maxMembers: 50,
      currentMembers: 4,
    },
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "owner":
        return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Owner</Badge>
      case "admin":
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Admin</Badge>
      case "member":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Member</Badge>
      case "viewer":
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Viewer</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/20 text-green-400">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-500/20 text-gray-400">Inactive</Badge>
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-400">Pending</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const handleInviteMember = async () => {
    if (!inviteEmail) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Add to pending invites
    teamData.pendingInvites.push({
      id: `inv${Date.now()}`,
      email: inviteEmail,
      role: inviteRole,
      invitedBy: "Alex Johnson",
      invitedDate: new Date().toISOString().split("T")[0],
      status: "pending",
    })

    setInviteEmail("")
    setInviteRole("member")
    setShowInviteDialog(false)
    setIsLoading(false)
  }

  const filteredMembers = teamData.members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = filterRole === "all" || member.role === filterRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-6">
      {/* Team Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Members</p>
                <p className="text-2xl font-bold text-white">{teamData.planLimits.currentMembers}</p>
                <p className="text-xs text-gray-400">of {teamData.planLimits.maxMembers} allowed</p>
              </div>
              <Users className="h-8 w-8 text-[#00C7B1]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Invites</p>
                <p className="text-2xl font-bold text-white">{teamData.pendingInvites.length}</p>
                <p className="text-xs text-gray-400">awaiting response</p>
              </div>
              <Mail className="h-8 w-8 text-[#2563EB]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Today</p>
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-xs text-gray-400">members online</p>
              </div>
              <Shield className="h-8 w-8 text-[#00C7B1]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <CardTitle className="text-white">Team Members</CardTitle>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-[#1F2937] border-gray-700 text-white w-64"
                />
              </div>

              {/* Filter */}
              <Select value={filterRole} onValueChange={setFilterRole}>
                <SelectTrigger className="w-32 bg-[#1F2937] border-gray-700 text-white">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1F2937] border-gray-700">
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>

              {/* Invite Button */}
              <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
                <DialogTrigger asChild>
                  <Button className="bg-[#00C7B1] hover:bg-[#00A693] text-black">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Invite Member
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#111827] border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Invite Team Member</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email Address</label>
                      <Input
                        type="email"
                        placeholder="colleague@company.com"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        className="bg-[#1F2937] border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Role</label>
                      <Select value={inviteRole} onValueChange={setInviteRole}>
                        <SelectTrigger className="bg-[#1F2937] border-gray-700 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1F2937] border-gray-700">
                          <SelectItem value="member">Member</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={handleInviteMember}
                        disabled={isLoading || !inviteEmail}
                        className="flex-1 bg-[#00C7B1] hover:bg-[#00A693] text-black"
                      >
                        {isLoading ? "Sending..." : "Send Invite"}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowInviteDialog(false)}
                        className="flex-1 border-gray-700 text-gray-300"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#00C7B1]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#00C7B1] font-semibold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{member.name}</span>
                      {member.role === "owner" && <Crown className="h-4 w-4 text-purple-400" />}
                    </div>
                    <p className="text-gray-400 text-sm">{member.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {getRoleBadge(member.role)}
                      {getStatusBadge(member.status)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden md:block">
                    <p className="text-gray-400 text-sm">Last active</p>
                    <p className="text-white text-sm">{member.lastActive}</p>
                  </div>
                  {member.role !== "owner" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-[#1F2937] border-gray-700">
                        <DropdownMenuItem className="text-gray-300 hover:text-white">
                          <Shield className="h-4 w-4 mr-2" />
                          Promote to Admin
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-gray-300 hover:text-white">
                          <Mail className="h-4 w-4 mr-2" />
                          Resend Invite
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400 hover:text-red-300">
                          <UserX className="h-4 w-4 mr-2" />
                          Remove Access
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Invitations */}
      {teamData.pendingInvites.length > 0 && (
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Pending Invitations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamData.pendingInvites.map((invite) => (
                <div
                  key={invite.id}
                  className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20"
                >
                  <div className="flex items-center gap-4">
                    <Mail className="h-8 w-8 text-yellow-400" />
                    <div>
                      <p className="text-white font-medium">{invite.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {getRoleBadge(invite.role)}
                        <span className="text-gray-400 text-sm">•</span>
                        <span className="text-gray-400 text-sm">Invited by {invite.invitedBy}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                      Resend
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                      Revoke
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
