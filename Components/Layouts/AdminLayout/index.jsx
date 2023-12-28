import styles from "./index.module.scss";
import LoginLayout from "../LoginLayout";
import LeftMenuWrapper from "./LeftMenuWrapper";
import RightSectionWrapper from "./RightSectionWrapper";

export default function AdminLayout({ children, isLogin = false }) {
  if (isLogin) {
    return <LoginLayout>{children}</LoginLayout>;
  }
  return (
    <div className={styles.wrapper}>
      <LeftMenuWrapper />
      <RightSectionWrapper>{children}</RightSectionWrapper>
    </div>
  );
}
