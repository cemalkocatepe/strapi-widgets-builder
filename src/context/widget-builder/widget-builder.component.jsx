import React from "react";
// Components
import HeaderComponent from "../header/header.component";
import WidgetListComponent from "../widget-list/widget-list.component";
import WidgetCreateComponent from "../widget-create/widget-create.component";
// Store
import usePageStore from "../../store/usePageStore";

const WidgetBuilderComponent = () => {
  const activePage = usePageStore((state) => state.activePage);

  return (
    <>
      <HeaderComponent />
      {activePage == "widget-list" && <WidgetListComponent />}
      {activePage == "widget-create" && <WidgetCreateComponent />}
    </>
  );
};

export default WidgetBuilderComponent;
