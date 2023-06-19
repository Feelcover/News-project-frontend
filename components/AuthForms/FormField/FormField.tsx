import React from 'react'

const FormField = () => {
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
  )
}

export default FormField