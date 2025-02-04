"use client";

import { useEffect, useState } from "react";
import { TestModal } from "../test-modal";
import { LoginModal } from "@/modules/authentication/components/modals/login-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LoginModal />
      <TestModal />
    </>
  );
};
