import React from "react";
// Components
import HeaderComponent from "../header/header.component";
import WidgetListComponent from "../widget-list/widget-list.component";
import WidgetCreateComponent from "../widget-create/widget-create.component";
import WidgetEditComponent from "../widget-edit/widget-edit.component";
// Store
import usePageStore from "../../store/usePageStore";

const WidgetBuilderComponent = ({ widgetsData, setWidgetsData }) => {
  const activePage = usePageStore((state) => state.activePage);

  return (
    <>
      <HeaderComponent />
      {activePage == "widget-list" && <WidgetListComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />}
      {activePage == "widget-create" && <WidgetCreateComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />}
      {activePage == "widget-edit" && <WidgetEditComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />}
    </>
  );
};

export default WidgetBuilderComponent;
