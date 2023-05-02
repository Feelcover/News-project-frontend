import { Input } from "@material-ui/core";
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
      </div>
    </div>
  );
};

export default WriteArea;
