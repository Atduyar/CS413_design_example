"use client";

import {
  AlertCircle,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Search,
  Users,
  XCircle,
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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Portal3() {
  const [currentWeek, setCurrentWeek] = useState("Mar 30 - Apr 5");

  const weekSchedule = [
    {
      day: "Monday",
      date: "Mar 30",
      sessions: [
        {
          id: 1,
          course: "Advanced Computer Architecture",
          time: "10:00 AM - 11:30 AM",
          room: "Eng 304",
          attendance: 40,
          total: 42,
          status: "completed",
        },
        {
          id: 2,
          course: "Software Engineering",
          time: "3:30 PM - 5:00 PM",
          room: "Eng 205",
          attendance: 36,
          total: 36,
          status: "upcoming",
        },
      ],
    },
    {
      day: "Tuesday",
      date: "Mar 31",
      sessions: [
        {
          id: 3,
          course: "Machine Learning",
          time: "2:00 PM - 3:30 PM",
          room: "Sci 201",
          attendance: 35,
          total: 38,
          status: "upcoming",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "Apr 1",
      sessions: [
        {
          id: 4,
          course: "Database Systems",
          time: "9:00 AM - 10:30 AM",
          room: "Tech 105",
          attendance: 0,
          total: 45,
          status: "pending",
        },
      ],
    },
    { day: "Thursday", date: "Apr 2", sessions: [] },
    {
      day: "Friday",
      date: "Apr 3",
      sessions: [
        {
          id: 5,
          course: "Web Development",
          time: "11:00 AM - 12:30 PM",
          room: "Tech 302",
          attendance: 0,
          total: 52,
          status: "pending",
        },
      ],
    },
  ];

  const stats = [
    { label: "This Week", value: "8", subtext: "sessions" },
    { label: "Completed", value: "6", subtext: "marked" },
    { label: "Pending", value: "2", subtext: "to go" },
    { label: "Avg Rate", value: "94%", subtext: "attendance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="flex h-14 items-center gap-4 px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/ius-logo.png"
              alt="IUS Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="font-semibold">IUS Schedule</span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="w-56 pl-9" />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive"></span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                DR
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-r bg-muted/20">
          <div className="p-4">
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Today</p>
                  <p className="text-3xl font-bold">Monday</p>
                  <p className="text-lg text-muted-foreground">
                    March 30, 2026
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                This Week Stats
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border bg-card p-3 text-center"
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar View
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="mr-2 h-4 w-4" />
                My Courses
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Students
              </Button>
            </div>
          </div>
        </aside>

        <main className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Weekly Schedule</h1>
              <p className="text-muted-foreground">
                Manage your classes and attendance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="min-w-[140px] text-center font-medium">
                {currentWeek}
              </span>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {weekSchedule.map((day) => (
              <div key={day.date} className="relative">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {day.day[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{day.day}</p>
                    <p className="text-sm text-muted-foreground">{day.date}</p>
                  </div>
                </div>

                <div className="ml-5 space-y-3 border-l-2 border-muted pl-8">
                  {day.sessions.length === 0 ? (
                    <div className="rounded-lg border border-dashed p-6 text-center text-muted-foreground">
                      No sessions scheduled
                    </div>
                  ) : (
                    day.sessions.map((session) => (
                      <Card
                        key={session.id}
                        className={
                          session.status === "completed"
                            ? "border-green-200 bg-green-50/50"
                            : session.status === "upcoming"
                              ? "border-primary"
                              : ""
                        }
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">
                                  {session.course}
                                </h3>
                                {session.status === "completed" && (
                                  <Badge
                                    variant="outline"
                                    className="bg-green-100 text-green-800"
                                  >
                                    Completed
                                  </Badge>
                                )}
                                {session.status === "upcoming" && (
                                  <Badge>Upcoming</Badge>
                                )}
                              </div>
                              <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {session.time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {session.room}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {session.attendance}/{session.total}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {session.status === "pending" && (
                                <Button size="sm">Start Session</Button>
                              )}
                              {session.status === "upcoming" && (
                                <Button variant="outline" size="sm">
                                  Mark Attendance
                                </Button>
                              )}
                              {session.status === "completed" && (
                                <div className="flex gap-1">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
