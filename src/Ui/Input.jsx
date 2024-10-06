import React, { forwardRef, memo } from "react";

const Input = forwardRef((props, ref) => {

  return (
    <div className="Field">
      <input
        ref={ref}
        className="input"
        placeholder={props?.placeholder}
        {...props}
      />
      {props?.error && <span>{props?.mesasge}</span>}
    </div>
  );
});

export default memo(Input);
