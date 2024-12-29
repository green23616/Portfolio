import styles from './Greenart.module.scss';

function Greenart() {
  return (
    <div className={styles.greenart}>
      <div className={styles.greenart__above}>
        <div className={styles.greenart__above__text}>
          <h1>현장 교육과 인터넷 강의 수강</h1>
          <h3>
            팀 프로젝트를 통해 배운 교훈은 팀원 모두가 업무의 흐름을 숙지하여
            각자의 작업이 전체에 미치는 영향을 생각해야한다는 것이었습니다.
          </h3>
        </div>
        <div className={styles.greenart__above__imageBox}>
          <img src="/src/assets/images/workers.png" alt="img1" />
        </div>
      </div>
      <div className={styles.greenart__below}>
        <div className={styles.greenart__below__imageBox}>
          <img src="/src/assets/images/jw1.jpg" alt="img2" />
        </div>
        <div className={styles.greenart__below__text}>
          <h1>6개월의 현장 교육과 인터넷 강의 수강</h1>
          <h3>
            팀 프로젝트를 통해 배운 교훈은 팀원 모두가 업무의 흐름을 숙지하여
            각자의 작업이 전체에 미치는 영향을 생각해야한다는 것이었습니다.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Greenart;
