"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { closeModal } from "@/features/modalSlice";
import LoginForm from "../forms/login-form";

export const LoginModal = () => {
  const dispatch = useDispatch();
  const { isOpen, type, data } = useSelector((state: RootState) => state.modal);

  if (!isOpen) return null;

  const isModalOpen = isOpen && type === "loginModal";

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg">Login</DialogTitle>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};
