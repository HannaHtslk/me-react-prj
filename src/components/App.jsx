import Booklist from './Booklist/Booklist';
import books from '../data/books.json';

export default function App() {
  return (
    <div>
      <Booklist name={books.name} />
    </div>
  );
}
