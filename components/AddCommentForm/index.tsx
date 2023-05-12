import React from "react";
import { Button, Input } from "@material-ui/core";
import styles from "./AddCommentForm.module.scss";

const AddCommentForm = () => {
  const [active, serActive] = React.useState(false);
  const [input, setInput] = React.useState("");

  const onAdd = () => {
    serActive(false);
    setInput("");
  };
  const onChange = (evt) => {
    setInput(evt.target.value);
  };
  return (
    <div className={styles.container}>
      <Input
        value={input}
        onChange={onChange}
        onFocus={() => serActive(true)}
        minRows={active ? 5 : 1}
        classes={{ root: styles.input }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      ></Input>
      {active && (
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          onClick={onAdd}
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
