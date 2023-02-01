import styles from '@/styles/components/SearchBar.module.css';
import { FC, ChangeEvent, FormEvent } from 'react';

interface SearchBarProps {
  query: string;
  handleSubmit: () => void;
  handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  query,
  handleSubmit,
  handleQueryChange,
}) => {
  return (
    <section className={styles.search}>
      <form
        className={styles.form}
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type='text'
          placeholder='Search for...'
          value={query}
          onChange={handleQueryChange}
        />
        <button type='submit'>Search</button>
      </form>
    </section>
  );
};
