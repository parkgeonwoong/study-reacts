import "./App.css";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avater(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avater user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };
  return (
    <div className="Comment">
      <UserInfo user={comment.author} />
      <div className="Comment-text">{comment.text}</div>
      <div className="Comment-date">{formatDate(comment.date)}</div>
    </div>
  );
}

export default App;
