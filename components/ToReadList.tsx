import styles from '@/styles/components/ToReadList.module.css';
import { BookToReadCard } from './BookToReadCard';
import { useBooksContext } from '@/context';

export const ToReadList = () => {
  const [state] = useBooksContext();

  return (
    <div className={styles.to__read}>
      <h2>To-read list</h2>
      {state.toReadList.length > 0 && (
        <ul>
          {state.toReadList.map((book) => (
            <BookToReadCard
              key={book.id}
              id={book.id}
              title={book.title}
              imageUrl={book.image}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
