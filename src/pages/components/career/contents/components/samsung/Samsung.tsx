import { useState } from 'react';
// CSS
import styles from './Samsung.module.scss';

function Samsung() {
  const [imageSrc, setImageSrc] = useState('./images/samsung/1.jpg');

  const handleMouseOver = (src: string) => {
    setImageSrc(src);
  };

  return (
    <div className={styles.samsung}>
      <div className={styles.samsung__above}>
        <ul className={styles.samsung__above__imageBox}>
          <li
            className={styles.item}
            onMouseOver={() =>
              handleMouseOver('./images/samsung/1.jpg')
            }
          >
            <img src={imageSrc} alt="mainImage" />
          </li>
        </ul>
        <ul className={styles.samsung__above__imageBox1}>
          <li
            className={styles.item}
            onMouseOver={() =>
              handleMouseOver('./images/samsung/0.jpg')
            }
          >
            <img src="./images/samsung/0.jpg" alt="image0" />
          </li>
          <li
            className={styles.item}
            onMouseOver={() =>
              handleMouseOver('./images/samsung/2.jpg')
            }
          >
            <img src="./images/samsung/2.jpg" alt="image2" />
          </li>
        </ul>
      </div>
      <div className={styles.samsung__below}>
        <h1>
          사용자를 생각한다는 점에서 서비스와 개발은 비슷한 부분이 있습니다
        </h1>
        <h3>
          ABC마트에서 일할 때, 홈페이지 리뉴얼 개발에 현장의 목소리를 반영한다고
          하여 기획에 참여했던 경험이 있습니다. 처음 접했던 웹페이지 개발 기획
          과정은 고객 응대와 비슷한 점이 많았습니다. 어떻게 사용자로 하여금
          눌러보고 싶게 만들지나 의도했던 알림을 안 지나치게 할지 등의 고민을
          하는 과정에 참여했던 것이 제가 개발자라는 직업을 처음으로 접했던
          경험입니다. 잘 팔리지 않는 상품을 고객에게 노출시키고, 진열이나 배치의
          정돈됨을 통해 상품에 집중할 수 있게 하는 등 고객의 시점에서 생각하고
          고민했던 경험이 개발에서의 사용자 경험과 연결점이 있다고 생각합니다.
        </h3>
        <h1>
          비즈니스 모델에 대한 이해가 있는 개발자의 장점이 있다고 믿습니다
        </h1>
        <h3>
          비즈니스 모델이란 조직이 어떻게 수익을 창출하고 가치를 제공할 것인가에
          대한 방법론입니다. 삼성전자에서 일할 때 한 주의 시작에 앞서 그 주의
          고객 응대 전략과 세일즈 포인트를 암기하는 시간이 있었는데, 이것은 제가
          일을 할 때 잊지 않고 하는 습관이 되었습니다. 직급이나 계급에 상관없이
          회사에서 일하는 사람이라면 그 회사의 정신을 이해하고 있어야 한다고
          생각하고, 이것은 개발자의 업무에서도 크게 다르지 않다고 생각합니다.
          단순히 코드를 짜는 개발자가 아닌, 기업의 가치를 어떻게 하면 기술에
          녹여내고 반영할 수 있는지 생각하는 개발자가 되겠습니다.
        </h3>
      </div>
    </div>
  );
}

export default Samsung;
