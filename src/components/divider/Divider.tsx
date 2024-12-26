// CSS
import styles from './Divider.module.scss';

interface CommercialProps {
  message: string;
}

function Divider({ message }: CommercialProps) {
  return <div className={styles.divider}>{message}</div>;
}

export default Divider;
