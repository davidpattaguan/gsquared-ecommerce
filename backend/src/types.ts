export interface User {
  username: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  manufacturer: string;
  isFeatured: boolean;
}

export interface Order {
  user?: string;
  productId: number;
  quantity: number;
}
