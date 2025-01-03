import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <ul className={styles.container__ul}>
          <li className={styles.container__ul__left}>
            <a href="https://github.com/green23616" target="_blank">
              <img
                src="./src/assets/images/header/github.png"
                alt="github_logo"
              />
            </a>
          </li>
          <li className={styles.container__ul__right}>
            <span className={`${'material-symbols-outlined'}`}>mail</span>
            <p>green23616@gmail.com</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
