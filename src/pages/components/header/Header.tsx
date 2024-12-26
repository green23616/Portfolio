import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.container__size}>
          <p className={`${'material-symbols-outlined'}`}>monitor</p>
          <p className={`${'material-symbols-outlined'}`}>smartphone</p>
        </div>
        <div className={styles.container__social}>
          <p className={`${'material-symbols-outlined'}`}>stars</p>
          <p className={`${'material-symbols-outlined'}`}>sticky_note_2</p>
        </div>
        <div className={styles.container__idea}>
          <p className={`${'material-symbols-outlined'}`}>language</p>
          <p className={`${'material-symbols-outlined'}`}>public</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
