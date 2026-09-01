#1 After I run the application, I'm faced with the following error: 
Error: You're importing a module that depends on `useState` into a React Server Component module. This API is only available in Client Components. To fix, mark the file (or its parent) with the `"use client"` directive.
    Learn more: https://nextjs.org/docs/app/api-reference/directives/use-client
  3 | import { Input } from "@/components/ui/input";
  4 | import { cn } from "@/lib/utils";
> 5 | import { useState } from "react";
    |          ^^^^^^^^
  6 |
  7 | export default function SignInPage() {
  8 |   const [email, setEmail] = useState("");

Ecmascript file had an error
 GET /sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F 500 in 3.3s (next.js: 2.7s, proxy.ts: 27ms, application-code: 620ms)
[browser] Uncaught Error: ./app/sign-in/[[...rest]]/page.tsx:5:10
Error: You're importing a module that depends on `useState` into a React Server Component module. This API is only available in Client Components. To fix, mark the file (or its parent) with the `"use client"` directive.
    Learn more: https://nextjs.org/docs/app/api-reference/directives/use-client
  3 | import { Input } from "@/components/ui/input";
  4 | import { cn } from "@/lib/utils";
> 5 | import { useState } from "react";
    |          ^^^^^^^^
  6 |
  7 | export default function SignInPage() {
  8 |   const [email, setEmail] = useState("");

Ecmascript file had an error


    at <unknown> (Error: ./app/sign-in/[[...rest]]/page.tsx:5:10)
    at <unknown> (Error: (./app/sign-in/[[...rest]]/page.tsx:5:10)