import { useBooksContext } from '@/context';
import styles from '@/styles/components/SearchBar.module.css';
import { ChangeEvent, FormEvent } from 'react';
import { baseUrl } from '@/utils/index';

export const SearchBar = () => {
  const [state, setState] = useBooksContext();

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      query: e.target.value,
    });
  };

  const handleBooksSearch = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setState({
      ...state,
      error: null,
      isLoading: true,
      bookList: [],
    });

    try {
      if (!state.query) {
        setState({
          ...state,
          isLoading: false,
          bookList: [],
          queryMore: null,
          error: `Please provide a valid search`,
        });
      }

      if (state.query) {
        // Replace space with '%20'
        let searchQuery = state.query.replace(/ /g, '%20');

        const response = await fetch(`${baseUrl}&search=${searchQuery}`);

        if (response.status === 200) {
          const data = await response.json();

          setState({
            ...state,
            isLoading: false,
            bookList: data.results,
            queryMore: data.next || null,
            error:
              data.results.length === 0
                ? `Search for "${state.query}" fetched 0 results`
                : null,
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

  return (
    <section className={styles.search}>
      <form className={styles.form} onSubmit={(e) => handleBooksSearch(e)}>
        <input
          type='text'
          placeholder='Search for...'
          value={state.query}
          onChange={handleQueryChange}
        />
        <button type='submit'>Search</button>
      </form>
    </section>
  );
};
