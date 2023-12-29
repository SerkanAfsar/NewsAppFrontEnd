"use client";
import PanelMenuItem from "./PanelMenuItem";
import styles from "./PanelMenuWrapper.module.scss";
import { AdminMenuList } from "@/Utils";
import { usePathname } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
export default function PanelMenuWrapper() {
  const pathName = usePathname();
  const router = useRouter();
  const cookies = useCookies();

  const arr = pathName.split("/");

  const handleLogout = useCallback(() => {
    cookies.remove(process.env.NEXT_PUBLIC_COOKIE_NAME);
    return router.push("/Admin");
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul>
        <PanelMenuItem isFirst={true} title={"Panel Menu"} />
        {AdminMenuList.map((item, index) => {
          return (
            <PanelMenuItem
              key={index}
              title={item.name}
              icon={item.icon}
              isActive={item.url == `/${arr[arr.length - 1]}`}
              url={`/Admin/${item.url}`}
              handleClick={item.hasExit ? handleLogout : null}
            />
          );
        })}
      </ul>
    </div>
  );
}
