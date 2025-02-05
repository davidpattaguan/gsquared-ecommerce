export interface User {
  email: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  manufacturer: string;
  isFeatured: boolean;
  category?: string;
  description: string;
}

export interface Order {
  user?: string;
  productId: number;
  quantity?: number;
  phone: string;
  paymentMethod: string;
  name: string;
}
