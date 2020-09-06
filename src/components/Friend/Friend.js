import React from 'react';
import PropTypes from 'prop-types';
import './Friend.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {' '}
    {friends.map(friend => {
      return (
        <li key={friend.id} className="friend-item">
          <span
            className={
              friend.isOnline
                ? 'friend-status online'
                : 'friend-status offline'
            }
          ></span>{' '}
          <img
            className="friend-avatar"
            src={friend.avatar}
            alt={friend.name}
            width="100"
          />
          <p className="friend-name"> {friend.name} </p>{' '}
        </li>
      );
    })}{' '}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

// FriendList.propTypes = {
//   friend: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       //изначально указал string, но он хочет number
//       id: PropTypes.number.isRequired,
//     }),
//   ),
// };

export default FriendList;
