import { create } from "zustand";

const usePageStore = create((set) => ({
  activePage: "widget-list",
  prevPage: [],
  setActivePage: (page) =>
    set((state) => ({
      prevPage: [...state.prevPage, state.activePage],
      activePage: page,
    })),
  goToBack: () => {
    set((state) => {
      const activePage = state.prevPage.length > 0 ? state.prevPage[state.prevPage.length - 1] : "widget-list";
      console.log(activePage, state.prevPage);
      return {
        activePage: activePage,
        prevPage: state.prevPage.slice(0, -1),
      };
    });
  },
}));

export default usePageStore;
