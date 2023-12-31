import styles from "./LeftMenuWrapper.module.scss";
import PanelMenuWrapper from "@/Components/AdminComponents/LeftSection/PanelMenuWrapper";
import TopTitleInfo from "@/Components/AdminComponents/LeftSection/TopTitleInfo";
import TopUserInfo from "@/Components/AdminComponents/LeftSection/TopUserInfo";
export default function LeftMenuWrapper() {
  return (
    <section className={styles.leftMenuWrapper}>
      <TopTitleInfo />
      <TopUserInfo />
      <PanelMenuWrapper />
    </section>
  );
}
