import styles from "./App.module.scss";
import { Container } from "./assets/components/Container";
import { CvLayout } from "./assets/components/CvLayout";

function App() {
  return (
    <Container className={styles.page}>
      <header className={styles.header}>
        <div className={styles.header_logo}>CV Generator</div>
        <a
          href="https://github.com/wizzzx"
          target={"_blank"}
          className={styles.github_link}
          rel={"noopener noreferrer"}
        >
          GitHub
          {/*  сюда потом добавить либо анимашку лого гитхаба, либо просто иконку гитхаба, либо стилизовать как то линк*/}
        </a>
      </header>

      <section className={styles.inputs_section}></section>

      <section className={styles.cv_section}>
        <CvLayout />
      </section>

      {/*<footer className={styles.footer}>Coming soon</footer>*/}
    </Container>
  );
}

export default App;
