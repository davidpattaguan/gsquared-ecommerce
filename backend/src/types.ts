export interface User {
  username: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Order {
  user: string;
  productId: number;
  quantity: number;
}
