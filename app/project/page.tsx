"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// Define the Project type
interface Project {
  id: string
  title: string
  language: string
  lastModified: string
  status: "Active" | "Completed" | "In Progress" | "Draft"
  description: string
  interactions: number
  codeSnippet: string
  tags: string[]
  createdAt: string
}
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProjectCard } from "@/components/project-card"
import { FilterBar } from "@/components/filter-bar"
import { ProjectStats } from "@/components/project-stats"
import { Plus, Code, Clock, Zap, Grid3X3, List, Search } from "lucide-react"

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("lastModified")


  // Mock data - replace with real data from your backend
  const projectsData = {
    totalProjects: 24,
    lastAccessed: "E-commerce Dashboard",
    mostUsedLanguage: "React",
    projects: [
      {
        id: "1",
        title: "E-commerce Dashboard Refactor",
        language: "React",
        lastModified: "2 hours ago",
        status: "Active" as "Active",
        description: "Optimizing component performance and adding new features",
        interactions: 45,
        codeSnippet: "const Dashboard = () => {\n  const [data, setData] = useState(null);\n  // ...",
        tags: ["Frontend", "Performance"],
        createdAt: "2024-01-15",
      },
      {
        id: "2",
        title: "API Gateway Service",
        language: "Node.js",
        lastModified: "1 day ago",
        status: "Completed" as "Completed",
        description: "Building microservices architecture with Express.js",
        interactions: 32,
        codeSnippet: "app.use('/api', (req, res, next) => {\n  // Authentication middleware\n  // ...",
        tags: ["Backend", "API"],
        createdAt: "2024-01-12",
      },
      {
        id: "3",
        title: "Mobile App Backend",
        language: "Python",
        lastModified: "3 days ago",
        status: "In Progress" as "In Progress",
        description: "Django REST API for mobile application",
        interactions: 28,
        codeSnippet: "class UserViewSet(viewsets.ModelViewSet):\n    queryset = User.objects.all()\n    // ...",
        tags: ["Backend", "Mobile"],
        createdAt: "2024-01-10",
      },
      {
        id: "4",
        title: "Data Analysis Pipeline",
        language: "Python",
        lastModified: "5 days ago",
        status: "Draft" as "Draft",
        description: "Processing and analyzing user behavior data",
        interactions: 19,
        codeSnippet: "import pandas as pd\nimport numpy as np\n\ndef analyze_data(df):\n    // ...",
        tags: ["Data Science", "Analytics"],
        createdAt: "2024-01-08",
      },
      {
        id: "5",
        title: "Game Engine Optimization",
        language: "C++",
        lastModified: "1 week ago",
        status: "Completed" as "Completed",
        description: "Performance improvements for 3D rendering engine",
        interactions: 67,
        codeSnippet: "class RenderEngine {\npublic:\n    void render(const Scene& scene) {\n        // ...",
        tags: ["Performance", "Graphics"],
        createdAt: "2024-01-05",
      },
      {
        id: "6",
        title: "Authentication System",
        language: "TypeScript",
        lastModified: "1 week ago",
        status: "Active" as "Active",
        description: "JWT-based authentication with refresh tokens",
        interactions: 41,
        codeSnippet: "interface AuthToken {\n  accessToken: string;\n  refreshToken: string;\n  // ...",
        tags: ["Security", "Backend"],
        createdAt: "2024-01-03",
      },
    ] as Project[],
  }

  const languages = ["React", "Node.js", "Python", "TypeScript", "C++", "JavaScript", "Java", "Go"]

  const filteredProjects = projectsData.projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLanguage = selectedLanguages.length === 0 || selectedLanguages.includes(project.language)
    return matchesSearch && matchesLanguage
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.title.localeCompare(b.title)
      case "language":
        return a.language.localeCompare(b.language)
      case "interactions":
        return b.interactions - a.interactions
      default: // lastModified
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111827]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">My Projects</h1>
              <p className="text-gray-400">Manage your AI-assisted development sessions and code projects</p>
            </div>
            <Button className="bg-[#00C7B1] hover:bg-[#00A693] text-black font-semibold">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Project Summary Header */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Projects</p>
                      <p className="text-2xl font-bold text-white">{projectsData.totalProjects}</p>
                    </div>
                    <Code className="h-8 w-8 text-[#00C7B1]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Last Accessed</p>
                      <p className="text-lg font-semibold text-white truncate">{projectsData.lastAccessed}</p>
                    </div>
                    <Clock className="h-8 w-8 text-[#2563EB]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Most Used Language</p>
                      <p className="text-lg font-semibold text-white">{projectsData.mostUsedLanguage}</p>
                    </div>
                    <Zap className="h-8 w-8 text-[#00C7B1]" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                  <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-[#1F2937] border-gray-700 text-white placeholder-gray-400 focus:border-[#00C7B1]"
                      />
                    </div>

                    {/* Sort */}
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48 bg-[#1F2937] border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1F2937] border-gray-700">
                        <SelectItem value="lastModified">Last Modified</SelectItem>
                        <SelectItem value="name">Name A-Z</SelectItem>
                        <SelectItem value="language">Language</SelectItem>
                        <SelectItem value="interactions">Most Active</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-[#00C7B1] text-black" : "text-gray-400 hover:text-white"}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-[#00C7B1] text-black" : "text-gray-400 hover:text-white"}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Language Filter */}
                <FilterBar
                  languages={languages}
                  selectedLanguages={selectedLanguages}
                  onLanguageChange={setSelectedLanguages}
                />
              </CardContent>
            </Card>

            {/* Projects Grid/List */}
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 gap-6" : "space-y-4"}>
              {sortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} viewMode={viewMode} />
              ))}
            </div>

            {sortedProjects.length === 0 && (
              <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
                <CardContent className="p-12 text-center">
                  <Code className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
                  <p className="text-gray-400 mb-6">
                    {searchQuery || selectedLanguages.length > 0
                      ? "Try adjusting your search or filters"
                      : "Create your first project to get started"}
                  </p>
                  <Button className="bg-[#00C7B1] hover:bg-[#00A693] text-black">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Stats Panel */}
          <div className="space-y-6">
            <ProjectStats projects={projectsData.projects} />
          </div>
        </div>
      </div>
    </div>
  )
}
