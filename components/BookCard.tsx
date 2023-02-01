import { FC } from 'react';
import Image from 'next/image';
import placeholderImage from '@/public/images/placeholder-image.png';
import styles from '@/styles/components/BookCard.module.css';
import { BookToReadProps } from '@/types';
import { useBooksContext } from '@/context';

interface BookCardProps {
  id: number;
  title: string;
  imageUrl?: string;
  authors: {
    name: string;
    birth_year: number;
    death_year: number;
  }[];
  bookRef?: any;
}

export const BookCard: FC<BookCardProps> = ({
  id,
  title,
  imageUrl,
  authors,
  bookRef,
}) => {
  const [state, setState] = useBooksContext();

  const addBookToList = (book: BookToReadProps) => {
    setState({
      ...state,
      toReadList: state.toReadList.concat(book),
    });
  };

  const checkBookInReadlist = (id: number): boolean => {
    return state.toReadList.find((book) => book.id === id) ? true : false;
  };

  return (
    <li ref={bookRef}>
      <article className={styles.book}>
        <Image
          src={imageUrl || placeholderImage}
          alt={title}
          width={80}
          height={100}
        />
        <div className={styles.info}>
          <h4>{title}</h4>
          {authors.length > 0 && (
            <p className={styles.authors}>
              [By:
              {authors.map((author, index) => (
                <span key={index}>{author.name}</span>
              ))}
              ]
            </p>
          )}
        </div>
        <button
          type='button'
          disabled={checkBookInReadlist(id) ? true : false}
          onClick={() => addBookToList({ id, title, image: imageUrl })}
        >
          Pick
        </button>
      </article>
    </li>
  );
};
