import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden md:block w-1/3 flex flex-col items-center justify-center p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-brand">Ghost AI</h2>
        <p className="mb-6 text-copy-secondary max-w-xs">
          Transform your ideas into reality with AI-powered development
        </p>
        <div className="space-y-4 text-left max-w-xs">
          <div className="flex items-start space-x-3">
            <span className="flex h-3 w-3 items-center justify-center bg-brand/10 text-brand rounded-full shrink-0">
              ✓
            </span>
            <span className="text-copy-secondary">AI-assisted coding</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="flex h-3 w-3 items-center justify-center bg-brand/10 text-brand rounded-full shrink-0">
              ✓
            </span>
            <span className="text-copy-secondary">Real-time collaboration</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="flex h-3 w-3 items-center justify-center bg-brand/10 text-brand rounded-full shrink-0">
              ✓
            </span>
            <span className="text-copy-secondary">Deploy with one click</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-2/3 p-6">
        <SignUp />
      </div>
    </div>
  );
}