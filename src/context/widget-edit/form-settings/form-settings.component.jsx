import React from "react";
// Components
import FormFieldComponent from "../form-field/form-field.component";
import widgetsSchema from "../../../components/widgets/widget-schema";
// Store
import useWidgetStore from "../../../store/useWidgetStore";

const FormSettingsComponent = () => {
  const editWidgetData = useWidgetStore((state) => state.editWidgetData);
  const setEditWidgetData = useWidgetStore((state) => state.setEditWidgetData);
  const widgetItemSchema = widgetsSchema[editWidgetData.id];

  return (
    <div>
      {Object.entries(widgetItemSchema.settings).map(([key, value]) => {
        return (
          <FormFieldComponent
            key={key}
            name={key}
            formType="settings"
            editWidgetData={editWidgetData}
            setEditWidgetData={setEditWidgetData}
            field={value}
          />
        );
      })}
    </div>
  );
};

export default FormSettingsComponent;
