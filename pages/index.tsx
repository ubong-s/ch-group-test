import {
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
  FormEvent,
} from 'react';
import Head from 'next/head';
import { SearchBar, Lists } from '@/components';
import { BookProps, BookToReadProps } from '@/types';
import styles from '@/styles/Home.module.css';

const baseUrl = 'https://gutendex.com/books?';

export default function Home() {
  const [query, setQuery] = useState('');
  const [bookList, setBookList] = useState<BookProps[]>([]);
  const [toReadList, setToReadList] = useState<BookToReadProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>('');
  const [next, setNext] = useState<string | null>('');

  const handleBooksSearch = async (): Promise<void> => {
    setError(null);
    setLoading(true);
    setBookList([]);
    try {
      if (query) {
        // Replace space with '%20'
        let searchQuery = query.replace(/ /g, '%20');
        const response = await fetch(`${baseUrl}&search=${searchQuery}`);

        if (response.status === 200) {
          const data = await response.json();

          setBookList(data.results);

          if (data.next) {
            setNext(data.next);
          } else {
            setNext(null);
          }
        }
        setLoading(false);
      } else {
        setBookList([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError('Error fetching books');
    }
  };

  const handleMoreSearch = async (): Promise<void> => {
    setError(null);
    setLoading(true);
    try {
      if (next) {
        const response = await fetch(next);

        if (response.status === 200) {
          const data = await response.json();

          setBookList([...bookList, ...data.results]);
          if (data.next) {
            setNext(data.next);
          } else {
            setNext(null);
          }
        }
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError('Error fetching books');
    }
  };

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const addBookToList = (book: BookToReadProps) => {
    setToReadList(toReadList.concat(book));
  };
  const removeBookFromList = (id: number) => {
    setToReadList((prev) => prev.filter((book) => book.id !== id));
  };

  const checkBookInReadlist = (id: number): boolean => {
    return toReadList.find((book) => book.id === id) ? true : false;
  };

  return (
    <>
      <Head>
        <title>Project Gutenberg</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <SearchBar
            query={query}
            handleSubmit={handleBooksSearch}
            handleQueryChange={handleQueryChange}
          />
          <Lists
            loading={loading}
            query={query}
            bookList={bookList}
            toReadList={toReadList}
            addBookToList={addBookToList}
            removeBookFromList={removeBookFromList}
            checkBookInReadlist={checkBookInReadlist}
            handleSearch={handleMoreSearch}
          />
        </div>
      </main>
    </>
  );
}
