'use client';
import { useRouter } from "next/navigation";
import styles from "./form.module.css"; // CSS module for this form

export default function Form() {
  const router = useRouter();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    router.push("/"); // Redirect on successful submission
  };
  return (
    <div className={styles.header}>Hello</div>
  );
}
