import { keyframes } from 'styled-components';

export const slideUp = keyframes`
    from {
        margin-top: 30px;
        opacity: 0;
    }
    to {
        margin-top: 0px;
        opacity: 1;
    }
`;