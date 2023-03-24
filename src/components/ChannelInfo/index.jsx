import React from "react";

import * as Styled from "./styles";

const ChannelInfo = () => {
  return (
    <Styled.Container>
      <Styled.HashtagIcon />

      <Styled.Title>chat-livre</Styled.Title>

      <Styled.Separator />

      <Styled.Description> Canal aberto para conversas</Styled.Description>
    </Styled.Container>
  );
};

export default ChannelInfo;
