import { useEffect } from "react";

const useClickOutside = (containerRef, onClick) => {
  useEffect(() => {
    const onClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClick();
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [containerRef]);
};

export default useClickOutside;
