import { useParams } from 'react-router-dom';

const ShowPage = () => {
  const { param } = useParams();

  return (
    <p>
      hello
      {' '}
      {param}
      {' '}
    </p>
  );
};

export default ShowPage;
