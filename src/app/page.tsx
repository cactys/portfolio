import { Header } from "../components/Header/Header";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Header />
      <h1>Добро пожаловать</h1>
    </main>
  );
}
