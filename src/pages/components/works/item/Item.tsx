// CSS
import styles from './Item.module.scss';

function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__contents}>
        <img src="./images/works/photos.png" alt="github" />
      </div>
    </div>
  );
}

export default Item;
