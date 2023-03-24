import React from "react";

import ServeList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";

import { Grid } from "./styles";

const Layout = () => {
  return (
    <Grid>
      <ServeList />
      <ServerName />
      <ChannelInfo />
    </Grid>
  );
};

export default Layout;
