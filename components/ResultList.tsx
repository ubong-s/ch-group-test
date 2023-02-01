import { BookCard } from './BookCard';
import styles from '@/styles/components/ResultList.module.css';
import { useRef, useCallback } from 'react';
import { useBooksContext } from '@/context';

export const ResultList = () => {
  const [state, setState] = useBooksContext();
  const observerRef = useRef<IntersectionObserver>();

  const handleMoreBooksSearch = async (): Promise<void> => {
    try {
      if (state.queryMore) {
        setState({
          ...state,
          error: null,
          isLoading: true,
        });
        const response = await fetch(state.queryMore);

        if (response.status === 200) {
          const data = await response.json();

          setState({
            ...state,
            isLoading: false,
            bookList: [...state.bookList, ...data.results],
            queryMore: data.next || null,
          });
        }
      }
    } catch (error) {
      console.error(error);
      setState({
        ...state,
        isLoading: false,
        error: 'Error fetching books',
      });
    }
  };

  const lastBook = useCallback(
    (node: any) => {
      if (state.isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          handleMoreBooksSearch();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    // eslint-disable-next-line
    [state.isLoading]
  );

  return (
    <div className={styles.results}>
      {state.bookList.length < 1 ? (
        <>
          <h3>Search books</h3>
          {state.error && (
            <h3 className={styles.error}>
              <h3>{state.error}</h3>
            </h3>
          )}
        </>
      ) : (
        <>
          <h2>Result List</h2>
          {state.error && (
            <h3 className={styles.error}>
              <h3>{state.error}</h3>
            </h3>
          )}
          <ul>
            {state.bookList.map((book, index) => {
              if (state.bookList.length === index + 1) {
                return (
                  <BookCard
                    bookRef={lastBook}
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    imageUrl={book.formats['image/jpeg']}
                    authors={book.authors}
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
                />
              );
            })}
          </ul>
        </>
      )}
      {state.isLoading && <h3 className={styles.loading}>Loading....</h3>}
    </div>
  );
};
