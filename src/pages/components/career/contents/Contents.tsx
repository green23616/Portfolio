// CSS
import styles from './Contents.module.scss';
// Recoil
import { useRecoilValue } from 'recoil';
import { historyState } from '../../../../store/historyState';

function Contents() {
  const styleVal = useRecoilValue(historyState);

  return (
    <div className={styles.contents}>
      {styleVal === 0 && 'Samsung'}
      {styleVal === 1 && 'Green Art'}
      {styleVal === 2 && 'Nandsoft'}
      {styleVal === 3 && 'Works'}
    </div>
  );
}

export default Contents;
