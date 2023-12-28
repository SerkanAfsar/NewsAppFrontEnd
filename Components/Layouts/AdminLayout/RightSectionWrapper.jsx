import styles from "./RightSectionWrapper.module.scss";
export default function RightSectionWrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}
