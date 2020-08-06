import React from "react";

import "./alert.scss";

const BLOCK_NAME = "alert";

const Alert = (props) => {
  const { type, msg } = props;
  return <div className={`${BLOCK_NAME} ${type}`}>{msg}</div>;
};

export default Alert;
