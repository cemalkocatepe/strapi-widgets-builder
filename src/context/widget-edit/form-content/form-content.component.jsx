import React from "react";
// Components
import FormFieldComponent from "../form-field/form-field.component";
import FormRepeatComponent from "../form-repeat/form-repeat.component";
// Widget Content
import widgetsSchema from "../../../components/widgets/widget-schema";
// Store
import useWidgetStore from "../../../store/useWidgetStore";

const FormContentComponent = () => {
  const editWidgetData = useWidgetStore((state) => state.editWidgetData);
  const setEditWidgetData = useWidgetStore((state) => state.setEditWidgetData);
  const widgetItemSchema = widgetsSchema[editWidgetData.id];

  return (
    <div>
      {Object.entries(widgetItemSchema.content).map(([key, value]) => {
        if (value.type === "array") {
          return (
            <FormRepeatComponent
              key={key}
              name={key}
              formType="content"
              editWidgetData={editWidgetData}
              setEditWidgetData={setEditWidgetData}
              field={value}
            />
          );
        }
        return (
          <FormFieldComponent
            key={key}
            name={key}
            formType="content"
            editWidgetData={editWidgetData}
            setEditWidgetData={setEditWidgetData}
            field={value}
          />
        );
      })}
    </div>
  );
};

export default FormContentComponent;
