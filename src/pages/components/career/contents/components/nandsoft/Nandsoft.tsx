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
              업무를 맡아 명령어로 파일을 탐색하고 권한 설정을 해본 경험이
              있습니다.
            </h3>
            <h2>개발 성과</h2>
            <h3>
              float로 개발되어 있던 로그인 UI와 나의 메일 기능 UI를 flex를
              사용해 개선한 경험이 있습니다.
            </h3>
            <h2>개발 교육</h2>
            <h3>
              Java, Network, Database, Linux 교육을 병행하며 부족했던 백엔드
              지식을 보완하였습니다.
            </h3>
            <h3>
              RDBMS에서 쿼리를 작성해 데이터를 출력해 보았으며, 데이터를
              집계하고 통합하는 과정을 경험해 보았습니다.
            </h3>

            <h3>
              Docker를 활용하여 기본적인 컨테이너 생성, 서비스 관리 및 배포
              과정을 경험해 보았습니다.
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
              주 업무에 집중하고 어느 정도의 레벨까지는 익숙해지며 다른 업무를
              늘리는 것이 바람직하다고 생각합니다. <br />
              하지만 넓고 얕은 학습을 통해 넓은 범위의 업무들을 동시에
              처리해주기를 바랬던 회사의 방향성은 제 생각과는 다소 차이가 있었던
              것 같습니다.
            </h3>
            <h2>개발하지 않는 개발자</h2>
            <h3>
              팀 내 유일한 동료가 퇴사해 혼자 남은 상황에서 비개발 업무가
              반복되며 기술적 성장이 중단되었다는 느낌을 받아 개발자로서
              성장하고 성과를 낼 수 있는 환경을 위해 이직을 선택하게 되었습니다.
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
              주도적으로 낯선 기술을 두려워하지 않고 도전하는 태도는 개발자에게
              중요한 덕목이라고 생각합니다.
              <br /> 스스로 필요한 기술을 찾고 계획을 세워 실행해 본 제 경험은
              익숙하지 않은 환경과 업무에서도 팀 분위기에 빠르게 적응하고 업무를
              수행하는데 많은 도움이 될 것입니다.
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nandsoft;
