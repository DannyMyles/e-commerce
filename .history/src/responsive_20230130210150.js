import {css} from 'styled-components';

export const mobile = (props) => {
    return css`
        @media screen (max-width: 380px){
            
            ${props}
        }
    `;
}