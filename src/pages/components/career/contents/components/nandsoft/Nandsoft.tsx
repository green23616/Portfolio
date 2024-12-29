import { useState } from 'react';
// CSS
import styles from './Nandsoft.module.scss';

function Nandsoft() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(true);

  const handleClick = () => {
    setIsOpen1(true);
    setIsOpen2(true);
    setIsOpen3(true);
    setIsOpen4(true);
    setIsOpen5(true);
  };
  const handleClick6 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };
  const handleClick1 = () => setIsOpen1(prev => !prev);
  const handleClick2 = () => setIsOpen2(prev => !prev);
  const handleClick3 = () => setIsOpen3(prev => !prev);
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
            모두열기
          </button>
          <button
            className={styles.container__toggle__btn2}
            onClick={handleClick6}
          >
            전체닫기
          </button>
        </li>
        <li
          className={`${styles.container__item} ${
            isOpen1 ? styles.active : styles.inactive
          }`}
          onClick={handleClick1}
        >
          <div className={styles.container__item__question}>
            <div className={`${'material-symbols-outlined'} ${styles.icon}`}>
              help
            </div>
            <h2>Frontend 교육과정을 수료했지만 백엔드로 입사를 선택한 이유</h2>
            <button>{isOpen1 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen1 ? styles.active : styles.inactive
            }`}
          >
            <h2>
              프론트엔드를 공부하면서 클라이언트 측에서 데이터를 처리하는
              과정에서 서버의 역할이 얼마나 중요한지 깨달았습니다. 데이터를
              효율적으로 처리하고 안정적으로 제공하는 시스템을 만드는 데 흥미를
              느꼈고 언젠가는 백엔드 기술까지 익혀 전체적인 시스템 설계에
              기여하고 싶습니다.
            </h2>
          </div>
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
            <h2>Java, Network, Database 교육 병행 및 고객사 관리</h2>
            <button>{isOpen2 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen2 ? styles.active : styles.inactive
            }`}
          >
            <h2>
              Java와 Network, Database를 병행하며 고객사의 요구사항을 이해하고
              이를 해결하기 위한 커뮤니케이션 능력을 키웠습니다.
            </h2>
          </div>
        </li>
        <li
          className={`${styles.container__item} ${
            isOpen3 ? styles.active : styles.inactive
          }`}
          onClick={handleClick3}
        >
          <div className={styles.container__item__question}>
            <div className={`${'material-symbols-outlined'} ${styles.icon}`}>
              check_box
            </div>
            <h2>성과</h2>
            <button>{isOpen3 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen3 ? styles.active : styles.inactive
            }`}
          >
            <h2>
              "프론트엔드 개발 과정을 수료하면서 사용자 인터페이스뿐만 아니라
              서버와 데이터베이스가 어떻게 동작하는지 궁금해졌습니다. 특히,
              프론트엔드와 백엔드를 연결하는 API 설계와 데이터 처리 로직에
              흥미를 느껴 백엔드 개발자로서의 커리어를 시작하고 싶다고
              결심했습니다. 안정적이고 확장 가능한 시스템을 설계하며 사용자
              경험을 개선하는 데 기여하고 싶습니다."
            </h2>
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
              sentiment_dissatisfied
            </div>
            <h2>직장을 그만둔 이유</h2>
            <button>{isOpen4 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen4 ? styles.active : styles.inactive
            }`}
          >
            <h2>
              회사의 방향성과 제 커리어 목표가 맞지 않았지만, 짧은 시간 동안
              많은 것을 배울 수 있었던 "현재 Node.js와 Express를 사용하여 간단한
              RESTful API를 구현하며 기본기를 다지고 있습니다. 또한, MySQL과
              MongoDB 같은 데이터베이스를 직접 설계하고 쿼리를 작성하며 데이터를
              효율적으로 관리하는 방법을 배우고 있습니다. 이외에도 GitHub에 개인
              프로젝트를 업로드하며 협업 도구 사용에도 익숙해지고 있습니다.
              부족한 부분은 빠르게 학습하여 팀에 기여할 준비가 되어 있습니다."
              경험이었습니다.
            </h2>
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
            <h2>배운점과 태도</h2>
            <button>{isOpen5 ? '-' : '+'}</button>
          </div>
          <div
            className={`${styles.container__item__answer} ${
              isOpen5 ? styles.active : styles.inactive
            }`}
          >
            <h2>
              비상식적인 업무 지시와 합리적이지 못한 과정에 대해 저자세를
              약속드리는 것은 쉬운 일입니다. 하지만 저는 진실함과 솔직함이 가장
              큰 가치라 생각하며 이런 가치들이 존중받을 수 있는 회사에서 제
              실력과 노력을 200% 발휘할 것을 약속드립니다.
            </h2>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nandsoft;
