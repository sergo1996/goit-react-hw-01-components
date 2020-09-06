import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="wrapper">
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name"> {name} </p> <p className="tag"> @ {tag} </p>{' '}
        <p className="location"> {location} </p>{' '}
      </div>{' '}
      <ul className="stats">
        <li>
          <span className="label"> Followers </span>{' '}
          <span className="quantity"> {stats.followers} </span>{' '}
        </li>{' '}
        <li>
          <span className="label"> Views </span>{' '}
          <span className="quantity"> {stats.views} </span>{' '}
        </li>{' '}
        <li>
          <span className="label"> Likes </span>{' '}
          <span className="quantity"> {stats.likes} </span>{' '}
        </li>{' '}
      </ul>{' '}
    </div>{' '}
  </div>
);

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

Profile.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
};

export default Profile;
