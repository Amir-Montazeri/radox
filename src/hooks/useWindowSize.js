import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const useWindowSize = () => {
  const [size, setSize] = useState({ innerWidth: "", innerHeight: "" });

  useEffect(() => {
    setSize(getWindowSize());

    window.addEventListener("resize", getWindowSize);

    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, []);

  return size;
};

export default useWindowSize;
