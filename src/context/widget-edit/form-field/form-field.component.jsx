import React from "react";
import { ColorField, InputField, SwitchField, TextareaField } from "../../../components/form-ui";

const FormFieldComponent = ({ name, field, activeWidgetData, setActiveWidgetData }) => {
  const props = { name, activeWidgetData, setActiveWidgetData, ...field };

  switch (field.type) {
    case "input":
      return <InputField {...props} />;
    case "textarea":
      return <TextareaField {...props} />;
    case "color":
      return <ColorField {...props} />;
    case "switch":
      return <SwitchField {...props} />;
    default:
      return null;
  }
};

export default FormFieldComponent;
