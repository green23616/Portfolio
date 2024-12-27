import styles from './Skills.module.scss';
import skills from './item.json';

function Skills() {
  const above = skills.above;
  const below = skills.below;

  return (
    <div className={styles.skills}>
      <ul className={styles.skills__above}>
        {above.map(e => {
          return (
            <li className={styles.skills__above__item} key={e.id}>
              <div
                className={styles.headLine}
                style={{ backgroundColor: `${e.color}` }}
              ></div>
              <h1>{e.title}</h1>
              <h3>{e.category1.category}</h3>
              <h5>{e.category1.description}</h5>
              <h3>{e.category2.category}</h3>
              <h5>{e.category2.description}</h5>
              <h3>{e.category3.category}</h3>
              <h5>{e.category3.description}</h5>
              <h3>{e.category4.category}</h3>
              <h5>{e.category4.description} </h5>
            </li>
          );
        })}
      </ul>
      <ul className={styles.skills__below}>
        <li className={styles.skills__below__item}>HTML, CSS</li>
        <li className={styles.skills__below__item}>자료구조</li>
        <li className={styles.skills__below__item}>Network</li>
      </ul>
    </div>
  );
}

export default Skills;
