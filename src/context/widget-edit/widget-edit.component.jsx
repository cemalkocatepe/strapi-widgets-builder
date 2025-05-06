import React from "react";
import FormBuilderComponent from "./form-builder/form-builder.component";
import widgetsSchema from "../../components/widgets/widget-schema";
import widgetsValue from "../../components/widgets/widget-value";
import useWidgetStore from "../../store/useWidgetStore";

const WidgetEditComponent = ({ widgetsData, setWidgetsData }) => {
  const activeWidgetData = useWidgetStore((state) => state.activeWidgetData);

  return (
    <>
      <FormBuilderComponent
        widgetsData={widgetsData}
        setWidgetsData={setWidgetsData}
        widgetItemSchema={widgetsSchema[activeWidgetData.id]}
        widgetItemValue={widgetsValue[activeWidgetData.id]}
        activeWidgetData={activeWidgetData}
      />
    </>
  );
};

export default WidgetEditComponent;
