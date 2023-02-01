import { ResultList } from './ResultList';
import { ToReadList } from './ToReadList';
import styles from '@/styles/components/Lists.module.css';
import { FC } from 'react';
import { BookProps, BookToReadProps } from '@/types';

interface ListProps {
  loading: boolean;
  query: string;
  bookList: BookProps[];
  toReadList: BookToReadProps[];
}

export const Lists: FC<ListProps> = ({
  loading,
  query,
  bookList,
  toReadList,
}) => {
  return (
    <section className={styles.lists}>
      <ResultList loading={loading} query={query} bookList={bookList} />
      <ToReadList toReadList={toReadList} />
    </section>
  );
};
