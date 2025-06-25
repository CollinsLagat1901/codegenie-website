
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, Database, Key, ExternalLink, Plus, Trash2, Eye } from "lucide-react"

export function IntegrationSettings() {
  const [integrations, setIntegrations] = useState({
    github: { connected: false, username: "" },
    firebase: { connected: true, projectId: "codegenie-prod" },
  })

  const [apiKeys, setApiKeys] = useState([
    {
      id: "1",
      name: "Production API",
      key: "cg_prod_**********************",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
    },
    {
      id: "2",
      name: "Development API",
      key: "cg_dev_**********************",
      created: "2024-01-10",
      lastUsed: "1 day ago",
    },
  ])

  const [newApiKey, setNewApiKey] = useState({ name: "", description: "" })
  const [showNewKey, setShowNewKey] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConnectGitHub = async () => {
    setIsLoading(true)
    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIntegrations({
      ...integrations,
      github: { connected: true, username: "alexjohnson" },
    })
    setIsLoading(false)
  }

  const handleDisconnectGitHub = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIntegrations({
      ...integrations,
      github: { connected: false, username: "" },
    })
    setIsLoading(false)
  }

  const handleCreateApiKey = async () => {
    if (!newApiKey.name) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newKey = {
      id: Date.now().toString(),
      name: newApiKey.name,
      key: `cg_${Date.now()}_**********************`,
      created: new Date().toISOString().split("T")[0],
      lastUsed: "Never",
    }

    setApiKeys([...apiKeys, newKey])
    setNewApiKey({ name: "", description: "" })
    setShowNewKey(false)
    setIsLoading(false)
  }

  const handleDeleteApiKey = async (id: string) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setApiKeys(apiKeys.filter((key) => key.id !== id))
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Connected Services */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Connected Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* GitHub Integration */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <Github className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">GitHub</span>
                  {integrations.github.connected ? (
                    <Badge className="bg-green-500/20 text-green-400">Connected</Badge>
                  ) : (
                    <Badge className="bg-gray-500/20 text-gray-400">Not Connected</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-400">
                  {integrations.github.connected
                    ? `Connected as @${integrations.github.username}`
                    : "Connect your GitHub account to sync repositories"}
                </p>
              </div>
            </div>
            {integrations.github.connected ? (
              <Button
                onClick={handleDisconnectGitHub}
                disabled={isLoading}
                variant="outline"
                className="border-gray-700 text-gray-300"
              >
                {isLoading ? "Disconnecting..." : "Disconnect"}
              </Button>
            ) : (
              <Button onClick={handleConnectGitHub} disabled={isLoading} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
                {isLoading ? "Connecting..." : "Connect"}
              </Button>
            )}
          </div>

          {/* Firebase Integration */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">Firebase</span>
                  {integrations.firebase.connected ? (
                    <Badge className="bg-green-500/20 text-green-400">Connected</Badge>
                  ) : (
                    <Badge className="bg-gray-500/20 text-gray-400">Not Connected</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-400">
                  {integrations.firebase.connected
                    ? `Project: ${integrations.firebase.projectId}`
                    : "Connect Firebase for data storage and authentication"}
                </p>
              </div>
            </div>
            <Button variant="outline" className="border-gray-700 text-gray-300">
              <ExternalLink className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* API Key Management */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center">
              <Key className="h-5 w-5 mr-2 text-[#00C7B1]" />
              API Keys
            </CardTitle>
            <Dialog open={showNewKey} onOpenChange={setShowNewKey}>
              <DialogTrigger asChild>
                <Button className="bg-[#00C7B1] hover:bg-[#00A693] text-black">
                  <Plus className="h-4 w-4 mr-2" />
                  New API Key
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#111827] border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-white">Create New API Key</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Key Name</Label>
                    <Input
                      value={newApiKey.name}
                      onChange={(e) => setNewApiKey({ ...newApiKey, name: e.target.value })}
                      placeholder="e.g., Production API"
                      className="bg-[#1F2937] border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Description (Optional)</Label>
                    <Input
                      value={newApiKey.description}
                      onChange={(e) => setNewApiKey({ ...newApiKey, description: e.target.value })}
                      placeholder="What will this key be used for?"
                      className="bg-[#1F2937] border-gray-700 text-white"
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button
                      onClick={handleCreateApiKey}
                      disabled={isLoading || !newApiKey.name}
                      className="flex-1 bg-[#00C7B1] hover:bg-[#00A693] text-black"
                    >
                      {isLoading ? "Creating..." : "Create Key"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowNewKey(false)}
                      className="flex-1 border-gray-700 text-gray-300"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {apiKeys.map((apiKey) => (
            <div
              key={apiKey.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-gray-800"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-medium">{apiKey.name}</span>
                  <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                    API Key
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="font-mono">{apiKey.key}</span>
                  <span>•</span>
                  <span>Created {apiKey.created}</span>
                  <span>•</span>
                  <span>Last used {apiKey.lastUsed}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => handleDeleteApiKey(apiKey.id)}
                  disabled={isLoading}
                  variant="ghost"
                  size="sm"
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {apiKeys.length === 0 && (
            <div className="text-center py-8">
              <Key className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No API Keys</h3>
              <p className="text-gray-400 mb-4">Create your first API key to start integrating with CodeGenie</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
