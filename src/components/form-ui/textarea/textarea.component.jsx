import React, { useEffect, useState } from "react";
import { startCase } from "lodash/string";
import { Box, Field, FieldLabel, FieldError, Textarea } from "@strapi/design-system";

const TextareaComponent = (props) => {
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
        <Textarea
          placeholder="Please fill this area"
          value={inputValue}
          required={props.require}
          error={isError}
          onChange={handleChangeField}
        />
        <FieldError />
      </Field>
    </Box>
  );
};

export default TextareaComponent;
