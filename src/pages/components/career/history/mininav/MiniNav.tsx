// CSS
import { historyState } from '../../../../../store/historyState';
import styles from './MiniNav.module.scss';
// Recoil
import { useRecoilState } from 'recoil';

function MiniNav() {
  const [styleVal, setStyleVal] = useRecoilState(historyState);

  const handleMouseOver = (number: number) => {
    setStyleVal(number);
  };

  return (
    <div className={styles.mininav}>
      <div className={styles.container}>
        <div
          className={`${styles.container__job} ${
            styleVal === 0 ? styles.active : styles.inactive
          }`}
          onMouseEnter={() => handleMouseOver(0)}
        >
          <h2>2014</h2>
          <h3>I</h3>
          <h2>2020</h2>
        </div>
        <div
          className={`${styles.container__job} ${
            styleVal === 1 ? styles.active : styles.inactive
          }`}
          onMouseEnter={() => handleMouseOver(1)}
        >
          <h2>2023.06</h2>
          <h3>I</h3>
          <h2>2024.11</h2>
        </div>
        <div
          className={`${styles.container__job} ${
            styleVal === 2 ? styles.active : styles.inactive
          }`}
          onMouseEnter={() => handleMouseOver(2)}
        >
          <h2>2023.11</h2>
          <h3>I</h3>
          <h2>2024.02</h2>
        </div>
        <div
          className={`${styles.container__job} ${
            styleVal === 3 ? styles.active : styles.inactive
          }`}
          onMouseEnter={() => handleMouseOver(3)}
        >
          <h2>2024.08</h2>
          <h3>I</h3>
          <h2>2024.12</h2>
        </div>
      </div>
    </div>
  );
}

export default MiniNav;
