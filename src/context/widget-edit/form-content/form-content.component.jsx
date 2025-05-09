import React from "react";
import FormFieldComponent from "../form-field/form-field.component";
import FormRepeatComponent from "../form-repeat/form-repeat.component";
import widgetsSchema from "../../../components/widgets/widget-schema";
import useWidgetStore from "../../../store/useWidgetStore";

const FormContentComponent = () => {
  const activeWidgetData = useWidgetStore((state) => state.activeWidgetData);
  const setActiveWidgetData = useWidgetStore((state) => state.setActiveWidgetData);
  const widgetItemSchema = widgetsSchema[activeWidgetData.id];

  return (
    <div>
      {Object.entries(widgetItemSchema.content).map(([key, value]) => {
        if (value.type === "array") {
          return (
            <FormRepeatComponent
              key={key}
              name={key}
              formType="content"
              activeWidgetData={activeWidgetData}
              setActiveWidgetData={setActiveWidgetData}
              field={value}
            />
          );
        }
        return (
          <FormFieldComponent
            key={key}
            name={key}
            formType="content"
            activeWidgetData={activeWidgetData}
            setActiveWidgetData={setActiveWidgetData}
            field={value}
          />
        );
      })}
    </div>
  );
};

export default FormContentComponent;
