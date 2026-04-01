// src/store/useStore.js
import { create } from "zustand";
import { transactions as initialData } from "../data/mockData";

// load from localStorage
const storedData = JSON.parse(localStorage.getItem("transactions"));

export const useStore = create((set) => ({
  transactions: storedData || initialData,
  role: "viewer",

  setRole: (role) => set({ role }),

  addTransaction: (tx) =>
    set((state) => {
      const updated = [
        ...state.transactions,
        { ...tx, id: Date.now() },
      ];

      // save to localStorage
      localStorage.setItem("transactions", JSON.stringify(updated));

      return { transactions: updated };
    }),
}));