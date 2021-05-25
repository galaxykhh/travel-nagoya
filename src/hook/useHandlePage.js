import { useEffect, useState } from 'react';
import categoryRepository from '../repository/categoryRepository';
import { slideDown, slideUp } from '../style/keyframes';
const NONE = 'none';
const BLOCK = 'block';

export const useHandlePage = (category) => {
    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState();
    const [ovrly, setOvrly] = useState(NONE);
    const [animate, setAnimate] = useState(slideUp);

    const getData = async () => {
        try {
            const { data } = await categoryRepository.handleCategory(category);
            setData(data);
        } catch(err) {
            console.log(err);
            alert('서버에 오류가 있습니다');
        };
    };

    useEffect(() => {
        getData();
    }, []);

    const handleChangeItem = (clickedIndex) => {
        const selected = data[clickedIndex]
        setSelectedData(selected);
        setOvrly(BLOCK);
    };

    const hideOvrly = () => {
        window.scrollTo(0, 0);
        setTimeout(() => setOvrly(NONE), 450);
        setTimeout(() => setAnimate(slideUp), 450);
        setAnimate(slideDown);
    };

    return {
        data,
        selectedData,
        ovrly,
        animate,
        handleChangeItem,
        hideOvrly,
    };
};