import { FC } from 'react';
import Image from 'next/image';
import placeholderImage from '@/public/images/placeholder-image.png';
import styles from '@/styles/components/BookCard.module.css';

interface BookCardProps {
  id: number;
  title: string;
  imageUrl?: string;
  authors: {
    name: string;
    birth_year: number;
    death_year: number;
  }[];
}

export const BookCard: FC<BookCardProps> = ({
  id,
  title,
  imageUrl,
  authors,
}) => {
  return (
    <li>
      <article className={styles.book}>
        <Image
          src={imageUrl || placeholderImage}
          alt={title}
          width={80}
          height={100}
        />
        <div className={styles.info}>
          <h4>{title}</h4>
          <p className={styles.authors}>
            By:
            {authors.map((author, index) => (
              <span key={index}>{author.name}</span>
            ))}
          </p>
        </div>
        <button type='button'>Pick</button>
      </article>
    </li>
  );
};
