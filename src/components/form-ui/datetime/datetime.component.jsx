import React, { useEffect, useState } from "react";
import { startCase } from "lodash/string";
import { Field, Box } from "@strapi/design-system";
import useWidgetStore from "../../../store/useWidgetStore";
import { uniq } from "lodash/array";

const InputComponent = (props) => {
  const initialInputValue = props.formType === "content" ? props.editWidgetData.data[props.name] : props.editWidgetData[props.name];
  const isValidate = useWidgetStore((state) => state.isValidate);
  const setIsValidate = useWidgetStore((state) => state.setIsValidate);
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (props.require && !inputValue) {
      setIsError("This field is required");
      setIsValidate(uniq([...isValidate, props.name]));
    } else {
      setIsError(false);
      setIsValidate(isValidate.filter((item) => item !== props.name));
    }
  }, [inputValue, props.require]);

  const handleChangeField = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (props.formType === "content") {
      props.setEditWidgetData({ ...props.editWidgetData, data: { ...props.editWidgetData.data, [props.name]: value } });
    } else {
      props.setEditWidgetData({ ...props.editWidgetData, [props.name]: value });
    }
  };

  return (
    <Box padding={3}>
      <Field.Root name={props.name} required={props.require} error={isError}>
        <Field.Label style={{ marginBottom: 10, fontSize: 12 }}>{startCase(props.name)}</Field.Label>
        <Field.Input type="datetime-local" placeholder="Please fill this area" value={inputValue} onChange={handleChangeField} />
        <Field.Error />
      </Field.Root>
    </Box>
  );
};

export default InputComponent;
