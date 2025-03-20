/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useEffect, useCallback } from "react";

type Timer = ReturnType<typeof setTimeout>;

type Callback<T extends any[]> = (...args: T) => void | Promise<void>;

export function useDebounce<T extends any[]>(callback: Callback<T>, delay = 500) {
  const timer = useRef<Timer | null>(null);

  const debouncedFunction: Callback<T> = useCallback(
    (...args) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return debouncedFunction;
}
