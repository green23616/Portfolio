// CSS
import styles from './About.module.scss';
// Component
import Profile from './profile/Profile';
import Skills from './skills/Skills';

function About() {
  return (
    <main className={styles.about}>
      <div className={styles.container}>
        <Profile />
        {/* <div className={styles.container__above}>
          <div className={styles.container__above__skill1}>1</div>
          <Profile/>
          <div className={styles.container__above__skill3}>3</div>
        </div>
        <div className={styles.container__below}>
          <div className={styles.container__below__skill4}>4</div>
          <div className={styles.container__below__skill5}>5</div>
        </div> */}
        <Skills />
      </div>
    </main>
  );
}

export default About;
