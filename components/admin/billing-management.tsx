"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Download, Calendar, DollarSign, TrendingUp, Crown, CheckCircle } from "lucide-react"

export function BillingManagement() {
  const [showUpdateCard, setShowUpdateCard] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Mock data - replace with real billing data
  const billingData = {
    currentPlan: {
      name: "Enterprise",
      price: 299,
      billing: "monthly",
      features: [
        "Unlimited AI interactions",
        "Up to 50 team members",
        "100GB storage",
        "Priority support",
        "Advanced analytics",
        "SSO integration",
      ],
    },
    usage: {
      currentPeriod: "Dec 1 - Dec 31, 2024",
      nextBilling: "Jan 1, 2025",
      daysLeft: 15,
    },
    paymentMethod: {
      type: "Visa",
      last4: "4242",
      expiry: "12/26",
      name: "TechCorp Inc.",
    },
    invoices: [
      {
        id: "INV-2024-12",
        date: "Dec 1, 2024",
        amount: 299,
        status: "paid",
        downloadUrl: "#",
      },
      {
        id: "INV-2024-11",
        date: "Nov 1, 2024",
        amount: 299,
        status: "paid",
        downloadUrl: "#",
      },
      {
        id: "INV-2024-10",
        date: "Oct 1, 2024",
        amount: 299,
        status: "paid",
        downloadUrl: "#",
      },
    ],
    upcomingCharges: [
      {
        description: "Enterprise Plan",
        amount: 299,
        date: "Jan 1, 2025",
      },
    ],
  }

  const handleUpdatePayment = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setShowUpdateCard(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500/20 text-green-400">Paid</Badge>
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-400">Pending</Badge>
      case "failed":
        return <Badge className="bg-red-500/20 text-red-400">Failed</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center">
                <Crown className="h-5 w-5 mr-2 text-[#2563EB]" />
                Current Plan
              </CardTitle>
              <p className="text-gray-400 mt-1">Manage your subscription and billing</p>
            </div>
            <Badge className="bg-[#2563EB] text-white px-4 py-2">{billingData.currentPlan.name}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-white">${billingData.currentPlan.price}</span>
                <span className="text-gray-400">/{billingData.currentPlan.billing}</span>
              </div>
              <div className="space-y-2">
                {billingData.currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400 font-medium">Next Billing</span>
                </div>
                <p className="text-white">{billingData.usage.nextBilling}</p>
                <p className="text-gray-400 text-sm">{billingData.usage.daysLeft} days remaining</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-[#00C7B1] hover:bg-[#00A693] text-black">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Upgrade Plan
                </Button>
                <Button variant="outline" className="border-gray-700 text-gray-300">
                  Change Plan
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Payment Method */}
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-gray-800">
              <CreditCard className="h-8 w-8 text-[#00C7B1]" />
              <div className="flex-1">
                <p className="text-white font-medium">
                  {billingData.paymentMethod.type} •••• {billingData.paymentMethod.last4}
                </p>
                <p className="text-gray-400 text-sm">Expires {billingData.paymentMethod.expiry}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Billing name: {billingData.paymentMethod.name}</p>
            <Dialog open={showUpdateCard} onOpenChange={setShowUpdateCard}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full border-gray-700 text-gray-300">
                  Update Payment Method
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#111827] border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-white">Update Payment Method</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Card Number</Label>
                    <Input placeholder="1234 5678 9012 3456" className="bg-[#1F2937] border-gray-700 text-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Expiry Date</Label>
                      <Input placeholder="MM/YY" className="bg-[#1F2937] border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">CVC</Label>
                      <Input placeholder="123" className="bg-[#1F2937] border-gray-700 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Cardholder Name</Label>
                    <Input placeholder="John Doe" className="bg-[#1F2937] border-gray-700 text-white" />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button
                      onClick={handleUpdatePayment}
                      disabled={isLoading}
                      className="flex-1 bg-[#00C7B1] hover:bg-[#00A693] text-black"
                    >
                      {isLoading ? "Updating..." : "Update Card"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowUpdateCard(false)}
                      className="flex-1 border-gray-700 text-gray-300"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Upcoming Charges */}
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Upcoming Charges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {billingData.upcomingCharges.map((charge, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{charge.description}</p>
                    <p className="text-gray-400 text-sm">{charge.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">${charge.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Billing Summary */}
        <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">This Period</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Current Period</span>
                <span className="text-white">{billingData.usage.currentPeriod}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Amount Due</span>
                <span className="text-white font-semibold">${billingData.currentPlan.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status</span>
                <Badge className="bg-green-500/20 text-green-400">Current</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice History */}
      <Card className="bg-gradient-to-br from-[#111827] to-[#0F172A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Invoice History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {billingData.invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <DollarSign className="h-8 w-8 text-[#00C7B1]" />
                  <div>
                    <p className="text-white font-medium">{invoice.id}</p>
                    <p className="text-gray-400 text-sm">{invoice.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-white font-semibold">${invoice.amount}</p>
                    {getStatusBadge(invoice.status)}
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
