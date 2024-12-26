// CSS
import styles from './Main.module.scss';
// Component
import About from './components/about/About';
import Career from './components/career/Career';
import Works from './components/works/Works';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <About />
        <Career />
        <Works />
      </div>
    </div>
  );
}

export default Main;
