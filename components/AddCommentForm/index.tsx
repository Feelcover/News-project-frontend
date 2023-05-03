import React from "react";
import { Input } from "@material-ui/core";
import styles from "./AddCommentForm.module.scss";

const AddCommentForm = () => {
  const [active, serActive] = React.useState(false);
  return (
    <div>
      <Input
        onFocus={() => serActive(true)}
        minRows={active ? 5 : 1}
        classes={{ root: styles.input }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      ></Input>
    </div>
  );
};

export default AddCommentForm;
