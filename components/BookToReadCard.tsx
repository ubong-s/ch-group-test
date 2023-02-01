import { FC } from 'react';
import Image from 'next/image';
import placeholderImage from '@/public/images/placeholder-image.png';
import styles from '@/styles/components/BookCard.module.css';

interface BookToReadCardProps {
  title: string;
  imageUrl?: string;
}

export const BookToReadCard: FC<BookToReadCardProps> = ({
  title,
  imageUrl,
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

        <h4>{title}</h4>

        <button type='button'>Remove</button>
      </article>
    </li>
  );
};
