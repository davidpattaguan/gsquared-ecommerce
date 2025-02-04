import { authFetch } from "@/lib/auth-fetch";
import { RootState } from "@/store/store";
import type React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

interface OrderFormData {
  name: string;
  email: string;
  phone: string;
}

const OrderPage: React.FC = () => {
  const navigate = useNavigate();

  const session = useSelector((state: RootState) => state.auth.session);

  useEffect(() => {
    if (session === null) {
      navigate("/auth/login"); // Redirect to the home page
    }
  }, [session, navigate]);

  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productId = Number(id); // ✅ Convert id to number

    if (isNaN(productId)) {
      toast("Invalid product ID.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({
          productId: productId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      toast("Order submitted successfully!");
      navigate("/orders"); // Redirect after successful order
    } catch (error) {
      console.error("Error submitting order:", error);
      toast("Failed to submit order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Car {id}</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="your@email.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Your Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
