import Item from './item/Item';
import styles from './Works.module.scss';

function Works() {
  return <main className={styles.works}>
    <Item/>
    <Item/>
    <Item/>
  </main>;
}

export default Works;
