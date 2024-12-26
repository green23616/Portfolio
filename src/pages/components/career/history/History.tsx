import { useEffect } from 'react';
// CSS
import styles from './History.module.scss';
// Recoil
import { useRecoilState } from 'recoil';
import { historyState } from '../../../../store/historyState';

function History() {
  const [styleVal, setStyleVal] = useRecoilState(historyState);

  const handleMouseOver = (number: number) => {
    setStyleVal(number);
  };

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setStyleVal(prev => (prev > 2 ? 0 : prev + 1));
    }, 2000);
    return () => {
      clearTimeout(setTimer);
    };
  }, [styleVal, setStyleVal]);

  return (
    <div className={styles.history}>
      <div className={styles.container}>
        <div
          className={`${styles.container__job} ${
            styleVal === 0 ? styles.active : styles.inactive
          }`}
          onMouseEnter={() => handleMouseOver(0)}
        >
          <h2>2014 - 2020</h2>
          <h3>삼성전자 서비스</h3>
          <h4>유통, 판매 및 서비스 업무</h4>
          <h3>ABC마트</h3>
          <h4>세일즈 마케터 부매니저 업무</h4>
        </div>
        <div
          className={`${styles.container__job} ${
            styleVal === 1 ? styles.active : styles.inactive
          }`}
          onMouseEnter={() => handleMouseOver(1)}
        >
          <h2>2023.06 - 11</h2>
          <h3>그린아트 아카데미</h3>
          <h4>React를 활용한 프론트엔드 교육과정</h4>
        </div>
        <div
          className={`${styles.container__job} ${
            styleVal === 2 ? styles.active : styles.inactive
          }`}
          onMouseEnter={() => handleMouseOver(2)}
        >
          <h2>2023.11 - 2024.02</h2>
          <h3>낸드소프트 프로젝트 사업부</h3>
          <h4>부산은행 사내 메일링 시스템 유지보수 업무</h4>
        </div>
        <div
          className={`${styles.container__job} ${
            styleVal === 3 ? styles.active : styles.inactive
          }`}
          onMouseEnter={() => handleMouseOver(3)}
        >
          <h2>2024.08 - 2024.12</h2>
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  );
}

export default History;
