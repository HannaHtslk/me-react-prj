import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl">Page Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
