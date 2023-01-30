import {css} from 'styled-components';

export const mobile = (props) => {
    return css`
        @media screen and (min-width: 1400px)
            
            ${props}
        }
    `;
}