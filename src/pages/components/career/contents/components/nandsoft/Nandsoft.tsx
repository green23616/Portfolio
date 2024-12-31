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
            <h3>
              사내 솔루션 SSO 유지보수에 참여하여 로그인 UX 세션 오류를 수정한
              경험이 있습니다.
            </h3>
            <h3>
              Java, Network, Database, Linux개발자 교육을 병행하며 반드시 알아야
              할 넓고 얕은 지식들을 배웠습니다.
            </h3>
            <h3>
              기초적인 Java 문법들을 익히고 객체지향 프로그래밍을 설명할 수
              있습니다.
            </h3>
            <h3>
              RDBMS에서 쿼리문을 작성해 데이터를 조회하고 통합해 보았습니다.
            </h3>
            <h3>
              Linux 명령어로 기본적인 탐색을 할 수 있고 파일 관리 및 권한 관리를
              해보았습니다.
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
              React 프로젝트에 참여하기로 되어 입사했으나 프로젝트 당일 회의에서
              Vue.js로 프레임워크가 변경되었습니다. 기술적인 유사성이 있다고
              하더라도 하나의 전문성을 갖추고 다른것도 경험해보고 싶은 저의
              방향성과 넓고 얕은 지식을 습득하길 원했던 회사의 방향성은 다소
              차이가 있었던 것 같습니다.
            </h3>
            <h2>한계</h2>
            <h3>
              유지보수 팀 특성 상 프론트엔드 업무보다 기존에 존재하던 PHP나 Java
              프로젝트 유지보수 위주의 작업이 많았고, 유일한 선임 개발자가
              퇴사하여 혼자 남은 유지보수팀에서 제가 원했던 기술적 성장은 하기
              어렵다고 판단했습니다.
            </h3>
            <h2>부족한 기초지식</h2>
            <h3>
              기본적인 컴퓨터 공학 지식의 부족함을 느끼는 상황들이 자주 있었지만
              눈앞의 업무와 회사 일정으로 습득에는 한계가 있었다고 생각합니다.
              이해 없이 프레임워크 사용법만 익혀가는 것이 바람직하지 못하다고
              생각했으나 안정된 일상을 벗어난다는 두려움이 존재했습니다. 하지만
              장기적으로 제가 원하는 ‘어떤 요구사항도 구현할 수 있는 개발자’ 가
              되기 위해서는 안주해서는 안된다는 확신이 들었고 다시 도전하게
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
              sentiment_content
            </div>
            <h2>배운점</h2>
            <button>{isOpen5 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen5 ? styles.active : styles.inactive
            }`}
          >
            <h3>
              회사를 다니면서 조금씩 공부를 하라는 주변의 조언이 있었지만 회사를
              나오면서까지 다시 시작한 이유는, 흘러가듯 일하고 그저 회사에
              존재하는 아무나가 되고 싶지 않았기 때문입니다. 본인의 부족함을
              깨닫는 것이 성장의 1단계라고 생각합니다. 저는 누군가가 짜놓은
              커리큘럼을 수강하는 것이 아닌 제가 필요하다고 생각하고 공부하고
              싶었던 것들을 찾아 학습했습니다. 이제는 좋은 동료들과 함께
              전문가로서 코드를 개선하고 에러를 마주하며 개발자의 발걸음을 계속
              이어나가고 싶습니다.
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nandsoft;
