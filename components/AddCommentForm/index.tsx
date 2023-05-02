import React from "react";
import { Input } from "@material-ui/core";
import styles from "./AddCommentForm.module.scss";


const AddCommentForm = () => {
  return (<div>
    <Input classes={{root:styles.input}} placeholder="Написать комментарий..." fullWidth multiline></Input>
  </div>);
};

export default AddCommentForm;
