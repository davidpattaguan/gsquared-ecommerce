"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
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
import { login } from "../features/slices/auth-slice";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function MyForm() {
  const session = useSelector((state) => state.auth.session);
  console.log(session);
  const navigate = useNavigate();

  useEffect(() => {
    if (session.session !== null) {
      navigate("/"); // Redirect to the home page
    }
  }, [session, navigate]);

  const { toast } = useToast();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          username: values.username,
          password: values.password,
        }
      );

      const data = await response.data;

      dispatch(login({ session: { user: data.user, token: data.token } }));

      toast({
        title: "Sucessfully Logged in!",
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }

  return (
    <>
      {JSON.stringify(session)}{" "}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
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

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
