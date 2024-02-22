import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = ({ callbackFunc }: { callbackFunc: () => void }) => {
  const [targetActive, setTargetActive] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  let observer: IntersectionObserver;

  const observe = () => {
    if (targetRef.current) {
      observer.observe(targetRef?.current);
    }
  };

  const unobserve = () => {
    if (targetRef.current) {
      observer.unobserve(targetRef.current);
    }
  };

  useEffect(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callbackFunc();
        }
      },
      { root: null, threshold: 0 },
    );

    observe();

    return () => unobserve();
  }, [targetActive]);

  return { setTargetActive, targetRef };
};
