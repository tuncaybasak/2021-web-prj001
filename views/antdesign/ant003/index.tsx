import React from 'react';

import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import Indicator from './indicator';

export default function MyProgress01({ title }) {
  return (
    <div>
      <Card title={title} style={{ width: 600 }}>
        <Row>
          <Col span={8}>
            <Indicator title={'CURRENT ACCOUNT'} percent={80} status="normal" />
          </Col>
          <Col span={8}>
            <Indicator title={'CREDIT CARD'} percent={80} status="exception" />
          </Col>
          <Col span={8}>
            <Indicator title={'PERSONAL LOAN'} percent={100} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
