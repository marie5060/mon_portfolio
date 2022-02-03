import { useEffect, useMemo, useState } from 'react';

interface RootElement {
  element: HTMLElement;
  id: string;
}

interface ObserveOptions {
  rootElement?: RootElement;
  rootMargin?: string;
  threshold?: number | number[];
}

const UseElementOnScreen = (options: ObserveOptions, targetRef: any): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const optionsMemo = useMemo<ObserveOptions>(() => {
    return options;
  }, [options]);

  const callbackFunction = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget: Element = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  });

  return isVisible;
};

export default UseElementOnScreen;
