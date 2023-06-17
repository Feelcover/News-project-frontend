import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from "@material-ui/core";
import styles from "./Auth.module.scss";
import MainForm from "./Forms/MainForm";
import LoginForm from "./Forms/LoginForm";

interface AuthFormProps {
  onClose: () => void;
  isOpen: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onClose, isOpen }) => {
  const [authType, setAuthType] = React.useState<"main" | "login">("main");

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <div className={styles.authTitleBox}>
              <Typography className={styles.title}>
                {authType === "main"
                  ? "Вход в учетную запись"
                  : "Войти через почту"}
              </Typography>
              <Button color="primary" variant="text">
              Регистрация
              </Button>
            </div>
            {authType === "main" && (
              <MainForm setMain={() => setAuthType("login")}/>
            )}

            {authType === "login" && (
              <LoginForm setLogin={() => setAuthType("main")}/>
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
