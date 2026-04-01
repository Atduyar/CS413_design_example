"use client";

import {
  AlertCircle,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Filter,
  Menu,
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Portal1() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const courses = [
    {
      id: 1,
      name: "Advanced Computer Architecture",
      code: "CS-452",
      section: "A",
      students: 42,
      attendance: 94,
      nextClass: "Today, 10:00 AM",
    },
    {
      id: 2,
      name: "Machine Learning Fundamentals",
      code: "CS-401",
      section: "B",
      students: 38,
      attendance: 91,
      nextClass: "Tomorrow, 2:00 PM",
    },
    {
      id: 3,
      name: "Database Systems",
      code: "CS-380",
      section: "C",
      students: 45,
      attendance: 88,
      nextClass: "Friday, 9:00 AM",
    },
    {
      id: 4,
      name: "Software Engineering",
      code: "CS-420",
      section: "A",
      students: 36,
      attendance: 96,
      nextClass: "Today, 3:30 PM",
    },
  ];

  const recentSessions = [
    {
      id: 1,
      course: "Advanced Computer Architecture",
      date: "Mar 31, 2026",
      time: "10:00 AM",
      present: 40,
      absent: 2,
      late: 0,
    },
    {
      id: 2,
      course: "Machine Learning Fundamentals",
      date: "Mar 30, 2026",
      time: "2:00 PM",
      present: 35,
      absent: 1,
      late: 2,
    },
    {
      id: 3,
      course: "Database Systems",
      date: "Mar 28, 2026",
      time: "9:00 AM",
      present: 41,
      absent: 3,
      late: 1,
    },
    {
      id: 4,
      course: "Software Engineering",
      date: "Mar 28, 2026",
      time: "3:30 PM",
      present: 35,
      absent: 0,
      late: 1,
    },
  ];

  const students = [
    {
      id: 1,
      name: "Emma Thompson",
      email: "emma.t@university.edu",
      attendance: 98,
      status: "excellent",
    },
    {
      id: 2,
      name: "James Chen",
      email: "j.chen@university.edu",
      attendance: 92,
      status: "good",
    },
    {
      id: 3,
      name: "Sofia Martinez",
      email: "s.martinez@university.edu",
      attendance: 85,
      status: "warning",
    },
    {
      id: 4,
      name: "William Park",
      email: "w.park@university.edu",
      attendance: 76,
      status: "critical",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center gap-4 px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white overflow-hidden">
              <Image
                src="/ius-logo.png"
                alt="IUS Logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                IUS Attendance
              </h1>
              <p className="text-xs text-muted-foreground">
                International University of Sarajevo
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses, students..."
                className="w-80 pl-10"
              />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                3
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
        {sidebarOpen && (
          <aside className="w-64 border-r bg-muted/30 min-h-[calc(100vh-4rem)]">
            <nav className="flex flex-col gap-1 p-4">
              <Button
                variant={activeTab === "overview" ? "secondary" : "ghost"}
                className="justify-start gap-3"
                onClick={() => setActiveTab("overview")}
              >
                <BookOpen className="h-4 w-4" />
                Overview
              </Button>
              <Button
                variant={activeTab === "courses" ? "secondary" : "ghost"}
                className="justify-start gap-3"
                onClick={() => setActiveTab("courses")}
              >
                <Calendar className="h-4 w-4" />
                Courses
              </Button>
              <Button
                variant={activeTab === "students" ? "secondary" : "ghost"}
                className="justify-start gap-3"
                onClick={() => setActiveTab("students")}
              >
                <Users className="h-4 w-4" />
                Students
              </Button>
              <Button
                variant={activeTab === "analytics" ? "secondary" : "ghost"}
                className="justify-start gap-3"
                onClick={() => setActiveTab("analytics")}
              >
                <TrendingUp className="h-4 w-4" />
                Analytics
              </Button>
            </nav>

            <Separator className="mx-4 w-auto" />

            <div className="p-4">
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  Take Attendance
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  View Reports
                </Button>
              </div>
            </div>
          </aside>
        )}

        <main className="flex-1 p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="overview" className="mt-0 space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
                <h2 className="text-3xl font-bold">
                  Welcome back, Dr. Roberts
                </h2>
                <p className="mt-2 text-primary-foreground/80">
                  You have 2 classes scheduled today and 3 pending attendance
                  reviews.
                </p>
                <div className="mt-6 flex gap-3">
                  <Button variant="secondary">
                    <Plus className="mr-2 h-4 w-4" />
                    Start Session
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    View Schedule
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Active Courses
                    </CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">
                      Spring Semester 2026
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Students
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">161</div>
                    <p className="text-xs text-muted-foreground">
                      Across all sections
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Avg. Attendance
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">92.3%</div>
                    <p className="text-xs text-green-600">
                      +2.1% from last week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Today's Sessions
                    </CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">
                      Next at 10:00 AM
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Recent Sessions</CardTitle>
                      <CardDescription>
                        Last 4 attendance sessions
                      </CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger>
                        <Button>
                          <Plus className="mr-2 h-4 w-4" />
                          New Session
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create New Session</DialogTitle>
                          <DialogDescription>
                            Start a new attendance session for your course.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="course">Select Course</Label>
                            <Select>
                              <SelectTrigger id="course">
                                <SelectValue placeholder="Choose a course" />
                              </SelectTrigger>
                              <SelectContent>
                                {courses.map((course) => (
                                  <SelectItem
                                    key={course.id}
                                    value={course.id.toString()}
                                  >
                                    {course.name} - Section {course.section}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button className="w-full">Start Session</Button>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course</TableHead>
                          <TableHead>Date & Time</TableHead>
                          <TableHead>Attendance</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentSessions.map((session) => (
                          <TableRow key={session.id}>
                            <TableCell className="font-medium">
                              {session.course}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {session.date} at {session.time}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-green-600">
                                  {session.present} present
                                </span>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-red-600">
                                  {session.absent} absent
                                </span>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-amber-600">
                                  {session.late} late
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Completed
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Classes</CardTitle>
                    <CardDescription>Next 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {courses.slice(0, 2).map((course) => (
                      <div
                        key={course.id}
                        className="flex items-start gap-4 rounded-lg border bg-card p-4"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate font-semibold">
                            {course.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Section {course.section} • {course.students}{" "}
                            students
                          </p>
                          <p className="mt-1 text-sm font-medium text-primary">
                            {course.nextClass}
                          </p>
                        </div>
                      </div>
                    ))}
                    <Separator />
                    <Button variant="outline" className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      View Full Schedule
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="mt-0">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    My Courses
                  </h2>
                  <p className="text-muted-foreground">
                    Manage your courses and attendance sessions
                  </p>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Course
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {courses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">
                            {course.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {course.code} • Section {course.section}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">
                          {course.students} students
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Attendance Rate
                        </span>
                        <span className="text-lg font-semibold">
                          {course.attendance}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${course.attendance}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Next class: {course.nextClass}</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1">Take Attendance</Button>
                        <Button variant="outline">Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="students" className="mt-0">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Student Performance</CardTitle>
                    <CardDescription>
                      Attendance overview by student
                    </CardDescription>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search students..."
                      className="w-64 pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Attendance</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-9 w-9">
                                <AvatarFallback>
                                  {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">
                                {student.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {student.email}
                          </TableCell>
                          <TableCell className="text-lg font-semibold">
                            {student.attendance}%
                          </TableCell>
                          <TableCell>
                            {student.status === "excellent" && (
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Excellent
                              </Badge>
                            )}
                            {student.status === "good" && (
                              <Badge variant="secondary">Good Standing</Badge>
                            )}
                            {student.status === "warning" && (
                              <Badge
                                variant="outline"
                                className="bg-amber-50 text-amber-700 border-amber-200"
                              >
                                <AlertCircle className="mr-1 h-3 w-3" />
                                Warning
                              </Badge>
                            )}
                            {student.status === "critical" && (
                              <Badge variant="destructive">
                                <AlertCircle className="mr-1 h-3 w-3" />
                                At Risk
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Trends</CardTitle>
                    <CardDescription>
                      Weekly attendance patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex h-[300px] items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <TrendingUp className="mx-auto h-12 w-12 opacity-20" />
                        <p className="mt-2">
                          Attendance trend chart would display here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Comparison</CardTitle>
                    <CardDescription>
                      Attendance rates by course
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {courses.map((course) => (
                        <div key={course.id} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{course.name}</span>
                            <span className="text-muted-foreground">
                              {course.attendance}%
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-secondary">
                            <div
                              className="h-full rounded-full bg-primary transition-all duration-500"
                              style={{ width: `${course.attendance}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
