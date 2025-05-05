import React from "react";

const FormBuilderComponent = ({ schema }) => {
  return (
    <div>
      {Object.entries(schema.content).map(([key, value]) => {
        if (Array.isArray(value)) {
          return <RepeatableFieldGroup key={key} name={key} fields={value} />;
        }
        return <FieldRenderer key={key} name={key} field={value} />;
      })}
    </div>
  );
};

export default FormBuilderComponent;
