import { FC } from 'react';
import Image from 'next/image';
import placeholderImage from '@/public/images/placeholder-image.png';
import styles from '@/styles/components/BookCard.module.css';
import { BookToReadProps } from '@/types';

interface BookCardProps {
  id: number;
  title: string;
  imageUrl?: string;
  authors: {
    name: string;
    birth_year: number;
    death_year: number;
  }[];
  addBookToList: (book: BookToReadProps) => void;
  checkBookInReadlist: (id: number) => boolean;
  bookRef?: any;
}

export const BookCard: FC<BookCardProps> = ({
  id,
  title,
  imageUrl,
  authors,
  addBookToList,
  checkBookInReadlist,
  bookRef,
}) => {
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
              By:
              {authors.map((author, index) => (
                <span key={index}>{author.name}</span>
              ))}
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
