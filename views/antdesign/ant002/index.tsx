import * as React from 'react';

import 'antd/dist/antd.css';
import { Divider, Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function MyAvatar01() {
  return (
    <div>
      <Divider plain>Sample Avatars</Divider>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
      <Divider plain>Sample Avatars 2</Divider>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
      <Divider plain>With Badge</Divider>
      <span className="avatar-item">
        <Badge count={10}>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <Badge dot>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </span>
    </div>
  );
}
