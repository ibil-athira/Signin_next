'use client';
import { useState } from 'react';
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter(); // Initialize the router for redirection

  const handleRedirect = () => {
    router.push("/dashboard");  // redirection
  };

  return (
    <div className={styles.container}>      
      {/* right-side Content with blue background */}
      <div className={styles["right-container"]}>
        <div className={styles["background-content"]}>
        </div>
      </div>

      {/* left-side Content with white background */}
      <div className={styles["left-container"]}>
      </div>
    </div>
  );
}
