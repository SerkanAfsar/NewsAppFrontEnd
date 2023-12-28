import styles from "./index.module.scss";
export default function LoginButton({ title, onClick, ...rest }) {
  return (
    <button
      className={styles.button}
      onClick={onClick ?? console.log("No Click Button")}
      {...rest}
    >
      {title}
    </button>
  );
}
