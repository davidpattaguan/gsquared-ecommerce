import { siteConfig } from "@/config/site";

import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ShoppingBag, User } from "lucide-react";
import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  session: any | null;
}

export function SiteHeader({ session }: SiteHeaderProps) {
  return (
    <header className=" sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-3">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <nav className="flex items-center">
              {session !== null ? (
                <ul className="flex space-x-4 items-center">
                  <li>
                    <Link to="/orders" className="flex gap-2 items-center">
                      <ShoppingBag className="w-4 h-4" /> My Orders
                    </Link>
                  </li>
                  <li>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="focus:outline-none">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-slate-100">
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuLabel className="font-normal">
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {session.user.email}
                            </p>
                            <p className="text-xs leading-none text-muted-foreground">
                              {session.email}
                            </p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link to="/auth/logout">Logout</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/auth/login"
                    className={cn(buttonVariants({ variant: "default" }))}
                  >
                    Login
                  </Link>

                  <Link
                    to="/auth/registration"
                    className={cn(buttonVariants({ variant: "default" }))}
                  >
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </nav>
        </div>
      </div>
    </header>
  );
}
