import { BooksList } from './BooksList/BooksList';
import { Article } from './Article/Article';
import { Alert } from './Alert/Alert';
// import { Button } from './Button/Button';
// import { LoginButton } from './Button/LoginButton';
// import { FollowButton } from './Button/FollowButton';
import article from '../data/article.json';
import books from '../data/books.json';

export default function App() {
  return (
    <div>
      <BooksList books={books} />
      <Article {...article} />
      <Alert variant="info">Please update your email!</Alert>
      <Alert variant="error">There was an error during transaction!</Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase!
      </Alert>
      <Alert variant="warning" outlined>
        Please update your profile contact information!
      </Alert>
    </div>
  );
}
