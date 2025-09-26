import { useEffect, useRef } from "react";

export function useKeyboardShortcuts({
  onPrevFact,
  onNextFact,
  onToggleTheme,
  onFocusSearchBar,
}: {
  onPrevFact: () => void;
  onNextFact: () => void;
  onToggleTheme: () => void;
  onFocusSearchBar: () => void;
}) {
  const searchBarRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onPrevFact();
      } else if (event.key === "ArrowRight") {
        onNextFact();
      } else if (event.ctrlKey && (event.key === "j" || event.key === "J")) {
        event.preventDefault();
        onToggleTheme();
      } else if (event.ctrlKey && (event.key === "k" || event.key === "K")) {
        event.preventDefault();
        onFocusSearchBar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrevFact, onNextFact, onToggleTheme, onFocusSearchBar]);

  return { searchBarRef };
}
