import React, { useEffect, useState } from "react";
import { startCase } from "lodash/string";
import { Field, Switch, Box } from "@strapi/design-system";
import useWidgetStore from "../../../store/useWidgetStore";
import { uniq } from "lodash/array";

const SwitchComponent = (props) => {
  const initialInputValue = props.formType === "content" ? props.activeWidgetData.data[props.name] : props.activeWidgetData[props.name];
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

  const handleChangeField = () => {
    const value = !inputValue;
    setInputValue(value);
    if (props.formType === "content") {
      props.setActiveWidgetData({ ...props.activeWidgetData, data: { ...props.activeWidgetData.data, [props.name]: value } });
    } else {
      props.setActiveWidgetData({ ...props.activeWidgetData, [props.name]: value });
    }
  };

  return (
    <Box padding={3}>
      <Field.Root name={props.name} required={props.require} error={isError}>
        <Field.Label style={{ marginBottom: 10, fontSize: 12 }}>{startCase(props.name)}</Field.Label>
        <Switch checked={inputValue} onCheckedChange={handleChangeField} />
        <Field.Error />
      </Field.Root>
    </Box>
  );
};

export default SwitchComponent;
