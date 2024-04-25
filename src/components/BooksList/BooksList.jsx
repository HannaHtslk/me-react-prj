import '../../styles/Bookslist.css';

export const BooksList = ({ books }) => {
  const evenNumbers = books.filter(book => {
    return book.id % 2 === 0;
  });
  const itemsList = evenNumbers.map(item => {
    return (
      <li key={item.id}>
        <h2 className="title">{item.name}</h2>
      </li>
    );
  });

  return <ul>{itemsList}</ul>;
};
