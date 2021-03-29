import React from 'react';
import InfoLists from './InfoLists';

const InfoListBox = ({ foodData, hiddenState }) => {
  return (
    <>
      {foodData.map(list => (
        <InfoLists list={list}
          key={list.id}
          hidden={hiddenState} />
      ))}
    </>
  );
}

export default InfoListBox;