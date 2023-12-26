"use client";
import { NextUIProvider } from "@nextui-org/react";
import AdminLayout from "@/Components/Layouts/AdminLayout";
import ClientLayout from "@/Components/Layouts/ClientLayout";
import { usePathname } from "next/navigation";
import LoginLayout from "@/Components/Layouts/LoginLayout";
export default function LayoutProvider({ children }) {
  const pathName = usePathname();
  const pathArr = pathName.split("/");

  if (pathArr.includes("Admin")) {
    if (pathArr.length == 2) {
      return (
        <NextUIProvider>
          <AdminLayout isLogin={true}>{children}</AdminLayout>
        </NextUIProvider>
      );
    } else {
      <NextUIProvider>
        <AdminLayout>{children}</AdminLayout>
      </NextUIProvider>;
    }
  }

  return <ClientLayout>{children}</ClientLayout>;
}
