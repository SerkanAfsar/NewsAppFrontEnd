import Link from "next/link";
import styles from "./PanelMenuItem.module.scss";
export default function PanelMenuItem({
  title,
  url,
  isActive,
  isFirst = false,
  icon,
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
      <Link
        href={url}
        onClick={(e) => {
          if (rest.handleClick) {
            e.preventDefault();
            rest.handleClick();
          }
        }}
        title={title}
      >
        {icon} {title}
      </Link>
    </li>
  );
}
