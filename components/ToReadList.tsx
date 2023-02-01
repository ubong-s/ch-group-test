import { FC } from 'react';
import styles from '@/styles/components/ToReadList.module.css';
import { BookToReadProps } from '@/types';
import { BookToReadCard } from './BookToReadCard';

export const ToReadList: FC<{ toReadList: BookToReadProps[] }> = ({
  toReadList,
}) => {
  return (
    <div className={styles.to__read}>
      <h2>To-read list</h2>
      {toReadList.length > 0 && (
        <ul>
          {toReadList.map((book) => (
            <BookToReadCard
              key={book.id}
              title={book.title}
              imageUrl={book.image}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
