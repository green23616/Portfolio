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
            <h1>
              사용자를 생각한다는 점에서 서비스와 개발은 비슷한 부분이 있습니다
            </h1>
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
      <div className={styles.samsung__below}></div>
    </div>
  );
}

export default Samsung;
