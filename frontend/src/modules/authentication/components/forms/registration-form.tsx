"use client";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  RegistrationFormSchema,
  RegistrationFormType,
} from "../../schemas/authentication-schema";
import { registerUser } from "../../features/slices/auth-slice";
import { toast } from "sonner";
import { closeModal } from "@/features/modalSlice";

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch
  const session = useSelector((state: RootState) => state.auth.session);
  useEffect(() => {
    if (session !== null) {
      navigate("/");
    }
  }, [session, navigate]);

  const form = useForm<RegistrationFormType>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: RegistrationFormType) {
    setLoading(true);
    dispatch(registerUser(values))
      .unwrap()
      .then(() => {
        toast("Successfully Registered an Account - Redirecting To Login Page");
        dispatch(closeModal());
        navigate("/auth/login");
      })
      .catch((error: any) => {
        console.log(error, "sa form");
        toast.error(() => <>Registration Failed.</>, {
          description: () => <>{error.message}</>,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} type="submit">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>
    </>
  );
}
