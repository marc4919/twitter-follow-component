import "./App.css";
import { useState } from "react";

function TwitterFollowCard({formatUserName, userName, name, icon, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-follow-button is-following' : 'tw-followCard-follow-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={icon}
          alt="el avatar de mario"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-username">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
