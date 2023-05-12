import { Button, Input } from "@material-ui/core";
import { CreateOutlined as PenIcon } from "@material-ui/icons";
import React from "react";
import styles from "./WriteArea.module.scss";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
  ssr: false,
});
interface IWriteArea {
  title?: string;
}

const WriteArea: React.FC<IWriteArea> = ({ title }) => {
  return (
    <div>
      <Input
        classes={{ root: styles.textField }}
        placeholder="Заголовок"
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor />
        <Button className={styles.button} variant="contained" color="primary">
          <PenIcon className="mr-10" />
          Опубликовать
        </Button>
      </div>
    </div>
  );
};

export default WriteArea;
