// src/store/useWidgetStore.js
import { create } from "zustand";

const useWidgetStore = create((set) => ({
  isValidate: [],
  editWidgetData: {},
  setEditWidgetData: (widgetData) => set({ editWidgetData: widgetData }),
  setIsValidate: (isValid) => set({ isValidate: isValid }),
}));

export default useWidgetStore;
