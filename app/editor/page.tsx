import type * as React from "react";

export default function EditorPage() {
  return (
    <div className="flex h-full w-full">
      {/* Left sidebar with accent color */}
      <aside className="w-1/2 bg-primary flex items-center justify-center text-primary-foreground px-6 font-sans">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Ghost AI</h1>
          <p className="text-copy-muted max-w-xl">
            Create, edit, and deploy AI-powered workflows with ease.
          </p>
        </div>
      </aside>

      {/* Right canvas area */}
      <main className="w-1/2 bg-base flex items-center justify-center relative">
        <div className="w-full h-full max-w-[800px] max-h-[600px] border-2 border-dashed border-surface-border rounded-2xl flex items-center justify-center text-copy-muted">
          <p className="text-center">
            Canvas workspace
          </p>
        </div>
      </main>
    </div>
  );
}