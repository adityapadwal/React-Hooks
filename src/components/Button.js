import React, { forwardRef, useImperativeHandle, useState } from "react";

export const Button = forwardRef((props, ref) => {
  // useState hook
  const [toggle, setToggle] = useState(false);

  // using useImperativeHandle
  useImperativeHandle(ref, () => ({
    alterToggle() {
        setToggle(!toggle);
    }
  }));

  return (
    <>
      <button>
        Button From Child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});
