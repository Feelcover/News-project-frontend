import React from "react";
import { useFormContext } from "react-hook-form";

const FormField = () => {
  const {register, formState} = useFormContext();
  
  return (
    <TextField
      {...register("email")}
      error={}
      helperText={}
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
