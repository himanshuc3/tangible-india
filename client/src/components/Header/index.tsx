import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Button } from "@progress/kendo-react-buttons";
import { bellIcon, infoCircleIcon } from "@progress/kendo-svg-icons";

import ThemeToggle from "@/components/ThemeToggle";
import Title from "@/components/Title";

import "./index.scss";

const kendokaAvatar =
  "https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png";

export default function Header() {
  return (
    <AppBar className="app-header max-w-4xl mt-20">
      {/* <AppBarSection>
          <Button type="button" fillMode="flat" svgIcon={menuIcon} />
        </AppBarSection> */}

      <AppBarSpacer style={{ width: 4 }} />

      <AppBarSection>
        <Title />
      </AppBarSection>

      <AppBarSpacer style={{ width: 32 }} />

      <AppBarSpacer />

      {/* <AppBarSection className="actions"> */}
      {/* TODO: Replace with svg info icon from KR */}

      {/* </AppBarSection> */}

      <AppBarSection>
        <Button type="button" fillMode="flat" svgIcon={infoCircleIcon}></Button>
        {/* TODO: Replace with svg theme toggle icon from KR */}
        <ThemeToggle />
      </AppBarSection>
    </AppBar>
  );
}
