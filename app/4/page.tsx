"use client";

import {
  AlertCircle,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Download,
  Filter,
  GraduationCap,
  MoreVertical,
  Plus,
  Search,
  TrendingUp,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
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

export default function Portal4() {
  const [selectedCourse, setSelectedCourse] = useState(1);

  const courses = [
    {
      id: 1,
      name: "Advanced Computer Architecture",
      code: "CS-452",
      section: "A",
      students: 42,
      attendance: 94,
      schedule: "MWF 10:00-11:30",
      room: "Eng 304",
    },
    {
      id: 2,
      name: "Machine Learning Fundamentals",
      code: "CS-401",
      section: "B",
      students: 38,
      attendance: 91,
      schedule: "TTh 2:00-3:30",
      room: "Sci 201",
    },
    {
      id: 3,
      name: "Database Systems",
      code: "CS-380",
      section: "C",
      students: 45,
      attendance: 88,
      schedule: "MWF 9:00-10:30",
      room: "Tech 105",
    },
    {
      id: 4,
      name: "Software Engineering",
      code: "CS-420",
      section: "A",
      students: 36,
      attendance: 96,
      schedule: "TTh 3:30-5:00",
      room: "Eng 205",
    },
  ];

  const courseStudents = [
    {
      id: 1,
      name: "Emma Thompson",
      email: "emma.t@university.edu",
      attendance: 98,
      present: 49,
      absent: 1,
      late: 0,
    },
    {
      id: 2,
      name: "James Chen",
      email: "j.chen@university.edu",
      attendance: 92,
      present: 46,
      absent: 2,
      late: 2,
    },
    {
      id: 3,
      name: "Sofia Martinez",
      email: "s.martinez@university.edu",
      attendance: 85,
      present: 42,
      absent: 5,
      late: 3,
    },
    {
      id: 4,
      name: "William Park",
      email: "w.park@university.edu",
      attendance: 76,
      present: 38,
      absent: 8,
      late: 4,
    },
    {
      id: 5,
      name: "Olivia Johnson",
      email: "o.johnson@university.edu",
      attendance: 100,
      present: 50,
      absent: 0,
      late: 0,
    },
  ];

  const sessions = [
    {
      id: 1,
      date: "Mar 31, 2026",
      topic: "Pipelining Concepts",
      present: 40,
      absent: 2,
      late: 0,
    },
    {
      id: 2,
      date: "Mar 29, 2026",
      topic: "Cache Memory",
      present: 39,
      absent: 2,
      late: 1,
    },
    {
      id: 3,
      date: "Mar 26, 2026",
      topic: "Memory Hierarchy",
      present: 41,
      absent: 1,
      late: 0,
    },
    {
      id: 4,
      date: "Mar 24, 2026",
      topic: "Instruction Sets",
      present: 38,
      absent: 3,
      late: 1,
    },
  ];

  const currentCourse =
    courses.find((c) => c.id === selectedCourse) || courses[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">Course Manager</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
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
        <aside className="w-72 border-r bg-muted/20">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                My Courses
              </h2>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              {courses.map((course) => (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => setSelectedCourse(course.id)}
                  className={`w-full rounded-lg border p-3 text-left transition-colors ${selectedCourse === course.id ? "border-primary bg-primary/5" : "hover:bg-muted"}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{course.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {course.code} • Sec {course.section}
                      </p>
                    </div>
                    {selectedCourse === course.id && (
                      <ChevronRight className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{course.students} students</span>
                    <span>•</span>
                    <span className="text-green-600">{course.attendance}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">{currentCourse.name}</h1>
                <div className="mt-1 flex items-center gap-4 text-muted-foreground">
                  <span>{currentCourse.code}</span>
                  <span>•</span>
                  <span>Section {currentCourse.section}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {currentCourse.schedule}
                  </span>
                </div>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Take Attendance
              </Button>
            </div>
          </div>

          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">
                  {currentCourse.students}
                </div>
                <p className="text-sm text-muted-foreground">
                  Enrolled Students
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-600">
                  {currentCourse.attendance}%
                </div>
                <p className="text-sm text-muted-foreground">Attendance Rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">24</div>
                <p className="text-sm text-muted-foreground">Sessions Held</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-amber-600">4</div>
                <p className="text-sm text-muted-foreground">At Risk</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="students" className="space-y-4">
            <TabsList>
              <TabsTrigger value="students">
                <Users className="mr-2 h-4 w-4" />
                Students
              </TabsTrigger>
              <TabsTrigger value="sessions">
                <Calendar className="mr-2 h-4 w-4" />
                Sessions
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <TrendingUp className="mr-2 h-4 w-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="students">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Student Roster</CardTitle>
                    <CardDescription>
                      {courseStudents.length} students enrolled
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search students..."
                        className="w-64 pl-9"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox />
                        </TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Present</TableHead>
                        <TableHead>Absent</TableHead>
                        <TableHead>Late</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courseStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>
                            <Checkbox />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="text-xs">
                                  {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{student.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {student.email}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{student.present}</TableCell>
                          <TableCell>{student.absent}</TableCell>
                          <TableCell>{student.late}</TableCell>
                          <TableCell className="font-medium">
                            {student.attendance}%
                          </TableCell>
                          <TableCell>
                            {student.attendance >= 95 && (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700"
                              >
                                Excellent
                              </Badge>
                            )}
                            {student.attendance >= 85 &&
                              student.attendance < 95 && (
                                <Badge variant="secondary">Good</Badge>
                              )}
                            {student.attendance >= 75 &&
                              student.attendance < 85 && (
                                <Badge
                                  variant="outline"
                                  className="bg-amber-50 text-amber-700"
                                >
                                  Warning
                                </Badge>
                              )}
                            {student.attendance < 75 && (
                              <Badge variant="destructive">At Risk</Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sessions">
              <Card>
                <CardHeader>
                  <CardTitle>Session History</CardTitle>
                  <CardDescription>Past attendance sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Topic</TableHead>
                        <TableHead>Present</TableHead>
                        <TableHead>Absent</TableHead>
                        <TableHead>Late</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sessions.map((session) => (
                        <TableRow key={session.id}>
                          <TableCell className="font-medium">
                            {session.date}
                          </TableCell>
                          <TableCell>{session.topic}</TableCell>
                          <TableCell>{session.present}</TableCell>
                          <TableCell>{session.absent}</TableCell>
                          <TableCell>{session.late}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Over Time</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                    <TrendingUp className="h-12 w-12 opacity-20" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Student Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                    <Users className="h-12 w-12 opacity-20" />
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
