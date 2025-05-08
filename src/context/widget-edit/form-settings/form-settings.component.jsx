import React from "react";
import FormFieldComponent from "../form-field/form-field.component";
import widgetsSchema from "../../../components/widgets/widget-schema";
import useWidgetStore from "../../../store/useWidgetStore";

const FormSettingsComponent = () => {
  const activeWidgetData = useWidgetStore((state) => state.activeWidgetData);
  const setActiveWidgetData = useWidgetStore((state) => state.setActiveWidgetData);
  const widgetItemSchema = widgetsSchema[activeWidgetData.id];

  return (
    <div>
      {Object.entries(widgetItemSchema.settings).map(([key, value]) => {
        return (
          <FormFieldComponent
            key={key}
            name={key}
            formType="settings"
            activeWidgetData={activeWidgetData}
            setActiveWidgetData={setActiveWidgetData}
            field={value}
          />
        );
      })}
    </div>
  );
};

export default FormSettingsComponent;
