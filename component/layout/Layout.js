import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>FAKECAR</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <p>
          Copyright © 2024 FakeCar ||{" "}
          <a href="https://github.com/merfdev" target="_blank">
            merfdev
          </a>{" "}
        </p>
      </footer>
    </>
  );
}

export default Layout;
