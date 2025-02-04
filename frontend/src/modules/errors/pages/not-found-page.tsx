// src/modules/errors/pages/not-found-page.tsx
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2 mb-3">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className={`${buttonVariants({ variant: "default" })}`}>
        Go Home
      </Link>
    </div>
  );
}
