import TopInfo from "@/Components/AdminComponents/LeftSection/TopInfo";
import styles from "./LeftMenuWrapper.module.scss";
import PanelMenuWrapper from "@/Components/AdminComponents/LeftSection/PanelMenuWrapper";
export default function LeftMenuWrapper() {
  return (
    <section className={styles.leftMenuWrapper}>
      <TopInfo />
      <PanelMenuWrapper />
    </section>
  );
}
