import { useState, useEffect } from "react";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDim() {
  const [windim,setwindim] = useState(getWindowDimensions());
  useEffect(()=>{
function setsize (){
  setwindim(getWindowDimensions());
}
window.addEventListener('resize',setsize);
return ()=>{
  window.removeEventListener('resize',setsize);
}


  }[]);

return windim;

}
