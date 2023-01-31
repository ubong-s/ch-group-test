import styles from '@/styles/components/SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.search}>
      <h2>Search Bar</h2>
      <form className={styles.form}>
        <input type='text' placeholder='Search for...' />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};
