import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import { SiteHeader } from "./site-header";

export default function Header() {
  const session = useSelector((state: RootState) => state.auth.session);
  console.log("sesh", session);
  return (
    <div>
      <SiteHeader session={session} />
    </div>
  );
}
