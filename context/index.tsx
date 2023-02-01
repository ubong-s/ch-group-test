import { BookProps, BookToReadProps } from '@/types';
import {
  createContext,
  ReactElement,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

const baseUrl = 'https://gutendex.com/books?';

interface InitialStateProps {
  isLoading: boolean;
  error: string | null;
  query: string;
  bookList: BookProps[];
  toReadList: BookToReadProps[];
  queryMore: string | null;
}

const initialState: InitialStateProps | null = {
  isLoading: false,
  error: null,
  query: '',
  bookList: [],
  toReadList: [],
  queryMore: null,
};

const BooksContext = createContext<
  [InitialStateProps, Dispatch<SetStateAction<InitialStateProps>>]
>([initialState, () => {}]);

export const BooksProvider = ({ children }: { children: ReactElement }) => {
  const [state, setState] = useState<InitialStateProps>(initialState);

  return (
    <BooksContext.Provider value={[state, setState]}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => useContext(BooksContext);
