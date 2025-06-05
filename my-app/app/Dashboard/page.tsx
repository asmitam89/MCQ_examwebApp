/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useContext, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard, BookOpenCheck, BarChart } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const subjects = [
    { name: "Mathematics", code: "MATH101" },
    { name: "Science", code: "SCI201" },
    { name: "History", code: "HIST301" },
    { name: "English", code: "ENG401" },
  ]
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('user')
      if (token != undefined) {
      } else {
        alert('please login')
        window.location.href = '/Login'
      }
    }
  }, []);


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 space-y-6">
        <div className="text-xl font-bold flex items-center gap-2">
          <LayoutDashboard className="h-6 w-6" />
          Dashboard
        </div>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard/exam" className="flex items-center gap-2 hover:text-blue-500">
            <BookOpenCheck className="h-5 w-5" />
            Exam
          </Link>
          <Link href="/dashboard/result" className="flex items-center gap-2 hover:text-blue-500">
            <BarChart className="h-5 w-5" />
            Result
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">Subjects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
          {subjects.map((subject, i) => (
            <Link href={`/Dashboard/${subject.code}`} key={i}>
              <Card className="cursor-pointer hover:shadow-xl transition-all duration-200">
                <CardHeader>
                  <CardTitle>{subject.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Code: {subject.code.toUpperCase()}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

