import React from "react";
import { create } from "zustand";

interface SeacrhModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSeacrhModal = create<SeacrhModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSeacrhModal;
