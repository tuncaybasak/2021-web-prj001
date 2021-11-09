import * as React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import { Progress } from 'antd';

export default function Indicator({ title, percent, status }) {
  return (
    <div>
      <h3>{title}</h3>
      <Progress type="circle" percent={percent} status={status} />
    </div>
  );
}

Indicator.propTypes = {
  title: PropTypes.string,
  percent: PropTypes.number,
  status: PropTypes.string
};
