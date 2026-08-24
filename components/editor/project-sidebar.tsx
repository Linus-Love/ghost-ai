"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

function EmptyProjectState({ label }: { label: string }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border-subtle bg-bg-elevated/60 px-6 text-center">
      <p className="text-sm font-medium text-copy-secondary">{label}</p>
      <p className="mt-2 text-sm text-copy-muted">No projects to show yet.</p>
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose, className }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-4 top-[4.5rem] z-40 flex h-[calc(100vh-5.5rem)] w-80 max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-surface-border bg-surface/95 shadow-2xl backdrop-blur transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)]",
        className
      )}
      aria-hidden={!isOpen}
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border px-4">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Close project sidebar"
          onClick={onClose}
          className="h-9 w-9 rounded-xl text-copy-secondary hover:bg-accent-dim hover:text-brand"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="flex min-h-0 flex-1 flex-col p-4">
        <TabsList className="grid w-full grid-cols-2 rounded-xl bg-bg-subtle p-1 text-copy-muted">
          <TabsTrigger
            value="my-projects"
            className="rounded-xl data-[state=active]:bg-bg-elevated data-[state=active]:text-copy-primary"
          >
            My Projects
          </TabsTrigger>
          <TabsTrigger
            value="shared"
            className="rounded-xl data-[state=active]:bg-bg-elevated data-[state=active]:text-copy-primary"
          >
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="mt-4 min-h-0 flex-1">
          <EmptyProjectState label="My Projects" />
        </TabsContent>
        <TabsContent value="shared" className="mt-4 min-h-0 flex-1">
          <EmptyProjectState label="Shared" />
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-surface-border p-4">
        <Button type="button" className="w-full rounded-xl">
          <Plus className="h-4 w-4" aria-hidden="true" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
