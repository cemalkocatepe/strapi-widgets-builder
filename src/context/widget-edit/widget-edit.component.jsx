import React from "react";
import FormBuilderComponent from "./form-builder/form-builder.component";

const WidgetEditComponent = ({ widgetsData, setWidgetsData }) => {
  return (
    <>
      <FormBuilderComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />
    </>
  );
};

export default WidgetEditComponent;
