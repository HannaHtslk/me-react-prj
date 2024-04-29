// import { BooksList, Article, Alert, Button, Profile, FriendList } from 'components'
// import article from '../data/article.json';
// import books from '../data/books.json';
// import profile from '../data/profile.json';
// import friends from '../data/friends.json';

// import ColorPicker from './ColorPicker/ColorPicker';
// import TodoList from './TodoList/TodoList';
// import Counter from './Counter/Counter';

// import CustomButton from './CustomButton';
// import ClickCounter from './ClickCounter';
import { useState, useEffect } from 'react';
import Modal from './Modal/Modal';

export default function App() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('You can see me only once');
  }, []);
  // const [clicks, setClicks] = useState(0);

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };
  // const [clicks, setClicks] = useState(0);

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  // const [isOpen, setIsOpen] = useState(false);

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    console.log('First updated: ', first);
  }, [first]);
  useEffect(() => {
    console.log('Second updated: ', second);
  }, [second]);

  useEffect(() => {
    console.log('First or second updated: ', first + second);
  }, [first, second]);
  return (
    <div>
      <button
        onClick={() => {
          setFirst(first + 1);
        }}
      >
        First: {first}
      </button>
      <button
        onClick={() => {
          setSecond(second + 1);
        }}
      >
        Second: {second}
      </button>

      {/* <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? 'Hide' : 'Show'}
      </button>
      {isOpen && <Modal />}
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button> */}
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}

      {/* <BooksList books={books} />
      <Article {...article} />
      <Alert variant="info">Please update your email!</Alert>
      <Alert variant="error">There was an error during transaction!</Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase!
      </Alert>
      <Alert variant="warning" outlined>
        Please update your profile contact information!
      </Alert>
      <Profile {...profile} />
      <FriendList friends={friends} />

      <button
        onClick={() => {
          alert('u clicked');
        }}
      >
        Click me!
      </button>
      
      <button onClick={handleClick}>Counter: {clicks} </button>
      <CustomButton message={'hey there'}>See greeting</CustomButton>
      <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
      {isOpen && <p>I am opened</p>} */}

      {/* <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} /> */}
    </div>
  );
}
