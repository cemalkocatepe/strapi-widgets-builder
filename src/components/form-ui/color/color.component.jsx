import React, { useEffect, useState } from "react";
import { startCase } from "lodash/string";
import { Field, FieldLabel, FieldInput, FieldError, Box } from "@strapi/design-system";

const ColorComponent = (props) => {
  const [inputValue, setInputValue] = useState(props.activeWidgetData.data[props.name]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (props.require && !inputValue) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [inputValue, props.require]);

  const handleChangeField = (e) => {
    setInputValue(e.target.value);
    props.setActiveWidgetData({ ...props.activeWidgetData, data: { ...props.activeWidgetData.data, [props.name]: e.target.value } });
  };

  return (
    <Box padding={3}>
      <Field name={props.name} required={props.require} error={isError}>
        <FieldLabel style={{ marginBottom: 10, fontSize: 12 }}>{startCase(props.name)}</FieldLabel>
        <FieldInput type="color" value={inputValue} onChange={handleChangeField} style={{ height: "50px" }} />
        <FieldError />
      </Field>
    </Box>
  );
};

export default ColorComponent;
