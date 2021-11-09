import * as React from 'react';
import PropTypes from 'prop-types';

//Sample component return only a statement
function MySmpComp001() {
  return <h3>My sample 001 Component </h3>;
}

export default MySmpComp001;

// Sample component
export const MySmpComp002 = () => {
  const titleText = `My sample 002 Component`;
  return <h3>{titleText}</h3>;
};

//Props usage with function
export function MySmpComp003(props) {
  const { titleText, subtitleText } = props;

  return (
    <div>
      <h3>{titleText}</h3>
      <h3>{subtitleText}</h3>
    </div>
  );
}

//Props usage with const
export const MySmpComp004 = (props) => {
  const { titleText, subtitleText, data } = props;

  return (
    <div>
      <h3>{titleText}</h3>
      <h3>{subtitleText}</h3>
      {data.map((veri) => (
        <p>{veri.name}</p>
      ))}
    </div>
  );
};

MySmpComp004.propTypes = {
  titleText: PropTypes.string,
  subtitleText: PropTypes.string,
};

//Props usage with function
export function MySmpComp005({ titleText, subtitleText }) {
  return (
    <div>
      <h3>{titleText}</h3>
      <h3>{subtitleText}</h3>
    </div>
  );
}

interface ITableView {
  titleText: string;
  subtitleText: string;
}

//Props usage with interface
export function MySmpComp006({ titleText, subtitleText }: ITableView) {
  return (
    <div>
      <h3>{titleText}</h3>
      <h3>{subtitleText}</h3>
    </div>
  );
}
