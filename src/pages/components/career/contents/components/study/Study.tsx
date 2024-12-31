import { useState } from 'react';
// CSS
import styles from './Study.module.scss';

function Study() {
  const [imageNumber, setImageNumber] = useState(1);

  const handlePrev = () => {
    if (imageNumber > 0) {
      setImageNumber(prev => prev - 1);
    } else {
      setImageNumber(4);
    }
  };

  const handleNext = () => {
    if (imageNumber < 4) {
      setImageNumber(prev => prev + 1);
    } else {
      setImageNumber(0);
    }
  };
  return (
    <div className={styles.study}>
      <div className={styles.container}>
        <div className={styles.container__item}>
          <div className={styles.container__item__imgCarousel}>
            <img
              src={`./src/assets/images/${imageNumber}.png`}
              alt={`img${imageNumber}`}
            />
            <div className={styles.control}>
              <button
                className={`${'material-symbols-outlined'} ${
                  styles.control__icon
                }`}
                onClick={handlePrev}
              >
                arrow_back
              </button>
              <button
                className={`${'material-symbols-outlined'} ${
                  styles.control__icon
                }`}
                onClick={handleNext}
              >
                arrow_forward
              </button>
            </div>
          </div>
        </div>
        <div className={styles.container__text}>
          <h2>어떤 요구사항도 구현할 수 있는 개발자를 목표로</h2>
          <h3>기초 전공 지식 학습</h3>
          <h4>
            자료구조: 배열, 스택, 큐, 트리, 그래프 등의 기본 자료구조를 이해하고
            있습니다.
            <br />
            네트워크: OSI 7계층의 구조와 역할, TCP/IP 프로토콜의 기본 동작
            원리를 학습했습니다.
            <br />
            데이터베이스: RDBMS에서 쿼리문을 작성하여 CRUD를 구현할 수 있습니다.
          </h4>
          <h3>프레임워크 이해</h3>
          <h4>
            React의 구동 원리를 이해하고 번들러 없이 직접 세팅을 해보았습니다.
            State가 무엇인지 이해하고 Client와 Server 양측에서 State
            Management를 해보고 통합 구현한 경험이 있습니다.
          </h4>
          <h3>데이터베이스 설계 및 쿼리 최적화</h3>
          <h4>
            네트워크, 데이터베이스, 알고리즘, 자료구조 등의 기초적인 컴퓨터 공학
            지식을 학습하였습니다
          </h4>
          <h3>RESTful API와 GraphQL 설계</h3>
          <h4>HTTP method를 활용한 CRUD 구현 경험이 있습니다</h4>
          <h3>버전관리</h3>
          <h4>
            git branch를 나누어 기능 별로 개발을 진행해보았고 대용량 파일
            업로드를 위해 git lfs를 사용해 보았습니다.
          </h4>
          <h3>디버깅</h3>
          <h4>
            React Dev Tools, React Query Dev Tools등을 이용해 디버깅 경험이
            있습니다. State 추적과 프로파일러를 사용해 렌더링 속도를 측정하고
            개선한 경험이 있습니다.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Study;
