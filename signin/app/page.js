'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter(); // Initialize the router

  const handleRedirect = () => {
    router.push("/"); // Redirects
  };

  return (
    <div className={styles.container}>
      {/* Login Form */}
      <div className={styles["login-container"]}>
        <div className={styles.card}>
          <div className={styles["card-header"]}>
            <h4>Sign In</h4>
            <p>Enter your email and password to sign in</p>
          </div>
          <div className={styles["card-body"]}>
            <form>
              <div className={styles["input-group"]}>
                <input type="email" placeholder="Email" className={styles.input}/>
              </div>
              <div className={styles["input-group"]}>
                <input type="password" placeholder="Password"className={styles.input}/>
              </div>
              <div className={styles["button-container"]}>
                <button type="button"className={styles["btn-signin"]}
                  onClick={handleRedirect} // Redirect on button click
                >
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
          <div className={styles["card-footer"]}>
            <p>
              Don't have an account?{" "}
              <a href="/signup" className={styles["signup-link"]}>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Background Content */}
      <div className={styles["background-container"]}>
        <div className={styles["background-content"]}>
          <Image src="/chat.png" alt="Chat Illustration" width={500} height={500} priority/>
          <h2>"Attention is the new currency"</h2>
          <h5>
            The more effortless the writing looks, the more effort the writer
            actually puts into the process.
          </h5>
        </div>
      </div>
    </div>
  );
}
