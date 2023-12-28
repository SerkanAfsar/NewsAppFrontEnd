"use client";
import { MontSerratFont } from "@/Utils/Fonts";
import styles from "./LoginForm.module.scss";
import TextBox from "../UI/TextBox";
import user from "@/public/svg/user.svg";
import password from "@/public/svg/password.svg";
import { useState } from "react";
import CustomImage from "../UI/CustomImage";
import basketImage from "@/public/images/basket.png";
import LoginButton from "../UI/Button/LoginButton";
import Link from "next/link";

export default function LoginForm() {
  const [data, setData] = useState({ email: null, password: null });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form className={`${styles.form} ${MontSerratFont.className}`}>
      <CustomImage
        src={basketImage}
        width={120}
        height={100}
        altTag={"Login"}
        isLayout={false}
        className={styles.form__img}
      />
      <TextBox
        type="email"
        placeholder="E-Posta"
        className={styles.form__txt}
        icon={user}
        id="email"
        name="email"
        value={data.email}
        onChange={(e) =>
          setData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <TextBox
        type="password"
        placeholder="Şifre"
        id="password"
        name="password"
        className={styles.form__txt}
        icon={password}
        onChange={(e) =>
          setData((prev) => ({ ...prev, password: e.target.value }))
        }
      />

      <LoginButton title={"Giriş"} />
      <Link href={"#"} className={styles.form__forgot}>
        Şifremi Unuttum
      </Link>
    </form>
  );
}
