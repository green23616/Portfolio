// CSS
import { useState } from 'react';
import styles from './Career.module.scss';
// Component
import Contents from './contents/Contents';
import History from './history/History';
import MiniNav from './history/mininav/MiniNav';

function Career() {
  const [isPanel, setIsPanel] = useState(false);
  const handleClick = () => {
    setIsPanel(prev => !prev);
  };

  return (
    <main className={styles.career}>
      <div className={styles.container}>
        {isPanel ? <History /> : <MiniNav />}
        <div
          className={`${'material-symbols-outlined'} ${
            styles.container__button
          }`}
          onClick={handleClick}
        >
          {isPanel ? 'right_panel_close' : 'left_panel_close'}
        </div>
        <Contents />
      </div>
    </main>
  );
}

export default Career;
