import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServeList = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={2} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={6} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServeList;
