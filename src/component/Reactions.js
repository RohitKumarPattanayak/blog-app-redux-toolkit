const reactionEmoji = {
  like: "👍",
  wow: "😮",
  heart: "❤️",
};

const Reactions = (props) => {
  console.log(props);
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        id={props.userId}
        name={name}
        type="button"
        className="reactionButton"
      >
        {emoji} {props.Reactions[name]}
      </button>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        width: "min-content",
        justifyContent: "start",
      }}
    >
      {reactionButtons}
    </div>
  );
};
export default Reactions;
