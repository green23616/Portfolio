// CSS
import styles from './Main.module.scss';
// Component
import About from './components/about/About';
import Career from './components/career/Career';
import Works from './components/works/Works';
import Divider from '../components/divider/Divider';
import Header from './components/header/Header';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
        <About />
        <Divider message="Original Design and Code by JW 2024" />
        <Career />
        <Divider
          message="해당 코드들은 직접 작업했으며 타인의 코드 또는 프로젝트를 베끼지
          않았음을 약속합니다"
        />
        <Works />
      </div>
    </div>
  );
}

export default Main;
