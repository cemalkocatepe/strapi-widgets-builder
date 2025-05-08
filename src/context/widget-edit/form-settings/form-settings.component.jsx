import React, { useEffect } from "react";
import FormFieldComponent from "../form-field/form-field.component";
import widgetsSchema from "../../../components/widgets/widget-schema";
import useWidgetStore from "../../../store/useWidgetStore";

const FormSettingsComponent = ({ widgetsData, setWidgetsData }) => {
  const activeWidgetData = useWidgetStore((state) => state.activeWidgetData);
  const setActiveWidgetData = useWidgetStore((state) => state.setActiveWidgetData);
  const widgetItemSchema = widgetsSchema[activeWidgetData.id];

  useEffect(() => {
    const editWidgetsData = widgetsData.map((widget) => {
      if (widget.uuid === activeWidgetData.uuid) {
        return { ...widget, ...activeWidgetData };
      }
      return widget;
    });
    setWidgetsData(editWidgetsData);
  }, [activeWidgetData]);

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
