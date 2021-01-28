import React from 'react';
// input num
// output: component
const Spinner = ({ size }) => {
  const style = { height: size, width: size };
  return <div className="spinner" style={style}></div>;
};

export default Spinner;
