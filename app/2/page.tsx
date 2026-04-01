"use client";

import {
  AlertCircle,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Portal2() {
  const [viewMode, setViewMode] = useState("grid");
  const [activeTab, setActiveTab] = useState("all");

  const courses = [
    {
      id: 1,
      name: "Advanced Computer Architecture",
      code: "CS-452",
      section: "A",
      students: 42,
      attendance: 94,
      nextClass: "Today, 10:00 AM",
      room: "Engineering Hall 304",
    },
    {
      id: 2,
      name: "Machine Learning Fundamentals",
      code: "CS-401",
      section: "B",
      students: 38,
      attendance: 91,
      nextClass: "Tomorrow, 2:00 PM",
      room: "Science Building 201",
    },
    {
      id: 3,
      name: "Database Systems",
      code: "CS-380",
      section: "C",
      students: 45,
      attendance: 88,
      nextClass: "Friday, 9:00 AM",
      room: "Tech Center 105",
    },
    {
      id: 4,
      name: "Software Engineering",
      code: "CS-420",
      section: "A",
      students: 36,
      attendance: 96,
      nextClass: "Today, 3:30 PM",
      room: "Engineering Hall 205",
    },
    {
      id: 5,
      name: "Web Development",
      code: "CS-310",
      section: "A",
      students: 52,
      attendance: 89,
      nextClass: "Monday, 11:00 AM",
      room: "Tech Center 302",
    },
    {
      id: 6,
      name: "Data Structures",
      code: "CS-250",
      section: "C",
      students: 48,
      attendance: 93,
      nextClass: "Tuesday, 1:00 PM",
      room: "Science Building 105",
    },
  ];

  const todaySessions = [
    {
      id: 1,
      course: "Advanced Computer Architecture",
      time: "10:00 AM",
      room: "Eng 304",
      status: "upcoming",
      students: 42,
    },
    {
      id: 2,
      course: "Software Engineering",
      time: "3:30 PM",
      room: "Eng 205",
      status: "upcoming",
      students: 36,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Attendance recorded",
      course: "Advanced Computer Architecture",
      time: "2 hours ago",
      user: "Dr. Roberts",
    },
    {
      id: 2,
      action: "New session started",
      course: "Machine Learning",
      time: "Yesterday",
      user: "Dr. Roberts",
    },
    {
      id: 3,
      action: "Student marked late",
      course: "Database Systems",
      time: "Yesterday",
      user: "System",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white overflow-hidden">
              <Image
                src="/ius-logo.png"
                alt="IUS Logo"
                width={36}
                height={36}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-lg font-semibold">IUS Portal</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="w-64 pl-10" />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                2
              </span>
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary text-primary-foreground">
                DR
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-60 border-r bg-muted/30">
          <div className="p-4">
            <nav className="space-y-1">
              <Button variant="secondary" className="w-full justify-start">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Students
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Analytics
              </Button>
            </nav>

            <Separator className="my-4" />

            <div>
              <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Today
              </h3>
              <div className="space-y-2">
                {todaySessions.map((session) => (
                  <div
                    key={session.id}
                    className="rounded-lg border bg-card p-3"
                  >
                    <p className="text-sm font-medium truncate">
                      {session.course}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {session.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Total Courses
                      </p>
                      <p className="text-3xl font-bold">6</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-primary/60" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Enrolled
                      </p>
                      <p className="text-3xl font-bold">261</p>
                    </div>
                    <Users className="h-8 w-8 text-green-600/60" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Avg Attendance
                      </p>
                      <p className="text-3xl font-bold">91.8%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-amber-600/60" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Sessions
                      </p>
                      <p className="text-3xl font-bold">12</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600/60" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>My Courses</CardTitle>
                      <CardDescription>
                        Manage your courses and sessions
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Tabs value={viewMode} onValueChange={setViewMode}>
                        <TabsList>
                          <TabsTrigger value="grid">
                            <LayoutGrid className="h-4 w-4" />
                          </TabsTrigger>
                          <TabsTrigger value="list">
                            <List className="h-4 w-4" />
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                      <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid gap-4 sm:grid-cols-2"
                        : "space-y-3"
                    }
                  >
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        className="group relative rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold truncate">
                              {course.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {course.code} • Section {course.section}
                            </p>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                Take Attendance
                              </DropdownMenuItem>
                              <DropdownMenuItem>View Students</DropdownMenuItem>
                              <DropdownMenuItem>Edit Course</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Attendance
                            </span>
                            <span className="font-medium">
                              {course.attendance}%
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-secondary">
                            <div
                              className="h-full rounded-full bg-primary transition-all"
                              style={{ width: `${course.attendance}%` }}
                            />
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              {course.students}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {course.nextClass}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Latest actions across courses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {activity.course}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Present Today</span>
                    <Badge variant="secondary">75 students</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Absent</span>
                    <Badge variant="destructive">3 students</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Late</span>
                    <Badge variant="outline">2 students</Badge>
                  </div>
                  <Separator />
                  <Button variant="outline" className="w-full">
                    View Full Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
