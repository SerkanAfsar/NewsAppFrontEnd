import Link from "next/link";
import styles from "./PanelMenuItem.module.scss";
export default function PanelMenuItem({
  title,
  url,
  isActive,
  isFirst = false,
  ...rest
}) {
  if (isFirst) {
    return <li className={`${styles.item} ${styles.isFirst}`}>{title}</li>;
  }
  return (
    <li
      className={
        isActive ? `${styles.item} ${styles.active}` : `${styles.item}`
      }
    >
      <Link href={url} title={title}>
        {title}
      </Link>
    </li>
  );
}
