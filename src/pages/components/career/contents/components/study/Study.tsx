// CSS
import { useState } from 'react';
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
          <h2>어떤 요구사항도 반영할 수 있는 개발자를 목표로</h2>
          <h3>기초 전공 지식 학습</h3>
          <h4>
            React, Nextjs의 구동 원리를 이해하고 번들러 없이 직접 세팅을 해보았습니다
          </h4>
          <h3>프레임워크 이해</h3>
          <h4>
            네트워크, 데이터베이스, 알고리즘, 자료구조 등의 기초적인 컴퓨터 공학
            지식을 학습하였습니다
          </h4>

          <h3>데이터베이스 설계 및 쿼리 최적화</h3>
          <h4>
            네트워크, 데이터베이스, 알고리즘, 자료구조 등의 기초적인 컴퓨터 공학
            지식을 학습하였습니다
          </h4>

          <h3>RESTful API와 GraphQL 설계 및 구현</h3>
          <h4>
            네트워크, 데이터베이스, 알고리즘, 자료구조 등의 기초적인 컴퓨터 공학
            지식을 학습하였습니다 네트워크, 데이터베이스, 알고리즘, 자료구조
            등의 기초적인 컴퓨터 공학 지식을 학습하였습니다
          </h4>

          <h3>API인증</h3>
          <h4>
            네트워크, 데이터베이스, 알고리즘, 자료구조 등의 기초적인 컴퓨터 공학
            지식을 학습하였습니다
          </h4>

          <h3>버전관리</h3>
          <h4>
            네트워크, 데이터베이스, 알고리즘, 자료구조 등의 기초적인 컴퓨터 공학
            지식을 학습하였습니다
          </h4>

          <h3>디버깅</h3>
          <h4>
            네트워크, 데이터베이스, 알고리즘, 자료구조 등의 기초적인 컴퓨터 공학
            지식을 학습하였습니다
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Study;
