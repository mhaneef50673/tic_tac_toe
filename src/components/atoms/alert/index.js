import React from "react";
import PropTypes from 'prop-types';

import "./alert.scss";

const BLOCK_NAME = "alert";

const Alert = (props) => {
  const { type, msg } = props;
  return <div className={`${BLOCK_NAME} ${type}`}>{msg}</div>;
};

Alert.propTypes = {
  type: PropTypes.string,
  msg: PropTypes.string,
}

export default Alert;
