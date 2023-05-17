import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";
function App() {
  const formatUserName = (userName) => `@${userName}`;
  const users = [
    {
      username: "luigi",
      name: "Luigi Mario",
      icon: "https://i.pinimg.com/originals/2c/fe/60/2cfe60e31c1a261b27048b0ea87472bf.jpg",
    },
    {
      username: "peach",
      name: "Peach",
      icon: "https://64.media.tumblr.com/b45a5fc1ef26303db7d426ac4a3a7ea8/7767ce5988c114c9-38/s1280x1920/7644f1e3d1a5ddec3fe9f3dcb6497967f343c2fe.png",
    },
    {
      username: "yoshi",
      name: "Yoshi",
      icon: "https://media.pocketgamer.com/artwork/na-nregd/yoshi-history-icon.jpg",
    },
  ];

  return (
    <div className="main-card">
      <TwitterFollowCard
        initialIsFollowing
        formatUserName={formatUserName}
        userName={"mario"}
        name={"Mario Mario"}
        icon={
          "https://pbs.twimg.com/profile_images/1635175988962140160/iP721PzO_400x400.png"
        }
      />
      {users.map(({ username, name, icon }) => (
        <TwitterFollowCard
          key={username}
          formatUserName={formatUserName}
          userName={username}
          name={name}
          icon={icon}
        />
      ))}
    </div>
  );
}

export default App;
