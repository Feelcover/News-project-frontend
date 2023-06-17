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

            )}

            {authType === "login" && (
              <div>
                <form>
                  <TextField
                    className="mb-20"
                    size="small"
                    label="Почта"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    className="mb-20"
                    size="small"
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                  />

                  <div className={styles.mailButtonWrapper}>
                    <Button color="primary" variant="contained">
                      Войти
                    </Button>
                    <p onClick={() => setAuthType("main")}> &lt; Назад</p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
