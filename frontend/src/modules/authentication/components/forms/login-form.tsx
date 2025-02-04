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

import { useNavigate } from "react-router";
import { AppDispatch, RootState } from "@/store/store";
import {
  LoginFormSchema,
  LoginFormType,
} from "../../schemas/authentication-schema";
import { loginUser } from "../../features/slices/auth-slice";
import { toast } from "sonner";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch

  const session = useSelector((state: RootState) => state.auth.session);
  useEffect(() => {
    if (session !== null) {
      navigate("/"); // Redirect to the home page
    }
  }, [session, navigate]);

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  });

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        toast("Successfully Logged In!");
      })
      .catch((error: any) => {
        toast.error("Failed To Login!");
      });
  }

  return (
    <>
      {/* {JSON.stringify(session)}{" "} */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 "
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" type="" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Placeholder" {...field} />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Login</Button>
        </form>
      </Form>
    </>
  );
}
