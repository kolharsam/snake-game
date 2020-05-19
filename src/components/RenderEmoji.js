import React from "react";

function RenderEmoji({ emoji, label }) {
  return (
    <span role="img" aria-labelledby={label}>
      {emoji}
    </span>
  );
}

export default RenderEmoji;
