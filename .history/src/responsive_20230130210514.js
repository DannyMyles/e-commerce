import {css} from 'styled-components';
 import 
export const mobile = (props) => {
    return css`
        @media screen and (max-width: 380px){
            ${props}
        }
    `;
}