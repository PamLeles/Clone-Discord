import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/Logo.svg";

import { Button } from "./styles";

const ServerButton = ({ selected, isHome, hasNotifications, mentions }) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
};

ServerButton.propTypes = {
  selected: PropTypes.bool,
  isHome: PropTypes.bool,
  hasNotifications: PropTypes.bool,
  mentions: PropTypes.number,
};

export default ServerButton;
