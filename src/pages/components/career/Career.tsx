// CSS
import styles from './Career.module.scss';
// Component
import Contents from './contents/Contents';
import History from './history/History';

function Career() {
  return (
    <main className={styles.career}>
      <div className={styles.container}>
        <History />
        <Contents />
      </div>
    </main>
  );
}

export default Career;
