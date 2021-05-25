import React from 'react';
import styled from 'styled-components';
import ScreenViewer from '../../publicComponents/ScreenViewer';

const Wrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props => props.ovrly};
    opacity: 1;
`;

const FLEX = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const CTNR = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    margin-top: 35px;
    padding: 30px;
    text-decoration: none;
    color: black;
    transition:transform .5s ease;
    &:hover {
        transform:scale(1.03);
    }
`;

const H1 = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 30px;
    @media only screen and (max-width: 540px) {
        font-size: 20px;
    }
`;

const H2 = styled.div`
    margin-top: 20px;
    font-size: 25px;
    white-space: pre-wrap;
`;

const Photo = styled.img`
    border-radius: 20px;
    width: 300px;
    height: 230px;
`;

const ItemContainer = ({ title, photo1, memo1,
                                photo2, memo2,
                                photo3, memo3,
                                photo4, memo4 }) => {
    return (
        <>
            <H1> {title} </H1>
            <CTNR>
                <ItemBox>
                    <Photo src={photo1} />
                    <H2> {memo1} </H2>
                </ItemBox>
                <ItemBox>
                    <Photo src={photo2} />
                    <H2> {memo2} </H2>
                </ItemBox>
            </CTNR>
            <CTNR>
                <ItemBox>
                    <Photo src={photo3} />
                    <H2> {memo3} </H2>
                </ItemBox>
                <ItemBox>
                    <Photo src={photo4} />
                    <H2> {memo4} </H2>
                </ItemBox>
            </CTNR>
        </>
    );
}

const InfoBox = ({ title, photo1, memo1,
                          photo2, memo2,
                          photo3, memo3,
                          photo4, memo4, modal, ovrly, hideOvrly, animate }) => {

    return (
        <Wrap ovrly={ovrly} onClick={hideOvrly} >
            <FLEX >
                <ScreenViewer modal={modal}
                              animate={animate} >

                    <ItemContainer title={title}
                                   memo1={memo1}
                                   photo1={photo1}
                                   memo2={memo2}
                                   photo2={photo2}
                                   memo3={memo3}
                                   photo3={photo3}
                                   memo4={memo4}
                                   photo4={photo4}
                    />

                </ScreenViewer>
            </FLEX>
        </Wrap >
    );
}


export default InfoBox;