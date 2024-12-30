import styles from './Skills.module.scss';

function Skills() {
  return (
    <div className={styles.skills}>
      <ul className={styles.skills__top}>
        <li className={styles.skills__top__item}>
          <div
            className={styles.headLine}
            style={{ backgroundColor: '#61DBFB' }}
          ></div>
          <div className={styles.content}>
            <h1>React</h1>
            <h3>상태관리</h3>
            <h3>구조설계</h3>
            <h3>생명주기</h3>
            <h3>최적화</h3>
            <h3>통신</h3>
          </div>
        </li>
      </ul>
      <ul className={styles.skills__middle}>
        <li className={styles.skills__middle__item}>
          <div
            className={styles.headLine}
            style={{ backgroundColor: '#F0DB4F' }}
          ></div>
          <div className={styles.content}>
            <h1>Javascript</h1>
            <h3>함수형 프로그래밍</h3>
            <h3>객체지향</h3>
          </div>
        </li>
        <li className={styles.skills__middle__item2}>
          <div
            className={styles.headLine}
            style={{ backgroundColor: '#007acc' }}
          ></div>
          <div className={styles.content}>
            <h1>Typescript</h1>
            <h3>Narrowing</h3>
          </div>
        </li>
      </ul>
      <ul className={styles.skills__bottom}>
        <li className={styles.skills__bottom__above}>
          <div className={styles.item}>
            <h1>HTML, CSS</h1>
            <h3>
              Atomic Design Pattern, Composition Component, Semantic, SCSS
            </h3>
          </div>
          <div className={styles.item2}>
            <h1>Figma</h1>
          </div>
        </li>
        <li className={styles.skills__bottom__below}>
          <div className={styles.item}>
            <h1>자료구조</h1>
            <h3>선형구조, Tree Node</h3>
          </div>
          <div className={styles.item}>
            <h1>네트워크</h1>
            <h3>OSI, TCP/IP, HTTPS</h3>
          </div>
          <div className={styles.item}>
            <h1>운영체제</h1>
            <h3>Linux, Web</h3>
          </div>
          <div className={styles.item2}>
            <h1>알고리즘</h1>
            <h3>2진 트리</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
