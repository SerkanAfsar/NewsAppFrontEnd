"use client";
import { AdminMenuList } from "@/Utils";
import styles from "./RightSectionTopMenu.module.scss";
import { usePathname } from "next/navigation";
export default function RightSectionTopMenu() {
  const path = usePathname();
  const urlList = path.split("/");
  const pathName =
    AdminMenuList.find((a) => a.url == `/${urlList[urlList.length - 1]}`)
      ?.name || "Anasayfa";
  return (
    <section className={styles.wrapper}>
      <h2>{pathName}</h2>
      <div className={styles.wrapper__menu}>{pathName}</div>
    </section>
  );
}
