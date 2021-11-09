import * as React from 'react';
import { Fragment, useRef, useState } from 'react';
import { render } from 'react-dom';

import 'antd/dist/antd.css';
import { Row, Col, Select } from 'antd';
const { Option } = Select;

import { Module } from './models/enums';

import MySmpComp001, {
  MySmpComp002,
  MySmpComp003,
  MySmpComp004,
  MySmpComp005,
  MySmpComp006,
} from './views/react/samples/smp1';

import { MyStateCmp001 } from './views/react/samples/smp2';

import { MyTimeLine01, MyTimeLine02 } from './views/antdesign/ant001';
import MyAvatar01 from './views/antdesign/ant002';
import MyProgress01 from './views/antdesign/ant003';

import { data001 } from './data/data001';
import { data002 } from './data/data002';

// Bizchart
import { MyChart001 } from './views/bizChart/MyChart001';
import MyChart002 from './views/bizChart/MyChart002';
import MyChart003 from './views/bizChart/MyChart003';
import MyChart004 from './views/bizChart/MyChart004';

// TypeScript
import { MyTSComp001 } from './views/typescript/ts001';
import { MyTSComp002 } from './views/typescript/ts002';
import { MyTSComp003 } from './views/typescript/ts003';
import { MyTSComp004 } from './views/typescript/ts004';
import { MyTSComp005 } from './views/typescript/ts005';
import { MyTSComp006 } from './views/typescript/ts006';
import { MyTSComp007 } from './views/typescript/ts007';
import { MyTSComp008 } from './views/typescript/ts008';

// Grid Layout
import { MyGridLayout001 } from './views/gridLayout/samples/smp1';
import { MyGridLayout002 } from './views/gridLayout/samples/smp2';

// Javascript
import { MyJSComp001 } from './views/js/js001';
import { MyJSComp002 } from './views/js/js002';

const App = () => {
  const selectedModul = useRef(Module.None);

  const [options, setOptions] = useState([]);
  let [selectedProject, setSelectedProject] = useState('');

  function ecModul_onChange(value: any) {
    const selectedValue = Number(value);
    selectedModul.current = selectedValue;

    if (selectedValue === Module.React) {
      setOptions([
        { value: '101', label: 'Prop Samples' },
        { value: '102', label: 'State' },
        { value: '103', label: 'react-smp3' },
        { value: '104', label: 'react-smp4' },
      ]);
    } else if (selectedValue === Module.Javascript) {
      setOptions([
        { value: '201', label: 'Reduce' },
        { value: '202', label: 'Spread operator' },
      ]);
    } else if (selectedValue === Module.TypeScript) {
      setOptions([
        { value: '301', label: 'Arrays' },
        { value: '302', label: 'Data Types' },
        { value: '303', label: 'Statements' },
        { value: '304', label: 'Functions' },
        { value: '305', label: 'map & Map' },
        { value: '306', label: 'interface' },
        { value: '307', label: 'class' },
        { value: '308', label: 'Generics' },
      ]);
    } else if (selectedValue === Module.AntDesign) {
      setOptions([
        { value: '401', label: 'Timeline' },
        { value: '402', label: 'Avatar' },
        { value: '403', label: 'Progress' },
        { value: '404', label: 'ant-smp4' },
      ]);
    } else if (selectedValue === Module.Bizchart) {
      setOptions([
        { value: '501', label: 'Chart001' },
        { value: '502', label: 'Chart002' },
        { value: '503', label: 'Chart003' },
        { value: '504', label: 'Chart004' },
      ]);
    } else if (selectedValue === Module.GridLayout) {
      setOptions([
        { value: '701', label: 'GridLayout001' },
        { value: '702', label: 'GridLayout002' },
      ]);
    } else {
      setOptions([]);
    }
  }

  const ecProject_onChange = (value: any) => {
    setSelectedProject(value.toString());
  };

  const getSampleProject = () => {
    if (selectedModul.current === Module.None) {
      return <h1>None</h1>;
    } else if (selectedModul.current === Module.React) {
      if (selectedProject === '101') {
        return (
          <Fragment>
            <MySmpComp001 />
            <MySmpComp002 />
            <MySmpComp003
              titleText={'My sample Component'}
              subtitleText={'003'}
            />
            <MySmpComp004
              titleText={'My sample Component'}
              subtitleText={'004'}
              data={data001}
            />
            <MySmpComp005
              titleText={'My sample Component'}
              subtitleText={'005'}
            />
            <MySmpComp005
              titleText={'My sample Component'}
              subtitleText={'006'}
            />
          </Fragment>
        );
      } else if (selectedProject === '102') {
        return <MyStateCmp001 />;
      } else {
        return <h1>React</h1>;
      }
    } else if (selectedModul.current === Module.Javascript) {
      if (selectedProject === '201') {
        return <MyJSComp001 />;
      } else if (selectedProject === '202') {
        return <MyJSComp002 />;
      } else {
        return <h1>Javascript</h1>;
      }
    } else if (selectedModul.current === Module.TypeScript) {
      if (selectedProject === '301') {
        return <MyTSComp001 />;
      } else if (selectedProject === '302') {
        return <MyTSComp002 />;
      } else if (selectedProject === '303') {
        return <MyTSComp003 />;
      } else if (selectedProject === '304') {
        return <MyTSComp004 />;
      } else if (selectedProject === '305') {
        return <MyTSComp005 data={data002} />;
      } else if (selectedProject === '306') {
        return <MyTSComp006 />;
      } else if (selectedProject === '307') {
        return <MyTSComp007 />;
      } else if (selectedProject === '308') {
        return <MyTSComp008 />;
      } else {
        return <h1>TypeScript</h1>;
      }
    } else if (selectedModul.current === Module.AntDesign) {
      if (selectedProject === '201') {
        return (
          <Fragment>
            <MyTimeLine01 />
            <MyTimeLine02 title="My New Time Line" />
          </Fragment>
        );
      } else if (selectedProject === '402') {
        return <MyAvatar01 />;
      } else if (selectedProject === '403') {
        return <MyProgress01 title="My Progress" />;
      } else {
        return <h1>AntDesign</h1>;
      }
    } else if (selectedModul.current === Module.Bizchart) {
      if (selectedProject === '501') {
        return <MyChart001 />;
      } else if (selectedProject === '502') {
        return <MyChart002 />;
      } else if (selectedProject === '503') {
        return <MyChart003 />;
      } else if (selectedProject === '504') {
        return <MyChart004 />;
      } else {
        return <h1>Bizchart</h1>;
      }
    } else if (selectedModul.current === Module.GridLayout) {
      if (selectedProject === '701') {
        return <MyGridLayout001 />;
      } else if (selectedProject === '702') {
        return <MyGridLayout002 />;
      } else {
        return <h1>GridLayout</h1>;
      }
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <Row>
        <Col span={12}>
          <Select
            style={{ width: 200 }}
            placeholder="Select a Modul"
            onChange={ecModul_onChange}
          >
            <Option value="1">React</Option>
            <Option value="2">Javascript</Option>
            <Option value="3">TypeScript</Option>
            <Option value="4">AntDesign</Option>
            <Option value="5">Bizchart</Option>
            <Option value="6">AgGrid</Option>
            <Option value="7">Grid Layout</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Select
            style={{ width: 200 }}
            placeholder="Select a Project"
            options={options}
            onChange={ecProject_onChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ margin: 20 }}> {getSampleProject()} </div>
        </Col>
      </Row>
    </div>
  );
};

render(<App />, document.getElementById('root'));
