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
              UI를 리팩토링하는 작업을 맡았습니다. <br />
              또한, Linux 기반 서비스에서 리소스와 자원을 확인하고 디렉토리를
              관리하는 업무를 맡아 명령어로 파일을 탐색하고 권한 설정을 해본
              경험이 있습니다.
            </h3>
            <h2>개발 성과</h2>
            <h3>
              사내 솔루션 SSO 리팩토링 프로젝트에 참여하여 float로 작성된 로그인
              UI와 나의 메일 기능 UI를 flex를 사용해 개선한 경험이 있습니다.
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
              기존 업무에서 추가적으로 레거시 코드의 유지보수를 담당해 주기를
              원했던 회사의 계획으로 인해 본 업무에 필요한 기술을 공부하기
              어려운 상황이 되었습니다. 또한, 하나의 전문성보다는 넓고 얕은
              지식을 습득해 고객사에 어필하기를 원했던 회사의 방향성이 저와는
              차이가 있었던 것 같습니다.
            </h3>
            <h2>줄어든 개발 업무</h2>
            <h3>
              팀 내 유일한 선임 개발자가 퇴사하며 개발 업무보다는 오래된 PHP나
              Java 프로젝트의 유지보수 업무가 늘어났습니다. 혼자 남은 팀에서
              단순 작업만 반복되며 더 이상 기술적 성장이 어렵다고 판단해 확실한
              성장과 개발 성과를 낼 수 있는 환경을 위해 이직을 선택하게
              되었습니다.
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
              개발자에게 중요한 덕목 중 하나는 주도적으로 학습하고 도전을
              두려워하지 않는 태도라고 생각합니다. 스스로 필요에 따라 기술과
              목표를 찾아내고 계획을 세워 실천해 본 경험은 입사 후 처음 접하는
              기술과 낯선 상황에서도 팀과 회사에 빠르게 기여하는 데 많은 도움이
              될 것입니다.
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nandsoft;
