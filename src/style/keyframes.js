import { keyframes } from 'styled-components';

export const fadeUp = keyframes`
    from {
        opacity: 0;
        padding-top: 65px;
    };
    to {
        opacity: 1;
        padding-top: 0px;
    };
`;

export const Pop = keyframes`
    from {
        transform: scale(1.0);
    }
    to {
        transform: scale(1.1);
    }
`;

export const slideUp = keyframes`
    from {
        margin-top: 1400px;
        opacity: 1;
    }
    to {
        margin-top: 100px;
        opacity: 1;
    }
`;

export const slideDown = keyframes`
    from {
        margin-top: 100px;
        opacity: 1;
    }
    to {
        margin-top: 1400px;
        opacity: 1;
    }
`;

export const fadeSlideDown = keyframes`
    from {
        margin-left: 200px;
        opacity: 0;
    }
    to {
        margin-left: 0px;
        opacity: 1;
    }
`;

export const fadeSlideLeft = keyframes`
    from {
        margin-right: 200px;
        opacity: 0;
    }
    to {
        margin-right: 0px;
        opacity: 1;
    }
`;