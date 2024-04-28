import { BooksList } from './BooksList/BooksList';
import { Article } from './Article/Article';
import { Alert } from './Alert/Alert';
// import { Button } from './Button/Button';
// import { LoginButton } from './Button/LoginButton';
// import { FollowButton } from './Button/FollowButton';
import article from '../data/article.json';
import books from '../data/books.json';
import Profile from './Profile/Profile';
import profile from '../data/profile.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import { useState } from 'react';
import CustomButton from './CustomButton';
import ClickCounter from './ClickCounter';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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
      {isOpen && <p>I am opened</p>}
    </div>
  );
}
