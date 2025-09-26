import { Button } from "@progress/kendo-react-buttons";
import { plusOutlineIcon, minusOutlineIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";

import { useTheme } from "@/hooks/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      fillMode="flat"
      className="text-card-foreground"
      onClick={toggleTheme}
      svgIcon={theme === "light" ? minusOutlineIcon : plusOutlineIcon}
    ></Button>
  );
}
