import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  });
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>NotFound</h1>
    </div>
  );
};

export default NotFound;
