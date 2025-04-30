// src/store/useWidgetStore.js
import { create } from "zustand";

const usePageStore = create((set) => ({
  activePage: "widget-list",
  prevPage: null,
  setActivePage: (page) =>
    set((state) => ({
      prevPage: state.activePage,
      activePage: page,
    })),
}));

export default usePageStore;
