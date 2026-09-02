"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignIn, useSignUp, useUser } from "@clerk/nextjs";
import { Workflow, Users, FileCode2, Mail } from "lucide-react";

type Mode = "sign-in" | "sign-up";

interface AuthShellProps {
  mode: Mode;
}

function GoogleIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6 12.227c0-.708-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.995 3.018v2.51h3.227c1.89-1.74 2.986-4.305 2.986-7.35z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.964-.895 6.618-2.422l-3.227-2.51c-.895.6-2.04.955-3.39.955-2.605 0-4.81-1.76-5.6-4.123H3.073v2.59A9.998 9.998 0 0 0 12 22z"
        fill="#34A853"
      />
      <path
        d="M6.4 13.9a6.003 6.003 0 0 1 0-3.8v-2.59H3.073a9.998 9.998 0 0 0 0 8.98L6.4 13.9z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.977c1.468 0 2.786.505 3.823 1.495l2.868-2.868C16.96 2.99 14.695 2 12 2A9.998 9.998 0 0 0 3.073 7.51L6.4 10.1c.79-2.364 2.995-4.123 5.6-4.123z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

interface SocialButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

function SocialButton({ label, icon, onClick, disabled }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-surface-border bg-bg-elevated px-4 py-2.5 text-sm font-medium text-copy-primary transition-colors hover:bg-bg-subtle disabled:cursor-not-allowed disabled:opacity-60"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4h6v6H4z" />
          <path d="M14 4h6v6h-6z" />
          <path d="M4 14h6v6H4z" />
          <path d="M14 14h6v6h-6z" />
        </svg>
      </div>
      <span className="text-sm font-semibold tracking-tight text-copy-primary">
        Ghost AI
      </span>
    </div>
  );
}

function LeftPanel() {
  return (
    <aside className="hidden h-full w-1/3 flex-col justify-between bg-base p-10 md:flex">
      <BrandMark />

      <div className="space-y-8">
        <h1 className="text-3xl font-semibold leading-tight text-copy-primary">
          Design systems at the
          <br />
          speed of thought.
        </h1>

        <p className="max-w-sm text-sm leading-relaxed text-copy-secondary">
          Describe your architecture in plain English. Ghost AI maps it to a
          shared canvas your whole team can refine in real time.
        </p>

        <ul className="space-y-5">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-accent-dim text-brand">
              <Workflow className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-copy-primary">
                AI Architecture Generation
              </p>
              <p className="text-xs leading-relaxed text-copy-muted">
                Describe your system, AI maps it to nodes and edges on a live
                canvas.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-accent-dim text-brand">
              <Users className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-copy-primary">
                Real-time Collaboration
              </p>
              <p className="text-xs leading-relaxed text-copy-muted">
                Live cursors, presence indicators, and shared node editing
                across your team.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-accent-dim text-brand">
              <FileCode2 className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-copy-primary">
                Instant Spec Generation
              </p>
              <p className="text-xs leading-relaxed text-copy-muted">
                Export a complete Markdown technical spec directly from the
                canvas graph.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <p className="text-xs text-copy-faint">
        © 2026 Ghost AI. All rights reserved.
      </p>
    </aside>
  );
}

function ClerkFooter() {
  return (
    <div className="mt-6 flex justify-center">
      <div className="flex items-center gap-2 rounded-full border border-surface-border bg-bg-surface px-3 py-1.5 text-[11px] text-copy-muted">
        <span>Secured by</span>
        <span className="font-semibold text-copy-primary">Clerk</span>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative my-5 flex items-center" aria-hidden="true">
      <div className="flex-1 border-t border-surface-border" />
      <span className="px-3 text-xs text-copy-muted">or</span>
      <div className="flex-1 border-t border-surface-border" />
    </div>
  );
}

export function AuthShell({ mode }: AuthShellProps) {
  const router = useRouter();
  const signIn = useSignIn();
  const signUp = useSignUp();
  const { isSignedIn, isLoaded: userLoaded } = useUser();

  const [email, setEmail] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Bounce already-signed-in users to the editor.
  React.useEffect(() => {
    if (userLoaded && isSignedIn) {
      router.replace("/editor");
    }
  }, [userLoaded, isSignedIn, router]);

  // While Clerk is loading or the user is signed in, render nothing — the
  // useEffect above will navigate them to the editor.
  if (!userLoaded || isSignedIn) {
    return null;
  }

  const ssoCallback =
    mode === "sign-in" ? "/sign-in/sso-callback" : "/sign-up/sso-callback";

  const startOAuth = async (strategy: "oauth_google" | "oauth_github") => {
    setError(null);
    setPending(true);
    try {
      const result =
        mode === "sign-in"
          ? await signIn.signIn.sso({
              strategy,
              redirectUrl: ssoCallback,
              redirectCallbackUrl: ssoCallback,
            })
          : await signUp.signUp.sso({
              strategy,
              redirectUrl: ssoCallback,
              redirectCallbackUrl: ssoCallback,
            });

      if (result.error) {
        setError(result.error.message ?? "Sign-in failed. Please try again.");
        setPending(false);
      }
      // Success path navigates to the OAuth provider — no further action here.
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      setPending(false);
    }
  };

  const submitEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setError(null);
    setPending(true);

    const normalized = email.trim();

    try {
      if (mode === "sign-in") {
        // Start a sign-in. If the identifier is new, fall through to sign-up.
        const created = await signIn.signIn.create({
          identifier: normalized,
          signUpIfMissing: true,
        });

        if (created.error) {
          setError(created.error.message ?? "Sign-in failed. Please try again.");
          setPending(false);
          return;
        }

        if (signIn.signIn.status === "complete") {
          await signIn.signIn.finalize();
          router.push("/editor");
          return;
        }

        // Send a one-time email code, then route to the verify page.
        const sent = await signIn.signIn.emailCode.sendCode({
          emailAddress: normalized,
        });
        if (sent.error) {
          setError(sent.error.message ?? "Failed to send code. Please try again.");
          setPending(false);
          return;
        }
        router.push("/sign-in/verify-email");
        return;
      }

      // Sign-up flow
      const created = await signUp.signUp.create({
        emailAddress: normalized,
      });
      if (created.error) {
        setError(
          created.error.message ?? "Sign-up failed. Please try again.",
        );
        setPending(false);
        return;
      }

      const sent = await signUp.signUp.verifications.sendEmailCode();
      if (sent.error) {
        setError(sent.error.message ?? "Failed to send code. Please try again.");
        setPending(false);
        return;
      }

      router.push("/sign-up/verify-email");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      setPending(false);
    }
  };

  const heading = mode === "sign-in" ? "Sign in to GhostArc" : "Sign up for GhostArc";
  const description =
    mode === "sign-in"
      ? "Welcome back! Please sign in to continue"
      : "Create an account to start designing with Ghost AI";

  const continueLabel = mode === "sign-in" ? "Continue" : "Create account";

  const switchPrompt = mode === "sign-in" ? (
    <>
      Don&apos;t have an account?{" "}
      <Link
        href="/sign-up"
        className="font-medium text-brand hover:underline"
      >
        Sign up
      </Link>
    </>
  ) : (
    <>
      Already have an account?{" "}
      <Link
        href="/sign-in"
        className="font-medium text-brand hover:underline"
      >
        Sign in
      </Link>
    </>
  );

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-base">
      <LeftPanel />

      <main className="flex w-full flex-col items-center justify-center px-6 py-10 md:w-2/3">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-surface-border bg-bg-surface p-6 shadow-2xl">
            {/* Clerk CAPTCHA widget container for bot sign-up protection */}
            <div id="clerk-captcha" data-clerk-captcha></div>

            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-copy-primary">
                  {heading}
                </h2>
                <p className="mt-1 text-xs text-copy-muted">{description}</p>
              </div>
              {mode === "sign-in" && (
                <span className="shrink-0 rounded-full border border-surface-border bg-bg-elevated px-2.5 py-1 text-[11px] text-copy-muted">
                  Last used
                </span>
              )}
            </div>

            <div className="space-y-2.5">
              <SocialButton
                icon={<GoogleIcon />}
                label="Continue with Google"
                onClick={() => startOAuth("oauth_google")}
                disabled={pending || signIn.fetchStatus === "fetching" || signUp.fetchStatus === "fetching"}
              />
              <SocialButton
                icon={<GitHubIcon />}
                label="Continue with GitHub"
                onClick={() => startOAuth("oauth_github")}
                disabled={pending || signIn.fetchStatus === "fetching" || signUp.fetchStatus === "fetching"}
              />
            </div>

            <Divider />

            <form onSubmit={submitEmail} className="space-y-3">
              <label
                htmlFor="auth-email"
                className="text-xs font-medium text-copy-secondary"
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-copy-muted"
                  aria-hidden="true"
                />
                <input
                  id="auth-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={pending}
                  className="w-full rounded-xl border border-surface-border bg-bg-elevated py-2.5 pl-9 pr-3 text-sm text-copy-primary placeholder:text-copy-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand disabled:cursor-not-allowed disabled:opacity-60"
                  required
                />
              </div>

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
                <span>{continueLabel}</span>
                <span aria-hidden="true">→</span>
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-copy-muted">
              {switchPrompt}
            </p>
          </div>

          <ClerkFooter />
        </div>
      </main>
    </div>
  );
}
