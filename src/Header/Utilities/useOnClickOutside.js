import {useEffect} from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mouseup", listener);
      document.addEventListener("touchend", listener);
      return () => {
        document.removeEventListener("mouseup", listener);
        document.removeEventListener("touchend", listener);
      };
    },
    [ref, handler]
  );
}