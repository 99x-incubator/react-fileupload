import React from 'react';
import classnames from 'classnames';
import './default.css';

const DefaultComponent = ({ status }) => (
  <div className={ classnames('dropzone', `${status}`) }>
    <p>Click or drag n' drop your file(s) here.</p>
  </div>
);

export default DefaultComponent;