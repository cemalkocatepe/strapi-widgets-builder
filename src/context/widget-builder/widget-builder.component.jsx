import React from "react";
// Components
import HeaderComponent from "../header/header.component";
import WidgetListComponent from "../widget-list/widget-list.component";
import WidgetCreateComponent from "../widget-create/widget-create.component";
import WidgetEditComponent from "../widget-edit/widget-edit.component";
// Store
import usePageStore from "../../store/usePageStore";

const WidgetBuilderComponent = ({ widgetsData }) => {
  const activePage = usePageStore((state) => state.activePage);

  return (
    <>
      <HeaderComponent />
      {activePage == "widget-list" && <WidgetListComponent widgetsData={widgetsData} />}
      {activePage == "widget-create" && <WidgetCreateComponent />}
      {activePage == "widget-edit" && <WidgetEditComponent />}
    </>
  );
};

export default WidgetBuilderComponent;
