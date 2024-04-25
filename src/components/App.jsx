import { BooksList } from './BooksList/BooksList';
import { Article } from './Article/Article';
import article from '../data/article.json';
import books from '../data/books.json';

export default function App() {
  return (
    <div>
      <BooksList books={books} />
      <Article {...article} />
    </div>
  );
}
