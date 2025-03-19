import styles from "./App.module.scss";
import { Container } from "./assets/components/Container";

function App() {
  return (
    <Container className={styles.page}>
      <header className={styles.header}>
        <div className={styles.header_logo}>CV Generator</div>
        <a
          href="https://github.com/wizzzx"
          target={"_blank"}
          className={styles.github_link}
        >
          Github
        </a>
      </header>

      <div></div>
    </Container>
  );
}

export default App;
