import { Car, User } from "lucide-react";
import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";

export default function Header() {
  const session = useSelector((state: RootState) => state.auth.session);
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Car className="h-6 w-6" />
          <span className="text-2xl font-bold">eCARmmerce</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">All Cars</Link>
            </li>
            <li>
              <Link to="/stores">Store Locator</Link>
            </li>
          </ul>
        </nav>
        {session !== null ? (
          <>
            <li>
              <Link to="/orders">My Orders</Link>
            </li>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-slate-100">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button>Login</Button>
          </>
        )}
      </div>
    </header>
  );
}
