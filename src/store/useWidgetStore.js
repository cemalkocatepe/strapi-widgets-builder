// src/store/useWidgetStore.js
import { create } from "zustand";

const useWidgetStore = create((set) => ({
  activeWidgetData: {},
  setActiveWidgetData: (widgetData) => set({ activeWidgetData: widgetData }),
}));

export default useWidgetStore;
