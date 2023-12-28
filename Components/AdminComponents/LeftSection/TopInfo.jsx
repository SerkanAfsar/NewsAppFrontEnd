import styles from "./TopInfo.module.scss";
export default function TopInfo({ title, image, userName, ...rest }) {
  return (
    <div className={styles.topInfo}>
      <div className={styles.topInfo__topSection}>Yönetim Paneli</div>
      <div className={styles.topInfo__bottomContent}>
        <div className={styles.img}>Deneme 1</div>
        <div className={styles.info}>
          <span>Serkan Afşar</span>
          <b>Online</b>
        </div>
      </div>
    </div>
  );
}
