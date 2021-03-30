import React from 'react';
import styled from 'styled-components';

const BBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
    margin-top: 90px;
    padding-left: 30px;
    padding-right: 30px;
    border: 1px solid #8b8787;
    background-color: #dcdee2;
    width: 80%;
    height: 250px;
    &:hover {
        background-color: #d2d4d8;
    }
`;

const SBox = styled.div`
    width: 514px;
    height: 225px;
    flex-direction: column;
`;

const Img = styled.img`
    border-radius: 30px;
    border: 1px solid #747373;
    width: 160px;
    height: 160px;
`;

const H2 = styled.div`
    font-size: 18px;
    margin-top: 20px;
    text-align: start;
    white-space: pre-wrap;
`;

const ReviewBox = ({imgPath, restName, restSub}) => {
    return (
        <>
            <div style={{ marginTop: '80px', fontSize: '25px' }} >아래 가게들은 별점이 가장 높은 가게입니다!</div>
            <BBox>
                <Img src={imgPath} />
                <SBox>
                    <div style={{fontSize: '20px', fontWeight: '600', whiteSpace: 'pre-wrap'}}> {restName} </div>
                    <H2> {restSub} </H2>
                </SBox>
            </BBox>
        </>
    );
}
export default ReviewBox;