// src/store/useWidgetStore.js
import { create } from "zustand";

const useWidgetStore = create((set) => ({
  isValidate: [],
  activeWidgetData: {},
  setActiveWidgetData: (widgetData) => set({ activeWidgetData: widgetData }),
  setIsValidate: (isValid) => set({ isValidate: isValid }),
}));

export default useWidgetStore;
