"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Save, Brain, Trash2, AlertTriangle, Zap, Code } from "lucide-react"

export function AISettings() {
  const [aiSettings, setAiSettings] = useState({
    enableSuggestions: true,
    languageFocus: "typescript",
    suggestionLevel: [75],
    autoComplete: true,
    contextAware: true,
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Show success message
  }

  const handleClearMemory = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Show success message
  }

  const updateSetting = (key: string, value: any) => {
    setAiSettings({ ...aiSettings, [key]: value })
  }

  return (
    <div className="space-y-6">
      {/* AI Suggestions */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Brain className="h-5 w-5 mr-2 text-[#00C7B1]" />
            AI Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Enable AI Suggestions</Label>
              <p className="text-sm text-gray-500">Get intelligent code suggestions and improvements</p>
            </div>
            <Switch
              checked={aiSettings.enableSuggestions}
              onCheckedChange={(checked) => updateSetting("enableSuggestions", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Auto-Complete</Label>
              <p className="text-sm text-gray-500">Automatically complete code as you type</p>
            </div>
            <Switch
              checked={aiSettings.autoComplete}
              onCheckedChange={(checked) => updateSetting("autoComplete", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-300">Context-Aware Suggestions</Label>
              <p className="text-sm text-gray-500">Use project context for better suggestions</p>
            </div>
            <Switch
              checked={aiSettings.contextAware}
              onCheckedChange={(checked) => updateSetting("contextAware", checked)}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-gray-300">Suggestion Aggressiveness</Label>
            <div className="px-3">
              <Slider
                value={aiSettings.suggestionLevel}
                onValueChange={(value) => updateSetting("suggestionLevel", value)}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Conservative</span>
                <span>{aiSettings.suggestionLevel[0]}%</span>
                <span>Aggressive</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Language Focus */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Code className="h-5 w-5 mr-2 text-[#2563EB]" />
            Language Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-gray-300">Primary Language Focus</Label>
            <p className="text-sm text-gray-500">Prioritize suggestions for your preferred programming language</p>
            <Select value={aiSettings.languageFocus} onValueChange={(value) => updateSetting("languageFocus", value)}>
              <SelectTrigger className="bg-[#1F2937] border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1F2937] border-gray-700">
                <SelectItem value="typescript">TypeScript</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="nodejs">Node.js</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="go">Go</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* AI Memory Management */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Zap className="h-5 w-5 mr-2 text-[#00C7B1]" />
            AI Memory Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
              <div>
                <h4 className="text-yellow-400 font-medium">Clear AI Memory</h4>
                <p className="text-sm text-gray-300 mt-1">
                  This will reset all learned preferences and context. CodeGenie will start fresh with your coding
                  patterns.
                </p>
              </div>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="w-full">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear AI Memory
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#111827] border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-white flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
                  Clear AI Memory
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Are you sure you want to clear all AI memory? This action cannot be undone and will:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  <li>Reset all learned coding preferences</li>
                  <li>Clear project context and patterns</li>
                  <li>Remove personalized suggestions</li>
                  <li>Reset language-specific optimizations</li>
                </ul>
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleClearMemory} disabled={isLoading} variant="destructive" className="flex-1">
                    {isLoading ? "Clearing..." : "Yes, Clear Memory"}
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-700 text-gray-300">
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={isLoading} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
        <Save className="h-4 w-4 mr-2" />
        {isLoading ? "Saving..." : "Save AI Settings"}
      </Button>
    </div>
  )
}
