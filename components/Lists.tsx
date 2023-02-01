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
  addBookToList: (book: BookToReadProps) => void;
  removeBookFromList: (id: number) => void;
  checkBookInReadlist: (id: number) => boolean;
}

export const Lists: FC<ListProps> = ({
  loading,
  query,
  bookList,
  toReadList,
  addBookToList,
  removeBookFromList,
  checkBookInReadlist,
}) => {
  return (
    <section className={styles.lists}>
      <ResultList
        loading={loading}
        query={query}
        bookList={bookList}
        addBookToList={addBookToList}
        checkBookInReadlist={checkBookInReadlist}
      />
      <ToReadList
        toReadList={toReadList}
        removeBookFromList={removeBookFromList}
      />
    </section>
  );
};
