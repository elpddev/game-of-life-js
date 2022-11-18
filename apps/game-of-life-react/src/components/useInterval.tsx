import { useCallback, useState } from "react";
import { useEffectWithRefLatest } from "./useEffectWithLatest";

export function useInterval({
  intervalAmount,
  workFn,
}: {
  intervalAmount: number;
  workFn: () => void;
}) {
  const [restartAction, setRestartAction] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const start = useCallback(() => {
    setRestartAction((prev) => true);
  }, []);

  const stop = useCallback(() => {
    setRestartAction((prev) => false);
  }, []);

  const toggle = useCallback(() => {
    setRestartAction((prev) => !prev);
  }, []);

  useEffectWithRefLatest(
    (state) => {
      if (!restartAction) {
        setIsStarted(false);
        return;
      }

      const timerId = setInterval(() => {
        state.workFn();
      }, state.intervalAmount);

      setIsStarted(true);

      return () => {
        if (!timerId) {
          return;
        }

        clearInterval(timerId);
      };
    },
    [restartAction],
    { workFn, intervalAmount }
  );

  return {
    isStarted,
    start,
    stop,
    toggle,
  };
}
