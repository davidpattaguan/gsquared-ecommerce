"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router";
import { RootState } from "@/store/store";
import LoginForm from "../components/forms/login-form";

export default function MyForm() {
  const session = useSelector((state: RootState) => state.auth.session);
  const navigate = useNavigate();

  useEffect(() => {
    if (session !== null) {
      navigate("/"); // Redirect to the home page
    }
  }, [session, navigate]);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <div>
              <div className="flex flex-col items-center gap-2 text-center mb-5">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>
              <LoginForm />

              <div className="text-center text-sm mt-5">
                Don&apos;t have an account?{" "}
                <Link
                  to="/auth/registration"
                  className="underline underline-offset-4"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="http://hdqwalls.com/wallpapers/tesla-roadster-4k-pd.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
