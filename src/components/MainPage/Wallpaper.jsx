import React from 'react';
import styled from 'styled-components';
const SRC = '/Image/main-down.png';

function Wallpaper() {
  return (
    <>
    <Image src={SRC} />
    </>
  );
}

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5900px;
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.9) 1%,
      rgba(20, 20, 20, 0.9) 20%,
      rgba(20, 20, 20, 0.8) 100%
  ),
  url(${props => props.src});
  background-size: cover;
  z-index: -1;

  @media only screen and (min-width: 920px) {
    height: 5400px;
  }
`;

export default Wallpaper;