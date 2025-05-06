import React from "react";
import FormFieldComponent from "../form-field/form-field.component";

const FormBuilderComponent = ({ widgetsData, setWidgetsData, widgetItemSchema, widgetItemValue, activeWidgetData }) => {
  console.log(widgetItemSchema);
  return (
    <div>
      {Object.entries(widgetItemSchema.content).map(([key, value]) => {
        if (Array.isArray(value)) {
          /* return <RepeatableFieldGroup key={key} name={key} fields={value} />; */
        }
        return <FormFieldComponent key={key} name={key} field={value} />;
      })}
    </div>
  );
};

export default FormBuilderComponent;
