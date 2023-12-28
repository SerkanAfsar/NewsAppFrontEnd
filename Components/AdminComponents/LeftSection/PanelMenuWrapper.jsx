import PanelMenuItem from "./PanelMenuItem";
import styles from "./PanelMenuWrapper.module.scss";
export default function PanelMenuWrapper() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <PanelMenuItem isFirst={true} title={"Panel Menu"} />
        <PanelMenuItem title={"Anasayfa"} url={"#"} />
        <PanelMenuItem title={"Anasayfa"} url={"#"} />
        <PanelMenuItem title={"Anasayfa"} url={"#"} />
        <PanelMenuItem title={"Anasayfa"} url={"#"} />
      </ul>
    </div>
  );
}
