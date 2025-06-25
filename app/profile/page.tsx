"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  User,
  Code,
  MessageSquare,
  Calendar,
  Clock,
  Star,
  Settings,
  Bell,
  Trash2,
  Github,
  Smartphone,
  Globe,
  Monitor,
  Crown,
  Zap,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter();
  // Mock data - replace with real data from your backend
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "/placeholder.svg?height=80&width=80",
    plan: "Pro",
    joinDate: "March 2024",
    lastLogin: "2 hours ago",
    stats: {
      projects: 24,
      interactions: 156,
      totalSessions: 89,
    },
    skills: ["React", "TypeScript", "Node.js", "Firebase", "Python", "C++"],
    recentProjects: [
      {
        name: "E-commerce Dashboard",
        language: "React",
        lastModified: "2 hours ago",
        status: "Active",
      },
      {
        name: "API Gateway Service",
        language: "Node.js",
        lastModified: "1 day ago",
        status: "Completed",
      },
      {
        name: "Mobile App Backend",
        language: "Python",
        lastModified: "3 days ago",
        status: "In Progress",
      },
    ],
    recentInteractions: [
      {
        timestamp: "2 hours ago",
        question: "How do I optimize this React component for better performance?",
        response: "You can use React.memo() and useMemo() to prevent unnecessary re-renders...",
      },
      {
        timestamp: "5 hours ago",
        question: "Help me debug this TypeScript error in my API route",
        response: "The error is caused by a type mismatch. You need to define the interface...",
      },
      {
        timestamp: "1 day ago",
        question: "Best practices for Firebase security rules?",
        response: "Here are the key security principles for Firebase rules...",
      },
    ],
    systemInfo: {
      device: "Samsung A15",
      preferredLanguage: "TypeScript",
      lastIDE: "VS Code",
      location: "San Francisco, CA",
    },
  }

  const getLanguageBadgeColor = (language: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-blue-500/20 text-blue-400",
      "Node.js": "bg-green-500/20 text-green-400",
      Python: "bg-yellow-500/20 text-yellow-400",
      TypeScript: "bg-blue-600/20 text-blue-300",
      JavaScript: "bg-yellow-600/20 text-yellow-300",
    }
    return colors[language] || "bg-gray-500/20 text-gray-400"
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Profile Header */}
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 ring-2 ring-[#00C7B1]/20">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                  <AvatarFallback className="bg-[#00C7B1] text-black text-xl font-bold">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">{userData.name}</h1>
                  <p className="text-gray-400 mb-2">{userData.email}</p>
                  <Badge className="bg-[#2563EB] text-white hover:bg-[#1D4ED8]">
                    <Crown className="h-3 w-3 mr-1" />
                    {userData.plan}
                  </Badge>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <Code className="h-5 w-5 text-[#00C7B1] mx-auto mb-1" />
                  <div className="text-xl font-bold text-white">{userData.stats.projects}</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <MessageSquare className="h-5 w-5 text-[#2563EB] mx-auto mb-1" />
                  <div className="text-xl font-bold text-white">{userData.stats.interactions}</div>
                  <div className="text-xs text-gray-400">AI Chats</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <Clock className="h-5 w-5 text-[#00C7B1] mx-auto mb-1" />
                  <div className="text-sm font-bold text-white">{userData.lastLogin}</div>
                  <div className="text-xs text-gray-400">Last Login</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <Calendar className="h-5 w-5 text-[#2563EB] mx-auto mb-1" />
                  <div className="text-sm font-bold text-white">{userData.joinDate}</div>
                  <div className="text-xs text-gray-400">Member Since</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Context Overview Card */}
            <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Star className="h-5 w-5 mr-2 text-[#00C7B1]" />
                  AI Context & Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  CodeGenie has learned from your coding patterns and preferences across {userData.stats.interactions}{" "}
                  interactions, specializing in full-stack development with modern frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-[#00C7B1]/30 text-[#00C7B1]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Projects Panel */}
            <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 mr-2 text-[#2563EB]" />
                    Recent Projects
                  </div>
                  <Button 
                  onClick={() => router.push("/project")}
                  variant="ghost" size="sm" className="text-[#00C7B1] hover:text-[#00A693]">
                    View All
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.recentProjects.map((project, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#00C7B1]/20 rounded-lg flex items-center justify-center">
                          <Code className="h-5 w-5 text-[#00C7B1]" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{project.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={getLanguageBadgeColor(project.language)} variant="secondary">
                              {project.language}
                            </Badge>
                            <span className="text-xs text-gray-400">{project.lastModified}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Interaction History */}
            <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-[#00C7B1]" />
                  Recent AI Interactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-80">
                  <div className="space-y-4">
                    {userData.recentInteractions.map((interaction, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-400">{interaction.timestamp}</span>
                          <Badge variant="outline" className="border-[#2563EB]/30 text-[#2563EB]">
                            AI Chat
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm text-gray-300">
                            <span className="text-[#00C7B1] font-medium">You:</span> {interaction.question}
                          </div>
                          <div className="text-sm text-gray-300">
                            <span className="text-[#2563EB] font-medium">CodeGenie:</span>{" "}
                            {interaction.response.substring(0, 100)}...
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Subscription & Plan */}
            <Card className="bg-gradient-to-br from-[#2563EB]/10 to-[#1D4ED8]/5 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-[#2563EB]" />
                  {userData.plan} Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <Zap className="h-4 w-4 mr-2 text-[#00C7B1]" />
                      Unlimited AI interactions
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Code className="h-4 w-4 mr-2 text-[#00C7B1]" />
                      Advanced code analysis
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MessageSquare className="h-4 w-4 mr-2 text-[#00C7B1]" />
                      Priority support
                    </div>
                  </div>
                  <Separator className="bg-gray-700" />
                  <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8]">Manage Subscription</Button>
                </div>
              </CardContent>
            </Card>

            {/* Settings Shortcuts */}
            <Card onClick={() => router.push("/settings")} className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-[#00C7B1]" />
                  Quick Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Github className="h-4 w-4 mr-2" />
                    Connect GitHub
                  </Button>
                  <Separator className="bg-gray-700" />
                  <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Info & Last Activity */}
            <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Monitor className="h-5 w-5 mr-2 text-[#00C7B1]" />
                  System Info
                </CardTitle>                                                                                 
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Smartphone className="h-4 w-4 mr-2" />
                      Device
                    </div>
                    <span className="text-sm text-white">{userData.systemInfo.device}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Code className="h-4 w-4 mr-2" />
                      Language
                    </div>
                    <span className="text-sm text-white">{userData.systemInfo.preferredLanguage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Monitor className="h-4 w-4 mr-2" />
                      Last IDE
                    </div>
                    <span className="text-sm text-white">{userData.systemInfo.lastIDE}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Globe className="h-4 w-4 mr-2" />
                      Location
                    </div>
                    <span className="text-sm text-white">{userData.systemInfo.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
