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
    <AppBar>
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
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-primary font-mono">0</div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Tangible India
              </h1>
              <p className="text-sm text-muted-foreground">
                A numerical journey through India's facts
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
