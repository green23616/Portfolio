// CSS
import styles from './Works.module.scss';
// Component
import Item from './item/Item';

function Works() {
  return (
    <main className={styles.works}>
      <h1>2024</h1>
      <div className={styles.works__tags}>
        <h2>#React18</h2>
        <h2>#Recoil</h2>
        <h2>#React Query v5</h2>
      </div>
      <div className={styles.works__btnBox}>
        <a href="https://new-portfolio-seven-wine.vercel.app/" target="_blank">
          배포
        </a>
        <a href="https://github.com/green23616/Photos" target="_blank">
          ReadME
        </a>
      </div>
      <div className={styles.works__itemBox}>
        <Item />
      </div>
    </main>
  );
}

export default Works;
