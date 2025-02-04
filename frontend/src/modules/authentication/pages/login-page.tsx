"use client";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/slices/auth-slice";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router";
import { AppDispatch, RootState } from "@/store/store";
import LoginForm from "../components/forms/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function MyForm() {
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch
  const session = useSelector((state: RootState) => state.auth.session);
  const navigate = useNavigate();

  useEffect(() => {
    if (session !== null) {
      navigate("/"); // Redirect to the home page
    }
  }, [session, navigate]);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        toast({ title: "Successfully Logged in!" });
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error || "There was a problem with your request.",
        });
      });
  }

  return (
    <div className="flex justify-center items-center h-[80vh] w-screen">
      <div className="w-96">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Welcome to ECARMMERCE
            </CardTitle>
            <CardDescription>Login With Your Account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
