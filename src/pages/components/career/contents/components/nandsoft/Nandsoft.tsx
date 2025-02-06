import { useState } from 'react';
// CSS
import styles from './Nandsoft.module.scss';

function Nandsoft() {
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(true);

  const handleClick = () => {
    setIsOpen2(true);
    setIsOpen4(true);
    setIsOpen5(true);
  };
  const handleClick6 = () => {
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };
  const handleClick2 = () => setIsOpen2(prev => !prev);
  const handleClick4 = () => setIsOpen4(prev => !prev);
  const handleClick5 = () => setIsOpen5(prev => !prev);

  return (
    <div className={styles.nandsoft}>
      <ul className={styles.container}>
        <li className={styles.container__toggle}>
          <button
            className={styles.container__toggle__btn1}
            onClick={handleClick}
          >
            열기
          </button>
          <button
            className={styles.container__toggle__btn2}
            onClick={handleClick6}
          >
            닫기
          </button>
        </li>
        <li
          className={`${styles.container__item} ${
            isOpen2 ? styles.active : styles.inactive
          }`}
          onClick={handleClick2}
        >
          <div className={styles.container__item__question}>
            <div className={`${'material-symbols-outlined'} ${styles.icon}`}>
              work
            </div>
            <h2>업무와 성과</h2>
            <button>{isOpen2 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen2 ? styles.active : styles.inactive
            }`}
          >
            <h2>개발 업무</h2>
            <h3>
              사내 솔루션 SSO 리팩토링 프로젝트에 참여하여 레거시 코드로 작성된
              UI를 React로 리팩토링하는 작업을 맡았습니다. <br />
              Linux 기반 서비스에서 리소스와 자원을 확인하고 디렉토리를 관리하는
              업무를 맡아 기초적인 명령어와 CLI에 적응하는 경험을 했습니다.
            </h3>
            <h2>개발 성과</h2>
            <h3>
              float로 개발되어 있던 로그인 UI와 나의 메일 기능 UI를 flex-box를
              로 리팩토링 한 경험이 있습니다.
            </h3>
            <h2>개발 교육</h2>
            <h3>Java, Network, Database, Linux 기초 지식을 학습했습니다.</h3>
            <h3>
              RDBMS에서 쿼리를 작성해 데이터를 출력해 보았으며, 데이터를
              집계하고 합치는 과정을 경험해 보았습니다.
            </h3>
            <h3>
              Docker의 원리를 이해하고 기본적인 사용법과 Docker Compose 문법을
              익혔습니다.
            </h3>
          </div>
        </li>
        <li
          className={`${styles.container__item} ${
            isOpen4 ? styles.active : styles.inactive
          }`}
          onClick={handleClick4}
        >
          <div className={styles.container__item__question}>
            <div className={`${'material-symbols-outlined'} ${styles.icon}`}>
              not_listed_location
            </div>
            <h2>이직을 결심한 이유</h2>
            <button>{isOpen4 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen4 ? styles.active : styles.inactive
            }`}
          >
            <h2>방향성의 차이</h2>
            <h3>
              여러 업무들을 낮은 수준으로 동시에 담당해주기를 바랬던 회사의 운영
              방향성은 맡은 업무에 집중해 전문성을 갖추고 싶었던 제 생각과는
              차이가 있었던 것 같습니다.
            </h3>
            <h2>비개발 업무의 연속</h2>
            <h3>
              세 명이던 부서에 혼자 남게 되었고, 개발 업무가 아닌 영업 비중이
              높은 업무가 지속되었습니다. 개발자로서 성장할 수 있는 환경이
              아니라는 확신이 들어 이직을 선택하게 되었습니다.
            </h3>
          </div>
        </li>
        <li
          className={`${styles.container__item} ${
            isOpen5 ? styles.active : styles.inactive
          }`}
          onClick={handleClick5}
        >
          <div className={styles.container__item__question}>
            <div className={`${'material-symbols-outlined'} ${styles.icon}`}>
              check
            </div>
            <h2>마음가짐</h2>
            <button>{isOpen5 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen5 ? styles.active : styles.inactive
            }`}
          >
            <h3>
              처음 접해보는 기술을 두려워하지 않고 도전하는 태도는 개발자에게
              중요한 덕목이라고 생각합니다.
              <br /> 언제나 주도적으로 해야할 일을 찾고 필요한 것을 찾아
              학습하는 제 장점은 익숙하지 않은 환경과 낯선 업무에 빠르게
              적응하고 업무를 수행하는데 많은 도움이 될 것입니다.
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nandsoft;
