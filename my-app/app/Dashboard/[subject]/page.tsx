"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mockQuestion = {
  question: "What is the capital of France?",
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  correct: "Paris",
}

export default function SubjectExamPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { subject } = useParams()
  const [selected, setSelected] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(10 * 60) // 10 minutes in seconds

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60)
    const seconds = sec % 60
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="p-8 space-y-6">
      {/* Timer */}
      <div className="text-2xl font-semibold text-right text-red-600">
        Time Left: {formatTime(timeLeft)}
      </div>

      {/* Question Card */}
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">{mockQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockQuestion.options.map((option, idx) => (
            <Button
              key={idx}
              variant={selected === option ? "default" : "outline"}
              onClick={() => setSelected(option)}
              className="w-full justify-start"
            >
              {option}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
