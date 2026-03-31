"use client";

import {
  AlertCircle,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  Plus,
  QrCode,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Portal5() {
  const [showQuickActions, setShowQuickActions] = useState(true);

  const stats = [
    { label: "Active", value: "4", icon: BookOpen, color: "text-blue-600" },
    { label: "Students", value: "161", icon: Users, color: "text-green-600" },
    { label: "Rate", value: "92%", icon: CheckCircle, color: "text-amber-600" },
    { label: "Today", value: "2", icon: Clock, color: "text-purple-600" },
  ];

  const todayClasses = [
    {
      id: 1,
      name: "Advanced Computer Architecture",
      time: "10:00 AM",
      room: "Eng 304",
      students: 42,
      status: "ready",
    },
    {
      id: 2,
      name: "Software Engineering",
      time: "3:30 PM",
      room: "Eng 205",
      students: 36,
      status: "pending",
    },
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "warning",
      message: "3 students below 80% attendance",
      course: "CS-452",
    },
    { id: 2, type: "info", message: "Session completed", course: "CS-401" },
    {
      id: 3,
      type: "success",
      message: "Weekly report generated",
      course: "All",
    },
  ];

  const quickActions = [
    { label: "QR Check-in", icon: QrCode, desc: "Fast attendance" },
    { label: "New Session", icon: Plus, desc: "Start now" },
    { label: "Reports", icon: FileText, desc: "Export data" },
    { label: "Analytics", icon: BarChart3, desc: "View stats" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-6xl flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Track</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Courses
            </Button>
            <Button variant="ghost" size="sm">
              Students
            </Button>
            <Button variant="ghost" size="sm">
              Reports
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive"></span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                DR
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Dr. Roberts</p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Session
            </Button>
            <Button variant="outline">
              <QrCode className="mr-2 h-4 w-4" />
              QR Check-in
            </Button>
          </div>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Today's Classes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {todayClasses.map((cls) => (
                  <div
                    key={cls.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-muted">
                        <span className="text-xs text-muted-foreground">
                          {cls.time.split(" ")[0]}
                        </span>
                        <span className="font-semibold">
                          {cls.time.split(" ")[1]}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{cls.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {cls.room} • {cls.students} students
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {cls.status === "ready" ? (
                        <>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700"
                          >
                            Ready
                          </Badge>
                          <Button size="sm">Start</Button>
                        </>
                      ) : (
                        <>
                          <Badge variant="secondary">{cls.time}</Badge>
                          <Button variant="outline" size="sm" disabled>
                            Wait
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Quick Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {quickActions.map((action) => (
                    <Button
                      key={action.label}
                      variant="outline"
                      className="h-auto flex-col items-start gap-1 p-4"
                    >
                      <action.icon className="h-5 w-5" />
                      <span className="font-semibold">{action.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {action.desc}
                      </span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex gap-3 rounded-lg border p-3"
                  >
                    <div
                      className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${alert.type === "warning" ? "bg-amber-500" : alert.type === "success" ? "bg-green-500" : "bg-blue-500"}`}
                    />
                    <div>
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">
                        {alert.course}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Weekly Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Present</span>
                    <span className="font-semibold text-green-600">245</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Absent</span>
                    <span className="font-semibold text-red-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Late</span>
                    <span className="font-semibold text-amber-600">8</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
