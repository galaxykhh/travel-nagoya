import React from 'react';
import styled, { keyframes } from 'styled-components';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

const SubImgs = [
  {
    id: 1,
    path: '/Image/sub1.png',
  },
  {
    id: 2,
    path: '/Image/sub2.jpg',
  },
  {
    id: 3,
    path: '/Image/sub3.jpg',
  },
];

const Pop = keyframes`
  from {
    transform: scale(1.0);
  }
  to {
    transform: scale(1.1);
  }
`;

const SPACE = styled.div`
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
`;

const MENT = styled.div`
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  font-size: ${props => props.fs};
  color: white;
  white-space: nowrap;

  @media only screen and (max-width: 920px) {
    padding-left: 0px;
    padding-right: 0px;
    white-space: normal;
  }
`;

const FocusWord = styled.strong`
  font-weight: bold;
  color: #f9c00c;
`;

const Arrow = styled.div`
  color: #838080;
  font-size: 30px;
  font-weight: bolder;
  animation: ${Pop} .5s alternate infinite;
`;

const PlzScrl = styled(Arrow)`
  font-size: 30px;  
`;

const ImgBox = ({ list }) => {
  const { path } = list;
  return (
    <Photo src={path} />
  );
}

const PhotoFlex = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 200px;
  padding-bottom: 250px;
  
  @media only screen and (max-width: 920px) {
    flex-direction: column;
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 200px;
  padding-left: 30px;
  padding-bottom: 30px;
`;

function Subtitle() {
  return (
    <>
      <Fade bottom>
        <MENT pt='200px' pb='30px' fs='150px'>名古屋</MENT>
      </Fade>
      <Fade top>
        <MENT pb='50px' fs='50px'>[なごや]</MENT>
        <MENT pb='10px' fs='50px'>🇯🇵</MENT>
        <SPACE pt='90px' pb='80px' />
        <PlzScrl> 내려서 더 보기 </PlzScrl>
        <Arrow>↓</Arrow>
      </Fade>
      <SPACE pb='180px;' />
      <Fade top>
        <MENT pl='570px' pb='350px' fs='40px' >🤔 나고야는 어디인가요?</MENT>
      </Fade>
      <Fade top>
        <MENT pr='500px' fs='40px'>나고야는 일본 <FocusWord>아이치현</FocusWord>에<br /></MENT>
        <MENT pr='500px' fs='40px'>위치한 도시이며, 일본에서<br /></MENT>
        <MENT pr='500px' fs='40px'><FocusWord>인구가 4번째로 많은 도시</FocusWord>입니다!</MENT>
      </Fade>
      <Rotate left bottom>
        <MENT pr='140px' pb='350px' fs='30px'>(약 230만 명)</MENT>
      </Rotate>
      <Fade top>
        <MENT pl='570px' pb='350px' fs='40px' >😮 생각보다 큰 도시네요!</MENT>
      </Fade>
      <Fade top>
        <MENT pr='500px' fs='40px'>맞습니다! 큰 도시이면서도<br /></MENT>
        <MENT pr='500px' fs='40px'>
          <FocusWord>전통적인 모습</FocusWord>과
          <FocusWord> 현대적인 모습</FocusWord>을<br />
        </MENT>
        <MENT pr='500px' fs='40px'><FocusWord>둘 다 가진 도시</FocusWord>
          이기죠 하죠
        </MENT>
      </Fade>
      <PhotoFlex>
        <Fade bottom>
          {SubImgs.map(list => (
            <ImgBox list={list} key={list.id} />
          ))}
        </Fade>
      </PhotoFlex>
      <Fade bottom>
        <MENT pb='20px' fs='40px'>또, 다른 대도시들과</MENT>
        <MENT pb='20px' fs='40px' >교통이 편리하게 이어져 있어</MENT>
        <MENT pb='20px' fs='40px' >
          일본
          <FocusWord> 여행지의 출발점</FocusWord>
          으로도
          </MENT>
        <MENT pb='20px' fs='40px' >좋은 선택이 될 것입니다!</MENT>
      </Fade>
      <SPACE pt='100px' pb='250px' />
      <Fade top>
        <MENT pb='20px' fs='40px'> 당신의 여행을 책임질</MENT>
        <MENT pb='20px' fs='40px'><FocusWord>맛있는 음식</FocusWord>들이</MENT>
        <MENT pb='20px' fs='40px'>정말 많다는 것도</MENT>
        <MENT pb='20px' fs='40px'>빼놓을 수 없는 장점이죠!</MENT>
      </Fade>
      <SPACE pb='400px' />
      <Fade bottom>
        <MENT pb='30px' fs='60px'>당신을</MENT>
        <MENT pb='30px' fs='60px'>나고야로</MENT>
        <MENT pb='30px' fs='60px'>초대합니다!</MENT>
      </Fade>
    </>
  );
}

export default Subtitle;