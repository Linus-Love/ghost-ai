"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { Mail, ArrowLeft } from "lucide-react";

export default function SignInVerifyEmail() {
  const router = useRouter();
  const signIn = useSignIn();
  const [code, setCode] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!code.trim()) return;
    setError(null);
    setPending(true);
    try {
      const result = await signIn.signIn.emailCode.verifyCode({
        code: code.trim(),
      });
      if (result.error) {
        setError(result.error.message ?? "Invalid code. Please try again.");
        setPending(false);
        return;
      }

      const finalized = await signIn.signIn.finalize();
      if (finalized.error) {
        setError(finalized.error.message ?? "Could not complete sign-in.");
        setPending(false);
        return;
      }
      router.push("/editor");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Invalid code. Please try again.";
      setError(message);
      setPending(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-base px-6">
      <div className="w-full max-w-sm rounded-2xl border border-surface-border bg-bg-surface p-6 shadow-2xl">
        <Link
          href="/sign-in"
          className="inline-flex items-center gap-1.5 text-xs text-copy-muted hover:text-copy-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </Link>
        <div className="mt-4 mb-5 flex justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-dim text-brand">
            <Mail className="h-5 w-5" />
          </span>
        </div>
        <h2 className="text-center text-lg font-semibold text-copy-primary">
          Check your email
        </h2>
        <p className="mt-1 text-center text-xs text-copy-muted">
          We sent a verification code to your inbox. Enter it below to continue.
        </p>
        <form onSubmit={submit} className="mt-5 space-y-3">
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter the 6-digit code"
            disabled={pending}
            className="w-full rounded-xl border border-surface-border bg-bg-elevated px-3 py-2.5 text-center text-sm tracking-[0.4em] text-copy-primary placeholder:text-copy-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            required
          />
          {error && (
            <p className="text-xs text-state-error" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>Verify</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
