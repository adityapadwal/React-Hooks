import React from 'react'
import { useLayoutEffect, useEffect } from 'react'

export const UseLayoutEffect = () => {

  // implementing the useLayoutEffect hook
  useLayoutEffect(() => {
    console.log("useLayoutEffect!");
  });

  // implementing the useEffect hook
  useEffect(() => {
    console.log("useEffect!")
  });

  return (
    <div className="container">
        {/* UseLayoutEffect */}
    </div>
  )
}

/*
  Explanation
  Same as useEffect but called before useEffect
  useLayoutEffect fires before the browser repaints the screen. You can measure layout here.
*/