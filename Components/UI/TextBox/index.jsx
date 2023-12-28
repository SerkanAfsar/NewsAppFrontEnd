import Image from "next/image";
import styles from "./index.module.scss";
import { forwardRef } from "react";
const TextBox = forwardRef((props, ref) => {
  const input = () => {
    return <input ref={ref} type={props?.type || "text"} {...props} />;
  };
  if (props.icon) {
    return (
      <div className={styles.textBox}>
        <Image
          src={props.icon}
          width={20}
          height={20}
          className={styles.textBox__icon}
          alt={props.label}
        />
        {input()}
      </div>
    );
  }
  return <>{input()}</>;
});
TextBox.displayName = "CustomTextBox";
export default TextBox;
