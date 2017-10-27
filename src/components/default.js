import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const defaultStyles = {
  border: "2px dashed #ccc",
  textAlign: "center",
  padding: "50px"
};

const statusTargetedStyles = {
  ready: {
    backgroundColor: '#fff'
  },
  dragenter: {
    backgroundColor: '#eee'
  },
  dragover: {
    backgroundColor: '#f5f5f5'
  },
  drop: {
    backgroundColor: '#ccc'
  }
};

const DefaultComponent = ({ status }) => (
  <div style={{...defaultStyles, ...statusTargetedStyles[status]}}>
    <p>Click or drag n drop your file(s) here.</p>
  </div>
);

DefaultComponent.propTypes = {
  status: PropTypes.string.isRequired
};

export default DefaultComponent;
