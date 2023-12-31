import PanelMenuItem from "./PanelMenuItem";
import styles from "./PanelMenuWrapper.module.scss";
import { AdminMenuList } from "@/Utils";

export default function PanelMenuWrapper() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <PanelMenuItem isFirst={true} elem={{ name: "Panel Menü" }} />
        {AdminMenuList.map((item, index) => {
          return <PanelMenuItem key={index} isFirst={false} elem={item} />;
        })}
        {/* {AdminMenuList.map((item, index) => {
          return <PanelMenuItem key={index} isFirst={false} elem={item} />;
        })} */}
      </ul>
    </div>
  );
}
