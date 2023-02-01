import { BookCard } from './BookCard';
import styles from '@/styles/components/ResultList.module.css';
import { BookProps } from '@/types';
import { FC } from 'react';

export const ResultList: FC<{
  loading: boolean;
  query: string;
  bookList: BookProps[];
}> = ({ loading, query, bookList }) => {
  if (loading) return <h3>Searching....</h3>;

  return (
    <div className={styles.results}>
      {bookList.length < 1 ? (
        <h3>Search books</h3>
      ) : (
        <>
          <h2>Result List</h2>
          <ul>
            {bookList.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                imageUrl={book.formats['image/jpeg']}
                authors={book.authors}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
