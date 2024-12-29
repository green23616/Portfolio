import { useState } from 'react';
// CSS
import styles from './Samsung.module.scss';

function Samsung() {
  const [imageSrc, setImageSrc] = useState('/src/assets/images/workers.png');

  const handleMouseOver = (src: string) => {
    setImageSrc(src);
  };

  return (
    <div className={styles.samsung}>
      <div className={styles.samsung__above}>
        <ul className={styles.samsung__above__imageBox}>
          <li className={styles.item}>
            <img
              src={imageSrc}
              alt="mainImage"
              onMouseOver={() =>
                handleMouseOver('/src/assets/images/workers.png')
              }
            />
          </li>
        </ul>
        <ul className={styles.samsung__above__imageBox1}>
          <li
            className={styles.item}
            onMouseOver={() => handleMouseOver('src/assets/images/jw1.jpg')}
          >
            <img src="\src\assets\images\jw1.jpg" alt="image1" />
          </li>
          <li
            className={styles.item}
            onMouseOver={() => handleMouseOver('src/assets/images/github.png')}
          >
            <img src="\src\assets\images\github.png" alt="image2" />
          </li>
          <li
            className={styles.item}
            onMouseOver={() => handleMouseOver('src/assets/images/deft.webp')}
          >
            <img src="\src\assets\images\deft.webp" alt="image3" />
          </li>
        </ul>
      </div>
      <div className={styles.samsung__below}>
        <h1>
          사용자를 생각한다는 점에서 서비스와 개발은 비슷한 부분이 있습니다
        </h1>
        <h3>
          비IT 계열 회사에서 근무하던 중 오래된 홈페이지를 리뉴얼하는 업무를
          맡게 되어 개발자의 업무를 처음 접하게 되었습니다. 회사의 방향성을 잘
          드러낼 수 있는 방법을 생각하며 기능과 레이아웃, 배치 등을 구상하고
          종이에 그려보는 과정에서 직접 만들어 보고 싶다고 생각했습니다. 틈틈이
          HTML과 CSS를 공부하던 중 진지하게 도전하고 싶어 프론트엔드 개발자
          900시간 과정을 선택하였습니다.
        </h3>
        <h1>비즈니스 모델에 대한 이해가 있는 개발자의 장점이 있다고 믿습니다</h1>
        <h3>
          오래 사용한 홈페이지를 리뉴얼하는 과정에서 기획팀에서 현장의 목소리를 반영코자 연락을 주셨고, 그때 개발자라는 직업을 처음 접하게 되었습니다. 회사의 방향성을 잘 드러낼 수 있는 방법을 생각하며
          기능과 레이아웃, 배치 등을 구상하고 종이에 그려보는 과정에서 직접
          만들어 보고 싶다고 생각했습니다. 현장에서 고객과 마주하는 마케팅 업무를 담당하던 저에게 해당 작업은 재미있고 신선한 경험이었습니다.
        </h3>
      </div>
    </div>
  );
}

export default Samsung;
