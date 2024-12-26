// CSS
import styles from './About.module.scss';
// Component
import Profile from './profile/Profile';
import Skills from './skills/Skills';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <Profile />
        <Skills />
      </div>
    </div>
  );
}

export default About;
