"use client"

import { redirect } from "next/navigation"
import { useUser } from "@clerk/nextjs"

export default function Home() {
  const { isLoaded, user } = useUser()

  if (!isLoaded) {
    // Show loading state or redirect to a loading page
    // For simplicity, we'll return null or a loading spinner
    return null
  }

  if (user) {
    redirect("/editor")
  } else {
    redirect("/sign-in")
  }
}