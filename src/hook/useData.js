import { useEffect, useState } from 'react';
import categoryRepository from '../repository/categoryRepository';
import { slideDown, slideUp } from '../style/keyframes';
const NONE = 'none';
const BLOCK = 'block';

export const useData = (category) => {
    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState();
    const [overlay, setOverlay] = useState(NONE);
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
        setOverlay(BLOCK);
    };

    const hideOverlay = () => {
        window.scrollTo(0, 0);
        setTimeout(() => setOverlay(NONE), 450);
        setTimeout(() => setAnimate(slideUp), 450);
        setAnimate(slideDown);
    };

    return {
        data,
        selectedData,
        overlay,
        animate,
        handleChangeItem,
        hideOverlay,
    };
};