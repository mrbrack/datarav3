import cl from "classnames";
import styles from "./index.module.scss";

const Button = ({ children, className, onClick, disabled, type }) => {
  if (type == "standard") {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cl(className, styles.button_standard)}
    >
      {children}
    </button>
  );  
  }
  if (type == "submit") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={cl(className, styles.button_submit)}
      >
        {children}
      </button>
    );
  }
};

export default Button;
