import RightSectionTop from "@/Components/AdminComponents/RightSection/RightSectionTop";
import styles from "./RightSectionWrapper.module.scss";
import RightSectionTopMenu from "@/Components/AdminComponents/RightSection/RightSectionTopMenu";
import RightSectionContent from "@/Components/AdminComponents/RightSection/RightSectionContent";
import Footer from "@/Components/AdminComponents/Footer";
export default function RightSectionWrapper({ children }) {
  return (
    <section className={styles.wrapper}>
      <RightSectionTop />
      <RightSectionTopMenu />
      <RightSectionContent>{children}</RightSectionContent>
      <Footer />
    </section>
  );
}
