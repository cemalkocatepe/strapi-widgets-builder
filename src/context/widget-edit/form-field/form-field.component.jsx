import React from "react";
import { ColorField, InputField, SwitchField, TextareaField } from "../../../components/form-ui";

const FormFieldComponent = ({ name, field }) => {
  const props = { name, ...field };
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
