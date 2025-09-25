import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import {
  Tooltip,
  Popover,
  PopoverActionsBar,
} from "@progress/kendo-react-tooltip";
import { Button } from "@progress/kendo-react-buttons";
import {
  bellIcon,
  infoSolidIcon,
  codeIcon,
  arrowRightIcon,
  arrowLeftIcon,
  caretAltUpIcon,
} from "@progress/kendo-svg-icons";

import ThemeToggle from "@/components/ThemeToggle";
import Title from "@/components/Title";

import "./index.scss";

const kendokaAvatar =
  "https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png";

export default function Header() {
  const infoAnchor = React.useRef(null);
  const [show, setShow] = React.useState(false);
  return (
    <AppBar className="app-header max-w-4xl mt-20">
      <Popover
        show={show}
        anchor={infoAnchor.current && infoAnchor.current.element}
        position={"bottom"}
        title={"Keyboard Shortcuts"}
        className="info-popover "
      >
        <ul className="flex flex-col gap-2 info-list">
          <li>
            <span>
              <Button svgIcon={caretAltUpIcon} disabled={true}>
                + K
              </Button>
            </span>{" "}
            Focus Search Bar
          </li>
          <li>
            <span>
              <Button svgIcon={caretAltUpIcon} disabled={true}>
                + J
              </Button>
            </span>{" "}
            Toggle Theme
          </li>
          <li>
            <span>
              <Button svgIcon={arrowLeftIcon} disabled={true} />
            </span>{" "}
            Next Fact
          </li>
          <li>
            <span>
              <Button svgIcon={arrowRightIcon} disabled={true} />
            </span>{" "}
            Previous Fact
          </li>
        </ul>
      </Popover>
      {/* <AppBarSection>
          <Button type="button" fillMode="flat" svgIcon={menuIcon} />
        </AppBarSection> */}

      <AppBarSpacer style={{ width: 4 }} />

      <AppBarSection>
        <Title />
      </AppBarSection>

      <AppBarSpacer style={{ width: 32 }} />

      <AppBarSpacer />

      {/* </AppBarSection> */}

      <AppBarSection>
        <Button
          type="button"
          fillMode="flat"
          className="text-card-foreground"
          svgIcon={infoSolidIcon}
          ref={infoAnchor}
          onClick={() => setShow(!show)}
        ></Button>
        {/* TODO: Replace with svg theme toggle icon from KR */}
        <ThemeToggle />
        <Tooltip anchorElement="target" position="top">
          <Button
            type="button"
            fillMode="flat"
            svgIcon={codeIcon}
            onClick={() =>
              window.open(
                "https://github.com/himanshuc3/tangible-india/",
                "_blank"
              )
            }
            title="Contribute your ideas, facts or questions on GitHub"
            className="text-card-foreground"
          ></Button>
        </Tooltip>
      </AppBarSection>
    </AppBar>
  );
}
