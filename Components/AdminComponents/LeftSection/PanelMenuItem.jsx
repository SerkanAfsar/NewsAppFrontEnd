"use client";
import Link from "next/link";
import styles from "./PanelMenuItem.module.scss";
import { usePathname } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";
const PanelMenuItem = ({ elem, isFirst = false }) => {
  const pathName = usePathname();
  const router = useRouter();
  const cookies = useCookies();

  const arr = pathName.split("/");

  const handleLogout = useCallback(() => {
    cookies.remove(process.env.NEXT_PUBLIC_COOKIE_NAME);
    return router.push("/Admin");
  }, []);

  if (isFirst) {
    return <li className={`${styles.item} ${styles.isFirst}`}>{elem?.name}</li>;
  }
  return (
    <li
      className={
        elem.url == `/${arr[arr.length - 1]}`
          ? `${styles.item} ${styles.active}`
          : `${styles.item}`
      }
    >
      <Link
        href={`/Admin/${elem.url}`}
        onClick={
          elem.hasExit
            ? (e) => {
                e.preventDefault();
                handleLogout();
              }
            : null
        }
        title={elem.name}
      >
        {elem.icon} {elem.name}
      </Link>
    </li>
  );
};

export default memo(PanelMenuItem);
