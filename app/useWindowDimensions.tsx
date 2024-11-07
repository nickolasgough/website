"use client";

import React from "react";

export default function useWindowDimensions() {
  const [windowDimensions, setWindowSize] = React.useState({height: 0, width: 0});
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowDimensions());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return [windowDimensions];
}

function getWindowDimensions() {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  };
}