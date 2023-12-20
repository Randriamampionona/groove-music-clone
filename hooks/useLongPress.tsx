import { useCallback } from "react";
import {
  LongPressReactEvents,
  useLongPress as longPress,
} from "use-long-press";

type TLongPress = {
  onLongPress: () => void;
};

const useLongPress = ({ onLongPress }: TLongPress) => {
  const callback = useCallback((e: LongPressReactEvents<Element>) => {
    e.stopPropagation();
    e.preventDefault();

    onLongPress();
  }, []);

  const bind = longPress(callback, {});

  return {
    bind: bind(),
  };
};

export default useLongPress;
