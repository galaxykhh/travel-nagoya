import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import { Pop } from '../../style/keyframes';

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

const Subtitle = () => {
    return (
        <Container>
            <Fade bottom>
                <Text pt='200px' pb='30px' fs='150px'>名古屋</Text>
            </Fade>
            <Fade top>
                <Text pb='50px' fs='50px'>[なごや]</Text>
                <Text pb='10px' fs='50px'>🇯🇵</Text>
                <SPACE pt='90px' pb='80px' />
                <PlzScroll> 내려서 더 보기 </PlzScroll>
                <Arrow>↓</Arrow>
            </Fade>
            <SPACE pb='180px;' />
            <Fade top>
                <Text pl='570px' pb='350px' fs='40px' >🤔 나고야는 어디인가요?</Text>
            </Fade>
            <Fade top>
                <Text pr='500px' fs='40px'>나고야는 일본 <FocusWord>아이치현</FocusWord>에<br /></Text>
                <Text pr='500px' fs='40px'>위치한 도시이며, 일본에서<br /></Text>
                <Text pr='500px' fs='40px'><FocusWord>인구가 4번째로 많은 도시</FocusWord>입니다!</Text>
            </Fade>
            <Rotate left bottom>
                <Text pr='140px' pb='350px' fs='30px'>(약 230만 명)</Text>
            </Rotate>
            <Fade top>
                <Text pl='570px' pb='350px' fs='40px' >😮 생각보다 큰 도시네요!</Text>
            </Fade>
            <Fade top>
                <Text pr='500px' fs='40px'>맞습니다! 큰 도시이면서도<br /></Text>
                <Text pr='500px' fs='40px'>
                    <FocusWord>전통적인 모습</FocusWord>과
                    <FocusWord> 현대적인 모습</FocusWord>을<br />
                </Text>
                <Text pr='500px' fs='40px'><FocusWord>둘 다 가진 도시</FocusWord>
                    이기죠 하죠
                </Text>
            </Fade>
            <PhotoFlex>
                <Fade bottom>
                    {SubImgs.map(list => (
                        <ImgBox list={list} key={list.id} />
                    ))}
                </Fade>
            </PhotoFlex>
            <Fade bottom>
                <Text pb='20px' fs='40px'>또, 다른 대도시들과</Text>
                <Text pb='20px' fs='40px' >교통이 편리하게 이어져 있어</Text>
                <Text pb='20px' fs='40px' >
                    일본
                    <FocusWord> 여행지의 출발점</FocusWord>
                    으로도
                </Text>
                <Text pb='20px' fs='40px' >좋은 선택이 될 것입니다!</Text>
            </Fade>
            <SPACE pt='100px' pb='250px' />
            <Fade top>
                <Text pb='20px' fs='40px'> 당신의 여행을 책임질</Text>
                <Text pb='20px' fs='40px'><FocusWord>맛있는 음식</FocusWord>들이</Text>
                <Text pb='20px' fs='40px'>정말 많다는 것도</Text>
                <Text pb='20px' fs='40px'>빼놓을 수 없는 장점이죠!</Text>
            </Fade>
            <SPACE pb='400px' />
            <Fade bottom>
                <Text pb='30px' fs='60px'>당신을</Text>
                <Text pb='30px' fs='60px'>나고야로</Text>
                <Text pb='30px' fs='60px'>초대합니다!</Text>
            </Fade>
        </Container>
    );
};

export default Subtitle;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SPACE = styled.div`
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
`;

const Text = styled.div`
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

const PlzScroll = styled(Arrow)`
    font-size: 30px;  
`;

const ImgBox = ({ list }) => {
    const { path } = list;
    return (
        <Photo src={path} />
    );
};

const PhotoFlex = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 200px;
    padding-bottom: 250px;  
    @media only screen and (max-width: 920px) {
        flex-direction: column;
    };
`;

const Photo = styled.img`
    width: 350px;
    height: 200px;
    padding-left: 30px;
    padding-bottom: 30px;
`;