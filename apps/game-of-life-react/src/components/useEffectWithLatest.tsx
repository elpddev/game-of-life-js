import { useEffect, useMemo, useRef } from "react";

export function useEffectWithLatest(
  effectFn: (state: any) => void | (() => void),
  deps: any[],
  latestState: Record<string, any>
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const state = useMemo(() => latestState, []);

  useEffect(() => {
    Object.assign(state, latestState);
  }, [state, latestState]);

  useEffect(() => {
    return effectFn(state);
  }, [effectFn, state, ...deps]);
}

export function useEffectWithRefLatest(
  effectFn: (state: any) => void | (() => void),
  deps: any[],
  latestState: Record<string, any>
) {
  const ref = useRef<any>();

  ref.current = latestState;

  useEffect(() => {
    return effectFn(ref.current);
  }, [effectFn, ...deps]);
}
