import { Icons } from "./components/icons";

export type Payment = {
  id: string;
  order: {
    email: string;
    user: string;
    paymentMethod: string;
    phone: string;
  };
  product: {
    name: string;
    price: number;
  };
};
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  manufacturer: string;
  description: string;
  category: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalResults: number;
}

export interface ProductsResponse {
  statusCode: number;
  message: string;
  result: Product[];
  pagination: PaginationInfo;
}

export interface ProductsState {
  products: Product[];
  product: Product | null; // Fixed type
  pagination: PaginationInfo;
  loading: boolean;
  error: string | null;
}

export interface NavItem {
  title: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithChildren;

export type SidebarNavItem = NavItemWithChildren;
