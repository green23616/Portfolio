import styles from './Profile.module.scss';

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__imageBox}>
        <img src="src/assets/images/jw1.JPG" alt="img1" />
        <p className={styles.profile__comment1}>
          전문성과 진실성을 가장 큰 가치로 생각합니다
        </p>
        <p className={styles.profile__comment1}>
          생각한것을 구현하는 것이 즐겁습니다
        </p>
      </div>
    </div>
  );
}

export default Profile;
