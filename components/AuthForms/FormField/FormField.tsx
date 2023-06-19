import { TextField } from "@material-ui/core";
import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
}

const FormField: React.FC<FormFieldProps> = ({ name }) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      {...register(name)}
      error={!!formState.errors[name]?.message}
      helperText={!!formState.errors[name]?.message}
      className="mb-20"
      name="email"
      size="small"
      label="Почта"
      variant="outlined"
      fullWidth
      required
    />
  );
};

export default FormField;
