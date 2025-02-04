// src/redux/modalSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType =
  | "createDepartmentModal"
  | "loginModal"
  | "DeleteAttendanceModal"
  | null;

// Define the initial state type
interface ModalState {
  type: ModalType;
  data: any; // Replace 'any' with a specific type if possible
  isOpen: boolean;
}

const initialState: ModalState = {
  type: null,
  data: null,
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ type: ModalType; data?: any }>
    ) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.data = action.payload.data;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
      state.type = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
