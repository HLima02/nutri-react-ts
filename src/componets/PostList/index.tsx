import React from 'react';

import {LiContainer} from './listStyle';

export default function PostList({itemList}:any) {
  console.log(itemList)
  return (
    <LiContainer color={itemList.capa} >
      <div className="mask-list">
        <h2>{itemList.titulo}</h2>
        <label>{itemList.categoria}</label>
        <p>{itemList.subtitulo}</p>
      </div>
    </LiContainer>
  )
}
