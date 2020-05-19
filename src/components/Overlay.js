import React from "react";

function Overlay({ heading, children }) {
  return (
    <div className="snake-app__overlay">
      {heading ? <div className="mb-1 heading">{heading}</div> : null}
      {children}
    </div>
  );
}

export default Overlay;
