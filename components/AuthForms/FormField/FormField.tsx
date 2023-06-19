import { TextField } from "@material-ui/core";
import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  required: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ name, label, required }) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      {...register(name)}
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      className="mb-20"
      name={name}
      size="small"
      label={label}
      variant="outlined"
      fullWidth
      required = {required}
    />
  );
};

export default FormField;
