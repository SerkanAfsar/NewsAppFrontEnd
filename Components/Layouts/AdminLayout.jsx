import LoginLayout from "./LoginLayout";

export default function AdminLayout({ children, isLogin = false }) {
  if (isLogin) {
    return <LoginLayout>{children}</LoginLayout>;
  }
  return <>{children}</>;
}
