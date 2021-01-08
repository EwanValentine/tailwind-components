import * as React from "react";

import Navigation, { Item } from "./navigation";

export const Primary: React.VFC = () => (
  <Navigation>
    <Item>
      <a href="#">About Us</a>
    </Item>
  </Navigation>
);

export default {
  title: "Navigation",
  component: Primary,
};
