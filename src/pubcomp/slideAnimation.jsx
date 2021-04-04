import { keyframes } from 'styled-components';

export const slideDown = keyframes`
    from {
        margin-left: 200px;
        opacity: 0;
    }
    to {
        margin-left: 0px;
        opacity: 1;
    }
`;

export const slideLeft = keyframes`
    from {
        margin-right: 200px;
        opacity: 0;
    }
    to {
        margin-right: 0px;
        opacity: 1;
    }
`;