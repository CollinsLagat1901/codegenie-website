"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ExternalLink, Edit, Download, Trash2, MoreVertical, MessageSquare, Calendar, Code2 } from "lucide-react"

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

interface ProjectCardProps {
  project: Project
  viewMode: "grid" | "list"
}

export function ProjectCard({ project, viewMode }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Draft":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-blue-500/20 text-blue-400",
      "Node.js": "bg-green-500/20 text-green-400",
      Python: "bg-yellow-500/20 text-yellow-400",
      TypeScript: "bg-blue-600/20 text-blue-300",
      "C++": "bg-red-500/20 text-red-400",
      JavaScript: "bg-yellow-600/20 text-yellow-300",
    }
    return colors[language] || "bg-gray-500/20 text-gray-400"
  }

  if (viewMode === "list") {
    return (
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800 hover:border-[#00C7B1] transition-colors">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 bg-[#00C7B1]/20 rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-[#00C7B1]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-white truncate">{project.title}</h3>
                  <Badge className={getLanguageColor(project.language)} variant="secondary">
                    {project.language}
                  </Badge>
                  <Badge className={getStatusColor(project.status)} variant="outline">
                    {project.status}
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm truncate mb-2">{project.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    {project.interactions} interactions
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.lastModified}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                <ExternalLink className="h-4 w-4 mr-1" />
                Open
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1F2937] border-gray-700">
                  <DropdownMenuItem className="text-gray-300 hover:text-white">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400 hover:text-red-300">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800 hover:border-[#00C7B1] transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold text-white truncate mb-2">{project.title}</CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getLanguageColor(project.language)} variant="secondary">
                {project.language}
              </Badge>
              <Badge className={getStatusColor(project.status)} variant="outline">
                {project.status}
              </Badge>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1F2937] border-gray-700">
              <DropdownMenuItem className="text-gray-300 hover:text-white">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-white">
                <Download className="h-4 w-4 mr-2" />
                Export
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-400 hover:text-red-300">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

        {/* Code Snippet Preview */}
        <div className="bg-[#0D1117] rounded-lg p-3 border border-gray-800">
          <code className="text-xs text-gray-300 font-mono">{project.codeSnippet}</code>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-gray-700 text-gray-400">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            {project.interactions} interactions
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {project.lastModified}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
            <ExternalLink className="h-4 w-4 mr-1" />
            Open
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
