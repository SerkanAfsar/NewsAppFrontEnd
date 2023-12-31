import styles from "./TopUserInfo.module.scss";
export default function TopUserInfo({ title, image, userName, ...rest }) {
  return (
    <div className={styles.topInfo}>
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
