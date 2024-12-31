import { useState } from 'react';
// CSS
import styles from './Profile.module.scss';

function Profile() {
  const [imageNumber, setImageNumber] = useState(0);
  const handleClick = (number: number) => {
    setImageNumber(number);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profile__imageBox} onClick={() => handleClick(0)}>
        <img
          src={`src/assets/images/jw${imageNumber}.jpg`}
          alt={`img${imageNumber}`}
        />
      </div>
      <div className={styles.profile__tags}>
        <p
          className={styles.profile__tags__item}
          onClick={() => handleClick(1)}
        >
          #업무
        </p>
        <p
          className={styles.profile__tags__item}
          onClick={() => handleClick(2)}
        >
          #일상
        </p>
        <p
          className={styles.profile__tags__item}
          onClick={() => handleClick(3)}
        >
          #취미
        </p>
      </div>
      <div className={styles.profile__commentBox}>
        <h1>
          <span className={styles.profile__commentBox__values}>전문성</span>과
          <span className={styles.profile__commentBox__values2}> 진실성</span>을
          <br />
          가장 큰 가치로
          <br /> 생각합니다
        </h1>
        <h3>
          과정을 생각하며 결과에
          <br /> 다가가고 싶습니다
        </h3>
        <h3>
          타인을 설득할 전문성을
          <br /> 갖추고 싶습니다
        </h3>
        <h3>
          소중한 동료와 웃으며
          <br /> 일하고 싶습니다
        </h3>
      </div>
    </div>
  );
}

export default Profile;
