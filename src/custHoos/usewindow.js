import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  //console.log(width, "width");
  return {
    width,
    height
  };
}

export default function useWindowDim() {
  const [windim, setwindim] = useState(getWindowDimensions());
  useEffect(() => {
    function setsize() {
      setwindim(getWindowDimensions());
    }
    window.addEventListener("resize", setsize);
    return () => {
      window.removeEventListener("resize", setsize);
    };
  }, []);

  return windim;
}
