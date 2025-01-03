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
          <h1>React</h1>
          <div className={styles.content}>
            <h3>상태관리</h3>
            <div className={styles.content__item}>
              <h4>Recoil</h4>
              <h4>Zustand</h4>
              <h4>Redux Toolkit</h4>
              <h4>React Query v5</h4>
            </div>
          </div>
          <div className={styles.content}>
            <h3>구조설계</h3>
            <div className={styles.content__item}>
              <h4>Composition Component</h4>
              <h4>디자인 패턴</h4>
            </div>
          </div>
          <div className={styles.content}>
            <h3>생명주기</h3>
            <div className={styles.content__item}>
              <h4>useEffect</h4>
              <h4>Render Trigger</h4>
              <h4>Side Effects</h4>
            </div>
          </div>
          <div className={styles.content}>
            <h3>최적화</h3>
            <div className={styles.content__item}>
              <h4>Memoization</h4>
              <h4>Throttle</h4>
              <h4>Debounce</h4>
              <h4>Lazy Loading</h4>
              <h4>Code Splitting</h4>
            </div>
          </div>
          <div className={styles.content}>
            <h3>API</h3>
            <div className={styles.content__item}>
              <h4>RESTful API</h4>
              <h4>GraphQL</h4>
            </div>
          </div>
        </li>
      </ul>
      <ul className={styles.skills__middle}>
        <li className={styles.skills__middle__item}>
          <div
            className={styles.headLine}
            style={{ backgroundColor: '#F0DB4F' }}
          ></div>
          <h1>Javascript</h1>
          <div className={styles.content}>
            <div className={styles.content__item}>
              <h3>함수형과 객체지향 프로그래밍</h3>
              <h3>Promise와 콜백</h3>
            </div>
            <div className={styles.content__item1}>
              <h3>DOM 조작</h3>
              <h3>Module</h3>
              <h3>배열과 객체</h3>
            </div>
            <div className={styles.content__item2}>
              <h3>이벤트 핸들링</h3>
              <h3>Closure</h3>
              <h3>ES6</h3>
            </div>
          </div>
        </li>
        <li className={styles.skills__middle__item2}>
          <div
            className={styles.headLine}
            style={{ backgroundColor: '#007acc' }}
          ></div>
          <h1>Typescript</h1>
          <div className={styles.content}>
            <div className={styles.content__item}>
              <h3>Narrowing</h3>
              <h3>Type Inference & Type Guard</h3>
              <h3>Generics & Interface</h3>
            </div>
          </div>
        </li>
      </ul>
      <ul className={styles.skills__bottom}>
        <li className={styles.skills__bottom__above}>
          <div className={styles.item}>
            <div className={styles.item__header}>
              <h1>HTML CSS</h1>
              <div
                className={styles.item__header__headLine}
                style={{ backgroundColor: '#e34c26' }}
              ></div>
              <div
                className={styles.item__header__headLine}
                style={{ backgroundColor: '#264de4' }}
              ></div>
            </div>
            <div className={styles.item__main}>
              <p>Semantic</p>
              <p>SEO</p>
              <p>SCSS</p>
              <p>TailwindCSS</p>
              <p>반응형 웹</p>
            </div>
          </div>
          <div className={styles.item2}>
            <h1>Figma</h1>
          </div>
        </li>
        <li className={styles.skills__bottom__below}>
          <div className={styles.item}>
            <h1>자료구조</h1>
          </div>
          <div className={styles.item}>
            <h1>네트워크</h1>
          </div>
          <div className={styles.item}>
            <h1>운영체제</h1>
          </div>
          <div className={styles.item2}>
            <h1>알고리즘</h1>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
