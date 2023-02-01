import { FC, useEffect } from 'react';
import styles from '@/styles/components/ToReadList.module.css';
import { BookToReadProps } from '@/types';
import { BookToReadCard } from './BookToReadCard';

interface ToReadListProps {
  toReadList: BookToReadProps[];
  removeBookFromList: (id: number) => void;
}

export const ToReadList: FC<ToReadListProps> = ({
  toReadList,
  removeBookFromList,
}) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.localStorage.setItem('books', JSON.stringify(toReadList));
    }
  }, [toReadList]);

  return (
    <div className={styles.to__read}>
      <h2>To-read list</h2>
      {toReadList.length > 0 && (
        <ul>
          {toReadList.map((book) => (
            <BookToReadCard
              key={book.id}
              id={book.id}
              title={book.title}
              imageUrl={book.image}
              removeBookFromList={removeBookFromList}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
