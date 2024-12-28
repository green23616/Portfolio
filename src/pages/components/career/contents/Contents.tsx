// CSS
import styles from './Contents.module.scss';
// Component
import Samsung from './components/samsung/Samsung';
import Greenart from './components/greenart/Greenart';
import Nandsoft from './components/nandsoft/Nandsoft';
import Study from './components/study/Study';
// Recoil
import { useRecoilValue } from 'recoil';
import { historyState } from '../../../../store/historyState';

function Contents() {
  const styleVal = useRecoilValue(historyState);

  return (
    <div className={styles.contents}>
      {styleVal === 0 && <Samsung />}
      {styleVal === 1 && <Greenart />}
      {styleVal === 2 && <Nandsoft />}
      {styleVal === 3 && <Study />}
    </div>
  );
}

export default Contents;
