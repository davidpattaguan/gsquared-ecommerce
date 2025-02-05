"use client";
import { useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router";
import { AppDispatch, RootState } from "@/store/store";

import { logout } from "../../features/slices/auth-slice";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function LogOutForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch

  const session = useSelector((state: RootState) => state.auth.session);
  useEffect(() => {
    if (session === null) {
      navigate("/"); // Redirect to the home page
    }
  }, [session, navigate]);

  async function onSubmit() {
    dispatch(logout());
    toast("Successfully Logged Out!");
  }

  return (
    <div className="flex flex-col gap-5 ">
      <div className="w-full flex gap-2">
        <Link
          to="/"
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          Back to Home
        </Link>
        <Button onClick={() => onSubmit()} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}
