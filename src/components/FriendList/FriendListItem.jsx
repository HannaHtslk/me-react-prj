import s from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ name, image, status }) => {
  return (
    <div>
      <img src={image} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={clsx({
          [s.isOnline]: status,
          [s.isOffline]: !status,
        })}
      >
        {status ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
