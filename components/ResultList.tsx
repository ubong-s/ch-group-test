import { BookCard } from './BookCard';
import styles from '@/styles/components/ResultList.module.css';
import { BookProps, BookToReadProps } from '@/types';
import { FC, useRef, useCallback } from 'react';

export const ResultList: FC<{
  loading: boolean;
  query: string;
  bookList: BookProps[];
  addBookToList: (book: BookToReadProps) => void;
  checkBookInReadlist: (id: number) => boolean;
  handleSearch: () => void;
}> = ({
  loading,
  query,
  bookList,
  addBookToList,
  checkBookInReadlist,
  handleSearch,
}) => {
  const observerRef = useRef<IntersectionObserver>();

  const lastBook = useCallback(
    (node: any) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          handleSearch();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loading]
  );

  return (
    <div className={styles.results}>
      {bookList.length < 1 ? (
        <h3>Search books</h3>
      ) : (
        <>
          <h2>Result List</h2>
          <ul>
            {bookList.map((book, index) => {
              if (bookList.length === index + 1) {
                return (
                  <BookCard
                    bookRef={lastBook}
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    imageUrl={book.formats['image/jpeg']}
                    authors={book.authors}
                    addBookToList={addBookToList}
                    checkBookInReadlist={checkBookInReadlist}
                  />
                );
              }
              return (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  imageUrl={book.formats['image/jpeg']}
                  authors={book.authors}
                  addBookToList={addBookToList}
                  checkBookInReadlist={checkBookInReadlist}
                />
              );
            })}
          </ul>
        </>
      )}
      {loading && <h3>Loading....</h3>}
    </div>
  );
};
