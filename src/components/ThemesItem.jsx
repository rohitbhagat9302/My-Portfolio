import React from 'react';

const ThemesItem = ({color, img, changeColor}) => {
  return <img src={img} className='theme__img' onClick={() => {changeColor(color)}}></img>
}

export default ThemesItem;
