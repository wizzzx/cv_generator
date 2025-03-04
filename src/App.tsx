import styles from "./App.module.scss";
import "../public/styles/main.scss";

function App() {
  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.header_logo}>CV Generator</div>
        <img src="" alt="github logo" className={styles.github_img} />
      </header>
      <div></div>
    </>
  );
}

export default App;
