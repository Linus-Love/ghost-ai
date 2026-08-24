"use client"

import type * as React from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
  centerContent?: React.ReactNode
  className?: string
}

export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
  centerContent,
  className,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center border-b border-surface-border bg-surface px-4",
        className
      )}
    >
      <div className="flex flex-1 items-center justify-start">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          aria-pressed={isSidebarOpen}
          onClick={onSidebarToggle}
          className="rounded-xl text-copy-secondary hover:bg-accent-dim hover:text-brand"
        >
          <SidebarIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center text-sm font-medium text-copy-secondary">
        {centerContent}
      </div>

      <div className="flex flex-1 items-center justify-end" />
    </header>
  )
}
