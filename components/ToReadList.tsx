import { dummyResults } from '@/mockData';
import { BookCard } from './BookCard';
import styles from '@/styles/components/ToReadList.module.css';

export const ToReadList = () => {
  return (
    <div className={styles.to__read}>
      <h2>To-read list</h2>
      <ul>
        {dummyResults.slice(0, 2).map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            imageUrl={book.formats['image/jpeg']}
            authors={book.authors}
          />
        ))}
      </ul>
    </div>
  );
};
