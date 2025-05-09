import React from "react";
import { ColorField, DateTimeField, InputField, SwitchField, TextareaField } from "../../../components/form-ui";

const FormFieldComponent = ({ name, formType, editWidgetData, setEditWidgetData, field }) => {
  const props = { name, formType, editWidgetData, setEditWidgetData, ...field };

  switch (field.type) {
    case "input":
      return <InputField {...props} />;
    case "textarea":
      return <TextareaField {...props} />;
    case "color":
      return <ColorField {...props} />;
    case "switch":
      return <SwitchField {...props} />;
    case "datetime":
      return <DateTimeField {...props} />;
    default:
      return null;
  }
};

export default FormFieldComponent;
