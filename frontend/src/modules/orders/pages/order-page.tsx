"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import type { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { fetchProductById } from "@/modules/products/features/slices/products-slice";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  paymentMethod: z.enum(["credit_card", "cash", "monthly"], {
    required_error: "Please select a payment method.",
  }),
});

export default function OrderFormWithImage() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      paymentMethod: undefined,
    },
  });

  const session = useSelector((state: RootState) => state.auth.session);
  useEffect(() => {
    if (!session) {
      navigate("/auth/login");
    }
  }, [session, navigate]); // Added navigate to dependencies

  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(Number(id)));
  }, [dispatch, id]);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error)
    return <div className="text-center py-12 text-red-600">Error: {error}</div>;
  if (!product)
    return <div className="text-center py-12">Product not found</div>;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const productId = Number(id);

    console.log(values);

    if (isNaN(productId)) {
      toast.error("Invalid product ID");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
        body: JSON.stringify({
          productId,
          name: values.name,
          email: values.email,
          phone: values.phone,
          paymentMethod: values.paymentMethod,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      toast.success("Order submitted successfully!");
      navigate("/orders");
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Failed to submit order. Please try again.");
    }
  }

  return (
    <div className="flex min-h-[95vh] flex-col-reverse lg:flex-row">
      <div className="flex-1 bg-zinc-900 text-white p-8 lg:p-12">
        <div className="h-full flex flex-col justify-between">
          <div className="flex items-center text-lg font-medium mb-8">
            {product.name} - ${product.price}
          </div>
          <div className="relative h-48 lg:h-auto lg:flex-grow">
            <img
              src={product.imageUrl || "/placeholder.svg"}
              alt="Product Image"
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
          <div>{product.description}</div>
        </div>
      </div>
      <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-2xl font-semibold tracking-tight">
              Place your order
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to submit your order
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a payment method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="credit_card">Credit Card</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="monthly">
                          Monthly Payments
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit Order
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
