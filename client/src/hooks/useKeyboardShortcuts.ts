import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/themeContext";

export function useKeyboardShortcuts({
  onPrevFact,
  onNextFact,
}: {
  onPrevFact: () => void;
  onNextFact: () => void;
}) {
  const searchBarRef = useRef<HTMLInputElement | null>(null);
  const {toggleTheme} = useTheme()

  function onFocusSearchBar() {
    const searchInput = document.getElementById(
      "search-input"
    ) as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onPrevFact();
      } else if (event.key === "ArrowRight") {
        onNextFact();
      } else if (event.ctrlKey && (event.key === "j" || event.key === "J")) {
        event.preventDefault();
        toggleTheme();
      } else if (event.ctrlKey && (event.key === "k" || event.key === "K")) {
        event.preventDefault();
        onFocusSearchBar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrevFact, onNextFact, onFocusSearchBar]);

  return { searchBarRef };
}
