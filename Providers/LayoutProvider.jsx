"use client";

import AdminLayout from "@/Components/Layouts/AdminLayout";
import ClientLayout from "@/Components/Layouts/ClientLayout";
import { usePathname } from "next/navigation";
import { AdminContext } from "@/Contexts/AdminContext";

export default function LayoutProvider({ children }) {
  const pathName = usePathname();
  const pathArr = pathName.split("/");

  if (pathArr.includes("Admin")) {
    return <AdminLayout isLogin={pathArr.length == 2}>{children}</AdminLayout>;
  }
  return <ClientLayout>{children}</ClientLayout>;
}
