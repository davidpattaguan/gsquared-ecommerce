import { Button } from "@/components/ui/button";
import { openModal } from "@/features/modalSlice";
import { useDispatch } from "react-redux";

const LoginButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      className="w-full"
      onClick={() =>
        dispatch(openModal({ type: "loginModal", data: { id: 1 } }))
      }
    >
      Login first to Order!
    </Button>
  );
};

export default LoginButton;
