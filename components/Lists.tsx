import { ResultList } from './ResultList';
import { ToReadList } from './ToReadList';
import styles from '@/styles/components/Lists.module.css';

export const Lists = () => {
  return (
    <section className={styles.lists}>
      <ResultList />
      <ToReadList />
    </section>
  );
};
