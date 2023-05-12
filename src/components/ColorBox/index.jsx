import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

ColorBox.propTypes = {};

const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
const getRandomColor = () => {
  const randomIndex = Math.trunc(Math.random() * 5);
  return colorList[randomIndex];
};

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const getColor = localStorage.getItem('color_value') || 'deeppink';
    return getColor;
  });
  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('color_value', newColor);
  };

  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}

export default ColorBox;
