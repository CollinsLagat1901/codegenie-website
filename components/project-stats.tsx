"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Code, MessageSquare } from "lucide-react"

interface Project {
  id: string
  title: string
  language: string
  lastModified: string
  status: string
  description: string
  interactions: number
  codeSnippet: string
  tags: string[]
  createdAt: string
}

interface ProjectStatsProps {
  projects: Project[]
}

export function ProjectStats({ projects }: ProjectStatsProps) {
  // Calculate stats
  const languageStats = projects.reduce(
    (acc, project) => {
      acc[project.language] = (acc[project.language] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const topLanguages = Object.entries(languageStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  const totalInteractions = projects.reduce((sum, project) => sum + project.interactions, 0)
  const mostActiveProject = projects.reduce(
    (max, project) => (project.interactions > max.interactions ? project : max),
    projects[0],
  )

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

  return (
    <>
      {/* Language Distribution */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-[#00C7B1]" />
            Top Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topLanguages.map(([language, count]) => (
              <div key={language} className="flex items-center justify-between">
                <Badge className={getLanguageColor(language)} variant="secondary">
                  {language}
                </Badge>
                <span className="text-sm text-gray-400">{count} projects</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Stats */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <MessageSquare className="h-5 w-5 mr-2 text-[#2563EB]" />
            Activity Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Total Interactions</span>
              <span className="text-white font-semibold">{totalInteractions}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Avg per Project</span>
              <span className="text-white font-semibold">{Math.round(totalInteractions / projects.length)}</span>
            </div>
            <div className="pt-2 border-t border-gray-700">
              <p className="text-gray-400 text-xs mb-1">Most Active Project</p>
              <p className="text-white font-medium text-sm truncate">{mostActiveProject?.title}</p>
              <p className="text-[#00C7B1] text-xs">{mostActiveProject?.interactions} interactions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Code className="h-5 w-5 mr-2 text-[#00C7B1]" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="text-sm text-white">Export All Projects</div>
              <div className="text-xs text-gray-400">Download as JSON</div>
            </button>
            <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="text-sm text-white">Backup Data</div>
              <div className="text-xs text-gray-400">Save to cloud</div>
            </button>
            <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="text-sm text-white">Import Projects</div>
              <div className="text-xs text-gray-400">From file or URL</div>
            </button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
