const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
};

const Reactions = ({ post }) => {
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="reactionButton">
        {emoji} 1
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
