import React from 'react'
import classNames from "classnames";

const TextGradient = ({ children, className }: any) => {
  return (
    <span
      className={classNames(
        "bg-custom-gradient inline-block text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </span>
  );
};

export default TextGradient