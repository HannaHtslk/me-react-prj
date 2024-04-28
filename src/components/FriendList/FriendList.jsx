// import s from './FriendList.module.css';

import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              image={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
