import { FC } from 'react';
import Image from 'next/image';
import placeholderImage from '@/public/images/placeholder-image.png';
import styles from '@/styles/components/BookCard.module.css';

interface BookToReadCardProps {
  id: number;
  title: string;
  imageUrl?: string;
  removeBookFromList: (id: number) => void;
}

export const BookToReadCard: FC<BookToReadCardProps> = ({
  id,
  title,
  imageUrl,
  removeBookFromList,
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

        <button type='button' onClick={() => removeBookFromList(id)}>
          Remove
        </button>
      </article>
    </li>
  );
};
