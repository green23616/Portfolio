import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <ul className={styles.container__ul}>
          <li className={styles.container__ul__size}>
            <p className={`${'material-symbols-outlined'}`}>monitor</p>
            <p className={`${'material-symbols-outlined'}`}>smartphone</p>
          </li>
          <li>green23616@gmail.com</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
