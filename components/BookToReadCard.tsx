import { FC } from 'react';
import Image from 'next/image';
import placeholderImage from '@/public/images/placeholder-image.png';
import styles from '@/styles/components/BookCard.module.css';
import { useBooksContext } from '@/context';

interface BookToReadCardProps {
  id: number;
  title: string;
  imageUrl?: string;
}

export const BookToReadCard: FC<BookToReadCardProps> = ({
  id,
  title,
  imageUrl,
}) => {
  const [state, setState] = useBooksContext();

  const removeBookFromList = (id: number) => {
    setState({
      ...state,
      toReadList: state.toReadList.filter((book) => book.id !== id),
    });
  };
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
