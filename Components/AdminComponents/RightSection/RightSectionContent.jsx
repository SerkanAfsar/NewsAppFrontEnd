import styles from "./RightSectionContent.module.scss";
export default function RightSectionContent({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}
