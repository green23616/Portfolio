// CSS
import styles from './Career.module.scss';
// Component
import Contents from './contents/Contents';
import History from './history/History';

function Career() {
  return (
    <div className={styles.career}>
      <div className={styles.container}>
        <History />
        <Contents />
      </div>
    </div>
  );
}

export default Career;
