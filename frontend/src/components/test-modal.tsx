"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { closeModal } from "@/features/modalSlice";
import MyForm from "@/modules/authentication/pages/login-page";

export const TestModal = () => {
  const dispatch = useDispatch();
  const { isOpen, type, data } = useSelector((state: RootState) => state.modal);

  if (!isOpen) return null;

  const isModalOpen = isOpen && type === "createDepartmentModal";

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create Channel
          </DialogTitle>
        </DialogHeader>
        {JSON.stringify(data)}
        <MyForm />
      </DialogContent>
    </Dialog>
  );
};
