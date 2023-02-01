import { BookCard } from './BookCard';
import styles from '@/styles/components/ResultList.module.css';
import { dummyResults } from '@/mockData';

export const ResultList = () => {
  return (
    <div className={styles.results}>
      <h2>Result List</h2>
      <ul>
        {dummyResults.map((book) => (
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
