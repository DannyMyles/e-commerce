import {css} from 'styled-components';
 import { css } 
export const mobile = (props) => {
    return css`
        @media screen and (max-width: 380px){
            ${props}
        }
    `;
}